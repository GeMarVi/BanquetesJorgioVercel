import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { NextArrow, PrevArrow } from "../components/IconsSvg";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

interface Image {
   title: string;
   src: string;
}

interface SwiperRoutesImagesProps {
   urls: Image[];
}

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

const SwiperRoutesImages: React.FC<SwiperRoutesImagesProps> = ({ urls }) => {
   const [index, setIndex] = useState(0);
   const [direction, setDirection] = useState(0);
   
   const imageRef = useRef(null);
    
   const isInView = useInView(imageRef, {once: true});

   const nextStep = () => {
      setDirection(1);
      if (index === urls.length - 1) {
         setIndex(0);
      } else {
         setIndex(index + 1);
      }
   };

   const prevStep = () => {
      setDirection(-1);
      if (index === 0) {
         setIndex(urls.length - 1);
      } else {
         setIndex(index - 1);
      }
   };

   return (
      <div className="flex-1 flex lg:h-[40rem] lg:w-1/2">
         <motion.div
            ref={imageRef}
            initial={false}
            animate={
               isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative overflow-hidden h-full w-full"
         >
            <AnimatePresence initial={false} custom={direction}>
               <motion.img
                  variants={variants}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  key={urls[index].src}
                  custom={direction}
                  className="w-full h-full object-cover absolute top-0 bottom-0 object-center"
                  src={urls[index].src}
                  alt={`Imagen donde se presenta el servício de ${urls[0].title}`}
               />
            </AnimatePresence>
            <button
               onClick={nextStep}
               className="p-4 w-[4.5rem] aspect-[1] cursor-pointer absolute z-[5000] top-1/2 -translate-y-1/2 right-2"
            >
               <NextArrow />
            </button>
            <button
               onClick={prevStep}
               className="p-4 w-[4.5rem] aspect-[1] cursor-pointer absolute z-[5000] top-1/2 -translate-y-1/2 left-2"
            >
               <PrevArrow />
            </button>
         </motion.div>
      </div>
   );
};

export default SwiperRoutesImages;
