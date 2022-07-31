import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

function Resource() {
  return (
    <div className="pov">
      <Container>
        <Row>
          <Col />
          <Col xs={12}>
            <h1 className="povTitle">Resource</h1><br />
            <p className='povDesc'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Resource;