# Setup Script for Dynamic Portfolio

Write-Host "Setting up Dynamic Portfolio..." -ForegroundColor Green

# Install frontend dependencies
Write-Host "`nInstalling frontend dependencies..." -ForegroundColor Yellow
npm install

# Install backend dependencies
Write-Host "`nInstalling backend dependencies..." -ForegroundColor Yellow
Set-Location server
npm install
Set-Location ..

# Create .env file for backend if it doesn't exist
if (-not (Test-Path "server\.env")) {
    Write-Host "`nCreating server .env file from example..." -ForegroundColor Yellow
    Copy-Item "server\.env.example" "server\.env"
    Write-Host "✓ Created server/.env - Please update it with your MongoDB URI and other credentials" -ForegroundColor Green
} else {
    Write-Host "`nserver/.env already exists" -ForegroundColor Cyan
}

# Create .env.local for frontend if it doesn't exist
if (-not (Test-Path ".env.local")) {
    Write-Host "`nCreating frontend .env.local file..." -ForegroundColor Yellow
    "VITE_API_URL=http://localhost:5000/api" | Out-File -FilePath ".env.local" -Encoding utf8
    Write-Host "✓ Created .env.local" -ForegroundColor Green
} else {
    Write-Host "`n.env.local already exists" -ForegroundColor Cyan
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Update server/.env with your MongoDB URI and credentials"
Write-Host "2. Start the backend: cd server && npm run dev"
Write-Host "3. Start the frontend (in new terminal): npm run dev"
Write-Host "4. Create admin account (see README.md)"
Write-Host "5. Access admin panel at http://localhost:5173/admin`n"
