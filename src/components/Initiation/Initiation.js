import imagen1 from "../../assets/svg/initiation/imagenInicio.svg"
import imagen2 from "../../assets/svg/initiation/imagenInicio2.svg"


const Initiation = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-center h-40 w-full" src={imagen1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-text"><span className="text-yellow">Que ciudad buscas?</span></h2>
            <p className="mx-12 text-black">Es un placer confiar es nuestra App!</p>
            <img className="object-none object-center h-80 w-full" src={imagen2} alt="weather"/>
        </div>

    )
}

export default Initiation;