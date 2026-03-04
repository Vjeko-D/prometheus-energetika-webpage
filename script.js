// Prometheus Energetika - Interactive Landing Page
// Modern JavaScript with energy-themed animations and interactions

const TRANSLATIONS = {
    hr: {
        'nav.home': 'Početna',
        'nav.services': 'Usluge',
        'nav.contact': 'Kontakt',
        'hero.title.1': 'Oblikovanje budućnosti',
        'hero.title.2': 'održivih energetskih',
        'hero.title.3': 'sustava',
        'hero.button.services': 'Naše usluge',
        'hero.button.contact': 'Kontaktirajte nas',
        'services.title': 'Naše djelatnosti',
        'services.subtitle': '',
        'services.energy': 'Energetika',
        'services.climate': 'Klimatske promjene',
        'services.environment': 'Zaštita okoliša',
        'services.efficiency': 'Energetska učinkovitost',
        'services.renewable': 'Obnovljivi izvori energije',
        'services.planning': 'Energetsko planiranje',
        'services.markets': 'Energetska tržišta',
        'services.mission.title': 'Misija',
        'services.mission.p1': 'Globalni prijelaz na dekarboniziranu energiju ubrzava se kako troškovi obnovljivih izvora padaju, a tržišta fosilnih goriva ostaju nestabilna. Energija vjetra i sunca obilna je, no njezina integracija u postojeće sustave zahtijeva pametniju infrastrukturu, snažno energetsko planiranje i predanost zaštiti okoliša.',
        'services.mission.p2': 'U tropskim regijama solarna energija uz baterije može pokriti većinu potražnje, dok je dalje od ekvatora zimi ključna energija vjetra. Danas elektroenergetske mreže mogu relativno lako integrirati oko 20% vjetra i 30% kombiniranog udjela vjetra i sunca, uz uvjet poboljšanja prijenosnih kapaciteta, upravljanja energijom i fleksibilnosti sustava. Veći udjeli zahtijevaju napredna energetska tržišta, upravljanje potrošnjom i povezivanje sektora električne energije, grijanja, hlađenja, prometa, vode i industrije.',
        'services.mission.p3': 'Ključan korak je povezivanje elektroenergetskog sustava s daljinskim grijanjem i hlađenjem, koji omogućuju veliko toplinsko skladištenje i vrlo fleksibilnu potražnju. Dizalice topline elektrificiraju kućanstva, ali trebaju upravljanje putem pametnih mreža kako bi sudjelovale u upravljanju potrošnjom. Elektrificirani promet, automobili, dostavna vozila i gradski autobusi, povećava energetsku učinkovitost te omogućuje fleksibilno punjenje i distribuirano skladištenje.',
        'services.mission.p4': 'Pametna elektrifikacija zgrada, mobilnosti i industrije može povećati udio obnovljivih izvora iznad 80%. Preostali sektori koje je teško dekarbonizirati, dugolinijski promet, visokotemperaturna industrija, sirovine i pričuvna proizvodnja, oslanjat će se na otpadnu biomasu, obnovljivi vodik, e-amonijak, e-metanol i druga sintetska goriva. CO₂ iz biomase omogućuje kružnu proizvodnju e-goriva i podupire razvoj gospodarstva temeljenog na metanolu.',
        'services.mission.p5': 'Promicanje energetske učinkovitosti, robusnog upravljanja energijom i okolišno odgovornog projektiranja sustava ključno je za postizanje potpuno održive i otporne energetske budućnosti.',
        'contact.title': 'Kontaktirajte nas',
        'contact.company': 'Prometheus Energetika d.o.o.',
        'contact.address': 'Tomićeva 7, Zagreb',
        'contact.vat': 'OIB: 32604064279',
        'contact.phone': 'Telefon',
        'contact.email': 'Email',
        'form.name': 'Vaše ime',
        'form.email': 'Email adresa',
        'form.phone': 'Broj telefona',
        'form.message': 'Vaša poruka',
        'form.submit': 'Pošaljite poruku',
        'footer.company': 'Prometheus Energetika d.o.o.',
        'footer.rights': 'Sva prava pridržana.'
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'hero.title.1': 'Shaping the Future',
        'hero.title.2': 'of Sustainable',
        'hero.title.3': 'Energy Systems',
        'hero.button.services': 'Our services',
        'hero.button.contact': 'Contact us',
        'services.title': 'What we do',
        'services.subtitle': '',
        'services.energy': 'Energy management',
        'services.climate': 'Climate change',
        'services.environment': 'Environmental protection',
        'services.efficiency': 'Energy efficiency',
        'services.renewable': 'Renewable energy sources',
        'services.planning': 'Energy planning',
        'services.markets': 'Energy markets',
        'services.mission.title': 'Mission',
        'services.mission.p1': 'The global shift to decarbonized energy is accelerating as renewable costs fall and fossil fuel markets remain volatile. Wind and solar energy are abundant, but integrating them into existing systems requires smarter infrastructure, strong energy planning, and a commitment to environmental protection.',
        'services.mission.p2': 'In tropical regions, solar plus batteries can cover most demand, while farther from the Equator, winter wind power becomes essential. Today, grids can easily integrate about 20% wind and 30% combined wind–solar, provided transmission capacity, energy management, and system flexibility improve. Higher shares require advanced energy markets, demand response, and sector coupling across electricity, heating, cooling, transport, water, and industry.',
        'services.mission.p3': 'A key step is linking power with district heating and cooling, which offer large thermal storage and highly flexible demand. Heat pumps electrify individual homes but need smart-grid control to participate in demand response. Electrified transport, cars, delivery fleets, and city buses, boosts energy efficiency and enables flexible charging and distributed storage.',
        'services.mission.p4': 'Smart electrification across buildings, mobility, and industry can raise renewable penetration above 80%. The remaining hard-to-abate sectors, long-distance transport, high-temperature industry, feedstocks, and backup generation, will rely on waste biomass, renewable hydrogen, e-ammonia, e-methanol, and other synthetic fuels. Biomass-derived CO₂ enables circular production of e-fuels, supporting the emerging methanol economy.',
        'services.mission.p5': 'Promoting energy efficiency, robust energy management, and environmentally responsible system design is essential to achieving a fully sustainable, resilient energy future.',
        'contact.title': 'Contact us',
        'contact.company': 'Prometheus Energetika d.o.o.',
        'contact.address': 'Tomićeva 7, Zagreb',
        'contact.vat': 'VAT: HR32604064279',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'form.name': 'Your name',
        'form.email': 'Email address',
        'form.phone': 'Phone number',
        'form.message': 'Your message',
        'form.submit': 'Send message',
        'footer.company': 'Prometheus Energetika d.o.o.',
        'footer.rights': 'All rights reserved'
    }
};

class PrometheusApp {
    constructor() {
        this.scrollOffset = 100;
        this.init();
        this.setupEventListeners();
        this.createEnergyParticles();
        this.animateCounters();
        this.setupScrollAnimations();
    }

    init() {
        // Initialize mobile menu
        this.mobileMenuOpen = false;

        // Navbar logo switching state
        this.mobileBreakpoint = 768;
        this.navbarHideThreshold = 200;
        this.faviconSwitchOffset = 30;
        this.faviconSwitchThreshold = this.navbarHideThreshold - this.faviconSwitchOffset;
        this.hasPassedFirstNavbarHide = window.scrollY > this.navbarHideThreshold;

        // Initialize scroll position and direction
        this.lastScrollY = window.scrollY;
        this.scrollingUp = false;

        // Navbar show on mouse at top (trigger zone height in px)
        this.navbarTriggerZone = 80;
        this.mouseInNavbarZone = false;

        // Initialize intersection observer for animations
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);

        // Apply saved language
        const savedLang = localStorage.getItem('prometheus_lang') || 'hr';
        this.currentLang = savedLang;
        this.applyLanguage(savedLang);
        this.syncLangDropdown(savedLang);

        this.updateActiveNavLink();
        this.updateNavbarPreHideShrink(window.scrollY);
        this.updateNavbarLogo();
    }

    syncLangDropdown(lang) {
        document.querySelectorAll('.lang-option').forEach(o => {
            o.classList.toggle('active', o.getAttribute('data-lang') === lang);
        });
        const currentLabel = document.querySelector('.lang-current');
        if (currentLabel) currentLabel.textContent = lang.toUpperCase();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                const target = href === '#services'
                    ? document.getElementById('services-heading') || document.querySelector(href)
                    : href === '#contact'
                        ? document.getElementById('contact-heading') || document.querySelector(href)
                        : document.querySelector(href);
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => this.handleScroll());

        // Update logo when crossing responsive breakpoint
        window.addEventListener('resize', () => {
            this.updateNavbarPreHideShrink(window.scrollY);
            this.updateNavbarLogo();
        });

        // Navbar appear when mouse moves to top of viewport
        document.addEventListener('mousemove', (e) => this.handleNavbarZone(e));

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmission(e));
        }

        // Service card interactions
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => this.animateServiceCard(card, true));
            card.addEventListener('mouseleave', () => this.animateServiceCard(card, false));
        });

        // Language switcher dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage(option);
            });
        });
    }

    createEnergyParticles() {
        const particlesContainers = document.querySelectorAll('.energy-particles');
        if (!particlesContainers.length) return;

        particlesContainers.forEach((particlesContainer) => {
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';

                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';

                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';

                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';

                const colors = ['#00d4aa', '#0984e3', '#fdcb6e', '#e17055'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];

                particlesContainer.appendChild(particle);
            }
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');

        counters.forEach(counter => {
            this.observer.observe(counter);
        });
    }

    setupScrollAnimations() {
        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll('.service-card, .contact-item, .visual-card');

        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Animate counters
                if (element.classList.contains('stat-number') && element.dataset.target) {
                    this.animateCounter(element);
                }

                // Animate progress bars
                if (element.classList.contains('progress-fill')) {
                    this.animateProgressBar(element);
                }

                // Fade in animations
                if (element.classList.contains('fade-in')) {
                    element.classList.add('visible');
                }
            }
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    animateProgressBar(element) {
        const width = element.dataset.width;
        setTimeout(() => {
            element.style.width = width + '%';
        }, 500);
    }

    animateServiceCard(card, isHovering) {
        const icon = card.querySelector('.service-icon');
        if (!icon) return;

        if (isHovering) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        } else {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');

        this.mobileMenuOpen = !this.mobileMenuOpen;

        if (this.mobileMenuOpen) {
            navMenu.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    handleScroll() {
        const navbar = document.getElementById('navbar');
        const currentScrollY = window.scrollY;

        if (currentScrollY > this.navbarHideThreshold) {
            this.hasPassedFirstNavbarHide = true;
        } else if (currentScrollY <= 10) {
            this.hasPassedFirstNavbarHide = false;
        }

        // Navbar background on scroll
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        this.scrollingUp = currentScrollY < this.lastScrollY;
        this.lastScrollY = currentScrollY;
        this.updateNavbarPreHideShrink(currentScrollY);
        this.updateNavbarLogo();
        this.updateNavbarVisibility();
        this.updateActiveNavLink();
    }

    updateNavbarPreHideShrink(currentScrollY = window.scrollY) {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        const isMobile = window.innerWidth <= this.mobileBreakpoint;
        if (isMobile || this.hasPassedFirstNavbarHide) {
            navbar.style.removeProperty('--nav-prehide-progress');
            return;
        }

        const progress = Math.max(0, Math.min(1, currentScrollY / this.navbarHideThreshold));
        navbar.style.setProperty('--nav-prehide-progress', progress.toFixed(3));
    }

    updateNavbarLogo() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        const useFavicon = window.innerWidth <= this.mobileBreakpoint || window.scrollY >= this.faviconSwitchThreshold;
        navbar.classList.toggle('favicon-mode', useFavicon);
    }

    handleNavbarZone(e) {
        const inZone = e.clientY < this.navbarTriggerZone;
        if (inZone !== this.mouseInNavbarZone) {
            this.mouseInNavbarZone = inZone;
            this.updateNavbarVisibility();
        }
    }

    updateNavbarVisibility() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        const currentScrollY = window.scrollY;

        const navbarInteractive = navbar.matches(':hover') ||
            navbar.matches(':focus-within') ||
            !!document.querySelector('.lang-dropdown:hover') ||
            !!document.querySelector('.lang-menu:hover');

        // Show when near top, trigger zone is active, user is scrolling up, or navbar/dropdown is being interacted with
        const show = currentScrollY <= 200 || this.mouseInNavbarZone || this.scrollingUp || navbarInteractive;
        navbar.style.transform = show ? 'translateY(0)' : 'translateY(-100%)';
    }

    updateActiveNavLink() {
        const scrollY = window.scrollY;
        const offset = 150;
        const sections = [
            { id: 'contact', el: document.getElementById('contact') },
            { id: 'services', el: document.getElementById('services') },
            { id: 'home', el: document.getElementById('home') }
        ];
        let activeId = 'home';
        for (const { id, el } of sections) {
            if (el && scrollY >= el.offsetTop - offset) {
                activeId = id;
                break;
            }
        }
        document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
            const targetId = (link.getAttribute('href') || '').replace('#', '');
            link.classList.toggle('active', targetId === activeId);
        });
    }

    smoothScrollTo(target) {
        if (target.id === 'home') {
            this.hasPassedFirstNavbarHide = false;
            this.updateNavbarLogo();
        }

        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - this.scrollOffset; // Account for fixed navbar

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }

    handleFormSubmission(e) {
        e.preventDefault();

        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Šalje se...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            this.showNotification('Poruka je uspješno poslana!', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#00d4aa' : '#0984e3'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    applyLanguage(lang) {
        const t = TRANSLATIONS[lang];
        if (!t) return;
        document.documentElement.lang = lang === 'en' ? 'en' : 'hr';

        // Handle text content translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // Handle placeholder and attribute translations
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const key = el.getAttribute('data-i18n-attr');
            if (t[key] !== undefined) {
                el.setAttribute('placeholder', t[key]);
            }
        });
    }

    switchLanguage(option) {
        const lang = option.getAttribute('data-lang');
        if (!lang) return;

        this.currentLang = lang;
        localStorage.setItem('prometheus_lang', lang);
        this.syncLangDropdown(lang);
        this.applyLanguage(lang);

        option.style.transform = 'scale(0.95)';
        setTimeout(() => { option.style.transform = ''; }, 150);
    }

}

// Utility functions
function scrollToSection(sectionId) {
    const scrollOffset = 100;
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add CSS for mobile menu animation
const mobileMenuStyles = `
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PrometheusApp();
});

// Add some additional interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes
    const rippleKeyframes = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = rippleKeyframes;
    document.head.appendChild(rippleStyle);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.energy-particles');

    if (hero && particles) {
        const rate = scrolled * -0.5;
        particles.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title
document.addEventListener('DOMContentLoaded', () => {
    const titleLines = document.querySelectorAll('.title-line');

    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';

        setTimeout(() => {
            let i = 0;
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 100);
        }, index * 200);
    });
});

// Add energy wave animation to service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Create energy wave effect
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, transparent, rgba(0, 212, 170, 0.1), transparent);
                transform: translateX(-100%);
                transition: transform 0.6s ease;
                pointer-events: none;
            `;

            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(wave);

            setTimeout(() => {
                wave.style.transform = 'translateX(100%)';
            }, 50);

            setTimeout(() => wave.remove(), 600);
        });
    });
});

// Add magnetic effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    const magneticElements = document.querySelectorAll('.btn, .service-card, .contact-item');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const renergyIcon = document.querySelector('.hero-visual .renergy-icon');
    if (!renergyIcon) return;

    renergyIcon.addEventListener('click', () => {
        window.location.reload();
    });
});

console.log('🔥 Prometheus Energetika - Interactive Landing Page Loaded Successfully!');
