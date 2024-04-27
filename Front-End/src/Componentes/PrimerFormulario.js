import { Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import './PrimerFormulario.css'
import React from 'react';
import { useState } from 'react';

function PrimerFormulario({setform}) {
    const [contrasenaVisible, setContraseñaVisible] = useState(false); // Estado para rastrear visibilidad de contraseña

    const toggleContraseñaVisibility = () => {
        setContraseñaVisible(!contrasenaVisible); // Invertir estado de visibilidad de contraseña
    };

    return (
        <Row sm={7}>
            <Card className='estilo'>
                <CardHeader className='Titulo'> Registro de Usuario </CardHeader>

                <CardBody className='cuerpo'>                 
                        <Row>
                            <Col>
                                <Form.Label htmlFor='idUsuario'>ID:  </Form.Label>
                            </Col>
                            <Col>
                                <input readOnly type="number" id="idUsuario" name='idUsuario' className='form-control' />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='nombre'>Nombre: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="nombre" name='nombre' className='form-control' required />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='primerApellido'>Primer Apellido: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="primerApellido" name='primerApellido' className='form-control' required />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='segundoApellido'>Segundo Apellido: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="segundoApellido" name='segundoApellido' className='form-control' required />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='fechaNacimiento'>Fecha de Nacimiento: </Form.Label>
                            </Col>
                            <Col>
                                <input type="date" id="fechaNacimiento" name='fechaNacimiento' className='form-control' required />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='nombreUsuario'>Nombre de Usuario: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="nombreUsuario" name='nombreUsuario' className='form-control' required />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='contraseña'>Contraseña: </Form.Label>
                            </Col>
                            <Col>
                                <div className="input-group mb-3">
                                    <input type={contrasenaVisible ? "text" : "password"} // Establecer tipo basado en el estado
                                        id="contraseña" name='contraseña' className='form-control' required 
                                    />
                                    <div className="input-group-append">
                                        <button
                                            id="mostrarContrasena"
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleContraseñaVisibility} // Llamar función toggle al hacer clic
                                        >
                                            <i className={contrasenaVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>                  
                </CardBody>

                <CardFooter>
                    <Col>
                        <Button> Guardar</Button>
                        <Button variant="danger" onClick={setform}> Cancelar</Button>
                    </Col>
                </CardFooter>
            </Card>
        </Row>
    );
}

export default PrimerFormulario;