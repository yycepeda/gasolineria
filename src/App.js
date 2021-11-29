
import { Row, Col, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          <Nav.Item>
            <Nav.Link href="/home">Usuarios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Gasolineria</Nav.Link>
          </Nav.Item>
        </Nav></Col>
      </Row>
    </Container>

  );
}

export default App;
