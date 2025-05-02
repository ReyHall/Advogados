import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const token = process.env.TOKEN_INSTA;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const verifyCaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRECT_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    throw error;
  }
};

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_TRANSPORTER,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/email", async (req, res) => {
  const { nome, email, celular, servico, menssagem, token } = req.body;
  const isCaptchaValid = await verifyCaptcha(token);

  if (!isCaptchaValid) {
    console.log("teste");
    return res.status(400).json({ message: "Invalid reCAPTCHA" });
  } 

  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    cc: email,
    subject: `Teste`,
    text: `
    Nome: ${nome}
    Email: ${email}
    Celular: ${celular}
    Serviço: ${servico}
    Mensagem: ${menssagem}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erro ao enviar email:", error);
      res.status(400).json({ message: "Erro ao enviar email" });
    } else {
      console.log("Email enviado:", info.response);
      res.status(200).json({ message: "Email enviado com sucesso" });
    }
  });
});

app.get("/insta-token", async (req, res) => {
  fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
