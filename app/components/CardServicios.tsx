import Btn from "./Btn";

import espadas from "~/src/espadas-tres.webp"
import parrilla from "~/src/parrillada1.webp"
import tacos from "~/src/tacos.webp"
import mobiliario from "~/src/moviliario.webp"
import meseros from "~/src/meseros.webp"
import dj from "~/src/DJ.webp"

import logoEspadas from "~/src/logosSvg/espadas-icon.svg"
import logoParrilla from "~/src/logosSvg/parrilla-icon.svg"
import logoTaco from "~/src/logosSvg/taco-icon.svg"
import logoCarpa from "~/src/logosSvg/mobiliario-icon.svg"
import logoMesero from "~/src/logosSvg/mesero-icon.svg"
import logoDj from "~/src/logosSvg/dj-icon.svg"

const CardServicios = () => {

  const cardsServicios = [
    { title: "Espadas Brasileñas", route:"espadas-brasilenas", alt: "Espadas brasileñas", src: espadas, logo: logoEspadas },
    { title: "Parrilladas", route:"parrilladas", alt: "Parrilladas", src: parrilla, logo: logoParrilla },
    { title: "Buffet de Tacos", route:"tacos", alt: "buffet de tacos", src: tacos, logo: logoTaco },
    { title: "Mobiliario", route:"mobiliario", alt: "mobiliario", src: mobiliario, logo: logoCarpa },
    { title: "Meseros", route:"personal", alt: "meseros", src: meseros, logo: logoMesero },
    { title: "Audio Dj", route:"personal", alt: "Dj", src: dj, logo: logoDj }
  ]

  return (
    cardsServicios.map((card,index) => (
      <div key={index} className="relative mb-16 md:mb-0 mx-4 md:mx-0 flex w-auto flex-col text-heading bg-secundario">
        <div className="relative mx-4 -mt-6 h-60 w-auto overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="object-cover h-full w-full" src={card.src} alt={`Imagen donde se ve el servicio de ${card.alt} de banquetes Jorgio`} />
        </div>
        <div className="p-6 flex flex-col gap-4 justify-between">
          <div className="bg-cover bg-no-repeat w-8 h-8" style={{ backgroundImage: `url(${card.logo})` }}></div>
          <h5 className="mb-2 block font-variable text-2xl text-heading font-bold">
            {card.title}
          </h5>
          <Btn target={false} isLink={true} route={card.route} value="Mas información" />
        </div>
      </div>
    ))
  );
};

export default CardServicios;

