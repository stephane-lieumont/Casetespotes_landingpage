import { FunctionComponent } from "react"
import { ButtonProps } from "../types/InterfaceForms";

const Button: FunctionComponent<ButtonProps> = ({label = "button", outlined = false, buttonLink = false, navigate = '/', callback}) => {
  if(buttonLink) {
    return (
      <div className={`button ${ outlined && 'button--outlined'}`}>
        <a href={navigate}>{label}</a>
      </div>    
    );
  }
  
  return (
    <div className={`button ${ outlined && 'button--outlined'}`}>
      <button type="button" onClick={callback}>{label}</button>
    </div>    
  );
}

export default Button