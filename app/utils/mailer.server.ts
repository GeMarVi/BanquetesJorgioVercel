import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,

   auth: {
      user: process.env.USER,
      pass: process.env.PASS
   }
});

const sendEmail = async (name: string, lastName: string, email: string, phone: string, message: string, event: string, persons: string, place:string ) => {
   try {
      await transport.sendMail({
         subject: "Cotización de servicio",
         bcc: ["gerson10mtzvilla@gmail.com"],
         from: "gerson10mtzvilla@gmail.com",
   
         html: `
          <h2>Hola Jorge,</h2>
          <p>Un posible cliente se ha contactado a través del formulario de tu página web. Aquí tienes los detalles:</p>
          <ul>
            <li>Nombre: ${name} ${lastName}</li>
            <br/>
            <li>Email: ${email}</li>
            <br/>
            <li>Teléfono: ${phone}</li>
            <br/>
            <li>Tipo de evento: ${event}</li>
            <br/>
            <p>El contempla:</p>
            <li>${persons} personas</li>
            <br/>
            <li>lugar: ${place}</li>
            <li>Mensaje: ${message}</li>
          </ul>
          `
      })
      return true;
   } catch (error) {
      return false;
   }
}

export default sendEmail;