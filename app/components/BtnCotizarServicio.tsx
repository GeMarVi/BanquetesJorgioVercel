import { useNavigate } from "@remix-run/react";
import Btn from "./Btn";
import { useScrollContext } from "~/context/scrollContext";
import { animate } from "framer-motion";

const BtnCotizarServicio = () => {
   const navigate = useNavigate();
   const { formRef } = useScrollContext();

   const handleClickBtn = () => {
      navigate("/");
      setTimeout(() => {
         if (formRef.current) {
            const targetPosition = formRef.current.getBoundingClientRect().top;

            animate(window.scrollY, targetPosition, {
               type: "spring",
               stiffness: 100,
               damping: 20,
               duration: 4,
               onUpdate: (latest) => window.scrollTo(0, latest),
            });
         }
      }, 1500);
   };

   return (
      <div onClick={handleClickBtn} className="flex justify-center">
         <Btn
            target={false}
            isLink={true}
            route="#"
            value="Cotiza tu servicio"
         />
      </div>
   );
};

export default BtnCotizarServicio;
