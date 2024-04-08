import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Comentarios from "./Comentarios"
import foto from "../src/perfil.jpeg"

const Blog = () => {

    const cards = [
        { id: 1, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste? Cupiditate cumque, vitae et similique minima, facilis soluta harum asperiores accusantium, doloribus aspernatur" },
        { id: 2, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste? Cupiditate cumque, vitae et similique minima, facilis soluta harum" },
        { id: 3, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste? Cupiditate cumque, vitae et similique minima, facilis soluta harum asperiores" },
        { id: 4, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste? Cupiditate cumque, vitae" },
        { id: 5, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste?" },
        { id: 6, name: "Dani Borraz", location: "Ciudad Satelite CDMX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque amet iste? Cupiditate cumque, vitae et similique minima, facilis soluta harum asperiores accusantium, doloribus" },
    ]

    return (

        <section className="pt-[8.5rem] lg:pt-[8rem] mb-[4.5rem]">
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider">Testimonios de nuestros Clientes</h3>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
               modules={[Autoplay, Pagination, Navigation]}
                >
                {cards.map(card => (
                    <SwiperSlide key={card.id}>
                        <Comentarios key={card.id} src={foto} name={card.name} location={card.location} description={card.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Blog