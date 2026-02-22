// Application State
let currentSection = 'home';
let currentGalleryIndex = 0;

// Use Image Configuration
const galleryImages = window.IMAGE_CONFIG ? window.IMAGE_CONFIG.gallery : [];
const carouselImages = window.IMAGE_CONFIG ? window.IMAGE_CONFIG.carousel : [];

// Service Details Data
const serviceDetails = {
    vision: {
        title: 'Vision Care Services',
        icon: 'fas fa-eye',
        description: 'Our vision care program is one of our most impactful service areas, helping restore sight and prevent blindness in our community.',
        details: [
            'Free eye examinations for underprivileged individuals',
            'Distribution of prescription glasses and reading glasses',
            'Cataract surgery support and funding',
            'Vision screening camps in schools and communities',
            'Collaboration with local eye hospitals and clinics',
            'Eye health education and awareness programs'
        ],
        impact: 'Over 500 people have benefited from our vision care programs since 2018.'
    },
    diabetes: {
        title: 'Diabetes Awareness & Prevention',
        icon: 'fas fa-heart',
        description: 'We work to combat the growing diabetes epidemic through education, screening, and support programs.',
        details: [
            'Free diabetes screening and blood sugar testing',
            'Nutrition education and dietary counseling',
            'Exercise and lifestyle modification programs',
            'Support groups for diabetes patients',
            'Collaboration with healthcare professionals',
            'Distribution of diabetes management resources'
        ],
        impact: 'Monthly diabetes camps have screened over 300 community members annually.'
    },
    hunger: {
        title: 'Hunger Relief Programs',
        icon: 'fas fa-utensils',
        description: 'Fighting hunger in our community through food distribution, community kitchens, and nutrition education.',
        details: [
            'Weekly food distribution to needy families',
            'Community kitchen serving hot meals',
            'Nutrition education for children and families',
            'School meal support programs',
            'Emergency food relief during crises',
            'Partnership with local food banks and restaurants'
        ],
        impact: 'We serve over 200 meals weekly and provide food packages to 50+ families monthly.'
    },
    cancer: {
        title: 'Childhood Cancer Support',
        icon: 'fas fa-hands-helping',
        description: 'Supporting children battling cancer and their families through comprehensive assistance programs.',
        details: [
            'Financial assistance for treatment costs',
            'Transportation support for medical appointments',
            'Emotional support and counseling services',
            'Educational support during treatment',
            'Family support programs and resources',
            'Collaboration with pediatric oncology centers'
        ],
        impact: 'Currently supporting 15 families with children undergoing cancer treatment.'
    },
    environment: {
        title: 'Environmental Conservation',
        icon: 'fas fa-leaf',
        description: 'Protecting our environment through sustainable practices and community awareness programs.',
        details: [
            'Tree plantation drives and maintenance',
            'Community clean-up campaigns',
            'Waste management and recycling programs',
            'Environmental education in schools',
            'Water conservation initiatives',
            'Promotion of eco-friendly practices'
        ],
        impact: 'Planted over 1,000 trees and organized 25+ community clean-up drives.'
    },
    education: {
        title: 'Education Support',
        icon: 'fas fa-graduation-cap',
        description: 'Empowering communities through education support, scholarships, and infrastructure development.',
        details: [
            'Scholarship programs for deserving students',
            'School infrastructure development and repairs',
            'Distribution of books and educational materials',
            'Adult literacy programs',
            'Computer and digital literacy training',
            'Career guidance and counseling'
        ],
        impact: 'Awarded 50+ scholarships and supported infrastructure in 10 schools.'
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Set up global functions first
    setupGlobalFunctions();
    
    // Initialize components
    initializeNavigation();
    initializeContactForm();
    initializeAnimations();
    initializeVibrantEffects();
    
    // Handle initial hash or default to home
    const initialHash = window.location.hash.substring(1) || 'home';
    showSection(initialHash);
    
    // Handle browser back/forward navigation
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });
});

// Setup Global Functions
function setupGlobalFunctions() {
    // Make functions globally accessible for HTML onclick handlers
    window.showSection = showSection;
    window.openServiceModal = openServiceModal;
    window.closeServiceModal = closeServiceModal;
    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
    window.handleSubmit = handleSubmit;
    window.nextGalleryImage = nextGalleryImage;
    window.previousGalleryImage = previousGalleryImage;
    window.moveCarousel = moveCarousel;
    window.goToSlide = goToSlide;
    
    // Add gallery functions
    window.moveGallery = moveGallery;
    
    // Add test function for hamburger
    window.testHamburger = function() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger toggled manually');
            return true;
        } else {
            console.error('Hamburger or navMenu not found');
            return false;
        }
    };
    
    // Add toggle function for inline onclick
    window.toggleHamburger = function() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger toggled via inline onclick');
        } else {
            console.error('Hamburger or navMenu not found for inline toggle');
        }
    };
}

// Horizontal Gallery Functions
let currentGalleryPosition = 0;

function moveGallery(direction) {
    const track = document.querySelector('.gallery-track');
    if (!track) return;
    
    const items = document.querySelectorAll('.gallery-item');
    
    if (items.length === 0) return;
    
    const totalItems = items.length;
    
    currentGalleryPosition += direction;
    
    // Boundary checks - loop through images
    if (currentGalleryPosition < 0) {
        currentGalleryPosition = totalItems - 1;
    } else if (currentGalleryPosition >= totalItems) {
        currentGalleryPosition = 0;
    }
    
    // Move to current image
    track.style.transform = `translateX(-${currentGalleryPosition * 100}%)`;
}

// Navigation Functions
function initializeNavigation() {
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('Navigation elements found:', {
        hamburger: !!hamburger,
        navMenu: !!navMenu,
        navLinks: navLinks.length
    });

    if (!hamburger || !navMenu) {
        return;
    }

    // Mobile hamburger menu
    hamburger.addEventListener('click', function(e) {
        console.log('Hamburger clicked via event listener');
        e.preventDefault();
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Add touch support for mobile
    hamburger.addEventListener('touchstart', function(e) {
        console.log('Hamburger touched via event listener');
        e.preventDefault();
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Navigation link clicks
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
                section.classList.add('hidden');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.classList.remove('hidden');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Logo click to home
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showSection('home');
        });
        navBrand.style.cursor = 'pointer';
    }

    // Footer navigation
    const footerLinks = document.querySelectorAll('.footer-section a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetSection = href.substring(1);
            showSection(targetSection);
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && hamburger && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Section Management
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section, .hero-section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
        section.style.display = '';
        section.style.opacity = '';
    });
    
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        targetSection.style.display = '';
        targetSection.style.opacity = '';
        
        setTimeout(() => {
            targetSection.classList.add('fade-in');
        }, 50);
        
        updateActiveNavLink(sectionId);
        currentSection = sectionId;
        
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
        
        applyVibrantSectionEffects(sectionId);
    } else {
        const homeSection = document.getElementById('home');
        if (homeSection && sectionId !== 'home') {
            showSection('home');
        }
    }
}

function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + sectionId) {
            link.classList.add('active');
        }
    });
}

// Vibrant Effects System
function initializeVibrantEffects() {
    // Add enhanced hover effects to all cards
    const allCards = document.querySelectorAll('.service-card, .event-card, .involvement-card, .about-card, .stat-item, .gallery-item');
    
    allCards.forEach(card => {
        // Store original styles
        const originalTransform = card.style.transform;
        const originalBoxShadow = card.style.boxShadow;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2), 0 10px 20px rgba(249, 115, 22, 0.1)';
            this.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = originalTransform;
            this.style.boxShadow = originalBoxShadow;
        });
    });
    
    // Add vibrant button click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
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
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
}

function applyVibrantSectionEffects(sectionId) {
    // Apply section-specific visual enhancements
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Remove previous effects
    document.querySelectorAll('.vibrant-glow').forEach(el => {
        el.classList.remove('vibrant-glow');
    });
    
    // Add vibrant glow to important elements in current section
    const importantElements = section.querySelectorAll('h2, .section-header h2, .hero-text h1');
    importantElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('vibrant-glow');
        }, index * 200);
    });
}

// Service Modal Functions
function openServiceModal(serviceKey) {
    
    const service = serviceDetails[serviceKey];
    if (!service) {
        return;
    }

    const serviceModal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!serviceModal || !modalContent) {
        return;
    }
    
    modalContent.innerHTML = `
        <div class="service-modal-content">
            <div class="service-modal-header">
                <div class="service-modal-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h2>${service.title}</h2>
            </div>
            <p class="service-modal-description">${service.description}</p>
            <div class="service-modal-details">
                <h3>What We Do:</h3>
                <ul>
                    ${service.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
                        <div class="service-modal-footer">
                <button class="btn btn--primary" onclick="closeServiceModal(); showSection('contact');">
                    Get Involved
                </button>
                <button class="btn btn--outline" onclick="closeServiceModal();">
                    Close
                </button>
            </div>
        </div>
    `;

    serviceModal.classList.remove('hidden');
    serviceModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
}

function closeServiceModal() {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.classList.add('hidden');
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Gallery Functions
function openGalleryModal(index) {
    currentGalleryIndex = index;
    updateGalleryModal();
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.remove('hidden');
        galleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeGalleryModal() {
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.add('hidden');
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function updateGalleryModal() {
    const image = document.getElementById('galleryModalImage');
    if (image && galleryImages[currentGalleryIndex]) {
        const currentImage = galleryImages[currentGalleryIndex];
        image.src = currentImage.src;
        image.alt = currentImage.title;
        
        // Add loading effect
        image.style.opacity = '0';
        image.onload = function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        };
    }
}

function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateGalleryModal();
}

function previousGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryModal();
}

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    const galleryModal = document.getElementById('galleryModal');
    const serviceModal = document.getElementById('serviceModal');
    
    if (galleryModal && !galleryModal.classList.contains('hidden')) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                previousGalleryImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextGalleryImage();
                break;
            case 'Escape':
                e.preventDefault();
                closeGalleryModal();
                break;
        }
    }
    
    if (serviceModal && !serviceModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeServiceModal();
        }
    }
});

// Contact Form Functions
function initializeContactForm() {
    // Try multiple times to find the form
    const maxAttempts = 10;
    let attempts = 0;
    
    function tryInitialize() {
        attempts++;
        
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            // Remove any existing listeners to prevent duplicates
            contactForm.removeEventListener('submit', handleSubmit);
            
            // Add fresh event listener
            contactForm.addEventListener('submit', handleSubmit);
            
            // Set up real-time validation
            const formInputs = contactForm.querySelectorAll('input, textarea, select');
            
            formInputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    clearFieldError(this);
                    // Add success state for valid fields
                    if (this.value.trim() && validateField(this, true)) {
                        this.style.borderColor = '#10B981';
                        this.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                    }
                });
                
                input.addEventListener('focus', function() {
                    this.style.borderColor = '#3B82F6';
                    this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                });
            });
            
            return;
        }
        
        if (attempts < maxAttempts) {
            setTimeout(tryInitialize, 100);
        }
    }
    
    // Start initialization
    tryInitialize();
}

// Separate submit handler function
function handleSubmit(e) {
    e.preventDefault();
    
    const isValid = validateContactForm();
    
    if (isValid) {
        submitContactForm();
    } else {
        showNotification('Please fill in all required fields correctly.', 'error');
    }
}

function validateContactForm() {
    let isValid = true;
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field && !validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field, silent = false) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    if (!silent) clearFieldError(field);

    // Required field validation
    if (!value) {
        errorMessage = 'This field is required';
        isValid = false;
    } else {
        // Field-specific validation
        switch(fieldName) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
            case 'phone':
                if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
                    errorMessage = 'Please enter a valid phone number';
                    isValid = false;
                }
                break;
            case 'message':
                if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters long';
                    isValid = false;
                }
                break;
        }
    }

    if (!isValid && !silent) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#F97316';
    field.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: #F97316;"></i> ${message}`;
    errorDiv.style.cssText = `
        color: #F97316;
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 4px;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    field.style.boxShadow = '';
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function submitContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    submitButton.style.background = 'linear-gradient(135deg, #0891B2, #3B82F6)';
    
    // Initialize EmailJS with your public key
    (function() {
        try {
            emailjs.init("5pa8mqk");
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
        }
    })();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'Not provided';
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Prepare email data
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
        to_email: 'bharathae59@gmail.com'
    };
    
    // Send email using EmailJS
    try {
        emailjs.send('service_oy-qF3i6eKcq37UJD', 'template_default', templateParams)
            .then(function(response) {
                console.log('EmailJS SUCCESS:', response);
                
                // Show success message
                showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button with success animation
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitButton.style.background = 'linear-gradient(135deg, #10B981, #059669)';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 2000);
            })
            .catch(function(error) {
                console.error('EmailJS FAILED:', error);
                
                // Fallback to Gmail redirect
                
                // Create email subject and body
                const emailSubject = encodeURIComponent(`Lions Club Contact: ${subject}`);
                const emailBody = encodeURIComponent(
                    `Name: ${name}\n` +
                    `Email: ${email}\n` +
                    `Phone: ${phone}\n` +
                    `Subject: ${subject}\n\n` +
                    `Message:\n${message}\n\n` +
                    `---\n` +
                    `Sent from Lions Club of Bangalore Sankalpa Website`
                );
                
                // Create Gmail compose URL
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bharathae59@gmail.com&su=${emailSubject}&body=${emailBody}`;
                
                // Show notification and redirect
                showNotification('Email service unavailable. Opening Gmail to send your message...', 'info');
                
                // Redirect to Gmail after a short delay
                setTimeout(() => {
                    window.open(gmailUrl, '_blank');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    
                    // Show success message
                    showNotification('Gmail has been opened in a new tab. Please send the email to complete your contact request.', 'success');
                }, 1500);
            });
    } catch (error) {
        console.error('EmailJS send error:', error);
        showNotification('Email service error. Please try again or contact us directly at bharathae59@gmail.com', 'error');
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
    }
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const iconMap = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    const colorMap = {
        success: '#10B981',
        error: '#F97316',
        warning: '#F97316',
        info: '#3B82F6'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${iconMap[type]}" style="color: ${colorMap[type]};"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Enhanced styles with vibrant theme
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
        backdrop-filter: blur(10px);
        border: 2px solid ${colorMap[type]};
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15), 0 10px 20px rgba(249, 115, 22, 0.1);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateX(0);
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        color: #1E293B;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: #64748B;
        cursor: pointer;
        padding: 4px;
        margin-left: auto;
        border-radius: 50%;
        transition: all 0.2s ease;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add hover effect to close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = colorMap[type];
        this.style.color = 'white';
        this.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = 'none';
        this.style.color = '#64748B';
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Animation Functions
function initializeAnimations() {
    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation for grid items
                if (entry.target.closest('.services-grid, .events-grid, .gallery-grid')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe cards and other elements
    const animatedElements = document.querySelectorAll('.card, .service-card, .event-card, .gallery-item, .stat-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Make email and phone links clickable
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const allElements = document.querySelectorAll('p, div, span');
        allElements.forEach(element => {
            const text = element.textContent;
            let html = element.innerHTML;
            
            // Make email links clickable
            if (text.includes('info@lcbsankalpa.org') && !element.querySelector('a[href*="mailto:"]')) {
                html = html.replace(
                    'info@lcbsankalpa.org',
                    '<a href="mailto:info@lcbsankalpa.org" style="color: #3B82F6; text-decoration: underline; font-weight: 500;">info@lcbsankalpa.org</a>'
                );
            }
            
            // Make phone links clickable
            if (text.includes('+91 98765 43210') && !element.querySelector('a[href*="tel:"]')) {
                html = html.replace(
                    '+91 98765 43210',
                    '<a href="tel:+919876543210" style="color: #3B82F6; text-decoration: underline; font-weight: 500;">+91 98765 43210</a>'
                );
            }
            
            element.innerHTML = html;
        });
    }, 1000);
});

// Carousel Functions
let currentSlide = 0;
let totalSlides = 6; // Will be updated based on actual carousel images
let carouselInterval;

function initializeCarousel() {
    
    // Update total slides based on configuration
    if (window.IMAGE_CONFIG && window.IMAGE_CONFIG.carousel) {
        totalSlides = window.IMAGE_CONFIG.carousel.length;
    }
    
    // Start auto-play
    startCarouselAutoPlay();
    
    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarouselAutoPlay);
        carouselContainer.addEventListener('mouseleave', startCarouselAutoPlay);
    }
}

function moveCarousel(direction) {
    currentSlide += direction * 2; // Move by 2 slides at once
    
    // Wrap around - ensure we land on valid slide indices
    if (currentSlide < 0) {
        currentSlide = totalSlides - 2; // Go to second last slide to show last pair
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go to first slide
    }
    
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    
    if (track) {
        const offset = -currentSlide * 50; // Each slide is 50% width now
        track.style.transform = `translateX(${offset}%)`;
    }
    
    // Update indicators - show active for the first slide in the pair
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide || index === currentSlide + 1) {
            indicator.classList.add('active');
        }
    });
}

function startCarouselAutoPlay() {
    stopCarouselAutoPlay(); // Clear any existing interval
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, 4000); // Change slide every 4 seconds
}

function stopCarouselAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Add carousel initialization to the main init function
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeCarousel();
    }, 1000);
});

// Add comprehensive dynamic CSS
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .vibrant-glow {
        animation: vibrantGlow 3s ease-in-out infinite alternate;
    }
    
    @keyframes vibrantGlow {
        0% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
        }
        50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(249, 115, 22, 0.3);
        }
        100% {
            text-shadow: 0 0 15px rgba(8, 145, 178, 0.5), 0 0 25px rgba(16, 185, 129, 0.2);
        }
    }
    
    /* Modal Styles */
    .service-modal-content {
        max-width: 600px;
        animation: modalSlideIn 0.3s ease-out;
    }
    
    @keyframes modalSlideIn {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .service-modal-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
    }
    
    .service-modal-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #3B82F6, #0891B2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        animation: iconPulse 2s ease-in-out infinite;
    }
    
    @keyframes iconPulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
        }
    }
    
    .service-modal-icon i {
        font-size: 24px;
        color: white;
    }
    
    .service-modal-header h2 {
        margin: 0;
        background: linear-gradient(135deg, #0891B2, #3B82F6);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .service-modal-description {
        color: rgba(30, 41, 59, 0.8);
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 1.6;
    }
    
    .service-modal-details h3,
    .service-modal-impact h3 {
        color: #0891B2;
        margin-bottom: 12px;
        font-weight: 600;
    }
    
    .service-modal-details ul {
        list-style: none;
        padding: 0;
        margin-bottom: 24px;
    }
    
    .service-modal-details li {
        padding: 12px 0;
        border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        position: relative;
        padding-left: 24px;
        transition: all 0.2s ease;
    }
    
    .service-modal-details li:hover {
        background: rgba(59, 130, 246, 0.05);
        padding-left: 28px;
    }
    
    .service-modal-details li:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #10B981;
        font-weight: bold;
        font-size: 16px;
    }
    
    .service-modal-impact {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.08));
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 24px;
        border: 2px solid rgba(16, 185, 129, 0.2);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
    }
    
    .service-modal-footer {
        display: flex;
        gap: 16px;
        justify-content: flex-end;
    }
    
    /* Enhanced button styles */
    .btn {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .btn:hover {
        transform: translateY(-2px);
    }
    
    .btn--primary {
        box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
    }
    
    .btn--primary:hover {
        box-shadow: 0 10px 30px rgba(249, 115, 22, 0.5);
    }
    
    .btn--outline {
        box-shadow: 0 4px 15px rgba(8, 145, 178, 0.2);
    }
    
    .btn--outline:hover {
        box-shadow: 0 8px 25px rgba(8, 145, 178, 0.3);
    }
    
    /* Form enhancements */
    .form-control {
        transition: all 0.3s ease;
    }
    
    .form-control:focus {
        transform: translateY(-1px);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .service-modal-footer {
            flex-direction: column;
        }
        
        .service-modal-header {
            flex-direction: column;
            text-align: center;
        }
        
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
        
        .service-modal-content {
            margin: 16px;
            max-width: none;
        }
    }
    
    /* Loading states */
    .loading {
        opacity: 0.7;
        pointer-events: none;
    }
    
    .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
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
`;

document.head.appendChild(dynamicStyles);

// About Section Carousel Functions
let aboutCurrentSlide = 0;
let aboutTotalSlides = 22;

function moveAboutCarousel(direction) {
    const track = document.querySelector('.photo-carousel-section .carousel-track');
    const indicators = document.querySelectorAll('.photo-carousel-section .indicator');
    
    if (!track) return;
    
    aboutCurrentSlide += direction;
    
    // Wrap around
    if (aboutCurrentSlide < 0) {
        aboutCurrentSlide = aboutTotalSlides - 1;
    } else if (aboutCurrentSlide >= aboutTotalSlides) {
        aboutCurrentSlide = 0;
    }
    
    // Update carousel position
    const offset = -aboutCurrentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === aboutCurrentSlide);
    });
}

function goToAboutSlide(slideIndex) {
    aboutCurrentSlide = slideIndex;
    moveAboutCarousel(0); // Update without changing slide
}

// Initialize about section carousel when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the about section and initialize carousel
    const aboutCarousel = document.querySelector('.photo-carousel-section .carousel-track');
    const slides = document.querySelectorAll('.photo-carousel-section .carousel-slide');
    
    
    if (aboutCarousel && slides.length > 0) {
        
        // Update total slides count
        aboutTotalSlides = slides.length;
        
        // Initialize first slide
        goToAboutSlide(0);
        
        // Auto-play for about carousel
        setInterval(() => {
            moveAboutCarousel(1);
        }, 5000); // Change slide every 5 seconds
    } else {
    }
});
