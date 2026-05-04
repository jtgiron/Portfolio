"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactFormSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Please check your input." };
  }

  const { name, email, message, website } = parsed.data;

  // Honeypot check — silently succeed
  if (website) {
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New portfolio contact from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #e4e4e7;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
