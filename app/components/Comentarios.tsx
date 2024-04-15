import estrellas from "../src/estrellas.svg";

interface ComentariosProps {
    src: string;
    name: string;
    location: string;
    description: string;
    social: string;
  }
  
  const Comentarios: React.FC<ComentariosProps> = ({ src, name, location, description, social }) => {
    return (
      <figure className='flex w-[95vw] flex-col justify-between md:w-3/4 min-h-72 mx-auto p-8 border-solid border-[1px]'>
        <div className='flex items-center gap-6 max-w-[19rem]'>
          <div className="rounded-[100%] overflow-hidden">
            <img className="w-20" src={src} alt="user-photo" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-lg text-title text-gray-100">{name}</h4>
            <h5 className="text-gray-300 text-monse">{location}</h5>
            <img src={estrellas}  className="w-28 h-4" alt="estrellas de calificación" />
          </div>
        </div>
        <figcaption className='mt-4 text-white'>
          <p className="text-title text-lg font-normal text-gray-200">{description}</p>
        </figcaption>
        <p className="italic text-title text-center mt-4 text-gray-300">Por {social}</p>
      </figure>
    );
  }
  
  export default Comentarios;
  