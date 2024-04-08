import React from 'react';
import { Link } from '@remix-run/react';

interface BtnProps {
  isLink: boolean;
  value: string;
  claseBefore: string;
  claseBgLine: string;
  claseBgBtn: string;
  route: string;
}

const Btn: React.FC<BtnProps> = ({ isLink, value, claseBefore, claseBgLine, claseBgBtn, route }) => {
  if (isLink) {
    return (
      <Link to={route} prefetch="intent" className={`fancy ${claseBgBtn}`}>
        <span className={`top-key ${claseBgLine}`}></span>
        <span className={`text font-open tracking-[.3em] text-sm ${claseBefore}`}>{value}</span>
        <span className={`bottom-key-1 ${claseBgLine}`}></span>
        <span className={`bottom-key-2 ${claseBgLine}`}></span>
      </Link>
    );
  } else {
    return (
      <button  className={`fancy ${claseBgBtn}`}>
        <span className={`top-key ${claseBgLine}`}></span>
        <span className={`text font-open tracking-[.3em] text-sm ${claseBefore}`}>{value}</span>
        <span className={`bottom-key-1 ${claseBgLine}`}></span>
        <span className={`bottom-key-2 ${claseBgLine}`}></span>
      </button>
    );
  }
};

export default Btn;
