export type HomepageProps = {
  formIsLoading?: boolean;
  formSubmitIsValid?: boolean;
  onSubmitPreRegister?: (formData: object, isValid: boolean) => void;
};

export type ContactProps = {
  formIsLoading?: boolean;
  formSubmitIsValid?: boolean;
  onSubmitContact?: (formData: object, isValid: boolean) => void;
};
