import { Fragment, FunctionComponent} from "react"
import Footer from "../layout/Footer"
import FormPreRegistration from "../forms/FormPreRegistration"

const Homepage: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="page">
        <main id ="homepage">
          <section id="homepage__content">
            <h1 className="text--center">Avant-première</h1>
            <p id="homepage__intro">
              Découvrez bientôt en version Bêta-Test notre nouvelle application de rencontre mettant l'amitié au coeur de l'amour pour faciliter les rencontres et accompagner les célibataires.
            </p> 
            <FormPreRegistration />
            <div id="homepage__footer">
              <p className="text--caption">
                Les informations recueillies sur ce formulaire sont enregistrées par Case Tes pootes pour permettre de vous adresser des contenus adaptés à votre profile. 
                Elles sont destinées au service marketing. Conformément à la loi "Informatique et Liberté", vous pouvez exercer votre droit d'accès aux données vous concernant et les faire réctifier en contactant : contact@casetespotes.com
              </p>
            </div>
            <aside className="bubble">
              <h2 className="bubble__content">Application gratuite pendant 1 an pour toute préinscription</h2>
            </aside>
          </section>
        </main>
        <Footer/>
      </div> 
    </Fragment>
  );
}

export default Homepage