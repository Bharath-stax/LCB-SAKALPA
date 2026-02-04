@echo off
REM Fix Git Permission Issue

echo 🔧 Fixing Git permission issue...
echo.

REM Navigate to project directory
cd /d "A:\LCB\v1"

REM Remove current remote
echo 🗑️ Removing current remote...
git remote remove origin

echo 🔍 Your Git identity:
git config --global user.name
git config --global user.email

echo.
echo 🔧 Choose an option:
echo 1. Push to bharath-ae/v1 (your username)
echo 2. Use SSH with Bharath-stax/v1
echo 3. Create new repo with your username
echo.
set /p choice="Enter option (1-3): "

if "%choice%"=="1" (
    echo 📤 Setting remote to bharath-ae/v1...
    git remote add origin https://github.com/bharath-ae/v1.git
    git push -u origin main
) else if "%choice%"=="2" (
    echo 🔐 Setting SSH remote to Bharath-stax/v1...
    git remote add origin git@github.com:Bharath-stax/v1.git
    git push -u origin main
) else if "%choice%"=="3" (
    echo 🆕 Setting remote to new repository...
    set /p reponame="Enter new repository name: "
    git remote add origin https://github.com/bharath-ae/%reponame%.git
    echo 📝 Create this repository first: https://github.com/new
    pause
    git push -u origin main
) else (
    echo ❌ Invalid option
)

echo ✅ Operation complete!
pause
