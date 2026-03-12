<script setup lang="ts">
import { ref, onMounted, h, inject } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue"
import Icon from "./components/Icon/Icon.vue";
import Message from "./components/Message/Message.vue"
import { createMessage } from "./components/Message/method";
import type { MenuOption } from "./components/Dropdown/types";
import Alert from "./components/Alert/Alert.vue";
import type { Options } from "@popperjs/core";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Dropdown from "./components/Dropdown/Dropdown";
import type { ButtonInstance } from "./components/Button/types";
import type { NameType } from "./components/Collapse/types";
import type { TooltipInstance } from "./components/Tooltip/types";
const buttonRef = ref<ButtonInstance | null>(null);
const tooltipRef = ref<TooltipInstance | null>(null)
const trigger = ref<any>('click')
const openValue = ref<NameType[]>(['a'])
const options: MenuOption[] = [
  {key: 1, label: h('b', 'this is bold')},
  {key: 2, label: 'item2', disabled: true},
  {key: 3, label: 'item3', divided: true},
  {key: 4, label: 'item4'},
]
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}

const inlineConsole = (...arg: any) => {
  console.log(...arg)
}
onMounted(() => {
  if(buttonRef.value){
    // console.log(buttonRef.value.ref);
  }
  const instance = createMessage({ message: 'hello message', duration: 0, showClose: true })
  createMessage({ message: 'hello message', duration: 0, type:'info', showClose: true })
  createMessage({ message: 'hello message', duration: 0, type:'danger', showClose: true })
  createMessage({ message: 'hello message', duration: 0, type:'warning', showClose: true })
  createMessage({ message: 'hello message again', showClose: true })
  setTimeout(() => {
    openValue.value = ['a', 'b']
    // instance.destory()
  }, 2000)
});

// plugin 测试
// console.log(inject('test'))
</script>

<template>
  <!-- <Message message="hello message" :duration="0"/> -->
  <header style="width: 125px;">
    <Dropdown
      placement="right"
      :trigger="trigger"
      :menuOptions="options"
      @visible-change="e => inlineConsole('visible-change', e)"
      @select="e => inlineConsole('select', e)"
      manual
      ref="tooltipRef"
    >
      <img width="125" height="125" style="border: 1px solid #666;" src="./assets/logo.svg" alt="">
    </Dropdown>
  </header>
  <main>
    <div>
      <!-- plugin 测试 -->
      <!-- {{$echo('123')}}
      <v-button type="danger">from plugin</v-button> -->
      <Button type="primary" plain ref="buttonRef" @click="open">Test Button</Button>
      <Button round @click="close">Round Button</Button>
      <Button circle>VK</Button>
      <Button disabled>Disabled Button</Button><br/><br/>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button><br/><br/>
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="info" plain>Info</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button><br/><br/>
      <Button size="large">Large</Button>
      <Button size="small">Small</Button><br/><br/>
      <Button size="large" loading>Loading</Button>
      <Button size="large" icon="arrow-up">Icon</Button><br/><br/>
    </div>

    <div>
      <Collapse v-model="openValue">
        <Item name="a" title="Title A">
          <!-- <template #title>
            <h1>nice title</h1>
          </template> -->
          <!-- <h1>headline title</h1> -->
          <div> this is content a aaa </div>
        </Item>
        <Item name="b" title="Title B">
          <div> this is bbbbb test </div>
        </Item>
        <Item name="c" title="Disabled Title" disabled>
          <div> this is cccc test </div>
        </Item>
      </Collapse>
    </div>
    <div>
      <Alert effect="dark" showIcon type="danger" closable title="标题"></Alert>
      <Alert type="danger" showIcon closable title="test"></Alert>
      <Alert effect="dark" type="info" showIcon closable title="标题">文字说明文字说明文字说明文字说明文字说明文字说明</Alert>
      <Alert effect="dark" type="warning" showIcon closable title="test"></Alert>
      <Alert effect="dark" type="success" showIcon closable title="test">文字说明文字说明文字说明文字说明文字说明文字说明</Alert>
    </div>
  </main>
</template>

<style scoped>
main{
  padding: 50px 100px;
  display: flex;
  justify-items: center;
  div{
    margin: 0 20px;
    width: 100%;
  }
}
</style>
