import { MetaFunction } from "@vercel/remix";
import { HeadingVistas } from "~/components/HeadingVistas";

import Btn from "../components/Btn"
import ListaCarnes from "../components/ListaCarnes";

import ensalada1 from "../src/parrilladas/ensalada-1.webp"
import ensalada2 from "../src/parrilladas/ensalada-2.webp"
import ensalada3 from "../src/parrilladas/ensalada-3.webp"
import ensalada4 from "../src/parrilladas/ensalada-4.webp"
import ensalada5 from "../src/parrilladas/ensalada-5.webp"
import ensalada6 from "../src/parrilladas/ensalada-6.webp"

import espadas1 from "../src/espadas/espadas-1.webp"
import espadas2 from "../src/espadas/espadas-2.webp"
import espadas3 from "../src/espadas/espadas-3.webp"
import espadas4 from "../src/espadas/espadas-4.webp"
import espadas5 from "../src/espadas/espadas-5.webp"
import espadas6 from "../src/espadas/espadas-6.webp"

import SwiperRoutesImages from "~/components/SwiperRoutesImages"
import BtnCotizarServicio from "~/components/BtnCotizarServicio";

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

    const ensaladas = [
        {title: "ensaladas y guarniciones", src: ensalada1},
        {title: "ensaladas y guarniciones", src: ensalada2},
        {title: "ensaladas y guarniciones", src: ensalada3},
        {title: "ensaladas y guarniciones", src: ensalada4},
        {title: "ensaladas y guarniciones", src: ensalada5},
        {title: "ensaladas y guarniciones", src: ensalada6},
    ]

    const espadas = [
        {title: "espadas", src: espadas1},
        {title: "espadas", src: espadas2},
        {title: "espadas", src: espadas3},
        {title: "espadas", src: espadas4},
        {title: "espadas", src: espadas5},
        {title: "espadas", src: espadas6},
    ]

    return (
        <main className="max-w-6xl mx-auto mt-32 lg:mt-40 pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper overflow-hidden lg:overflow-visible">

            <HeadingVistas initial={"translateX(-200px)"} whileInView={"translateX(0)"} text="Tenemos carnes selectas y de la mejor calidad"/>
                    
            <div className="flex flex-col lg:items-center lg:flex-row gap-8 mt-24 mb-32 lg:mb-40">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Cortes de Carne" items={Carnes} /></div>
                <SwiperRoutesImages urls={espadas}/>
            </div>

            <HeadingVistas initial={"translateX(200px)"} whileInView={"translateX(0)"} text="Complementa tus deliciosos cortes de carne con nuestras guarniciones perfectemente preparadas" />
            <div className="flex flex-col lg:items-center mt-24 lg:flex-row-reverse gap-8 mb-20">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Guarniciones" items={Guarniciones} /></div>
                <SwiperRoutesImages urls={ensaladas} />
            </div>
            <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 my-16">
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Nuestro servicio incluye Gauchos, dos horas de servicio, tablón para ensaladas y parrilla.</p>
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
            </div>
            <BtnCotizarServicio />
        </main >
    )}

export default espadasBrasilenas