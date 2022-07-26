import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageNavbar from '../img/navbar.png';
import './component.css';

function NavbarHome() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={ImageNavbar} style={{width:"70%"}} />
        </Navbar.Brand>
        <p className="headertext1">Good Morning</p>
        <p className="headertext2">Fellas</p>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;