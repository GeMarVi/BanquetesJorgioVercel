import { MetaFunction } from "@vercel/remix";
import { useState, useEffect } from "react";

import Btn from "../components/Btn"
import parrillada from "../src/Parrillada.webp"
import espada3 from "../src/parrillada1.webp"
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

const parrilladas = () => {

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
        "Aderesos",
        "Tortillas",
        "Pasta a la crema",
        "Cortasia: Pan con Ajo y Piña asada con Canela",]

    const images = [
        parrillada,
        espada3,
        parrillada,
        espada3,
        parrillada,
        espada3,
    ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-7xl -mt-[8rem] md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-transparent text-white">
            <div className="noise"></div>
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider pt-16 pb-16">Menú</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden section-routes-swiper">
                <div className="flex flex-col gap-16 lg:w-[40%] p-8">
                    <ListaCarnes clase="linea-separacion" title="Cortes de Carne" items={Carnes} />
                    <ListaCarnes clase="linea-separacion" title="Guarniciones" items={Guarniciones} />
                </div>
                <div className="w-[90vw] mx-auto lg:mx-0 lg:mt-0 lg:max-h-[80rem] lg:grid lg:grid-cols-11 lg:grid-rows-3 lg:gap-4 lg:w-[60%]">
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
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={parrillada} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={espada3} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={parrillada} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={espada3} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={parrillada} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={espada3} alt="" /></div>
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

export default parrilladas