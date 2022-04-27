import { Fragment, FunctionComponent, useEffect} from "react"
import Footer from "../layout/Footer"
import FormPreRegistration from "../forms/FormPreRegistration"
import ObserverReveal from "../modules/ObserverReveal"

const Homepage: FunctionComponent = () => {

  useEffect(() => {
    const listNodes = document.querySelectorAll('.reveal')
    const observerReveal = new ObserverReveal(listNodes, 'reveal')
    observerReveal.observe()
  }, [])

  return (
    <Fragment>      
      <main id ="homepage">
        <section id="homepage__content">
          <div id="homepage__bubble">
            <aside className="bubble">
              <h2 className="bubble__content">Application gratuite pendant 1 an pour toute préinscription</h2>
            </aside>          
          </div>
          <div className="reveal">
            <FormPreRegistration
              childHeader={
                <Fragment>
                  <h1 className="text--center reveal-1">Avant-première</h1>
                  <p id="homepage__intro" className="reveal-3">
                    Découvrez bientôt en version Bêta-Test notre nouvelle application de rencontre mettant l'amitié au coeur de l'amour pour faciliter les rencontres et accompagner les célibataires.
                  </p>
                </Fragment>
              }
              className='reveal-5'
              childFooter={
                <Fragment>
                  <div id="homepage__footer" className="reveal-6">
                    <p className="text--caption">
                      Les informations recueillies sur ce formulaire sont enregistrées par Case Tes pootes pour permettre de vous adresser des contenus adaptés à votre profile. 
                      Elles sont destinées au service marketing. Conformément à la loi "Informatique et Liberté", vous pouvez exercer votre droit d'accès aux données vous concernant et les faire réctifier en contactant : contact@casetespotes.com
                    </p>
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