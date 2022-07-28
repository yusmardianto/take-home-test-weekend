import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import ImagePerson from '../img/Bitmap3.png';
import BgImagePerson from '../img/Path5.png';
import Button from 'react-bootstrap/Button';

function Definition() {
    return (
        <div className="help"><br /><br />
            <img src={BgImagePerson} className="BgimgPersonleft" />
            <img src={ImagePerson} className="imgPersonleft" />
            <Container>
                <Row>
                    <Col />
                    <Col xs={5}>
                        <div align="center">
                            <h1 className="setTitle">You’re all set.</h1><br />
                            <p className='setDesc'>The wise man therefore always holds in these matters to this principle of selection.</p><br /><br /><br /><br /><br /><br />
                        </div>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
}

export default Definition;