import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import espada from "../src/espadasUno.webp"
import espada3 from "../src/Espadas2.webp"
import espada4 from "../src/Espadas4.webp"

export const meta: MetaFunction = () => {
    return [
      { title: "Espadas Brasileñas" },
      { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
  };
  
const espadasBrasilenas = () => {
    return (
        <main className="max-w-7xl mx-auto px-3 md:px-0 text-center mx-aut bg-azulOscuro text-white">
            <div className="md:flex gap-4 lg:gap-0">
                <ul className="md:pl-16 pb-8 lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Cortes de Carne</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Picaña</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Camarón a las brasas con chile</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Arrachera</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">New York</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Puntas de sirlón al ajo</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Puntas de filete miñon</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Costillas de Cerdo BBQ</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Puntas de cerdo con jalea de piña y un toque de habanero</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pechuga de pollo al parmesano</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Chorizo Argentino</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Chistorra</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Lomo de cerdo horneado a las finas hierbas</li>
                </ul>
                <img className="flex-1 md:w-1/2 mb-8 md:mb-0" src={espada} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0 flex-row-reverse">
                <ul className="md:pl-16 py-8 flex flex-col md:justify-center md:w-1/2 gap-2">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Guarniciones</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada mixta dulce</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada mixta salada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada de temporada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pasta a la crema</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Salsas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Aderezos</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Limones</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pan de ajo</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Piña asada con canela</li>
                </ul>
                <img className="flex-1 md:w-1/2 mb-8 md:mb-0" src={espada3} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0">
                <ul className="md:pl-16 py-8 flex flex-col md:justify-center items-center gap-2 md:w-1/2">
                    <h4 className="text-2xl font-monse font-bold uppercase pb-4">Servicios</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Gauchos</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Dos horas de servicio</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Tablón para ensaladas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Parrilla</li>
                </ul>
                <img className="flex-1 md:w-1/2" src={espada4} alt="Imagen de las Espadas brasileñas" />
            </div>
            <p className="text-center italic my-16 font-monse text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default espadasBrasilenas