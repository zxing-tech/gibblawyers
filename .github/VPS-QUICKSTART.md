# VPS Deployment - Quick Start Guide

Panduan cepat untuk setup deployment ke VPS menggunakan GitHub Actions.

## 📋 Prerequisites

- VPS dengan Ubuntu/Debian
- Domain sudah pointing ke VPS
- Akses SSH ke VPS
- Repository di GitHub

## 🚀 Setup dalam 7 Langkah

### 1️⃣ Setup VPS (5 menit)

```bash
# SSH ke VPS
ssh root@your-vps-ip

# Update & install Nginx
apt update && apt upgrade -y
apt install -y nginx

# Download & jalankan setup script
curl -o /tmp/vps-setup.sh https://raw.githubusercontent.com/YOUR_USERNAME/gibblawyers/main/.github/vps-setup.sh
chmod +x /tmp/vps-setup.sh
sudo /tmp/vps-setup.sh
```

### 2️⃣ Enable Password Authentication di VPS (2 menit)

```bash
# SSH ke VPS
ssh root@your-vps-ip

# Edit SSH config
sudo nano /etc/ssh/sshd_config

# Pastikan baris ini ada dan tidak di-comment:
PasswordAuthentication yes

# Save (Ctrl+X, Y, Enter)

# Restart SSH
sudo systemctl restart sshd
```

### 3️⃣ Test SSH Login dengan Password (1 menit)

```bash
# Di komputer lokal, test login
ssh root@your-vps-ip
# Masukkan password

# Jika berhasil, keluar
exit
```

### 4️⃣ Setup GitHub Secrets (3 menit)

Pergi ke: **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**

Tambahkan 5 secrets ini:

| Secret Name | Value | Contoh |
|-------------|-------|--------|
| `VPS_HOST` | IP atau domain VPS | `123.45.67.89` |
| `VPS_USERNAME` | Username SSH | `root` atau `ubuntu` |
| `VPS_PASSWORD` | Password SSH user | Password VPS Anda |
| `VPS_PORT` | Port SSH | `22` |
| `VPS_TARGET_PATH` | Path deployment | `/var/www/gibblawyers` |

⚠️ **Security Tips:**
- Gunakan password yang kuat (16+ karakter)
- Kombinasi huruf besar/kecil, angka, simbol
- Jangan share password di tempat lain
- Pertimbangkan ganti ke SSH key untuk security lebih baik

### 5️⃣ Setup DNS (5 menit)

Di DNS provider domain Anda, tambahkan:

```
Type: A
Name: @
Value: IP-VPS-ANDA
TTL: 3600

Type: A
Name: www
Value: IP-VPS-ANDA
TTL: 3600
```

Tunggu propagasi DNS (5-30 menit).

### 6️⃣ Test Deployment (2 menit)

```bash
# Di komputer lokal, di folder project
git add .
git commit -m "test: VPS deployment"
git push origin main

# Lihat progress di GitHub Actions tab
```

### 7️⃣ Setup SSL/HTTPS (3 menit)

Setelah deployment pertama berhasil:

```bash
# SSH ke VPS
ssh root@your-vps-ip

# Install Certbot
apt install -y certbot python3-certbot-nginx

# Setup SSL (ganti dengan email Anda)
certbot --nginx -d gibblawyers.com -d www.gibblawyers.com --email admin@gibblawyers.com --agree-tos --non-interactive --redirect

# Test auto-renewal
certbot renew --dry-run
```

## ✅ Selesai!

Website Anda sekarang:
- ✅ Auto-deploy saat push ke `main`
- ✅ HTTPS enabled dengan Let's Encrypt
- ✅ Backup otomatis setiap deployment
- ✅ Rollback mudah jika ada masalah

## 🔧 Troubleshooting

### Deploy gagal: "Permission denied"
```bash
# Di VPS, pastikan folder punya permission yang benar
chown -R www-data:www-data /var/www/gibblawyers
chmod -R 755 /var/www/gibblawyers
```

### Website tidak bisa diakses
```bash
# Cek Nginx status
systemctl status nginx

# Cek Nginx config
nginx -t

# Restart Nginx
systemctl restart nginx
```

### SSH connection failed di GitHub Actions
```bash
# Test SSH connection manual dengan password
ssh root@your-vps-ip

# Pastikan password authentication enabled
sudo nano /etc/ssh/sshd_config
# PasswordAuthentication yes

# Restart SSH service
sudo systemctl restart sshd

# Cek firewall VPS
ufw allow 22/tcp
ufw status
```

### SSL certificate gagal
```bash
# Pastikan domain sudah pointing ke VPS
ping gibblawyers.com
ping www.gibblawyers.com

# Pastikan port 80 dan 443 terbuka
ufw allow 80/tcp
ufw allow 443/tcp
```

## 🔄 Rollback Deployment

Jika ada masalah dengan deployment terbaru:

```bash
# SSH ke VPS
ssh root@your-vps-ip

# Rollback ke versi sebelumnya
cd /var/www/gibblawyers
rm -rf current
mv backup current
systemctl reload nginx
```

## 📚 Next Steps

- [ ] Setup monitoring (uptime, performance)
- [ ] Configure caching headers
- [ ] Setup backup automation
- [ ] Add CDN (Cloudflare)
- [ ] Setup staging environment

## 📖 Dokumentasi Lengkap

Lihat `SETUP.md` untuk dokumentasi detail dan advanced configuration.

## 💡 Tips

1. **Backup regular**: Backup VPS secara berkala
2. **Monitor logs**: `tail -f /var/log/nginx/error.log`
3. **Update sistem**: `apt update && apt upgrade` setiap minggu
4. **Firewall**: Setup UFW untuk keamanan
5. **Fail2ban**: Install untuk proteksi brute force

## 🆘 Butuh Bantuan?

1. Cek GitHub Actions logs: **Actions tab → Failed workflow → View logs**
2. Cek Nginx logs: `tail -f /var/log/nginx/error.log`
3. Cek system logs: `journalctl -xe`

---

**Estimasi total waktu setup: 20-30 menit** ⏱️
