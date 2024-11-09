import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import espadas from "../src/espadas-fondo-video.webp"

const Video = () => {
   return (
      <LiteYouTubeEmbed
      id="Guyu8PcnnuE"
      title="Video que describe nuestros servicios"
      aspectHeight={14}
      thumbnail={espadas}
  />
   );
};

export default Video;
