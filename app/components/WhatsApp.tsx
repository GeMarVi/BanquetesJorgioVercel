import { useState, useEffect } from "react";
import whatsApp from "../src/whatsappFixed.svg";

const WhatsApp = () => {
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState("¡Hola!");

    const messages = [
        "¡Hola!",
        "¿En qué te puedo ayudar?",
        "¿Quieres cotizar algo?",
        "¡Estoy aquí para ayudarte!",
        "¿Cómo puedo ayudarte?",
    ];

    useEffect(() => {
        const messageInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            setMessage(messages[randomIndex]);
            setActive(true);
            setTimeout(() => {
                setActive(false);
            }, 8000);
        }, 20000); 

        return () => {
            clearInterval(messageInterval);
        };
    }, []);
    return (
        <div className="fixed z-50 bottom-6 right-6 flex items-center gap-2 transition-transform duration-300">
             <p className={`text-center font-Inter w-max h-min text-lg p-1 transition-[width] duration-300 rounded-lg bg-[#FF4848] text-gray-200 ${active ? "visible" : "invisible"}`}>
                {message}
            </p>
            <img className="w-10 lg:w-11 object-contain" src={whatsApp} alt="Logo de WhastApp para contactar a Giorgio Espadas Brasileñas y Parrilladas" />
        </div>
    );
};

export default WhatsApp;
