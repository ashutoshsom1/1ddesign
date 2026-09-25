export interface ConsultationSubmission {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
  date?: string;
}

export interface WhatsAppNotificationResult {
  sent: boolean;
  method: 'webhook' | 'callmebot' | 'twilio' | 'client-link';
  whatsappUrl: string;
  error?: string;
}

const DEFAULT_ADMIN_PHONE = "917827473377"; // +91 78274 73377 (1 Dream Design Studio)

/**
 * Format a luxury architectural consultation message for WhatsApp
 */
export function formatWhatsAppMessage(submission: ConsultationSubmission): string {
  const dateStr = submission.date 
    ? new Date(submission.date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) 
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return [
    `🏛️ *NEW ARCHITECTURAL CONSULTATION BOOKING*`,
    `*1 Dream Design Atelier*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Client Name:* ${submission.name}`,
    `📞 *Client Phone:* ${submission.phone || 'Not provided'}`,
    `✉️ *Client Email:* ${submission.email}`,
    `📐 *Spatial Typology:* ${submission.service}`,
    `🕒 *Booked At:* ${dateStr}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📝 *Client Brief:*`,
    `"${submission.message}"`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `⚡ _Initiated via 1 Dream Design Web Portal_`
  ].join('\n');
}

/**
 * Generate a direct WhatsApp deep link to message the Studio Principal
 */
export function getWhatsAppDirectUrl(submission: ConsultationSubmission): string {
  const adminPhone = (process.env.WHATSAPP_ADMIN_PHONE || DEFAULT_ADMIN_PHONE).replace(/[^0-9]/g, '');
  const message = formatWhatsAppMessage(submission);
  return `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Server-side dispatcher: Dispatches WhatsApp notification via configured channel
 * Supports:
 * 1. Webhook (Zapier, Make, Green-API, UltraMsg, Custom WhatsApp Bot)
 * 2. CallMeBot Free WhatsApp API (zero-config personal notification)
 * 3. Twilio WhatsApp API
 * 4. Fallback to pre-generated direct link for immediate client forwarding
 */
export async function sendWhatsAppNotification(
  submission: ConsultationSubmission
): Promise<WhatsAppNotificationResult> {
  const directLink = getWhatsAppDirectUrl(submission);
  const adminPhone = (process.env.WHATSAPP_ADMIN_PHONE || DEFAULT_ADMIN_PHONE).replace(/[^0-9]/g, '');
  const messageText = formatWhatsAppMessage(submission);

  // 1. Try Custom WhatsApp Webhook Gateway (e.g. Green-API, UltraMsg, Zapier, Make)
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.WHATSAPP_WEBHOOK_AUTH_TOKEN 
            ? { 'Authorization': `Bearer ${process.env.WHATSAPP_WEBHOOK_AUTH_TOKEN}` } 
            : {})
        },
        body: JSON.stringify({
          phone: adminPhone,
          message: messageText,
          submission,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        return {
          sent: true,
          method: 'webhook',
          whatsappUrl: directLink
        };
      } else {
        console.warn(`WhatsApp webhook responded with status ${response.status}`);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown webhook error';
      console.error('Error invoking WhatsApp webhook:', errorMessage);
    }
  }

  // 2. Try CallMeBot Free WhatsApp Gateway (No credit card / instant personal alerts)
  // To activate: Send "I allow callmebot to send me messages" to +34 941 87 23 20 on WhatsApp to get API Key
  const callmebotApiKey = process.env.CALLMEBOT_API_KEY;
  if (callmebotApiKey) {
    try {
      const targetPhone = process.env.CALLMEBOT_PHONE || adminPhone;
      const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(targetPhone)}&text=${encodeURIComponent(messageText)}&apikey=${encodeURIComponent(callmebotApiKey)}`;
      
      const response = await fetch(callmebotUrl);
      if (response.ok) {
        return {
          sent: true,
          method: 'callmebot',
          whatsappUrl: directLink
        };
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown CallMeBot error';
      console.error('Error sending CallMeBot notification:', errorMessage);
    }
  }

  // 3. Try Twilio WhatsApp API
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFromNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g. "whatsapp:+14155238886"

  if (twilioSid && twilioAuthToken && twilioFromNumber) {
    try {
      const twilioEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const basicAuth = Buffer.from(`${twilioSid}:${twilioAuthToken}`).toString('base64');

      const params = new URLSearchParams();
      params.append('From', twilioFromNumber.startsWith('whatsapp:') ? twilioFromNumber : `whatsapp:${twilioFromNumber}`);
      params.append('To', `whatsapp:+${adminPhone}`);
      params.append('Body', messageText);

      const response = await fetch(twilioEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (response.ok) {
        return {
          sent: true,
          method: 'twilio',
          whatsappUrl: directLink
        };
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown Twilio error';
      console.error('Error dispatching Twilio WhatsApp notification:', errorMessage);
    }
  }

  // 4. Default: Return direct client-to-architect link for 1-click confirmation
  return {
    sent: false,
    method: 'client-link',
    whatsappUrl: directLink
  };
}
