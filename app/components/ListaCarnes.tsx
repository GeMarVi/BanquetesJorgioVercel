import { FC, useRef } from "react";
import Vineta from "./Vineta";
import { useInView } from "framer-motion";
useRef

interface infoCarnes {
    title: string;
    items: Array<String>;
    clase: string;
}

const ListaCarnes: FC<infoCarnes> = ({ title, items, clase }) => {

    const listaRef = useRef(null);
    const isInView = useInView(listaRef, {once: true});

    return (
        <ul  
        ref={listaRef}
        style={{
            transform: isInView
               ? "translateY(0)"
               : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: `
                 transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s,
                 opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s
               `,
         }}
         className={`flex flex-col gap-2 md:justify-center flex-1 h-min relative ${clase}`}>
            <h4 className="text-2xl text-nowrap text-left text-heading font-variable tracking-widest font-normal uppercase mb-4 lg:mb-0 pb-2 linea-menu before:bg-terciario relative">{title}</h4>
            {items.map(item => (
                <li key={items.indexOf(item)} className="flex items-center gap-3 lg:pl-20 text-sm lg:text-lg text-heading font-variable tracking-wider"><Vineta /><span className="text-left text-2xl">{item}</span></li>
            ))}
        </ul>
    )
}

export default ListaCarnes