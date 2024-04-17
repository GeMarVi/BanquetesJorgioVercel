import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(() => {
    // Verificar si estamos en el lado del cliente
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Verificar si estamos en el lado del cliente
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { width };
};

export default useScreenSize;
