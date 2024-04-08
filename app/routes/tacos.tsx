import { MetaFunction } from "@vercel/remix"
import Btn from "~/components/Btn"
import tacos1 from "~/src/tacos1.webp"
import tacos2 from "~/src/tacos2.webp"
import tacos3 from "~/src/tacos.webp"

export const meta: MetaFunction = () => {
    return [
      { title: "Mobiliario" },
      { name: "description", content: "Nuestro servicio de Buffet de tacos es lo que estás buscando para dar ese toque de comida mexicana a tus invitados las taquizas tienen todas las carnes clasicas que desees" },
    ];
  };

const espadasBrasileñas = () => {
    return (
        <main className="max-w-6xl mx-auto px-3 md:px-0 text-center mx-aut bg-azulOscuro text-white">
            <div className="md:flex gap-4 lg:gap-0">
                <ul className="md:pl-16 pb-8 lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Cortes de Carne</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pastor</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Birria</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Suadero</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Tripa</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Longaniza</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Cabeza</li>
                </ul>
                <img className="flex-1 md:w-1/2 mb-8 md:mb-0" src={tacos1} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0 flex-row-reverse">
                <ul className="md:pl-16 py-8 flex flex-col md:justify-center md:w-1/2 gap-2">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Guarniciones</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Gringas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Tostadas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Volcanes</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Quesabirrias</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Mini tortas</li>
                </ul>
                <img className="flex-1 md:w-1/2 mb-8 md:mb-0" src={tacos2} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0">
                <ul className="md:pl-16 py-8 flex flex-col md:justify-center gap-2 md:w-1/2">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Servicios</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Piña</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pepinos</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Limones</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Salsas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Cebollas cambray</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Desechables</li>
                </ul>
                <img className="flex-1 md:w-1/2" src={tacos3} alt="Imagen de las Espadas brasileñas" />
            </div>
            <p className="text-center italic font-monse my-8 text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>
        </main>
    )
}

export default espadasBrasileñas
