import { Fragment, FunctionComponent } from "react"
import background from './../assets/pictures/background-landing-page.jpg'
import smartphone from './../assets/pictures/smartphone_splashscreen.png'
import Input from "../components/Input"

const Homepage: FunctionComponent = () => {
  return (
    <Fragment>
      <section id ="homepage">
        <div id="homepage__content">
          <h1 className="text--yellow text--center">Avant-première</h1>
          <p id="homepage__intro">
            Découvrez bientôt en version Vêta-Test notre nouvelle application de rencontre mettant l'amitié au coeur de l'amour pour faciliter les rencontres et accompagner les célibataires.
          </p> 
          <form className="form">
            <div className="row">
              <Input label={'Nom'} name={'lastname'} errorMessage={'Veuillez saisir votre Nom'} />
              <Input label={'Prénom'} name={'firstname'} errorMessage={'Veuillez saisir votre Prénom'}/>
            </div>
            <div className="row">
              <Input label={'Email'} name={'email'} errorMessage={'Veuillez saisir une adresse mail valide'}/>
              <Input label={'Téléphone'}  name={'phone'}  errorMessage={'Veuillez saisir votre numéro de téléphone'}/>
            </div>
          </form>
          <div id="homepage__footer">
            <p className="text--caption">
              Les informations recueillies sur ce formulaire sont enregistrées par Case Tes pootes pour permettre de vous adresser des contenus adaptés à votre profile. 
              Elles sont destinées au service marketing. Conformément à la loi "Informatique et Liberté", vous pouvez exercer votre droit d'accès aux données vous concernant et les faire réctifier en contactant : contact@casetespotes.com
            </p>
          </div>
          <aside className="bubble">
            <h2 className="bubble__content">Application gratuite pendant 1 an pour toute préinscription</h2>
          </aside>
        </div>
      </section>   
      <div className="smartphone">
          <img width="200" src={smartphone} alt="case tes potes home screen"/>
      </div>
      <div className="bg-full-width">
        <img width="500" src={background} alt="case tes potes lancement application"/>
      </div>
    </Fragment>
  );
}

export default Homepage