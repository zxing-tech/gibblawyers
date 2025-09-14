#!/bin/bash

# Email Notification Deployment Script for Gibb Lawyers
# This script helps deploy the email notification system

echo "🏛️  Gibb & Co Lawyers - Email Notification Setup"
echo "================================================"
echo ""

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
fi

echo "✅ Supabase CLI found"

# Check if we're linked to the project
echo "🔗 Checking Supabase project link..."
if ! supabase status &> /dev/null; then
    echo "🔗 Linking to Supabase project..."
    supabase link --project-ref fcneqcsiixednrukbpxe
fi

echo "✅ Project linked successfully"

# Deploy the edge function
echo "🚀 Deploying email notification function..."
supabase functions deploy send-contact-email

if [ $? -eq 0 ]; then
    echo "✅ Edge function deployed successfully"
else
    echo "❌ Failed to deploy edge function"
    exit 1
fi

# Apply database migrations
echo "📊 Applying database migrations..."
supabase db push

if [ $? -eq 0 ]; then
    echo "✅ Database migrations applied successfully"
else
    echo "❌ Failed to apply database migrations"
    exit 1
fi

echo ""
echo "🎉 Email notification system deployed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Set up Resend account and verify domain"
echo "   2. Add RESEND_API_KEY to Supabase secrets"
echo "   3. Add ADMIN_EMAIL to Supabase secrets"
echo "   4. Test the contact form"
echo ""
echo "📖 See EMAIL_SETUP.md for detailed instructions"
echo ""
echo "🏛️  Serving legal excellence since 1892 🏛️"