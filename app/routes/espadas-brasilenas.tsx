import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import espada from "../src/espadasUno.webp"
import espada3 from "../src/Espadas2.webp"
import espada4 from "../src/Espadas4.webp"
import bg from "../src/bg-carnes.svg"
import vineta from "../src/arrow.svg"

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const espadasBrasilenas = () => {
    return (
        <main style={{ backgroundImage: `url(${bg})` }} className="max-w-7xl -mt-[8rem] md:mt-0 mx-auto md:px-0 text-center mx-aut bg-azulOscuro text-white">
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider pt-16 pb-4">Menú</h3>
            <div className="md:flex gap-4">
                <ul className="py-6 pl-8 pr-3 lg:px-0 lg:pl-0 lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center relative z-0">
                    <h4 className="text-2xl font-open tracking-widest font-normal uppercase pb-10 lg:linea-izquierda lg:linea-derecha flex items-center justify-center">Cortes de Carne</h4>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Picaña</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Camarón a las brasas con chile</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Arrachera</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>New York</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Puntas de sirlón al ajo</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Puntas de filete miñon</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Costillas de Cerdo BBQ</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Puntas de cerdo con jalea de piña y habanero</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Pechuga de pollo al parmesano</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Chorizo Argentino</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Chistorra</span></li>
                    <li className="flex items-center gap-3 text-sm text-gray-100 text-left lg:text-center font-monse uppercase tracking-wider"><span style={{ backgroundImage: `url(${vineta})` }} className="w-2 h-2 bg-no-repeat bg-center bg-cover inline-block"></span><span>Lomo de cerdo horneado a las finas hierbas</span></li>
                </ul>
                <img className="flex-1 md:w-1/2 w-[95%] mx-auto" src={espada} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0 flex-row-reverse">
                <ul className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl font-open tracking-widest font-normal uppercase pb-10 linea-izquierda linea-derecha flex items-center justify-center">Guarniciones</h4>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Ensalada mixta dulce</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Ensalada mixta salada</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Ensalada de temporada</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Pasta a la crema</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Salsas</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Aderezos</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Limones</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Pan de ajo</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Piña asada con canela</li>
                </ul>
                <img className="flex-1 md:w-1/2 w-[95%] mx-auto" src={espada3} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex gap-4 lg:gap-0">
                <ul className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl font-open tracking-widest font-normal uppercase pb-10 linea-izquierda linea-derecha flex items-center justify-center">Servicios</h4>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Gauchos</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Dos horas de servicio</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Tablón para ensaladas</li>
                    <li className="text-sm arrow text-gray-100 lg:text-center font-monse uppercase tracking-wider">Parrilla</li>
                </ul>
                <img className="flex-1 md:w-1/2 w-[95%] mx-auto" src={espada4} alt="Imagen de las Espadas brasileñas" />
            </div>
            <p className="text-center italic my-16 font-monse text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default espadasBrasilenas