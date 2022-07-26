import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageRound from '../img/Oval.png';
import './component.css';

function Testimonials() {
    return (
        <div className="definition">
            <img src={ImageRound} className="imgOval" />
            <div align="center">
                <h1 className="titleTestimoni">Testimonial</h1>
            </div>
        </div>
    );
}

export default Testimonials;