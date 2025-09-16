# 🚀 CI/CD Deployment Guide

This guide will help you set up automatic deployment from GitHub to your Hostinger hosting account.

## 🔧 Prerequisites

1. **GitHub Account**: Create a repository for your CV website
2. **Hostinger Account**: With FTP access enabled
3. **Domain**: Your Hostinger domain/subdomain

## 📋 Setup Instructions

### 1. Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Modern CV website for Joevi Adrian Oroceo"

# Create repository on GitHub and add remote
git remote add origin https://github.com/ashvacuum/joevi-cv-website.git

# Push to GitHub
git push -u origin main
```

### 2. Get Hostinger FTP Credentials

1. Login to your **Hostinger hPanel**
2. Go to **Files** → **File Manager**
3. Click on **FTP Accounts**
4. Note down these credentials:
   - **FTP Server**: Usually `ftp.yourdomainname.com` or an IP address
   - **FTP Username**: Your FTP username
   - **FTP Password**: Your FTP password

### 3. Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `FTP_SERVER` | Your FTP server address | `ftp.adrianoroceo.com` |
| `FTP_USERNAME` | Your FTP username | `u123456789.adrianoroceo` |
| `FTP_PASSWORD` | Your FTP password | `your_secure_password` |

### 4. Test the Deployment

1. Make any small change to your website (e.g., update a color in CSS)
2. Commit and push the changes:
```bash
git add .
git commit -m "Test deployment: Minor styling update"
git push origin main
```

3. Go to **Actions** tab in your GitHub repository
4. Watch the deployment process in real-time
5. Your website should automatically update on Hostinger!

## 🔄 How It Works

### Automatic Deployment Triggers
- **Push to main/master**: Automatically deploys to production
- **Pull Request**: Runs tests but doesn't deploy (for collaboration)

### Deployment Process
1. **Code Checkout**: Gets latest code from GitHub
2. **Quality Checks**: Runs linting and validation
3. **FTP Upload**: Securely uploads files to Hostinger
4. **Verification**: Confirms deployment success

### Files That Get Deployed
✅ **Included**:
- `index.html`
- `styles.css`
- `script.js`
- `.htaccess`
- `manifest.json`
- `robots.txt`

❌ **Excluded**:
- `.git/` directory
- `.github/` workflows
- `README.md`
- `package.json`
- Development files

## 🛡️ Security Best Practices

### FTP Credentials Security
- ✅ Use GitHub Secrets (never commit credentials)
- ✅ Use strong, unique FTP passwords
- ✅ Enable 2FA on your Hostinger account
- ✅ Regularly rotate FTP passwords

### Repository Security
- ✅ Never commit sensitive information
- ✅ Use `.gitignore` to exclude private files
- ✅ Review all commits before pushing

## 🐛 Troubleshooting

### Common Issues

#### 1. FTP Connection Failed
```
Error: FTP connection failed
```
**Solution**:
- Verify FTP credentials in GitHub Secrets
- Check if FTP is enabled in Hostinger hPanel
- Try using IP address instead of domain name

#### 2. Permission Denied
```
Error: Permission denied
```
**Solution**:
- Ensure FTP user has write permissions to `/public_html/`
- Check file permissions in Hostinger File Manager

#### 3. Files Not Updating
```
Deployment successful but changes not visible
```
**Solution**:
- Clear browser cache (Ctrl+F5)
- Check if files were uploaded to correct directory
- Verify `.htaccess` file is present

### Getting Help

1. **GitHub Actions Logs**: Check the Actions tab for detailed error messages
2. **Hostinger Support**: Contact support for FTP/hosting issues
3. **Repository Issues**: Create an issue in your GitHub repository

## 📊 Deployment Status

After each deployment, you'll see:

✅ **Success**: `🎉 Deployment successful! Your CV is now live.`
❌ **Failed**: `❌ Deployment failed. Check the logs above for details.`

## 🔄 Manual Deployment (Backup Method)

If automatic deployment fails, you can still deploy manually:

```bash
# Using git and manual FTP upload
git pull origin main

# Then upload files via Hostinger File Manager or FTP client
```

## 🚀 Advanced Features (Future)

- **Branch-based deployments**: Deploy staging from `dev` branch
- **Performance monitoring**: Add Lighthouse CI
- **Asset optimization**: Minify CSS/JS automatically
- **Cache busting**: Add version hashes to assets

---

## 🎯 Next Steps

1. **Test the deployment** with a small change
2. **Set up monitoring** to track your website's performance
3. **Add more features** like contact form backend
4. **Optimize SEO** with meta tags and structured data

Your CV website is now fully automated! Every time you push code to GitHub, it will automatically deploy to Hostinger. 🎉