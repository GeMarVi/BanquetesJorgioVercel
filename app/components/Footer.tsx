import { Link } from "@remix-run/react"

import tiktok from "../src/tiktok.svg"
import facebook from "../src/Facebook.svg"
import instagram from "../src/Instagram.svg"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="max-w-6xl mx-auto -z-10 h-auto pt-12 bg-transparent">
            <nav className="px-6 flex flex-col gap-12">
                <div className="flex flex-col justify-between items-center gap-4 pb-8 relative">
                    <h4 className="text-center text-white uppercase font-open text-2xl">Síguenos</h4>
                    <div className="flex gap-6">
                        <a className="cursor-pointer hover:scale-105 ease-linear" href="#"><img className="w-12 h-12" src={instagram} alt="Imagen de la red social WhastApp de Jorgio espadas brasileñas y parrilladas" /></a>
                        <a className="cursor-pointer hover:scale-105 ease-linear" href="#"><img className="w-12 h-12" src={facebook} alt="Imagen de la red social instagram de Jorgio espadas brasileñas y parrilladas" /></a>
                        <a className="cursor-pointer hover:scale-105 ease-linear" href="#"><img className="w-12 h-12" src={tiktok} alt="Imagen de la red social facebook de Jorgio espadas brasileñas y parrilladas" /></a>
                    </div>
                    <hr className="absolute bottom-0 md:bottom-[-3rem] h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                </div>
                <div className="flex flex-col justify-between items-center gap-4 pb-8 relative">
                    <h4 className="text-center text-white uppercase font-open text-2xl">Servicios</h4>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link prefetch="intent" className="text-white font-light w-max" to="espadas-brasilenas">Espadas brasileñas</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="parrilladas">Parrilladas</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="tacos">Buffet de Tacos</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="mobiliario">Carpas</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="mobiliario">Sillas y mesas</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="mobiliario">Periqueras</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="mobiliario">Pistas iluminadas</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="personal">Meseros</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="personal">Barman</Link>
                        <Link prefetch="intent" className="text-white font-light w-max" to="personal">Dj</Link>
                        <hr className="absolute bottom-0 md:bottom-[-3rem] h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"></hr>
                    </div>
                </div>
            </nav>
            <p className="text-center mt-12 px-41 text-white pb-4">&copy; {year} JORGIO Espadas Brasileñas y Parriladas. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer