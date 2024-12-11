import espadas from "../src/CardServicios/espadas-tres.webp"
import parrilla from "../src/CardServicios/parrillada1.webp"
import tacos from "../src/CardServicios/tacos.webp"
import mobiliario from "../src/CardServicios/moviliario.webp"
import meseros from "../src/CardServicios/meseros.webp"
import dj from "../src/CardServicios/DJ.webp"
import { DjIcon, EspadasIcon, MeserosIcon, MobiliarioIcon, ParrilladaIcon, TacosIcon } from '../components/IconsSvg';

import picanha from "~/src/blog/picanha-blog.webp"
import mignon from "~/src/blog/mignon-blog.webp"
import ensalada from "~/src/blog/ensalada-blog.webp"
import puntas from "~/src/blog/puntas-blog.webp"
import costilla from "~/src/blog/costilla-blog.webp"
import chorizo from "~/src/blog/chorizo-blog.webp"
import espadasBlog from "~/src/blog/espadas.webp"

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

///////////////////////////////////////////////////////////
// Valores del formulario de contacto para los select
export const municipios = [
    "Acambay",
    "Acolman",
    "Aculco",
    "Almoloya de Alquisiras",
    "Almoloya de Juárez",
    "Almoloya del Río",
    "Amanalco",
    "Amatepec",
    "Amecameca",
    "Apaxco",
    "Atenco",
    "Atizapán",
    "Atizapán de Zaragoza",
    "Atlacomulco",
    "Atlautla",
    "Axapusco",
    "Ayapango",
    "Calimaya",
    "Capulhuac",
    "Chalco",
    "Chapa de Mota",
    "Chapultepec",
    "Chiautla",
    "Chicoloapan",
    "Chiconcuac",
    "Chimalhuacán",
    "Coacalco de Berriozábal",
    "Coatepec Harinas",
    "Cocotitlán",
    "Coyotepec",
    "Cuautitlán",
    "Cuautitlán Izcalli",
    "Donato Guerra",
    "Ecatepec de Morelos",
    "Ecatzingo",
    "El Oro",
    "Huehuetoca",
    "Hueypoxtla",
    "Huixquilucan",
    "Isidro Fabela",
    "Ixtapaluca",
    "Ixtapan de la Sal",
    "Ixtapan del Oro",
    "Ixtlahuaca",
    "Jaltenco",
    "Jilotepec",
    "Jilotzingo",
    "Jiquipilco",
    "Jocotitlán",
    "Joquicingo",
    "Juchitepec",
    "La Paz",
    "Lerma",
    "Luvianos",
    "Malinalco",
    "Melchor Ocampo",
    "Metepec",
    "Mexicaltzingo",
    "Morelos",
    "Naucalpan de Juárez",
    "Nextlalpan",
    "Nezahualcóyotl",
    "Nicolás Romero",
    "Nopaltepec",
    "Ocoyoacac",
    "Ocuilan",
    "Otumba",
    "Otzoloapan",
    "Otzolotepec",
    "Ozumba",
    "Papalotla",
    "Polotitlán",
    "Rayón",
    "San Antonio la Isla",
    "San Felipe del Progreso",
    "San José del Rincón",
    "San Martín de las Pirámides",
    "San Mateo Atenco",
    "San Simón de Guerrero",
    "Santo Tomás",
    "Soyaniquilpan de Juárez",
    "Sultepec",
    "Tecámac",
    "Tejupilco",
    "Temamatla",
    "Temascalapa",
    "Temascalcingo",
    "Temascaltepec",
    "Temoaya",
    "Tenancingo",
    "Tenango del Aire",
    "Tenango del Valle",
    "Teoloyucán",
    "Teotihuacán",
    "Tepetlaoxtoc",
    "Tepetlixpa",
    "Tepotzotlán",
    "Tequixquiac",
    "Texcaltitlán",
    "Texcalyacac",
    "Texcoco",
    "Tezoyuca",
    "Tianguistenco",
    "Timilpan",
    "Tlalmanalco",
    "Tlalnepantla de Baz",
    "Tlatlaya",
    "Toluca",
    "Tonanitla",
    "Tonatico",
    "Tultepec",
    "Tultitlán",
    "Valle de Bravo",
    "Valle de Chalco Solidaridad",
    "Villa de Allende",
    "Villa del Carbón",
    "Villa Guerrero",
    "Villa Victoria",
    "Xalatlaco",
    "Xonacatlán",
    "Zacazonapan",
    "Zacualpan",
    "Zinacantepec",
    "Zumpahuacán",
    "Zumpango",
 ];

export const alcaldias = [
    "Álvaro Obregón",
    "Azcapotzalco",
    "Benito Juárez",
    "Cuajimalpa de Morelos",
    "Coyoacán",
    "Cuauhtémoc",
    "Gustavo A. Madero",
    "Iztacalco",
    "Iztapalapa",
    "La Magdalena Contreras",
    "Miguel Hidalgo",
    "Milpa Alta",
    "Tláhuac",
    "Tlalpan",
    "Venustiano Carranza",
    "Xochimilco",
 ];

 export const eventos = [
    "Boda",
    "Cumpleaños",
    "Baby Shower",
    "Empresarial",
    "Graduación",
    "Bautizo",
    "Reunion Familar",
    "Otro",
 ];


//  entradas de blog disponibles
export const blogPosts = [
    {
        id: 1,
        title: "¿Qué son las espadas brasileñas?",
        image: espadasBlog,
        description: "Descubre la tradición detrás de las espadas brasileñas",
        date: "25/Noviembre/2024",
        link: "/blog/espadas-brasilenas",
    },
    {
        id: 2,
        title: "¿Qué es la picaña (picanha)?",
        image: picanha,
        description: "La picaña, el corte favorito de los brasileños, explicado a detalle.",
        date: "05/Noviembre/2024",
        link: "/blog/picanha",
    },
    {
        id: 3,
        title: "El secreto de las costillas BBQ",
        image: costilla,
        description: "Aprende a preparar costillas BBQ perfectas con este secreto infalible.",
        date: "13/Noviembre/2024",
        link: "/blog/costillas-bbq",
    },
    {
        id: 4,
        title: "¿Qué es el filete miñón (mignon)?",
        image: mignon,
        description: "Conoce más sobre este corte elegante y delicioso.",
        date: "22/Noviembre/2024",
        link: "/blog/filete-mignon",
    },
    {
        id: 5,
        title: "Delicias de la parrilla: el chorizo brasileño",
        image: chorizo,
        description: "El sabor auténtico del chorizo brasileño en la parrilla.",
        date: "29/Noviembre/2024",
        link: "/blog/chorizo-brasileno",
    },
    {
        id: 6,
        title: "El mejor acompañamiento para las carnes: la ensalada dulce",
        image: ensalada,
        description: "Refresca tus platos con esta ensalada única.",
        date: "02/Diciembre/2024",
        link: "/blog/ensalada-dulce",
    },
    {
        id: 7,
        title: "Puntas de cerdo con jalea de piña y habanero",
        image: puntas,
        description: "Una explosión de sabores tropicales en tu parrilla.",
        date: "09/Diciembre/2024",
        link: "/blog/puntas-cerdo",
    },
];