import estrellas from "../src/estrellas.svg";
import faceBook from "../src/Facebook.svg"

interface ComentariosProps {
  src: string;
  name: string;
  location: string;
  description: string;
}

const Comentarios: React.FC<ComentariosProps> = ({ src, name, location, description }) => {
  return (
    <figure className='flex mb-2 lg:mb-0 relative snap-center w-[95vw] shrink-0 flex-col justify-start gap-2 md:w-[30rem] md:h-[20rem] mx-auto p-8 rounded-lg bg-secundario'>
      <div className='flex items-center gap-6 max-w-[19rem]'>
        <div className="rounded-[100%] overflow-hidden">
          <img className="w-20" src={src} alt="user-photo" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-lg w-max text-title text-heading">{name}</h4>
          <h5 className="text-heading text-monse">{location}</h5>
          <img src={estrellas} className="w-28 h-4" alt="estrellas de calificación" />
        </div>
      </div>
      <figcaption className='mt-4 text-heading'>
        <p className="text-title text-lg font-normal text-heading">{description}</p>
      </figcaption>
      <div style={{ backgroundImage: `url(${faceBook})` }} className="absolute right-4 top-4 bg-center bg-no-repeat bg-contain w-8 h-8"></div>
    </figure>
  );
}

export default Comentarios;
