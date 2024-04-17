import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "@remix-run/react";
import { animate } from "motion";

import logo from "../src/logo.svg"
import bannerPrincipal from "../src/hero.webp"
import bannerEspadas from "../src/espadasbanner.webp"
import bannerParrillada from "../src/parrilladaBanner.webp"
import bannerTacos from "../src/tacosBanner.webp"
import bannerPersonal from "../src/meserosBanner.webp"
import bannerMoviliario from "../src/moviliarioBanner.webp"
import Navegacion from "../components/Navegacion"
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
      animate(headerRef.current, { opacity: 1 }, { duration: .8 })
  }, [])

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
    <header style={{ backgroundImage: `url(${banner})` }} className="relative bg-center bg-no-repeat bg-cover h-screen text-white -z-20 overflow-hidden">
      <div ref={headerRef} className="mx-auto opacity-0 lg:h-auto lg:flex justify-between items-center lg:py-2">
        <div className="flex items-center lg:block justify-between px-6 py-3 lg:py-0">
          <Link to={"/"}>
            <img src={logo} className="w-28 lg:w-32 relative z-[70]" alt="logo" />
          </Link>
          <div className="lg:hidden relative z-[200]" onClick={handleClick}>
            <BtnToggle active={active} setActive={setActive} />
          </div>
        </div>
        <Navegacion setActive={setActive} active={active} />
        <div ref={btnDeskRef} className="mr-4 hidden lg:block">
          <Btn target={false} isLink={false} route="" value="Contacto" />
        </div>
      </div>
      <div className="relative mx-auto h-[75vh] lg:h-screen flex flex-col gap-6 justify-center">
        <div ref={titleRef} className="relative mx-4 h-[60vh] lg:h-auto lg:mx-0 flex flex-col gap-6 lg:gap-12 justify-center -translate-x-[300%] lg:translate-x-0 lg:translate-y-8 lg:opacity-0 lg:ml-20 p-14 lg:w-max bg-black bg-opacity-70">
          <div className="absolute border border-gray-50 w-[80%] lg:w-[95%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          {route == "/" ? <h1 className="text-7xl lg:text-[6rem] font-clash uppercase text-center lg:text-left">Jorgio</h1> : null
          }
          <p className={`font-clash ${route != "/" ? "font-[900] text-5xl text-center lg:text-left lg:text-7xl" : "text-4xl lg:text-5xl text-center lg:text-left font-bold"}`}>{title}</p>
          <p className={`font-variable max-w-[50rem] ${route !== "/" ? "text-3xl text-center lg:text-left font-normal" : "text-2xl text-center lg:text-left font-light"}`}>"{description}"</p>
          <div ref={btnRef} className="lg:hidden flex justify-center relative translate-x-[300%]">
             <Btn target={false} isLink={false} route="" value="Contáctanos" />
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header

