import { Link } from "react-router-dom"
import Burger from "./Burger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Burger1 from "../images/Burger-item1.png"
import Burger2 from "../images/Burger-item2.png"
import Burger3 from "../images/Burger-item3.png"

const LittleMenu = () => {
  return (
    <article className="container-littlemenu">
      <div className="littlemenu">
        <div className="desciption-littlemenu">
          <h3 className="my-3 fs-1">Our Menu</h3>
          <p className="paragraph-littlemenu">Rod's Burgers is a delightful burger joint where you can relish the finest burgers in a pleasant atmosphere.</p>
        </div>
        <div className="types-burger row">
          <Burger title="Luisiana" img={Burger1}/>
          <Burger title="Oklahoma" img={Burger2}/>
          <Burger title="New Orleans" img={Burger3}/>
        </div>
        <div className="container-fullmenu">
          <Link className="btn-fullmenu" to="/menu">
            Full Menú
            <span className="arrow-fullmenu">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>    
          </Link>
        </div>
      </div>
    </article>
  )
}

export default LittleMenu