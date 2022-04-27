import { FunctionComponent } from "react"
import IconFacebook from '../assets/icons/facebook-official.svg'
import IconInstagram from '../assets/icons/instagram-official.svg'
import IconLinkedin from '../assets/icons/linkedin-official.svg'

const Footer: FunctionComponent = () => {
  return (
    <footer> 
      <p className="text--caption">© casetespotes.com - Tous droits réservés</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/CaseTesPotes">
            <svg width="24" height="24">
              <use xlinkHref={IconFacebook + '#facebook-official'}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/case_tes_potes/">
            <svg width="24" height="24">
              <use xlinkHref={IconInstagram + '#instagram-official'}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/case-tes-potes">
            <svg width="24" height="24">
              <use xlinkHref={IconLinkedin + '#linkedin-official'}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer