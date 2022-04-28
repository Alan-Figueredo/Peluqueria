import { Container, Row } from "react-bootstrap"
import "./NavBar.css";

export const NavBar=()=>{
    return(
        <header className="navb">
            <Container>
                <Row>
                    <nav className="navbar-expand-md navbar">
                        <div class="col-sm-2">
                            <a href="#"><img src="imgs/LOGO_DE_LA_CRUZ_BASE_NEGRO.jpg" alt="" className="img-fluid"/></a>
                        </div>
                        <div className="col-sm-8">
                            <ul className="nav navbar text-right">
                                <li className="nav-item mx-3">
                                    <a href="">Inicio</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a href="">Sobre nosotros</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a href="">Servicios</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a href="">Tienda</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a href="#">Turnos</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a href="">Contacto</a>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                </Row>
            </Container>
        </header>
    )
}
