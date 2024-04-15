import { Link, useLocation } from "@remix-run/react";

interface NavegacionProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Navegacion: React.FC<NavegacionProps> = ({ active, setActive }) => {

  const location = useLocation().pathname;

  const handleClick = () => {
    setActive(false);
  }
  return (
    <nav className={active ? "absolute flex flex-col items-center justify-center transition-transform duration-500 translate-x-0 bg-azulOscuro z-[50] gap-12 top-0 bottom-0 left-0 right-0" : `flex items-center flex-col lg:flex-row translate-x-[200%] md:flex-wrap justify-center gap-12 lg:gap-8 bg-azulOscuro lg:bg-transparent lg:translate-x-0 transition-transform duration-500 ${"absolute z-[50] top-0 bottom-0 left-0 right-0 lg:static"}`}>

      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/" ? "border-b border-[#D24545]" : ""}`} to="/">Inicio</Link>
      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/espadas-brasilenas" ? "border-b border-[#D24545]" : ""}`} to="/espadas-brasilenas">Espadas Brasileñas</Link>
      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/parrilladas" ? "border-b border-[#D24545]" : ""}`} to="/parrilladas">Parrilladas</Link>
      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/tacos" ? "border-b border-[#D24545]" : ""}`} to="/tacos">Buffet de Tacos</Link>
      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/personal" ? "border-b border-[#D24545]" : ""}`} to="/personal">Personal</Link>
      <Link prefetch="intent" onClick={handleClick} className={`py-2 w-max font-title uppercase font-normal cursor-pointer text-base lg:text-sm ${ location === "/mobiliario" ? "border-b border-[#D24545]" : ""}`} to="/mobiliario">Mobiliario</Link>

    </nav>
  );
}

export default Navegacion;
