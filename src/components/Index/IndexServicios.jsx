import NuestrosServicios from "../NuestrosServicios.json";
const IndexServicios = ()=>{
    return(
        NuestrosServicios && NuestrosServicios.map( servicio=>{
            return(
                <div class="col-sm-4 mb-5" key={servicio.id}>
                    <a href=""><img src={servicio.img} alt="" class="img-fluid ims"></img></a>
                    <a href=""><h3 class="servs mt-3 text-center">{servicio.service}</h3></a>
                </div>
            )
        })
    )
}
export default IndexServicios;