import { MetaFunction } from "@vercel/remix";

import { HeadingVistas } from "~/components/HeadingVistas";
import Btn from "../components/Btn"
import tacos1 from "../src/tacos1.webp"
import tacos2 from "../src/tacos2.webp"
import tacos3 from "../src/CardServicios/tacos.webp"
import taco from "../src/tacos/tacos-1.webp"
import taco2 from "../src/tacos/tacos-2.webp"
import taco3 from "../src/tacos/tacos-3.webp"

import ListaCarnes from "~/components/ListaCarnes";
import SwiperRoutesImages from "~/components/SwiperRoutesImages";

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const tacos = () => {

    const Carnes = [
        "Pastor",
        "Birria",
        "Suadero",
        "Tripa",
        "Longaniza",
        "Cabeza"
      ];
      
      const Especialidades = [
        "Gringas",
        "Tostadas",
        "Volcanes",
        "Quesabirrias",
        "Mini tortas"
      ];
      
      const Servicios = [
        "Piña",
        "Pepinos",
        "Limones",
        "Salsas",
        "Cebollas cambray",
        "Desechables"
      ];
      
      const images = [
        {title: "Buffet de tacos", src: tacos3},
        {title: "Buffet de tacos", src: taco},
        {title: "Buffet de tacos", src: taco2},
        {title: "Buffet de tacos", src: taco3},
        {title: "Buffet de tacos", src: tacos1},
        {title: "Buffet de tacos", src: tacos2},
      ]

    return (
        <main className="bg-cover overflow-hidden lg:overflow-visible bg-no-repeat bg-center max-w-6xl mx-auto mt-32 lg:mt-40 pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
            <HeadingVistas initial={"translateX(-200px)"} whileInView={"translateX(0)"} text="Disfruta de la variedad de carnes de este delicioso y tradicional platillo mexicano" />
            
            <div className="flex flex-col lg:items-center lg:flex-row mt-24 mb-40 gap-8">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Carnes" items={Carnes} /></div>
                <SwiperRoutesImages urls={images}/>
            </div>

            <HeadingVistas initial={"translateX(200px)"} whileInView={"translateX(0)"} text="¿No quieres solo tacos? Acompañalos con estas exquisitas especialidades que no deben faltar en tu mesa" />
            
            <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8 mt-24 mb-40">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Especialidades" items={Especialidades} /></div>
                <SwiperRoutesImages urls={images} />
            </div>

            <HeadingVistas initial={"translateX(-200px)"} whileInView={"translateX(0)"} text="Un buen taco siempre debe llevar su acompañamiento" />
           
            <div className="flex flex-col lg:items-center lg:flex-row gap-8 mb-20 mt-24">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Servicios" items={Servicios} /></div>
                <SwiperRoutesImages urls={images} />
            </div>
            <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
            <div className="">
                <p className="text-heading text-center font-Inter flex-1 text-2xl pt-16 pb-16">Si no encuentras algún artículo que buscas en nuestro catálogo, contáctanos y haznos saber todas tus dudas.</p>
            </div>
            <div className="flex justify-center">
                <Btn target={false} isLink={true} route="#" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default tacos
