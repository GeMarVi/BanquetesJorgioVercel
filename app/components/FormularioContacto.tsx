import { Form } from "@remix-run/react";
import Btn from "./Btn";

type ActionData = {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    mensaje?: string;
  };

const FormularioContacto = (data: ActionData) => {
 
  return (
    <Form method="post" className="flex flex-col relative p-8 gap-2 flex-1 lg:mt-0 border border-gray-500 bg-clip-border">
          <div className="flexform gap-2 lg:gap-0">
            <div>
              <label>
                <span className="text-gray-200 uppercase font-title text-lg font-light">Nombre</span>
                {data.nombre ? (
                  <span className="text-red-600">{data?.nombre}</span>
                ) : null}
              </label>
              <input name="nombre" type="text" className="input bg-transparent text-paragraph border border-gray-500 bg-clip-border" />
            </div>
            <div>
              <label>
                <span className="text-gray-200 uppercase font-title text-lg font-light">Apellido</span>
                {data?.apellido ? (
                  <span className="text-red-600">{data?.apellido}</span>
                ) : null}
              </label>
              <input name="apellido" type="text" className="input bg-transparent text-paragraph border border-gray-500 bg-clip-border" />
            </div>
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-title text-lg font-light" >Email</span>
              {data?.email ? (
                <span className="text-red-600">{data?.email}</span>
              ) : null}
            </label>
            <input name="email" type="email" className="input bg-transparent text-paragraph border border-gray-500 bg-clip-border" />
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-title text-lg font-light">Telefono de Contacto</span>
              {data?.telefono ? (
                <span className="text-red-600">{data?.telefono}</span>
              ) : null}
            </label>
            <input type="tel" name="telefono" className="input bg-transparent text-paragraph border border-gray-500 bg-clip-border" />
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-title text-lg font-light">Mensaje</span>
              {data?.mensaje ? (
                <span className="text-red-600">{data?.mensaje}</span>
              ) : null}
            </label>
            <textarea name="mensaje" className="input01 bg-transparent text-paragraph border border-gray-500 bg-clip-border"></textarea>
          </div>
       
            <Btn target={false} isLink={false} route="/" value="Enviar" />
        
        </Form>
  )
}

export default FormularioContacto