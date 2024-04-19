import { useState, useEffect } from "react"
import { Link, useLocation } from "@remix-run/react";

import logo from "../src/logo.svg"
import bannerPrincipal from "../src/banners/hero.webp"
import bannerEspadas from "../src/banners/espadas-banner.webp"
import bannerParrillada from "../src/banners/parrillada-banner.webp"
import bannerTacos from "../src/banners/tacos-banner.webp"
import bannerPersonal from "../src/banners/meseros-banner.webp"
import bannerMoviliario from "../src/banners/mobiliario-banner.jpg"
import Navegacion from "../components/Navegacion"
import Btn from "./Btn"
import BtnToggle from "./BtnToggle"

const Header = () => {

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

  let title = '';
  let description = "";
  switch (route) {
    case '/':
      title = 'Espadas Brasileñas y Parrilladas';
      description = "Sabemos lo que te gusta";
      break;
    case '/espadas-brasilenas':
      title = 'Espadas Brasileñas';
      description = "Exquisito bufette ilimitado de espadas brasileñas, come todo lo que tu puedas";
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
      description = "Para los amantes de los tacos"
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
    <header style={{ backgroundImage: `url(${banner})` }} className="flex flex-col justify-between relative bg-center bg-no-repeat bg-cover h-screen text-white -z-20 overflow-hidden">
      <div className="absolute z-30 w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div  className="lg:h-auto lg:flex justify-between items-center lg:py-2">
        <div className="flex items-center lg:block justify-between px-6 py-3 lg:py-0">
          <Link to={"/"}>
            <img src={logo} className="w-28 lg:w-32 relative z-[70]" alt="logo" />
          </Link>
          
          <div className="lg:hidden relative z-[200]" onClick={handleClick}>
            <BtnToggle active={active} setActive={setActive} />
          </div>
        </div>

        <Navegacion setActive={setActive} active={active} />
      </div>

      <div className="relative h-full lg:h-auto lg:mb-16 lg:ml-8 flex flex-col justify-center items-center lg:items-start">
        <div className="relative mb-[90px] lg:mb-0 mx-4 h-min lg:mx-0 flex flex-col gap-4 lg:gap-8 justify-center p-14 lg:w-max bg-black bg-opacity-70">
          <div className="absolute border border-gray-50 w-[80%] lg:w-[93%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          {route == "/" ? <h1 className="text-[3.25rem] leading-none lg:text-[4.5rem] font-clash uppercase text-center lg:text-left">Jorgio</h1> : null
          }
          <p className={`font-clash ${route != "/" ? "font-[900] text-5xl text-center lg:text-left lg:text-7xl" : "text-3xl lg:text-5xl text-center lg:text-left font-normal"}`}>{title}</p>
          <p className={`font-variable max-w-[50rem] ${route !== "/" ? "text-3xl text-center lg:text-left font-normal" : "text-2xl text-center lg:text-left font-light"}`}>"{description}"</p>
          <div className="lg:hidden flex justify-center relative">
             <Btn target={false} isLink={false} route="" value="Contáctanos" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

