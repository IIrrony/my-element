---
title: Dropdown | My-Element
description: Dropdown 下拉菜单组件的文档
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

移动到下拉菜单上，展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 触发方式

可以配置点击触发或者悬停触发。

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="通过 trigger 属性设置触发方式"></preview>

## 禁用选项

通过在 `menuOptions` 中设置 `disabled` 属性来禁用某些选项。

<preview path="../demo/Dropdown/Disabled.vue" title="禁用选项" description="禁用某些下拉选项"></preview>

## 分割线

通过在 `menuOptions` 中设置 `divided` 属性来添加分割线。

<preview path="../demo/Dropdown/Divided.vue" title="分割线" description="使用分割线将选项分组"></preview>

## 自定义选项内容

通过在 `menuOptions` 中使用 VNode 作为 `label` 属性值来自定义选项内容。

<preview path="../demo/Dropdown/CustomRender.vue" title="自定义选项内容" description="使用 VNode 自定义下拉菜单选项"></preview>

## Attributes

### Dropdown Attributes

| 名称           | 说明                 | 类型                                                                                                            | 默认值 |
| -------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- | ------ |
| menuOptions    | 下拉菜单选项         | `array<{ label: string \| VNode, key: string \| number, disabled?: boolean, divided?: boolean }>`               | []     |
| placement      | 菜单弹出位置         | `enum` - `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'right'` | bottom |
| trigger        | 触发下拉的行为       | `enum` - `'hover' \| 'click'`                                                                                   | hover  |
| hideAfterClick | 点击菜单项后隐藏菜单 | `boolean`                                                                                                       | true   |
| transition     | 过渡动画名称         | `string`                                                                                                        | fade   |
| openDelay      | 展开延时，单位为毫秒 | `number`                                                                                                        | 0      |
| closeDelay     | 关闭延时，单位为毫秒 | `number`                                                                                                        | 0      |
| popperOptions  | popper.js 的选项     | `object`                                                                                                        | —      |

### Dropdown Events

| 名称           | 说明                  | 类型                                                                                                       |
| -------------- | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| visible-change | 下拉框出现/隐藏时触发 | `function(visible: boolean)`                                                                               |
| select         | 选中下拉选项时触发    | `function(item: { label: string \| VNode, key: string \| number, disabled?: boolean, divided?: boolean })` |

### Dropdown Slots

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 触发下拉菜单显示的元素 |
