import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import './PrimerFormulario.css'


function PrimerFormulario({ personaNombre, onCloseFormulario  /* prop para cerrar formulario */ }) {
    function Click(){
        console.log (personaNombre);
    }

    const handleCancel = () => {
        onCloseFormulario(); // Cierra el formulario al hacer clic en "Cancelar"
    };

return (
    <Row sm={7}>
    <Card className='estilo'>
        <CardHeader className='Titulo'> Registro de Usuario </CardHeader>

        <CardBody className='cuerpo'>
        <Row>
            <Col>
                <Form.Label htmlFor='nombre'>Nombre : </Form.Label>
            </Col>
            <Col>
                <input type="text" id="nombre" className='form-control' required/>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='PrimerApellido'>Primer Apellido : </Form.Label>
            </Col>
            <Col>
                <input type="text" id="PrimerApellido" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='SegundoApellido'>Segundo Apellido : </Form.Label>
            </Col>
            <Col>
                <input type="text" id="SegundoApellido" className='form-control'required />
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='Telefono'>Telefono : </Form.Label>
            </Col>
            <Col>
                <input type="number" id="Telefono" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='Correo'> Correo : </Form.Label>
            </Col>
            <Col>
                <input type="email" id="Correo" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='NombreUsuario'>Nombre de usuario : </Form.Label>
            </Col>
            <Col>
                <input type="text" id="NombreUsuario" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='Contraseña'>Contraseña : </Form.Label>
            </Col>
            <Col>
                <input type="password" id="Contraseña" className='form-control' required/>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='ConfirmarContraseña'>Confirmar Contraseña : </Form.Label>
            </Col>
            <Col>
                <input type="password" id="ConfirmarContraseña" className='form-control' required/> 
            </Col>
        </Row>

        </CardBody>

        <CardFooter>
        <Col>
            <Button onClick={Click()}> Guardar</Button>
            <Button variant="danger" onClick={handleCancel}> Cancelar</Button> 
        </Col>
        </CardFooter>
    </Card>
    </Row>
    );
}

export default PrimerFormulario;