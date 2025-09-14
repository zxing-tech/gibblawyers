import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record, type } = await req.json()
    
    // Email configuration - you'll need to set these in Supabase secrets
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'admin@gibblawyers.com'
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured')
    }

    let emailData;

    if (type === 'acknowledgment') {
      // Send acknowledgment email to client
      emailData = {
        from: 'noreply@gibblawyers.com',
        to: [record.email],
        subject: 'Thank you for contacting Gibb & Co Lawyers',
        html: `
          <div style="font-family: 'Crimson Text', Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5;">
            <div style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(196, 140, 67, 0.1);">
              <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #C18C43; font-size: 32px; margin: 0; font-family: 'Playfair Display', serif;">Gibb & Co</h1>
                <p style="color: #2F2F2F; font-size: 16px; margin: 5px 0 0 0; letter-spacing: 2px;">EST. 1892</p>
                <hr style="border: none; height: 2px; background: linear-gradient(to right, #C18C43, #D5B383); margin: 25px auto; width: 100px;">
              </div>
              
              <h2 style="color: #2F2F2F; font-size: 26px; margin-bottom: 25px; font-family: 'Playfair Display', serif;">Thank You for Your Inquiry</h2>
              
              <p style="color: #2F2F2F; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">Dear ${record.name},</p>
              
              <p style="color: #2F2F2F; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
                Thank you for contacting Gibb & Co Lawyers. We have received your inquiry and appreciate you taking the time to reach out to us.
              </p>
              
              <p style="color: #2F2F2F; font-size: 16px; line-height: 1.7; margin-bottom: 25px;">
                Your message has been forwarded to our experienced legal team, and we will review it carefully. One of our lawyers will respond to your inquiry <strong>within 24 hours</strong> during business days.
              </p>
              
              <div style="background-color: #FAF8F5; padding: 25px; border-radius: 8px; border-left: 4px solid #C18C43; margin: 25px 0;">
                <h3 style="color: #2F2F2F; margin: 0 0 15px 0; font-size: 18px; font-family: 'Playfair Display', serif;">Need Immediate Assistance?</h3>
                <p style="color: #2F2F2F; margin: 0 0 10px 0; font-size: 15px;">📞 <strong>Ipoh Office:</strong> +605 547 1313</p>
                <p style="color: #2F2F2F; margin: 0 0 10px 0; font-size: 15px;">📞 <strong>Teluk Intan Office:</strong> +605 623 1713</p>
                <p style="color: #2F2F2F; margin: 0; font-size: 15px;">📱 <strong>WhatsApp:</strong> +6012 477 5779</p>
              </div>
              
              <p style="color: #2F2F2F; font-size: 16px; line-height: 1.7; margin-bottom: 30px;">
                We look forward to assisting you with your legal needs and continuing our tradition of excellence that began in 1892.
              </p>
              
              <div style="text-align: center; margin-top: 40px; padding-top: 25px; border-top: 1px solid #D5B383;">
                <p style="color: #2F2F2F; font-size: 16px; margin: 0 0 10px 0; font-family: 'Playfair Display', serif;">Best regards,</p>
                <p style="color: #C18C43; font-size: 18px; font-weight: bold; margin: 0;">The Team at Gibb & Co</p>
                <p style="color: #7A7A7A; font-size: 12px; margin: 20px 0 0 0; font-style: italic;">
                  This is an automated acknowledgment. Please do not reply to this email.<br>
                  For urgent matters, please contact us directly using the phone numbers above.
                </p>
              </div>
            </div>
          </div>
        `,
        text: `Dear ${record.name},

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
For urgent matters, please contact us directly using the phone numbers above.`
      }
    } else {
      // Send admin notification email
      emailData = {
        from: 'noreply@gibblawyers.com',
        to: [ADMIN_EMAIL],
        subject: `New Contact Form Submission - ${record.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #C18C43; font-size: 28px; margin: 0;">Gibb & Co Lawyers</h1>
                <p style="color: #2F2F2F; font-size: 16px; margin: 5px 0 0 0;">Est. 1892</p>
                <hr style="border: none; height: 2px; background: linear-gradient(to right, #C18C43, #D5B383); margin: 20px 0;">
              </div>
              
              <h2 style="color: #2F2F2F; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
              
              <div style="background-color: #FAF8F5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; font-weight: bold; color: #2F2F2F; width: 30%;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; color: #2F2F2F;">${record.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; font-weight: bold; color: #2F2F2F;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; color: #2F2F2F;">${record.email}</td>
                  </tr>
                  ${record.phone ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; font-weight: bold; color: #2F2F2F;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #D5B383; color: #2F2F2F;">${record.phone}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; color: #2F2F2F;">Submitted:</td>
                    <td style="padding: 10px 0; color: #2F2F2F;">${new Date(record.created_at).toLocaleString()}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: white; border-left: 4px solid #C18C43; padding: 20px; margin: 20px 0;">
                <h3 style="color: #2F2F2F; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
                <p style="color: #2F2F2F; line-height: 1.6; margin: 0; white-space: pre-wrap;">${record.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #D5B383;">
                <p style="color: #7A7A7A; font-size: 14px; margin: 0;">
                  This email was automatically generated from the Gibb & Co website contact form.
                </p>
                <p style="color: #7A7A7A; font-size: 12px; margin: 10px 0 0 0;">
                  Please respond to the client within 24 hours to maintain our professional service standards.
                </p>
              </div>
            </div>
          </div>
        `,
        text: `New Contact Form Submission - Gibb & Co Lawyers

Name: ${record.name}
Email: ${record.email}
${record.phone ? `Phone: ${record.phone}` : ''}
Submitted: ${new Date(record.created_at).toLocaleString()}

Message:
${record.message}

---
This email was automatically generated from the Gibb & Co website contact form.
Please respond to the client within 24 hours to maintain our professional service standards.`
      }
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      throw new Error(`Email API error: ${emailResponse.status} - ${errorData}`)
    }

    const result = await emailResponse.json()
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification sent successfully',
        emailId: result.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email notification:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email notification',
        details: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})