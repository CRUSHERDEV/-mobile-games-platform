# 🤖 Fully Automated Blog Post System - Setup Guide

## Overview

Your GameFlex blog can now publish professional gaming articles **completely automatically** every day without any human intervention. The system:

✅ Fetches latest gaming news from multiple sources
✅ Uses AI to write professional 400-600 word articles
✅ Finds appropriate images automatically
✅ Publishes to your blog daily
✅ Commits to GitHub automatically
✅ Deploys to your live website via Vercel

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Get API Keys (Free)

#### A. News API (Free - 100 requests/day)

1. Go to: https://newsapi.org/register
2. Sign up (free account)
3. Copy your API key
4. **Cost**: FREE forever

#### B. OpenAI API (Paid - ~$0.002 per article)

1. Go to: https://platform.openai.com/signup
2. Create account
3. Add $5-10 credit: https://platform.openai.com/account/billing
4. Create API key: https://platform.openai.com/api-keys
5. Copy your API key

**Cost Breakdown:**
- GPT-4o-mini: ~$0.002 per article
- Daily (30 days): ~$0.06/month
- **Total**: Under $1/month for daily posts

**Free Alternative**: The system works without OpenAI (uses templates), but AI-generated content is more professional.

---

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository:
   ```
   https://github.com/CRUSHERDEV/-mobile-games-platform
   ```

2. Click **Settings** → **Secrets and variables** → **Actions**

3. Click **New repository secret**

4. Add these secrets:

   **Secret 1:**
   - Name: `NEWS_API_KEY`
   - Value: [Your News API key]
   - Click "Add secret"

   **Secret 2:**
   - Name: `OPENAI_API_KEY`
   - Value: [Your OpenAI API key]
   - Click "Add secret"

   **Secret 3 (Optional):**
   - Name: `STEAM_API_KEY`
   - Value: [Your Steam API key from https://steamcommunity.com/dev/apikey]
   - Click "Add secret"

---

### Step 3: Enable GitHub Actions

1. In your GitHub repo, click **Actions** tab

2. If prompted, click **"I understand my workflows, go ahead and enable them"**

3. You should see: "Daily Automated Blog Post" workflow

4. Click on it

5. Click **"Run workflow"** → **"Run workflow"** (to test)

6. Wait 1-2 minutes

7. Check if a new blog post was added to `src/data/articles.js`

---

### Step 4: Deploy to Vercel (if not done yet)

1. Go to: https://vercel.com/signup
2. Sign in with GitHub
3. Import your repository
4. Click **Deploy**
5. Your site is live!

**Important**: Vercel will automatically redeploy when GitHub Actions commits new posts!

---

## ⚙️ How It Works

### Daily Automation Flow

```
9:00 AM UTC Daily
    ↓
GitHub Actions Triggers
    ↓
Fetch Gaming News (Reddit, News API, RSS)
    ↓
Select Top Story
    ↓
Generate Professional Article with AI (400-600 words)
    ↓
Find Appropriate Image
    ↓
Add to src/data/articles.js
    ↓
Commit to GitHub ("🤖 Daily automated blog post - 2024-12-13")
    ↓
Vercel Auto-Deploys (30-60 seconds)
    ↓
✅ New Post Live on Your Website!
```

**Total Time**: 1-2 minutes (fully automated)

---

## 🎛️ Configuration Options

### Change Publishing Time

Edit `.github/workflows/daily-blog-post.yml`:

```yaml
schedule:
  - cron: '0 9 * * *'  # 9 AM UTC
```

**Cron examples:**
- `0 6 * * *` = 6 AM UTC
- `0 12 * * *` = 12 PM UTC (Noon)
- `0 0 * * *` = Midnight UTC
- `0 */6 * * *` = Every 6 hours

**Time zones:**
- UTC 0 = London time
- UTC - 5 = EST (New York)
- UTC - 8 = PST (Los Angeles)

**Tip**: Use https://crontab.guru/ to create custom schedules

### Multiple Posts Per Day

```yaml
schedule:
  - cron: '0 9 * * *'   # 9 AM
  - cron: '0 15 * * *'  # 3 PM
  - cron: '0 21 * * *'  # 9 PM
```

---

## 🧪 Testing

### Test Locally (Before Committing)

1. Create `.env` file in your project root:
   ```bash
   # Copy from .env.example
   NEWS_API_KEY=your_key_here
   OPENAI_API_KEY=your_key_here
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run automation:
   ```bash
   node auto-blog.js
   ```

4. Check `src/data/articles.js` for new article

5. Test locally:
   ```bash
   npm run dev
   # Visit http://localhost:5173/news
   ```

### Manual Trigger from GitHub

1. Go to **Actions** tab in GitHub
2. Click "Daily Automated Blog Post"
3. Click "Run workflow" dropdown
4. Click "Run workflow" button
5. Refresh page after 1-2 minutes
6. Check "Commit and push changes" step for results

---

## 📊 Monitoring & Logs

### Check if Automation is Working

**Method 1: GitHub Actions**
1. Go to your repo → **Actions** tab
2. Click latest "Daily Automated Blog Post" run
3. Expand "Generate automated blog post" to see logs
4. Look for: ✅ "Automation completed successfully!"

**Method 2: Commit History**
1. Go to your repo → **Commits**
2. Look for: "🤖 Daily automated blog post - [DATE]"
3. Each commit = successful post

**Method 3: Your Website**
1. Visit: https://your-site.vercel.app/news
2. Check for new posts daily
3. Posts should appear automatically

### Troubleshooting

**No posts appearing?**
- Check GitHub Actions logs for errors
- Verify API keys are set correctly in Secrets
- Make sure GitHub Actions is enabled
- Check if News API/OpenAI API have quota remaining

**Posts are low quality?**
- OpenAI API key not set (using templates instead)
- Add OpenAI key for AI-generated content
- Or improve templates in `auto-blog.js`

**Too expensive?**
- Use free tier (no OpenAI) = Uses templates
- Or reduce frequency (weekly instead of daily)
- Or use cheaper AI model (already using cheapest: gpt-4o-mini)

---

## 💰 Cost Analysis

### Monthly Costs

**With AI (OpenAI GPT-4o-mini):**
```
Daily posts (30): 30 × $0.002 = $0.06/month
Buffer/extras: +$0.04
Total: ~$0.10/month
```

**Without AI (Template-based):**
```
News API: Free (100 req/day)
GitHub Actions: Free
Vercel: Free
Total: $0/month
```

**Recommended**: Start with AI ($0.10/month) for professional quality

---

## 🎨 Customization

### Modify AI Writing Style

Edit `auto-blog.js` line 100-120:

```javascript
{
    role: 'system',
    content: `You are a professional gaming journalist...

CHANGE THIS TO YOUR PREFERRED STYLE:
- More casual? "friendly gaming enthusiast"
- More technical? "technical gaming analyst"  
- More news-focused? "objective news reporter"
- More opinion? "opinionated gaming critic"
`
}
```

### Change Article Length

```javascript
messages: [...],
temperature: 0.7,
max_tokens: 1000  // Increase for longer articles (1000 ≈ 400-600 words)
```

### News Sources Priority

Edit `auto-blog.js` line 156:

```javascript
const selectedNews = newsItems[0]; // First item

// Or select randomly:
const selectedNews = newsItems[Math.floor(Math.random() * newsItems.length)];

// Or filter by keywords:
const selectedNews = newsItems.find(item => 
    item.title.toLowerCase().includes('steam') || 
    item.title.toLowerCase().includes('playstation')
) || newsItems[0];
```

---

## 🔒 Security Best Practices

✅ **DO:**
- Store API keys in GitHub Secrets (never in code)
- Use `.env` file for local testing
- Add `.env` to `.gitignore`
- Rotate API keys periodically

❌ **DON'T:**
- Commit `.env` file with real keys
- Share API keys publicly
- Push keys to GitHub
- Use production keys in public repos

---

## 📈 Growth Features (Advanced)

### Add Email Notifications

Install `@sendgrid/mail` or `nodemailer` and add to `auto-blog.js`:

```javascript
// After successful post
await sendEmail({
    to: 'you@email.com',
    subject: '✅ Daily post published',
    text: `New article: ${articleData.title}`
});
```

### Add Social Media Posting

Use Twitter API or Buffer API to auto-tweet new posts.

### Add SEO Optimization

- Generate meta tags automatically
- Create sitemap updates
- Submit to Google Search Console

### Analytics Integration

Track which automated posts perform best and adjust topics accordingly.

---

## 🎯 Recommended Setup

**For Best Results:**

1. ✅ Deploy to Vercel (auto-updates)
2. ✅ Add OpenAI API key (~$0.10/month)
3. ✅ Add News API key (free)
4. ✅ Set schedule to 9 AM your timezone
5. ✅ Monitor first week daily
6. ✅ Adjust based on performance

**Expected Results:**
- 📝 Daily professional articles (400-600 words)
- 🤖 Zero manual work required
- 💰 Under $1/month in costs
- 📈 Growing content library
- 🔍 Improving SEO over time

---

## 🆘 Support & Resources

### API Documentation
- News API: https://newsapi.org/docs
- OpenAI: https://platform.openai.com/docs
- GitHub Actions: https://docs.github.com/actions
- Vercel: https://vercel.com/docs

### Getting Help
1. Check GitHub Actions logs
2. Review error messages
3. Test locally with `node auto-blog.js`
4. Check API quota/billing

### Common Issues

**"API key not found"**
→ Add keys to GitHub Secrets

**"Rate limit exceeded"**
→ Using free tier limits, wait 24h or upgrade

**"No news items found"**
→ Check network, News API quota

**"Git push failed"**
→ Check GitHub permissions, token

---

## ✅ Quick Checklist

**Setup (One-time):**
```
□ Get News API key
□ Get OpenAI API key  
□ Add secrets to GitHub
□ Enable GitHub Actions
□ Deploy to Vercel
□ Test with manual trigger
□ Verify first automated post
```

**Ongoing (Automated):**
```
✅ Gaming news fetched daily
✅ AI writes professional article
✅ Image found automatically
✅ Posted to blog
✅ Committed to GitHub
✅ Live on website
```

**Zero human work required!** 🎉

---

## 🎮 Your Automated GameFlex Blog is Ready!

**What happens now:**
- Every day at 9 AM UTC: New professional gaming article
- Automatically published to your website
- No manual work required
- Professional quality content
- SEO-optimized
- Costs under $1/month

**Just set it and forget it!** 🚀

---

## Next Steps

1. **Complete setup** (15 minutes)
2. **Test first post** (Manual trigger in GitHub Actions)
3. **Verify on website** (Check /news page)
4. **Monitor first week** (Adjust if needed)
5. **Sit back and watch your blog grow!** ✨

Your GameFlex blog is now a **professional automated content machine**! 🤖📰
