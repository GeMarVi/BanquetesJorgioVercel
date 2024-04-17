import { useState, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import Btn from './Btn';

const Video: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el lado del cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Renderizar null si estamos en el lado del servidor
  }

  return (
    <>
      <section className='bg-gray-100 w-screen mx-auto py-16'>
        <div className='max-w-6xl mx-auto flex flex-col items-center justify-center px-2 lg:px-0 gap-8'>
          <h3 className='text-heading text-center text-5xl font-clash pb-4'>¿Aun no nos conoces?</h3>
          <div className='flex flex-col-reverse lg:flex-row gap-16 items-center'>
            <div className='flex-1 w-full px-2 lg:w-auto lg:px-0'>
              <InstagramEmbed url="https://www.instagram.com/p/C3sNGCHvywO/" className='' height={"450"} />
            </div>
            <div className='flex-1'>
              <p className='font-variable font-normal text-center text-3xl lg:text-4xl text-heading pb-4'>En <span className='font-bold'>Jorgio espadas brasileñas y parrilladas</span> queremos que nuestros clientes se sientan con la confianza y seguridad de estar contratando un servicio profesional y de calidad</p>
              <p className='font-variable font-normal text-center text-3xl lg:text-4xl text-heading'>Por ello te garantizamos un servicio excepcional para hacer de tu evento algo inolvidable</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;