import { animate } from "framer-motion";

export const scrollAnimationUtils = (targetPosition:number) => {
    animate(window.scrollY, targetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 4, 
        onUpdate: (latest) => window.scrollTo(0, latest),
    });
}