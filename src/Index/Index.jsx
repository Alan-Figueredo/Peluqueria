import React from "react";
import { Container, Row } from "react-bootstrap"
import IndexMasVendidos from "./IndexMasVendidos";
import IndexServicios from "./IndexServicios";

export const Index =()=>{
    return(
        <div>
            <Container>
                <Row>
                    <div class="col-sm-12">
                        <div>
                            <img src="./imgs/Captura de pantalla 2021-10-25 211555.png" alt="" id="imp" ></img>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="mt-4 col">
                        <h2 class=" text-center">Sobre nosotros</h2>
                        <i class="far fa-window-minimize mb-4 win2"></i>
                    </div>
                </Row>
                <Row>
                    <div class="col-sm-6">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eum. Suscipit veniam doloribus dolorum perferendis minus consequatur temporibus, animi voluptatem saepe commodi ab nisi nostrum at! Quod minima distinctio commodi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia a beatae, qui quaerat culpa, delectus explicabo, nobis minus ab cum aut. Consequuntur laudantium, a officiis iusto asperiores sequi corporis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eum. Suscipit veniam doloribus dolorum perferendis minus consequatur temporibus, animi voluptatem saepe commodi ab nisi nostrum at! Quod minima distinctio commodi. .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia a beatae, qui quaerat culpa, delectus explicabo, nobis minus ab cum aut. Consequuntur laudantium, a officiis iusto asperiores sequi corporis!
                        </p>
                        <input type="button" value="Leer mas" class="text-right btn bn my-3 my-sm-0"></input>
                    </div>
                    <div class="col-sm-6">
                        <img src="./imgs/Captura de pantalla 2021-10-25 215652.png" alt="" class="img-fluid mr-5 mb-5"></img>
                    </div>
                </Row>
            </Container>
            <section id="fser">
                <Container>
                    {}
                    <Row>
                        <div class="col">
                            <h2 class="mt-4 text-center" id="servi">Nuestros servicioss</h2>
                            <i class="text-center far fa-window-minimize mb-4"></i>
                        </div>
                    </Row>
                    <Row>
                        <IndexServicios/>               
                    </Row>
                    <Row>
                        <div class="col text-center mb-5">
                            <a href="servicios.php" class="btn_negro text-center" >Descubrir mas servicios</a>
                        </div>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <div class="col">
                            <h2 class="text-center mt-4">Productos mas vendidos</h2>
                            <i class="far fa-window-minimize mb-4 win2"></i>
                        </div>  
                    </Row>
                    <Row>
                        <IndexMasVendidos/>
                    </Row>
                    <Row>
                        <div class="col-sm-5 ml-5">

                        </div>
                        <div class="col my-4">
                            <a href="tienda.php" target="_blank" class="text-center bn">Ver mas</a>
                        </div>
                    </Row>
                </Container>
            </section>    
        </div>
    )
}