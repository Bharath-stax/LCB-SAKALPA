@echo off
REM Git Account Setup Script for Windows

echo 👤 Setting up new Git account...
echo.

REM Set user name
echo 📝 Enter your full name:
set /p username="Name: "
git config --global user.name "%username%"

REM Set user email
echo 📧 Enter your email address:
set /p useremail="Email: "
git config --global user.email "%useremail%"

echo.
echo 🔧 Git configuration:
git config --global --list

echo.
echo 🔑 Generating SSH key...
ssh-keygen -t ed25519 -C "%useremail%" -f "%USERPROFILE%\.ssh\id_ed25519" -N ""

echo.
echo 🚀 Starting SSH agent...
ssh-agent

echo.
echo 🔐 Adding SSH key to agent...
ssh-add "%USERPROFILE%\.ssh\id_ed25519"

echo.
echo 📋 Your SSH public key (copy this to GitHub):
echo ========================================
type "%USERPROFILE%\.ssh\id_ed25519.pub"
echo ========================================

echo.
echo ✅ Git account setup complete!
echo.
echo Next steps:
echo 1. Copy the SSH key above
echo 2. Go to https://github.com/settings/keys
echo 3. Click "New SSH key"
echo 4. Paste the key and save
echo 5. Test connection: ssh -T git@github.com
echo.
pause
