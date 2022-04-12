import { FunctionComponent, useState, ChangeEvent, useEffect } from "react"

type InputProps = {
  label?: string,
  name?: string,
  errorMessage?: string,
  error?: boolean
}

const Input: FunctionComponent<InputProps> = ({label = 'Label', name = 'inputName', errorMessage = "Erreur message", error = true} : InputProps) => {

  const [onFocus, setOnFocus] = useState<boolean>(false)
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(true)
  const [errorStatus, setErrorStatus] = useState<boolean>(error)

  useEffect(() => {
    error ? setErrorStatus(true) : setErrorStatus(false)
  }, [error])

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    if(valueIsEmpty && event.target.value !== '') {
      setValueIsEmpty(false)
    } else {
      setValueIsEmpty(true)
    }
    console.log(event.target.value)
  }

  const handleOnFocus = () => {
    setOnFocus(true)
    setErrorStatus(false)
  }

  const handleOnBlur = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.value === '') {
      setValueIsEmpty(true)      
      setOnFocus(false)
    } else {
      setValueIsEmpty(false) 
    }
  }

  return (
    <div className={`input ${ onFocus ? 'input--focus' : ''} ${ errorStatus ?  'input--error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input name={name} onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleChange} />
      {errorStatus && (
      <p className="input__error-message text--caption text--pink">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input