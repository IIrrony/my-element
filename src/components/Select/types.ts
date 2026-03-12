import type { VNode } from "vue";
export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  // v-model
  modelValue: string | string[];
  // 选项
  options?: SelectOption[];
  // 一些基本表单属性
  placeholder: string;
  disabled?: boolean;
  clearable?: boolean;
  renderLabel?: RenderLabelFunc;
  filterable?: boolean;
  filterMethod?: CustomFilterFunc;
  remote?: boolean;
  remoteMethod?: CustomFilterRemoteFunc;
  // 是否支持多选
  multiple?: boolean;
  // 多选时是否将选中值按文字的形式展示
  collapseTags?: boolean;
}
export interface SelectStates {
  inputValue: string;
  selectedOption: null | SelectOption;
  selectedOptions: SelectOption[];
  mouseHover: boolean;
  loading: boolean;
  highlightIndex: number;
}

export type RenderLabelFunc = (option: SelectOption) => VNode;
export type CustomFilterFunc = (value: string) => SelectOption[];
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>;

export interface SelectEmits {
  (e:'change', value: string | string[]) : void;
  (e:'update:modelValue', value: string | string[]) : void;
  (e: 'visible-change', value:boolean): void;
  (e: 'clear'): void;
  (e: 'remove-tag', value: string): void;
}
