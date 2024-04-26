import { useActionData } from "@remix-run/react";
import type { ActionFunctionArgs } from "@vercel/remix";
import { json, MetaFunction } from "@vercel/remix";

import AgendaTuCita from "../components/AgendaTuCita";
import Testimoniales from "../components/Testimoniales";
import Servicios from "../components/Servicios";
import SobreNosotros from "../components/SobreNosotros";
import { alcaldias, municipios, eventos } from "../utils/staticInfo";

import sendEmail from "../utils/mailer.server";
import AunNoNosConoces from "../components/AunNoNosConoces";

export async function action({ request }: ActionFunctionArgs) {
   const formData = await request.formData();
   const nombre = String(formData.get("nombre"));
   const apellido = String(formData.get("apellido"));
   const email = String(formData.get("email"));
   const telefono = String(formData.get("telefono"));
   const mensaje = String(formData.get("mensaje"));
   const alcaldia = String(formData.get("alcaldia"));
   const fecha = String(formData.get("fecha"));
   const edomex = String(formData.get("edomex"));
   const evento = String(formData.get("evento"));
   const numeroPersonas = String(formData.get("numero-personas"));

   const response: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      mensaje?: string;
      lugar?: string;
      evento?: string;
      personas?: string;
      fecha?: string;
      error?: string;
      succes?: string;
   } = {};

   const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   const phoneRegex = /^\d{10}$/;

   if (nombre.trim() === "") response.nombre = " El campo no puede ir vacío";

   if (apellido.trim() === "")
      response.apellido = " El campo no puede ir vacío";

   if (!emailRegex.test(email)) response.email = " Email no valido";

   if (email.trim() === "") response.email = " El campo no puede ir vacío";

   if (telefono.trim() === "")
      response.telefono = " El campo no puede estar vacío";

   if (!phoneRegex.test(telefono))
      response.telefono = " El telefono debe contener 10 digitos";

   if (mensaje.trim() === "") response.mensaje = " El campo no puede ir vacío";

   if (!alcaldias.includes(alcaldia) && !municipios.includes(edomex))
      response.lugar = "Selecciona una opción";

   if (!eventos.includes(evento)) response.evento = " Selecciona una opción";

   if (fecha.trim() !== "") {
      const currentDate = new Date();
      const selected = new Date(fecha);
      if (selected <= currentDate) {
         response.fecha =
            "La fecha seleccionada debe ser mayor que la fecha actual";
      }
   }

   if (fecha.trim() === "") {
      response.fecha = "Porfavor selecciona una fecha";
   }

   if (numeroPersonas.trim() === "")
      response.personas = " El campo no puede ir vacío";

   if (Number(numeroPersonas) > 100000)
      response.personas = " cantidad no válida";

   if (Object.keys(response).length > 0) {
      return json({ response });
   }

   const result = await sendEmail(
      nombre,
      apellido,
      email,
      telefono,
      mensaje,
      alcaldia,
      numeroPersonas,
      evento,
      fecha
   );

   if (result) {
      response.succes = "Mensaje enviado pronto nos comunicaremos contigo";
      return json({ response });
   }

   response.error =
      "Hubo un error al enviar el mensaje por favor intenta con otro medio de contacto";
   return json({ response });
}

export const meta: MetaFunction = () => {
   return [
      { title: "Jorgio Espadas Brasileñas y parrilladas" },
      {
         name: "description",
         content:
            "Bienvenido al mejor servicio de buffet de cortes de carne a domicilio",
      },
   ];
};

export default function Index() {
   const actionData = useActionData<typeof action>();

   const values = {
      nombre: actionData?.response.nombre,
      apellido: actionData?.response.apellido,
      email: actionData?.response.email,
      telefono: actionData?.response.telefono,
      mensaje: actionData?.response.mensaje,
      lugar: actionData?.response.lugar,
      personas: actionData?.response.personas,
      fecha: actionData?.response.fecha,
      evento: actionData?.response.evento,
      error: actionData?.response.error,
      succes: actionData?.response.succes,
   };
   return (
      <>
         <main className="bg-transparent">
            <SobreNosotros />
            <Servicios />
            <Testimoniales />
            <AunNoNosConoces />
            <AgendaTuCita data={values} />
         </main>
      </>
   );
}
