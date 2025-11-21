import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, reason, message, email } = await request.json();

  try {
    await resend.emails.send({
      from: "Victor’s Deli <onboarding@resend.dev>",
      to: "delibyvic@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from the Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
