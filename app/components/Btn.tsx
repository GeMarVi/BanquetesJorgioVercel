import React from 'react';
import { Link } from '@remix-run/react';

interface BtnProps {
  isLink: boolean;
  value: string;
  route: string;
}

const Btn: React.FC<BtnProps> = ({ isLink, value, route }) => {
  if (isLink) {
    return (
      <Link to={route} className="cursor-pointer uppercase relative group overflow-hidden border-2 px-8 py-2 border-rojo">
        <span className="font-bold text-white text-sm font-title relative z-10 group-hover:text-white duration-500">{value}</span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 group-hover:translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-rojo duration-500 group-hover:translate-y-full h-full"></span>
      </Link>
    );
  } else {
    return (
      <button className="cursor-pointer uppercase relative group overflow-hidden border-2 px-8 py-2 border-rojo">
        <span className="font-bold text-white text-sm font-title relative z-10 group-hover:text-white duration-500">{value}</span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 group-hover:translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-rojo duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-rojo duration-500 group-hover:translate-y-full h-full"></span>
      </button>
    );
  }
};

export default Btn;
