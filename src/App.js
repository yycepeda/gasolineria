
import { Row, Col, Container, Nav, Button, Card, Form, Table } from 'react-bootstrap';
import {Fragment} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const admin = 'admin';
  const interno = 'interno';
  const externo = 'externo';
  return (
    <Router>
      <Card className="text-center">
      <Card.Header>
      <Container>
            <Row>
              <Col>
                <Nav>
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">contacto</Nav.Link>
                </Nav.Item>
              </Nav></Col>
            </Row>
           
        </Container>
      </Card.Header>
      <Card.Body>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/contact"   element={<Contact />}/>
            <Route path="/precios"   element={<Precios />}/>
            <Route path="/addprecio"   element={<AddPrecio />}/>
            <Route path="/disponibilidad"   element={<Disponibilidad />}/>
            <Route path="/menuadmin"   element={<MenuAdmin />}/>
            <Route path="/addinventario"   element={<AddInventario />}/>
            <Route path="/tanquear"   element={<Tanquear />}/>
            <Route path="/addtanquear"   element={<AddTanquear />}/>
            
        </Routes>
      </Card.Body>
      <Card.Footer className="text-muted">Elaborado por Yuly Cepeda</Card.Footer>
    </Card>
   
    </Router>
    

  );
}

// Home Page
const Home = () => (
<Fragment>
    <Card.Title>Plataforma Tanqueo de Gasolina</Card.Title>
    <Card.Text>
    Para ingresar escoja el tipo de usuario
    </Card.Text>
    <Button variant="primary" href={`/login`}>Log in</Button>
  </Fragment>

  );
// Log in
const Login = () => (
  <Fragment>
    <h1>Ingreso usuario tipo </h1>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email de usario</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="admin"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="interno"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
       <Form.Check
        inline
        label="Externo"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
        <Button variant="primary" href="/menuadmin">
          Ingresar
        </Button>
    </Form>
  </Fragment>

  );
// Contact Page
const Contact = () => {
  
  return(
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
  )};

const MenuAdmin = () => {

  return(
  <Fragment>
    <h1>Menú administrador</h1>
    <Button href="/precios">Precios</Button>
    <Button href="/Disponibilidad">Disponibilidad</Button>
    <Button href="/tanquear">Tanquear</Button>
    <Button href="/gestionar">Gestionar Usuario</Button>
  </Fragment>
  )};

  const AddPrecio = () => {
  
    return(
    <Fragment>
      <h1>Agregar Precio</h1>
      <Form>
      <Form.Select aria-label="Default select example">
        <option>Seleccione una opción</option>
        <option value="corriente">Corriente</option>
        <option value="Extra">Extra</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder="Precio" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha inicio</Form.Label>
        <Form.Control type="date" placeholder="fecha inicio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha fin</Form.Label>
        <Form.Control type="date" placeholder="fecha fin" />
      </Form.Group>
      <Button variant="primary" href="/precios">
        guardar
      </Button>
      </Form>
    </Fragment>
    )};

  const Precios = () => {
    const data = [{
      tipo: "corriente",
      Precio:"$7500",
      fechaini:"01-01-2022",
      fechafin:"01-02-2022"
    },
    {
      tipo: "corriente",
      Precio:"$8500",
      fechaini:"02-02-2022",
      fechafin:"01-03-2022"
    },
    {
      tipo: "Extra",
      Precio:"$9500",
      fechaini:"01-01-2022",
      fechafin:"01-02-2022"
    },
    {
      tipo: "Extra",
      Precio:"$10500",
      fechaini:"02-01-2022",
      fechafin:"03-02-2022"
    }
  ]

    return(
    <Fragment>
      <h1>Precios</h1>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Fecha Inicial</th>
            <th>Fecha Final</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, i) => {
          return [
            <tr>
              <td>{item.tipo}</td>
              <td>{item.Precio}</td>
              <td>{item.fechaini}</td>
              <td>{item.fechafin}</td>
            </tr>
          ]
        })}
        </tbody>
      </Table>
      <Button variant="primary" href={`/addprecio`}>agregar precio</Button>
      <Button variant="primary" href="/menuadmin">
        Volver al menu
      </Button>
    </Fragment>
    )};

  const Disponibilidad = () => {
    const data = [{
      tipo: "corriente",
      galones:"100000",
    },
    {
      tipo: "Extra",
      galones:"20000",

    },
   
  ]
    return(
    <Fragment>
      <h1>Disponibilidad</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Galones</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, i) => {
          return [
            <tr>
              <td>{item.tipo}</td>
              <td>{item.galones}</td>
            </tr>
          ]
        })}
        </tbody>
      </Table>
      <Button variant="primary" href={`/addinventario`}>agregar inventario</Button>
      <Button variant="primary" href="/menuadmin">
        Volver al menu
      </Button>
    </Fragment>
    )};

    const AddInventario = () => {
  
      return(
      <Fragment>
        <h1>Agregar Inventario</h1>
        <Form>
        <Form.Select aria-label="Default select example">
          <option>Seleccione una opción</option>
          <option value="corriente">Corriente</option>
          <option value="Extra">Extra</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Galones</Form.Label>
          <Form.Control type="text" placeholder="Galones" />
        </Form.Group>
  
        
        <Button variant="primary" href="/disponibilidad">
          guardar
        </Button>
        </Form>
      </Fragment>
      )};

      const Tanquear = () => {
        const data = [{
          usuario: "Yuly Cepeda",
          galones:"100000",
        },
        {
          usuario: "Huan rodriguez",
          galones:"20000",
    
        },
       
      ]
        return(
        <Fragment>
          <h1>Registro de tanqueo</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Galones</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item, i) => {
              return [
                <tr>
                  <td>{item.usuario}</td>
                  <td>{item.galones}</td>
                </tr>
              ]
            })}
            </tbody>
          </Table>
          <Button variant="primary" href={`/addtanquear`}>Tanquear</Button>
          <Button variant="primary" href="/menuadmin">
            Volver al menu
          </Button>
        </Fragment>
        )};

      const AddTanquear = () => {
  
        return(
        <Fragment>
          <h1>Tanquear</h1>
          <Form>
          <Form.Select aria-label="Default select example">
            <option>Seleccione un usuario</option>
            <option value="ycepeda">Yuly Cepeda</option>
            <option value="jrodriguez">Juan Rodriguez</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Galones</Form.Label>
            <Form.Control type="text" placeholder="Galones" />
          </Form.Group>
    
          
          <Button variant="primary" href="/tanquear">
            guardar
          </Button>
          </Form>
        </Fragment>
        )};
  
const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )

export default App;
