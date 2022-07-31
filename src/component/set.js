import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import ImagePerson from '../img/Bitmap3.png';
import BgImagePerson from '../img/Path5.png';

function Definition() {
    return (
        <div className="help"><br /><br />
            <img src={BgImagePerson} className="BgimgPersonleft" />
            <img src={ImagePerson} className="imgPersonleft" />
            <Container>
                <Row>
                    <Col xs={12}>
                    <h1 className="setTitle">You’re all set.</h1><br />
                            <p className='setDesc'>The wise man therefore always holds in these matters to this principle of selection.</p>
                    </Col>
                </Row>
            </Container>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <p className="footer-content1">wknd@2020</p >
                        </Col>
                        <Col>
                            <p className="footer-content2">alpha version 0.1</p >
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Definition;