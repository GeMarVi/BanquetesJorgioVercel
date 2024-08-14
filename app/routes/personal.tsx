import { MetaFunction } from "@vercel/remix";

import { HeadingVistas } from "~/components/HeadingVistas";
import Btn from "../components/Btn"
import dj2 from "../src/dj2.webp"
import dj from "../src/dj/dj-1.webp"
import dj3 from "../src/dj/dj-2.webp"

import barman from "../src/barman/barman-1.webp"
import barman2 from "../src/barman/barman-2.webp"

import meseros from "../src/CardServicios/meseros.webp"
import ListaCarnes from "~/components/ListaCarnes";
import SwiperRoutesImages from "~/components/SwiperRoutesImages";
import BtnCotizarServicio from "~/components/BtnCotizarServicio";

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
        {title: "Barman", src: barman},
        {title: "Barman", src: barman2},
      ]
     const images3 = [
        {title: "Dj", src: dj},
        {title: "Dj", src: dj3},
        {title: "Dj", src: dj2},
      ]

    return (
        <main className="bg-cover overflow-hidden lg:overflow-visible bg-no-repeat bg-center max-w-6xl mt-32 lg:mt-40 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
            <HeadingVistas initial={"translateX(-200px)"} whileInView={"translateX(0)"} text="Nuestro equipo sin lugar a dudas te hará sentir especial tenemos experiencia y somos muy profesionales" />
           <div className="flex flex-col gap-24 mt-32">
            
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Meseros" items={meserosArray} /></div>
                    <SwiperRoutesImages urls={images}/>
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Barman" items={barmanArray} /></div>
                    <SwiperRoutesImages urls={images2} />
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Dj" items={djArray} /></div>
                    <SwiperRoutesImages urls={images3} />
                </div>

            </div>
            <div className="">
                <p className="text-heading text-center font-Inter flex-1 text-2xl pt-16 pb-16">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
            </div>

            <BtnCotizarServicio />
        </main >
    )
}

export default moviliario
