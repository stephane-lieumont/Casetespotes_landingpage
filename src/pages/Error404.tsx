import { FunctionComponent} from "react"

const Error404: FunctionComponent = () => {
  return (
    <div className="page" id="error404">
      <h1 className="text--center">Erreur 404</h1>
      <h2 className="text--center text--white">Désolé, la page que vous souhaitez consulter est introuvable !</h2>
    </div>      
  );
}

export default Error404