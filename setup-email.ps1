# Quick Setup Script for Email Functionality

Write-Host "=== GameZone Email Setup ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install Supabase CLI
Write-Host "Step 1: Installing Supabase CLI..." -ForegroundColor Yellow
npm install -g supabase

Write-Host ""
Write-Host "Step 2: You need to get a Resend API key" -ForegroundColor Yellow
Write-Host "1. Go to https://resend.com and sign up (it's free)" -ForegroundColor White
Write-Host "2. Create an API key in the dashboard" -ForegroundColor White
Write-Host "3. Copy the API key (starts with 're_')" -ForegroundColor White
Write-Host ""

$apiKey = Read-Host "Paste your Resend API key here"

if ($apiKey) {
    Write-Host ""
    Write-Host "Step 3: Setting up Supabase secrets..." -ForegroundColor Yellow
    
    # Set the secret
    supabase secrets set RESEND_API_KEY=$apiKey
    
    Write-Host ""
    Write-Host "Step 4: Deploying Edge Function..." -ForegroundColor Yellow
    supabase functions deploy subscribe
    
    Write-Host ""
    Write-Host "✅ Setup complete! Try subscribing to your newsletter now." -ForegroundColor Green
} else {
    Write-Host "❌ No API key provided. Please run this script again with your Resend API key." -ForegroundColor Red
}
