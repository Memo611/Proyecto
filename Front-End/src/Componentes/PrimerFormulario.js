import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import './PrimerFormulario.css'
function PrimerFormulario (personaNombre){
    function Click(){
        console.log (personaNombre);
    }
    return (
        <Row sm={7}>
        <Card className='estilo'>
            <CardHeader className='Titulo'> Resgistro de Usuario </CardHeader>

            <CardBody className='cuerpo'>
            <Row>
            <Col>
            <Form.Label htmlFor='nombre'>Nombre : </Form.Label>
            </Col>
            <Col>
                <input id="nombre" className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='PrimerApellido'>Primer Apellido : </Form.Label>
            </Col>
            <Col>
                <input id="PrimerApellido" className='form-control'/> 
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='SegundoApellido'>Segundo Apellido : </Form.Label>
            </Col>
            <Col>
                <input id="SegundoApellido" className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='NombreUsuario'>Nombre de usuario : </Form.Label>
            </Col>
            <Col>
                <input id="NombreUsuario" className='form-control'/> 
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='Contraseña'>Contraseña : </Form.Label>
            </Col>
            <Col>
                <input id="Contraseña" className='form-control'/>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Label htmlFor='ConfirmarContraseña'>Confirmar Contraseña : </Form.Label>
            </Col>
            <Col>
                <input id="ConfirmarContraseña" className='form-control'/> 
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