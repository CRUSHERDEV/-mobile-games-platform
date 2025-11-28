# How to Add New Blog Articles to GameZone

This guide will show you how to easily add new blog posts to your GameZone website.

---

## Quick Start (5 Minutes)

### Step 1: Open the Articles File

Navigate to: `src/data/articles.js`

### Step 2: Copy This Template

```javascript
{
    id: "your-article-url-slug",  // Use lowercase with dashes
    title: "Your Article Title Here",
    excerpt: "A brief 1-2 sentence summary that appears on the news page.",
    category: "Features",  // Options: Features, Tech, Hardware, Reviews, Opinion
    date: "May 25, 2024",  // Current date
    author: "Your Name",   // Or "GameZone Team"
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/XXXXX/header.jpg",
    content: `
## Your Main Heading

Write your article content here using markdown-style formatting.

### Subheading

Regular paragraphs work just fine. Leave a blank line between paragraphs.

**Bold text** is created with double asterisks.

### Another Subheading

- You can add bullet points
- Like this
- But they won't render as lists (just use regular paragraphs)

### Tips Section

Keep paragraphs short and scannable. Web readers skim content.

**Pro Tip:** Use bold for emphasis on key points.

### Conclusion

Wrap up your article with a summary or call-to-action.
    `
},
```

### Step 3: Add Your Article

1. Open `src/data/articles.js`
2. Find the `export const articles = [` line at the top
3. **Paste your new article AFTER the opening bracket** (it will appear first on the site)
4. Make sure there's a comma after the closing `}` of your article
5. Save the file

### Step 4: Test It

1. Your dev server should auto-refresh
2. Go to `/news` on your site
3. Your new article should appear at the top!

---

## Article Template Fields Explained

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `id` | URL-friendly slug (lowercase, dashes) | `"best-fps-games-2024"` |
| `title` | Article headline | `"Top 10 FPS Games of 2024"` |
| `excerpt` | Short summary (1-2 sentences) | `"From Call of Duty to Counter-Strike, we rank the best shooters."` |
| `category` | Article type | `"Features"` |
| `date` | Publication date | `"May 25, 2024"` |
| `author` | Writer name | `"GameZone Team"` |
| `image` | Header image URL | Steam header or any image URL |
| `content` | Full article text (markdown) | See formatting guide below |

### Category Options

- **Features** - Top 10 lists, rankings, guides
- **Tech** - Cloud gaming, new technology, industry trends
- **Hardware** - PC builds, console reviews, peripherals
- **Reviews** - Game reviews, hardware reviews
- **Opinion** - Editorial pieces, hot takes, analysis

---

## Content Formatting Guide

### Headings

```
## Main Section (renders as H2)
### Subsection (renders as H3)
```

### Bold Text

```
**This text will be bold**
```

### Paragraphs

Just write normally. Leave blank lines between paragraphs:

```
This is paragraph one.

This is paragraph two.
```

### What Doesn't Work (Yet)

- Bullet lists (use numbered paragraphs instead)
- Links (just write the URL)
- Images in content (only the header image works)
- Code blocks

---

## Finding Good Header Images

### Option 1: Steam Game Headers (Recommended)

1. Go to any game's Steam page
2. Right-click the header image
3. Copy image address
4. It will look like: `https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg`

### Option 2: Free Stock Photos

- **Unsplash**: https://unsplash.com (search "gaming")
- **Pexels**: https://pexels.com (search "video games")
- **Pixabay**: https://pixabay.com (search "esports")

### Image Requirements

- **Aspect Ratio**: 16:9 works best
- **Minimum Size**: 800x450 pixels
- **Format**: JPG or PNG
- **Must be a direct image URL** (ending in .jpg, .png, etc.)

---

## Article Writing Tips

### SEO Best Practices

1. **Use Keywords in Title**: Include what people search for
   - ✅ "Best Gaming PC Build 2024"
   - ❌ "Our Thoughts on PCs"

2. **Write Scannable Content**:
   - Use headings every 2-3 paragraphs
   - Keep paragraphs short (3-4 sentences max)
   - Bold important points

3. **Target Word Count**: 800-1500 words
   - Too short = not valuable to Google
   - Too long = readers lose interest

4. **Answer Questions**: Think about what gamers search for
   - "Is Game Pass worth it?"
   - "Best budget gaming PC"
   - "Steam Deck vs ROG Ally"

### Content Ideas

**Evergreen Content (stays relevant):**
- Buying guides
- "How to" tutorials
- Game comparisons
- Hardware reviews

**Trending Content (timely):**
- New game releases
- Industry news reactions
- Seasonal guides ("Best games for summer")
- Event coverage (E3, Game Awards)

**Affiliate-Friendly Topics:**
- Product recommendations
- "Best of" lists
- Buying guides
- Hardware comparisons

---

## Example: Adding a New Article

Let's say you want to write "Best Gaming Monitors Under $300"

### Step 1: Create the Article Object

```javascript
{
    id: "best-gaming-monitors-under-300",
    title: "Best Gaming Monitors Under $300 in 2024",
    excerpt: "You don't need to spend a fortune for a great gaming display. Here are the best budget monitors that deliver excellent performance.",
    category: "Hardware",
    date: "May 25, 2024",
    author: "Mike Rodriguez",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    content: `
## Budget Gaming Monitors That Don't Compromise

Finding a great gaming monitor under $300 is easier than ever. Here are our top picks.

### 1. ASUS VG27AQ ($279)

**Specs:**
- 27" IPS panel
- 1440p resolution
- 165Hz refresh rate
- 1ms response time

**Why It's Great:** The best all-around option. Great colors, fast refresh rate, and G-Sync compatible.

**Best For:** Competitive gamers who want smooth gameplay.

### 2. AOC 24G2 ($189)

**Specs:**
- 24" IPS panel
- 1080p resolution
- 144Hz refresh rate
- 1ms response time

**Why It's Great:** Incredible value. Perfect for esports titles.

**Best For:** Budget-conscious gamers or secondary monitor.

### 3. LG 27GL83A-B ($299)

**Specs:**
- 27" IPS panel
- 1440p resolution
- 144Hz refresh rate
- 1ms response time

**Why It's Great:** Excellent color accuracy, great for both gaming and content creation.

**Best For:** Gamers who also do photo/video editing.

### What to Look For

**Resolution:**
- 1080p for competitive gaming (higher FPS)
- 1440p for balanced visuals and performance
- Avoid 4K under $300 (too many compromises)

**Refresh Rate:**
- Minimum 144Hz for gaming
- 165Hz+ is nice but not essential
- 60Hz is outdated for gaming monitors

**Panel Type:**
- IPS = best colors, wider viewing angles
- TN = fastest response, washed out colors
- VA = best contrast, slower response

### Buying Tips

**Where to Buy:**
- Amazon (easy returns)
- Best Buy (can see in person)
- Newegg (frequent sales)

**When to Buy:**
- Black Friday (best deals)
- Prime Day (July)
- End of month (retailers clear inventory)

**Warranty:**
- Look for 3-year minimum
- Check for dead pixel policy
- Some brands offer advanced replacement

### Conclusion

You don't need to spend $500+ for a great gaming monitor. These options deliver excellent performance at budget-friendly prices.

Our top pick? The **ASUS VG27AQ** for its perfect balance of features and price.
    `
},
```

### Step 2: Add to articles.js

Open `src/data/articles.js` and paste it after `export const articles = [`

### Step 3: Save and Check

The article will now appear at `/news` and `/news/best-gaming-monitors-under-300`

---

## Troubleshooting

### Article Doesn't Appear

**Check:**
1. Did you save the file?
2. Is there a comma after your article's closing `}`?
3. Are all quotes properly closed?
4. Check browser console for errors (F12)

### Formatting Looks Wrong

**Common Issues:**
- Missing blank lines between paragraphs
- Forgot the backticks around content: `` ` ``
- Used single asterisk instead of double for bold: `**text**`

### Image Doesn't Load

**Solutions:**
- Make sure URL ends in .jpg, .png, or .webp
- Try a different image
- Use a Steam game header (always works)

---

## Advanced: Bulk Adding Articles

If you want to add multiple articles at once:

1. Create all your article objects in a text editor
2. Copy them all
3. Paste after `export const articles = [`
4. Make sure each article has a comma after it
5. Save once

The site will update with all new articles immediately!

---

## Content Calendar Suggestions

### Weekly Schedule

- **Monday**: News/Industry article
- **Wednesday**: Guide or tutorial
- **Friday**: Review or opinion piece

### Monthly Themes

- **Week 1**: New releases
- **Week 2**: Hardware/tech
- **Week 3**: Retro/nostalgia
- **Week 4**: Community/multiplayer

---

## Need Help?

If you get stuck:

1. Check the existing articles in `articles.js` for examples
2. Copy an existing article and modify it
3. Make sure your syntax matches the template exactly
4. Check the browser console (F12) for error messages

**Remember:** The articles are just JavaScript objects. As long as the syntax is correct, they'll work!

---

## Quick Reference

**File Location:** `src/data/articles.js`

**Article URL:** `/news/your-article-id`

**Minimum Fields:** id, title, excerpt, category, date, author, image, content

**Formatting:** Markdown-style (##, ###, **bold**)

**Categories:** Features, Tech, Hardware, Reviews, Opinion

**Good Article Length:** 800-1500 words

---

Happy writing! 🎮✍️
