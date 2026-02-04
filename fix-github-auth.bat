@echo off
REM Fix GitHub Authentication and Push

echo 🔧 Fixing GitHub authentication...
echo.

REM Navigate to project directory
cd /d "A:\LCB\v1"

echo 🔍 Current Git identity:
git config --global user.name
git config --global user.email

echo.
echo 🔧 Choose authentication method:
echo 1. Personal Access Token (recommended)
echo 2. GitHub CLI authentication
echo 3. SSH key
echo.
set /p choice="Enter option (1-3): "

if "%choice%"=="1" (
    echo 🎫 Personal Access Token Method:
    echo 1. Go to: https://github.com/settings/tokens
    echo 2. Click "Generate new token (classic)"
    echo 3. Select scopes: repo
    echo 4. Copy the generated token
    echo.
    set /p token="Paste your token here: "
    git remote remove origin
    git remote add origin https://%token%@github.com/Bharath-stax/v1.git
    git push -u origin main
) else if "%choice%"=="2" (
    echo 🔐 GitHub CLI Authentication:
    gh auth login
    git push -u origin main
) else if "%choice%"=="3" (
    echo 🔑 SSH Key Method:
    git remote remove origin
    git remote add origin git@github.com:Bharath-stax/v1.git
    git push -u origin main
) else (
    echo ❌ Invalid option
)

echo ✅ Authentication setup complete!
pause
