---
title: Form | My-Element
description: Form 表单组件的文档
---

# Form 表单

用于收集、验证和提交数据，支持多种验证规则。

::: tip
Form 组件基于 [async-validator](https://github.com/yiminghe/async-validator) 实现表单校验。
:::

## 基础用法

`Form` 组件由 `Form` 和 `FormItem` 组合而成。`FormItem` 需要设置 `prop` 属性以便触发验证，`Form` 通过 `model` 接收数据，通过 `rules` 配置验证规则。

<preview path="../demo/Form/Basic.vue" title="基础用法" description="展示了 Form 组件的基础使用，包含表单验证功能"></preview>

## Attributes

### Form Attributes

| 名称  | 说明         | 类型                             | 默认值 |
| ----- | ------------ | -------------------------------- | ------ |
| model | 表单数据对象 | `Record<string, any>`            | —      |
| rules | 表单验证规则 | `Record<string, FormItemRule[]>` | —      |

### FormItem Attributes

| 名称  | 说明                                              | 类型     | 默认值 |
| ----- | ------------------------------------------------- | -------- | ------ |
| label | 标签文本                                          | `string` | —      |
| prop  | `model` 的键名，用于触发验证，需与 `rules` 中一致 | `string` | —      |

## Events

### Form Events

| 名称 | 说明 | 类型 |
| ---- | ---- | ---- |
| —    | —    | —    |

## Slots

### Form Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 表单内容 |

### FormItem Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 表单项内容 |

## Methods

### Form Methods

通过 `ref` 获取 Form 实例后可调用以下方法：

| 方法名        | 说明                                         | 参数                 |
| ------------- | -------------------------------------------- | -------------------- |
| validate      | 验证整个表单，返回 Promise，失败时含错误信息 | —                    |
| resetFields   | 重置表单字段至初始值，并移除验证结果         | `(props?: string[])` |
| clearValidate | 清除指定字段的验证结果，不传则清除所有       | `(props?: string[])` |

### FormItem Methods

| 方法名        | 说明                       | 参数                 |
| ------------- | -------------------------- | -------------------- |
| validate      | 验证该表单项               | `(trigger?: string)` |
| resetField    | 重置该表单项的值及验证状态 | —                    |
| clearValidate | 清除该表单项的验证结果     | —                    |

## 类型定义

```typescript
import type { RuleItem } from "async-validator";

export interface FormItemRule extends RuleItem {
  trigger?: string; // 触发验证的事件，如 'blur' | 'change'
}

export type FormRules = Record<string, FormItemRule[]>;
```
