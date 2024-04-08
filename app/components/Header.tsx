import { useState, useRef, useEffect } from "react"
import { useLocation } from "@remix-run/react";
import { animate } from "motion";

import logo from "~/src/logo.svg"
import bannerPrincipal from "~/src/hero.webp"
import bannerEspadas from "~/src/espadasBanner.webp"
import bannerParrillada from "~/src/parrilladaBanner.webp"
import bannerTacos from "~/src/tacosBanner.webp"
import bannerPersonal from "~/src/meserosBanner.webp"
import bannerMoviliario from "~/src/moviliarioBanner.webp"
import Navegacion from "~/components/Navegacion"
import Btn from "./Btn"
import BtnToggle from "./BtnToggle"

const Header = () => {

  const headerRef = useRef(null);
  const btnRef = useRef(null);
  const btnDeskRef = useRef(null);
  const titleRef = useRef(null);

  const [active, setActive] = useState(false);

  const route = useLocation().pathname;

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active]);

  useEffect(() => {
    if (titleRef.current) 
      animate(titleRef.current, { transform: "translateX(0)" }, { duration: .8, delay: .8 })
    if (titleRef.current) 
      animate(titleRef.current, { transform: "translateY(0)", opacity: 1 }, { duration: .8 })
    if (btnRef.current) 
      animate(btnRef.current, { transform: "translateX(0)" }, { duration: .8 })
    if (headerRef.current) 
      animate(headerRef.current, { opacity: 1 },{duration: .8 })
  }, [route])

  let title = '';
  let description = "";
  switch (route) {
    case '/':
      title = 'Espadas Brasileñas y Parrilladas';
      description = "Servicio de exelencia en todo momento";
      break;
    case '/espadas-brasilenas':
      title = 'Espadas Brasileñas';
      description = "Disfruta de nuestro exquisito bufette ilimitado de espadas brasileñas";
      break;
    case '/parrilladas':
      title = 'Parrilladas';
      description = "Disfruta de nuestras exquisitas parrilladas con exelente variedad de cortes de carne";
      break;
    case '/mobiliario':
      title = 'Mobiliario';
      description = "Tenemos todos los accesorios que requieres para tu evento"
      break;
    case '/tacos':
      title = 'Buffet de Tacos';
      description = "Disfruta de nuestro exquisito buffet de tacos"
      break;
    case '/personal':
      title = 'Personal';
      description = "Te atendemos como tu te mereces"
      break;
    default:
      title = 'Page Not Found';
  }

  let banner = ""
  switch (route) {
    case '/':
      banner = bannerPrincipal;
      break;
    case '/espadas-brasilenas':
      banner = bannerEspadas;
      break;
    case '/parrilladas':
      banner = bannerParrillada;
      break;
    case '/mobiliario':
      banner = bannerMoviliario;
      break;
    case '/tacos':
      banner = bannerTacos;
      break;
    case '/personal':
      banner = bannerPersonal;
      break;
    default:
      banner = 'Page Not Found';
  }



  return (
    <header className="relative h-screen text-white -z-20 overflow-hidden">
      <div ref={headerRef} className="mx-auto h-[10vh] opacity-0 lg:h-auto lg:flex justify-between items-center lg:py-2">
        <div className="flex items-center lg:block justify-between px-6 py-3 lg:py-0">
          <img src={logo} className="w-28 lg:w-36 relative z-[70]" alt="logo" />
          <div className="lg:hidden relative z-[200]" onClick={handleClick}>
            <BtnToggle active={active} setActive={setActive} />
          </div>
        </div>
        <Navegacion setActive={setActive} active={active} />
        <div ref={btnDeskRef} className="mr-4 hidden lg:block">
          <Btn isLink={false} route="" value="Contacto" claseBgBtn="bg-rojo" claseBgLine="hidden" claseBefore="before:-left-[1.7rem]" />
        </div>
      </div>
      <div style={{ backgroundImage: `url(${banner})` }} className="relative mx-auto h-[75vh] lg:h-[calc(100vh-204px)] bg-cover bg-no-repeat bg-center flex flex-col gap-6 justify-center items-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 gradient-banner"></div>
        <div ref={titleRef} className="flex flex-col gap-6 lg:gap-12 justify-center items-center -translate-x-[300%] lg:translate-x-0 lg:translate-y-8 lg:opacity-0 px-3 lg:px-0">
          { route == "/" ? <h1 className="text-7xl font-extrabold lg:text-[6rem] font-title uppercase">Jorgio</h1> : null
          }
          <p className={`text-center font-title uppercase text-rojo ${route != "/" ? "font-bold text-5xl lg:text-7xl" : "text-5xl font-bold"}`}>{title}</p>
          <p className={`text-center font-title max-w-[50rem] ${route !== "/" ? "not-italic text-3xl font-bold" : "italic text-xl font-light"}`}>"{description}"</p> 
          
        </div>
        <div ref={btnRef} className="lg:hidden flex justify-center relative w-3/5 translate-x-[300%]">
          <Btn isLink={false} route="" value="Contáctanos" claseBgBtn="bg-rojo" claseBgLine="hidden" claseBefore="before:-left-[1.7rem] before:bg-rojo" />
        </div>
      </div>
    </header>
  )
}

export default Header

