import estrellas from "~/src/estrellas.svg";

interface ComentariosProps {
    src: string;
    name: string;
    location: string;
    description: string;
  }
  
  const Comentarios: React.FC<ComentariosProps> = ({ src, name, location, description }) => {
    return (
      <figure className='flex flex-col lg:w-3/4 min-h-72 mx-auto p-10 bg-opaco border-solid border-[1px] border-gray-500'>
        <div className='flex justify-between items-center max-w-[19rem]'>
          <div className="rounded-[100%] overflow-hidden">
            <img className="w-20" src={src} alt="user-photo" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-monse text-gray-100">{name}</h4>
            <h5 className="text-gray-100 text-monse">{location}</h5>
            <img src={estrellas}  className="w-3/4 h-4" alt="estrellas de calificación" />
          </div>
        </div>
        <figcaption className='mt-4 text-white'>
          <p className="text-monse text-gray-300">{description}</p>
          <p className="italic text-monse text-center mt-4 text-gray-300">By Instagram</p>
        </figcaption>
      </figure>
    );
  }
  
  export default Comentarios;
  