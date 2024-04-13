import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import espada from "../src/espadas-uno.webp"
import espada2 from "../src/espadas-dos.webp"
import espada3 from "../src/espadas-tres.webp"
import ListaCarnes from "~/components/ListaCarnes";

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const espadasBrasilenas = () => {

    const Carnes = [
        "Picaña",
        "Camarón a las brasas con chile",
        "Arrachera",
        "New York",
        "Puntas de sirlón al ajo",
        "Puntas de filete miñon",
        "Costillas de Cerdo BBQ",
        "Puntas de cerdo con jalea de piña y habanero",
        "Pechuga de pollo al parmesano",
        "Chorizo Argentino",
        "Chistorra",
        "Lomo de cerdo horneado a las finas hierbas"
    ]

    const Guarniciones = [
        "Ensalada mixta dulce",
        "Ensalada mixta salada",
        "Ensalada de temporada",
        "Pasta a la crema",
        "Salsas",
        "Aderezos",
        "Limones",
        "Pan de ajo",
        "Piña asada con canela"]

    const Servicios = [
        "Gauchos",
        "Dos horas de servicio",
        "Tablón para ensaladas",
        "Parrilla"
    ]

    const preventContextMenu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
      };

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-7xl -mt-[8rem] md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-azulOscuro text-white">
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider pt-16 pb-16">Menú</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden">
                <div className="flex flex-col gap-16 lg:w-[40%] p-8">
                    <ListaCarnes clase="linea-separacion" title="Cortes de Carne" items={Carnes} />
                    <ListaCarnes clase="linea-separacion" title="Guarniciones" items={Guarniciones} />
                    <ListaCarnes clase="" title="Servicios" items={Servicios} />
                </div>
                <div
                    className="flex gap-4 mt-4 lg:mt-0 h-[22rem] lg:h-[80rem] lg:grid lg:grid-cols-11 lg:grid-rows-3 lg:w-[60%] slide-track"
                >
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-6"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada} onContextMenu={preventContextMenu} alt="" /></div>
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-5"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada2} onContextMenu={preventContextMenu} alt="" /></div>
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-5"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada3} onContextMenu={preventContextMenu} alt="" /></div>
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-6"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada} onContextMenu={preventContextMenu} alt="" /></div>
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-6"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada2} onContextMenu={preventContextMenu} alt="" /></div>
                    <div className="custom-slide w-[80vw] h-auto lg:w-full lg:col-span-5"><img className="w-full h-full object-cover lg:hover:scale-105 lg:transition-transform ease-linear" src={espada3} onContextMenu={preventContextMenu} alt="" /></div>
                </div>
            </div>
            <p className="text-center italic my-16 font-monse text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default espadasBrasilenas