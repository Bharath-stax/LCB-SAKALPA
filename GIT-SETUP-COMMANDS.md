# Git Account Setup - Quick Commands

## 1. Configure Git User
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

## 2. Generate SSH Key
ssh-keygen -t ed25519 -C "your.email@example.com"

## 3. Start SSH Agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

## 4. Copy SSH Key
cat ~/.ssh/id_ed25519.pub

## 5. Add to GitHub
# Go to: https://github.com/settings/keys
# Click "New SSH key"
# Paste the key

## 6. Test Connection
ssh -T git@github.com

## 7. Verify Configuration
git config --global --list
