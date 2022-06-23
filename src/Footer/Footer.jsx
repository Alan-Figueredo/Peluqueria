import React from "react"
import { Container, Row } from "react-bootstrap"


export const Footer = () =>{
    return(
        <>
            <Container>
                <Row>
                    <div className="col-sm-4">
                        <img src="./imgs/LOGO_DE_LA_CRUZ_BASE_NEGRO.jpg" alt="imag" className="img-fluid"/>
                    </div>
                    <div className="col-sm-6 mt-5 text-sm-right text-center mb-4">
                        <a href="" className="mx-3"><i className="fab fa-tiktok"></i></a>
                        <a href="" className="mx-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="" className="mx-3"><i className="fab fa-instagram"></i></a>
                        <a href="" className="mx-3"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </Row>
            </Container>
            <div className="ws text-right">
                <a href="https://web.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp mx-5"></i></a>
            </div>
        </>
    )
}
