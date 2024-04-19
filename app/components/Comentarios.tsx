import estrellas from "../src/estrellas.svg";
import { FacebookIcon } from "../components/IconsSvg"

interface ComentariosProps {
  src: string;
  name: string;
  location: string;
  description: string;
}

const Comentarios: React.FC<ComentariosProps> = ({ src, name, location, description }) => {
  return (
    <div className="w-[95vw] md:w-[30rem] md:h-[20rem] flex-shrink-0 px-2">
      <figure className='flex w-full h-full relative flex-col justify-start gap-2 p-8 rounded-lg bg-secundario'>
        <div className='flex items-center gap-6 max-w-[19rem]'>
          <div className="rounded-[100%] overflow-hidden">
            <img className="w-12 lg:w-20" src={src} alt={`foto del perfil social de ${name}`} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-lg w-max text-title text-heading">{name}</h4>
            <h5 className="text-heading">{location}</h5>
            <img src={estrellas} className="w-28 h-4" alt="estrellas de calificación" />
          </div>
        </div>
        <figcaption className='mt-4 text-heading'>
          <p className="text-title text-lg font-normal text-heading">{description}</p>
        </figcaption>
        <div className="absolute right-5 top-5 w-7 lg:w-7 h-7 lg:h-7"><FacebookIcon/></div>
      </figure>
    </div>
  );
}

export default Comentarios;
