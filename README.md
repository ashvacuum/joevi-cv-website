# 🎮 Joevi Adrian Oroceo - Professional CV Website

[![Deploy to Hostinger](https://github.com/ashvacuum/joevi-cv-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/ashvacuum/joevi-cv-website/actions/workflows/deploy.yml)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fadrianoroceo.com)](https://adrianoroceo.com)

A modern, interactive CV website showcasing game development expertise with stunning animations, responsive design, and **automated CI/CD deployment**.

## 🚀 Live Website

**Visit:** [adrianoroceo.com](https://adrianoroceo.com)

## ✨ Features

- **Modern Design**: Clean, tech-focused aesthetic perfect for game development professionals
- **Interactive Elements**: Smooth scrolling, hover effects, animated skill bars, and particle background
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Print-to-PDF**: Built-in functionality to download/print CV as PDF
- **Performance Optimized**: Fast loading with optimized code and assets
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Hostinger Compatible**: Ready for deployment on Hostinger hosting

## Sections

1. **Hero/Intro**: Eye-catching landing section with animated title and code snippet
2. **About**: Personal summary with animated statistics
3. **Experience**: Interactive timeline of work history
4. **Skills**: Animated skill bars for technical and soft skills
5. **Education**: Academic background and achievements
6. **Contact**: Professional contact information and social links

## Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Advanced styling with animations and responsive design
- **JavaScript**: Interactive features and smooth animations
- **Particles.js**: Animated particle background
- **Font Awesome**: Professional icons
- **Google Fonts**: Modern typography (Inter + JetBrains Mono)

## Game Development Theme

- Particle background effect simulating game environments
- Code snippet visualization in hero section
- Tech-focused color scheme (purple/blue gradient)
- Interactive hover effects and smooth animations
- Professional gaming industry aesthetic

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 6+)

## 🚀 Automated Deployment

This project includes **full CI/CD automation** with GitHub Actions:

### 🔄 Automatic Deployment
- **Push to main**: Automatically deploys to Hostinger
- **Quality checks**: Runs validation before deployment
- **Secure FTP**: Uses encrypted credentials
- **Real-time status**: Track deployment in GitHub Actions

### 📋 Quick Setup
1. **Fork/Clone this repository**
2. **Get Hostinger FTP credentials** from hPanel
3. **Add GitHub Secrets**:
   - `FTP_SERVER`: Your FTP server
   - `FTP_USERNAME`: Your FTP username
   - `FTP_PASSWORD`: Your FTP password
4. **Push code** → **Automatic deployment!** 🎉

📖 **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions

### 🛡️ Security Features
- ✅ Encrypted FTP credentials
- ✅ No sensitive data in repository
- ✅ Automated security headers
- ✅ SSL/HTTPS ready

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── .htaccess          # Apache configuration for optimization
├── robots.txt         # SEO robots file
├── manifest.json      # PWA manifest
└── README.md          # This documentation file
```

## Customization

### Colors
Main theme colors are defined in CSS variables. Update the gradient values to change the color scheme.

### Content
Update the content directly in `index.html` or modify the data structure in `script.js` for dynamic content loading.

### Animations
Modify animation timings and effects in `styles.css` and `script.js` to customize the user experience.

## Performance Features

- Optimized particle count for performance
- Lazy loading for future image additions
- Throttled scroll events
- Efficient CSS animations using transforms
- Compressed assets and optimized delivery

## Print/PDF Functionality

The website includes comprehensive print styles that automatically:
- Hide interactive elements (particles, navigation, buttons)
- Optimize layout for A4 printing
- Ensure proper page breaks
- Convert colors for print compatibility
- Maintain professional formatting

## Contact Information

**Joevi Adrian Oroceo**
- Email: dreygonz@gmail.com
- Phone: +63 999 380 5783
- Location: Mandaluyong City, Philippines
- Itch.io: ashvacuum.itch.io

## License

This project is created for personal portfolio use. Feel free to use as inspiration for your own CV website.

---

*Last updated: December 2024*