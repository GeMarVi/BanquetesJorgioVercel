import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import espada from "../src/espadas-uno.webp"
import espada2 from "../src/espadas-dos.webp"
import espada3 from "../src/espadas-tres.webp"
import ListaCarnes from "~/components/ListaCarnes";

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

import SwiperRoutesImages from "~/components/SwiperRoutesImages";

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

    const images = [
        {title: "espadas brasileñas", src: espada},
        {title: "espadas brasileñas", src: espada2},
        {title: "espadas brasileñas", src: espada3},
    ]

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
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
            <h3 className="text-heading text-center uppercase text-5xl font-clash tracking-wider pt-16 pb-16">Menú</h3>
            
            <p className="text-heading text-center text-4xl font-clash pb-16">Tenemos carnes selectas y de la mejor calidad</p>          
            <div className="flex flex-col lg:items-center lg:flex-row gap-8 mb-16 lg:mb-0">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Cortes de Carne" items={Carnes} /></div>
                <SwiperRoutesImages urls={espadas}/>
            </div>

            <p className="text-heading text-center text-4xl font-clash pt-16 pb-16">Complemente tus deliciosos cortes de carne con nuestras guarniciones perfectemente preparadas </p>
            <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Guarniciones" items={Guarniciones} /></div>
                <SwiperRoutesImages urls={ensaladas} />
            </div>
             
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 my-16">
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Nuestro servicio incluye Gauchos, dos horas de servicio, tablón para ensaladas y parrilla.</p>
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
            </div>
            <div className="flex justify-center">
                <Btn target={false} isLink={true} route="#" value="Cotiza tu servicio" />
            </div>
        </main >
    )}

export default espadasBrasilenas