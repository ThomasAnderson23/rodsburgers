import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-center align-items-start  flex-column ms-5 me-2 text-light">
        <h1>Homemade Burgers</h1>
        <p className="paragraph-header">Flavorful creations grilled to perfection - Taste the love in every homemade burger! <br/> Go hard, go Rods!</p>
        <Link>
          <Button variant="outline-light" size="lg">Enjoy now</Button>
        </Link>  
      </div>
    </header>
  )
}

export default Header