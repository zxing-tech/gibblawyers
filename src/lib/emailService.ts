import { supabase } from '@/integrations/supabase/client';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EmailNotificationResult {
  success: boolean;
  message: string;
  emailId?: string;
  error?: string;
}

export class EmailService {
  /**
   * Send email notification via Supabase Edge Function
   */
  static async sendContactNotification(data: ContactFormData): Promise<EmailNotificationResult> {
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          record: {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            message: data.message,
            created_at: new Date().toISOString(),
          }
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        return {
          success: false,
          message: 'Failed to send email notification',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Email notification sent successfully',
        emailId: result?.emailId
      };
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        message: 'Failed to send email notification',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Send acknowledgment email to the client
   */
  static async sendClientAcknowledgment(clientEmail: string, clientName: string): Promise<EmailNotificationResult> {
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'acknowledgment',
          record: {
            email: clientEmail,
            name: clientName,
            created_at: new Date().toISOString(),
          }
        }
      });

      if (error) {
        console.error('Client acknowledgment error:', error);
        return {
          success: false,
          message: 'Failed to send acknowledgment email',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Acknowledgment email sent successfully',
        emailId: result?.emailId
      };
    } catch (error) {
      console.error('Acknowledgment service error:', error);
      return {
        success: false,
        message: 'Failed to send acknowledgment email',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Format email content for admin notification
   */
  static formatAdminNotification(data: ContactFormData): string {
    return `
New Contact Form Submission - Gibb & Co Lawyers

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Submitted: ${new Date().toLocaleString()}

Message:
${data.message}

---
This submission has been automatically saved to the database.
Please respond to the client within 24 hours to maintain our professional service standards.
    `.trim();
  }

  /**
   * Format acknowledgment email for client
   */
  static formatClientAcknowledgment(clientName: string): string {
    return `
Dear ${clientName},

Thank you for contacting Gibb & Co Lawyers. We have received your inquiry and appreciate you taking the time to reach out to us.

Your message has been forwarded to our legal team, and we will review it carefully. One of our experienced lawyers will respond to your inquiry within 24 hours during business days.

If your matter is urgent, please don't hesitate to call us directly at:
- Ipoh Office: +605 547 1313
- Teluk Intan Office: +605 623 1713

For immediate assistance, you can also reach us via WhatsApp at +6012 477 5779.

We look forward to assisting you with your legal needs.

Best regards,

The Team at Gibb & Co
Established 1892

--
This is an automated acknowledgment. Please do not reply to this email.
For urgent matters, please contact us directly using the phone numbers above.
    `.trim();
  }
}