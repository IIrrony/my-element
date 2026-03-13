---
title: Icon | My-Element
description: Icon 图标组件的文档
---

# Icon 图标

基于 [Font Awesome](https://fontawesome.com/) 图标库封装，提供丰富的图标集合，支持大小、颜色与动画效果。

## 基础用法

直接通过设置 `icon` 属性来使用即可。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="Icon 组件的基础用法，展示了常用的图标"></preview>

## 图标尺寸

通过 `size` 属性设置图标的大小，可选值包括：`xs`、`sm`、`lg`、`xl`、`2xl` 等。

<preview path="../demo/Icon/Size.vue" title="图标尺寸" description="通过 size 属性设置图标大小"></preview>

## 图标颜色

通过 `color` 属性设置图标的颜色。

<preview path="../demo/Icon/Color.vue" title="图标颜色" description="通过 color 属性设置图标颜色"></preview>

## 图标动画

图标可以添加动画效果，包括旋转、跳动、抖动等。

<preview path="../demo/Icon/Animation.vue" title="图标动画" description="通过不同属性设置图标动画效果"></preview>

## Attributes

### Icon Attributes

| 属性名      | 说明                 | 类型                                                                                                                              | 默认值 |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ |
| icon        | 图标名称或图标对象   | `string \| object \| Array<string> \| IconDefinition`                                                                             | —      |
| color       | 图标颜色             | `string`                                                                                                                          | —      |
| size        | 图标大小             | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x' \| '4x' \| '5x' \| '6x' \| '7x' \| '8x' \| '9x' \| '10x'` | —      |
| spin        | 是否旋转图标         | `boolean`                                                                                                                         | false  |
| pulse       | 是否脉冲式旋转       | `boolean`                                                                                                                         | false  |
| border      | 是否显示边框         | `boolean`                                                                                                                         | false  |
| fixedWidth  | 是否固定宽度         | `boolean`                                                                                                                         | false  |
| flip        | 翻转方向             | `'horizontal' \| 'vertical' \| 'both'`                                                                                            | —      |
| listItem    | 是否作为列表项图标   | `boolean`                                                                                                                         | false  |
| pull        | 图标浮动方向         | `'right' \| 'left'`                                                                                                               | —      |
| rotation    | 图标旋转角度         | `90 \| 180 \| 270 \| '90' \| '180' \| '270'`                                                                                      | —      |
| swapOpacity | 是否交换不透明度     | `boolean`                                                                                                                         | false  |
| transform   | 图标变换             | `object \| string`                                                                                                                | —      |
| symbol      | 是否转换为 SVG 符号  | `boolean \| string`                                                                                                               | false  |
| title       | 图标标题             | `string`                                                                                                                          | —      |
| inverse     | 是否反色             | `boolean`                                                                                                                         | false  |
| bounce      | 是否弹跳动画         | `boolean`                                                                                                                         | false  |
| shake       | 是否抖动动画         | `boolean`                                                                                                                         | false  |
| beat        | 是否心跳动画         | `boolean`                                                                                                                         | false  |
| fade        | 是否淡入淡出动画     | `boolean`                                                                                                                         | false  |
| beatFade    | 是否心跳淡入淡出动画 | `boolean`                                                                                                                         | false  |
| spinPulse   | 是否脉冲旋转动画     | `boolean`                                                                                                                         | false  |
| spinReverse | 是否反向旋转动画     | `boolean`                                                                                                                         | false  |
