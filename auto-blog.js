const fs = require('fs');
const path = require('path');

/**
 * Fully Automated Blog Post Generator
 * Uses news APIs and AI to generate professional gaming articles daily
 */

// Configuration
const CONFIG = {
    ARTICLES_FILE: path.join(__dirname, 'src', 'data', 'articles.js'),
    NEWS_API_KEY: process.env.NEWS_API_KEY || '', // Get from newsapi.org
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '', // Get from openai.com
    STEAM_API_KEY: process.env.STEAM_API_KEY || '', // Get from steamcommunity.com/dev/apikey
};

/**
 * Fetch latest gaming news from multiple sources
 */
async function fetchGamingNews() {
    try {
        // Method 1: News API (newsapi.org)
        if (CONFIG.NEWS_API_KEY) {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=gaming OR "video games" OR esports&sortBy=publishedAt&language=en&apiKey=${CONFIG.NEWS_API_KEY}&pageSize=10`
            );
            const data = await response.json();
            if (data.articles && data.articles.length > 0) {
                return data.articles.slice(0, 5);
            }
        }

        // Method 2: Reddit Gaming (no API key needed)
        const redditResponse = await fetch('https://www.reddit.com/r/gaming/hot.json?limit=10');
        const redditData = await redditResponse.json();

        if (redditData.data && redditData.data.children) {
            return redditData.data.children.map(post => ({
                title: post.data.title,
                description: post.data.selftext || post.data.title,
                url: post.data.url,
                source: 'Reddit Gaming',
                publishedAt: new Date(post.data.created_utc * 1000).toISOString()
            }));
        }

        // Method 3: RSS Feed parsing (fallback)
        return await fetchFromRSS();

    } catch (error) {
        console.error('Error fetching news:', error.message);
        return [];
    }
}

/**
 * Fetch from gaming RSS feeds
 */
async function fetchFromRSS() {
    const RSS_FEEDS = [
        'https://www.ign.com/articles',
        'https://www.pcgamer.com/rss/',
        'https://kotaku.com/rss'
    ];

    // Simple RSS parsing or use a library like 'rss-parser'
    // For now, return mock data as backup
    return [{
        title: 'Latest Gaming News Update',
        description: 'Check out today\'s top gaming stories and updates',
        url: 'https://gaming.com',
        source: 'Gaming News',
        publishedAt: new Date().toISOString()
    }];
}

/**
 * Generate professional article using AI
 */
async function generateArticleContent(newsItem) {
    if (!CONFIG.OPENAI_API_KEY) {
        console.log('⚠️  No OpenAI API key found. Using template content.');
        return generateTemplateContent(newsItem);
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // Cheaper and faster
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional gaming journalist writing for GameFlex, a premium gaming news website. 
                        
Writing style guidelines:
- Professional yet engaging tone
- 400-600 words
- SEO-optimized with natural keyword placement
- Include analysis and opinion, not just facts
- Use proper markdown formatting with headers
- Avoid clickbait, focus on value
- Write in first-person plural ("we", "our") for brand voice

Structure:
## Opening (compelling hook)
### What Happened (facts and details)
### Why It Matters (analysis)
### Our Take (expert opinion)
### What's Next (forward-looking)

Make it informative, professional, and engaging.`
                    },
                    {
                        role: 'user',
                        content: `Write a professional gaming article about: ${newsItem.title}\n\nContext: ${newsItem.description || newsItem.title}\n\nSource: ${newsItem.source || 'Gaming News'}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        const data = await response.json();

        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        }

        return generateTemplateContent(newsItem);

    } catch (error) {
        console.error('Error generating AI content:', error.message);
        return generateTemplateContent(newsItem);
    }
}

/**
 * Generate template content (fallback when no AI)
 */
function generateTemplateContent(newsItem) {
    const title = newsItem.title;
    const description = newsItem.description || newsItem.title;

    return `## ${title}

The gaming world is buzzing with the latest developments. Here's what you need to know.

### What Happened

${description}

This news has caught the attention of gamers worldwide, and for good reason. The announcement comes at a crucial time in the gaming industry, where innovation and player experience are more important than ever.

### Why It Matters

This development represents a significant shift in how we experience gaming content. For players, this means new opportunities to engage with their favorite games and communities.

The broader implications for the gaming industry are substantial. As developers continue to push boundaries and explore new technologies, we're seeing a transformation in what's possible in interactive entertainment.

### Our Take

At GameFlex, we believe this is an exciting development for the gaming community. The focus on player experience and innovation shows a commitment to advancing the medium we all love.

While there are always questions about implementation and long-term impact, the initial signs are promising. We'll be watching closely to see how this unfolds.

### What's Next

As this story develops, we'll continue to provide updates and analysis. The gaming community's response will be crucial in shaping how this evolves.

Stay tuned to GameFlex for the latest updates and expert coverage of all things gaming.

**Our Rating: 7.5/10** - Promising developments with room for growth.`;
}

/**
 * Generate article ID from title
 */
function generateArticleId(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
}

/**
 * Find appropriate image for article
 */
async function findArticleImage(newsItem) {
    // Try to extract image from news item
    if (newsItem.urlToImage) {
        return newsItem.urlToImage;
    }

    // Check if it's a Steam game mention
    const steamMatch = newsItem.title.match(/steam|valve|half-life|portal|dota/i);
    if (steamMatch) {
        // Use Steam header image (example App ID)
        return 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg';
    }

    // Use Unsplash random gaming image
    return `https://source.unsplash.com/1600x900/?gaming,videogames&sig=${Date.now()}`;
}

/**
 * Add article to articles.js file
 */
function addArticleToFile(articleData) {
    try {
        let fileContent = fs.readFileSync(CONFIG.ARTICLES_FILE, 'utf8');

        const today = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const newArticle = `    {
        id: "${articleData.id}",
        title: "${articleData.title.replace(/"/g, '\\"')}",
        excerpt: "${articleData.excerpt.replace(/"/g, '\\"')}",
        category: "${articleData.category}",
        date: "${today}",
        author: "GameFlex Team",
        image: "${articleData.image}",
        content: \`
${articleData.content}
        \`
    },`;

        const insertPosition = fileContent.indexOf('export const articles = [') + 'export const articles = ['.length;

        fileContent =
            fileContent.slice(0, insertPosition) +
            '\n' + newArticle + '\n' +
            fileContent.slice(insertPosition);

        fs.writeFileSync(CONFIG.ARTICLES_FILE, fileContent, 'utf8');

        console.log('✅ Article added successfully!');
        console.log(`📝 Title: ${articleData.title}`);
        console.log(`🆔 ID: ${articleData.id}`);
        console.log(`📅 Date: ${today}`);

        return true;
    } catch (error) {
        console.error('❌ Error adding article:', error.message);
        return false;
    }
}

/**
 * Main automation function
 */
async function automateDaily() {
    console.log('🤖 GameFlex Automated Blog Post Generator');
    console.log('⏰ Starting daily automation...\n');

    try {
        // Step 1: Fetch latest gaming news
        console.log('📰 Fetching latest gaming news...');
        const newsItems = await fetchGamingNews();

        if (!newsItems || newsItems.length === 0) {
            console.log('⚠️  No news items found. Using fallback content.');
            newsItems = [{
                title: 'Today in Gaming: Latest Updates and Trends',
                description: 'A roundup of today\'s most important gaming news and developments',
                source: 'GameFlex'
            }];
        }

        console.log(`✅ Found ${newsItems.length} news items\n`);

        // Step 2: Select the most relevant news item
        const selectedNews = newsItems[0]; // Can add more sophisticated selection logic
        console.log(`📌 Selected: ${selectedNews.title}\n`);

        // Step 3: Generate article content with AI
        console.log('✍️  Generating professional article content...');
        const articleContent = await generateArticleContent(selectedNews);
        console.log('✅ Content generated\n');

        // Step 4: Find or generate article image
        console.log('🖼️  Finding article image...');
        const articleImage = await findArticleImage(selectedNews);
        console.log(`✅ Image: ${articleImage}\n`);

        // Step 5: Create article data
        const articleId = generateArticleId(selectedNews.title);
        const articleExcerpt = selectedNews.description
            ? selectedNews.description.substring(0, 150) + '...'
            : selectedNews.title.substring(0, 150) + '...';

        const articleData = {
            id: articleId,
            title: selectedNews.title,
            excerpt: articleExcerpt,
            category: 'News',
            image: articleImage,
            content: articleContent
        };

        // Step 6: Add to articles.js
        console.log('💾 Adding article to blog...');
        const success = addArticleToFile(articleData);

        if (success) {
            console.log('\n🎉 Automation completed successfully!');
            console.log('📊 Summary:');
            console.log(`   Title: ${articleData.title}`);
            console.log(`   ID: ${articleData.id}`);
            console.log(`   Words: ~${articleContent.split(' ').length}`);
            console.log(`   Category: ${articleData.category}`);
            console.log('\n✅ Article is ready to be committed to GitHub!');

            return { success: true, article: articleData };
        } else {
            console.log('\n❌ Automation failed');
            return { success: false };
        }

    } catch (error) {
        console.error('\n❌ Automation error:', error.message);
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}

// Run if called directly
if (require.main === module) {
    automateDaily().then(result => {
        if (result.success) {
            process.exit(0);
        } else {
            process.exit(1);
        }
    });
}

module.exports = { automateDaily, fetchGamingNews, generateArticleContent, addArticleToFile };
