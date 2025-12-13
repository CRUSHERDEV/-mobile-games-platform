# 🚀 Quick Start Guide

## See Your Changes Live (5 Minutes)

### Deploy to Vercel (Recommended)

1. **Go to**: https://vercel.com/signup
2. **Click**: "Continue with GitHub"
3. **Click**: "Add New..." → "Project"
4. **Select**: `CRUSHERDEV/-mobile-games-platform`
5. **Click**: "Deploy"

**Done!** Your site is live at: `https://your-project.vercel.app`

✨ **Every git push automatically updates your live site!**

---

## Daily Blog Post (2 Minutes)

### Option 1: Interactive Tool

```bash
node add-article.js
```

Then fill in:
- Title: "Your Article Title"
- ID: "article-url-slug"
- Excerpt: "Short summary"
- Image: "https://image-url.com/image.jpg"
- Content: [Your article text]

### Option 2: Super Quick

```bash
node add-article.js "Title" "id" "Short excerpt" "imageURL"
```

### Publish

```bash
git add .
git commit -m "Daily post: Article title"
git push origin main
```

**Live in 30 seconds!**

---

## Daily Workflow

**Every Morning (10-15 minutes):**

1. ☕ Check news sites (2 min)
   - reddit.com/r/games
   - ign.com/news

2. ✍️ Run blog tool (5 min)
   ```bash
   node add-article.js
   ```

3. 🚀 Push to GitHub (1 min)
   ```bash
   git add .
   git commit -m "Daily: [topic]"
   git push
   ```

4. ✅ **Article is live!**

---

## Image Sources (Free)

**For Game Articles:**
```
Steam Headers:
https://cdn.cloudflare.steamstatic.com/steam/apps/[GAME_ID]/header.jpg

Example:
https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg
```

**Find Game ID:**
1. Go to Steam store page
2. URL shows: `steam/apps/1172620/GameName/`
3. Use that number: `1172620`

**Stock Images:**
- Unsplash: https://unsplash.com/s/photos/gaming
- Pexels: https://www.pexels.com/search/gaming/

---

## Tips for Success

✅ **Write daily** (consistency > perfection)
✅ **300-500 words** minimum
✅ **Add your opinion** (makes it unique)
✅ **Use trending topics** (better traffic)
✅ **Include images** (better engagement)

---

## Need Help?

📖 **Full Guide**: `DEPLOYMENT_AND_AUTOMATION_GUIDE.md`
📖 **Writing Tips**: `DAILY_BLOG_UPDATE_GUIDE.md`

**Quick Test:**
```bash
# Test the blog tool
node add-article.js

# Check your website locally
npm run dev
# Visit: http://localhost:5173/news
```

---

## 🎯 Your Checklist

**One-Time Setup:**
```
□ Deploy to Vercel
□ Test blog automation tool
□ Bookmark news sources
```

**Daily (10 min):**
```
□ Find trending gaming news
□ Run: node add-article.js
□ Write 300+ words
□ git push
```

**That's it!** Your GameFlex blog is automated! 🎮✨
