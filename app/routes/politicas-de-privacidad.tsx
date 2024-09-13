import { Link, Navigate } from "@remix-run/react";

const PrivacyPolicy = () => {


  return (
    <div className="max-w-6xl mx-auto text-gray-100 py-10">
      <Link to={"/"} className="text-blue-600">Regresar al Inicio</Link>
      <h1 className="text-3xl my-4">Políticas de Privacidad</h1>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">1. Información que Recopilamos</h2>
        <p>Al interactuar con nosotros a través de nuestros formularios, página web o redes sociales, podemos recopilar la siguiente información personal:</p>
        <ul className="list-disc my-2">
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Detalles del evento (ubicación, fecha, cantidad de personas)</li>
          <li>Información de pago (para procesar depósitos, transferencias o pagos a meses sin intereses)</li>
          <li>Facturación, si se requiere</li>
        </ul>
        <p>Esta información nos permite ofrecerte una atención personalizada, brindarte cotizaciones adecuadas y gestionar los pagos correspondientes.</p>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">2. Uso de la Información</h2>
        <p>La información que recopilamos se utiliza para:</p>
        <ul>
          <li>Proporcionar cotizaciones personalizadas según los servicios solicitados (espadas brasileñas, parrilladas, buffet de tacos, renta de mobiliario, servicio de meseros y barman).</li>
          <li>Organizar y gestionar los eventos solicitados, con detalles como cantidad de invitados, ubicación y servicios específicos.</li>
          <li>Procesar pagos mediante las diversas opciones que ofrecemos: depósito, transferencia, efectivo, y pagos a meses sin intereses.</li>
          <li>Emitir facturas en caso de que el cliente lo solicite.</li>
          <li>Mantener contacto y enviar actualizaciones relacionadas con los eventos o servicios solicitados.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">3. Protección de la Información</h2>
        <p>Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad para garantizar la confidencialidad de los datos proporcionados y evitar el acceso no autorizado, divulgación o alteración de la información.</p>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">4. Compartición de la Información</h2>
        <p>Tu información personal no será compartida con terceros, salvo en los siguientes casos:</p>
        <ul>
          <li>Cuando sea necesario para cumplir con obligaciones legales (como la emisión de facturas).</li>
          <li>Para procesar pagos a través de las entidades bancarias y plataformas que usamos para pagos a meses sin intereses.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">5. Opciones de Pago y Facturación</h2>
        <p>Aceptamos pagos por depósito, transferencia y efectivo, así como pagos a meses sin intereses. La información de pago es utilizada únicamente para procesar las transacciones solicitadas. Si se requiere factura, la información proporcionada para facturación se utilizará exclusivamente para este propósito.</p>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">6. Cambios en los Precios y Paquetes</h2>
        <p>Nuestros precios están sujetos a cambios según la cantidad de personas, ubicación del evento y fecha solicitada. Nuestros paquetes tienen una vigencia de 2 meses a partir de la fecha de cotización. Si deseas actualizar la cotización pasada esta vigencia, deberás completar un nuevo formulario.</p>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">7. Derechos de los Usuarios</h2>
        <p>Tienes el derecho de solicitar acceso, rectificación o eliminación de tu información personal en cualquier momento. Para cualquier consulta o solicitud relacionada con tus datos personales, puedes contactarnos a través de los medios proporcionados en nuestra página.</p>
      </section>
      
      <section>
        <h2 className="text-xl my-4 text-gradient">8. Consentimiento</h2>
        <p>Al proporcionar tu información personal a través de nuestros formularios o redes sociales, aceptas esta política de privacidad y el uso de tus datos según lo descrito.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
