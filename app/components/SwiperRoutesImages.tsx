import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

interface Image {
    title: string;
    src: string;
}

interface SwiperRoutesImagesProps {
    urls: Image[];
}

const SwiperRoutesImages: React.FC<SwiperRoutesImagesProps> = ({ urls }) => {
  return (
    <div className="flex-1 lg:h-[40rem] lg:w-1/2">
        <Swiper 
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFlip]}
        >
            {urls.map( (image, index) => (
                <SwiperSlide key={index}>
                    <img className="w-full h-full object-cover" src={image.src} alt={`Imagen donde se presenta el servício de ${image.title}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)}

export default SwiperRoutesImages