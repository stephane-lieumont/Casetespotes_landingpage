import { MouseEventHandler, ReactNode } from "react"
import { PopupAlert } from "./Components.intf"

export type InputProps = {
  label?: string,
  name?: string,
  placeholder?: string,
  errorMessage?: string,
  error?: boolean,
  onChange: CallableFunction,
  value?: string,
  choices?: string[],
  checked?: boolean,
  disabled?: boolean,
}

export type ButtonProps = {
  label?: string,
  outlined?: boolean,
  buttonLink?: boolean,
  navigate?: string,
  disabled?: boolean,
  loading?: boolean,
  validate?: boolean,
  callback?: MouseEventHandler<HTMLButtonElement>,
}

export type FormComponent = {
  childHeader?: ReactNode,
  childFooter?: ReactNode,
  className?: string,
  submitIsLoading?: boolean,
  submitIsValid?: boolean,
  onSubmit?: (formData: object, isValid: boolean) => void
}

export type MessageAlert = {
  message: string,
  type: PopupAlert
}
