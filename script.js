// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#667eea'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#667eea',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Typing animation for hero title
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Animate skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }

                // Animate stats counter
                if (entry.target.classList.contains('about')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Skill bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // Stats counter animation
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            const duration = 2000;
            const increment = finalValue / (duration / 16);
            let currentValue = 0;

            function updateCounter() {
                currentValue += increment;
                if (currentValue < finalValue) {
                    stat.textContent = Math.ceil(currentValue) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = finalValue + '+';
                }
            }

            stat.textContent = '0+';
            setTimeout(updateCounter, 500);
        });
    }

    // Timeline item animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });

    // Skill items hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillBar = item.querySelector('.skill-progress');
            skillBar.style.transform = 'scaleX(1.02)';
        });

        item.addEventListener('mouseleave', () => {
            const skillBar = item.querySelector('.skill-progress');
            skillBar.style.transform = 'scaleX(1)';
        });
    });

    // Smooth parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroCard = document.querySelector('.hero-card');
        if (heroCard) {
            const rate = scrolled * -0.2;
            heroCard.style.transform = `translate3d(0, ${rate}px, 0) perspective(1000px) rotateY(-5deg) rotateX(5deg)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Animate hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    });

    // Add CSS for loading animation
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }

        body.loaded {
            opacity: 1;
            transform: translateY(0);
        }

        .hero-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1s ease 0.3s;
        }

        .timeline-item:nth-child(even) .timeline-content {
            transform: translateX(20px);
        }

        .timeline-item:nth-child(odd) .timeline-content {
            transform: translateX(-20px);
        }

        .timeline-item.animate .timeline-content {
            transform: translateX(0);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate {
            animation: fadeInUp 0.8s ease forwards;
        }

        .skill-progress {
            transition: all 0.3s ease;
        }

        /* Enhance print styles */
        @media print {
            .hero-content {
                opacity: 1 !important;
                transform: none !important;
            }

            .timeline-item {
                opacity: 1 !important;
                transform: none !important;
            }

            * {
                animation: none !important;
                transition: none !important;
            }
        }

        /* Additional mobile optimizations */
        @media (max-width: 768px) {
            .hero-card {
                transform: none !important;
            }

            .code-snippet {
                font-size: 0.8rem;
            }

            .timeline-content {
                transform: none !important;
            }

            /* Improve mobile interactions */
            .nav-link:active,
            .btn:active,
            .social-link:active,
            .social-link-large:active {
                transform: scale(0.98);
            }

            /* Mobile-friendly particle settings */
            #particles-js canvas {
                opacity: 0.3 !important;
            }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
            .skill-item:hover,
            .contact-item:hover,
            .timeline-content:hover {
                transform: none;
                background: rgba(102, 126, 234, 0.1);
            }

            .hero-card:hover {
                transform: none !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Contact form functionality (if you add a contact form later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Lazy loading for images (if you add images later)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add cursor trail effect
    let mouseTrail = [];
    const trailLength = 5;

    document.addEventListener('mousemove', (e) => {
        mouseTrail.push({ x: e.clientX, y: e.clientY });
        if (mouseTrail.length > trailLength) {
            mouseTrail.shift();
        }
    });

    // Performance optimization: throttle scroll events
    let ticking = false;
    function updateScrollEffects() {
        // Navbar scroll effect and parallax
        const scrolled = window.pageYOffset;

        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Parallax for hero (disabled on mobile for performance)
        const heroCard = document.querySelector('.hero-card');
        if (heroCard && window.innerWidth > 768) {
            const rate = scrolled * -0.1;
            heroCard.style.transform = `translate3d(0, ${rate}px, 0) perspective(1000px) rotateY(-5deg) rotateX(5deg)`;
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });

    // Mobile-specific optimizations
    const isMobile = window.innerWidth <= 768;
    const isTouch = 'ontouchstart' in window;

    if (isMobile) {
        // Reduce particle count for mobile performance
        if (typeof particlesJS !== 'undefined') {
            document.querySelector('#particles-js canvas').style.opacity = '0.3';
        }

        // Add mobile-specific event listeners
        document.addEventListener('touchstart', function() {}, { passive: true });

        // Prevent double-tap zoom on buttons
        const buttons = document.querySelectorAll('.btn, .social-link, .nav-link');
        buttons.forEach(button => {
            button.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.click();
            });
        });
    }

    // Orientation change handler
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            // Recalculate layout after orientation change
            window.scrollTo(0, window.scrollY);
        }, 100);
    });

    // Improve mobile touch scrolling
    if (isTouch) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }

    // Add enhanced accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        });
    }
});

// Service Worker for PWA capabilities (optional for Hostinger)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}

// Export functions for potential use in other scripts
window.CVWebsite = {
    animateSkillBars: () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    },

    scrollToSection: (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },

    downloadCV: () => {
        window.print();
    }
};