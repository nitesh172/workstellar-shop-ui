import React, {
  CSSProperties,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

export type ButtonProps = {
  text: string
  onClick?: Function
  className?: string
  type?: 'button' | 'submit' | 'reset'
  submitLoading?: boolean
  isDisabled?: boolean
  dark?: boolean
  small?: boolean
}

export type VideoFrameProps = {
  id?: string
  className?: string
}

export type TextFieldProps = {
  label: string
  placeholder: string
  className?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
  style?: CSSProperties
  value?: any
  type?: HTMLInputTypeAttribute
  error?: any
  touched?: any
  onkeyPressed?: () => void
}

export type DropDownProps = {
  option?: any
  availableOptions: any[]
  setOption: Function
  label?: string
  name?: string
  availableOptionKey: string
  onBlur?: FocusEventHandler<HTMLElement>
  error?: any
  isInvalid?: boolean
  onScrollEnd?: Function
  isDisabled?: boolean
  iconEnabled?: boolean
  primary?: boolean
  className?: string
  selectOptionKey?: string
  touched?: any
}

export type ContactDetailWithFormProps = {
  id: string
  children: React.ReactNode
  label?: string
}

export type CheckBoxProps = {
  id: string
  label?: string
  name?: string
  value?: boolean
  onChange?: (e: boolean) => void
  disabled?: boolean
}

export type PopupEncloserProps = {
  show: boolean
  close: (Option: boolean) => void
  children: React.ReactNode
}

export type CarouselProps = {
  readonly data: any[]
  className?: string
  readonly renderItem: (
    item: any,
    index: number,
    isSnapPoint: boolean
  ) => React.ReactElement
}

export type AuthWrapperProps = {
  children: React.ReactNode
}

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export declare type ApiHookProps = {
  method?: HttpMethod
  baseURI: string
  doneCb?: (resp: any) => void
  errorCb?: (err: any) => void
}

export declare type PayloadType = Record<string, any>

export type UserProps = {
  id: number
  createdAt: string
  updatedAt: string
  email: string
  entityName: string
  role: string
  status: string
  country: string
  state: string
  city: string
  zipcode: string
  lastActive: string
}

export type TalentProps = {
  id: string
  createdAt: string
  updatedAt: string
  skills: { name: string }[]
  amount: {}
  paymentType: string
  headline: string
  experienceYear: number
  designation: string
  level: string
  avatar: string
  user: UserProps
}

export type TalentResponseProps = {
  talents: TalentProps[]
  totalItems: number
  perPage: number
  currentPage: number
  totalPage: number
}

export type TranslationValuesProps = {
  language: string
  value: string
}

export type TranslationProps = {
  key: string
  translationValues: TranslationValuesProps[]
}

export type TranslationsResponseProps = TranslationProps[]

export type LanguageProps = {
  id: string
  code: string
  createdAt: string
  updatedAt: string
}

export type LanguagesResponseProps = LanguageProps[]

export enum Order {
  DESC = 'DESC',
  ASC = 'ASC',
}