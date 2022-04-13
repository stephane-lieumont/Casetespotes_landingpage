import { FunctionComponent, useState } from "react"
import { InputProps } from "../types/InterfaceForms"

const Checkbox: FunctionComponent<InputProps> = ({label = "checkbox", name="checkbox", value = false, onChange}) => {
  const [checked, setChecked] = useState<boolean | string>(value); 
  
  const handleChange = () => {
    setChecked(!checked); 
    onChange!(!checked)
  }

  return (
    <div className={`checkbox row row--start`}>      
      <input id="checkbox" onChange={handleChange} name={name} checked={checked === true ? true : false} type="checkbox" />
      <label htmlFor="checkbox" className="text--caption">{label}</label>
    </div>    
  );
}

export default Checkbox