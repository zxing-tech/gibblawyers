# Email Notification Setup Guide

This guide explains how to set up automatic email notifications for the Gibb Lawyers contact form.

## Overview

The email notification system includes:
- **Admin Notifications**: Sent to law firm administrators when new contact forms are submitted
- **Client Acknowledgments**: Sent to clients confirming receipt of their inquiry
- **Professional Branding**: Emails use Gibb & Co branding and color scheme
- **Automatic Triggering**: Emails are sent automatically when contact forms are submitted

## Technical Architecture

### Components
1. **Supabase Edge Function** (`send-contact-email`): Handles email sending via Resend API
2. **Database Trigger**: Automatically triggers email function when contact is inserted
3. **Email Service**: Client-side service for handling email operations
4. **Enhanced Contact Form**: Updated form with email notification integration

### Email Service Provider
- **Resend**: Professional email service chosen for reliability and deliverability
- **HTML Templates**: Professional emails with Gibb & Co branding
- **Fallback Handling**: Graceful degradation if email service is unavailable

## Setup Instructions

### 1. Resend API Setup
1. Create account at [resend.com](https://resend.com)
2. Verify your domain: `gibblawyers.com`
3. Get your API key from Resend dashboard

### 2. Supabase Configuration

#### A. Set Environment Variables
In your Supabase project dashboard:
```bash
# Go to Project Settings > Edge Functions
# Add these secrets:
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=admin@gibblawyers.com
```

#### B. Deploy Edge Function
```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref fcneqcsiixednrukbpxe

# Deploy the edge function
supabase functions deploy send-contact-email
```

#### C. Run Database Migration
```bash
# Apply the email notification trigger
supabase db push
```

### 3. Domain Verification
1. Add these DNS records to your domain:
   ```
   Type: TXT
   Name: _resend
   Value: (provided by Resend)
   ```

2. Verify domain in Resend dashboard

### 4. Test the Setup
1. Submit a test contact form
2. Check that:
   - Form data is saved to Supabase `contacts` table
   - Admin receives notification email
   - Client receives acknowledgment email

## Email Templates

### Admin Notification
- **Subject**: `New Contact Form Submission - [Client Name]`
- **Content**: Professional layout with client details and message
- **Branding**: Gibb & Co color scheme and typography

### Client Acknowledgment
- **Subject**: `Thank you for contacting Gibb & Co Lawyers`
- **Content**: Professional thank you with contact information
- **Response Time**: Promises 24-hour response commitment

## Professional Features

### Email Design
- **Responsive**: Works on desktop and mobile
- **Branded**: Uses Gibb & Co colors (#C18C43, #2F2F2F, #FAF8F5)
- **Typography**: Professional fonts matching website
- **Legal Styling**: Traditional law firm appearance

### Content Features
- **Contact Information**: Office locations and phone numbers
- **WhatsApp Integration**: Quick contact option
- **Response Commitment**: 24-hour response promise
- **Heritage Branding**: "Established 1892" messaging

## Monitoring and Maintenance

### Analytics
- Monitor email delivery rates in Resend dashboard
- Track open rates and engagement
- Monitor Supabase function logs for errors

### Troubleshooting
1. **Emails not sending**: Check Supabase function logs
2. **Domain issues**: Verify DNS records are correct
3. **API errors**: Confirm Resend API key is valid

### Error Handling
- Graceful degradation if email service fails
- Contact form still saves to database
- User receives appropriate feedback messages

## Cost Considerations

### Resend Pricing
- **Free tier**: 3,000 emails/month
- **Professional**: $20/month for 50,000 emails
- **Recommended**: Start with free tier, upgrade as needed

### Supabase Costs
- Edge function executions included in free tier
- Database operations minimal cost impact

## Security

### Data Protection
- No sensitive data stored in email service
- Contact information handled securely
- GDPR-compliant email handling

### API Security
- Resend API key stored as Supabase secret
- Edge function uses service role permissions
- CORS properly configured

## Future Enhancements

### Potential Additions
1. **Email Templates**: Additional template types for different inquiries
2. **Auto-Categorization**: Route emails based on inquiry type
3. **CRM Integration**: Connect with legal practice management software
4. **Scheduled Reminders**: Follow-up reminders for unanswered inquiries

### Analytics Integration
- Google Analytics email event tracking
- Contact form conversion metrics
- Client response time analytics

---

**Need Help?**
Contact the development team for assistance with setup or troubleshooting.