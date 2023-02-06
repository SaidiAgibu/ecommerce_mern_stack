const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
   
    //service: "gmail",
    auth: {
      user: "saidiagibu100@outlook.com",
      pass: "saididaudi2001",
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
  }
  });

  const mailOptions = {
    from: "saidiagibu100@outlook.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
