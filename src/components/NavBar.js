import { NavLink } from "react-router-dom"
import RodsLogo from '../images/RodsLogo.png'

export const NavBar = () => {
  
  return (
    <div className="navBar">
      <div className="d-flex justify-content-center align-items-center">
        <nav className="navbar fs-5">
          <NavLink className="nav-link mx-4" to="/">Home</NavLink>
          <NavLink className="nav-link mx-4">About Us</NavLink>
          <NavLink className="nav-link mx-4">Blog</NavLink>
        </nav>
        <div>
          <img className="logo" src={RodsLogo} alt="Rods Logo"/>
        </div>
        <nav className="navbar fs-5">
          <NavLink className="nav-link mx-4">Menu</NavLink>
          <NavLink className="nav-link mx-4">Locations</NavLink>
          <NavLink className="nav-link mx-4" to="/reservas">Reservations</NavLink>
        </nav>
        </div>
      </div>
  )

}

export default NavBar

/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar; */