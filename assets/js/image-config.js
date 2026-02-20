// Image Configuration - Easy to update paths and add new images
const IMAGE_CONFIG = {
  // Carousel Images - Updated with new images
  carousel: [
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.21.58 PM.jpeg',
      alt: 'Community Service Activity',
      title: 'Community Service',
      description: 'Community service activities and outreach programs'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22..jpeg',
      alt: 'Club Meeting & Fellowship',
      title: 'Club Activities',
      description: 'Club meetings and fellowship activities'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.00 PM.jpeg',
      alt: 'Healthcare Support Program',
      title: 'Healthcare Support',
      description: 'Healthcare support programs and medical assistance'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.01 PM.jpeg',
      alt: 'Educational Initiatives',
      title: 'Education Programs',
      description: 'Educational initiatives and learning programs'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.02 PM.jpeg',
      alt: 'Awareness Campaign',
      title: 'Awareness Programs',
      description: 'Community awareness campaigns and outreach'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.09 .jpeg',
      alt: 'Community Outreach',
      title: 'Community Outreach',
      description: 'Community outreach and engagement activities'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.09 P.jpeg',
      alt: 'Youth Development Program',
      title: 'Youth Programs',
      description: 'Youth development and training programs'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.09 PM.jpeg',
      alt: 'Environmental Initiative',
      title: 'Environmental Programs',
      description: 'Environmental initiatives and conservation activities'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.14 PM.jpeg',
      alt: 'Disaster Relief Support',
      title: 'Disaster Relief',
      description: 'Disaster relief and emergency support services'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.24 PM.jpeg',
      alt: 'Cultural Celebration',
      title: 'Cultural Events',
      description: 'Cultural celebrations and community events'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.28 PM.jpeg',
      alt: 'Leadership Training',
      title: 'Leadership Programs',
      description: 'Leadership training and development programs'
    },
    {
      src: 'assets/images/carousel/WhatsApp Image 2026-02-06 at 10.22.29 PM.jpeg',
      alt: 'Medical Camp Services',
      title: 'Medical Camps',
      description: 'Medical camps and health screening services'
    },
    {
      src: 'assets/images/carousel/fdfzhg.jpeg',
      alt: 'Volunteer Recognition',
      title: 'Volunteer Programs',
      description: 'Volunteer recognition and appreciation programs'
    },
    {
      src: 'assets/images/carousel/volunteer-spirit.jpg',
      alt: 'Volunteer Spirit',
      title: 'Volunteer Spirit',
      description: 'Volunteer spirit and community service activities'
    }
  ],

  // Gallery Images - Empty for now since using carousel in about section
  gallery: [],

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
