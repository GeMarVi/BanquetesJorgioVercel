import { MetaFunction } from "@vercel/remix";

import { HeadingVistas } from "~/components/HeadingVistas";
import Btn from "../components/Btn"
import parrillada from "../src/Parrillada.webp"
import espada3 from "../src/parrillada1.webp"
import ListaCarnes from "~/components/ListaCarnes";

import ensalada1 from "../src/parrilladas/ensalada-1.webp"
import ensalada2 from "../src/parrilladas/ensalada-2.webp"
import ensalada3 from "../src/parrilladas/ensalada-3.webp"
import ensalada4 from "../src/parrilladas/ensalada-4.webp"
import ensalada5 from "../src/parrilladas/ensalada-5.webp"
import ensalada6 from "../src/parrilladas/ensalada-6.webp"

import SwiperRoutesImages from "~/components/SwiperRoutesImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const parrilladas = () => {

    const Carnes = [
        "Picaña",
        "New York",
        "Arrachera Marinada",
        "Costillas de Res con hueso",
        "Pechuga de pollo marinada",
        "Chorizo Argentino",
        "Costillas BBQ",
        "Chistorra",
        "Cortesia: Alitas al Carbón"
    ]

    const Guarniciones = [
        "Ensalada mixta dulce",
        "Ensalada mixta salada",
        "Ensalada de temporada",
        "Nopales",
        "Salsas",
        "Limones",
        "Aderezos",
        "Tortillas",
        "Pasta a la crema",
        "Cortasia: Pan con Ajo y Piña asada con Canela",]

        const images = [
            {title: "parrillada", src: parrillada},
            {title: "parrillada", src: espada3},
            {title: "parrillada", src: parrillada},
        ]

        const ensaladas = [
            {title: "ensaladas y guarniciones", src: ensalada1},
            {title: "ensaladas y guarniciones", src: ensalada2},
            {title: "ensaladas y guarniciones", src: ensalada3},
            {title: "ensaladas y guarniciones", src: ensalada4},
            {title: "ensaladas y guarniciones", src: ensalada5},
            {title: "ensaladas y guarniciones", src: ensalada6},
        ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl px-3 mt-40 mx-auto pb-16 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper overflow-hidden lg:overflow-visible">
   
        <HeadingVistas initial={"translateX(-200px)"} whileInView={"translateX(0)"} text="Tenemos carnes selectas y de la mejor calidad" />
        <div className="flex flex-col lg:items-center lg:flex-row gap-8 mt-24 mb-32 lg:mb-40">
            <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Cortes de Carne" items={Carnes} /></div>
            <SwiperRoutesImages urls={images}/>
        </div>
        
        <HeadingVistas initial={"translateX(200px)"} whileInView={"translateX(0)"} text="Complementa tus deliciosos cortes de carne con nuestras guarniciones perfectemente preparadas" />
        <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8 my-24">
            <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Guarniciones" items={Guarniciones} /></div>
            <SwiperRoutesImages urls={ensaladas} />
        </div>
        <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 my-16">
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Nuestro servicio incluye Gauchos, dos horas de servicio, tablón para ensaladas y parrilla.</p>
                <p className="text-heading text-center font-Inter flex-1 text-2xl">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
        </div>
        <div className="flex justify-center">
            <Btn target={false} isLink={true} route="#" value="Cotiza tu servicio" />
        </div>
    </main >
    )
}

export default parrilladas