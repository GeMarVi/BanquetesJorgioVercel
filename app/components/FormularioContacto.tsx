import { Form } from "@remix-run/react";
import Btn from "./Btn";
import { municipios, alcaldias, eventos } from "../utils/staticInfo";
import { useEffect, useState, useRef } from "react";
import { Close, Warning, Checked } from "./IconsSvg";

type prop = {
   data: data;
};

type data = {
   nombre?: string;
   apellido?: string;
   email?: string;
   telefono?: string;
   mensaje?: string;
   lugar?: string;
   personas?: string;
   evento?: string;
   fecha?: string;
   error?: string;
   succes?: string;
};

const FormularioContacto: React.FC<prop> = ({ data }) => {

   const { nombre, apellido, email, telefono, mensaje, lugar, personas, evento, fecha, error, succes, } = data;

   const dialogRef = useRef<HTMLDialogElement>(null);
   const formRef = useRef<HTMLFormElement>(null);

   const [place, setPlace] = useState(""); //Para validar el input lugar
   const [spinner, setSpinner] = useState(false);

   useEffect(() => {
    // Verificar si se ha recibido un mensaje de exito o de error y borrar el spinner
      if (error || succes ) {
         dialogRef.current?.showModal();
         setSpinner(false);
      }
      if(succes){
         formRef.current?.reset();
      }
   }, [error, succes])

   useEffect(() => {
      if ([nombre,apellido,email,telefono,mensaje,lugar,personas,evento,fecha].some(value => value?.trim() !== "")) {
         setSpinner(false);
      }
   }, [data]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlace(e.target.id);
   };
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      setSpinner(true);
   };
   const handleClose = () => {
      dialogRef.current?.close();
      data.succes = undefined;
      data.error = undefined;
   }

   return (
      <Form
         method="post"
         noValidate
         ref={formRef}
         onSubmit={handleSubmit}
         className="flex flex-col relative p-8 gap-4 lg:mt-0 bg-secundario"
      >
         <h4 className="font-variable text-heading text-2xl mb-2 font-normal">
            Solicita una cotización y nuestro equipo se pondrá en contacto
            contigo lo mas pronto posible
         </h4>
         <div>
            <label htmlFor="nombre">
               <span className="font-variable text-lg  font-normal text-heading">
                  Nombre
               </span>
               {data.nombre ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.nombre}
                  </span>
               ) : null}
            </label>
            <input
               name="nombre"
               id="nombre"
               type="text"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <label htmlFor="apellido">
               <span className="font-variable text-lg  font-normal text-heading">
                  Apellido
               </span>
               {data?.apellido ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.apellido}
                  </span>
               ) : null}
            </label>
            <input
               name="apellido"
               id="apellido"
               type="text"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <label htmlFor="email">
               <span className="font-variable text-lg  font-normal text-heading">
                  Email
               </span>
               {data?.email ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.email}
                  </span>
               ) : null}
            </label>
            <input
               name="email"
               id="email"
               type="email"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <label htmlFor="telefono">
               <span className="font-variable text-lg  font-normal text-heading">
                  Telefono de Contacto
               </span>
               {data?.telefono ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.telefono}
                  </span>
               ) : null}
            </label>
            <input
               id="telefono"
               type="tel"
               name="telefono"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <h5 className="font-variable text-lg font-normal text-heading mb-2">
               ¿Donde es tu evento?{" "}
               {data?.lugar ? (
                  <span className="text-red-500 text-sm font-Inter">
                     {data.lugar}
                  </span>
               ) : null}
            </h5>
            <div className="flex justify-between gap-12 lg:gap-2 items-center">
               <div className="flex gap-4 justify-between items-center">
                  <label
                     htmlFor="cdmx"
                     className="text-gray-100 font-variable text-lg"
                  >
                     Ciudad de México
                  </label>
                  <input
                     id="cdmx"
                     name="cdmx"
                     className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
                     type="checkbox"
                     onChange={handleChange}
                     checked={place === "cdmx"}
                  />
               </div>

               <div className="flex gap-4 justify-between items-center">
                  <label
                     htmlFor="edomex-label"
                     className="text-gray-100 font-variable text-lg"
                  >
                     Estado de México
                  </label>
                  <input
                     id="edomex-label"
                     name="edomex-label"
                     className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
                     type="checkbox"
                     onChange={handleChange}
                     checked={place === "edomex-label"}
                  />
               </div>
            </div>
            {place === "cdmx" ? (
               <div className="flex-1">
                  <label htmlFor="alcaldias"></label>
                  <select
                     id="alcaldias"
                     className="h-[2rem] w-full font-Inter px-2 text-heading text-sm border border-gray-500 bg-primario outline-none"
                     defaultValue={"Elige una opción"}
                     name="alcaldia"
                  >
                     <option
                        className="font-Inter bg-gray-100 text-center"
                        value={"Elige una opción"}
                        hidden
                     >
                        Elige una Alcaldía
                     </option>
                     {alcaldias.map((alcaldia, index) => (
                        <option
                           className="text-dark font-Inter bg-gray-100"
                           key={index}
                           value={alcaldia}
                        >
                           {alcaldia}
                        </option>
                     ))}
                  </select>
               </div>
            ) : place === "edomex-label" ? (
               <div className="flex-1">
                  <label htmlFor="edomex"></label>
                  <select
                     className="h-[2rem] w-full font-Inter px-2 text-heading text-sm border border-gray-500 bg-primario outline-none"
                     id="edomex"
                     name="edomex"
                     defaultValue="Elige una opción"
                  >
                     <option
                        className="font-Inter bg-gray-100 text-center"
                        value={"Elige una opción"}
                        hidden
                     >
                        Elige un municipio
                     </option>
                     {municipios.map((municipio, index) => (
                        <option
                           className="text-dark font-Inter bg-gray-100"
                           key={index}
                           value={municipio}
                        >
                           {municipio}
                        </option>
                     ))}
                  </select>
               </div>
            ) : null}
         </div>

         <div>
            <label htmlFor="numero-personas">
               <span className="font-variable text-lg  font-normal text-heading">
                  ¿Cuantas personas contemplas para tu evento?
               </span>
               {data?.personas ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.personas}
                  </span>
               ) : null}
            </label>
            <input
               type="number"
               id="numero-personas"
               name="numero-personas"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <label htmlFor="fecha">
               <span className="font-variable text-lg  font-normal text-heading">
                  Fecha del evento
               </span>
               {data?.fecha ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.fecha}
                  </span>
               ) : null}
            </label>
            <input
               type="date"
               id="fecha"
               name="fecha"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            />
         </div>

         <div>
            <label htmlFor="evento">
               <span className="font-variable text-lg  font-normal text-heading">
                  ¿Que tipo de evento es?
               </span>
               {data?.evento ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.evento}
                  </span>
               ) : null}
            </label>
            <select
               className="h-[2rem] w-full font-In px-2 text-heading font-Inter text-sm border border-gray-500 bg-primario outline-none"
               defaultValue={"Elige una opción"}
               name="evento"
               id="evento"
            >
               <option
                  className="font-Inter bg-gray-100 text-center"
                  value={"Elige una opción"}
                  hidden
               >
                  Elige una opción
               </option>
               {eventos.map((evento, index) => (
                  <option
                     className="text-dark font-Inter bg-gray-100"
                     key={index}
                     value={evento}
                  >
                     {evento}
                  </option>
               ))}
            </select>
         </div>

         <div>
            <label htmlFor="mensaje">
               <span className="font-variable text-lg  font-normal text-heading">
                  Cuentanos mas acerca de tu evento
               </span>
               {data?.mensaje ? (
                  <span className="text-red-500 font-Inter text-sm">
                     {data?.mensaje}
                  </span>
               ) : null}
            </label>
            <textarea
               name="mensaje"
               id="mensaje"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border text-gray-100"
            ></textarea>
         </div>
         <div className="flex gap-6">
            <Btn target={false} isLink={false} route="/" value="Enviar" />
            {spinner ? (<div className={`flex-col gap-4 w-max flex items-center justify-center`}>
               <div className="w-10 h-10 border-4 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">

               </div>
            </div>) : null}
            <dialog className="bg-gray-700 overflow-visible text-center w-[90vw] md:w-[30rem] p-8 rounded-lg" ref={dialogRef}>
               {error ? <div className="flex flex-col items-center gap-3"><p className="font-variable text-gray-100 text-4xl font-normal">{error}</p><Warning/></div> : null}
               {succes ?<div className="flex flex-col items-center gap-3"><p className="font-variable text-green-500 text-4xl font-normal">{succes}</p><Checked/></div> : null}
               <div onClick={handleClose} className="absolute z-[5000] -top-4 w-10 h-10 -right-4"><Close /></div>
            </dialog>
         </div>
      </Form>
   );
};

export default FormularioContacto;
