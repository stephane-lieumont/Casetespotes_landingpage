import { Fragment, FunctionComponent} from "react"
import respect from './../assets/icons/respect-case-ton-pote.png'
import authentic from './../assets/icons/authentique-case-ton-pote.png'
import fun from './../assets/icons/fun-case-ton-pote.png'
import staffAmelie from './../assets/pictures/staff/case-tes-potes-equipe-Amelie.jpg'
import staffNicolas from './../assets/pictures/staff/case-tes-potes-equipe-Nicolas.jpg'
import staffNawal from './../assets/pictures/staff/case-tes-potes-equipe-Nawal.jpg'
import staffStephane from './../assets/pictures/staff/case-tes-potes-equipe-Stephane.jpg'
import Footer from "../layout/Footer"

const About: FunctionComponent = () => {
  return (
    <Fragment>
      <main id ="about">
        <section className="page__container">
          <h1 className="text--center">Qui sommes nous ?</h1>
          <p className="text--indent">
            Case Tes Potes veut casser les codes des sites de rencontre en mettant l'amitié au cœur de l'amour pour faciliter les 
            rencontres et accompagner les célibataires de la recherche de profils à l'organisation de la première rencontre.
            Ces dernier·ères n'ont plus qu'à se laisser guider et faire confiance à leur meilleur·e ami·e "Caseur" / "Caseuse".
          </p>
          <ul id="about__values">
            <li>
              <h3>Respect</h3>
              <img width="80" height="80" src={respect} alt="le respect est une valeur de Case Tes Potes" />
            </li>
            <li>
              <h3>Profils authentiques</h3>
              <img width="80" height="80" src={authentic} alt="Case Tes Potes garantis des profils authentiques" />
            </li>
            <li>
              <h3>Fun</h3>
              <img width="80" height="80" src={fun} alt="Case Tes Potes est une expérience fun" />
            </li>
          </ul>
          <h2 className="text--center">Le principe ?</h2>
          <p className="text--indent">
            Mettre en relation les meilleur·es ami·es de célibataires, appelé·es "Caseurs" et "Caseuses", 
            pour qu'ils·elles les aident dans leur quête de l'amour. Accompagné·es par notre team, les "Caseurs" et "Caseuses" s'occupent de tout.
          </p>
          <h2 className="text--center">Notre équipe</h2>
          <p className="text--indent">Tadaa ! Voici qui se cache derrière la Team Case Tes Potes, bien décidée à oeuvrer pour diminuer les stats des célibataires &#128540;.</p>
          <ul className="staff-list">
            <li>
              <h3>Amélie</h3>
              <div className="staff-list__picture">
                <img width="140" height="140" src={staffAmelie} alt="Amélie Fabre CEO Case Tes Potes" />
              </div>
              <h4>CEO & PO</h4>
            </li>
            <li>
              <h3>Nicolas</h3>
              <div className="staff-list__picture">
                <img width="140" height="140" src={staffNicolas} alt="Nicolas Espiau CTO Case Tes Potes" />
              </div>
              <h4>CTO & Dev backend</h4>
            </li>
            <li>
              <h3>Nawal</h3>
              <div className="staff-list__picture">
                <img width="140" height="140" src={staffNawal} alt="Nawal Senechal Marketing et communication Case Tes Potes" />
              </div>
              <h4>Marketing & Communication</h4>
            </li>
            <li>
              <h3>Stéphane</h3>
              <div className="staff-list__picture">
                <img width="140" height="140" src={staffStephane} alt="Stéphane Lieumont Lead Dev Case Tes Potes" />
              </div>
              <h4>Lead Dev Frontend</h4>
            </li>
          </ul>
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default About