@echo off
REM Lions Club Website - Git Setup Script for Windows

echo 🦁 Setting up Git for Lions Club Website...

REM Initialize Git repository
echo 📁 Initializing Git repository...
git init

REM Add all files
echo 📄 Adding all files to Git...
git add .

REM Make initial commit
echo 💾 Creating initial commit...
git commit -m "Initial commit: Lions Club website with 200 projects management system

Features:
- Responsive design with purple/yellow theme
- 200+ projects with pagination and search
- Image carousel and gallery
- Local image assets management
- Cloudflare Pages ready structure"

REM Add remote (replace with your actual repository URL)
echo 🔗 Adding remote repository...
echo ⚠️  Replace 'your-username/your-repo' with your actual GitHub repository
git remote add origin https://github.com/your-username/lions-club-sankalpa.git

REM Set main branch and push
echo 🚀 Pushing to GitHub...
git branch -M main
git push -u origin main

echo ✅ Git setup complete!
echo 🌐 Now connect this repository to Cloudflare Pages
echo.
echo Next steps:
echo 1. Go to https://dash.cloudflare.com/pages
echo 2. Connect your GitHub repository
echo 3. Deploy with these settings:
echo    - Framework preset: None
echo    - Build command: (leave blank)
echo    - Build output directory: /
echo    - Root directory: /
echo.
pause
