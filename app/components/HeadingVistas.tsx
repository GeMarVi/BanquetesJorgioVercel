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
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
         }}
         ref={headingRef}
         className="text-center text-gradient text-5xl lg:text-7xl font-clash"
      >
         {text}
      </h3>
   );
};
