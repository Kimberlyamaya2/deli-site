// src/app/api/send/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const { name, email, phone, reason, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // keep simple & valid
      to: "delibyvic@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from the Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? "N/A"}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend response:", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
