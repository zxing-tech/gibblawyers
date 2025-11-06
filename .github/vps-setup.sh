#!/bin/bash

# VPS Setup Script for Gibb Lawyers Website
# This script sets up Nginx to serve the static website

set -e

echo "=== Gibb Lawyers VPS Setup Script ==="

# Variables (customize these)
DOMAIN="gibblawyers.com"
WWW_DOMAIN="www.gibblawyers.com"
WEB_ROOT="/var/www/gibblawyers"
NGINX_AVAILABLE="/etc/nginx/sites-available/gibblawyers"
NGINX_ENABLED="/etc/nginx/sites-enabled/gibblawyers"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root or with sudo"
    exit 1
fi

echo "Step 1: Creating web directory..."
mkdir -p $WEB_ROOT/current
chown -R www-data:www-data $WEB_ROOT
chmod -R 755 $WEB_ROOT

echo "Step 2: Creating Nginx configuration..."
cat > $NGINX_AVAILABLE <<'EOF'
server {
    listen 80;
    listen [::]:80;

    server_name gibblawyers.com www.gibblawyers.com;

    root /var/www/gibblawyers/current;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json image/svg+xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback - important for React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
EOF

echo "Step 3: Enabling site..."
ln -sf $NGINX_AVAILABLE $NGINX_ENABLED

echo "Step 4: Testing Nginx configuration..."
nginx -t

echo "Step 5: Reloading Nginx..."
systemctl reload nginx

echo ""
echo "=== Setup Complete! ==="
echo ""
echo "Web root: $WEB_ROOT/current"
echo "Nginx config: $NGINX_AVAILABLE"
echo ""
echo "Next steps:"
echo "1. Deploy your files to $WEB_ROOT/current"
echo "2. Set up SSL with: sudo certbot --nginx -d $DOMAIN -d $WWW_DOMAIN"
echo "3. Configure GitHub secrets for automated deployment"
echo ""
echo "GitHub Secrets needed:"
echo "  VPS_HOST: Your VPS IP address"
echo "  VPS_USERNAME: Your SSH username (e.g., ubuntu, root)"
echo "  VPS_SSH_KEY: Your private SSH key"
echo "  VPS_PORT: SSH port (usually 22)"
echo "  VPS_TARGET_PATH: $WEB_ROOT"
