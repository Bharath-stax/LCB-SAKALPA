# PowerShell Script to Download Lions Club Images
# Run this script to download all current Cloudinary images to local folders

Write-Host "Lions Club Website - Image Downloader" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "assets\images\carousel" | Out-Null
New-Item -ItemType Directory -Force -Path "assets\images\gallery" | Out-Null
New-Item -ItemType Directory -Force -Path "assets\images\other" | Out-Null

# Image URLs and filenames
$images = @(
    # Carousel Images
    @{ Filename = "community-engagement.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1754888386/pplx_project_search_images/ccfebb7375adfb53e887d92a8a3282245b1898f9.png"; Folder = "carousel" },
    @{ Filename = "vision-care.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/952886b297357b51cb3806cf1de2624f139f27bd.png"; Folder = "carousel" },
    @{ Filename = "medical-support.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1754813954/pplx_project_search_images/279d9be1e7c8dab3ce9d5b570a8818311130ed6d.png"; Folder = "carousel" },
    @{ Filename = "community-event.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051898/pplx_project_search_images/c8d2701de7e231d9e62db7f8f61369fedb391199.png"; Folder = "carousel" },
    @{ Filename = "fundraising.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/f7a9a6d8ca6c0e59015add3603c5f7cac716b1eb.png"; Folder = "carousel" },
    @{ Filename = "volunteer-spirit.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/20e044c87c05a6e10bde813370d1f69b5fe49177.png"; Folder = "carousel" },
    
    # Gallery Images
    @{ Filename = "community-engagement.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1754888386/pplx_project_search_images/ccfebb7375adfb53e887d92a8a3282245b1898f9.png"; Folder = "gallery" },
    @{ Filename = "lions-service.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/952886b297357b51cb3806cf1de2624f139f27bd.png"; Folder = "gallery" },
    @{ Filename = "medical-support.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1754813954/pplx_project_search_images/279d9be1e7c8dab3ce9d5b570a8818311130ed6d.png"; Folder = "gallery" },
    @{ Filename = "community-event.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051898/pplx_project_search_images/c8d2701de7e231d9e62db7f8f61369fedb391199.png"; Folder = "gallery" },
    @{ Filename = "fundraising.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/f7a9a6d8ca6c0e59015add3603c5f7cac716b1eb.png"; Folder = "gallery" },
    @{ Filename = "volunteer-spirit.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/20e044c87c05a6e10bde813370d1f69b5fe49177.png"; Folder = "gallery" },
    
    # Other Images
    @{ Filename = "logo.png"; URL = "https://pplx-res.cloudinary.com/image/upload/v1756051896/pplx_project_search_images/3d4c0ccdb67a33bd71dc9bf3d831e244111d0e14.png"; Folder = "other" },
    @{ Filename = "hero-image.jpg"; URL = "https://pplx-res.cloudinary.com/image/upload/v1754976680/pplx_project_search_images/480ac8cae183be97eaebcf7385a6bd1edf8d60cf.png"; Folder = "other" }
)

# Download each image
$successCount = 0
$totalCount = $images.Count

foreach ($image in $images) {
    try {
        $outputPath = "assets\images\$($image.Folder)\$($image.Filename)"
        Write-Host "Downloading: $($image.Filename) to $($image.Folder) folder..." -ForegroundColor Yellow
        
        # Use Invoke-WebRequest to download the image
        Invoke-WebRequest -Uri $image.URL -OutFile $outputPath -ErrorAction Stop
        
        Write-Host "Downloaded: $($image.Filename)" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "Failed to download: $($image.Filename)" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Download Complete!" -ForegroundColor Green
Write-Host "Successfully downloaded: $successCount/$totalCount images" -ForegroundColor Green
Write-Host ""
Write-Host "Folder structure:" -ForegroundColor Cyan
Write-Host "assets\images\carousel\  - Homepage carousel images" -ForegroundColor White
Write-Host "assets\images\gallery\   - Gallery section images" -ForegroundColor White
Write-Host "assets\images\other\     - Logo and hero image" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Update image-config.js to use local paths" -ForegroundColor White
Write-Host "2. Replace Cloudinary URLs with local paths" -ForegroundColor White
Write-Host "3. Test the website with local images" -ForegroundColor White
Write-Host ""
pause
