import { useState } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { AnimatePresence, motion, animate } from "framer-motion";

import bannerPrincipal from "../src/banners/hero.webp";
import bannerEspadas from "../src/banners/espadas-banner.webp";
import bannerParrillada from "../src/banners/parrillada-banner.webp";
import bannerTacos from "../src/banners/tacos-banner.webp";
import bannerPersonal from "../src/banners/meseros-banner.webp";
import bannerMoviliario from "../src/banners/mobiliario-banner.jpg";
import Navegacion from "../components/Navegacion";
import Btn from "./Btn";
import { useScrollContext } from "~/context/scrollContext";

const Header = () => {
   const [routesInactives, setRoutesInactives] = useState(["/politicas-de-privacidad", "/blog/espadas-brasilenas",
      "/blog/picanha", "/blog/costillas-bbq", "/blog/ensalada-dulce", "/blog/chorizo-brasileno", "/blog/puntas-cerdo", "/blog/filete-mignon"
   ]);
   const { formRef } = useScrollContext();
   const route = useLocation().pathname;
   const navigate = useNavigate();

   let title = "";
   let description = "";
   switch (route) {
      case "/":
         title = "Espadas Brasileñas y Parrilladas";
         description = "Sabemos lo que te gusta";
         break;
      case "/espadas-brasilenas":
         title = "Espadas Brasileñas";
         description =
            "Exquisito bufette ilimitado de espadas brasileñas, come todo lo que tu puedas";
         break;
      case "/parrilladas":
         title = "Parrilladas";
         description =
            "Disfruta de nuestras exquisitas parrilladas con exelente variedad de cortes de carne";
         break;
      case "/mobiliario":
         title = "Mobiliario";
         description =
            "Tenemos todos los accesorios que requieres para tu evento";
         break;
      case "/buffet-de-tacos":
         title = "Buffet de Tacos";
         description = "Para los amantes de los tacos";
         break;
      case "/personal":
         title = "Personal";
         description = "Te atendemos como tu te mereces";
         break;
      case "/blog":
         title = "Blog Informativo";
         description = "Descubre el significado de los elementos que conforman las exquisitas espadas brasileñas";
         break;
      default:
         title = "Page Not Found";
   }

   let banner = "";
   switch (route) {
      case "/":
         banner = bannerPrincipal;
         break;
      case "/espadas-brasilenas":
         banner = bannerEspadas;
         break;
      case "/parrilladas":
         banner = bannerParrillada;
         break;
      case "/mobiliario":
         banner = bannerMoviliario;
         break;
      case "/buffet-de-tacos":
         banner = bannerTacos;
         break;
      case "/personal":
         banner = bannerPersonal;
         break;
      case "/blog":
         banner = bannerPrincipal;
         break;
      default:
         banner = "Page Not Found";
   }

   const handleScroll = () => {
      if (route !== "/") {
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
   }

   return (
      <div>
         <Navegacion />
         <header
            style={{
               backgroundImage: `url(${banner})`,
               display: routesInactives.includes(route) ? "none" : "flex", // Aplica display: none si la ruta no requiere ciertos estilos"
            }}
            className="flex flex-col justify-between relative mb-32 lg:mb-40 bg-center bg-no-repeat bg-cover h-screen text-white overflow-hidden md:-translate-y-[10rem] lg:-translate-y-[5.3rem]"
         >
            <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

            <div className="relative h-full lg:ml-8 flex flex-col justify-center lg:justify-end lg:mb-10 items-center lg:items-start">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={route}
                     variants={{
                        initial: { opacity: 0, y: -10 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                        exit: { opacity: 0, transition: { duration: 0.4 } },
                     }}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                  >
                     <div className="relative mb-[90px] lg:mb-0 mx-4 h-min lg:mx-0 flex flex-col gap-4 lg:gap-8 justify-center p-14 lg:w-max bg-black bg-opacity-70">
                        <div className="absolute border border-gray-50 w-[80%] lg:w-[93%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        {route == "/" ? (
                           <h1 className="text-[3.25rem] leading-none lg:text-[4.5rem] font-clash uppercase text-center lg:text-left">
                              Jorgio
                           </h1>
                        ) : null}
                        <p
                           className={`font-clash ${route != "/"
                              ? "font-[900] text-5xl text-center lg:text-left lg:text-7xl"
                              : "text-3xl lg:text-5xl text-center lg:text-left font-normal"
                              }`}
                        >
                           {title}
                        </p>
                        <p
                           className={`font-variable max-w-[50rem] ${route !== "/"
                              ? "text-3xl text-center lg:text-left font-normal"
                              : "text-2xl text-center lg:text-left font-light"
                              }`}
                        >
                           "{description}"
                        </p>
                        <div onClick={handleScroll} className="md:hidden flex justify-center relative">
                           <Btn
                              target={false}
                              isLink={false}
                              route=""
                              value="Contáctanos"
                           />
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </header>
      </div>
   );
};

export default Header;
