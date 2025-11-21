import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        { status: 500 }
      );
    }

    const { name, reason, message, email, phone } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",   // keep this simple while testing
      to: "delibyvic@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from the Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? "N/A"}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend response:", data);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "Error sending email" }),
      { status: 500 }
    );
  }
}
