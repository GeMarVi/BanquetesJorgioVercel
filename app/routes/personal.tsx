import { MetaFunction } from "@vercel/remix"
import Btn from "../components/Btn"
import dj2 from "../src/dj2.webp"
import meseros from "../src/meseros.webp"

export const meta: MetaFunction = () => {
    return [
      { title: "Mobiliario" },
      { name: "description", content: "Deja que nuestro personal se encargue de todo tu solo disfruta, nuestros meseros atenderán a tus invitados con atención y detalle, nuestro barman aporta deliciosa bebidas y cocteles y nuestro Dj hará de tu evento algo vívido y mágico" },
    ];
  };

const personal = () => {
    return (
        <main className="max-w-6xl px-3 md:px-0 text-center mx-auto bg-azulOscuro text-white md:py-12">
            <div className="flex flex-col">
                <div className="md:flex gap-4 lg:gap-0">
                    <div className="text-left md:pr-16 lg:py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                        <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Meseros y Barman</h4>
                        <p className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Deja que nuestro personal Profesional se encargue de brindar una experiencia impecable, desde un servicio atento hasta coctéles irresistibles</p>
                    </div>
                    <img className="flex-1 md:w-1/2 mb-8 md:mb-0" src={meseros} alt="Imagen de las Espadas brasileñas" />
                </div>
                <div className="md:flex flex-row-reverse gap-4 lg:gap-0">
                    <div className="text-left md:pl-16 py-8 flex flex-col gap-2 md:w-1/2 md:justify-center">
                        <h4 className="text-2xl text-center font-monse font-bold uppercase pb-4">Dj</h4>
                        <p className="text-md text-gray-200 text-center font-monse uppercase tracking-wider">Experimenta la magia de la música con una calidad de audio excepcional que hará vibrar cada rincón. Contrata un Dj con equipo de primera para una experiencia sonora inolvidable</p>
                    </div>
                    <img className="flex-1 md:w-1/2" src={dj2} alt="Imagen de las Espadas brasileñas" />
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <Btn value="Cotiza tu servicio" claseBefore="before:-left-[2rem]" claseBgBtn="" claseBgLine="bg-azulOscuro" isLink={false} route="" />
            </div>
        </main>
    )
}

export default personal