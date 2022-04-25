import { Fragment, FunctionComponent} from "react"

import Footer from "../layout/Footer"
import FormContact from "../forms/FormContact"

import map from "./../assets/pictures/map-location-casetespotes.jpg"

const Contact: FunctionComponent = () => {
  return (
    <Fragment>
      <main id="contact">
        <section className="page__container">
          <h1 className="text--center">Nous Contacter</h1>
          <p className="text--indent">Vos retours sont précieux, contactez-nous pour en savoir plus et nous aider à améliorer l’expérience Case Tes Potes !</p>
          <div className="flex-row flex-row--wrap flex-row--center">
            <div id="contact__map" className="flex-row__item">
              <img width="350" src={map} alt="localisation de la société case tes potes"/>
            </div>
            <div className="flex-row__item">
              <ul id="contact__infos">
                <li className="prepend-icon prepend-icon--pin">11, Esplanade André Michaux - 31130 Balma</li>
                <li className="prepend-icon prepend-icon--phone">06.51.28.51.20</li>
                <li className="prepend-icon prepend-icon--mail"><a href="mailto:contact@casetespotes.com">contact@casetespotes.com</a></li>
                <li id="contact__presse">
                  <h5>Contact presse</h5>
                  <p>SENECHAL Nawal <br />06.03.67.78.82</p>
                </li>
              </ul>
            </div>
          </div>
          <FormContact />
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default Contact