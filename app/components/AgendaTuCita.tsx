import FormularioContacto from "./FormularioContacto"
import bgContacto from "../src/Mobiliario.webp"

type ActionData = {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
};

const AgendaTuCita = (data: ActionData) => {

  return (
    <section className="lg:p-0 lg:py-20 pt-16 max-w-6xl mx-auto">
      <h3 className="text-heading  text-center text-5xl font-clash lg:pb-12">Contáctanos</h3>
      <div className="flex flex-col lg:flex-row justify-between lg:items-stretch lg:px-12 mx-auto lg:h-auto mt-10">
        <FormularioContacto nombre={data.nombre} apellido={data.apellido} email={data.email} telefono={data.telefono} mensaje={data.mensaje} />
        <div style={{ backgroundImage: `url(${bgContacto})` }} className="flex h-[40rem] p-4 lg:p-8 lg:flex-1 flex-col justify-center items-center gap-20 bg-cover bg-bottom bg-no-repeat relative">
          <div className="absolute top-8 lg:top-16 bottom-8 lg:bottom-16 left-8 lg:left-16 right-8 lg:right-16 gradient-banner"></div>
          <div className="absolute top-16 bottom-16 left-16 right-16 lg:top-32 lg:bottom-32 lg:left-32 lg:right-32 border border-y-gray-50"></div>
          <p className="text-gray-50 relative w-1/2 z-50 font-variable font-normal text-xl text-center">Si prefieres comunicate con nosotros por WhatsApp o Correo</p>
          <div className="flex flex-col gap-2 items-center">
            <a href="#" className="whatsapp-svg text-gray-50 relative font-variable font-normal">WhatsApp</a>
            <p className="text-gray-100 relative font-Inter font-normal">55-39-38-7834</p>
          </div>
          <div className="flex flex-col gap-2 items-center translate-y-4">
            <p className="correo-svg relative text-gray-50 font-variable font-normal">Correo</p>
            <a className="text-gray-100 relative font-Inter font-normal" href="#">jdeleon230@hotmail.com</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AgendaTuCita