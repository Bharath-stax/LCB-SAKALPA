@echo off
REM Fix Git Identity and Push to Correct Repository

echo 🔧 Fixing Git identity to match GitHub username...
echo.

REM Navigate to project directory
cd /d "A:\LCB\v1"

REM Update Git config to match GitHub username
echo 👤 Updating Git identity...
git config --global user.name "Bharath-stax"
git config --global user.email "bellsbelld@gmail.com"

REM Verify identity
echo ✅ Updated Git identity:
git config --global user.name
git config --global user.email

REM Remove and re-add remote with correct username
echo 🔗 Updating remote repository...
git remote remove origin
git remote add origin https://github.com/Bharath-stax/v1.git

REM Verify remote
echo ✅ Updated remote:
git remote -v

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push -u origin main

echo ✅ Complete! Your Lions Club website is now on GitHub!
echo 🌍 Repository: https://github.com/Bharath-stax/v1
echo.
pause
