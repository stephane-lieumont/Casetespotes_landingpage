import { FunctionComponent, useEffect, useState } from "react"

export enum PopupAlert {
  alert,
  warning,
  success
}

type PopupProps = {
  type?: PopupAlert,
  message?: string,
  fadeout?: boolean
}

const PopupDial: FunctionComponent<PopupProps> = ({type = PopupAlert.alert, message = 'Message d\'erreur', fadeout = false}) => {
  const [fadeoutAnimation, setFadeoutAnimation] = useState<boolean>(fadeout)

  useEffect(() => {
    if(fadeout) {
      const timer = setTimeout(() => {
        setFadeoutAnimation(fadeout)
        clearTimeout(timer)
      }, 300)
    }    
  }, [fadeout])

  return (
    <div className={`popup-dial
      ${type === PopupAlert.alert ? 'popup-dial--alert' : ''}
      ${type === PopupAlert.warning ? 'popup-dial--warning' : ''}
      ${type === PopupAlert.success ? 'popup-dial--success': ''}
      ${fadeoutAnimation ? 'popup-dial--hide' : ''}    
    `}>
      <p className="text--caption">{message}</p>
    </div>
  );
}

export default PopupDial