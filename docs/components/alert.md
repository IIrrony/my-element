---
title: Alert | My-Element
description: Alert 提示组件的文档
---

# Alert 提示

用于页面中展示重要的提示信息，支持多种类型和主题。

## 基础用法

Alert 组件提供四种类型的提示，通过设置 `type` 属性来改变提示的类型，默认值为 `info`。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert 组件的基础用法，展示了不同类型的提示"></preview>

## 主题

Alert 组件提供了两种不同的主题：`light` 和 `dark`。通过设置 `effect` 属性来改变主题，默认为 `light`。

<preview path="../demo/Alert/Effect.vue" title="不同主题" description="通过 effect 属性指定主题，可选值为 light 和 dark"></preview>

## 带有图标

通过设置 `showIcon` 属性来显示 Alert 的图标，根据 `type` 属性自动引入不同的图标。

<preview path="../demo/Alert/WithIcon.vue" title="带有图标" description="通过 showIcon 属性显示图标"></preview>

## 带有描述性文字

通过设置 `description` 属性可以添加描述性文字，让提示信息更加详细。

<preview path="../demo/Alert/WithDescription.vue" title="带有描述性文字" description="通过 description 属性添加详细描述"></preview>

## 可关闭的提示

设置 `closable` 属性可以使 Alert 组件可关闭。默认情况下，Alert 组件是可关闭的。

<preview path="../demo/Alert/Closable.vue" title="可关闭的提示" description="通过 closable 属性控制是否可关闭"></preview>

## 居中显示

通过设置 `center` 属性可以使 Alert 组件的文字居中显示。

<preview path="../demo/Alert/Center.vue" title="居中显示" description="通过 center 属性使文字居中显示"></preview>

## Attributes

### Alert Attributes

| 名称        | 说明                               | 类型                                                                 | 默认值 |
| ----------- | ---------------------------------- | -------------------------------------------------------------------- | ------ |
| title       | 标题                               | `string`                                                             | —      |
| content     | 内容（已废弃，请使用 description） | `string`                                                             | —      |
| type        | 类型                               | `enum` - `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | info   |
| effect      | 主题                               | `enum` - `'light' \| 'dark'`                                         | light  |
| closable    | 是否可关闭                         | `boolean`                                                            | true   |
| showIcon    | 是否显示图标                       | `boolean`                                                            | false  |
| center      | 文字是否居中                       | `boolean`                                                            | false  |
| description | 描述性文字                         | `string`                                                             | —      |

### Alert Events

| 名称  | 说明                    | 类型                 |
| ----- | ----------------------- | -------------------- |
| close | 关闭 Alert 时触发的事件 | `function() => void` |

### Alert Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | Alert 的描述内容 |
| title   | Alert 的标题内容 |
