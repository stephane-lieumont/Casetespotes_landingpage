export type HomepageProps = {
  formIsLoading?: boolean,
  formSubmitIsValid?: boolean,
  onSubmitPreRegister?: (formData: Object, isValid: boolean) => void
}

export type ContactProps = {
  formIsLoading?: boolean,
  formSubmitIsValid?: boolean,
  onSubmitContact?: (formData: Object, isValid: boolean) => void
}