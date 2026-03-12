import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

export interface FormItemProps {
  label: string
  prop?: string //用于表单验证，这个属性会传入表单项的名字，可以用来进行特定的规则验证，比如传入email就可以据此判断要用email的规则进行验证
}
export interface FormItemRule extends RuleItem {
  trigger?: string
}
export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
  model: Record<string, any>
  rules: FormRules
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export interface ValidateStatusProp {
  state: 'init' | 'success' | 'error'
  errorMsg: string
  loading: boolean
}

export interface FormItemContext {
  prop: string
  validate: (trigger?: string) => Promise<any>
  resetField(): void
  clearValidate(): void
}
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface FormInstance {
  validate: () => Promise<any>
  resetFields: (props?: string[]) => void
  clearValidate: (props?: string[]) => void
}

export interface FormItemInstance {
  validateStatus: ValidateStatusProp
  validate: (trigger?: string) => Promise<any>
  resetField(): void
  clearValidate(): void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
