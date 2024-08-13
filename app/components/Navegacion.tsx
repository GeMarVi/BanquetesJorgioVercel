import { Link, useLocation, useNavigate } from "@remix-run/react";
import Btn from "./Btn";
import { useScrollContext } from "~/context/scrollContext";
import { animate } from "framer-motion";

interface NavegacionProps {
   active: boolean;
   setActive: (active: boolean) => void;
}

const Navegacion: React.FC<NavegacionProps> = ({ active, setActive }) => {
   const navigate = useNavigate();
   const location = useLocation().pathname;

   const { formRef } = useScrollContext();

   const handleClick = () => {
      setActive(false);
   };

   const handleClickBtn = () => {
      if(location !== "/"){
         navigate("/")
      }

      setTimeout(() => {
         if (formRef.current) {
         const targetPosition = formRef.current.getBoundingClientRect().top;

         animate(window.scrollY, targetPosition, {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 4, 
            onUpdate: (latest) => window.scrollTo(0, latest),
         });
      }
      }, 1000);
   };

   return (
      <nav
         className={
            active
               ? "absolute bg-secundario flex flex-col items-center justify-center transition-transform duration-500 translate-x-0 z-[50] gap-12 top-0 bottom-0 left-0 right-0"
               : `flex items-center flex-col lg:flex-row translate-x-[200%] md:flex-wrap justify-center gap-12 lg:gap-8 bg-transparent lg:translate-x-0 transition-transform duration-500 ${"absolute z-[50] top-0 bottom-0 left-0 right-0 lg:static"}`
         }
      >
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/" ? "border-b border-custom-border" : ""
            }`}
            to="/"
         >
            Inicio
         </Link>
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/espadas-brasilenas"
                  ? "border-b border-custom-border"
                  : ""
            }`}
            to="/espadas-brasilenas"
         >
            Espadas Brasileñas
         </Link>
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/parrilladas"
                  ? "border-b border-custom-border"
                  : ""
            }`}
            to="/parrilladas"
         >
            Parrilladas
         </Link>
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/tacos" ? "border-b border-custom-border" : ""
            }`}
            to="/buffet-de-tacos"
         >
            Buffet de Tacos
         </Link>
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/personal" ? "border-b border-custom-border" : ""
            }`}
            to="/personal"
         >
            Personal
         </Link>
         <Link
            prefetch="intent"
            onClick={handleClick}
            className={`py-2 w-max font-variable font-normal text-heading lg:text-gray-50 cursor-pointer text-2xl lg:text-xl ${
               location === "/mobiliario" ? "border-b border-custom-border" : ""
            }`}
            to="/mobiliario"
         >
            Mobiliario
         </Link>
         <div onClick={handleClickBtn} className="mr-4 hidden lg:block">
            <Btn target={false} isLink={false} route="" value="Contacto" />
         </div>
      </nav>
   );
};

export default Navegacion;
