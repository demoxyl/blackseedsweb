import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, project, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "BlackSeeds Bot <bot@blackseedsincorp.com>",
      to: ["ademola@blackseedsincorp.com"],
      replyTo: email,
      subject: `New Lead from ${project} - ${name} | blackseedsincorp.com`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Lead - blackseedsincorp.com</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project:</strong> ${project}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p>Reply directly to this email to reach ${name}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}