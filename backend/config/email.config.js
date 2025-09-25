import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config(); // load .env

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // should be 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default transporter