import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import ImagePerson from '../img/Bitmap2.png';
import BgImagePerson from '../img/Path4.png';
import Button from 'react-bootstrap/Button';

function Definition() {
  return (
    <div className="definition">
      <img src={BgImagePerson} className="BgimgPersonRight" />
      <img src={ImagePerson} className="imgPersonRight" /><br/><br/><br/>
      <div align="center">
      <p className="definitionText">Deffinition; a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p><br />
      <p className="definitionTextSign">-weekend team</p><br/><br/>
      </div>
    </div>
  );
}

export default Definition;