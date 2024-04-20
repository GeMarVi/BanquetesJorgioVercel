import { useState, useEffect, useRef } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { HeadingVistas } from "./HeadingVistas";
import { useInView } from "framer-motion";

const Video: React.FC = () => {
   const instagramRef = useRef(null);
   const textRef = useRef(null);

   const isInstagramInView = useInView(instagramRef, { once: true });
   const isTextInView = useInView(textRef, { once: true });

   return (
      <>
         <section className="bg-primario w-screen mx-auto pt-32 lg:pt-40 overflow-hidden lg:overflow-visible">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-2 lg:px-0 gap-8">
               <HeadingVistas
                  text="¿Aun no nos conoces?"
                  initial="translateY(150px)"
                  whileInView="translateY(0)"
               />
               <div className="flex flex-col-reverse mt-24 lg:flex-row gap-16 items-center">
                  <div
                     ref={instagramRef}
                     style={{
                        transform: isInstagramInView
                           ? "translateX(0)"
                           : "translateX(-200px)",
                        opacity: isInstagramInView ? 1 : 0,
                        transition: `
                        transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s,
                        opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s
                        `,
                     }}
                     className="flex-1 w-full px-2 lg:w-auto lg:px-0"
                  >
                     <InstagramEmbed
                        url="https://www.instagram.com/p/C3sNGCHvywO/"
                        className=""
                        height={"450"}
                     />
                  </div>
                  <div
                     style={{
                        transform: isTextInView
                           ? "translateX(0)"
                           : "translateX(200px)",
                        opacity: isTextInView ? 1 : 0,
                        transition: `
                             transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s,
                             opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s
                           `,
                     }}
                     className="flex-1"
                  >
                     <p
                        ref={textRef}
                        className="font-variable font-normal text-center text-3xl lg:text-4xl text-heading pb-4"
                     >
                        En{" "}
                        <span className="font-bold text-gradient">
                           Jorgio espadas brasileñas y parrilladas
                        </span>{" "}
                        queremos que nuestros clientes se sientan con la
                        confianza y seguridad de estar contratando un servicio
                        profesional y de calidad
                     </p>
                     <p className="font-variable font-normal text-center text-3xl lg:text-4xl text-heading">
                        Por ello te garantizamos un servicio excepcional para
                        hacer de tu evento algo inolvidable
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Video;
