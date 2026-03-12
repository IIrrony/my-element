---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

基础的按钮包括普通按钮、主要按钮、成功按钮、警告按钮、危险按钮和信息按钮。通过设置 `type` 属性可以使用不同样式的按钮。

另外，可以通过 `plain` 设置朴素按钮，通过 `round` 设置圆角按钮，通过 `circle` 和 `icon` 设置图标圆形按钮。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法，展示了不同类型和样式的按钮"></preview>

## 禁用状态
按钮不可用状态，通过 `disabled` 属性指定。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="禁用状态的按钮不可点击"></preview>

## 不同尺寸
Button 组件提供了不同的尺寸，可以在不同场景下选择合适的按钮尺寸。

<preview path="../demo/Button/Size.vue" title="不同尺寸" description="额外的尺寸：large、small，通过 size 属性设置"></preview>

## 图标按钮
带图标的按钮可以增强按钮的可识别性，添加图标让按钮更具吸引力。

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="使用 icon 属性为按钮添加图标"></preview>

## 加载状态
通过添加 `loading` 属性可以让按钮处于加载状态，此时按钮不可点击。

<preview path="../demo/Button/Loading.vue" title="加载状态" description="点击按钮后进行数据加载操作，在按钮上显示加载状态"></preview>

## 按钮形状
按钮可以有不同的形状，包括圆角和圆形。

<preview path="../demo/Button/Shape.vue" title="按钮形状" description="通过 round 和 circle 属性设置按钮形状"></preview>

## Attributes

### Button Attributes

| Name              | Description                                                             | Type                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size              | 按钮尺寸                                                                 | `enum` - `'large'\| 'small'`                                                    | —       |
| type              | 按钮类型                                                                 | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`                | —       |
| plain             | 是否朴素按钮                                                             | `boolean`                                                                       | false   |
| round             | 是否圆角按钮                                                             | `boolean`                                                                       | false   |
| circle            | 是否圆形按钮                                                             | `boolean`                                                                       | false   |
| loading           | 是否加载中状态                                                           | `boolean`                                                                       | false   |
| disabled          | 是否禁用状态                                                             | `boolean`                                                                       | false   |
| icon              | 图标组件                                                                 | `string`                                                                        | —       |
| autofocus         | 是否自动获取焦点，同原生 button 的 autofocus                              | `boolean`                                                                       | false   |
| native-type       | 原生 button 的 type 值                                                   | `enum` - `'button'\| 'submit'\| 'reset'`                                        | button  |

### Button 插槽

| 插槽名    | 说明                |
| --------- | ------------------- |
| default   | 按钮的内容          |
