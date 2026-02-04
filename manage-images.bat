@echo off
echo Lions Club Website - Image Management Helper
echo ==========================================
echo.

echo Available folders:
echo 1. assets\images\carousel\  - Homepage carousel images
echo 2. assets\images\gallery\   - Gallery section images  
echo 3. assets\images\services\  - Service-related images
echo.

echo Current folder structure:
tree assets\images /F

echo.
echo To add new images:
echo 1. Copy images to the appropriate folder
echo 2. Update assets\js\image-config.js with new image paths
echo 3. Refresh the website to see changes
echo.

echo Image recommendations:
echo - Carousel: 1200x400px, JPG format
echo - Gallery: 800x600px, JPG format
echo - Keep file sizes under 200KB each
echo.

pause
