---
title: Select | My-Element
description: Select 选择器组件的文档
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容，支持搜索过滤和远程加载。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

## 自定义选项渲染

通过 `renderLabel` 属性传入渲染函数，可以自定义选项内容的展示样式，使用 VNode 灵活渲染。

<preview path="../demo/Select/CustomRender.vue" title="自定义渲染" description="使用 renderLabel 自定义选项渲染内容"></preview>

## 远程搜索

当需要从服务器加载数据时，可使用远程搜索功能。通过输入关键字触发搜索，动态加载选项数据。

<preview path="../demo/Select/Remote.vue" title="远程搜索" description="通过远程搜索方法从服务器获取数据"></preview>

## Attributes

| 名称                  | 说明                       | 类型                                         | 默认值 |
| --------------------- | -------------------------- | -------------------------------------------- | ------ |
| model-value / v-model | 绑定值                     | `string \| string[]`                         | —      |
| options               | 下拉选项数组               | `SelectOption[]`                             | []     |
| placeholder           | 占位文本                   | `string`                                     | 请选择 |
| disabled              | 是否禁用                   | `boolean`                                    | false  |
| clearable             | 是否显示清空按钮           | `boolean`                                    | false  |
| filterable            | 是否可搜索                 | `boolean`                                    | false  |
| filterMethod          | 自定义搜索方法             | `(value: string) => SelectOption[]`          | —      |
| remote                | 是否开启远程搜索           | `boolean`                                    | false  |
| remoteMethod          | 远程搜索方法               | `(value: string) => Promise<SelectOption[]>` | —      |
| renderLabel           | 自定义选项渲染函数         | `(option: SelectOption) => VNode`            | —      |
| multiple              | 是否多选                   | `boolean`                                    | false  |
| collapseTags          | 多选时是否折叠显示已选标签 | `boolean`                                    | false  |

## SelectOption

| 属性名   | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| label    | 选项标签文本 | `string`  | —      |
| value    | 选项的值     | `string`  | —      |
| disabled | 是否禁用     | `boolean` | false  |

## Events

| 事件名            | 说明                     | 回调参数                      |
| ----------------- | ------------------------ | ----------------------------- |
| update:modelValue | 值更新时触发             | `(value: string \| string[])` |
| change            | 选中值变化时触发         | `(value: string \| string[])` |
| visible-change    | 下拉框显示/隐藏时触发    | `(visible: boolean)`          |
| clear             | 点击清空按钮时触发       | —                             |
| remove-tag        | 多选模式下移除标签时触发 | `(value: string)`             |
