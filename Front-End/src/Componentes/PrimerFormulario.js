import { Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import './PrimerFormulario.css'
import React from 'react';
import { useState } from 'react';
import { crearUsuario } from '../redux/actions';

function PrimerFormulario({ showForm }) {
    const [contrasenaVisible, setContraseñaVisible] = useState(false); // Estado para rastrear visibilidad de contraseña
    const [nombre, setNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const toggleContraseñaVisibility = () => {
        setContraseñaVisible(!contrasenaVisible); // Invertir estado de visibilidad de contraseña
    };
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        const usuario = {
            nombre,
            primerApellido,
            segundoApellido,
            fechaNacimiento,
            nombreUsuario,
            contraseña,
        };

        try {
            const respuesta = await crearUsuario(usuario);
            if (respuesta) {
                console.log('¡Usuario creado exitosamente!');
                // Maneja la creación exitosa (por ejemplo, limpiar formulario, mostrar mensaje de éxito)
            } else {
                console.error('Error al crear usuario');
                // Maneja el error de creación (por ejemplo, mostrar mensaje de error)
            }
        } catch (error) {
            console.error('Error inesperado:', error);
            // Maneja errores inesperados
        }
    };

    return (
        <Row sm={7}>
            <Card className='estilo'>
                <CardHeader className='Titulo'> Registro de Usuario </CardHeader>

                <CardBody className='cuerpo'>
                    <Form onSubmit={handleSubmit}>
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
                            <input type="text" id="nombre" name='nombre' className='form-control' required onChange={(e) => setNombre(e.target.value)} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='primerApellido'>Primer Apellido: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="primerApellido" name='primerApellido' className='form-control' required onChange={(e) => setPrimerApellido(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='segundoApellido'>Segundo Apellido: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="segundoApellido" name='segundoApellido' className='form-control' required onChange={(e) => setSegundoApellido(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='fechaNacimiento'>Fecha de Nacimiento: </Form.Label>
                        </Col>
                        <Col>
                            <input type="date" id="fechaNacimiento" name='fechaNacimiento' className='form-control' required onChange={(e) => setFechaNacimiento(e.target.value)} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='nombreUsuario'>Nombre de Usuario: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="nombreUsuario" name='nombreUsuario' className='form-control' required onChange={(e) => setNombreUsuario(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='contraseña'>Contraseña: </Form.Label>
                        </Col>
                        <Col>
                            <div className="input-group mb-3">
                                <input type={contrasenaVisible ? "text" : "password"} // Establecer tipo basado en el estado
                                    id="contraseña" name='contraseña' className='form-control' required value={contraseña}
                                    onChange={(e) => setContraseña(e.target.value)}
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
                    </Form>
                </CardBody>

                <CardFooter>
                    <Col>
                        <Button type='submit'> Guardar</Button>
                        <Button variant="danger" onClick={showForm}> Cancelar</Button>
                    </Col>
                </CardFooter>
            </Card>
        </Row>
    );
}

export default PrimerFormulario;