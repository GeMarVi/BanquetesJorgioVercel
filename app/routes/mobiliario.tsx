import { MetaFunction } from "@vercel/remix";

import Btn from "../components/Btn"
import mesas from "../src/Mesas y sillas 8.webp"
import salas from "../src/Salas lounge 2 .webp"
import carpas from "../src/Carpa 5.webp"
import periqueras from "../src/Periqueras 3.webp"
import pistas from "../src/Pista iluminada 3.webp"
import ListaCarnes from "~/components/ListaCarnes";
import SwiperRoutesImages from "~/components/SwiperRoutesImages";

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
        {title: "Carpas", src: carpas},
        {title: "Carpas", src: carpas},
        {title: "Carpas", src: carpas},
      ]
    const images2 = [
        {title: "Sillas y mesas", src: mesas},
        {title: "Sillas y mesas", src: mesas},
        {title: "Sillas y mesas", src: mesas},
      ]
    const images3 = [
        {title: "Salas Lounge", src: salas},
        {title: "Salas Lounge", src: salas},
        {title: "Salas Lounge", src: salas},
      ]
    const images4 = [
        {title: "Periqueras", src: periqueras},
        {title: "Periqueras", src: periqueras},
        {title: "Periqueras", src: periqueras},
      ]
    const images5 = [
        {title: "PistaArray", src: pistas},
        {title: "PistaArray", src: pistas},
        {title: "PistaArray", src: pistas},
      ]

    return (
        <main className="bg-cover bg-no-repeat bg-center max-w-6xl md:mt-0 mx-auto pb-16 px-3 lg:px-0 text-center mx-aut bg-transparent text-white section-routes-swiper">

            <p className="text-heading text-center text-4xl font-clash py-16">¿Quieres que tu evento sea acogedor y disfrutable? mira nuestros accesorios para ello</p>
           <div className="flex flex-col gap-32">
            
                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Carpas" items={carpasArray} /></div>
                    <SwiperRoutesImages urls={images}/>
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Sillas y Mesas" items={sillasArray} /></div>
                    <SwiperRoutesImages urls={images2} />
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Salas Lounge" items={salasLoungeArray} /></div>
                    <SwiperRoutesImages urls={images3} />
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row-reverse gap-8">
                    <div className="flex-1 px-6 lg:px-0"><ListaCarnes clase="" title="Periqueras" items={periquerasArray} /></div>
                    <SwiperRoutesImages urls={images4} />
                </div>

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
