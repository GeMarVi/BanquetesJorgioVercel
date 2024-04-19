import { animate } from "motion";
import { useRef, useState, useEffect } from "react"
import whatsApp from "../src/whatsappFixed.svg"

const WhatsApp = () => {

    const [active, setActive] = useState(false);
    const btnWhatsRef = useRef(null);

    const handleClick = () => {
        setActive(!active);
    }

    useEffect(() => {
       if(btnWhatsRef.current){
           animate(btnWhatsRef.current, { opacity:1 }, {duration:.8})
       }

       return 
    }, [])
    

    return (
        <div ref={btnWhatsRef} onClick={handleClick} className={`fixed z-50 opacity-0 bottom-6 right-6 transition-transform duration-300 ${active ? "-translate-x-20" : ""}`}>

            <div className={`text-right left-[1px] pr-8 align-middle text-lg p-1 transition-[width] duration-300 absolute rounded-full bg-[#36392D] -z-30 text-gray-200 top-1/2 -translate-y-1/2 w-10 ${active ? "block w-32 lg:w-36 text-gray-100" : "text-transparent hidden"}`}>¡Hola!</div>

            <img className="w-10 lg:w-11 object-contain" src={whatsApp} alt="Logo de WhastApp para contactar a Giorgio Espadas Brasileñas y Parrilladas" />
        </div>
    )
}

export default WhatsApp