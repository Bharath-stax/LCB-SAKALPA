# Image Assets Guide

## Folder Structure
```
assets/
├── images/
│   ├── carousel/     - Homepage carousel images (6 images)
│   ├── gallery/      - Gallery section images (6 images)
│   └── services/     - Service-related images (optional)
├── css/
│   └── style.css     - Main stylesheet
└── js/
    ├── app.js        - Main JavaScript
    └── image-config.js - Image configuration
```

## Required Images

### Carousel Images (6)
- Size: 1200x400px recommended
- Format: JPG or PNG
- Location: `assets/images/carousel/`
- Names:
  1. community-engagement.jpg
  2. vision-care.jpg
  3. medical-support.jpg
  4. community-event.jpg
  5. fundraising.jpg
  6. volunteer-spirit.jpg

### Gallery Images (6)
- Size: 800x600px recommended
- Format: JPG or PNG
- Location: `assets/images/gallery/`
- Names:
  1. community-engagement.jpg
  2. lions-service.jpg
  3. medical-support.jpg
  4. community-event.jpg
  5. fundraising.jpg
  6. volunteer-spirit.jpg

## How to Add New Images

### 1. Add Images to Folders
- Place carousel images in `assets/images/carousel/`
- Place gallery images in `assets/images/gallery/`

### 2. Update Configuration
Edit `assets/js/image-config.js`:
```javascript
// Add new carousel image
{
  src: 'assets/images/carousel/new-image.jpg',
  alt: 'New Image',
  title: 'New Image Title',
  description: 'Description of new image'
}

// Add new gallery image
{
  src: 'assets/images/gallery/new-image.jpg',
  title: 'New Image Title',
  description: 'Description of new image'
}
```

### 3. Update HTML (if needed)
- The HTML automatically uses the image configuration
- No need to manually update image paths in HTML

## Current Cloudinary Images (Temporary)
Currently using Cloudinary URLs as placeholders:
- Logo: Lions International logo
- Hero: Main hero image
- Carousel: 6 service activity images
- Gallery: 6 service activity images

Replace with local images by downloading from the current URLs and placing in the appropriate folders.

## Image Optimization Tips
- Use WebP format for better compression
- Compress images to under 200KB each
- Maintain consistent aspect ratios
- Use descriptive alt text for accessibility
