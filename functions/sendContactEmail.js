const functions = require("firebase-functions");
const cors = require("cors");
const nodemailer = require("nodemailer");

const smtpLogin = "8d0e45001@smtp-brevo.com";
const smtpPass =
  "xsmtpsib-9b8a645f4b1b4536b3a9639c806d9a9823d6de2cbdab83db773e51d42d528611-FcXxTwVJkbdC9vm5";
const verifiedSender = "contact@authenticbaseballequipment.com";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: smtpLogin,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const corsHandler = cors({
  origin: "https://authentic-baseball.web.app",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
});

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields." });
  }

  const fullName = `${firstName} ${lastName}`;
  const subjectLine = subject || "Contact Form Submission";

  const htmlMessage = `
    <div style="font-family: sans-serif;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Subject:</strong> ${subjectLine}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `;

  const plainTextMessage = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subjectLine}

Message:
${message}
  `;

  try {
    await transporter.sendMail({
      from: `"Authentic Baseball" <${verifiedSender}>`,
      to: verifiedSender,
      replyTo: email,
      subject: `New Contact Message from ${fullName}`,
      html: htmlMessage,
      text: plainTextMessage,
      headers: {
        "X-Mailer": "Nodemailer",
        "X-Priority": "3",
        "X-Company": "Authentic Baseball",
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("❌ Failed to send contact form:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
};

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => handler(req, res));
});
