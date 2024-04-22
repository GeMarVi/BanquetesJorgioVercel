import Comentarios from './Comentarios';
import { HeadingVistas } from "./HeadingVistas"
import { infoClients } from "../utils/staticInfo"
import { Play, Pause } from "../components/IconsSvg"
import { useState } from 'react';

const Testimoniales = () => {

    const [active, setActive] = useState(true);

    const handlePlay = () => {
        setActive(true);
    }
    const handlePause = () => {
        setActive(false);
    }

    return (
        <section className="pt-32 lg:pt-40 overflow-hidden lg:overflow-visible">
            <HeadingVistas text="Testimonios de nuestros Clientes" initial="scale(0.5)" whileInView="scale(1)"/>
            <div className="w-screen h-auto overflow-hidden mt-24">
                <div className={`flex w-[calc(30rem*12)] animate-slideInfinityMobile md:animate-slideInfinity ${ active ? "" : "animation-pause"}`}>
                    {infoClients.map(card => (
                        <Comentarios key={card.id} src={card.src} name={card.name} location={card.location} description={card.description} />
                    ))}
                    {infoClients.map(card => (
                        <Comentarios key={card.id} src={card.src} name={card.name} location={card.location} description={card.description} />
                    ))}
                </div>
            </div>
            {active ? <button className='mx-auto block mt-6 w-12 h-12' onClick={handlePause}><Pause/></button> : <button className='mx-auto block mt-6 w-12 h-12' onClick={handlePlay}><Play/></button>}
            
        </section>
    )
}

export default Testimoniales
