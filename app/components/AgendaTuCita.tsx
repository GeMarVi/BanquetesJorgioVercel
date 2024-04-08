import FormularioContacto from "./FormularioContacto"
import bgContacto from "../src/Mobiliario.webp"

type ActionData = {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
};

const AgendaTuCita = (data:ActionData) => {

  return (
    <section className="px-3 lg:px-8 lg:pb-28">
      <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider lg:pb-12">Contáctanos</h3>
      <div className="flex flex-col lg:flex-row justify-between lg:items-stretch lg:px-12 mx-auto h-[60rem] lg:h-auto mt-10">
        <div style={{ backgroundImage: `url(${bgContacto})` }}  className="flex flex-1 flex-col justify-center items-center gap-20 bg-cover bg-bottom bg-no-repeat relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 gradient-banner"></div>
          <div className="flex flex-col gap-2 items-center">
            <a href="#" className="whatsapp-svg relative text-paragraph font-monse">WhatsApp</a>
            <p className="text-gray-100 relative font-monse">55-39-38-7834</p>
          </div>
          <div className="flex flex-col gap-2 items-center translate-y-4">
            <p className="correo-svg relative text-gray-100 font-monse">Correo</p>
            <a className="text-gray-100 relative font-monse" href="#">jdeleon230@hotmail.com</a>
          </div>
        </div>
        <FormularioContacto nombre={data.nombre} apellido={data.apellido} email={data.email} telefono={data.telefono} mensaje={data.mensaje}/>
      </div>
    </section>
  )
}

export default AgendaTuCita