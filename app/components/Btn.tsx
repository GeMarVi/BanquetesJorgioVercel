import React from 'react';
import { Link } from '@remix-run/react';

interface BtnProps {
  isLink: boolean;
  value: string;
  route: string;
  target: boolean;
}

const Btn: React.FC<BtnProps> = ({ isLink, value, route, target }) => {
  if (isLink) {
    return (
      <Link to={route} target={target ? "_blank" : "_self"} className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-custom-border">
        <span className="font-normal text-heading text-xl font-variable relative z-10 group-hover:text-white duration-500">{value}</span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 group-hover:translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-terciario duration-500 group-hover:translate-y-full h-full"></span>
      </Link>
    );
  } else {
    return (
      <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-custom-border">
        <span className="font-normal text-heading text-xl font-variable relative z-10 group-hover:text-white duration-500">{value}</span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 group-hover:translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-terciario duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-terciario duration-500 group-hover:translate-y-full h-full"></span>
      </button>
    );
  }
};

export default Btn;
