import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import tacos1 from "../src/tacos1.webp"
import tacos2 from "../src/tacos2.webp"
import tacos3 from "../src/tacos.webp"
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
        {title: "Buffet de tacos", src: tacos1},
        {title: "Buffet de tacos", src: tacos2},
        {title: "Buffet de tacos", src: tacos3},
      ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">
            <h3 className="text-heading text-center uppercase text-5xl font-clash tracking-wider pt-16 pb-16">Menú</h3>
            <p className="text-heading text-center text-4xl font-clash pb-16">Disfruta de la variedad de carnes de este delicioso y tradicional platillo mexicano</p>
            <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Carnes" items={Carnes} /></div>
                <SwiperRoutesImages urls={images}/>
            </div>

            <p className="text-heading text-center text-4xl font-clash pt-16 pb-16">¿No quieres solo tacos? Acompañalos con estas exquisitas especialidades que no deben faltar en tu mesa</p>
            <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Especialidades" items={Especialidades} /></div>
                <SwiperRoutesImages urls={images} />
            </div>

            <p className="text-heading text-center text-4xl font-clash pt-16 pb-16">Un buen taco siempre debe llevar su acompañamiento</p>
            <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Servicios" items={Servicios} /></div>
                <SwiperRoutesImages urls={images} />
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

export default tacos
