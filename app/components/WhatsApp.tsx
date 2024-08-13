import { useState, useEffect } from "react";
import whatsApp from "../src/whatsappFixed.svg";
import { Close } from "../components/IconsSvg";
import { Link } from "@remix-run/react";

const WhatsApp = () => {
   const [active, setActive] = useState(false);
   const [message, setMessage] = useState("");

   const messages = [
      "¿En qué te puedo ayudar?",
      "¿Quieres cotizar algo?",
      "¡Estoy aquí para ayudarte!",
      "¿Cómo puedo ayudarte?",
   ];

   useEffect(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);

      setTimeout(() => {
         setActive(true);
      }, 20000);
   }, [active]);

   const handleClick = () => {
      setActive(false);
   };

   return (
      <div className="fixed z-50 bottom-6 right-6 flex items-center gap-2 transition-transform duration-300">
         {active && (
            <div className="text-center font-Inter w-max h-min text-lg p-1 transition-[width] duration-300 rounded-lg bg-[#FF4848] text-gray-200 relative">
               <div
                  onClick={handleClick}
                  className="absolute w-4 h-4 -left-2 -top-2"
               >
                  <Close />
               </div>
               {message}
            </div>
         )}
         <Link target="_blank" to={"https://wa.link/jorgio"}>
            <img
               className="w-10 lg:w-11 object-contain"
               src={whatsApp}
               alt="Logo de WhastApp para contactar a Giorgio Espadas Brasileñas y Parrilladas"
            />
         </Link>
      </div>
   );
};

export default WhatsApp;
