// Dynamic Carousel Generator
function generateCarouselHTML() {
    const carouselImages = window.IMAGE_CONFIG ? window.IMAGE_CONFIG.carousel : [];
    
    if (carouselImages.length === 0) {
        console.warn('No carousel images found in IMAGE_CONFIG');
        return '';
    }
    
    let slidesHTML = '';
    let indicatorsHTML = '';
    
    carouselImages.forEach((image, index) => {
        // Generate slide HTML
        slidesHTML += `
                    <div class="carousel-slide">
                        <img src="${image.src}" alt="${image.alt}">
                        <div class="carousel-caption">
                            <h4>${image.title}</h4>
                            <p>${image.description}</p>
                        </div>
                    </div>`;
        
        // Generate indicator HTML
        const activeClass = index === 0 ? 'active' : '';
        indicatorsHTML += `                    <span class="indicator ${activeClass}" onclick="goToSlide(${index})"></span>\n`;
    });
    
    return `
        <!-- Image Carousel -->
        <div class="hero-carousel">
            <div class="carousel-container">
                <div class="carousel-track">
${slidesHTML}
                </div>
                <button class="carousel-btn carousel-btn-prev" onclick="moveCarousel(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-btn carousel-btn-next" onclick="moveCarousel(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="carousel-indicators">
${indicatorsHTML}
            </div>
        </div>`;
}

// Dynamic Gallery Generator
function generateGalleryHTML() {
    const galleryImages = window.IMAGE_CONFIG ? window.IMAGE_CONFIG.gallery : [];
    
    if (galleryImages.length === 0) {
        console.warn('No gallery images found in IMAGE_CONFIG');
        return '';
    }
    
    let galleryHTML = '';
    
    galleryImages.forEach((image, index) => {
        galleryHTML += `
                <div class="gallery-item" onclick="openGalleryModal(${index})">
                    <img src="${image.src}" alt="${image.title}">
                    <div class="gallery-overlay">
                        <h4>${image.title}</h4>
                        <p>${image.description}</p>
                    </div>
                </div>`;
    });
    
    return galleryHTML;
}

// Auto-generate carousel and gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Generate carousel if placeholder exists
        const carouselPlaceholder = document.querySelector('.carousel-placeholder');
        if (carouselPlaceholder && window.IMAGE_CONFIG) {
            carouselPlaceholder.outerHTML = generateCarouselHTML();
        }
        
        // Generate gallery if placeholder exists
        const galleryPlaceholder = document.querySelector('.gallery-placeholder');
        if (galleryPlaceholder && window.IMAGE_CONFIG) {
            galleryPlaceholder.outerHTML = generateGalleryHTML();
        }
    }, 100);
});

// Export functions
window.generateCarouselHTML = generateCarouselHTML;
window.generateGalleryHTML = generateGalleryHTML;
