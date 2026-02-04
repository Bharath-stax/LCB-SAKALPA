@echo off
REM Personal Access Token GitHub Push

echo 🔑 Personal Access Token Method for GitHub
echo.

REM Navigate to project directory
cd /d "A:\LCB\v1"

echo 📋 Instructions:
echo 1. Go to: https://github.com/settings/tokens
echo 2. Click "Generate new token (classic)"
echo 3. Note: Enter "Lions Club Website"
echo 4. Select scopes: Check the 'repo' box
echo 5. Click "Generate token"
echo 6. Copy the token (starts with 'ghp_')
echo.

set /p token="Paste your GitHub Personal Access Token: "

if "%token%"=="" (
    echo ❌ No token provided
    pause
    exit /b 1
)

echo 🔗 Setting up remote with token...
git remote remove origin
git remote add origin https://%token%@github.com/Bharath-stax/v1.git

echo ✅ Remote configured with token
echo 🚀 Pushing to GitHub...
git push -u origin main

echo ✅ Success! Your Lions Club website is now on GitHub!
echo 🌍 Repository: https://github.com/Bharath-stax/v1
echo.
echo ⚠️  Important: Save your token securely!
echo    You can reuse it for future pushes.
echo.
pause
