import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,

   auth: {
      user: process.env.USER,
      pass: process.env.PASS
   }
});

const sendEmail = (name: string, lastName: string, email: string, phone: string, message: string) => {
   return transport.sendMail({
      subject: "Cotización de servicio",
      bcc: ["gerson10mtzvilla@gmail.com"],
      from: "gerson10mtzvilla@gmail.com",

      html: `
       <h2>Hola Jorge,</h2>
       <p>Un posible cliente se ha contactado a través del formulario de tu página web. Aquí tienes los detalles:</p>
       <ul>
         <li>Nombre: ${name} ${lastName}</li>
         <li>Email: ${email}</li>
         <li>Teléfono: ${phone}</li>
         <li>Mensaje: ${message}</li>
       </ul>
       `
   }).then(e => e)
      .catch(e => e)
}

export default sendEmail;