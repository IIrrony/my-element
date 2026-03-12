<template>
  <form class="vk-form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { FormContext, FormItemContext, FormProps, FormValidateFailure, FormInstance } from './types';
import type { ValidateFieldsError } from 'async-validator';
import { formContextKey } from "./types"

defineOptions({
  name: 'VKForm'
})

const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (filed) => {
  fields.push(filed)
}

const removeField: FormContext['removeField'] = (filed) => {
  if(filed.prop) fields.splice(fields.indexOf(filed), 1)
}

const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.resetField())
}

const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.clearValidate())
}
const validate = async () => {
  let validationErrors:ValidateFieldsError = {}
  console.log('fields', fields)
  for(const field of fields) {
    try {
      await field.validate('')
    } catch(e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if(Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}

provide(formContextKey, {
  ...props,
  addField,
  removeField
})

defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate
})
</script>
