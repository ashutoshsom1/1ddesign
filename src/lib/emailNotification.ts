import nodemailer from 'nodemailer';

export interface ConsultationSubmission {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
  date?: string;
}

export interface EmailNotificationResult {
  sent: boolean;
  method: 'resend' | 'smtp' | 'brevo' | 'simulated';
  targetEmail: string;
  mailtoUrl: string;
  error?: string;
}

export const DEFAULT_STUDIO_EMAIL = "1dreamdesignstudioo@gmail.com";

/**
 * Generate a luxury architectural email HTML body
 */
export function generateEmailHtml(submission: ConsultationSubmission): string {
  const dateStr = submission.date 
    ? new Date(submission.date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) 
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Architectural Consultation Booking</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0c0e; color: #f4f4f5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #121418; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #181b20 0%, #0d0f12 100%); padding: 32px 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .eyebrow { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #fcd34d; font-family: monospace; margin-bottom: 8px; }
    .title { font-size: 24px; font-weight: 300; color: #ffffff; margin: 0; letter-spacing: -0.02em; }
    .content { padding: 28px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .th { width: 35%; padding: 12px 14px; text-align: left; font-size: 11px; font-family: monospace; text-transform: uppercase; color: #a1a1aa; border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
    .td { width: 65%; padding: 12px 14px; text-align: left; font-size: 13px; color: #ffffff; border-bottom: 1px solid rgba(255, 255, 255, 0.06); font-weight: 500; }
    .brief-card { background: #0c0e11; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 18px; margin-bottom: 24px; }
    .brief-title { font-size: 11px; font-family: monospace; text-transform: uppercase; color: #fcd34d; margin-bottom: 8px; }
    .brief-text { font-size: 13px; line-height: 1.6; color: #d4d4d8; margin: 0; white-space: pre-wrap; }
    .actions { display: flex; gap: 12px; }
    .btn { display: inline-block; padding: 12px 24px; background: #fcd34d; color: #09090b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 8px; text-decoration: none; text-align: center; }
    .footer { padding: 20px 28px; background: #0d0f12; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 11px; color: #71717a; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="eyebrow">// 1 DREAM DESIGN ATELIER</div>
      <h1 class="title">New Spatial Consultation Booking</h1>
    </div>
    
    <div class="content">
      <table class="table">
        <tr>
          <td class="th">Client Name</td>
          <td class="td">${submission.name}</td>
        </tr>
        <tr>
          <td class="th">Client Email</td>
          <td class="td"><a href="mailto:${submission.email}" style="color: #60a5fa; text-decoration: none;">${submission.email}</a></td>
        </tr>
        <tr>
          <td class="th">Client Phone</td>
          <td class="td">${submission.phone ? `<a href="tel:${submission.phone}" style="color: #34d399; text-decoration: none;">${submission.phone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="th">Typology</td>
          <td class="td"><span style="color: #fcd34d;">${submission.service}</span></td>
        </tr>
        <tr>
          <td class="th">Logged At</td>
          <td class="td" style="color: #a1a1aa; font-family: monospace;">${dateStr}</td>
        </tr>
      </table>

      <div class="brief-card">
        <div class="brief-title">// Spatial Brief & Requirements</div>
        <p class="brief-text">"${submission.message}"</p>
      </div>

      <div style="margin-top: 24px;">
        <a href="mailto:${submission.email}?subject=Re:%20Spatial%20Consultation%20Brief%20-%201%20Dream%20Design%20Studio" class="btn">
          Reply to ${submission.name}
        </a>
      </div>
    </div>

    <div class="footer">
      1 Dream Design Atelier &bull; KW SRISHTI-2, Raj Nagar Ext, Delhi NCR &bull; 1dreamdesignstudioo@gmail.com
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generate a mailto link fallback with pre-filled subject and body
 */
export function generateMailtoUrl(submission: ConsultationSubmission, targetEmail: string): string {
  const subject = `New Consultation Booking: ${submission.name} - ${submission.service}`;
  const body = [
    `NEW CONSULTATION BOOKING - 1 DREAM DESIGN STUDIO`,
    `------------------------------------------------`,
    `Client Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || 'Not provided'}`,
    `Spatial Typology: ${submission.service}`,
    `Date: ${submission.date || new Date().toISOString()}`,
    ``,
    `Brief:`,
    submission.message,
    `------------------------------------------------`
  ].join('\n');

  return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Dispatch consultation email notification
 * Supports:
 * 1. Resend API (via RESEND_API_KEY)
 * 2. Standard SMTP / Gmail (via SMTP_USER, SMTP_PASS)
 * 3. Brevo API (via BREVO_API_KEY)
 * 4. Simulation fallback with mailto link
 */
export async function sendEmailNotification(
  submission: ConsultationSubmission
): Promise<EmailNotificationResult> {
  const targetEmail = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || DEFAULT_STUDIO_EMAIL;
  const mailtoUrl = generateMailtoUrl(submission, targetEmail);
  const subject = `🏛️ New Consultation Booking: ${submission.name} (${submission.service})`;
  const htmlContent = generateEmailHtml(submission);
  const textContent = `New consultation booking from ${submission.name} (${submission.email}, ${submission.phone || 'No phone'}). Typology: ${submission.service}. Brief: "${submission.message}"`;

  // 1. Try Resend REST API (recommended for Vercel, zero-setup with RESEND_API_KEY)
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const fromEmail = process.env.EMAIL_FROM || '1 Dream Design <onboarding@resend.dev>';
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [targetEmail],
          reply_to: submission.email,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (res.ok) {
        return {
          sent: true,
          method: 'resend',
          targetEmail,
          mailtoUrl,
        };
      } else {
        const errorData = await res.text();
        console.warn('Resend API returned error:', errorData);
      }
    } catch (err: unknown) {
      console.error('Error dispatching via Resend:', err);
    }
  }

  // 2. Try Nodemailer SMTP (e.g. Gmail App Password, Brevo SMTP, SendGrid, Amazon SES)
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME || '1 Dream Design'}" <${smtpUser}>`,
        to: targetEmail,
        replyTo: submission.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      return {
        sent: true,
        method: 'smtp',
        targetEmail,
        mailtoUrl,
      };
    } catch (err: unknown) {
      console.error('Error dispatching via SMTP:', err);
    }
  }

  // 3. Try Brevo (Sendinblue) API
  const brevoApiKey = process.env.BREVO_API_KEY;
  if (brevoApiKey) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': brevoApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: '1 Dream Design Atelier', email: process.env.EMAIL_FROM || targetEmail },
          to: [{ email: targetEmail }],
          replyTo: { email: submission.email, name: submission.name },
          subject,
          htmlContent,
          textContent,
        }),
      });

      if (res.ok) {
        return {
          sent: true,
          method: 'brevo',
          targetEmail,
          mailtoUrl,
        };
      }
    } catch (err: unknown) {
      console.error('Error dispatching via Brevo API:', err);
    }
  }

  // 4. Default: Notification prepared, logged, and returned with direct mailto fallback
  console.log(`[Email Notification Generated for ${targetEmail}]:`, {
    client: submission.name,
    service: submission.service,
    target: targetEmail
  });

  return {
    sent: false,
    method: 'simulated',
    targetEmail,
    mailtoUrl,
  };
}
