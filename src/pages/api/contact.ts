import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(req.body);

  const { name, email, message } = req.body;
  const authorizedEmail = process.env.EMAIL;
  const pass = process.env.PASS;

  //  Configure the nodemailer transport with your email service's settings
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authorizedEmail,
      pass: pass,
    },
  });

  try {
    // Send the email using nodemailer
    const emailRes = await transport.sendMail({
      from: { name: `${name}`, address: email },
      to: authorizedEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
      <p>${message}</p>
      <p><span>${name}<strong> Phone Number:</strong></span>
    </p>
    `,
    });
    console.log("message sent", emailRes.messageId);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
