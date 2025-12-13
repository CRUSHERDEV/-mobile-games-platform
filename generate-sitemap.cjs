const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap.xml for SEO
 * This creates a basic sitemap - will be enhanced after getting articles data
 */
function generateSitemap() {
    const baseUrl = 'https://your-domain.com'; // UPDATE THIS after Vercel deployment
    const currentDate = new Date().toISOString().split('T')[0];

    // Core static pages
    const pages = [
        { url: '', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
        { url: '/categories', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
        { url: '/news', priority: '0.9', changefreq: 'daily', lastmod: currentDate },
        { url: '/about-us', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
        { url: '/contact', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
        { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly', lastmod: currentDate },
        { url: '/terms-of-service', priority: '0.5', changefreq: 'yearly', lastmod: currentDate }
    ];

    // Generate XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    pages.forEach(page => {
        xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    // Write to public folder
    const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📄 Total URLs: ${pages.length}`);
    console.log(`💾 Saved to: public/sitemap.xml`);
    console.log('\n📝 IMPORTANT: Update baseUrl with your Vercel domain!');
    console.log('   Edit generate-sitemap.cjs line 9');
    console.log('   Change: https://your-domain.com');
    console.log('   To: https://your-actual-domain.vercel.app');
}

// Run
try {
    generateSitemap();
} catch (error) {
    console.error('Error generating sitemap:', error.message);
    process.exit(1);
}
