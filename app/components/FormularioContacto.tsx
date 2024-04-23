import { Form } from "@remix-run/react";
import Btn from "./Btn";
import { municipios, alcaldias, eventos } from "../utils/staticInfo"

type prop = {
   data: data
};

type data = {
   nombre?: string;
   apellido?: string;
   email?: string;
   telefono?: string;
   mensaje?: string;
   alcaldia?: string;
   edomex?: string;
   personas?: string;
   evento?: string;
};


const FormularioContacto: React.FC<prop> = ( {data} ) => {
  
   return (
      <Form
         method="post"
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
                  <span className="text-red-600">{data?.nombre}</span>
               ) : null}
            </label>
            <input
               name="nombre"
               id="nombre"
               type="text"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            />
         </div>

         <div>
            <label htmlFor="apellido">
               <span className="font-variable text-lg  font-normal text-heading">
                  Apellido
               </span>
               {data?.apellido ? (
                  <span className="text-red-600">{data?.apellido}</span>
               ) : null}
            </label>
            <input
               name="apellido"
               id="apellido"
               type="text"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            />
         </div>

         <div>
            <label htmlFor="email">
               <span className="font-variable text-lg  font-normal text-heading">
                  Email
               </span>
               {data?.email ? (
                  <span className="text-red-600">{data?.email}</span>
               ) : null}
            </label>
            <input
               name="email"
               id="email"
               type="email"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            />
         </div>

         <div>
            <label htmlFor="telefono">
               <span className="font-variable text-lg  font-normal text-heading">
                  Telefono de Contacto
               </span>
               {data?.telefono ? (
                  <span className="text-red-600">{data?.telefono}</span>
               ) : null}
            </label>
            <input
               id="telefono"
               type="tel"
               name="telefono"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            />
         </div>

         <div>
            <h5 className="font-variable text-lg font-normal text-heading mb-2">
               ¿Donde es tu evento?
            </h5>
            <div className="flex gap-2 justify-between items-center">
               <div className="flex-1">
                  <label htmlFor="alcaldias">
                     <span className="font-variable text-lg  font-normal text-heading">
                        CDMX
                     </span>
                     {data?.alcaldia ? (
                        <span className="text-red-600">{data?.alcaldia}</span>
                     ) : null}
                  </label>
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
                        Elige una opción
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
               <div className="flex-1">
                  <label htmlFor="edomex">
                     <span className="font-variable text-lg  font-normal text-heading">
                        EdoMex
                     </span>
                     {data?.edomex ? (
                        <span className="text-red-600">{data?.edomex}</span>
                     ) : null}
                  </label>
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
                        Elige una opción
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
            </div>
         </div>

         <div>
            <label htmlFor="numero-personas">
               <span className="font-variable text-lg  font-normal text-heading">
                  ¿Cuantas personas contemplas para tu evento?
               </span>
               {data?.personas ? (
                  <span className="text-red-600">{data?.personas}</span>
               ) : null}
            </label>
            <input
               type="number"
               id="numero-personas"
               name="numero-personas"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            />
         </div>

         <div>
            <label htmlFor="evento">
               <span className="font-variable text-lg  font-normal text-heading">
                  ¿Que tipo de evento es?
               </span>
               {data?.evento ? (
                  <span className="text-red-600">{data?.evento}</span>
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
                  <span className="text-red-600">{data?.mensaje}</span>
               ) : null}
            </label>
            <textarea
               name="mensaje"
               id="mensaje"
               className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"
            ></textarea>
         </div>
         <Btn target={false} isLink={false} route="/" value="Enviar" />
      </Form>
   );
};

export default FormularioContacto;
