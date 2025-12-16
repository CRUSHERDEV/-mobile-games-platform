import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fully Automated Blog Post Generator
 * Uses news APIs and AI to generate professional gaming articles daily
 */

// Configuration
const CONFIG = {
    ARTICLES_FILE: path.join(__dirname, 'src', 'data', 'articles.js'),
    NEWS_API_KEY: process.env.NEWS_API_KEY || '', // Get from newsapi.org
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '', // Get from aistudio.google.com
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
 * Generate professional article using AI (Gemini)
 */
async function generateArticleContent(newsItem) {
    if (!CONFIG.GEMINI_API_KEY) {
        console.log('⚠️  No Gemini API key found. Using template content.');
        return generateTemplateContent(newsItem);
    }

    try {
        const systemPrompt = `You are an SEO-expert gaming journalist writing for GameFlex (gameflexhub.com), a growing gaming news website targeting Google rankings.

CRITICAL SEO REQUIREMENTS:
- Target LONG-TAIL KEYWORDS (e.g., "best free RPG games 2025", "[game name] complete guide")
- Include primary keyword in title (H1)
- Use keyword in first paragraph (naturally)
- Use keyword 5-7 times throughout article (naturally)
- Write 600-800 words (optimal for SEO)
- Use descriptive headings (H2, H3) with related keywords
- ALWAYS use the current year: 2025
- Do NOT mention "2024" as a "future" year. Treat 2025 as the current active year.

Writing Style:
- Professional yet engaging, conversational tone
- First-person plural ("we", "our") for brand voice
- Include specific details, statistics, features
- Provide actionable insights and opinions
- Natural keyword placement (NO stuffing)

Structure Requirements:
## [Primary Keyword in Title]

**Opening paragraph with keyword**

### What Happened (Facts & Details)
- Include specific information
- Use related keywords naturally

### Why It Matters (Analysis & Impact)
- Explain significance to gamers
- Use industry terms

### Key Features/Highlights
- Bulleted list of important points
- Include searchable terms

### Our Expert Take (Opinion & Recommendation)
- GameFlex perspective
- Include future outlook for 2025-2026

### What Gamers Should Know
- Practical advice
- Actionable insights

Use gaming terminology naturally. Make it informative, engaging, and SEO-friendly. Focus on long-tail keywords that can rank quickly.`;

        const userPrompt = `Write an SEO-optimized gaming article about: ${newsItem.title}

Context: ${newsItem.description || newsItem.title}

Source: ${newsItem.source || 'Gaming News'}

Target a long-tail keyword related to this topic. Make it rank-worthy for Google. Ensure all dates refer to 2025.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: systemPrompt + "\n\n" + userPrompt
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            return data.candidates[0].content.parts[0].text;
        }

        console.error('Gemini API Error Response:', JSON.stringify(data, null, 2));
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

    // Extract game name if present for keyword targeting
    const gameMatch = title.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/);
    const gameName = gameMatch ? gameMatch[0] : 'trending game';

    return `## ${title} - Complete Coverage 2025

The gaming community is buzzing with the latest ${gameName} news. Here's everything you need to know about this exciting development.

### What Happened - Key Details

${description}

This announcement has captured the attention of gamers worldwide, and for good reason. The update comes at a pivotal moment in the industry, where player experience and innovation continue to drive the gaming landscape forward.

Industry insiders suggest this move could significantly impact how players engage with ${gameName} and similar titles in the coming months.

### Why This Matters to Gamers

This development represents a major shift in the gaming ecosystem. For players invested in ${gameName}, this means new opportunities to enhance their gaming experience and explore fresh content that pushes the boundaries of what's possible in modern gaming.

The broader implications for the industry are substantial. As developers continue to innovate and respond to player feedback, we're witnessing an evolution in how games are developed, updated, and monetized. This trend toward player-centric design is reshaping the entire gaming landscape.

### Key Features and Highlights

- **Enhanced Player Experience**: Focus on quality-of-life improvements
- **Community-Driven Updates**: Listening to player feedback
- **Technical Innovation**: Leveraging latest gaming technology
- **Long-Term Support**: Commitment to ongoing development
- **Accessibility**: Making gaming more inclusive

### Our GameFlex Take - Expert Analysis

At GameFlex, we believe this is a promising step forward for ${gameName} and the gaming community. The focus on player experience and continuous improvement demonstrates a commitment to delivering quality content that resonates with modern gamers.

While questions remain about long-term implementation and community reception, the initial signs point toward positive momentum. We're particularly excited about the potential for innovation and the signal this sends about industry priorities.

The development team's responsiveness to community feedback is especially noteworthy. This player-first approach is exactly what the gaming industry needs more of.

### What Gamers Should Know

As this story continues to unfold, here's what you should keep in mind:

1. **Stay Updated**: Follow official channels for the latest information
2. **Community Engagement**: Join discussions to share your perspective
3. **Try It Out**: Experience the updates firsthand when available
4. **Provide Feedback**: Your input helps shape future development

**Expert Tip**: Keep an eye on ${gameName} community forums and social media for insider insights and early previews of upcoming features.

### Looking Ahead

The coming weeks will be crucial in determining the full impact of this announcement. We'll be monitoring player reactions, performance metrics, and developer responses closely.

Stay tuned to GameFlex for comprehensive coverage, expert analysis, and the latest updates as this story develops. We're committed to bringing you the insights that matter most to your gaming experience.

**GameFlex Rating: 7.5/10** - Promising developments with strong potential for positive impact on the gaming community.`;
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

    // Use reliable placeholder service with brand colors since Unsplash Source is deprecated
    return `https://placehold.co/1200x630/121212/00ff9d?text=Gaming+News&font=roboto`;
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
// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    automateDaily().then(result => {
        if (result.success) {
            process.exit(0);
        } else {
            console.error('Automation failed');
            process.exit(1);
        }
    });
}

export { automateDaily, fetchGamingNews, generateArticleContent, addArticleToFile };
