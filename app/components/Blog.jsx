import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import foto from "../src/perfil-social/Ari.jpeg"
import foto2 from "../src/perfil-social/albarran.jpeg"
import foto3 from "../src/perfil-social/leonel.jpeg"
import foto4 from "../src/perfil-social/lomejor.jpeg"
import foto5 from "../src/perfil-social/veronica.jpeg"
import foto6 from "../src/perfil-social/betzabeth.jpeg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Comentarios from "./Comentarios"

const Blog = () => {
    const cards = [
        { 
            id: 1, 
            name: "Ari Luc", 
            location: "Ciudad de México", 
            description: "Exelente servicio, los alimentos de la mejor calidad", 
            src: foto,  
            social: "Facebook"
        },
        { 
            id: 2, 
            name: "Albarran Arias", 
            location: "Ciudad de México", 
            description: "Que buen trabajo con Meseros Deleon cuando gustes un servicio no duden en contratar a Meseros Deleon", 
            src: foto2,  
            social: "Facebook"
        },
        { 
            id: 3, 
            name: "Leonel Perea Hernandéz", 
            location: "Ciudad de México", 
            description: "Muchas gracias a todo el personal de Banquetes Jorgio Alquiler y espadas brasileñas el mejor trato de todo el personal, gente muy capacitada y cordial 100% lo mejor para cualquier tipo de evento sin duda fue la mejor opcion para los 15 de mi niña muchas gracias", 
            src: foto3,  
            social: "Facebook"
        },
        { 
            id: 4, 
            name: "Lomejorpara Suempresa", 
            location: "Ciudad de México", 
            description: "Deleciosos! Todos unos Profesionales", 
            src: foto4,  
            social: "Facebook"
        },
        { 
            id: 5, 
            name: "Veronica Uribe", 
            location: "Ciudad de México", 
            description: "Todo Exquisito!!", 
            src: foto5,  
            social: "Facebook"
        },
        { 
            id: 6, 
            name: "Betzabet Fernandez", 
            location: "Ciudad de México", 
            description: "Gracias por éxelente servicio que me brindaron. Recomiendo ampliamente el servicio y la atención que me brindaron, en todo momento. Buen precio, exelente calidad, puntuales y todo lo que acordamos lo cumplieron. En verdad se ganaron 5 estrellas Muchas Felicidades!!!", 
            src: foto6,  
            social: "Facebook"
        },
    ];
    
    return (

        <section className="pt-[8.5rem] lg:pt-[8rem] mb-[4.5rem] section-blog">
            <h3 className="text-white text-center uppercase text-3xl font-open tracking-wider">Testimonios de nuestros Clientes</h3>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               loop={true}
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
                        <Comentarios key={card.id} src={card.src} name={card.name} location={card.location} social={card.social} description={card.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Blog