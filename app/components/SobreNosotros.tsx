import ejemplo from "../src/Mobiliario2.webp"

const SobreNosotros = () => {
    return (
        <section className="flex w-screen lg:w-auto lg:items-center flex-col lg:flex-row lg:h-min lg:px-8 mt-[9rem] lg:gap-y-8 bg-azulOscuro" >
            <div className="text-textHeading lg:w-1/2 h-max flex flex-col justify-between mx-4 px-2 lg:mx-0 pt-8 pb-12 lg:px-10 lg:pt-12 bg-azulOscuro">
                <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider mb-6">¿Quienes somos?</h3>
                <p className="text-gray-300 text-left text-xl antialiased font-monse mb-4">
                    Somos una empresa 100% Mexicana que ofrece servicios de banquetes para toda ocasión en la CDMX y Estado de México
                </p>
                <p className="antialiased text-left text-xl text-gray-300 font-monse mb-4">
                    Desde las exquisitas espadas brasileñas hasta las deliciosas parrilladas y el vibrante buffet de tacos, cada plato está diseñado para satisfacer los paladares más exigentes.
                </p>
                <p className="antialiased text-left text-xl text-gray-300 font-monse mb-4">
                    Ofrecemos una gama completa de servicios para garantizar que tu evento sea un éxito absoluto.
                </p>
                <p className="antialiased text-left text-xl text-gray-300 font-monse mb-4">
                    Nos encargamos de cada detalle, desde la música hasta el mobiliario, servicio de meseros y bartender. solo disfruta mientras nosotros nos encargamos del resto.
                </p>
                <p className="antialiased text-left text-xl text-gray-300 font-monse mb-4">
                    En <em className="text-gray-200">Jorgio Espadas Brasileñas y Parrilladas</em>, no solo ofrecemos comida excepcional, sino también momentos inolvidables.
                </p>
            </div>
            <div className="px-4 lg:px-0 lg:w-1/2 h-[25rem]">
                <img className="object-cover h-[95%] w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
            </div>
        </section>
    )
}

export default SobreNosotros
