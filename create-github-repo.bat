@echo off
REM Create GitHub Repository and Push Lions Club Website

echo 🦁 Creating GitHub repository for Lions Club Website...
echo.

REM Check if GitHub CLI is installed
gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ GitHub CLI not found. Installing...
    winget install GitHub.cli
    echo.
)

REM Navigate to project directory
cd /d "A:\LCB\v1"

REM Initialize Git repository
echo 📁 Initializing Git repository...
git init

REM Add all files
echo 📄 Adding all files...
git add .

REM Create commit
echo 💾 Creating commit...
git commit -m "Initial commit: Lions Club of Bangalore Sankalpa Website

🌟 Features:
- Responsive design with purple/yellow theme
- 200+ projects management system with pagination
- Advanced search and filtering
- Image carousel and gallery
- Local image assets management
- Cloudflare Pages ready structure
- Professional navigation and sections

📁 Structure:
- HTML5 semantic structure
- Modular CSS with custom properties
- Component-based JavaScript
- Organized image assets
- SEO optimized"

REM Create GitHub repository
echo 🌐 Creating GitHub repository...
gh repo create lions-club-sankalpa --public --source=. --remote=origin --push

echo ✅ Repository created and pushed successfully!
echo.
echo 🌍 Your website is now available at:
echo https://github.com/Bharath-stax/lions-club-sankalpa
echo.
echo 🚀 Next steps:
echo 1. Go to Cloudflare Pages Dashboard
echo 2. Connect this repository
echo 3. Deploy with default settings
echo.
pause
