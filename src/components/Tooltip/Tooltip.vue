<template>
<div
    class="vk-tooltip"
    v-on="outerEvents"
    ref="popperContainerNode"
  >
  <div
    class="vk-tooltip__trigger"
    ref="triggerNode"
    v-on="events"
  >
    <slot></slot>
  </div>
  <Transition :name="transition">
    <div
      v-if="isOpen"
      class="vk-tooltip__popper"
      ref="popperNode"
    >
    <slot name="content">{{ content }}</slot>
    <div id="arrow" data-popper-arrow class="vk-tooltip__arrow"></div>
    </div>
  </Transition>

</div>
</template>

<script setup lang="ts">
import { createPopper, offset } from '@popperjs/core';
import type { TooltipProps, TooltipEmits, TooltipInstance} from './types';
import type { Instance } from '@popperjs/core';
import { debounce } from 'lodash-es';
import useClickOutside from '../../hooks/useClickOutside';
import { ref, watch, reactive, onUnmounted, computed } from 'vue';
defineOptions({
  name: 'VKTooltip'
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0
})
const emits  = defineEmits<TooltipEmits>()
const isOpen = ref<boolean>(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()

let popperInstance: Instance | null = null;
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})

let openTimes = 0
let closeTimes = 0

const popperOptions = computed(() => {
  return {
    placement: props.placement,
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
          padding: 5 // Add padding to prevent arrow from touching the edge
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false // Better positioning for the arrow
        }
      }
    ],
    ...props.popperOptions
  }
})

const open = () => {
  openTimes++
  console.log("open times", openTimes)
  isOpen.value = true;
  emits('visible-change', true)
}

const close = () => {
  closeTimes++
  console.log("close times", closeTimes)
  isOpen.value = false
  emits('visible-change', false)
}

// 防抖
const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)
// 执行之前，去掉上次的执行，不计入 times
// 可以确保在执行 open 或 close 操作之前，取消掉上一次的相反操作，避免不必要的执行。
const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}

const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}
const togglePopper = () => {
  if(isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}

useClickOutside(popperContainerNode, () => {
  // click模式，打开状态，不是manual模式
  if(props.trigger === 'click' && isOpen.value && !props.manual){
    closeFinal()
  }
  if(isOpen.value){
    emits('click-outside', true)
  }
})

const attachEvents = () => {
  if(props.trigger === 'hover'){
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}

if(!props.manual){
  // setup时，执行一遍attachEvents方法，手动将方法绑定上去
  attachEvents()
}
watch(() => props.manual, (isManual) => {
  if(isManual){
    events = {}
    outerEvents = {}
  } else {
    attachEvents()
  }
})

// 监控trigger，发生变化时就更改绑定的事件
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if(newTrigger !== oldTrigger){
    // clear the events
    events = {}
    outerEvents = {}
    // 重新绑定方法
    attachEvents()
  }
})

// 监控isOpen的值，控制popper的创建与销毁
watch(isOpen, (newValue) => {
  if(newValue){
    if(triggerNode.value && popperNode.value){
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })

onUnmounted(() => {
  popperInstance?.destroy()
})

defineExpose<TooltipInstance>({
  'show': openFinal,
  'hide': closeFinal
})
</script>
