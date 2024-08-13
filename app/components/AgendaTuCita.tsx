import FormularioContacto from "./FormularioContacto";
import bgContacto from "../src/Mobiliario.webp";
import { HeadingVistas } from "./HeadingVistas";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@remix-run/react";

type prop = {
   data: data;
};

type data = {
   nombre?: string;
   apellido?: string;
   email?: string;
   telefono?: string;
   mensaje?: string;
   lugar?: string;
   personas?: string;
   evento?: string;
   fecha?: string;
   error?: string;
   succes?: string
};

const AgendaTuCita: React.FC<prop> = ({ data }) => {
   const formRef = useRef(null);
   const contactRef = useRef(null);
   const isFormInView = useInView(formRef, { once: true });
   const isContactInView = useInView(contactRef, { once: true });

   return (
      <section className="pt-32 lg:pt-40 max-w-6xl mx-auto mb-40 overflow-hidden lg:overflow-visible">
         <HeadingVistas
            text="Envíenos un mensaje"
            initial="scale(2)"
            whileInView="scale(1)"
         />
         <div style={{
            transform: isFormInView ? "scale(1)" : "scale(0.7)",
            opacity: isFormInView ? 1 : 0,
         }} className="transition-transform-opacity transition-custom-cubic duration-600 delay-300 flex flex-col lg:flex-row justify-between lg:items-stretch mx-auto lg:h-auto mt-24">
            <div ref={formRef} className="flex-1">
               <FormularioContacto
                 data={data}
               />
            </div>
            <div
               ref={contactRef}
               style={{
                  backgroundImage: `url(${bgContacto})`,
                  transform: isContactInView ? "scale(1)" : "scale(0.7)",
                  opacity: isContactInView ? 1 : 0,
               }}
               className="transition-transform-opacity transition-custom-cubic duration-600 delay-300 flex h-[40rem] lg:h-auto p-4 lg:p-8 lg:flex-1 flex-col justify-center items-center gap-20 bg-cover bg-bottom bg-no-repeat relative"
            >
               <div className="absolute top-8 lg:top-16 bottom-8 lg:bottom-16 left-8 lg:left-16 right-8 lg:right-16 gradient-banner"></div>
               <div className="absolute top-16 bottom-16 left-16 right-16 lg:top-32 lg:bottom-32 lg:left-32 lg:right-32 border border-y-gray-50"></div>
               <p className="text-gray-50 relative w-1/2 z-50 font-variable font-normal text-xl text-center">
                  Si prefieres comunicate con nosotros por WhatsApp o Correo
               </p>
               <div className="flex flex-col gap-2 items-center">
                  <Link
                     to="https://wa.link/jorgio"
                     className="whatsapp-svg text-gray-50 relative font-variable font-normal"
                  >
                     WhatsApp
                  </Link>
                  <p className="text-gray-100 relative font-Inter font-normal">
                     55-39-38-7834
                  </p>
               </div>
               <div className="flex flex-col gap-2 items-center translate-y-4">
                  <p className="correo-svg relative text-gray-50 font-variable font-normal">
                     Correo
                  </p>
                  <a
                     className="text-gray-100 relative font-Inter font-normal"
                     href="#"
                  >
                     jdeleon230@hotmail.com
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AgendaTuCita;
