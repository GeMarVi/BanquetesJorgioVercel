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
    <Form method="post" className="flex flex-col relative p-8 gap-2 flex-1 lg:mt-0 border-solid border-[1px] border-gray-500 bg-opaco">
          <div className="flexform gap-2 lg:gap-0">
            <div>
              <label>
                <span className="text-gray-200 uppercase font-open text-lg">Nombre</span>
                {data.nombre ? (
                  <span className="text-red-600">{data?.nombre}</span>
                ) : null}
              </label>
              <input name="nombre" type="text" className="input bg-opaco text-paragraph" />
            </div>
            <div>
              <label>
                <span className="text-gray-200 uppercase font-open text-lg">Apellido</span>
                {data?.apellido ? (
                  <span className="text-red-600">{data?.apellido}</span>
                ) : null}
              </label>
              <input name="apellido" type="text" className="input bg-opaco text-paragraph" />
            </div>
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-open text-lg" >Email</span>
              {data?.email ? (
                <span className="text-red-600">{data?.email}</span>
              ) : null}
            </label>
            <input name="email" type="email" className="input bg-opaco text-paragraph" />
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-open text-lg">Telefono de Contacto</span>
              {data?.telefono ? (
                <span className="text-red-600">{data?.telefono}</span>
              ) : null}
            </label>
            <input type="tel" name="telefono" className="input bg-opaco text-paragraph" />
          </div>
          <div>
            <label>
              <span className="text-gray-200 uppercase font-open text-lg">Mensaje</span>
              {data?.mensaje ? (
                <span className="text-red-600">{data?.mensaje}</span>
              ) : null}
            </label>
            <textarea name="mensaje" className="input01 bg-opaco text-paragraph"></textarea>
          </div>
       
            <Btn isLink={false} route="/" claseBefore="before:-left-[4.5rem]" claseBgBtn="" claseBgLine="" value="Enviar" />
        
        </Form>
  )
}

export default FormularioContacto