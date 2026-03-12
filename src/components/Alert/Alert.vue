<template>
  <transition name="vk-alert-fade">
    <div
      v-if="visible"
      class="vk-alert"
      :class="[
        `vk-alert--${type}`,
        `is-${effect}`,
        center ? 'is-center' : '',
        showIcon ? 'is-with-icon' : ''
      ]"
      style="margin-bottom: 20px;"
    >
      <Icon v-if="showIcon" :icon="typeToIcon[type]" :class="['vk-alert__icon', { 'is-big': hasDescription }]" />
      <div class="vk-alert__content">
        <span v-if="title || $slots.title" class="vk-alert__title" :class="{'is-big': hasDescription}">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="description || $slots.default" class="vk-alert__description">
          <slot>{{ description || content }}</slot>
        </p>
      </div>
      <div v-if="closable" class="vk-alert__close" @click="handleClose">
        <Icon icon="times" class="vk-alert__close-btn" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue';
import Icon from '../Icon/Icon.vue';
import { alertProps, type AlertEvents } from './types';

defineOptions({
  name: 'VkAlert'
})

const props = defineProps(alertProps);
const emit = defineEmits<AlertEvents>();

const visible = ref(true);

const typeToIcon = {
  primary: 'info-circle',
  success: 'check-circle',
  warning: 'exclamation-circle',
  danger: 'times-circle',
  info: 'info-circle'
};

const slots = useSlots();
const hasDescription = computed(() => !!props.description || !!slots.default);

const handleClose = (event: MouseEvent) => {
  visible.value = false;
  emit('close');
}
</script>

<style scoped></style>
