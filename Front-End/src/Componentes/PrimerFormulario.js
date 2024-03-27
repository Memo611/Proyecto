import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import './PrimerFormulario.css'
function PrimerFormulario (personaNombre){
    function Click(){
        console.log (personaNombre);
    }
    return (
        <Row sm={7}>
        <Card>
            <CardHeader> Resgistro de Usuario </CardHeader>

            <CardBody>
            <Row>
            <Col>
            <Form.Label htmlFor='nombre'>Nombre : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Primer Apellido'>Primer Apellido : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/> 
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Segundo Apellido'>Segundo Apellido : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Nombre de usuario'>Nombre de usuario : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/> 
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Contraseña'>Contraseña : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Confirmar Contraseña'>Confirmar Contraseña : </Form.Label>
            </Col>
            <Col>
                <input className='form-control'/> 
            </Col>
            </Row>

            </CardBody>

            <CardFooter>
                <Col>
                <Button onClick = {Click()}> Guardar</Button> 
            </Col></CardFooter>
        </Card>
        </Row>
    );
}

export default PrimerFormulario;