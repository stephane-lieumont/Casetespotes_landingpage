import { FunctionComponent } from "react"
import { ButtonProps } from "../../types/InterfaceForms";

const Button: FunctionComponent<ButtonProps> = ({label = "button", outlined = false, buttonLink = false, disabled = false, navigate = '/', callback}) => {
  if(buttonLink) {
    return (
      <div className={`button ${ outlined && 'button--outlined'}`}>
        <a href={navigate}>{label}</a>
      </div>    
    );
  }
  
  return (
    <div className={`button ${ outlined ? 'button--outlined' : ''} ${ disabled ? 'button--disabled' : ''}`}>
      <button type="button" onClick={callback}>{label}</button>
    </div>    
  );
}

export default Button