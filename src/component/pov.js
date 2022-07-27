import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

function POV() {
  return (
    <div className="pov">
      <Container>
        <Row>
          <Col />
          <Col xs={5}>
            <div align="center">
                <h1 className="povTitle">POV</h1><br/>
                <p className='povDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default POV;