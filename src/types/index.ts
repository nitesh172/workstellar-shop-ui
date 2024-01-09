import React, {
  ButtonHTMLAttributes,
  FocusEventHandler,
  MouseEventHandler,
} from 'react'

export type ButtonProps = {
  text: string
  onClick?: Function
  className?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>
  submitLoading?: boolean
  isDisabled?: boolean
  dark?: boolean
}

export type VideoFrameProps = {
  id?: number | string
  className?: string
}

export type TextFieldProps = {
  label: string
  placeholder: string
  className?: string
}

export type DropDownProps = {
  option?: any
  availableOptions: any[]
  setOption: Function
  label?: string
  name?: string
  availableOptionKey: string
  onBlur?: FocusEventHandler<HTMLElement>
  errorText?: string
  isInvalid?: boolean
  onScrollEnd?: Function
  isDisabled?: boolean
  iconEnabled?: boolean
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type FormProps = {
  setAuth: React.Dispatch<React.SetStateAction<string>>
}