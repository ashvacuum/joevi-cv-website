# Manual Deployment Guide

## Simplified Static Website Structure

This is now a simple, single-file static website with zero external dependencies.

### Files Deployed Automatically

When you push to `main`, these files are deployed via GitHub Actions:

1. **index.html** - Single-file CV website (self-contained, ~40KB)
2. **robots.txt** - SEO configuration
3. **manifest.json** - PWA manifest
4. **.htaccess** - Server configuration

### What's New

**Before (Old version):**
- Multiple files: index.html (27KB) + portfolio.html (24KB) + styles.css (48KB) + script.js (18KB) + portfolio.js (14KB)
- External dependencies: Google Fonts, Font Awesome, particles.js
- Total size: 130KB+ with dependencies
- Slow loading due to multiple HTTP requests

**After (New version):**
- Single file: index.html (40KB)
- Zero external dependencies
- All CSS inline, minimal JavaScript
- Fast loading, instant rendering

### FTP Connection Details (Manual Upload)
- Server: `46.202.138.245`
- Username: Your Hostinger FTP username
- Password: Your Hostinger FTP password
- Upload to: `/public_html/` directory

### Automatic Deployment
Simply push to the `main` branch and GitHub Actions will automatically deploy via FTP.

```bash
git add index.html
git commit -m "Update CV website"
git push
```

### Backup Files
Old website files are backed up locally as:
- `index_old.html`
- `portfolio_old.html`
- `styles_old.css`
- `script_old.js`
- `portfolio_old.js`

### Troubleshooting
- Clear browser cache if changes don't appear: Ctrl+Shift+R (Chrome/Firefox)
- Check file permissions are set to 644
- Ensure files are uploaded to correct `/public_html/` directory