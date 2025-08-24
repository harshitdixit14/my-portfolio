import nodemailer from "nodemailer";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "All fields are required" }),
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message sent to your email" }),
    };
  } catch (error) {
    console.error("❌ Email send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send email" }),
    };
  }
}
