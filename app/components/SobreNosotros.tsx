import ejemplo from "../src/Mobiliario2.webp"

const SobreNosotros = () => {
    return (
        <section className="max-w-6xl mx-auto mt-20">
            <h3 className="text-heading text-center text-5xl font-clash mb-8 lg:mb-4">¿Quienes somos?</h3>
            <div className="flex lg:w-auto lg:items-center flex-col-reverse lg:flex-row lg:h-min lg:gap-8 bg-transparent lg:pt-20">
                <div className="h-[30rem] lg:w-[35rem]">
                    <img className="object-cover h-full w-full" src={ejemplo} alt="Imagen de la sección sobre nosotros" />
                </div>
                <div className="lg:w-1/2 h-max flex flex-col justify-between mx-4 lg:mx-0 pb-12 lg:px-4">
                    <h4 className="text-4xl lg:text-5xl text-center lg:text-left font-variable font-[600] text-heading lg:text-nowrap mb-6 relative">Bienvenido a Jorgio</h4>
                    <p className="text-heading text-left text-lg lg:text-xl antialiased font-monse mb-6">
                        Somos una empresa 100% Mexicana que ofrece servicios de banquetes para toda ocasión en la CDMX y Estado de México
                    </p>
                    <p className="antialiased text-left text-lg lg:text-xl text-heading font-monse mb-6">
                        Ofrecemos una gama completa de servicios para garantizar que tu evento sea un éxito absoluto.
                    </p>
                    <div className="flex justify-between items-center text-heading">
                        <div className="flex justify-between gap-2 lg:gap-4 font-title items-center px-2 lg:px-4 border-l-2 lg:border-l-4 border-custom-border">
                            <p className="text-3xl lg:text-5xl font-extrabold font-title">20</p>
                            <p>Años de <span className="block text-heading font-bold text-sm lg:text-base uppercase">Experiencia</span></p>
                        </div>
                        <div className="flex justify-between gap-2 lg:gap-4 font-title items-center px-2 lg:px-4 border-l-2 lg:border-l-4 border-custom-border">
                            <p className="text-3xl lg:text-5xl font-extrabold font-title">300+</p>
                            <p>Banquetes <span className="block text-heading font-bold text-sm lg:text-base uppercase">Exitosos</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreNosotros
