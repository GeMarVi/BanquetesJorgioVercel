import { MetaFunction } from "@vercel/remix";
import { useState, useEffect } from "react";

import Btn from "../components/Btn"
import mesas from "../src/Mesas y sillas 8.webp"
import salas from "../src/Salas lounge 2 .webp"
import carpas from "../src/Carpa 5.webp"
import periqueras from "../src/Periqueras 3.webp"
import pistas from "../src/Pista iluminada 3.webp"
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

    const carpasArray = ["Solución practica y elegante para proteger a tus invitados, desde eventos al aire libre hasta celebraciones bajo techo, nuestras carpas son la opción ideal para adaptarse a cualquier entorno"]
    const sillasArray = ["Asegura el éxito de tu evento con nuestras mesas y sillas de calidad superiór. Brinda a tus invitados un espacio comodo y estilisado, nuestro mobiliario versátil se adapta a  eventos corporativos y celebraciones especiales"]
    const salasLoungeArray = ["Crea espacios acogedores para que tus invitados disfruten con estilo y comodidad. Con nuestros asientos premium, haz que tu evento destaque por su elegancia"]
    const periquerasArray = ["Dale un toque moderno a tu evento con nuestras periqueras tipo bar, ofrece comodidad y estilo a tus invitados"]
    const pistaArray = ["Haz que tu evento brille con nuestra pista de baile iluminada crea un ambiente electrizante donde la diversión y la musica se fusionan."]

    const images = [
        mesas,
        salas,
        carpas,
        periqueras,
        pistas,
    ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-transparent text-white">
            <h3 className="text-heading text-center uppercase text-4xl lg:text-5xl font-clash tracking-wider pt-16 pb-16">Conoce todos los mobiliarios que manejamos</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden section-routes-swiper">
                <div className="flex flex-col gap-16 lg:w-[50%] p-6 lg:p-8">
                    <ListaCarnes clase="linea-separacion" title="Sillas y mesas" items={sillasArray} />
                    <ListaCarnes clase="linea-separacion" title="salas lounge" items={salasLoungeArray} />
                    <ListaCarnes clase="linea-separacion" title="carpas" items={carpasArray} />
                    <ListaCarnes clase="linea-separacion" title="periqueras" items={periquerasArray} />
                    <ListaCarnes clase="linea-separacion" title="pistas iluminadas" items={pistaArray} />
                </div>
                <div className="w-[90vw] mx-auto lg:mx-0 lg:mt-0 lg:max-h-[80rem] lg:grid lg:grid-cols-11 lg:grid-rows-5 lg:gap-4 lg:w-[50%]">
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
                            {images.map((image, index) => (
                                <SwiperSlide key={index}><img className="w-full h-full object-cover" src={image} alt="" /></SwiperSlide>
                            ))}
                        </Swiper>) : (
                        <>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={mesas} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={salas} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={carpas} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={periqueras} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={pistas} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={salas} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={periqueras} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={pistas} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={salas} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={salas} alt="" /></div>
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
