// import react from "react";
import imagen1 from "../../../assets/svg/initiation/initiation1.svg"
import imagen2 from "../../../assets/svg/initiation/initiation2.svg"


const NotFounds = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-right h-40 w-full" src={imagen1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-text">ciudad no encontrada <span className="text-yellow">Volver a digitar!</span></h2>
            <p className="mx-12 text-text">Es un placer que te guste la App</p>
            <img className="object-none object-left h-40 w-full" src={imagen2} alt="weather"/>
        </div>

    )
}

export default NotFounds;