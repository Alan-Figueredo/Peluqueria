import MasVendidos from "../MasVendidos.json";
const IndexMasVendidos = ()=>{
    return(
        MasVendidos && MasVendidos.map( MasVendido=>{
            return(
                <div class="col" key={MasVendido.id}>
                    <div class="bg-black card shadow-sm cardd">
                        <div class="row mb-3 mx-2">
                            <a href=""><img src={MasVendido.img} class="img-fluid shadow my-3" alt=""/></a> 
                            <div class="col-sm-12"> 
                                <h4 class="text-center">{MasVendido.product}: ${MasVendido.price}</h4>
                            </div>  
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default IndexMasVendidos;