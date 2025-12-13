$mdFiles = Get-ChildItem -Path "c:\Users\user\Desktop\games\" -Filter "*.md"

foreach ($file in $mdFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'GameZone', 'GameFlex'
    Set-Content $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "`nAll markdown files updated!"
