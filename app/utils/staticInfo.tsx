import espadas from "../src/espadas-tres.webp"
import parrilla from "~/src/parrillada1.webp"
import tacos from "../src/tacos.webp"
import mobiliario from "../src/moviliario.webp"
import meseros from "../src/meseros.webp"
import dj from "../src/DJ.webp"
import { DjIcon, EspadasIcon, MeserosIcon, MobiliarioIcon, ParrilladaIcon, TacosIcon } from '../components/IconsSvg';

export const cardsServicios = [
    { title: "Espadas Brasileñas", route: "espadas-brasilenas", alt: "Espadas brasileñas", src: espadas, logo: <EspadasIcon /> },
    { title: "Parrilladas", route: "parrilladas", alt: "Parrilladas", src: parrilla, logo: <ParrilladaIcon /> },
    { title: "Buffet de Tacos", route: "tacos", alt: "buffet de tacos", src: tacos, logo: <TacosIcon /> },
    { title: "Mobiliario", route: "mobiliario", alt: "mobiliario", src: mobiliario, logo: <MobiliarioIcon /> },
    { title: "Meseros", route: "personal", alt: "meseros", src: meseros, logo: <MeserosIcon /> },
    { title: "Audio Dj", route: "personal", alt: "Dj", src: dj, logo: <DjIcon /> }
  ];


