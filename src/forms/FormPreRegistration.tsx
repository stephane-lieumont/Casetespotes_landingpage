import React, { FunctionComponent, useEffect, useState } from "react"
import { InputProps } from "../types/Forms.intf"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import SelectBox from "../components/Forms/SelectBox"
import Checkbox from "../components/Forms/Checkbox"
import { IpreRegisterUser } from "../types/StorageAPI.intf"
import { Validator } from "../utils/formValidator"
import { FormComponent } from "../types/Forms.intf"

const FormPreRegistration: FunctionComponent<FormComponent> = ({childHeader = null, childFooter = null, className = '', submitIsValid = false, submitIsLoading = false, onSubmit}) => {
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
  const [formInputPhone, setFormInputPhone] = useState<InputProps>({
    label: 'Téléphone',
    name: 'phone',
    error: false,
    errorMessage: 'Saisir un numéro à 10 chiffres',
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })
  const [formInputChoice, setFormInputChoice] = useState<InputProps>({
    label: 'Je souhaite...' ,
    name: 'wish',
    placeholder: 'Selectionnez un choix',
    error: false,
    errorMessage: 'Veuillez choisir une option',
    choices: ['Caser un.e am.ie célibataire', 'Trouver l\'amour'],
    value: '',
    disabled: formDisabled,
    onChange: () => { return }
  })
  const [formInputCheckbox, setFormInputCheckbox] = useState<InputProps>({
    label: 'J\'accepte de recevoir des informations de la part de Case Tes Potes.',
    name: 'subscribe',
    error: false,
    errorMessage: 'Veuillez accepter de recevoir les informations',
    checked: false,
    disabled: formDisabled,
    onChange: () => { return }
  })

  /**
   * Validate form with JS
   * @returns {boolean}
   */
  const validForm = ():boolean => {
    // Validator Rules
    const checkLastname = !Validator.checkMinLength(formInputLastname.value ?? '', 1)
    const checkFirstname = !Validator.checkMinLength(formInputFirstname.value ?? '', 1)
    const checkEmail = !Validator.checkEmail(formInputEmail.value ?? '')
    const checkPhone = !Validator.checkPhoneNumber(formInputPhone.value ?? '')
    const checkChoice = formInputChoice.value === ''
    const checkCheckbox = !formInputCheckbox.checked

    // Set State with validator
    checkLastname && setFormInputLastname({...formInputLastname, error: true})
    checkFirstname && setFormInputFirstname({...formInputFirstname, error: true})
    checkEmail && setFormInputEmail({...formInputEmail, error: true})
    checkPhone && setFormInputPhone({...formInputPhone, error: true})
    checkChoice && setFormInputChoice({...formInputChoice, error: true})
    checkCheckbox && setFormInputCheckbox({...formInputCheckbox, error: true })

    // Return result check Validator
    return checkLastname || checkFirstname || checkEmail || checkPhone || checkChoice || checkCheckbox ? false : true
  }

  /**
   * Create Object User with formData
   * @returns {IpreRegisterUser}
   */
  const getObjectFormData = (): IpreRegisterUser => {
    const userDataStorage : IpreRegisterUser = {
      firstname : formInputFirstname.value,
      lastname: formInputLastname.value,
      email: formInputEmail.value,
      phone: formInputPhone.value,
      intention: formInputChoice.value
    }
    
    return userDataStorage    
  }
  
  return (
    <div className={"wrapper-form " + className}>
      {childHeader ?? null}
      <form className="form">
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
        <div className="form__row">
          <Input
            label={formInputEmail.label}
            name={formInputEmail.name}
            errorMessage={formInputEmail.errorMessage}
            error={formInputEmail.error}
            onChange={(inputValue : string) => setFormInputEmail( {...formInputEmail, value: inputValue, error: false } )}
            disabled={formDisabled}
          />
          <Input
            label={formInputPhone.label}
            name={formInputPhone.name}
            errorMessage={formInputPhone.errorMessage}
            error={formInputPhone.error}
            onChange={(inputValue : string) => setFormInputPhone( {...formInputPhone, value: inputValue, error: false } )}
            disabled={formDisabled}
          />
        </div>
        <SelectBox 
          label={formInputChoice.label} 
          name={formInputChoice.name} 
          placeholder={formInputChoice.placeholder}
          choices={formInputChoice.choices}
          errorMessage={formInputChoice.errorMessage}
          error={formInputChoice.error}
          onChange={(inputValue: string) => setFormInputChoice( {...formInputChoice, value: inputValue, error: false } )}
          disabled={formDisabled}
        />
        <Checkbox 
          label={formInputCheckbox.label}
          name={formInputCheckbox.name}
          error={formInputCheckbox.error}
          onChange={(checked : boolean) => {
            setFormInputCheckbox({...formInputCheckbox, checked: checked, error: false })}
          }
          disabled={formDisabled}
        />
        <div className="controls form__row">
          <Button
            label="Je me pré-inscris"
            validate={formValidate}
            disabled={formDisabled}
            loading= {formIsLoading}
            callback={ async () => {              
              const valid = validForm()
              const objectFormData = getObjectFormData()
              if(onSubmit) onSubmit(objectFormData, valid)
            }}
          />          
          <Button 
            label="En savoir plus"
            buttonLink
            outlined
            navigate="/a-propos-de-case-tes-potes"
          />
        </div>
      </form>
      {childFooter ?? null}
    </div>
  );
}

export default FormPreRegistration