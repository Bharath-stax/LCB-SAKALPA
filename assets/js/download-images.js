// Image Download Script for Lions Club Website
// This script helps download and organize current Cloudinary images

const imageUrls = {
    // Carousel Images
    carousel: [
        {
            filename: 'community-engagement.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1754888386/pplx_project_search_images/ccfebb7375adfb53e887d92a8a3282245b1898f9.png',
            alt: 'Community Engagement',
            title: 'Community Engagement',
            description: 'Volunteers working with children'
        },
        {
            filename: 'vision-care.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/952886b297357b51cb3806cf1de2624f139f27bd.png',
            alt: 'Lions Club Service',
            title: 'Vision Care',
            description: 'Eye screening camps for communities'
        },
        {
            filename: 'medical-support.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1754813954/pplx_project_search_images/279d9be1e7c8dab3ce9d5b570a8818311130ed6d.png',
            alt: 'Medical Support',
            title: 'Medical Support',
            description: 'Healthcare volunteers in action'
        },
        {
            filename: 'community-event.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051898/pplx_project_search_images/c8d2701de7e231d9e62db7f8f61369fedb391199.png',
            alt: 'Community Event',
            title: 'Community Events',
            description: 'Lions Club volunteers gathering'
        },
        {
            filename: 'fundraising.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/f7a9a6d8ca6c0e59015add3603c5f7cac716b1eb.png',
            alt: 'Fundraising',
            title: 'Fundraising',
            description: 'Community fundraising activities'
        },
        {
            filename: 'volunteer-spirit.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/20e044c87c05a6e10bde813370d1f69b5fe49177.png',
            alt: 'Volunteers',
            title: 'Volunteer Spirit',
            description: 'Hands joined in service'
        }
    ],
    
    // Gallery Images (same as carousel for now)
    gallery: [
        {
            filename: 'community-engagement.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1754888386/pplx_project_search_images/ccfebb7375adfb53e887d92a8a3282245b1898f9.png',
            title: 'Community Engagement',
            description: 'Volunteers working with children in community programs'
        },
        {
            filename: 'lions-service.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/952886b297357b51cb3806cf1de2624f139f27bd.png',
            title: 'Lions Club Service',
            description: 'Vision and hearing screenings for the community'
        },
        {
            filename: 'medical-support.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1754813954/pplx_project_search_images/279d9be1e7c8dab3ce9d5b570a8818311130ed6d.png',
            title: 'Medical Support',
            description: 'Healthcare volunteers providing medical assistance'
        },
        {
            filename: 'community-event.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051898/pplx_project_search_images/c8d2701de7e231d9e62db7f8f61369fedb391199.png',
            title: 'Community Event',
            description: 'Lions Club volunteers gathering for community service'
        },
        {
            filename: 'fundraising.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/f7a9a6d8ca6c0e59015add3603c5f7cac716b1eb.png',
            title: 'Fundraising',
            description: 'Community fundraising activities and events'
        },
        {
            filename: 'volunteer-spirit.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/20e044c87c05a6e10bde813370d1f69b5fe49177.png',
            title: 'Volunteer Spirit',
            description: 'Hands joined together symbolizing community service'
        }
    ],
    
    // Other Images
    other: [
        {
            filename: 'logo.png',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/3d4c0ccdb67a33bd71dc9bf3d831e244111d0e14.png',
            description: 'Lions International Logo'
        },
        {
            filename: 'hero-image.jpg',
            url: 'https://pplx-res.cloudinary.com/image/upload/v1754976680/pplx_project_search_images/480ac8cae183be97eaebcf7385a6bd1edf8d60cf.png',
            description: 'Main hero image for homepage'
        }
    ]
};

// Function to download images (for browser console use)
function downloadImages() {
    
    // Download carousel images
    imageUrls.carousel.forEach((img, index) => {
        // In a real implementation, you would use fetch() or a download library
    });
    
    // Download gallery images  
    imageUrls.gallery.forEach((img, index) => {
    });
    
    // Download other images
    imageUrls.other.forEach((img, index) => {
    });
    
}

// Export for use
window.imageUrls = imageUrls;
window.downloadImages = downloadImages;
