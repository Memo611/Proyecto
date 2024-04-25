import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import './PrimerFormulario.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
                <Form.Label htmlFor='userid'>UserID: </Form.Label>
            </Col>
            <Col>
                <input type="text" id="userid" className='form-control' required/>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='nombre'>Nombre: </Form.Label>
            </Col>
            <Col>
                <input type="text" id="nombre" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='primerApellido'>Primer Apellido: </Form.Label>
            </Col>
            <Col>
                <input type="text" id="primerApellido" className='form-control'required />
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='segundoApellido'>Segundo Apellido: </Form.Label>
            </Col>
            <Col>
                <input type="number" id="segundoApellido" className='form-control' required/> 
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Label htmlFor='fechaNacimiento'>Fecha de Nacimiento: </Form.Label>
            </Col>
            <Col>
                <input type="number" id="fechaNacimiento" className='form-control' required/> 
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