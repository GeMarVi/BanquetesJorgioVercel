import { MetaFunction } from "@vercel/remix"

import Btn from "../components/Btn"
import mesas from "../src/Mesas y sillas 8.webp"
import salas from "../src/Salas lounge 2 .webp"
import carpas from "../src/Carpa 5.webp"
import periqueras from "../src/Periqueras 3.webp"
import pistas from "../src/Pista iluminada 3.webp"
import bg from "../src/bg-carnes.svg"

export const meta: MetaFunction = () => {
    return [
      { title: "Mobiliario" },
      { name: "description", content: "Tenemos todo lo que necesitas para tu evento, y sea al aire libre o bajo techo contamos con sillas, mesas, carpas, periqueras, pistas iluminadas, todo lo que necesitas para tener comodos a tus invitados y aportar elegancia a tu evento" },
    ];
  };

const mobiliario = () => {
    return (
        <main className="max-w-6xl -mt-[8rem] md:mt-0 text-center mx-auto bg-azulOscuro text-white">
            <div className="md:flex">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Carpas</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Solución practica y elegante para proteger a tus invitados, desde eventos al aire libre hasta celebraciones bajo techo, nuestras carpas son la opción ideal para adaptarse a cualquier entorno</li>
                </ul>
                <img className="flex-1 md:w-1/2 md:mb-0" src={carpas} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex flex-row-reverse">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Sillas y mesas</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Asegura el éxito de tu evento con nuestras mesas y sillas de calidad superiór. Brinda a tus invitados un espacio comodo y estilisado, nuestro mobiliario versátil se adapta a  eventos corporativos y celebraciones especiales</li>
                </ul>
                <img className="flex-1 md:w-1/2 md:mb-0" src={mesas} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Salas Lounge</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Crea espacios acogedores para que tus invitados disfruten con estilo y comodidad. Con nuestros asientos premium, haz que tu evento destaque por su elegancia</li>
                </ul>
                <img className="flex-1 md:w-1/2 md:mb-0" src={salas} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex flex-row-reverse">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Periqueras</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Dale un toque moderno a tu evento con nuestras periqueras tipo bar, ofrece comodidad y estilo a tus invitados</li>
                </ul>
                <img className="flex-1 md:w-1/2 md:mb-0" src={periqueras} alt="Imagen de las Espadas brasileñas" />
            </div>
            <div className="md:flex">
            <ul style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center py-[3.5rem] lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                    <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Pista Iluminada</h4>
                    <li className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Haz que tu evento brille con nuestra pista de baile iluminada crea un ambiente electrizante donde la diversión y la musica se fusionan.</li>
                </ul>
                <img className="flex-1 md:w-1/2" src={pistas} alt="Imagen de las Espadas brasileñas" />
            </div>
            <p className="text-center italic font-monse my-16 text-gray-300">Si no encuentras algún artículo que buscas en nuestro catálogo, no dudes en ponerte en contacto con nosotros y hacer tu pregunta.</p>
            <div className="flex justify-center">
                <Btn isLink={true} route="#" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" value="Cotiza tu servicio" />
            </div>
        </main>
    )

}
export default mobiliario
