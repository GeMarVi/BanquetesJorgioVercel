import { MetaFunction } from "@vercel/remix"

import Btn from "../components/Btn"
import parrillada from "../src/Parrillada.webp"
import espada3 from "../src/parrillada1.webp"
import bg from "../src/bg-carnes.svg"

export const meta: MetaFunction = () => {
    return [
      { title: "Mobiliario" },
      { name: "description", content: "Nuestras parrilladas a domicilio hacen de tu evento algo inolvidable con los mejores y mas finos cortes de carne" },
    ];
  };

const espadasBrasileñas = () => {
    return (
        <main className="max-w-6xl -mt-[8rem] md:mt-0 mx-auto text-center mx-aut bg-azulOscuro text-white">
            <div className="md:flex gap-4 lg:gap-0">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Cortes de Carne</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Picaña</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">New-York</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Arrachera Marinada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Costilla de res con hueso</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pechuga de pollo marinada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Chorizo Argentino</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Costilla BBQ</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Chistorra</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Cortesía: Alitas al carbón BBQ</li>
                </ul>
                <img className="flex-1 md:w-1/2 w-[95%] mx-auto" src={parrillada} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0 flex-row-reverse">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Guarniciones</h4>
                    
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada mixta dulce</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada mixta salada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Ensalada de temporada</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Nopales</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Salsas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Limones</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Aderezos</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Tortillas</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Pasta a la crema</li>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Cortesía: Pan con Ajo Y Piña asada con canela</li>
                </ul>
                <img className="flex-1 md:w-1/2 w-[95%] mx-auto" src={espada3} alt="Imagen de las Espadas brasileñas" />
            </div>
            <p className="text-center italic font-monse my-16 text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>

        </main>
    )
}

export default espadasBrasileñas

