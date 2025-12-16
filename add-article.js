import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ARTICLES_FILE = path.join(__dirname, 'src', 'data', 'articles.js');

// Daily gaming news sources to check
const NEWS_SOURCES = [
    { name: 'IGN', url: 'https://www.ign.com/news' },
    { name: 'GameSpot', url: 'https://www.gamespot.com/news/' },
    { name: 'PC Gamer', url: 'https://www.pcgamer.com/news/' }
];

/**
 * Generate a new article template
 * @param {Object} options - Article details
 * @returns {string} - Formatted article object
 */
function generateArticle({ id, title, excerpt, category = 'News', image, content }) {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return `    {
        id: "${id}",
        title: "${title}",
        excerpt: "${excerpt}",
        category: "${category}",
        date: "${today}",
        author: "GameFlex Team",
        image: "${image}",
        content: \`
${content}
        \`
    },`;
}

/**
 * Add a new article to the articles.js file
 * @param {Object} articleData - Article details
 */
function addArticle(articleData) {
    try {
        // Read the current articles file
        let fileContent = fs.readFileSync(ARTICLES_FILE, 'utf8');

        // Generate the new article
        const newArticle = generateArticle(articleData);

        // Find the position to insert (after "export const articles = [")
        const insertPosition = fileContent.indexOf('export const articles = [') + 'export const articles = ['.length;

        // Insert the new article at the beginning of the array
        fileContent =
            fileContent.slice(0, insertPosition) +
            '\n' + newArticle + '\n' +
            fileContent.slice(insertPosition);

        // Write back to file
        fs.writeFileSync(ARTICLES_FILE, fileContent, 'utf8');

        console.log('✅ Article added successfully!');
        console.log(`📝 Title: ${articleData.title}`);
        console.log(`🆔 ID: ${articleData.id}`);
        console.log(`📅 Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`);

        return true;
    } catch (error) {
        console.error('❌ Error adding article:', error.message);
        return false;
    }
}

/**
 * Interactive CLI for adding articles
 */
async function interactiveAdd() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    console.log('\n🎮 GameFlex Daily Blog Post Generator\n');
    console.log('📰 News Sources to check:');
    NEWS_SOURCES.forEach(source => console.log(`   - ${source.name}: ${source.url}`));
    console.log();

    try {
        const title = await question('📰 Article Title: ');
        const id = await question('🆔 Article ID (URL slug, e.g., "marvel-rivals-new-update"): ');
        const excerpt = await question('📝 Short Excerpt (1-2 sentences): ');
        const category = await question('📂 Category (News/Reviews/Features/Preview/Hardware/Opinion) [News]: ') || 'News';
        const image = await question('🖼️  Image URL (Steam header or direct link): ');

        console.log('\n✍️  Article Content (Markdown format)');
        console.log('    Type your content. Press Ctrl+D (Linux/Mac) or Ctrl+Z (Windows) when done:\n');

        let content = '';
        rl.on('line', (line) => {
            content += line + '\n';
        });

        rl.on('close', () => {
            if (!content.trim()) {
                content = `## ${title}

Your article content here. Write 300-500 words minimum.

### Key Points

- Point 1
- Point 2
- Point 3

### Our Take

Your analysis and opinion here.`;
            }

            const success = addArticle({
                id,
                title,
                excerpt,
                category,
                image,
                content: content.trim()
            });

            if (success) {
                console.log('\n✨ Article published! Check your /news page.\n');
            }
        });

    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
}

/**
 * Quick add with predefined template
 */
function quickAdd(title, id, excerpt, imageUrl) {
    const defaultContent = `## ${title}

Breaking news from the gaming world! 

### What Happened

[Write what happened here - 2-3 paragraphs]

### Why It Matters

[Explain the significance - 1-2 paragraphs]

### Our Take

[Your opinion and analysis - 1-2 paragraphs]

Stay tuned for more updates!`;

    return addArticle({
        id,
        title,
        excerpt,
        category: 'News',
        image: imageUrl,
        content: defaultContent
    });
}

// Command line interface
// Command line interface
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        // Interactive mode
        interactiveAdd();
    } else if (args.length >= 4) {
        // Quick mode: node add-article.js "Title" "id" "excerpt" "imageUrl"
        quickAdd(args[0], args[1], args[2], args[3]);
    } else {
        console.log('Usage:');
        console.log('  Interactive: node add-article.js');
        console.log('  Quick: node add-article.js "Title" "id" "excerpt" "imageUrl"');
    }
}

export { addArticle, generateArticle, quickAdd };
