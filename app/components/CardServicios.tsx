import Btn from "./Btn";

interface CardServiciosProps {
  img: string
  titulo: string
  route:string
}

const CardServicios: React.FC<CardServiciosProps> = ({ img, titulo, route }) => {
  return (
    <div className="relative mb-16 md:mb-0 mx-4 md:mx-0 flex w-auto flex-col bg-opaco border border-gray-500 bg-clip-border text-gray-700 hover:scale-105 transition-transform ease-in">
      <div className="relative mx-4 -mt-6 h-60 w-auto overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="object-cover h-full w-full" src={img} alt={`Imagen donde se ve el servicio de ${titulo} de banquetes Jorgio`} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-monse text-gray-100 text-xl font-semibold leading-snug tracking-normal uppercase antialiased">
          {titulo}
        </h5>
        {/* <p className="block font-sans text-base text-white font-light leading-relaxed text-inherit antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </p> */}
      </div>
      <div className="p-6 pt-0">
          <Btn isLink={true} route={route} claseBgBtn="" claseBgLine="" claseBefore="before:-left-[3rem]" value="Mas información"/>
      </div>
    </div>
  );
};

export default CardServicios;

