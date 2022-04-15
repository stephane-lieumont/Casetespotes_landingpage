import { MouseEventHandler } from "react"

export type InputProps = {
  label?: string,
  name?: string,
  placeholder?: string,
  errorMessage?: string,
  error?: boolean,
  onChange?: CallableFunction
  value?: string,
  choices?: string[]
  checked?: boolean
}

export type ButtonProps = {
  label?: string,
  outlined?: boolean,
  buttonLink?: boolean,
  navigate?: string,
  callback?: MouseEventHandler<HTMLButtonElement>
}
