import { MetaFunction } from "@vercel/remix";
import { useState, useEffect } from "react";

import Btn from "../components/Btn"
import espada from "../src/espadas-uno.webp"
import espada2 from "../src/espadas-dos.webp"
import espada3 from "../src/espadas-tres.webp"
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

const espadasBrasilenas = () => {

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
        "Camarón a las brasas con chile",
        "Arrachera",
        "New York",
        "Puntas de sirlón al ajo",
        "Puntas de filete miñon",
        "Costillas de Cerdo BBQ",
        "Puntas de cerdo con jalea de piña y habanero",
        "Pechuga de pollo al parmesano",
        "Chorizo Argentino",
        "Chistorra",
        "Lomo de cerdo horneado a las finas hierbas"
    ]

    const Guarniciones = [
        "Ensalada mixta dulce",
        "Ensalada mixta salada",
        "Ensalada de temporada",
        "Pasta a la crema",
        "Salsas",
        "Aderezos",
        "Limones",
        "Pan de ajo",
        "Piña asada con canela"]

    const Servicios = [
        "Gauchos",
        "Dos horas de servicio",
        "Tablón para ensaladas",
        "Parrilla"
    ]
    const images = [
        espada,
        espada2,
        espada3,
        espada,
        espada2,
        espada3,
    ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl -mt-[8rem] md:mt-0 mx-auto pb-16 md:px-0 text-center mx-aut bg-transparent text-white">
            <div className="noise"></div>
            <h3 className="text-heading text-center uppercase text-5xl font-clash tracking-wider pt-16 pb-16">Menú</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-center overflow-hidden section-routes-swiper">
                <div className="flex flex-col gap-16 lg:w-[40%] p-8">
                    <ListaCarnes clase="linea-separacion" title="Cortes de Carne" items={Carnes} />
                    <ListaCarnes clase="linea-separacion" title="Guarniciones" items={Guarniciones} />
                    <ListaCarnes clase="" title="Servicios" items={Servicios} />
                </div>
                <div className="w-[90vw] mx-auto lg:mx-0 lg:mt-0 lg:h-[80rem] lg:grid lg:grid-cols-11 lg:grid-rows-3 lg:gap-4 lg:w-[60%]">
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
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={espada} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={espada2} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={espada3} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={espada} alt="" /></div>
                            <div className="col-span-6 h-auto"><img className="w-full h-full object-cover" src={espada2} alt="" /></div>
                            <div className="col-span-5 h-auto"><img className="w-full h-full object-cover" src={espada3} alt="" /></div>
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

export default espadasBrasilenas