import { MetaFunction } from "@vercel/remix";
import { useState, useEffect } from "react";

import Btn from "../components/Btn"
import tacos1 from "../src/tacos1.webp"
import tacos2 from "../src/tacos2.webp"
import tacos3 from "../src/tacos.webp"
import ListaCarnes from "~/components/ListaCarnes";

import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const tacos = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Actualizar el estado según el ancho de la ventana
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const arrayCarnes = [
        "Pastor",
        "Birria",
        "Suadero",
        "Tripa",
        "Longaniza",
        "Cabeza"
      ];
      
      const arrayEspecialidades = [
        "Gringas",
        "Tostadas",
        "Volcanes",
        "Quesabirrias",
        "Mini tortas"
      ];
      
      const arrayServicios = [
        "Piña",
        "Pepinos",
        "Limones",
        "Salsas",
        "Cebollas cambray",
        "Desechables"
      ];
      
    const images = [
        tacos1,
        tacos2,
        tacos3
    ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-7xl -mt-[8rem] md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-transparent text-white">
            <div className="noise"></div>
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider pt-16 pb-16">Menú</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden section-routes-swiper">
                <div className="flex flex-col gap-16 lg:w-[40%] p-8">
                    <ListaCarnes clase="linea-separacion" title="Carnes" items={arrayCarnes} />
                    <ListaCarnes clase="linea-separacion" title="Especialidades" items={arrayEspecialidades} />
                    <ListaCarnes clase="" title="Servicios" items={arrayServicios} />
                </div>
                <div className="w-[90vw] mx-auto lg:mx-0 lg:mt-0 lg:h-[60rem] lg:grid lg:grid-cols-11 lg:grid-rows-3 lg:gap-4 lg:w-[60%]">
                    {isMobile ? (
                        <Swiper
                            effect={'flip'}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation, EffectFlip]}
                        >
                            {images.map( image => (
                                <SwiperSlide key={Date.now()}><img className="w-full h-full object-cover" src={image} alt="" /></SwiperSlide>
                            ))}
                        </Swiper>) : (
                        <>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={tacos1} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={tacos2} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={tacos3} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={tacos1} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={tacos2} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={tacos3} alt="" /></div>
                        </>
                    )}
                </div>
            </div>
            <p className="text-center italic my-16 font-monse text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default tacos
