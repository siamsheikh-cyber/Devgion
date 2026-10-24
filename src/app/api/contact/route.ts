import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(255, "Email cannot exceed 255 characters"),
  service: z.enum(
    [
      "Website Design & Redesign",
      "Local SEO",
      "Branding & Graphics",
      "Video",
      "Other",
    ],
    {
      message: "Please select a valid service",
    },
  ),
  website: z
    .string()
    .trim()
    .max(255, "Website URL is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors).flat()[0] ?? "Invalid form input";
      return NextResponse.json(
        { error: firstErrorMessage, details: fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, service, website, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables");
      return NextResponse.json(
        {
          error:
            "Email service is not currently configured. Please email devgionagency@gmail.com directly.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeWebsite = website ? escapeHtml(website) : "";
    const safeMessage = escapeHtml(message);

    // 1. Send notification email to Devgion agency
    const adminEmailResult = await resend.emails.send({
      from: "Devgion Contact Form <onboarding@resend.dev>",
      to: "devgionagency@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name} — Devgion`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New enquiry from ${safeName}</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: #f8fafc;
                color: #0f172a;
                margin: 0;
                padding: 24px;
              }
              .card {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
                overflow: hidden;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
              }
              .header {
                background: linear-gradient(135deg, #3D78FB 0%, #7555EE 100%);
                padding: 24px 32px;
                color: #ffffff;
              }
              .header h1 {
                margin: 0;
                font-size: 20px;
                font-weight: 700;
              }
              .header p {
                margin: 6px 0 0 0;
                font-size: 13px;
                opacity: 0.9;
              }
              .body {
                padding: 32px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.06em;
                color: #64748b;
                margin-bottom: 6px;
              }
              .value {
                font-size: 15px;
                color: #0f172a;
                line-height: 1.5;
              }
              .badge {
                display: inline-block;
                background-color: #eff6ff;
                color: #2563eb;
                padding: 4px 10px;
                border-radius: 9999px;
                font-weight: 600;
                font-size: 13px;
              }
              .message-box {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-left: 4px solid #3D78FB;
                padding: 16px;
                border-radius: 6px;
                white-space: pre-wrap;
                font-size: 14px;
                line-height: 1.6;
                color: #1e293b;
              }
              .footer {
                padding: 20px 32px;
                background-color: #f8fafc;
                border-top: 1px solid #e2e8f0;
                font-size: 12px;
                color: #64748b;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>New Contact Enquiry</h1>
                <p>Submitted through Devgion website contact form</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value"><strong>${safeName}</strong></div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value">
                    <a href="mailto:${safeEmail}" style="color: #3D78FB; text-decoration: underline;">
                      ${safeEmail}
                    </a>
                  </div>
                </div>
                <div class="field">
                  <div class="label">Requested Service</div>
                  <div class="value">
                    <span class="badge">${safeService}</span>
                  </div>
                </div>
                <div class="field">
                  <div class="label">Website URL</div>
                  <div class="value">
                    ${
                      safeWebsite
                        ? `<a href="${safeWebsite.startsWith("http") ? safeWebsite : `https://${safeWebsite}`}" target="_blank" rel="noopener noreferrer" style="color: #3D78FB; text-decoration: underline;">${safeWebsite}</a>`
                        : `<em style="color: #94a3b8;">Not provided</em>`
                    }
                  </div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${safeMessage}</div>
                </div>
              </div>
              <div class="footer">
                You can directly reply to this email to contact <strong>${safeName}</strong> at ${safeEmail}.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Resend admin email error:", adminEmailResult.error);
      return NextResponse.json(
        {
          error:
            adminEmailResult.error.message ||
            "Failed to send email. Please try again or email devgionagency@gmail.com directly.",
        },
        { status: 500 },
      );
    }

    // 2. Send warm auto-reply to the person who filled the form
    try {
      await resend.emails.send({
        from: "Devgion <onboarding@resend.dev>",
        to: email,
        subject: "We received your message — Devgion",
        html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>We received your message — Devgion</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                  background-color: #f8fafc;
                  color: #0f172a;
                  margin: 0;
                  padding: 24px;
                }
                .card {
                  max-width: 580px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 12px;
                  border: 1px solid #e2e8f0;
                  overflow: hidden;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .header {
                  background: linear-gradient(135deg, #3D78FB 0%, #7555EE 100%);
                  padding: 24px 32px;
                  color: #ffffff;
                }
                .header h1 {
                  margin: 0;
                  font-size: 22px;
                  font-weight: 800;
                  letter-spacing: -0.02em;
                }
                .body {
                  padding: 32px;
                  font-size: 15px;
                  line-height: 1.6;
                  color: #334155;
                }
                .body p {
                  margin-top: 0;
                  margin-bottom: 16px;
                }
                .summary {
                  background-color: #f8fafc;
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 16px 20px;
                  margin: 20px 0;
                }
                .summary-item {
                  font-size: 14px;
                  margin-bottom: 6px;
                }
                .summary-item:last-child {
                  margin-bottom: 0;
                }
                .footer {
                  padding: 20px 32px;
                  background-color: #f8fafc;
                  border-top: 1px solid #e2e8f0;
                  font-size: 12px;
                  color: #64748b;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">
                  <h1>Devgion</h1>
                </div>
                <div class="body">
                  <p>Hi <strong>${safeName}</strong>,</p>
                  <p>
                    Thank you for reaching out to Devgion! We have successfully received your enquiry regarding <strong>${safeService}</strong>.
                  </p>
                  <p>
                    Our team is reviewing your project details. We will get back to you with an assessment and next steps within <strong>24 hours</strong>.
                  </p>
                  <div class="summary">
                    <div class="summary-item"><strong>Service requested:</strong> ${safeService}</div>
                    ${safeWebsite ? `<div class="summary-item"><strong>Website URL:</strong> ${safeWebsite}</div>` : ""}
                  </div>
                  <p>
                    If you prefer to speak right away, you can also schedule a free 30-minute discovery call directly on our booking calendar anytime at <a href="https://calendly.com/devgionagency/30min" style="color: #3D78FB; text-decoration: underline;">calendly.com/devgionagency/30min</a>.
                  </p>
                  <p style="margin-bottom: 0;">
                    Warm regards,<br>
                    <strong>The Devgion Team</strong><br>
                    <a href="https://devgion.com" style="color: #3D78FB; text-decoration: none;">devgion.com</a>
                  </p>
                </div>
                <div class="footer">
                  Devgion &bull; Tikatoli, Dhaka, Bangladesh &bull; devgionagency@gmail.com
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (autoReplyErr) {
      // In sandbox mode without custom domain, Resend might limit auto-reply recipients.
      // We log the error but still treat the client enquiry submission as successful.
      console.warn("Auto-reply email could not be sent:", autoReplyErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Unhandled error in /api/contact:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
