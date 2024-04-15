import { InstagramEmbed } from 'react-social-media-embed';

const Video: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center px-2 lg:px-0 mb-16 mx-auto lg:w-[24.6rem] h-[42rem] lg:h-[42rem]'>
        <h3 className='text-white text-center uppercase text-3xl font-open tracking-wider mb-12'>¿Aun no nos conoces?</h3>
        <InstagramEmbed url="https://www.instagram.com/p/C3sNGCHvywO/" width={"100%"} height={"100%"} title='Jorgio Espadas Brasileñas y Parrilladas' linkText='Instagram de Jorgio'/>
    </section>
  );
}

export default Video;

// data-instgrm-permalink="https://www.instagram.com/reel/C3sNGCHvywO/?utm_source=ig_embed&amp;utm_campaign=loading" 