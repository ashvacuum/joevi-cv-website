document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for gaming background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 40 },
                color: { value: ['#7A4F9A', '#E91E63', '#2196F3'] },
                shape: {
                    type: 'circle',
                    stroke: { width: 1, color: '#7A4F9A' }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 1
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#7A4F9A',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: { opacity: 0.5 }
                    },
                    push: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    }

    // Gaming Navigation functionality
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.gaming-hamburger');
    const navMenu = document.querySelector('.gaming-nav-menu');

    // Navbar scroll effect with gaming theme
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, rgba(5, 5, 5, 0.95) 0%, rgba(27, 40, 56, 0.95) 100%)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, var(--gog-darker) 0%, var(--steam-blue) 100%)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });

    // Mobile menu toggle with gaming animation
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Add gaming-style transition
            if (navMenu.classList.contains('active')) {
                navMenu.style.transform = 'translateY(0)';
                navMenu.style.opacity = '1';
            } else {
                navMenu.style.transform = 'translateY(-20px)';
                navMenu.style.opacity = '0';
            }
        });
    }

    // Gaming Filter System - Steam Style
    const filterTags = document.querySelectorAll('.filter-tag');
    const gameCards = document.querySelectorAll('.game-card');
    const viewBtns = document.querySelectorAll('.view-btn');
    const gamesGrid = document.getElementById('gamesGrid');

    // Filter functionality
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove active class from all tags with animation
            filterTags.forEach(t => {
                t.classList.remove('active');
                t.style.transform = 'translateY(0)';
            });

            // Add active class to clicked tag with gaming effect
            tag.classList.add('active');
            tag.style.transform = 'translateY(-3px)';

            const filterValue = tag.getAttribute('data-filter');

            // Animate cards out first
            gameCards.forEach(card => {
                card.style.transform = 'translateY(20px) scale(0.95)';
                card.style.opacity = '0';
            });

            // Filter and animate cards back in
            setTimeout(() => {
                gameCards.forEach((card, index) => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.transform = 'translateY(0) scale(1)';
                            card.style.opacity = '1';
                            card.classList.add('animate');
                        }, index * 100); // Staggered animation
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('animate');
                    }
                });
            }, 300);
        });
    });

    // View switcher (Grid/List) - Steam Style
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const viewType = btn.getAttribute('data-view');

            if (viewType === 'list') {
                gamesGrid.style.gridTemplateColumns = '1fr';
                gamesGrid.style.gap = '1rem';
                gameCards.forEach(card => {
                    card.style.display = 'flex';
                    card.style.flexDirection = 'row';
                    card.style.height = '200px';

                    const gameImage = card.querySelector('.game-image');
                    const gameInfo = card.querySelector('.game-info');
                    if (gameImage && gameInfo) {
                        gameImage.style.width = '200px';
                        gameImage.style.height = '100%';
                        gameInfo.style.flex = '1';
                        gameInfo.style.display = 'flex';
                        gameInfo.style.flexDirection = 'column';
                        gameInfo.style.justifyContent = 'space-between';
                    }
                });
            } else {
                gamesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(380px, 1fr))';
                gamesGrid.style.gap = '2rem';
                gameCards.forEach(card => {
                    card.style.display = 'block';
                    card.style.flexDirection = 'column';
                    card.style.height = 'auto';

                    const gameImage = card.querySelector('.game-image');
                    const gameInfo = card.querySelector('.game-info');
                    if (gameImage && gameInfo) {
                        gameImage.style.width = '100%';
                        gameImage.style.height = '200px';
                        gameInfo.style.flex = 'none';
                        gameInfo.style.display = 'block';
                    }
                });
            }
        });
    });

    // Game Card Hover Effects - Gaming Style
    gameCards.forEach(card => {
        const gameImage = card.querySelector('.game-image img');
        const playBtn = card.querySelector('.play-btn');

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.borderColor = '#E91E63';
            card.style.boxShadow = '0 15px 40px rgba(233, 30, 99, 0.3)';

            if (gameImage) {
                gameImage.style.transform = 'scale(1.1)';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.borderColor = 'rgba(122, 79, 154, 0.2)';
            card.style.boxShadow = card.classList.contains('featured')
                ? '0 5px 25px rgba(122, 79, 154, 0.2)'
                : 'none';

            if (gameImage) {
                gameImage.style.transform = 'scale(1)';
            }
        });

        // Play button gaming effects
        if (playBtn) {
            playBtn.addEventListener('mouseenter', () => {
                playBtn.style.transform = 'scale(1.1)';
                playBtn.style.boxShadow = '0 8px 25px rgba(122, 79, 154, 0.5)';
            });

            playBtn.addEventListener('mouseleave', () => {
                playBtn.style.transform = 'scale(1)';
                playBtn.style.boxShadow = 'none';
            });
        }
    });

    // Animate game cards on scroll - Gaming Style
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Staggered animation

                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    gameCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Gaming Stats Animation - GOG Style
    const animateGamingStats = () => {
        const statNumbers = document.querySelectorAll('.stat-card .stat-number');
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            const duration = 2500;
            const increment = finalValue / (duration / 16);
            let currentValue = 0;

            const updateCounter = () => {
                currentValue += increment;
                if (currentValue < finalValue) {
                    stat.textContent = Math.ceil(currentValue) + (stat.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '');
                }
            };

            stat.textContent = '0' + (stat.textContent.includes('+') ? '+' : '');
            setTimeout(updateCounter, 800);
        });
    };

    // Trigger stats animation when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateGamingStats();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.gaming-hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gaming-style loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Add entrance animation to hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';

            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 500);
        }
    });

    // Gaming platform easter eggs
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Activate gaming mode!
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Performance optimization - Lazy load game images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.game-image img').forEach(img => {
        imageObserver.observe(img);
    });
});

// Export gaming functions for potential use
window.GamingPortfolio = {
    filterGames: (category) => {
        const btn = document.querySelector(`[data-filter="${category}"]`);
        if (btn) btn.click();
    },

    switchView: (viewType) => {
        const btn = document.querySelector(`[data-view="${viewType}"]`);
        if (btn) btn.click();
    },

    scrollToLibrary: () => {
        const librarySection = document.querySelector('.game-library');
        if (librarySection) {
            librarySection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};