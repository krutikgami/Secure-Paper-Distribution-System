// controllers/Pdf.controller.js
import { PDF } from '../models/PdfDetail.models.js';
import { async_handler } from '../utils/async_handler.js';
import { api_response } from '../utils/api_response.js';
import { api_error } from '../utils/api_error.js';
import nodemailer from 'nodemailer';


const generateRandomPassword = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

const uploadPdf = async_handler(async (req, res) => {
  const { title } = req.body;
  const pdfUrl = req.fileUrl; // Get URL from middleware
  const publicId = req.filePublicId; // Get public ID from middleware

  if (!pdfUrl || !publicId) {
    throw new api_error(400,"PDF not uploaded");
  }

  const password = generateRandomPassword();

  const pdfuploaded = await PDF.create({
    title,
    pdfurl: {
      public_id: publicId,
      url: pdfUrl,
    },
    password, // Store the generated password
  });

  res.status(200).json(new api_response(200, "PDF uploaded", pdfuploaded));
});


const fetchpdf = async_handler(async (req, res) => {
  const pdfs = await PDF.find(); // Exclude password field

  return res.status(200).json(new api_response(200, "PDFs fetched successfully", pdfs));
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  // service: 'gmail',
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Pass
  }
});


const SendEmail = async_handler(async(req,res)=>{
  const { emails,subject, text } = req.body;

  const mailOptions = {
    
    from: process.env.Email_User,
    to: emails,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

export  {uploadPdf,fetchpdf,SendEmail};





