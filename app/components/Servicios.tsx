import Btn from "./Btn";

import { HeadingVistas } from "./HeadingVistas";
import { cardsServicios } from "../utils/staticInfo";
import CardServicios from "./CardServicios";

const Servicios = () => {
  

   return (
      <section className="px-2 lg:px-0 pt-32 lg:pt-40 max-w-6xl mx-auto overflow-hidden lg:overflow-visible">
         <HeadingVistas
            text="Conoce todos los servicios que ofrecemos"
            initial="translateX(200px)"
            whileInView="translateX(0)"
         />

         <div className="flex flex-col gap-6 justify-between md:grid gap-y-12 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mt-24">
            {cardsServicios.map((card, index) => (
                <CardServicios key={index} title={card.title} src={card.src} route={card.route} alt={card.alt} logo={card.logo}/>
            ))}
         </div>
      </section>
   );
};

export default Servicios;
