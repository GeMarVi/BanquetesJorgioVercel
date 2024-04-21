import Btn from "./Btn";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface CardServicio {
   title: string;
   route: string;
   alt: string;
   src: string;
   logo: JSX.Element;
}

const CardServicios: React.FC<CardServicio> = ({
   title,
   route,
   alt,
   src,
   logo,
}) => {
   const cardRefs = useRef(null);
   const isInView = useInView(cardRefs, { once: true });

   return (
      <div
         ref={cardRefs}
         className={`relative rounded-xl flex w-auto flex-col text-heading bg-secundario transition-transform-opacity transition-custom-cubic duration-600 ${isInView ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >
         <div className="relative mx-4 rounded-xl -mt-6 h-60 w-auto overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
               className="object-cover h-full w-full"
               src={src}
               alt={`Imagen donde se ve el servicio de ${alt} de banquetes Jorgio`}
            />
         </div>
         <div className="p-6 flex flex-col gap-4 justify-between">
            <div className="bg-cover bg-no-repeat w-8 h-8">{logo}</div>
            <h5 className="mb-2 block font-variable text-2xl text-heading font-normal">
               {title}
            </h5>
            <Btn
               target={false}
               isLink={true}
               route={route}
               value="Mas información"
            />
         </div>
      </div>
   );
};

export default CardServicios;
