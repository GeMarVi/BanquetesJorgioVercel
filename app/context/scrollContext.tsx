import { animate } from 'framer-motion';
import React, { createContext, useContext, useRef, ReactNode, RefObject } from 'react';
// Tipo para el contexto
interface ScrollContextType {
  formRef: RefObject<HTMLFormElement>; // Ref para el formulario
}

// Crear el contexto
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// Proveedor del contexto
export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Crear un ref para el formulario
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <ScrollContext.Provider value={{ formRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext debe ser usado dentro de un ScrollProvider');
  }
  return context;
};
