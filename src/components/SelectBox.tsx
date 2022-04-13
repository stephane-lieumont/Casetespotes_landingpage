import { FunctionComponent,ChangeEvent } from "react"
import { InputProps } from "../types/InterfaceForms";
import { firstLetterUpper } from './../utils/formatString'; 

const SelectBox: FunctionComponent<InputProps> = ({label = "Label", placeholder= "Select choice", name = "select", choices = [], error = false, errorMessage = "Erreur message", value ='', onChange = () => {} }) => {
  const handleChange = (event : ChangeEvent<HTMLSelectElement>) => {
    onChange!(event.target.value)
  }
  
  return (
    <div className={`selectbox row row--start ${ error && 'selectbox--error'}`}>
      <label>{label}</label>
      <div className="selectbox__container">      
        <select name={name} defaultValue={""} onChange={e => handleChange(e)}>
          <option className="option-label" value={typeof(value) === 'string' ? value : '' } disabled>{placeholder}</option>
          {choices.map((item, key) => {
            return <option key={key} className="option" value={item}>{firstLetterUpper(item)}</option>
          })}
        </select>
        {error && (
        <div className="selectbox__container__error-message text--pink text--caption">{errorMessage}</div>
        )}
      </div>
    </div>    
  );
}

export default SelectBox