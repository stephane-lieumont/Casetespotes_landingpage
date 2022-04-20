import { FunctionComponent, useEffect, useState } from "react"
import { InputProps } from "../types/InterfaceForms"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import SelectBox from "../components/Forms/SelectBox"
import Checkbox from "../components/Forms/Checkbox"
import PopupDial, { PopupAlert } from "../components/PopupDial"
import { IpreRegisterUser } from "../types/InterfacesStorageAPI"
import API from "../services/Api"
import { Validator } from "../utils/formValidator"
import { AxiosError } from "axios"

const FormPreRegistration: FunctionComponent = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [hidePopup, setHidePopup] = useState<boolean>(false)
  const [formDisabled, setFormDisabled] =  useState<boolean>(false)

  // Form Controllers
  const [formInputLastname, setFormInputLastname] = useState<InputProps>({
    label: 'Nom',
    name: 'lastname',
    error: false,
    errorMessage: 'Veuillez saisir votre Nom',
    value: '',
    disabled: formDisabled,
  })
  const [formInputFirstname, setFormInputFirstname] = useState<InputProps>({
    label: 'Prénom',
    name: 'firstname',
    error: false,
    errorMessage: 'Veuillez saisir votre Prénom',
    value: '',
    disabled: formDisabled,
  })
  const [formInputEmail, setFormInputEmail] = useState<InputProps>({
    label: 'Email',
    name: 'email',
    error: false,
    errorMessage: 'Veuillez saisir une adresse mail valide',
    value: '',
    disabled: formDisabled,
  })
  const [formInputPhone, setFormInputPhone] = useState<InputProps>({
    label: 'Téléphone',
    name: 'phone',
    error: false,
    errorMessage: 'Saisir un numéro à 10 chiffres',
    value: '',
    disabled: formDisabled,
  })
  const [formInputChoice, setFormInputChoice] = useState<InputProps>({
    label: 'Je souhaites...' ,
    name: 'wish',
    placeholder: 'Selectionnez un choix',
    error: false,
    errorMessage: 'Veuillez choisir une option',
    choices: ['Caser un.e am.ie célibataire', 'Trouver l\'amour'],
    value: '',
    disabled: formDisabled,
  })
  const [formInputCheckbox, setFormInputCheckbox] = useState<InputProps>({
    label: 'J\'accèpte de recevoir des informations de la part de Case Tes Potes.',
    name: 'subscribe',
    error: false,
    errorMessage: 'Veuillez accepter de recevoir les informations',
    checked: false,
    disabled: formDisabled,
  })

  const [formIsLoading, setFormIsLoading] = useState<boolean>(false)

  const [displayPopup, setDisplayPopup] = useState({
    type: PopupAlert.alert,
    message: ''
  })

  // Let show popup daley to desappear
  useEffect(() => {
    const delay: number = 5000

    if(showPopup) {
      const timer = setTimeout(() => {
        setHidePopup(true)
        clearTimeout(timer)
      }, delay)

      const timer2 = setTimeout(() => {
        setShowPopup(false)
        setHidePopup(false)
        clearTimeout(timer2)
      }, delay + 500)
    }
  }, [showPopup])

  /**
   * Validate form with JS
   * @returns {boolean}
   */
  const validForm = ():boolean => {
    // Validator Rules
    const checkLastname : boolean = !Validator.checkMinLength(formInputLastname.value ?? '', 3)
    const checkFirstname : boolean = !Validator.checkMinLength(formInputFirstname.value ?? '', 3)
    const checkEmail : boolean = !Validator.checkEmail(formInputEmail.value ?? '')
    const checkPhone : boolean = !Validator.checkPhoneNumber(formInputPhone.value ?? '')
    const checkChoice : boolean = formInputChoice.value === ''
    const checkCheckbox: boolean = !formInputCheckbox.checked

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
    let userDataStorage : IpreRegisterUser
    
    // Create Object data storage
    userDataStorage = {
      firstname : formInputFirstname.value,
      lastname: formInputLastname.value,
      email: formInputEmail.value,
      phone: formInputPhone.value,
      intention: formInputChoice.value
    }
    
    return userDataStorage    
  }

  /**
   * Data Storage with call API
   * @param {IpreRegisterUser} userDate 
   * @param {boolean} validForm 
   */
  const storeData = async (userDate : IpreRegisterUser, validForm : boolean) => {  
    setShowPopup(false)
    setDisplayPopup({
      type: PopupAlert.alert,
      message: ''
    })

    if(validForm) {
      await API.postPreRegisterUserData(userDate)
        .then((resp) => {
          setDisplayPopup({
            type: PopupAlert.success,
            message: `Félicitation ${resp.firstname}, tu fais partie des futures testeurs de l'application case tes potes`
          })
          setFormDisabled(true)
        })
        .catch((e: AxiosError) => {
          if(e.response?.status === 400) {
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
        .finally(() => {
          setShowPopup(true);
          setFormIsLoading(false)
        })
    } else {
      setDisplayPopup({
        type: PopupAlert.alert,
        message: `Certains champs comportent des erreurs dans le formulaire`
      })
      setShowPopup(true);
      setFormIsLoading(false)
    }
  }

  return (
    <form className="form">
      {showPopup ? (
        <div className="form__popup">
          <PopupDial type={displayPopup.type} message={displayPopup.message} fadeout={hidePopup} />
        </div>        
      ) : null}
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
      <div className="form__row">
        <Button
          label="Je me pré-inscris"
          disabled={formDisabled}
          loading= {formIsLoading}
          callback={ () => {
            setFormIsLoading(true)
            const valid = validForm()
            const objectFormData = getObjectFormData() 
            storeData(objectFormData, valid)
          }}
        />
        {/*
        <Button 
          label="En savoir plus"
          buttonLink
          outlined
          navigate="/a-propos"
        />
        */}
      </div>
    </form>
  );
}

export default FormPreRegistration