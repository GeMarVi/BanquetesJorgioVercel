import Comentarios from './Comentarios';
import { HeadingVistas } from "./HeadingVistas"
import { infoClients } from "../utils/staticInfo"
import { NextArrow, PrevArrow } from "../components/IconsSvg"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion"

const variants = {
    initial: (direction: number) => {
        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        };
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 },
        },
    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? -200 : 200,
            opacity: 0,
        };
    },
};


const Testimoniales = () => {
    const comentarioRef = useRef(null)
    const isInView = useInView(comentarioRef, { once: true })

    const [direction, setDirection] = useState(1);
    const [index, setIndex] = useState(0);

    const nextStep = () => {
        setDirection(1);
        if (index === infoClients.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevStep = () => {
        setDirection(-1);
        if (index === 0) {
            setIndex(infoClients.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    useEffect(() => {

        const intervalId = setInterval(() => {
            nextStep();
        }, 6000);

        return () => {
            clearInterval(intervalId);
        };
    }, [index])

    return (
        <section className="pt-32 lg:pt-40 overflow-hidden lg:overflow-visible">
            <HeadingVistas text="Testimonios de nuestros Clientes" initial="scale(0.5)" whileInView="scale(1)" />

            <div ref={comentarioRef}  style={{
                     transform: isInView ? "translateX(0)" : "translateX(-200px)",
                     opacity: isInView ? 1 : 0,
                   }}     
                className="w-[95vw] md:w-[30rem] transition-transform-opacity transition-custom-cubic duration-600 delay-300 mx-auto relative mt-24">
                <div className='overflow-hidden'>
                    <motion.div
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        key={infoClients[index].src}
                        custom={direction}
                        className="w-full h-full"
                    >
                        <Comentarios key={infoClients[index].id} src={infoClients[index].src} name={infoClients[index].name} location={infoClients[index].location} description={infoClients[index].description} />
                    </motion.div>
                </div>
                <button className='absolute top-1/2 -translateY-1/2 right-1 md:-right-12 w-8 lg:w-10 lg:h-10' onClick={nextStep}>
                    <NextArrow />
                </button>
                <button className='absolute top-1/2 -translateY-1/2 left-1 md:-left-12 w-8 lg:w-10 lg:h-10' onClick={prevStep}>
                    <PrevArrow />
                </button>
            </div>

        </section>
    )
}

export default Testimoniales
