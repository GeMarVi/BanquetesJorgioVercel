import espadas from "../src/CardServicios/espadas-tres.webp"
import parrilla from "../src/CardServicios/parrillada1.webp"
import tacos from "../src/CardServicios/tacos.webp"
import mobiliario from "../src/CardServicios/moviliario.webp"
import meseros from "../src/CardServicios/meseros.webp"
import dj from "../src/CardServicios/DJ.webp"
import { DjIcon, EspadasIcon, MeserosIcon, MobiliarioIcon, ParrilladaIcon, TacosIcon } from '../components/IconsSvg';

export const cardsServicios = [
    { title: "Espadas Brasileñas", route: "espadas-brasilenas", alt: "Espadas brasileñas", src: espadas, logo: <EspadasIcon /> },
    { title: "Parrilladas", route: "parrilladas", alt: "Parrilladas", src: parrilla, logo: <ParrilladaIcon /> },
    { title: "Buffet de Tacos", route: "tacos", alt: "buffet de tacos", src: tacos, logo: <TacosIcon /> },
    { title: "Mobiliario", route: "mobiliario", alt: "mobiliario", src: mobiliario, logo: <MobiliarioIcon /> },
    { title: "Meseros", route: "personal", alt: "meseros", src: meseros, logo: <MeserosIcon /> },
    { title: "Audio Dj", route: "personal", alt: "Dj", src: dj, logo: <DjIcon /> }
  ];


///////////////////////////////////////////////////////////////////////////
// informacion de los clientes
import foto from "../src/perfil-social/Ari.jpeg"
import foto2 from "../src/perfil-social/albarran.jpeg"
import foto3 from "../src/perfil-social/leonel.jpeg"
import foto4 from "../src/perfil-social/lomejor.jpeg"
import foto5 from "../src/perfil-social/veronica.jpeg"
import foto6 from "../src/perfil-social/betzabeth.jpeg"

export const infoClients = [
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