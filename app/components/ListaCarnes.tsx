import { FC } from "react";
import Vineta from "./Vineta";

interface infoCarnes {
    title: string;
    items: Array<String>;
    clase: string;
}

const ListaCarnes: FC<infoCarnes> = ({ title, items, clase }) => {
    return (
        <ul className={`flex flex-col gap-2 md:justify-center flex-1 h-min relative ${clase}`}>
            <h4 className="text-2xl text-nowrap text-left font- tracking-widest font-normal uppercase mb-4 lg:mb-0 pb-2 linea-menu relative">{title}</h4>
            {items.map(item => (
                <li key={items.indexOf(item)} className="flex items-center gap-3 lg:pl-20 text-sm lg:text-lg text-gray-100 font-monse uppercase tracking-wider"><Vineta /><span className="text-left">{item}</span></li>
            ))}
        </ul>
    )
}

export default ListaCarnes