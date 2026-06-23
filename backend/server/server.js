const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const receiverEmail = process.env.RECEIVER_EMAIL || process.env.EMAIL_RECEIVER || "";
console.log("RECEIVER_EMAIL:", receiverEmail ? "Loaded" : "Missing");

app.post("/send-email", async (req, res) => {
  const {
    name,
    email,
    phone,
    product,
    quantity,
    address,
    message,
  } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Inquiry received",

      html: `
        <h2>New Customer Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});