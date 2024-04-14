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
      <Link to={route} className="btn font-title font-bold text-xl text-center">
        {value}
      </Link>
    );
  } else {
    return (
      <button className="btn font-title font-bold text-xl text-center">
        {value}
      </button>
    );
  }
};

export default Btn;
