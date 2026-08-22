import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Basic Server-Side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Console Log for local debugging
console.log("Valid Contact form payload received:", { name, email, message });

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'MZA Dev Portfolio <contact@mzadev.com>', // Yahan custom domain lagana zaruri hai
  to: 'contact@mzadev.com',                       // Cloudflare routing se Gmail par forward hoga
  replyTo: email, // Is se aap direct client ko reply kar sakenge
  subject: `New Lead / Message from ${name}`,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

    return NextResponse.json(
      { success: true, message: "Message received successfully!", data: { name, email } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}