import { FunctionComponent, useState, useEffect } from "react"
import { InputProps } from "../types/InterfaceForms"

const Checkbox: FunctionComponent<InputProps> = ({label = "checkbox", name="checkbox", checked = false, error = false, onChange}) => {
  const [checkedInput, setCheckedInput] = useState<boolean>(checked); 
  const [errorStatus, setErrorStatus] = useState<boolean>(error)
  
  useEffect(() => {
    setErrorStatus(error)
  }, [error])

  const handleChange = () => {
    setCheckedInput(!checkedInput); 
    onChange!(!checkedInput)
  }

  return (
    <div className={`checkbox ${errorStatus ? 'checkbox--error' : ''} row row--start`}>      
      <input id="checkbox" onChange={handleChange} name={name} checked={checkedInput} type="checkbox" />
      <label htmlFor="checkbox" className={`text--caption ${errorStatus ? 'text--pink' : ''}`}>{label}</label>
    </div>    
  );
}

export default Checkbox