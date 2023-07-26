import React, { Fragment, FunctionComponent, useEffect, useState} from "react"
import Footer from "../layout/Footer"
import FormPreRegistration from "../forms/FormPreRegistration"
import ObserverReveal from "../modules/ObserverReveal"
import { HomepageProps } from "../types/Page.intf"

const Homepage: FunctionComponent<HomepageProps> = ({onSubmitPreRegister, formIsLoading = false, formSubmitIsValid = false}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const listNodes = document.querySelectorAll('.reveal')
    const observerReveal = new ObserverReveal(listNodes, 'reveal')
    observerReveal.observe()
  }, [])

  useEffect(() => {
    setIsLoading(formIsLoading)
  }, [formIsLoading])

  useEffect(() => {
    setIsValid(formSubmitIsValid)
  }, [formSubmitIsValid])

  return (
    <Fragment>
      <main id ="homepage">
        <section id="homepage__content">
          <div id="homepage__bubble">
            <aside className="bubble">
              <h2 className="bubble__content">Application gratuite pendant 6 mois pour toute préinscription</h2>
            </aside>          
          </div>
          <div className="reveal">
            <FormPreRegistration
              onSubmit={onSubmitPreRegister}
              submitIsValid={isValid}
              submitIsLoading={isLoading}
              childHeader={
                <Fragment>
                  <h1 className="text--center reveal-1">Avant-première</h1>
                  <p id="homepage__intro" className="reveal-3">
                    Découvrez bientôt en version Bêta-Test notre nouvelle application de rencontre mettant l&apos;amitié au coeur de l&apos;amour pour faciliter les rencontres et accompagner les célibataires.
                  </p>
                </Fragment>
              }
              className='reveal-5'
              childFooter={
                <Fragment>
                  <div id="homepage__footer" className="reveal-6">
                    <p className="text--caption">
                    Les informations recueillies sur ce formulaire sont enregistrées par Case Tes Potes pour permettre de vous adresser des contenus adaptés à votre profil. 
                    Elles sont destinées au service Marketing. Conformément à la loi &quot;Informatique et Liberté&quot;, vous pouvez exercer votre droit d&apos;accès aux données vous concernant 
                    et les faire rectifier en écrivant à <a href="mailto:contact@casetespotes.com">contact@casetespotes.com</a>.</p>
                  </div>
                </Fragment>              
              }
            />
          </div>
        </section>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Homepage