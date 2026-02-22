// Application State
let currentSection = 'home';
let currentGalleryIndex = 0;

// Gallery Images Data
const galleryImages = [
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1754888386/pplx_project_search_images/ccfebb7375adfb53e887d92a8a3282245b1898f9.png',
        title: 'Community Engagement',
        description: 'Volunteers working with children in community programs'
    },
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/952886b297357b51cb3806cf1de2624f139f27bd.png',
        title: 'Lions Club Service',
        description: 'Vision and hearing screenings for the community'
    },
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1754813954/pplx_project_search_images/279d9be1e7c8dab3ce9d5b570a8818311130ed6d.png',
        title: 'Medical Support',
        description: 'Healthcare volunteers providing medical assistance'
    },
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1756051898/pplx_project_search_images/c8d2701de7e231d9e62db7f8f61369fedb391199.png',
        title: 'Community Event',
        description: 'Lions Club volunteers gathering for community service'
    },
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/f7a9a6d8ca6c0e59015add3603c5f7cac716b1eb.png',
        title: 'Fundraising',
        description: 'Community fundraising activities and events'
    },
    {
        src: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/20e044c87c05a6e10bde813370d1f69b5fe49177.png',
        title: 'Volunteer Spirit',
        description: 'Hands joined together symbolizing community service'
    }
];

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

// Global function declarations for HTML onclick handlers
window.showSection = showSection;
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.openGalleryModal = openGalleryModal;
window.closeGalleryModal = closeGalleryModal;
window.nextGalleryImage = nextGalleryImage;
window.previousGalleryImage = previousGalleryImage;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing application...');
    initializeNavigation();
    initializeContactForm();
    initializeAnimations();
    
    // Set initial active section
    showSection('home');
});

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) {
        console.error('Navigation elements not found');
        return;
    }

    // Mobile hamburger menu
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetSection = href.substring(1);
                console.log('Navigation clicked:', targetSection);
                showSection(targetSection);
                
                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Logo click to home
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('home');
        });
        navBrand.style.cursor = 'pointer';
    }

    // Footer navigation
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = href.substring(1);
                showSection(targetSection);
            });
        }
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
    console.log('Showing section:', sectionId);
    
    const sections = document.querySelectorAll('.section, .hero-section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        
        // Add fade-in animation
        setTimeout(() => {
            targetSection.classList.add('fade-in');
        }, 50);
        
        // Update navigation
        updateActiveNavLink(sectionId);
        currentSection = sectionId;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Section shown:', sectionId);
    } else {
        console.error('Section not found:', sectionId);
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

// Service Modal Functions
function openServiceModal(serviceKey) {
    console.log('Opening service modal for:', serviceKey);
    
    const service = serviceDetails[serviceKey];
    if (!service) {
        console.error('Service not found:', serviceKey);
        return;
    }

    const serviceModal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!serviceModal || !modalContent) {
        console.error('Modal elements not found');
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
            <div class="service-modal-impact">
                <h3>Our Impact:</h3>
                <p>${service.impact}</p>
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
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    console.log('Closing service modal');
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Gallery Functions
function openGalleryModal(index) {
    console.log('Opening gallery modal for index:', index);
    currentGalleryIndex = index;
    updateGalleryModal();
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeGalleryModal() {
    console.log('Closing gallery modal');
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function updateGalleryModal() {
    const image = document.getElementById('galleryModalImage');
    if (image && galleryImages[currentGalleryIndex]) {
        const currentImage = galleryImages[currentGalleryIndex];
        image.src = currentImage.src;
        image.alt = currentImage.title;
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
                previousGalleryImage();
                break;
            case 'ArrowRight':
                nextGalleryImage();
                break;
            case 'Escape':
                closeGalleryModal();
                break;
        }
    }
    
    if (serviceModal && !serviceModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    }
});

// Contact Form Functions
function initializeContactForm() {
    console.log('Initializing contact form...');
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Contact form submitted');
        
        if (validateContactForm()) {
            submitContactForm();
        }
    });

    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
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

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    clearFieldError(field);

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

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--color-error)';
    errorDiv.style.fontSize = 'var(--font-size-sm)';
    errorDiv.style.marginTop = 'var(--space-4)';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
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
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-${type === 'success' ? 'success' : 'info'});
        border-radius: var(--radius-lg);
        padding: var(--space-16);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: var(--space-12);
        color: var(--color-${type === 'success' ? 'success' : 'info'});
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        padding: var(--space-4);
        margin-left: auto;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Animation Functions
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe cards and other elements
    const animatedElements = document.querySelectorAll('.card, .service-card, .event-card, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Make email links clickable
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const emailLinks = document.querySelectorAll('[href*="@"]');
        emailLinks.forEach(link => {
            const email = link.textContent.trim();
            if (email.includes('@')) {
                link.href = `mailto:${email}`;
                link.style.textDecoration = 'underline';
                link.style.cursor = 'pointer';
            }
        });
        
        // Make phone links clickable
        const phoneLinks = document.querySelectorAll('p');
        phoneLinks.forEach(p => {
            const text = p.textContent;
            if (text.includes('+91') || text.includes('Phone:')) {
                const phoneMatch = text.match(/\+91\s*\d+\s*\d+\s*\d+/);
                if (phoneMatch) {
                    const phoneNumber = phoneMatch[0];
                    p.innerHTML = p.innerHTML.replace(phoneNumber, `<a href="tel:${phoneNumber.replace(/\s/g, '')}">${phoneNumber}</a>`);
                }
            }
        });
    }, 100);
});

// Add CSS for notifications and other dynamic styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
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
    
    .form-control.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 3px rgba(var(--color-error-rgb), 0.1);
    }
    
    .service-modal-content {
        max-width: 600px;
    }
    
    .service-modal-header {
        display: flex;
        align-items: center;
        gap: var(--space-16);
        margin-bottom: var(--space-24);
    }
    
    .service-modal-icon {
        width: 60px;
        height: 60px;
        background: var(--lions-purple);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .service-modal-icon i {
        font-size: var(--font-size-xl);
        color: white;
    }
    
    .service-modal-header h2 {
        margin: 0;
        color: var(--lions-purple);
    }
    
    .service-modal-description {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-24);
        font-size: var(--font-size-lg);
        line-height: 1.6;
    }
    
    .service-modal-details h3,
    .service-modal-impact h3 {
        color: var(--lions-purple);
        margin-bottom: var(--space-12);
    }
    
    .service-modal-details ul {
        list-style: none;
        padding: 0;
        margin-bottom: var(--space-24);
    }
    
    .service-modal-details li {
        padding: var(--space-8) 0;
        border-bottom: 1px solid var(--color-border);
        position: relative;
        padding-left: var(--space-20);
    }
    
    .service-modal-details li:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--lions-gold);
        font-weight: bold;
    }
    
    .service-modal-impact {
        background: var(--color-bg-2);
        padding: var(--space-16);
        border-radius: var(--radius-base);
        margin-bottom: var(--space-24);
    }
    
    .service-modal-footer {
        display: flex;
        gap: var(--space-16);
        justify-content: flex-end;
    }
    
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
    }
`;

document.head.appendChild(notificationStyles);

console.log('Application JavaScript loaded successfully');