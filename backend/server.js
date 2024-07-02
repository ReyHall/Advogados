import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_TRANSPORTER,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
})

app.get('/email', (req, res) => {
  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    cc: `${req.query.email}`,
    subject: 'Teste1',
    text: 'teste'
  }

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro ao enviar email' });
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).json({ message: 'Email enviado com sucesso' });s
    }

    transporter.close();
  })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
