import { MetaFunction } from "@vercel/remix";

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
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl px-3 md:mt-0 mx-auto pb-16 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
        <h3 className="text-heading text-center uppercase text-5xl font-clash tracking-wider pt-16 pb-16">Menú</h3>
        <p className="text-heading text-center text-4xl font-clash pb-16">Tenemos carnes selectas y de la mejor calidad</p>
        
        <div className="flex flex-col lg:items-center lg:flex-row gap-8 mb-16 lg:mb-0">
            <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Cortes de Carne" items={Carnes} /></div>
            <SwiperRoutesImages urls={images}/>
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
    )
}

export default parrilladas