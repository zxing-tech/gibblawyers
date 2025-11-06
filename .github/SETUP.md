# GitHub Actions Setup Guide

This guide explains how to configure GitHub Actions workflows for the Gibb Lawyers project.

## Required GitHub Secrets

To enable all workflows, you need to configure the following secrets in your GitHub repository:

### Repository Settings > Secrets and Variables > Actions

#### For VPS Deployment

1. **VPS_HOST**
   - Your VPS IP address or domain
   - Example: `123.456.789.0` or `vps.example.com`

2. **VPS_USERNAME**
   - SSH username for your VPS
   - Example: `ubuntu`, `root`, or your custom user

3. **VPS_PASSWORD**
   - SSH password for your VPS user
   - ⚠️ **Security Warning**: Password authentication is less secure than SSH keys
   - Recommendation: Use strong password (16+ characters with numbers, symbols)

4. **VPS_PORT**
   - SSH port (usually `22`)
   - Use custom port if you changed default SSH port

5. **VPS_TARGET_PATH**
   - Full path where files should be deployed
   - Example: `/var/www/gibblawyers`

#### For Supabase Deployment

6. **SUPABASE_ACCESS_TOKEN**
   - Get from: https://app.supabase.com/account/tokens
   - Click "Generate new token"
   - Copy the token value
   - Add as repository secret

7. **SUPABASE_PROJECT_REF**
   - Value: `fcneqcsiixednrukbpxe`
   - This is your Supabase project reference ID
   - Add as repository secret

## Workflow Overview

### Single Unified Workflow (`main.yml`)

One workflow file with 3 jobs that run conditionally:

#### Job 1: Build (Always runs)
**Trigger**: Every push or PR to `main` or `develop`

**What it does**:
- Runs ESLint to check code quality
- Builds the project with Vite
- Uploads build artifacts

**No setup required** - works out of the box

#### Job 2: Deploy to VPS (Only on main branch)
**Trigger**: Push to `main` branch only

**What it does**:
- Builds production bundle
- Creates compressed archive (tar.gz)
- Uploads archive to VPS via native SCP command
- Extracts files on VPS
- Backs up previous deployment
- Sets correct permissions

**Security features**:
- Uses native SSH/SCP with sshpass (no third-party actions)
- Password passed via environment variable (not visible in logs)
- Uses SSH known_hosts verification

⚠️ **Security Note**: Password authentication is used. For better security, consider using SSH keys instead.

**Setup required**:
1. Run VPS setup script on your server (see VPS Setup Guide below)
2. Add all VPS secrets to GitHub (see Required Secrets above)
3. Test SSH connection works

#### Job 3: Deploy Supabase (Only when supabase/ changes)
**Trigger**:
- Push to `main` with changes in `supabase/**` files
- Manual dispatch

**What it does**:
- Deploys Supabase Edge Functions
- Applies database migrations

**Setup required**:
- Add `SUPABASE_ACCESS_TOKEN` secret (see above)
- Add `SUPABASE_PROJECT_REF` secret (see above)

## How to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** tab
3. In left sidebar, click **Secrets and variables** > **Actions**
4. Click **New repository secret**
5. Enter secret name and value
6. Click **Add secret**

## Testing Workflows

### Test Build Job
```bash
# Make any change and push to main or develop
git add .
git commit -m "test: trigger build workflow"
git push origin main
# Build job will always run
```

### Test Deploy Job
```bash
# Push to main branch
git push origin main
# Deploy job will run automatically after build succeeds
```

### Test Supabase Job
```bash
# Make changes to Supabase files
# Edit a file in supabase/ directory
git add supabase/
git commit -m "feat: update edge function"
git push origin main
# Supabase job will run if supabase/ files changed

# Or trigger manually from GitHub:
# Actions tab > CI/CD Pipeline > Run workflow
```

## Monitoring Workflows

1. Go to **Actions** tab in your repository
2. See all workflow runs and their status
3. Click on any run to see detailed logs
4. Green checkmark = success
5. Red X = failure (click to see error details)

## Troubleshooting

### CI Workflow Fails
- Check ESLint errors in the logs
- Fix linting issues locally: `npm run lint`
- Fix build issues locally: `npm run build`

### Deploy to VPS Workflow Fails
- Verify all VPS secrets are correctly set
- Test SSH connection manually: `ssh -i ~/.ssh/key user@host`
- Check VPS has enough disk space
- Verify target path exists and has correct permissions
- Check VPS firewall allows SSH connection

### Supabase Workflow Fails
- Verify secrets are correctly set
- Check Supabase access token is valid
- Ensure you have permissions on Supabase project
- Test locally: `supabase functions deploy send-contact-email`

### Dependabot Issues
- PRs may conflict with manual updates
- Review and merge or close PRs as needed
- Check for breaking changes in updates

## Disabling Workflows

To temporarily disable a workflow:

1. Go to **Actions** tab
2. Click on the workflow name in left sidebar
3. Click the **⋯** (three dots) menu
4. Select **Disable workflow**

Or delete/rename the workflow file to prevent it from running.

## Best Practices

1. **Always test locally first** before pushing
2. **Review Dependabot PRs** before merging
3. **Monitor workflow runs** after pushing changes
4. **Keep secrets secure** - never commit them to the repository
5. **Use branch protection rules** to require CI passing before merging

## VPS Setup Guide

### Initial VPS Setup

1. **Login to your VPS**
   ```bash
   ssh root@your-vps-ip
   ```

2. **Update system**
   ```bash
   apt update && apt upgrade -y
   ```

3. **Install Nginx**
   ```bash
   apt install -y nginx
   ```

4. **Run the VPS setup script**
   ```bash
   # Copy vps-setup.sh to your VPS
   scp .github/vps-setup.sh root@your-vps-ip:/tmp/

   # SSH to VPS and run it
   ssh root@your-vps-ip
   chmod +x /tmp/vps-setup.sh
   sudo /tmp/vps-setup.sh
   ```

5. **Enable password authentication on VPS** (if not already enabled)
   ```bash
   # SSH to VPS
   ssh root@your-vps-ip

   # Edit SSH config
   sudo nano /etc/ssh/sshd_config

   # Ensure these lines are set:
   # PasswordAuthentication yes
   # PermitRootLogin yes  # or use non-root user

   # Restart SSH service
   sudo systemctl restart sshd
   ```

6. **Configure DNS**
   Point your domain to VPS:
   ```
   Type: A
   Name: @
   Value: Your-VPS-IP

   Type: A
   Name: www
   Value: Your-VPS-IP
   ```

7. **Set up SSL (after first deployment)**
   ```bash
   # SSH to VPS
   ssh root@your-vps-ip

   # Run SSL setup script
   chmod +x /tmp/ssl-setup.sh
   sudo /tmp/ssl-setup.sh
   ```

### VPS Directory Structure

After setup, your VPS will have:
```
/var/www/gibblawyers/
├── current/          # Active deployment
├── backup/           # Previous deployment (for rollback)
└── dist/             # Latest uploaded files (moved to current)
```

### Manual Deployment (if needed)

```bash
# Build locally
npm run build

# Upload to VPS
scp -r dist/* user@vps-ip:/var/www/gibblawyers/current/

# Reload Nginx
ssh user@vps-ip "sudo systemctl reload nginx"
```

### Rollback to Previous Version

```bash
ssh root@your-vps-ip

cd /var/www/gibblawyers
rm -rf current
mv backup current
sudo systemctl reload nginx
```

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Supabase CLI Documentation](https://supabase.com/docs/reference/cli)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
