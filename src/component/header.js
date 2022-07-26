import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import ImageHeader from '../img/header.png';
import ImagePerson from '../img/Bitmap.png';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className="headers">
        <h1 className="titleHeader">WEEKEND FROM HOME</h1>
        <p className="headerText">Stay active with a little workout.</p>
        <img src={ImageHeader} className="imgHeader" />
        <img src={ImagePerson} className="imgPerson" />
        <button className="buttonHeader"> Let's Go </button>
    </div>
  );
}

export default Header;