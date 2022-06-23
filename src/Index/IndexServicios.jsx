import NuestrosServicios from "../NuestrosServicios.json";
const IndexServicios = ()=>{
    return(
        NuestrosServicios && NuestrosServicios.map( servicio=>{
            return(
                <div className="col-sm-4 mb-5" key={servicio.id}>
                    <a href=""><img src={servicio.img} alt="" className="img-fluid ims"></img></a>
                    <a href=""><h3 className="servs mt-3 text-center">{servicio.service}</h3></a>
                </div>
            )
        })
    )
}
export default IndexServicios;