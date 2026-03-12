<template>
  <div
    class="vk-select"
    :class="{'is-disabled': disabled, 'is-multiple': multiple }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <Tooltip
      placement="bottom-start"
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-outside="controlDropdown(false)"
      manual
    >
      <div class="vk-select__wrapper">
        <div class="vk-select__tags" v-if="multiple && selectedTags.length" @click.stop>
          <span v-for="option in selectedTags" :key="option.value" class="vk-select__tag">
            <span class="vk-select__tag-text">{{ option.label }}</span>
            <Icon icon="xmark" @click.stop="removeTag(option)" />
          </span>
          <span v-if="hasMoreTags" class="vk-select__tag">
            <span class="vk-select__tag-text">+{{ selectedTags.length - maxTagsToShow }}</span>
          </span>
        </div>
        <Input
          :disabled="disabled"
          :placeholder="calculatedPlaceholder"
          ref="inputRef"
          :readonly="!filterable || !isDropdownShow"
          v-model="states.inputValue"
          @input="debounceOnFilter"
          @keydown="handleKeydown"
        >
          <template #suffix>
            <Icon
              icon="circle-xmark"
              v-if="showClearIcon"
              class="vk-input__clear"
              @click.stop="onClear"
              @mousedown.prevent="NOOP"
            />
            <Icon v-else icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }"/>
          </template>
        </Input>
      </div>
      <template #content>
        <div v-if="states.loading" class="vk-select__loading">
          <Icon  icon="spinner" spin></Icon>
        </div>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': isItemSelected(item),
                'is-highlighted': states.highlightIndex === index
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label"/>
              <Icon icon="check" class="vk-select__item-selected-icon" v-if="isItemSelected(item) && multiple"/>
            </li>
          </template>
          <template v-if="filterable && filteredOptions.length === 0 && !states.loading">
            <li style="text-align: center;">No Data</li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import RenderVnode from '../Common/RenderVnode'
import { ref, reactive, computed, watch } from 'vue'
import type { Ref } from 'vue'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import type { InputInstance } from '../Input/types'
import { isFunction, debounce } from 'lodash-es'

const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}

const findOptions = (values: string[]) => {
  return values.map(value => findOption(value)).filter(option => option !== null) as SelectOption[]
}

defineOptions({
  name:'VKSelect'
})

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  multiple: false,
  collapseTags: false
})

const timeout = computed(() => props.remote ? 500 : 0)
const emits = defineEmits<SelectEmits>()

// 初始化选中项
let initialOption = null
let initialOptions: SelectOption[] = []

if (props.multiple && Array.isArray(props.modelValue)) {
  initialOptions = findOptions(props.modelValue)
} else if (!props.multiple && typeof props.modelValue === 'string') {
  initialOption = findOption(props.modelValue)
}

const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  selectedOptions: initialOptions,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
})

const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}

const filteredOptions = ref(props.options)
watch(() => props.options, (newOptions) => {
  filteredOptions.value = newOptions
})

// 添加watch监听props.modelValue的变化
watch(() => props.modelValue, (newValue) => {
  if (props.multiple && Array.isArray(newValue)) {
    states.selectedOptions = findOptions(newValue)
    states.inputValue = ''
  } else if (!props.multiple && typeof newValue === 'string') {
    const newOption = findOption(newValue)
    states.selectedOption = newOption
    states.inputValue = newOption ? newOption.label : ''
  }
})

// 计算实际显示的placeholder
const calculatedPlaceholder = computed(() => {
  if (props.multiple) {
    if (states.selectedOptions.length > 0) {
      return ''
    }
    return props.placeholder
  }

  return (props.filterable && states.selectedOption && isDropdownShow.value)
    ? states.selectedOption.label : props.placeholder
})

// 多选模式下最多显示的标签数量
const maxTagsToShow = 3

// 处理标签显示
const selectedTags = computed(() => {
  if (!props.multiple) return []
  if (props.collapseTags && states.selectedOptions.length > maxTagsToShow) {
    return states.selectedOptions.slice(0, maxTagsToShow)
  }
  return states.selectedOptions
})

// 是否有更多标签未显示
const hasMoreTags = computed(() => {
  return props.collapseTags && states.selectedOptions.length > maxTagsToShow
})

// 检查选项是否被选中
const isItemSelected = (item: SelectOption) => {
  if (props.multiple) {
    return states.selectedOptions.some(option => option.value === item.value)
  }
  return states.selectedOption?.value === item.value
}

// 移除已选标签
const removeTag = (option: SelectOption) => {
  if (props.disabled) return

  const newSelectedOptions = states.selectedOptions.filter(item => item.value !== option.value)
  states.selectedOptions = newSelectedOptions

  const newValues = newSelectedOptions.map(option => option.value)
  emits('remove-tag', option.value)
  emits('change', newValues)
  emits('update:modelValue', newValues)
}

const showClearIcon = computed(() => {
  // * hover 上去
  // * props.clearable 为 true
  // 必须要有选择过的选项
  // Input 的值不能为空，或者多选时有选中项
  return props.clearable
    && states.mouseHover
    && ((!props.multiple && states.selectedOption && states.inputValue.trim() !== '')
        || (props.multiple && states.selectedOptions.length > 0))
})

const onClear = () => {
  if (props.multiple) {
    states.selectedOptions = []
    emits('change', [])
    emits('update:modelValue', [])
  } else {
    states.selectedOption = null
    states.inputValue = ''
    emits('change', '')
    emits('update:modelValue', '')
  }
  emits('clear')
}

const controlDropdown = (show: boolean) => {
  if(show){
    if(props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    if(props.filterable){
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  }else{
    tooltipRef.value.hide()
    if(props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
    states.highlightIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const handleKeydown = (e: KeyboardEvent) => {
  switch(e.key){
    case 'Enter':
      if(!isDropdownShow.value) controlDropdown(true)
      else {
        if(states.highlightIndex > -1 && filteredOptions.value[states.highlightIndex]){
          itemSelect(filteredOptions.value[states.highlightIndex])
        }else controlDropdown(false)
      }
      break
    case 'Escape':
      if(isDropdownShow.value) controlDropdown(false)
      break
    case 'ArrowUp':
      // 阻止上下滚动的默认行为
      e.preventDefault()
      if(filteredOptions.value.length > 0){
        if(states.highlightIndex === -1 || states.highlightIndex === 0){
          states.highlightIndex = filteredOptions.value.length - 1
        }else{
          states.highlightIndex--
        }
      }
      break
    case 'ArrowDown':
    // 阻止上下滚动的默认行为
    e.preventDefault()
    if(filteredOptions.value.length > 0){
        if(states.highlightIndex === -1  || states.highlightIndex === filteredOptions.value.length - 1){
          states.highlightIndex = 0
        }else{
          states.highlightIndex++
        }
      }
      break
    default:
      break
  }
}

const generateFilterOptions = async (searchValue: string) => {
  if(!props.filterable) return
  if(props.filterMethod && isFunction(props.filterMethod)){
    filteredOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)){
    states.loading = true;
    try {
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch (error) {
      console.log(error)
      filteredOptions.value = []
    } finally{
      states.loading = false
    }
  }else {
    filteredOptions.value = props.options.filter(e => e.label.includes(searchValue))
  }
  states.highlightIndex = -1
}

const onFilter = () => {
  generateFilterOptions(states.inputValue);
}

const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)

const NOOP = () => {}

const toggleDropdown = () => {
  if(props.disabled) return
  if(isDropdownShow.value){
    controlDropdown(false)
  }else{
    controlDropdown(true)
  }
}

const itemSelect = (e: SelectOption) => {
  if(e.disabled) return

  if (props.multiple) {
    const index = states.selectedOptions.findIndex(item => item.value === e.value)
    let newSelectedOptions: SelectOption[]

    if (index > -1) {
      // 如果已经选中，则取消选择
      newSelectedOptions = states.selectedOptions.filter(item => item.value !== e.value)
    } else {
      // 如果未选中，则添加到选中列表
      newSelectedOptions = [...states.selectedOptions, e]
    }

    states.selectedOptions = newSelectedOptions
    const newValues = newSelectedOptions.map(option => option.value)
    emits("change", newValues)
    emits("update:modelValue", newValues)
    // 多选模式下，点击选项后不关闭下拉菜单
    states.inputValue = ''
  } else {
    states.inputValue = e.label
    states.selectedOption = e
    emits("change", e.value)
    emits("update:modelValue", e.value)
    controlDropdown(false)
  }

  inputRef.value.ref.focus()
}
</script>
