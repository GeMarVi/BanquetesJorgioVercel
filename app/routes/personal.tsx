import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import dj2 from "../src/dj2.webp"
import meseros from "../src/meseros.webp"
import ListaCarnes from "~/components/ListaCarnes";
import SwiperRoutesImages from "~/components/SwiperRoutesImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const moviliario = () => {

     const meserosArray = ["Deja que nuestro personal Profesional se encargue de brindar una experiencia impecable, te atendemos como te mereces"]
     const barmanArray = ["Las buenas bebidas nunca deben faltar en un evento, disfruta de la increible explosión de sabor que nuestro barman aporta a todas tus bebidas"]
     const djArray = ["Experimenta la magia de la música con una calidad de audio excepcional que hará vibrar cada rincón. Contrata un Dj con equipo de primera para una experiencia sonora inolvidable"]

     const images = [
        {title: "Meseros", src: meseros},
        {title: "Meseros", src: meseros},
      ]
     const images2 = [
        {title: "Barman", src: meseros},
        {title: "Barman", src: meseros},
      ]
     const images3 = [
        {title: "Dj", src: dj2},
        {title: "Dj", src: dj2},
      ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
            <h3 className="text-heading text-center uppercase text-4xl font-clash tracking-wider py-16">Nuestro equipo sin lugar a dudas te hará sentir especial tenemos experiencia y somos muy profesionales</h3>

           <div className="flex flex-col gap-32">
            
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Meseros" items={meserosArray} /></div>
                    <SwiperRoutesImages urls={images}/>
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Barman" items={barmanArray} /></div>
                    <SwiperRoutesImages urls={images2} />
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Dj" items={djArray} /></div>
                    <SwiperRoutesImages urls={images3} />
                </div>

            </div>
            <div className="">
                <p className="text-heading text-center font-Inter flex-1 text-2xl pt-16 pb-16">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
            </div>

            <div className="flex justify-center">
                <Btn target={false} isLink={true} route="#" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default moviliario
