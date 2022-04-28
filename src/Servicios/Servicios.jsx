import { Container, Row } from "react-bootstrap"
import "./Servicios.css";

export const Servicios = () =>{
    <main>
        <Container>
            <Row className="mx-4">
                    <div className="col">
                        <h2 className="text-center mb-5 mt-5">Servicios De La Cruz</h2>
                    </div>
            </Row>
            <div class="card shadow my-4">
                <Row className="mx-4">
                    <div className="col-sm-6 col-12">
                        <img src="imgs/corte.png" alt="Tintura de color negro" className="mb-4 img-fluid shadow my-4"/>
                    </div>
                    <div class="col-sm-6 col-12 my-4">
                        <h3>Cortes</h3>
                        <p className="mb-4 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex sit tempore distinctio tenetur at voluptas magnam soluta, eius nulla atque ad quas eos et similique, in dolore rerum hic.</p>
                    </div>
                </Row>
                <Row>
                    <div className="col text-right mx-3 my-3">
                        <button className="btn bn">Prueba</button>
                    </div>
                </Row>
            </div>
        </Container>
    </main>
}