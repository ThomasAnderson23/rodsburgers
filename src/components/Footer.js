import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import RodsLogo from '../images/RodsLogo.png'

const Footer = () => {
  return (
    <footer className="footer-distributed">
			<div className="footer-left">
				<img className="logo-footer" src={RodsLogo} alt="Café Rencontre"/>
				<p className="footer-links">
					<Link to="/" className="nav-footer link-1">Inicio</Link>
					<Link className="nav-footer">About Us</Link>
					<Link className="nav-footer">Blog</Link>
					<Link className="nav-footer">Menu</Link>
					<Link className="nav-footer">Locations</Link>
					<Link className="nav-footer">Reservations</Link>
          <Link className="nav-footer">Contact</Link>
				</p>
				<p className="footer-company-name">Rod's Burgers © 2023</p>
			</div>

			<div className="footer-center">
        <div className="container-footer-center">
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <p><span>Phillange Road 23</span> Bartleby, Michigan</p>
          </div>
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <p>+569 4923 9618</p>
          </div>
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon className="fa-envelope" icon={faEnvelope}/>
            </div>
            <p><Link className="email" to="mailto:support@company.com">contact@rodsburgers.com</Link></p>
          </div>
        </div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About Rod's Burgers</span>
					Rod's Burgers, a beloved homemade burger joint hailing from Michigan, has been serving mouthwatering patties since 1985, delighting locals with their juicy creations and nostalgic ambiance.
				</p>
				<div className="footer-icons">
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faFacebookF}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faTwitter}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faInstagram}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </Link>
				</div>
			</div>
		</footer>
  )
}
export default Footer