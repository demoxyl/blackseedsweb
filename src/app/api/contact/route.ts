import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, project, budget, message } = await req.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.log("NEW LEAD (no key):", { name, email, project, budget, message });
    return NextResponse.json({ success: true, mode: "log-only" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "BlackSeeds Bot <onboarding@resend.dev>"
        to: ["demoxyl@gmail.com"],
        replyTo: email,
        subject: `New Lead from ${project} - ${name} | blackseedsincorp.com`,
        html: `
          <div style="font-family: sans-serif; background: #0A0A0A; color: #F9F6F0; padding: 24px;">
            <h2 style="color: #D4AF37;">New Project Inquiry - blackseedsincorp.com</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Project:</b> ${project}</p>
            <p><b>Budget:</b> ${budget}</p>
            <p><b>Message:</b></p>
            <p style="background: #1A1A1A; padding: 12px; border-left: 3px solid #D4AF37;">${message}</p>
            <hr style="border-color: #333; margin: 20px 0;" />
            <p>WhatsApp: <a href="https://wa.me/2348032684135" style="color: #25D366;">+234 803 268 4135</a></p>
          </div>
        `,
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));
    return NextResponse.json({ success: true, data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}