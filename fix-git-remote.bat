@echo off
REM Fix Git Remote and Push to GitHub

echo 🔧 Fixing Git remote setup...
echo.

REM Navigate to project directory
cd /d "A:\LCB\v1"

REM Remove any existing origin
echo 🗑️ Removing existing origin (if any)...
git remote remove origin 2>nul

REM Add correct remote
echo 🔗 Adding correct remote...
git remote add origin https://github.com/Bharath-stax/v1.git

REM Verify remote
echo ✅ Verifying remote setup...
git remote -v

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push -u origin main

echo ✅ Complete! Your code is now on GitHub!
echo 🌍 Repository: https://github.com/Bharath-stax/v1
echo.
pause
