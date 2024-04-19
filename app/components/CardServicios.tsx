import React from 'react';
import Btn  from "./Btn";
import espadas from "../src/espadas-tres.webp"
import parrilla from "~/src/parrillada1.webp"
import tacos from "../src/tacos.webp"
import mobiliario from "../src/moviliario.webp"
import meseros from "../src/meseros.webp"
import dj from "../src/DJ.webp"
import { DjIcon, EspadasIcon, MeserosIcon, MobiliarioIcon, ParrilladaIcon, TacosIcon } from './IconsSvg';

const CardServicios = () => {
  const cardsServicios = [
    { title: "Espadas Brasileñas", route:"espadas-brasilenas", alt: "Espadas brasileñas", src: espadas, logo: <EspadasIcon /> },
    { title: "Parrilladas", route:"parrilladas", alt: "Parrilladas", src: parrilla, logo: <ParrilladaIcon /> },
    { title: "Buffet de Tacos", route:"tacos", alt: "buffet de tacos", src: tacos, logo: <TacosIcon /> },
    { title: "Mobiliario", route:"mobiliario", alt: "mobiliario", src: mobiliario, logo: <MobiliarioIcon /> },
    { title: "Meseros", route:"personal", alt: "meseros", src: meseros, logo: <MeserosIcon /> },
    { title: "Audio Dj", route:"personal", alt: "Dj", src: dj, logo: <DjIcon /> }
  ];

  return (
    cardsServicios.map((card,index) => (
      <div key={index} className="relative mb-16 md:mb-0 mx-4 md:mx-0 flex w-auto flex-col text-heading bg-secundario">
        <div className="relative mx-4 -mt-6 h-60 w-auto overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="object-cover h-full w-full" src={card.src} alt={`Imagen donde se ve el servicio de ${card.alt} de banquetes Jorgio`} />
        </div>
        <div className="p-6 flex flex-col gap-4 justify-between">
          <div className="bg-cover bg-no-repeat w-8 h-8">{card.logo}</div>
          <h5 className="mb-2 block font-variable text-2xl text-heading font-normal">
            {card.title}
          </h5>
          <Btn target={false} isLink={true} route={card.route} value="Mas información" />
        </div>
      </div>
    ))
  );
};

export default CardServicios;
