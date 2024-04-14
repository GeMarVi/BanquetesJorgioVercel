import Btn from "./Btn";

interface CardServiciosProps {
  img: string
  titulo: string
  route: string
  logo: string
}

const CardServicios: React.FC<CardServiciosProps> = ({ img, titulo, route, logo }) => {
  return (
    <div className="relative mb-16 md:mb-0 mx-4 md:mx-0 flex w-auto flex-col border border-gray-500 bg-clip-border text-gray-700">
      <div className="relative mx-4 -mt-6 h-60 w-auto overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img className="object-cover h-full w-full" src={img} alt={`Imagen donde se ve el servicio de ${titulo} de banquetes Jorgio`} />
      </div>
      <div className="p-6 flex flex-col gap-4 justify-between">
        <div className="bg-cover bg-no-repeat w-8 h-8" style={{ backgroundImage: `url(${logo})` }}></div>
        <h5 className="mb-2 block font-title text-2xl text-gray-100 font-extrabold">
          {titulo}
        </h5>
        <Btn isLink={true} route={route} value="Mas información" />
      </div>
    </div>
  );
};

export default CardServicios;

