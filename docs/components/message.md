---
title: Message | My-Element
description: Message 消息提示组件的文档
---

# Message 消息提示

常用于主动操作后的反馈提示，从页面顶部出现，自动消失。

## 基础用法

从顶部出现，3 秒后自动消失。Message 可以设置不同的类型，用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法，展示了不同类型的消息提示"></preview>

## 可关闭的消息提示

可以添加关闭按钮。默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 `showClose` 属性。

<preview path="../demo/Message/CloseButton.vue" title="可关闭的消息提示" description="通过 showClose 属性显示关闭按钮"></preview>

## 自定义显示时间

通过 `duration` 属性自定义消息显示时间。默认为 3000 毫秒，设为 0 则不会自动关闭。

<preview path="../demo/Message/Duration.vue" title="自定义显示时间" description="通过 duration 属性自定义消息显示时间"></preview>

## 使用 VNode

`message` 属性支持传入 VNode 来自定义消息内容。

<preview path="../demo/Message/VNode.vue" title="使用 VNode" description="使用 VNode 自定义消息内容"></preview>

## 全局方法

V-Element 为 Vue.prototype 添加了全局方法 $message。因此在 Vue 实例中可以采用本页面中的方式调用 Message。

## 单独引用

```javascript
import { createMessage } from "v-element";
```

此时调用方法为 `createMessage(options)`。

## Options

| 参数      | 说明                                        | 类型                                        | 默认值 |
| --------- | ------------------------------------------- | ------------------------------------------- | ------ |
| message   | 消息文字                                    | `string / VNode`                            | —      |
| type      | 消息类型                                    | `'success' / 'warning' / 'info' / 'danger'` | 'info' |
| duration  | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number`                                    | 3000   |
| showClose | 是否显示关闭按钮                            | `boolean`                                   | false  |
| offset    | Message 距离窗口顶部的偏移量                | `number`                                    | 20     |

## 方法

调用 `createMessage` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `destory` 方法。

| 方法名  | 说明               |
| ------- | ------------------ |
| destory | 关闭当前的 Message |

另外，还可以调用 `closeAll` 方法关闭所有的消息提示：

```javascript
import { closeAll } from "v-element";

// 关闭所有消息
closeAll();
```
