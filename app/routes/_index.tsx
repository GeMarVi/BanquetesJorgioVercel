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
   const edomex = String(formData.get("edomex"));
   const evento = String(formData.get("evento"));
   const numeroPersonas = String(formData.get("numero-personas"));

   const errors: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      mensaje?: string;
      alcaldia?: string;
      edomex?: string;
      evento?: string;
      personas?: string;
   } = {};
   const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   const phoneRegex = /^\d{10}$/;

   if (nombre.trim() === "") {
      errors.nombre = " El campo no puede ir vacío";
   }
   if (apellido.trim() === "") {
      errors.apellido = " El campo no puede ir vacío";
   }
   if (!emailRegex.test(email)) {
      errors.email = " Email no valido";
   }
   if (email.trim() === "") {
      errors.email = " El campo no puede ir vacío";
   }
  
   if (telefono.trim() === "") {
      errors.telefono = " El campo no puede estar vacío";
   }
   if (!phoneRegex.test(telefono)) {
      errors.telefono = " El telefono debe contener 10 digitos";
   }
   if (mensaje.trim() === "") {
      errors.mensaje = " El campo no puede ir vacío";
   }

   if (!alcaldias.includes(alcaldia)) {
      errors.alcaldia = " valor invalido";
   }

   if (!municipios.includes(edomex)) {
      errors.edomex = " valor invalido";
   }

   if (!eventos.includes(evento)) {
      errors.evento = " valor invalido";
   }
   if (numeroPersonas.trim() === "") {
      errors.personas = " El campo no puede ir vacío";
   }

   if (Object.keys(errors).length > 0) {
      return json({ errors });
   } else {

      await sendEmail(nombre, apellido, email, telefono, mensaje, alcaldia, numeroPersonas, evento);
      return null;
   }
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

   return (
      <>
         <main className="bg-transparent">
            <SobreNosotros />
            <Servicios />
            <Testimoniales />
            <AunNoNosConoces />
            <AgendaTuCita
               nombre={actionData?.errors.nombre}
               apellido={actionData?.errors.apellido}
               email={actionData?.errors.email}
               telefono={actionData?.errors.telefono}
               mensaje={actionData?.errors.mensaje}
               alcaldia={actionData?.errors.alcaldia}
               edomex={actionData?.errors.edomex}
               evento={actionData?.errors.evento}
               personas={actionData?.errors.personas}
            />
         </main>
      </>
   );
}
