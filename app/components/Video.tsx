import { InstagramEmbed } from 'react-social-media-embed';
import Btn from './Btn';

const Video: React.FC = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center px-2 lg:px-0 gap-8 lg:w-[24.6rem] h-[42rem] lg:h-[42rem]'>
        <h3 className='text-white text-center uppercase text-3xl font-open tracking-wider mb-12'>¿Aun no nos conoces?</h3>
        <div className=''>
          <InstagramEmbed url="https://www.instagram.com/p/C3sNGCHvywO/" width={"100%"} height={"100%"} />
        </div>
        {/* <div>
          <Btn isLink={false} value='Síguenos' route='#' target={true} />
        </div> */}
      </section>

    </>
  );
}

export default Video;
