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
      <Link to={route} target={target ? "_blank" : "_self"} className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:from-[#DF6B9A] hover:to-pink-600 text-white font-normal py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out w-max tex-center font-variable text-xl">
        {value}
      </Link>
    );
  } else {
    return (
      <button
        className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:from-[#DF6B9A] hover:to-pink-600 text-white font-normal py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out w-max tex-center font-variable text-xl"
      >
        {value}
      </button>
    );
  }
};

export default Btn;
