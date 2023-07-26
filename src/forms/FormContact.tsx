import React, { FunctionComponent, useEffect, useState } from "react"
import { InputProps } from "../types/Forms.intf"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import { Validator } from "../utils/formValidator"
import { FormComponent } from "../types/Forms.intf"
import TextArea from "../components/Forms/Textarea"
import { IContactMessage } from "../types/StorageAPI.intf"

const FormContact: FunctionComponent<FormComponent> = ({ childFooter = null, submitIsValid = false, submitIsLoading = false, onSubmit}) => {
  const [formDisabled, setFormDisabled] =  useState<boolean>(false)
  const [formValidate, setFormValidate] =  useState<boolean>(false)
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setFormValidate(submitIsValid)
    setFormDisabled(submitIsValid)
  }, [submitIsValid])

  useEffect(() => {
    setFormIsLoading(submitIsLoading)
  }, [submitIsLoading])

  // Form Controllers
  const [formInputLastname, setFormInputLastname] = useState<InputProps>({
    label: 'Nom',
    name: 'lastname',
    error: false,
    errorMessage: 'Veuillez saisir votre Nom',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })
  const [formInputFirstname, setFormInputFirstname] = useState<InputProps>({
    label: 'Prénom',
    name: 'firstname',
    error: false,
    errorMessage: 'Veuillez saisir votre Prénom',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })
  const [formInputEmail, setFormInputEmail] = useState<InputProps>({
    label: 'Email',
    name: 'email',
    error: false,
    errorMessage: 'Veuillez saisir une adresse mail valide',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })
  const [formInputSubject, setFormInputSubject] = useState<InputProps>({
    label: 'Sujet',
    name: 'subject',
    error: false,
    errorMessage: 'Veuillez indiquer l\'objet de votre demande',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })

  const [formInputMessage, setFormInputMessage] = useState<InputProps>({
    label: 'Message',
    name: 'message',
    error: false,
    errorMessage: 'Veuillez saisir votre message : minimun 15 charactères',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })

  /**
   * Validate form with JS
   * @returns {boolean}
   */
  const validForm = ():boolean => {
    // Validator Rules
    const checkLastname = !Validator.checkMinLength(formInputLastname.value ?? '', 3)
    const checkFirstname = !Validator.checkMinLength(formInputFirstname.value ?? '', 3)
    const checkEmail = !Validator.checkEmail(formInputEmail.value ?? '')
    const checkSubject = !Validator.checkMinLength(formInputSubject.value ?? '', 3)
    const checkMessage = !Validator.checkMinLength(formInputMessage.value ?? '', 15)

    // Set State with validator
    checkLastname && setFormInputLastname({...formInputLastname, error: true})
    checkFirstname && setFormInputFirstname({...formInputFirstname, error: true})
    checkEmail && setFormInputEmail({...formInputEmail, error: true})
    checkSubject && setFormInputSubject({...formInputSubject, error: true})
    checkMessage && setFormInputMessage({...formInputMessage, error: true})

    // Return result check Validator
    return checkLastname || checkFirstname || checkEmail || checkSubject || checkMessage ? false : true
  }

  /**
   * Create Object User with formData
   * @returns {IContactMessage}
   */
  const getObjectFormData = (): IContactMessage => {
    
    const userDataStorage : IContactMessage = {
      firstname : formInputFirstname.value,
      lastname: formInputLastname.value,
      email: formInputEmail.value,
      subject: formInputSubject.value,
      // format HTML
      message: `<p>${formInputMessage.value?.replace( /\n/g, '<br />' )}</p>`
    }
    
    return userDataStorage     
  }

  return (
    <div className="wrapper-form">
      <form className="form form--light">
        <div className="form__row">
          <Input 
            label={formInputLastname.label}
            name={formInputLastname.name}
            errorMessage={formInputLastname.errorMessage}
            error={formInputLastname.error}
            onChange={(inputValue : string) => setFormInputLastname( {...formInputLastname, value: inputValue, error: false } )} 
            disabled={formDisabled}
          />
          <Input 
            label={formInputFirstname.label}
            name={formInputFirstname.name}
            errorMessage={formInputFirstname.errorMessage}
            error={formInputFirstname.error}
            onChange={(inputValue : string) => setFormInputFirstname( {...formInputFirstname, value: inputValue, error: false } )}
            disabled={formDisabled}
          />
        </div>
        <Input
          label={formInputEmail.label}
          name={formInputEmail.name}
          errorMessage={formInputEmail.errorMessage}
          error={formInputEmail.error}
          onChange={(inputValue : string) => setFormInputEmail( {...formInputEmail, value: inputValue, error: false } )}
          disabled={formDisabled}
        />
        <Input
          label={formInputSubject.label}
          name={formInputSubject.name}
          errorMessage={formInputSubject.errorMessage}
          error={formInputSubject.error}
          onChange={(inputValue : string) => setFormInputSubject( {...formInputSubject, value: inputValue, error: false } )}
          disabled={formDisabled}
        />
        <TextArea 
          label={formInputMessage.label}
          name={formInputMessage.name}
          errorMessage={formInputMessage.errorMessage}
          error={formInputMessage.error}
          onChange={(inputValue : string) => setFormInputMessage( {...formInputMessage, value: inputValue, error: false } )}
          disabled={formDisabled}
        />
        <div className="form__row">
          <Button
            label="Envoyer"
            validate={formValidate}
            disabled={formDisabled}
            loading= {formIsLoading}
            callback={ () => {
              const valid = validForm()
              const objectFormData = getObjectFormData() 
              if(onSubmit) onSubmit(objectFormData, valid)
            }}
          />
        </div>
      </form>
      {childFooter ?? null}
    </div>
  );
}

export default FormContact