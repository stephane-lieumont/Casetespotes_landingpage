import { FunctionComponent, useEffect, useState } from "react"
import { InputProps } from "../types/InterfaceForms"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import PopupDial, { PopupAlert } from "../components/PopupDial"
import { Validator } from "../utils/formValidator"
import { FormComponent } from "../types/InterfaceForms"
import TextArea from "../components/Forms/Textarea"
import { IContactMessage } from "../types/InterfacesStorageAPI"
import API from "../services/Api"
import { AxiosError } from "axios"

const FormContact: FunctionComponent<FormComponent> = ({childHeader = null, childFooter = null}) => {
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
  const [formInputSubject, setFormInputSubject] = useState<InputProps>({
    label: 'Sujet',
    name: 'subject',
    error: false,
    errorMessage: 'Veuillez indiquer l\'objet de votre demande',
    value: '',
    disabled: formDisabled,
  })

  const [formInputMessage, setFormInputMessage] = useState<InputProps>({
    label: 'Message',
    name: 'message',
    error: false,
    errorMessage: 'Veuillez saisir votre message : minimun 15 charactères',
    value: '',
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
    const checkSubject : boolean = !Validator.checkMinLength(formInputSubject.value ?? '', 3)
    const checkMessage : boolean = !Validator.checkMinLength(formInputMessage.value ?? '', 15)

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
    
    let userDataStorage : IContactMessage
    
    // Create Object data storage
    userDataStorage = {
      firstname : formInputFirstname.value,
      lastname: formInputLastname.value,
      email: formInputEmail.value,
      subject: formInputSubject.value,
      // format HTML
      message: `<p>${formInputMessage.value!.replace( /\n/g, '<br />' )}</p>`
    }

    console.log(userDataStorage)
    
    return userDataStorage     
  }

  /**
   * Data Storage with call API
   * @param {IpreRegisterUser} userData 
   * @param {boolean} validForm 
   */
  const storeData = async (data : IContactMessage, validForm : boolean) => {  
    setShowPopup(false)
    setDisplayPopup({
      type: PopupAlert.alert,
      message: ''
    })

    if(validForm) {
      await API.sendEmailContact(data)
        .then((res) => {
          setDisplayPopup({
            type: PopupAlert.success,
            message: `Votre message a bien été envoyé`
          })
          setFormDisabled(true)
        })
        .catch((err: AxiosError) => {
          console.log(err)
          setDisplayPopup({
            type: PopupAlert.alert,
            message: `Une erreur c'est produite lors de l'inscription, veuillez contacter l'administrateur`
          })
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
    <div className="wrapper-form">
      {showPopup ? (
        <div className="form__popup">
          <PopupDial type={displayPopup.type} message={displayPopup.message} fadeout={hidePopup} />
        </div>        
      ) : null}
      {childHeader ?? null}
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
            disabled={formDisabled}
            loading= {formIsLoading}
            callback={ () => {
              setFormIsLoading(true)
              const valid = validForm()
              const objectFormData = getObjectFormData() 
              storeData(objectFormData, valid)
            }}
          />
        </div>
      </form>
      {childFooter ?? null}
    </div>
  );
}

export default FormContact