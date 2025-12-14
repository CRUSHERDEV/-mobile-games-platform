# 🤖 GameFlex Automation Setup Guide

This guide will help you set up the fully automated daily blog post system for GameFlex.

---

## 🚀 1. Get Your API Keys

The automation uses three external services. You need to get API keys for them (all have free tiers).

### A. OpenAI API Key (For content generation)
1. Go to [platform.openai.com](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Click **"Create new secret key"**
4. Name it `GameFlex`
5. **Copy the key** (sk-...) and save it somewhere safe. You won't see it again.

### B. NewsAPI Key (For finding news)
1. Go to [newsapi.org](https://newsapi.org/register)
2. Sign up for a free account
3. **Copy your API Key** from the dashboard.

### C. Steam Web API Key (Optional, for better images)
1. Go to [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)
2. Sign in with your Steam account
3. Enter your domain name (e.g., `gameflex.vercel.app` or just `localhost`)
4. **Copy the Key**.

---

## 🔑 2. Add Keys to GitHub Secrets

To make the automation work safely, you need to add these keys to your GitHub repository.

1. Go to your **GitHub Repository**.
2. Click on **Settings** (top tabs).
3. On the left sidebar, scroll down to **Secrets and variables** > **Actions**.
4. Click the green button **New repository secret**.
5. Add the following secrets one by one:

| Name | Secret |
|------|--------|
| `OPENAI_API_KEY` | Paste your OpenAI key (starts with `sk-`) |
| `NEWS_API_KEY` | Paste your NewsAPI key |
| `STEAM_API_KEY` | Paste your Steam Web API Key |

---

## ⚙️ 3. Configure Workflow Permissions (CRITICAL)

For the "bot" to be able to save the new article to your repository, you must give it write permissions.

1. Go to your **GitHub Repository**.
2. Click on **Settings**.
3. On the left sidebar, click **Actions** > **General**.
4. Scroll down to **Workflow permissions**.
5. Select **Read and write permissions**.
6. Click **Save**.

**If you don't do this, the automation will fail with "Permission denied".**

---

## 🧪 4. Test the Automation

You don't have to wait for the scheduled time to verify it works.

1. Go to the **Actions** tab in your repository.
2. Click on **Daily Automated Blog Post** in the sidebar.
3. Click the **Run workflow** button (blue button on the right).
4. Select `main` branch and click **Run workflow**.

Wait about 1-2 minutes. If successful:
- You will see a green checkmark ✅.
- A new commit will appear in your code titled "🤖 Daily automated blog post".
- The new article will appear on your website!

---

## 📋 Troubleshooting

### "Error: 401 Unauthorized"
- Check your API keys in GitHub Secrets. One of them might be wrong.
- Delete and re-add them if unsure.

### "Permission denied to github-actions[bot]"
- You missed Step 3. Go enable **Read and write permissions**.

### "No changes to commit"
- The script ran but didn't generate a new article (maybe no news found, or article already exists).
- Check the logs in the Actions tab for details.

### Images are broken
- We replaced the deprecated Unsplash API with a reliable placeholder service.
- If images look generic, consider manually updating the article image in `src/data/articles.js` after it's published.
