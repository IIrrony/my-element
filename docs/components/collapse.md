---
title: Collapse | V-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果

每次只能展开一个面板，通过设置 `accordion` 属性来实现手风琴效果。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="通过 accordion 属性设置手风琴效果"></preview>

## 自定义标题

除了可以通过 `title` 属性设置标题外，还可以通过具名插槽 `title` 来自定义标题内容。

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义标题" description="通过 title 插槽自定义标题内容"></preview>

## 禁用状态

通过设置 `disabled` 属性禁用某个面板。

<preview path="../demo/Collapse/Disabled.vue" title="禁用状态" description="通过 disabled 属性禁用面板"></preview>

## Attributes

### Collapse Attributes

| 名称                    | 说明                                                                      | 类型                | 默认值 |
| ----------------------- | ------------------------------------------------------------------------- | ------------------- | ------ |
| model-value / v-model   | 当前激活的面板（如果是手风琴模式，绑定值类型需要为 string，否则为 array） | `array / string`    | —      |
| accordion               | 是否手风琴模式                                                            | `boolean`           | false  |

### Collapse Events

| 名称   | 说明                                                                                                | 类型                                           |
| ------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| change | 当前激活面板改变时触发                                                                              | `function(activeNames: array / string)`        |

### CollapseItem Attributes

| 名称     | 说明       | 类型               | 默认值 |
| -------- | ---------- | ------------------ | ------ |
| name     | 唯一标识符 | `string / number`  | —      |
| title    | 面板标题   | `string`           | —      |
| disabled | 是否禁用   | `boolean`          | false  |

### CollapseItem Slots

| 名称    | 说明                          |
| ------- | ----------------------------- |
| default | CollapseItem 的内容           |
| title   | 自定义标题内容                |
