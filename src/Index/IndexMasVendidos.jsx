import MasVendidos from "../MasVendidos.json";
const IndexMasVendidos = ()=>{
    return(
        MasVendidos && MasVendidos.map( MasVendido=>{
            return(
                <div className="col" key={MasVendido.id}>
                    <div className="bg-black card shadow-sm cardd">
                        <div className="row mb-3 mx-2">
                            <a href=""><img src={MasVendido.img} className="img-fluid shadow my-3" alt=""/></a> 
                            <div className="col-sm-12"> 
                                <h4 className="text-center">{MasVendido.product}: ${MasVendido.price}</h4>
                            </div>  
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default IndexMasVendidos;