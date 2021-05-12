import nodemailer from "nodemailer";
require("dotenv").config();

export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASS,
    },
  });

  const contentHTML = `
    <h1>User INformation</h1>
    <ul>
    <li>UserName: ${name}</li>
    <li>UserEmail: ${email}</li>
    <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

  try {
    const emailRes = await transporter.sendMail({
      from: `"Walfret Server" <${process.env.TRANSPORTER_EMAIL}>`,
      to: "walfret69@gmail.com",
      subject: `Website Contact Form from ${name}`,
      html: contentHTML,
    });

    console.log("Message sent", emailRes.messageId);
  } catch (error) {
    console.error(error);
  }

  res.status(200).json(req.body);
};
