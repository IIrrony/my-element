<template>
  <div
    class="vk-dropdown"
  >
  <Tooltip
    :trigger="trigger"
    :placement="placement"
    :popper-options="popperOptions"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :manual="manual"
    @visible-change="visibleChange"
    ref="tooltipRef"
  >
    <slot />
    <template #content>
      <ul class="vk-dropdown__menu">
        <template v-for="item in menuOptions" :key="item.key">
          <li
            v-if="item.divided"
            role="separator"
            class="divided-placeholder"
          />
          <li
            class="vk-dropdown__item"
            @click="itemClick(item)"
            :class="{'is-disabled': item.disabled, 'is-divided': item.divided }"
            :id="`dropdown-item-${item.key}`"
          >
            <RenderVnode :vNode="item.label"/>
             <!-- {{ item.label }} -->
          </li>
        </template>
      </ul>
    </template>
  </Tooltip>
  </div>
</template>

<script setup lang="ts">
import type { DropdownProps, DropdownEmits, DropdownInstance, MenuOption } from './types';
import Tooltip from '../Tooltip/Tooltip.vue';
import { ref, computed } from 'vue';
import type { Ref } from 'vue'
import RenderVnode from '../Common/RenderVnode';
import type { TooltipInstance } from '../Tooltip/types';


const tooltipRef = ref<TooltipInstance | null>(null)
defineOptions({
  name: 'VKDropdown'
})

const props = withDefaults(defineProps<DropdownProps>(), { hideAfterClick: true })
const emits = defineEmits<DropdownEmits>()

// 自定义popperOptions，确保箭头居中
const popperOptions = computed(() => {
  return {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 6]
        }
      },
      {
        name: 'arrow',
        options: {
          element: '[data-popper-arrow]',
          padding: 5 // 防止箭头触碰到边缘
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false // 更好的箭头定位
        }
      }
    ],
    ...props.popperOptions
  }
})
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if(e.disabled) return
  emits('select', e)
  if(props.hideAfterClick){
    tooltipRef.value?.hide()
  }
}

// 使用闭包，拿到最新的值
// 避免刚创建tooltipRef是为null，就将show hide方法加上去，但是tooltipRef为null，加不上去
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>
