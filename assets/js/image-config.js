// Image Configuration - Easy to update paths and add new images
const IMAGE_CONFIG = {
  // Carousel Images - Add new images here
  carousel: [
    {
      src: 'assets/images/carousel/community-engagement.jpg',
      alt: 'Community Engagement',
      title: 'Community Engagement',
      description: 'Volunteers working with children'
    },
    {
      src: 'assets/images/carousel/vision-care.jpg',
      alt: 'Lions Club Service',
      title: 'Vision Care',
      description: 'Eye screening camps for communities'
    },
    {
      src: 'assets/images/carousel/medical-support.jpg',
      alt: 'Medical Support',
      title: 'Medical Support',
      description: 'Healthcare volunteers in action'
    },
    {
      src: 'assets/images/carousel/community-event.jpg',
      alt: 'Community Event',
      title: 'Community Events',
      description: 'Lions Club volunteers gathering'
    },
    {
      src: 'assets/images/carousel/fundraising.jpg',
      alt: 'Fundraising',
      title: 'Fundraising',
      description: 'Community fundraising activities'
    },
    {
      src: 'assets/images/carousel/volunteer-spirit.jpg',
      alt: 'Volunteers',
      title: 'Volunteer Spirit',
      description: 'Hands joined in service'
    }
  ],

  // Gallery Images - Add new gallery images here
  gallery: [
    {
      src: 'assets/images/gallery/community-engagement.jpg',
      title: 'Community Engagement',
      description: 'Volunteers working with children in community programs'
    },
    {
      src: 'assets/images/gallery/lions-service.jpg',
      title: 'Lions Club Service',
      description: 'Vision and hearing screenings for the community'
    },
    {
      src: 'assets/images/gallery/medical-support.jpg',
      title: 'Medical Support',
      description: 'Healthcare volunteers providing medical assistance'
    },
    {
      src: 'assets/images/gallery/community-event.jpg',
      title: 'Community Event',
      description: 'Lions Club volunteers gathering for community service'
    },
    {
      src: 'assets/images/gallery/fundraising.jpg',
      title: 'Fundraising',
      description: 'Community fundraising activities and events'
    },
    {
      src: 'assets/images/gallery/volunteer-spirit.jpg',
      title: 'Volunteer Spirit',
      description: 'Hands joined together symbolizing community service'
    }
  ],

  // Service Icons - Update service icons here
  services: {
    vision: 'fas fa-eye',
    diabetes: 'fas fa-heart',
    hunger: 'fas fa-utensils',
    cancer: 'fas fa-hands-helping',
    environment: 'fas fa-leaf',
    education: 'fas fa-graduation-cap'
  },

  // Other Images - Now using local paths
  logo: 'assets/images/other/logo.png',
  hero: 'assets/images/other/hero-image.jpg'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IMAGE_CONFIG;
} else {
  window.IMAGE_CONFIG = IMAGE_CONFIG;
}
