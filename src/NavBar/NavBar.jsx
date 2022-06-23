import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () =>{
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function(){
        let Desplazamiento_Actual = window.pageYOffset;
        if(ubicacionPrincipal >= Desplazamiento_Actual){
            document.getElementById('nav').classList = 'py-3 myStyle';
            document.getElementById('nav').style.top = '0';
        }else{
            document.getElementById('nav').classList = 'py-3 myStyle';
            document.getElementById('nav').style.top = '-100px';
        }
        ubicacionPrincipal = Desplazamiento_Actual;
    }
    function clickearCerrar(){
        document.getElementById("nav-ul").classList.toggle("show")
        document.getElementById("nav-ul").classList.remove("d-none");
    }
    return(
        <div className="bg-black py-3">
            <Container>
                    <Navbar className="d-flex flex-row">
                        <button className="hamburger" id="hamburger" onClick={()=>{
                                document.getElementById("nav-ul").classList.toggle("show")
                                document.getElementById("nav-ul").classList.remove("d-none");
                            }}>
                            {/* <FontAwesomeIcon className="fas fa-bars" icon={faBars}/> */}
                        </button>
                        <h1 className="nombreH1">Ruca</h1>
                        <ul className="nav nav-ul">
                            <li className="nav-item">
                                <Link to={""} className="nav-link item" onClick={clickearCerrar}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={""} className="nav-link item " onClick={clickearCerrar}>Sobre Nosotros</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={""} className="nav-link item" onClick={clickearCerrar}>Servicios</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={""} className="nav-link item" onClick={clickearCerrar}>Tienda</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={""} className="nav-link item" onClick={clickearCerrar}>Turnos</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={""} className="nav-link item" onClick={clickearCerrar}>Contacto</Link>
                            </li>
                        </ul>
                    </Navbar>
            </Container>
        </div>
        )}