import { useActionData } from "@remix-run/react";
import { json, MetaFunction, ActionFunctionArgs } from "@vercel/remix";

import espadas from "../src/Espadas4.webp"
import parrilla from "../src/parrillada1.webp"
import tacos from "../src/tacos.webp"
import moviliario from "../src/moviliario.webp"
import meseros from "../src/meseros.webp"
import dj from "../src/DJ.webp"

import AgendaTuCita from "../components/AgendaTuCita"
import Blog from "../components/Blog"
import CardServicios from "../components/CardServicios"
import SobreNosotros from "../components/SobreNosotros";

import sendEmail from "../utils/mailer.server";

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
      <main className="max-w-6xl mx-auto bg-azulOscuro">
        <section className="px-2 lg:px-8 pt-20">
          <h2 className="mb-24 text-white text-center uppercase text-3xl font-open tracking-wider">Nuestros servicios</h2>
          <div className="md:grid gap-y-12 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <CardServicios route="/espadas-brasilenas" img={espadas} titulo={"Espadas brasileñas"} />
            <CardServicios route="/parrilladas" img={parrilla} titulo={"Parrilladas"} />
            <CardServicios route="/personal" img={meseros} titulo={"Meseros y bartender"} />
            <CardServicios route="/tacos" img={tacos} titulo={"Bufet de tacos"} />
            <CardServicios route="/mobiliario" img={moviliario} titulo={"Renta de moviliario"} />
            <CardServicios route="/personal" img={dj} titulo={"Audio Dj"} />
          </div>
        </section>
        <SobreNosotros />
        <Blog />
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
