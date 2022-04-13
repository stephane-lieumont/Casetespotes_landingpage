import { InputProps } from "../types/InterfaceForms"

import { FunctionComponent, useEffect, useState } from "react"
import Input from "../components/Input"
import Button from "./Button"
import SelectBox from "./SelectBox"
import Checkbox from "./Checkbox"

const FormPreRegistration: FunctionComponent = () => {
  // Form Controllers
  const [formInputLastname, setFormInputLastname] = useState<InputProps>({
    label: 'Nom',
    name: 'lastname',
    error: false,
    errorMessage: 'Veuillez saisir votre Nom',
    value: ''
  })
  const [formInputFirstname, setFormInputFirstname] = useState<InputProps>({
    label: 'Prénom',
    name: 'firstname',
    error: false,
    errorMessage: 'Veuillez saisir votre Prénom',
    value: ''
  })
  const [formInputEmail, setFormInputEmail] = useState<InputProps>({
    label: 'Email',
    name: 'email',
    error: false,
    errorMessage: 'Veuillez saisir une adresse mail valide',
    value: ''
  })
  const [formInputPhone, setFormInputPhone] = useState<InputProps>({
    label: 'Téléphone',
    name: 'phone',
    error: false,
    errorMessage: 'Veuillez saisir votre numéro de téléphone',
    value: ''
  })
  const [formInputChoice, setFormInputChoice] = useState<InputProps>({
    label: 'Je souhaites...' ,
    name: 'wish',
    placeholder: 'Selectionnez un choix',
    error: false,
    errorMessage: 'Veuillez choisir une option',
    choices: ['Caser un am.ie célibataire', 'Rencontrer l\'âme soeur'],
    value: ''
  })
  const [formInputCheckbox, setFormInputCheckbox] = useState<InputProps>({
    label: 'J\'accèpte de recevoir des informations de la part de Case Tes Potes.',
    name: 'subscribe',
    error: false,
    errorMessage: 'Veuillez accepter de recevoir les informations',
    value: false
  })
  const [formControllers, setFormControllers] = useState<Array<InputProps>>([
    formInputLastname,
    formInputFirstname,
    formInputEmail,
    formInputPhone
  ])

  // Update form cotrollers when controller onchange event
  useEffect(() => {
    setFormControllers([
      formInputLastname,
      formInputFirstname,
      formInputEmail,
      formInputPhone,
      formInputChoice,
      formInputCheckbox,
    ])
  }, [formInputLastname, formInputFirstname, formInputEmail, formInputPhone, formInputChoice, formInputCheckbox])

  
  return (
    <form className="form">
      <div className="row">
        <Input 
          label={formInputLastname.label}
          name={formInputLastname.name}
          errorMessage={formInputLastname.errorMessage}
          error={formInputLastname.error}
          onChange={(inputValue : string) => setFormInputLastname( {...formInputLastname, value: inputValue } )}
        />
        <Input 
          label={formInputFirstname.label}
          name={formInputFirstname.name}
          errorMessage={formInputFirstname.errorMessage}
          error={formInputFirstname.error}
          onChange={(inputValue : string) => setFormInputFirstname( {...formInputFirstname, value: inputValue} )}
        />
      </div>
      <div className="row">
        <Input
          label={formInputEmail.label}
          name={formInputEmail.name}
          errorMessage={formInputEmail.errorMessage}
          error={formInputEmail.error}
          onChange={(inputValue : string) => setFormInputEmail( {...formInputEmail, value: inputValue} )}
        />
        <Input
          label={formInputPhone.label}
          name={formInputPhone.name}
          errorMessage={formInputPhone.errorMessage}
          error={formInputPhone.error}
          onChange={(inputValue : string) => setFormInputPhone( {...formInputPhone, value: inputValue} )}
        />
      </div>
      <SelectBox 
        label={formInputChoice.label} 
        name={formInputChoice.name} 
        placeholder={formInputChoice.placeholder}
        choices={formInputChoice.choices}
        onChange={(inputValue: string) => setFormInputChoice( {...formInputChoice, value: inputValue} )}
      />
      <Checkbox 
        label={formInputCheckbox.label}
        name={formInputCheckbox.name}
        value={formInputCheckbox.value}
        onChange={(checked : boolean) => {
          setFormInputCheckbox({...formInputCheckbox, value: checked})}
        }
      />
      <div className="row">
        <Button
          label="Je me pré-inscris"
          callback={() => {
            console.log(formControllers)
          }}
        />
        <Button 
          label="En savoir plus"
          buttonLink
          outlined
          navigate="/"
        />
      </div>
    </form>
  );
}

export default FormPreRegistration