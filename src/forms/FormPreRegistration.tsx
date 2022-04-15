import { InputProps } from "../types/InterfaceForms"

import { FunctionComponent, useEffect, useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import SelectBox from "../components/SelectBox"
import Checkbox from "../components/Checkbox"
import PopupDial, { PopupAlert } from "../components/PopupDial"
import { IpreRegisterUser } from "../types/InterfacesStorageAPI"
import API from "../services/Api"
import { Validator } from "../utils/formValidator"
import { inputAdornmentClasses } from "@mui/material"

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
    choices: ['Caser un.e am.ie célibataire', 'Trouver l\'amour'],
    value: ''
  })
  const [formInputCheckbox, setFormInputCheckbox] = useState<InputProps>({
    label: 'J\'accèpte de recevoir des informations de la part de Case Tes Potes.',
    name: 'subscribe',
    error: false,
    errorMessage: 'Veuillez accepter de recevoir les informations',
    checked: false
  })

  const [showPopup, setShowPopup] = useState<boolean>(false)

  const [displayPopup, setDisplayPopup] = useState({
    type: PopupAlert.alert,
    message: 'dqssqd'
  })

  const validateForm = () => {
    let validForm : boolean
    let userDataStorage : IpreRegisterUser

    const listInputs: InputProps[] = [
      formInputLastname,
      formInputFirstname,
      formInputEmail,
      formInputPhone,
      formInputChoice,
      formInputCheckbox
    ]

    // Set State with validator
    setFormInputLastname({...formInputLastname, error: !Validator.checkMinLength(formInputLastname.value ?? '', 3)})
    setFormInputFirstname({...formInputFirstname, error: !Validator.checkMinLength(formInputFirstname.value ?? '', 3)})
    setFormInputEmail({...formInputEmail, error: !Validator.checkEmail(formInputEmail.value ?? '')})
    setFormInputPhone({...formInputPhone, error: !Validator.checkPhoneNumber(formInputPhone.value ?? '')})
    setFormInputChoice({...formInputChoice, error: formInputChoice.value === ''})
    setFormInputCheckbox({...formInputCheckbox, error: !formInputCheckbox.checked})

    // Check errors on Inputs
    validForm = true
    listInputs.forEach( input => {
      if(input.error) {
        validForm = false
        return
      }
    })

    // Create Object data storage
    userDataStorage = {
      firstname : formInputFirstname.value,
      lastname: formInputLastname.value,
      email: formInputEmail.value,
      phone: formInputPhone.value,
      intention: formInputChoice.value
    }

    return {
      valid: validForm,
      data: userDataStorage
    }
  }

  const storeData = async (userDate : IpreRegisterUser, validForm : boolean) => {
    if(validForm) {
      await API.postPreRegisterUserData(userDate)
        .then((resp) => {
          setDisplayPopup({
            type: PopupAlert.success,
            message: `Félicitation ${resp.firstname}, tu fais partie des futures testeurs de l'application case tes potes`
          })
        })
        .catch((e:any) => {
          if(e.status === 409) {
            setDisplayPopup({
              type: PopupAlert.alert,
              message: `Tu es déja inscris en tant que testeur de l'application case tes potes`
            })
          } else {
            setDisplayPopup({
              type: PopupAlert.alert,
              message: `Une erreur c'est produite lors de l'inscription, veuillez contacter l'administrateur`
            })
          }
        })
    } else {
      setDisplayPopup({
        type: PopupAlert.alert,
        message: `Certains champs comportent des erreurs dans le formulaire`
      })
    }
  }

  return (
    <form className="form">
      {showPopup ? (
        <PopupDial type={displayPopup.type} message={displayPopup.message} />
      ) : null}
      <div className="row">
        <Input 
          label={formInputLastname.label}
          name={formInputLastname.name}
          errorMessage={formInputLastname.errorMessage}
          error={formInputLastname.error}
          onChange={(inputValue : string) => setFormInputLastname( {...formInputLastname, value: inputValue, error: false } )}
        />
        <Input 
          label={formInputFirstname.label}
          name={formInputFirstname.name}
          errorMessage={formInputFirstname.errorMessage}
          error={formInputFirstname.error}
          onChange={(inputValue : string) => setFormInputFirstname( {...formInputFirstname, value: inputValue, error: false } )}
        />
      </div>
      <div className="row">
        <Input
          label={formInputEmail.label}
          name={formInputEmail.name}
          errorMessage={formInputEmail.errorMessage}
          error={formInputEmail.error}
          onChange={(inputValue : string) => setFormInputEmail( {...formInputEmail, value: inputValue, error: false } )}
        />
        <Input
          label={formInputPhone.label}
          name={formInputPhone.name}
          errorMessage={formInputPhone.errorMessage}
          error={formInputPhone.error}
          onChange={(inputValue : string) => setFormInputPhone( {...formInputPhone, value: inputValue, error: false } )}
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
      />
      <Checkbox 
        label={formInputCheckbox.label}
        name={formInputCheckbox.name}
        error={formInputCheckbox.error}
        onChange={(checked : boolean) => {
          setFormInputCheckbox({...formInputCheckbox, checked: checked, error: false })}
        }
      />
      <div className="row">
        <Button
          label="Je me pré-inscris"
          callback={ async () => {
            const objectFormData = validateForm()                        
            storeData(objectFormData.data, objectFormData.valid)
            setShowPopup(true)
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