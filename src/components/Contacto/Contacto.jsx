import React from "react";
import { Container, Row } from "react-bootstrap";

export const Contacto = () =>{
    return(
        <main>
            <Container>
                <Row className="mt-5 mb-5">
                    <div className="col text">
                        <form action="" className="card card-contacto shadow">
                            <h2 className="mt-3 mb-3 text-center">Contacto</h2>
                            <div className="mx-5 mt-3">
                                <label for="txtNombre">Nombre</label>
                                <input type="text" name="txtNombre" id="txtNombre" className="form-control"/>
                            </div>
                            <div className="mx-5 mt-2">
                                <label for="txtApellido">Apellido</label>
                                <input type="text" name="txtApellido" id="txtApellido" className="form-control"/>
                            </div>
                            <div className="mx-5 mt-2">
                                <label for="txtTelefono">Telefono</label>
                                <input type="number" name="txtTelefono" id="txtTelefono" className="form-control"/>
                            </div>
                            <div className="mx-5 mt-2">
                                <label for="txtEmail">E-mail</label>
                                <input type="email" name="txtEmail" id="txtEmail" className="form-control"/>
                            </div>
                            <div className="mx-5 mt-2">
                                <label for="txtComentario">Comentario</label>
                                <textarea name="txtComentario" id="txtComentario" cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div className="text-right mt-3 mr-5 mb-3">
                                <button type="submit" className="btn bn">Enviar</button>
                            </div>

                        </form>
                    </div>
                </Row>
            </Container>
        </main>
    )
}
