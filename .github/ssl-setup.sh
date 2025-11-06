#!/bin/bash

# SSL Setup Script using Let's Encrypt (Certbot)
# Run this AFTER vps-setup.sh and initial deployment

set -e

echo "=== SSL Setup for Gibb Lawyers ==="

# Variables
DOMAIN="gibblawyers.com"
WWW_DOMAIN="www.gibblawyers.com"
EMAIL="admin@gibblawyers.com"  # Change this to your email

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root or with sudo"
    exit 1
fi

echo "Step 1: Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    apt update
    apt install -y certbot python3-certbot-nginx
else
    echo "Certbot already installed"
fi

echo "Step 2: Obtaining SSL certificate..."
certbot --nginx \
    -d $DOMAIN \
    -d $WWW_DOMAIN \
    --non-interactive \
    --agree-tos \
    --email $EMAIL \
    --redirect

echo "Step 3: Testing auto-renewal..."
certbot renew --dry-run

echo ""
echo "=== SSL Setup Complete! ==="
echo ""
echo "Your site is now available at:"
echo "  https://$DOMAIN"
echo "  https://$WWW_DOMAIN"
echo ""
echo "Certificate auto-renewal is configured."
echo "Certbot will automatically renew your certificate before it expires."
