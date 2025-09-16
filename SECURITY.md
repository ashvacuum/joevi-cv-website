# 🔒 Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ Yes             |
| < 1.0   | ❌ No              |

## Security Measures

### 🛡️ Current Security Features

- **HTTPS Enforcement**: Redirects HTTP to HTTPS
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Content Security**: No inline scripts or styles
- **FTP Security**: Encrypted credentials via GitHub Secrets
- **No Sensitive Data**: All secrets stored securely

### 🔐 FTP & Deployment Security

- **Encrypted Credentials**: All FTP credentials stored in GitHub Secrets
- **Secure Transfer**: Files transferred via secure FTP connection
- **Access Control**: Limited file permissions and access
- **No Hardcoded Secrets**: Zero sensitive data in source code

### 🌐 Website Security

- **No User Input**: Static website with no form processing
- **External CDN**: Uses trusted CDNs for fonts and libraries
- **Minimal Attack Surface**: Pure HTML/CSS/JS with no backend
- **Regular Updates**: Dependencies kept up to date

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

### 📧 Contact Information
- **Email**: dreygonz@gmail.com
- **Subject**: `[SECURITY] CV Website Vulnerability Report`
- **Response Time**: Within 48 hours

### 📋 What to Include

1. **Description**: Clear description of the vulnerability
2. **Steps to Reproduce**: Detailed reproduction steps
3. **Impact**: Potential security impact
4. **Screenshots/Evidence**: If applicable
5. **Suggested Fix**: If you have recommendations

### 🕐 Response Timeline

- **Initial Response**: Within 48 hours
- **Assessment**: Within 1 week
- **Fix Timeline**: Depends on severity
  - **Critical**: Within 24 hours
  - **High**: Within 3 days
  - **Medium**: Within 1 week
  - **Low**: Within 2 weeks

### 🏆 Recognition

Security researchers who responsibly disclose vulnerabilities will be:
- Acknowledged in the repository (if desired)
- Credited in release notes
- Given special recognition for helping improve security

## 🔒 Security Best Practices for Contributors

### 🚫 Never Commit
- Passwords or API keys
- FTP credentials
- Personal information
- Environment variables with sensitive data

### ✅ Always Use
- GitHub Secrets for sensitive data
- Strong, unique passwords
- Two-factor authentication
- Secure FTP connections

### 📝 Code Review
- All changes reviewed before merging
- Security implications considered
- Third-party dependencies vetted

## 🛠️ Security Tools & Monitoring

### Automated Security
- **GitHub Dependabot**: Monitors for vulnerable dependencies
- **GitHub Security Advisories**: Tracks known vulnerabilities
- **Automated Scanning**: Regular security scans via GitHub Actions

### Manual Security Reviews
- **Code Reviews**: All pull requests reviewed for security
- **Dependency Audits**: Regular review of third-party libraries
- **Configuration Reviews**: Security headers and settings verified

## 📚 Additional Resources

- [OWASP Web Security](https://owasp.org/www-project-web-security-testing-guide/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Hostinger Security Guide](https://support.hostinger.com/en/articles/1583261-security-best-practices)

---

**Remember**: Security is a shared responsibility. If you see something, say something! 🔐