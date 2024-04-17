import { useActionData } from "@remix-run/react";
import type { ActionFunctionArgs } from "@vercel/remix";
import { json, MetaFunction } from "@vercel/remix";

import AgendaTuCita from "../components/AgendaTuCita"
import Blog from "../components/Blog"
import CardServicios from "../components/CardServicios"
import SobreNosotros from "../components/SobreNosotros";

import sendEmail from "../utils/mailer.server";
import Video from "~/components/Video";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const nombre = String(formData.get("nombre"));
  const apellido = String(formData.get("apellido"));
  const email = String(formData.get("email"));
  const telefono = String(formData.get("telefono"));
  const mensaje = String(formData.get("mensaje"));

  const errors: { nombre?:string; apellido?:string; email?:string; telefono?:string; mensaje?:string } = {};
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const phoneRegex = /^\d{10}$/;

  if (nombre.trim() === "") {
    errors.nombre = " El campo no puede estar vacío";
  }
  if (apellido.trim() === "") {
    errors.apellido = " El campo no puede estar vacío";
  }
  if (email.trim() === "") {
    errors.email = " El campo no puede estar vacío";
  }
  if (!emailRegex.test(email)) {
    errors.email = " El campo debe contener un email valido";
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

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }else{
    sendEmail(nombre, apellido, email, telefono, mensaje); 
    return null
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Jorgio Espadas Brasileñas y parrilladas" },
    { name: "description", content: "Bienvenido al mejor servicio de buffet de cortes de carne a domicilio" },
  ];
};

export default function Index() {

  const actionData = useActionData<typeof action>();

  return (
    <>
      <main className="bg-transparent">
        <SobreNosotros />
        <section className="px-2 lg:px-0 pt-20 max-w-6xl mx-auto">
          <h2 className="mb-24 text-center text-heading text-5xl font-clash">Conoce todos los servicios que ofrecemos</h2>
          <div className="md:grid gap-y-12 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <CardServicios />
          </div>
        </section>
        <Blog />
        <Video />
        <AgendaTuCita 
            nombre={actionData?.errors.nombre} 
            apellido={actionData?.errors.apellido} 
            email={actionData?.errors.email} 
            telefono={actionData?.errors.telefono} 
            mensaje={actionData?.errors.mensaje}
        />
      </main>
    </>
  );
}
