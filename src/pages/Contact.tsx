import { Fragment, FunctionComponent, useEffect, useState} from "react"

import ObserverReveal from "../modules/ObserverReveal"

import Footer from "../layout/Footer"
import FormContact from "../forms/FormContact"

import map from "./../assets/pictures/map-location-casetespotes.jpg"

const Contact: FunctionComponent = () => {
  const [imgMapLoaded, setImgMapLoaded] = useState<boolean>(false)

  useEffect(() => {
    const listNodes = document.querySelectorAll('.reveal')
    const observerReveal = new ObserverReveal(listNodes, 'reveal')
    observerReveal.observe()
  }, [])

  return (
    <Fragment>
      <main id="contact">
        <section className="page__container reveal">
          <h1 className="text--center reveal-1">Nous Contacter</h1>
          <p className="text--indent reveal-2">Vos retours sont précieux, contactez-nous pour en savoir plus et nous aider à améliorer l’expérience Case Tes Potes !</p>
          <div className="flex-row flex-row--wrap flex-row--center">
            <div id="contact__map" className={`reveal-3 ${imgMapLoaded ? 'loaded' : ''}`}>
              <div id="contact__map__border">
                <img onLoad={() => setImgMapLoaded(true)} width="350" src={map} alt="localisation de la société case tes potes"/>
              </div>
            </div>
            <div className="flex-row__item reveal-4">
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
          <div className="reveal-5">
            <FormContact />
          </div>          
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default Contact