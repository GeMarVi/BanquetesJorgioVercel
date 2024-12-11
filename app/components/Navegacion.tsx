import { Link, useLocation, useNavigate } from "@remix-run/react";
import Btn from "./Btn";
import { useScrollContext } from "~/context/scrollContext";
import { animate } from "framer-motion";
import logo from "../src/logo.svg";
import { useEffect, useState } from "react";
import BtnToggle from "./BtnToggle";

const Navegacion = () => {
   const navigate = useNavigate();
   const location = useLocation().pathname;

   const { formRef } = useScrollContext();

   const [activeToggle, setActiveToggle] = useState(false);

   const handleClickToggle = () => {
      setActiveToggle(!activeToggle);
   };

   useEffect(() => {
      // Definir un media query para pantallas menores a 1024px
      const isSmallScreen = window.matchMedia("(max-width: 768px)");

      // Verificar si la pantalla cumple con el criterio
      if (isSmallScreen.matches) {
         if (activeToggle) {
            document.body.style.position = "fixed";
         } else {
            document.body.style.position = "relative";
         }

         return () => {
            document.body.style.position = "relative";
         };
      }
   }, [activeToggle]);


   const handleClickBtn = () => {
      if (location !== "/") {
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
         className="py-2 h-screen md:h-auto px-4 md:px-12 flex md:items-center flex-row justify-between gap-10 md:gap-8 bg-transparent absolute top-0 bottom-0 left-0 right-0 md:static"
      >
         <div className="z-50">
            <Link to={"/"}>
               <img
                  src={logo}
                  className="w-[6.5rem] lg:[7.5rem] z-[70]"
                  alt="logo"
               />
            </Link>
         </div>

         <div className={`absolute h-full left-0 right-0 z-50 flex flex-col flex-wrap md:flex-row flex-wraps md:items-center md:justify-between gap-8 bg-transparent md:static ${activeToggle
               ? "py-20 md:py-2 md:px-12 pl-[calc(100%-65%)] md:pl-0 degradado md:bg-transparent translate-x-0 transition-transform md:transform-none duration-300"
               : "py-2 px-12 translate-x-[100%] md:translate-x-0"
            }`}
         >
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/" ? "border-b border-custom-border" : ""
                  }`}
               to="/"
            >
               Inicio
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/espadas-brasilenas"
                  ? "border-b border-custom-border"
                  : ""
                  }`}
               to="/espadas-brasilenas"
            >
               Espadas Brasileñas
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/parrilladas"
                  ? "border-b border-custom-border"
                  : ""
                  }`}
               to="/parrilladas"
            >
               Parrilladas
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/buffet-de-tacos" ? "border-b border-custom-border" : ""
                  }`}
               to="/buffet-de-tacos"
            >
               Buffet de Tacos
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/personal" ? "border-b border-custom-border" : ""
                  }`}
               to="/personal"
            >
               Personal
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/mobiliario" ? "border-b border-custom-border" : ""
                  }`}
               to="/mobiliario"
            >
               Mobiliario
            </Link>
            <Link
               prefetch="intent"
               onClick={handleClickToggle}
               className={`py-2 w-max font-pop font-normal text-heading lg:text-gray-50 cursor-pointer text-base lg:text-base ${location === "/blog" ? "border-b border-custom-border" : ""
                  }`}
               to="/blog"
            >
               Blog
            </Link>
            <div onClick={handleClickBtn} className="mr-4 hidden md:block">
               <Btn target={false} isLink={false} route="" value="Contacto" />
            </div>
         </div>
         <div className="md:hidden">
            <div className="flex items-center lg:block justify-between px-6 py-3 md:py-0">
               <div
                  className="md:hidden relative z-[200]"
                  onClick={handleClickToggle}
               >
                  <BtnToggle activeToggle={activeToggle} setActiveToggle={setActiveToggle} />
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navegacion;
