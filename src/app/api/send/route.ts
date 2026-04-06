// src/app/api/send/route.ts
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, phone, reason, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
     from: "Victor’s Deli <onboarding@resend.dev>",
      to: "delibyvic@gmail.com",
       replyTo: email, 
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from the Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Reason:</strong> ${reason || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(
        { success: false, error: error.message || "Resend failed" },
        { status: 500 }
      );
    }

    console.log("Resend success:", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Route error:", error);
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}