import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import ListaCarnes from "../components/ListaCarnes";
import SwiperRoutesImages from "../components/SwiperRoutesImages";

import mesa1 from "../src/mobiliario/sillasymesas-1.webp"
import mesa2 from "../src/mobiliario/sillasymesas-2.webp"
import mesa3 from "../src/mobiliario/sillasymesas5.webp"
import mesa4 from "../src/mobiliario/sillasymesas7.webp"
import mesa5 from "../src/mobiliario/sillasymesas8.webp"
import mesa6 from "../src/mobiliario/sillasymesas-10.webp"

import lounge1 from "../src/mobiliario/salaslounge-1.webp"
import lounge2 from "../src/mobiliario/salaslounge-2.webp"

import carpa1 from "../src/mobiliario/carpa-3.webp"
import carpa2 from "../src/mobiliario/carpa-4.webp"
import carpa3 from "../src/mobiliario/carpa-1.webp"
import carpa4 from "../src/mobiliario/carpa-2.webp"

import pista1 from "../src/mobiliario/pista-iluminada-1.webp"
import pista2 from "../src/mobiliario/pista-iluminada-2.webp"
import pista3 from "../src/mobiliario/pista-iluminada-3.webp"

import periqueras1 from "../src/mobiliario/periqueras-1.webp"
import periqueras2 from "../src/mobiliario/periqueras-2.webp"
import periqueras3 from "../src/mobiliario/periqueras-3.webp"


ListaCarnes

export const meta: MetaFunction = () => {
    return [
        { title: "Espadas Brasileñas" },
        { name: "description", content: "Disfruta de nuestro exquisito Buffet de espadas brasileñas, cortes de carne exquisitos y calidad superior" },
    ];
};

const moviliario = () => {

    const carpasArray = ["Solución practica y elegante para proteger a tus invitados, desde eventos al aire libre hasta celebraciones bajo techo, nuestras carpas son la opción ideal para adaptarse a cualquier entorno"]
    const sillasArray = ["Asegura el éxito de tu evento con nuestras mesas y sillas de calidad superiór. Brinda a tus invitados un espacio comodo y estilisado, nuestro mobiliario versátil se adapta a  eventos corporativos y celebraciones especiales"]
    const salasLoungeArray = ["Crea espacios acogedores para que tus invitados disfruten con estilo y comodidad. Con nuestros asientos premium, haz que tu evento destaque por su elegancia"]
    const periquerasArray = ["Dale un toque moderno a tu evento con nuestras periqueras tipo bar, ofrece comodidad y estilo a tus invitados"]
    const pistaArray = ["Haz que tu evento brille con nuestra pista de baile iluminada crea un ambiente electrizante donde la diversión y la musica se fusionan."]

    const images = [
        {title: "Carpas", src: carpa1},
        {title: "Carpas", src: carpa2},
        {title: "Carpas", src: carpa3},
        {title: "Carpas", src: carpa4},
      ]
    const images2 = [
        {title: "Sillas y mesas", src: mesa1},
        {title: "Sillas y mesas", src: mesa2},
        {title: "Sillas y mesas", src: mesa3},
        {title: "Sillas y mesas", src: mesa4},
        {title: "Sillas y mesas", src: mesa5},
        {title: "Sillas y mesas", src: mesa6},
      ]
    const images3 = [
        {title: "Salas Lounge", src: lounge1},
        {title: "Salas Lounge", src: lounge2},
      ]
    const images4 = [
        {title: "Periqueras", src: periqueras1},
        {title: "Periqueras", src: periqueras2},
        {title: "Periqueras", src: periqueras3},
      ]
    const images5 = [
        {title: "PistaArray", src: pista1},
        {title: "PistaArray", src: pista2},
        {title: "PistaArray", src: pista3},
      ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">

            <p className="text-heading text-center text-4xl font-clash py-16">¿Quieres que tu evento sea acogedor y disfrutable? mira nuestros accesorios para ello</p>
           <div className="flex flex-col gap-24">
            
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Carpas" items={carpasArray} /></div>
                    <SwiperRoutesImages urls={images}/>
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Sillas y Mesas" items={sillasArray} /></div>
                    <SwiperRoutesImages urls={images2} />
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Salas Lounge" items={salasLoungeArray} /></div>
                    <SwiperRoutesImages urls={images3} />
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Periqueras" items={periquerasArray} /></div>
                    <SwiperRoutesImages urls={images4} />
                </div>
                <hr className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Pista Iluminada" items={pistaArray} /></div>
                    <SwiperRoutesImages urls={images5} />
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
