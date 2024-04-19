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

  const municipios = [
    "Acambay", "Acolman", "Aculco", "Almoloya de Alquisiras", "Almoloya de Juárez", "Almoloya del Río", "Amanalco", "Amatepec", "Amecameca", "Apaxco", "Atenco", "Atizapán", "Atizapán de Zaragoza", "Atlacomulco", "Atlautla", "Axapusco", "Ayapango", "Calimaya", "Capulhuac", "Chalco", "Chapa de Mota", "Chapultepec", "Chiautla", "Chicoloapan", "Chiconcuac", "Chimalhuacán", "Coacalco de Berriozábal", "Coatepec Harinas", "Cocotitlán", "Coyotepec", "Cuautitlán", "Cuautitlán Izcalli", "Donato Guerra", "Ecatepec de Morelos", "Ecatzingo", "El Oro", "Huehuetoca", "Hueypoxtla", "Huixquilucan", "Isidro Fabela", "Ixtapaluca", "Ixtapan de la Sal", "Ixtapan del Oro", "Ixtlahuaca", "Jaltenco", "Jilotepec", "Jilotzingo", "Jiquipilco", "Jocotitlán", "Joquicingo", "Juchitepec", "La Paz", "Lerma", "Luvianos", "Malinalco", "Melchor Ocampo", "Metepec", "Mexicaltzingo", "Morelos", "Naucalpan de Juárez", "Nextlalpan", "Nezahualcóyotl", "Nicolás Romero", "Nopaltepec", "Ocoyoacac", "Ocuilan", "Otumba", "Otzoloapan", "Otzolotepec", "Ozumba", "Papalotla", "Polotitlán", "Rayón", "San Antonio la Isla", "San Felipe del Progreso", "San José del Rincón", "San Martín de las Pirámides", "San Mateo Atenco", "San Simón de Guerrero", "Santo Tomás", "Soyaniquilpan de Juárez", "Sultepec", "Tecámac", "Tejupilco", "Temamatla", "Temascalapa", "Temascalcingo", "Temascaltepec", "Temoaya", "Tenancingo", "Tenango del Aire", "Tenango del Valle", "Teoloyucán", "Teotihuacán", "Tepetlaoxtoc", "Tepetlixpa", "Tepotzotlán", "Tequixquiac", "Texcaltitlán", "Texcalyacac", "Texcoco", "Tezoyuca", "Tianguistenco", "Timilpan", "Tlalmanalco", "Tlalnepantla de Baz", "Tlatlaya", "Toluca", "Tonanitla", "Tonatico", "Tultepec", "Tultitlán", "Valle de Bravo", "Valle de Chalco Solidaridad", "Villa de Allende", "Villa del Carbón", "Villa Guerrero", "Villa Victoria", "Xalatlaco", "Xonacatlán", "Zacazonapan", "Zacualpan", "Zinacantepec", "Zumpahuacán", "Zumpango"
  ]

  const alcaldias = [
    "Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Cuajimalpa de Morelos", "Coyoacán", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "La Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tláhuac", "Tlalpan", "Venustiano Carranza", "Xochimilco"
  ]

  const eventos = [
    "Boda", "Cumpleaños", "Baby Shower", "Empresarial", "Graduación", "Bautizo", "Reunion Familar", "Otro"
  ]

  return (
    <Form method="post" className="flex flex-col relative p-8 gap-4 flex-1 lg:mt-0 bg-secundario">
      <h4 className="font-variable text-heading text-2xl mb-2 font-normal">Solicita una cotización y nuestro equipo se pondrá en contacto contigo lo mas pronto posible</h4>
      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">Nombre</span>
          {data.nombre ? (
            <span className="text-red-600">{data?.nombre}</span>
          ) : null}
        </label>
        <input name="nombre" type="text" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border" />
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">Apellido</span>
          {data?.apellido ? (
            <span className="text-red-600">{data?.apellido}</span>
          ) : null}
        </label>
        <input name="apellido" type="text" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border" />
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading" >Email</span>
          {data?.email ? (
            <span className="text-red-600">{data?.email}</span>
          ) : null}
        </label>
        <input name="email" type="email" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border" />
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">Telefono de Contacto</span>
          {data?.telefono ? (
            <span className="text-red-600">{data?.telefono}</span>
          ) : null}
        </label>
        <input type="tel" name="telefono" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border" />
      </div>

      <div>
        <h5 className="font-variable text-lg font-normal text-heading mb-2">¿Donde es tu evento?</h5>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex-1">
            <label>
              <span className="font-variable text-lg  font-normal text-heading">CDMX</span>
              {data?.telefono ? (
                <span className="text-red-600">{data?.telefono}</span>
              ) : null}
            </label>
            <select className="h-[2rem] w-full font-Inter px-2 text-heading text-sm border border-gray-500 bg-primario outline-none" defaultValue={"Elige una opción"} name="municipio">
              <option className="font-Inter bg-gray-100 text-center" value={"Elige una opción"} hidden>Elige una opción</option>
              {alcaldias.map((alcaldia, index) => (
                <option className="text-dark font-Inter bg-gray-100" key={index} value={alcaldia}>{alcaldia}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>
              <span className="font-variable text-lg  font-normal text-heading">Estado de México</span>
              {data?.telefono ? (
                <span className="text-red-600">{data?.telefono}</span>
              ) : null}
            </label>
            <select className="h-[2rem] w-full font-Inter px-2 text-heading text-sm border border-gray-500 bg-primario outline-none" name="municipio" defaultValue="Elige una opción">
              <option className="font-Inter bg-gray-100 text-center" value={"Elige una opción"} hidden>Elige una opción</option>
              {municipios.map((municipio, index) => (
                <option className="text-dark font-Inter bg-gray-100" key={index} value={municipio}>{municipio}</option>
              ))}
            </select>

          </div>
        </div>
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">¿Cuantas personas contemplas para tu evento?</span>
          {data?.telefono ? (
            <span className="text-red-600">{data?.telefono}</span>
          ) : null}
        </label>
        <input type="number" name="personas" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border" />
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">¿Que tipo de evento es?</span>
          {data?.telefono ? (
            <span className="text-red-600">{data?.telefono}</span>
          ) : null}
        </label>
        <select className="h-[2rem] w-full font-In px-2 text-heading font-Inter text-sm border border-gray-500 bg-primario outline-none" defaultValue={"Elige una opción"} name="evento">
          <option className="font-Inter bg-gray-100 text-center" value={"Elige una opción"} hidden >Elige una opción</option>
          {eventos.map((evento, index) => (
            <option className="text-dark font-Inter bg-gray-100" key={index} value={evento}>{evento}</option>
          ))}
        </select>
      </div>

      <div>
        <label>
          <span className="font-variable text-lg  font-normal text-heading">Cuantanos mas acerca de tu evento</span>
          {data?.mensaje ? (
            <span className="text-red-600">{data?.mensaje}</span>
          ) : null}
        </label>
        <textarea name="mensaje" className="w-full p-2 bg-primario outline-none border border-gray-500 bg-clip-border"></textarea>
      </div>
      <Btn target={false} isLink={false} route="/" value="Enviar" />
    </Form>
  )
}

export default FormularioContacto