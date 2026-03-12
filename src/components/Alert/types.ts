import type { PropType } from 'vue';

export type AlertType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface AlertProps {
  title?: string;
  content?: string;
  type?: AlertType;
  effect?: 'light' | 'dark';
  closable?: boolean;
  showIcon?: boolean;
  center?: boolean;
  description?: string;
}

export interface AlertEvents{
  (e:'close'): void;
}

export const alertProps = {
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<AlertType>,
    default: 'info'
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  closable: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  }
}