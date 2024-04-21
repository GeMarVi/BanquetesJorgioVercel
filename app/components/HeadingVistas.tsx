import { useInView } from "framer-motion";
import { useRef } from "react";

interface Value {
   text: string;
   initial: string;
   whileInView: string;
}

export const HeadingVistas: React.FC<Value> = ({
   text,
   initial,
   whileInView,
}) => {
   const headingRef = useRef(null);

   const isInView = useInView(headingRef, { once: true });

   return (
      <h3
         style={{
            transform: isInView ? whileInView : initial,
            opacity: isInView ? 1 : 0,
         }}
         ref={headingRef}
         className="text-center text-gradient text-5xl lg:text-7xl font-clash transition-transform-opacity transition-custom-cubic duration-600 delay-300"
      >
         {text}
      </h3>
   );
};
