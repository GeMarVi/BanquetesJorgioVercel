import { useInView } from "framer-motion";
import { useRef } from "react";

import ejemplo from "../src/Mobiliario2.webp";
import { HeadingVistas } from "./HeadingVistas";

const SobreNosotros = () => {
   const imageRef = useRef(null);
   const infoRef = useRef(null);

   const isInView = useInView(imageRef, { once: true });
   const isInfoInView = useInView(infoRef, { once: true });

   return (
      <section className="max-w-6xl mx-auto overflow-hidden lg:overflow-visible">
         <HeadingVistas
            text="Acerca de nosotros"
            initial="translateX(-200px)"
            whileInView="translateX(0)"
         />
         <div className="flex lg:w-auto lg:items-center flex-col-reverse lg:flex-row mt-24 lg:h-min lg:gap-8 bg-transparent lg:pt-20">
            <div className="h-[30rem] lg:w-[35rem]">
               <img
                  style={{
                     transform: isInView ? "scale(1)" : "scale(0.5)",
                     opacity: isInView ? 1 : 0,
                     transition: `
                       transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s,
                       opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s
                     `,
                   }}                   
                  ref={imageRef}
                  className="object-cover h-full w-full"
                  src={ejemplo}
                  alt="Imagen de la sección sobre nosotros"
               />
            </div>
            <div
               style={{
                  transform: isInfoInView ? "translateX(0)" : "translateX(300px)",
                  opacity: isInfoInView ? 1 : 0,
                  transition: `
                    transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s,
                    opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s
                  `,
                }}              
               className="lg:w-1/2 h-max flex flex-col justify-between mx-4 lg:mx-0 pb-12 lg:px-4"
            >
               <h4 ref={infoRef} className="text-4xl lg:text-5xl text-left font-variable font-[600] text-heading lg:text-nowrap mb-6 relative">
                  Bienvenido a Jorgio
               </h4>
               <p className="text-heading text-center lg:text-left text-xl lg:text-2xl antialiased font-monse mb-6">
                  Somos una empresa 100% Mexicana que ofrece servicios de
                  banquetes para toda ocasión en la CDMX y Estado de México
               </p>
               <p className="text-heading text-center lg:text-left text-xl lg:text-2xl antialiased font-monse mb-6">
                  Especializados en el servicio de{" "}
                  <strong className="text-gradient-6">
                     Espadas Brasileñas
                  </strong>{" "}
                  y <strong className="text-gradient-6"> Parrilladas</strong>{" "}
                  brindadando un servicio de alta calidad en todo momento
               </p>
               <p className="antialiased text-center lg:text-left text-xl lg:text-2xl text-heading font-monse mb-6">
                  Ofrecemos una gama completa de servicios para garantizar que
                  tu evento sea un éxito absoluto.
               </p>
               <div className="flex justify-between items-center text-heading">
                  <div className="flex justify-between gap-2 lg:gap-4 font-title items-center px-2 lg:px-4 border-l-2 lg:border-l-4 border-custom-border">
                     <p className="text-3xl lg:text-5xl font-extrabold text-gradient font-Inter">
                        20
                     </p>
                     <p>
                        Años de{" "}
                        <span className="block text-heading font-bold text-sm lg:text-base uppercase">
                           Experiencia
                        </span>
                     </p>
                  </div>
                  <div className="flex justify-between gap-2 lg:gap-4 font-title items-center px-2 lg:px-4 border-l-2 lg:border-l-4 border-custom-border">
                     <p className="text-3xl lg:text-5xl font-extrabold text-gradient font-Inter">
                        300+
                     </p>
                     <p>
                        Banquetes{" "}
                        <span className="block text-heading font-bold text-sm lg:text-base uppercase">
                           Exitosos
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SobreNosotros;
