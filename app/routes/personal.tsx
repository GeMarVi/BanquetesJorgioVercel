import { MetaFunction } from "@vercel/remix";
import { useState, useEffect } from "react";

import Btn from "../components/Btn"
import dj2 from "../src/dj2.webp"
import meseros from "../src/meseros.webp"
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

const moviliario = () => {

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
    
     const meserosArray = ["Deja que nuestro personal Profesional se encargue de brindar una experiencia impecable, te atendemos como te mereces"]
     const barmanArray = ["Las buenas bebidas nunca deben faltar en un evento, disfruta de la increible explosión de sabor que nuestro barman aporta a todas tus bebidas"]
     const djArray = ["Experimenta la magia de la música con una calidad de audio excepcional que hará vibrar cada rincón. Contrata un Dj con equipo de primera para una experiencia sonora inolvidable"]

    const images = [
       meseros,
       dj2,
    ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl -mt-[8rem] md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-transparent text-white">
            <div className="noise"></div>
            <h3 className="text-heading text-center uppercase text-5xl font-clash tracking-wider pt-16 pb-16">Menú</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden section-routes-swiper">
                <div className="flex flex-col gap-16 lg:w-[50%] p-8">
                    <ListaCarnes clase="linea-separacion" title="Meseros" items={meserosArray} />
                    <ListaCarnes clase="linea-separacion" title="Barman" items={barmanArray} />
                    <ListaCarnes clase="linea-separacion" title="Dj" items={djArray} />
                  
                </div>
                <div className="w-[90vw] mx-auto lg:mx-0 lg:mt-0 lg:max-h-[80rem] lg:grid lg:grid-cols-11 lg:grid-rows-3 lg:gap-4 lg:w-[50%]">
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
                            {images.map( (image, index) => (
                                <SwiperSlide key={index}><img className="w-full h-full object-cover" src={image} alt="" /></SwiperSlide>
                            ))}
                        </Swiper>) : (
                        <>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={meseros} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={meseros} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={dj2} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={dj2} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={meseros} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={dj2} alt="" /></div>
                        </>
                    )}
                </div>
            </div>
            <p className="text-center text-lg my-16 font-Inter text-heading">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn target={false} isLink={true} route="#" value="Cotiza tu servicio" />
            </div>
        </main >
    )
}

export default moviliario
