import { InputLabel, FormControl, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { FunctionComponent, useState, useEffect } from "react"
import { InputProps } from "../types/InterfaceForms";
import { firstLetterUpper } from './../utils/formatString'; 

const SelectBox: FunctionComponent<InputProps> = ({label = "Label", placeholder= "Select choice", name = "select", choices = [], error = false, errorMessage = "Erreur message", value ='', onChange = () => {} }) => {
  const [valueInput, setValueInput] = useState(value)
  const [errorInput, setErrorInput] = useState(error)

  useEffect(() => {
    setValueInput(value)
  }, [value])

  useEffect(() => {
    setErrorInput(error)
  }, [error])
  
  const handleChange = (event: SelectChangeEvent) => {
    setValueInput(event.target.value)
    onChange(event.target.value)
  }
  
  return (
    <div className={`selectbox row row--start ${ errorInput ? 'selectbox--error' : ''}`}>
    <div className="selectbox__title">{label}</div>
    <FormControl variant="standard" fullWidth className="selectbox__container">
      <InputLabel>{placeholder}</InputLabel>
      <Select
        id="select-intentions"
        value={valueInput}
        label="je_souhaite"
        onChange={handleChange}
      >
        {choices.map((item, key) => {
          return <MenuItem key={key} value={item}>{firstLetterUpper(item)}</MenuItem>
        })}
      </Select>
    </FormControl>
      {errorInput ? (
        <div className="selectbox__container__error-message text--pink text--caption">{errorMessage}</div>
      ) : null}
    </div>    
  );
}

export default SelectBox

/*

  const handleChange = (event : ChangeEvent<HTMLSelectElement>) => {
    onChange!(event.target.value)
  }
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
      */