# Create GitHub Repository and Commit - Manual Commands

## Step 1: Navigate to Project Directory
```bash
cd A:\LCB\v1
```

## Step 2: Initialize Git Repository
```bash
git init
```

## Step 3: Add All Files
```bash
git add .
```

## Step 4: Create Initial Commit
```bash
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
```

## Step 5A: Create Repository on GitHub First
1. Go to https://github.com/new
2. Repository name: `lions-club-sankalpa`
3. Description: `Lions Club of Bangalore Sankalpa - Community Service Website`
4. Select Public
5. Don't initialize with README (we have files)
6. Click "Create repository"

## Step 5B: Connect and Push
```bash
# Add remote repository
git remote add origin https://github.com/Bharath-stax/lions-club-sankalpa.git

# Set main branch and push
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub CLI (if installed)
```bash
# Install GitHub CLI first (if not installed)
winget install GitHub.cli

# Create repository and push in one command
gh repo create lions-club-sankalpa --public --source=. --remote=origin --push
```

## Quick One-Liner (after GitHub repo created)
```bash
cd A:\LCB\v1 && git init && git add . && git commit -m "Initial commit: Lions Club website" && git remote add origin https://github.com/Bharath-stax/lions-club-sankalpa.git && git branch -M main && git push -u origin main
```
