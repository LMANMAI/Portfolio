// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, lastname, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail", //smtp.gmail.com
    host: "smtp.gmail.com",
    port: 25,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: "gikzen@gmail.com",
      pass: "lucasmaidana",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "lcasmanmaidana@gmail.com",
      subject: subject,
      html: `<p>Tenes un nuevo mensaje de <strong>${name}</strong> <strong>${lastname}</strong></p><br>
      <p>Motivo: ${subject}</p><br>
      <p>Email: ${email}</p><br>
      <p>Mensaje: ${message}</p><br>      
      `,
    });
    console.log("Mensaje enviado ", emailRes.messageId);
  } catch (error) {
    console.log("El error fue: ", error);
  }
  res.status(200).json(req.body);
};
