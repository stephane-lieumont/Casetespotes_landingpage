import { FunctionComponent } from "react"

export enum PopupAlert {
  alert,
  warning,
  success
}

type PopupProps = {
  type?: PopupAlert,
  message?: string
}

const PopupDial: FunctionComponent<PopupProps> = ({type = PopupAlert.alert, message = 'Message d\'erreur'}) => {
  return (
    <div className={`popup-dial
      ${type === PopupAlert.alert && 'popup-dial--alert'}
      ${type === PopupAlert.warning && 'popup-dial--warning'}
      ${type === PopupAlert.success && 'popup-dial--success'}    
    `}>
      <p className="text--caption">{message}</p>
    </div>
  );
}

export default PopupDial