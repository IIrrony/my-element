---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 或点击时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。由 `placement` 属性决定展示效果：`placement` 属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 不同位置

Tooltip 组件提供了多种不同的位置，通过设置 `placement` 属性来配置。

<preview path="../demo/Tooltip/Placement.vue" title="不同位置" description="通过 placement 属性设置不同的显示位置"></preview>

## 触发方式

Tooltip 组件提供了两种触发方式：`hover` 和 `click`。

<preview path="../demo/Tooltip/Trigger.vue" title="触发方式" description="通过 trigger 属性设置触发方式"></preview>

## 手动控制

通过设置 `manual` 属性可以手动控制 Tooltip 的显示与隐藏。

<preview path="../demo/Tooltip/Manual.vue" title="手动控制" description="通过 manual 属性和实例方法手动控制显示与隐藏"></preview>

## 自定义内容

可以通过插槽 `content` 自定义提示内容。

<preview path="../demo/Tooltip/CustomContent.vue" title="自定义内容" description="使用插槽自定义提示内容"></preview>

## Attributes

| 参数           | 说明                            | 类型                 | 默认值  |
| -------------- | ------------------------------- | -------------------- | ------- |
| content        | 显示的内容                      | String               | —       |
| placement      | Tooltip 的出现位置              | String               | bottom  |
| trigger        | 触发方式                        | String               | hover   |
| manual         | 是否手动控制模式                | Boolean              | false   |
| popperOptions  | popper.js 的参数                | Object               | —       |
| transition     | 动画名称                        | String               | fade    |
| openDelay      | 延迟出现，单位毫秒              | Number               | 0       |
| closeDelay     | 延迟关闭，单位毫秒              | Number               | 0       |

## Events

| 事件名          | 说明                           | 回调参数             |
| --------------- | ------------------------------ | -------------------- |
| visible-change  | 显示状态变更时触发             | 新的显示状态 (Boolean) |
| click-outside   | 点击外部时触发                 | —                    |

## Slots

| 插槽名          | 说明                           |
| --------------- | ------------------------------ |
| —               | Tooltip 触发的元素             |
| content         | 自定义内容                     |

## Methods

| 方法名          | 说明                           | 参数                 |
| --------------- | ------------------------------ | -------------------- |
| show            | 显示 Tooltip                   | —                    |
| hide            | 隐藏 Tooltip                   | —                    |
