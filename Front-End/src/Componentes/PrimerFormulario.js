import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import './PrimerFormulario.css'
import { useState } from 'react';
import { setFormularioAbierto } from '../App.js'; // Importa setFormularioAbierto

function PrimerFormulario (personaNombre){
    function Click(){
        console.log (personaNombre);
    }
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

    const cancelar = () => {
        setMostrarFormulario(false);
        setFormularioAbierto(false);  // Cierra el formulario en App.js
    };

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
                <input  type="password" id="ConfirmarContraseña" className='form-control' required/> 
            </Col>
            </Row>

            </CardBody>

            <CardFooter>
                <Col>
                <Button onClick = {Click()}> Guardar</Button>
                <Button variant="danger" onClick = {cancelar}> Cancelar</Button>                
            </Col></CardFooter>
        </Card>
        </Row>
    );
}

export default PrimerFormulario;