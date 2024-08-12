import nodemailer from "nodemailer";
import { NextRequest } from "next/server";


export const POST = async (req: NextRequest) => {
  const { firstName, lastName, email, tel, services, company, notes } =
    await req.json();

  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Faith is Health Contact Form`,
      html: `<div> 
	  <div> <p>Full Name:</p> <p>${firstName ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Full Name:</p> <p>${lastName ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Email:</p> <p>${email ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Phone:</p> <p>${tel ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Service:</p> <p>${services ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Service:</p> <p>${company ?? ""}</p> </div>
	  <hr/>
	  <div> <p>Message:</p> <p>${notes ?? ""}</p> </div>
	  <hr/>
	  </div>`,
    });
    return new Response("Email Sent", { status: 200 });
  } catch (e) {
    console.error(e);

    return new Response("Error", { status: 500 });
  }
};
