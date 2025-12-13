$files = @(
    'src\pages\About.jsx',
    'src\pages\Article.jsx',
    'src\pages\Categories.jsx',
    'src\pages\Contact.jsx',
    'src\pages\Home.jsx',
    'src\pages\News.jsx',
    'src\pages\Privacy.jsx',
    'src\pages\Review.jsx',
    'src\pages\Terms.jsx',
    'src\pages\Welcome.jsx'
)

foreach ($file in $files) {
    $path = "c:\Users\user\Desktop\games\$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $content = $content -replace 'GameZone', 'GameFlex'
        Set-Content $path -Value $content -NoNewline
        Write-Host "Updated: $file"
    }
}

Write-Host "All page files updated!"
