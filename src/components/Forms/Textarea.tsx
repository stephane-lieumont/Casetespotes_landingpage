import { FunctionComponent, useState, ChangeEvent, useEffect } from "react"
import { InputProps } from "../../types/Forms.intf"

const TextArea: FunctionComponent<InputProps> = ({label = 'Label', name = 'inputName', errorMessage = "Erreur message", error = false, onChange, disabled = false} : InputProps) => {

  const [onFocus, setOnFocus] = useState<boolean>(false)
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(true)
  const [errorStatus, setErrorStatus] = useState<boolean>(error)

  useEffect(() => {
    setErrorStatus(error)
  }, [error])

  const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
    if(valueIsEmpty && event.target.value !== '') {
      setValueIsEmpty(false)
    } else {
      setValueIsEmpty(true)
    }
    onChange!(event.target.value)
  }

  const handleOnFocus = () => {
    setOnFocus(true)
  }

  const handleOnBlur = (event : ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value === '' ? setValueIsEmpty(true) : setValueIsEmpty(false) 
    setOnFocus(false)
  }

  return (
    <div className={`textarea ${ !valueIsEmpty ? 'textarea--active' : ''} ${ onFocus ? 'textarea--focus' : ''} ${ errorStatus ?  'textarea--error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleChange} disabled={disabled}></textarea>
      {errorStatus && (
      <p className="textarea__error-message text--caption text--pink">{errorMessage}</p>
      )}
    </div>
  );
}

export default TextArea