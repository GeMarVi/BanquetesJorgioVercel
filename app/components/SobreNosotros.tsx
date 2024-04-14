import ejemplo from "../src/Mobiliario2.webp"
import espadasLogo from "../src/logosSvg/espadas-icon.svg"

const SobreNosotros = () => {
    return (
        <section className="flex w-screen lg:w-auto lg:items-center flex-col lg:flex-row lg:h-min mt-[9rem] lg:gap-4 bg-transparent" >
             <div className="grid grid-cols-2 grid-rows-2 h-[35rem] gap-3 lg:w-1/2">
                <img className="object-cover h-full w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
                <img className="object-cover h-full scale-[.85] -translate-x-5 translate-y-5 w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
                <img className="object-cover h-full scale-[.85] translate-x-5 -translate-y-5 w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
                <img className="object-cover h-full w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
            </div>
            <div className="text-textHeading lg:w-1/2 h-max flex flex-col justify-between mx-4 px-2 lg:mx-0 pt-8 pb-12 lg:px-4 lg:pt-12">
                <h3 className="text-white text-left uppercase text-xl font-open tracking-wider mb-4">¿Quienes somos?</h3>
                <h4 className="text-5xl font-title font-bold text-gray-200 text-nowrap mb-6">Bienvenido a <span className="mx-2 translate-y-1 bg-contain inline-block bg-no-repeat w-10 h-10" style={{ backgroundImage: `url(${espadasLogo})` }}></span> Jorgio</h4>
                <p className="text-gray-300 text-left text-xl antialiased font-monse mb-6">
                    Somos una empresa 100% Mexicana que ofrece servicios de banquetes para toda ocasión en la CDMX y Estado de México
                </p>
                <p className="antialiased text-left text-xl text-gray-300 font-monse mb-6">
                Ofrecemos una gama completa de servicios para garantizar que tu evento sea un éxito absoluto.
                </p>
                <div className="flex justify-between items-center text-gray-200">
                    <div className="flex justify-between gap-4 font-title items-center px-4 border-l-4 border-red-500">
                        <p className="text-5xl font-extrabold font-title text-rojo">20</p>
                        <p>Años de <span className="block text-gray-50 font-bold text-base uppercase">Experiencia</span></p>
                    </div>
                    <div className="flex justify-between gap-4 font-title items-center px-4 border-l-4 border-red-500">
                        <p className="text-5xl font-extrabold font-title text-rojo">300+</p>
                        <p>Banquetes <span className="block text-gray-50 font-bold text-base uppercase">Exitosos</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreNosotros
