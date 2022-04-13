export type InputProps = {
  label?: string,
  name?: string,
  placeholder?: string,
  errorMessage?: string,
  error?: boolean,
  onChange?: CallableFunction
  value?: string | boolean,
  choices?: string[]
}