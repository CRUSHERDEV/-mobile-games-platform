# 📧 Email Sending Guide (Vercel Method)

We have switched to using Vercel Serverless Functions to send emails. This avoids the Supabase CLI issues entirely.

---

## 🚀 1. Add Environment Variable in Vercel

For the new system to work, Vercel needs your Resend API Key.

1.  Go to your **Vercel Dashboard**.
2.  Select your project (**gameflex**).
3.  Click **Settings** (top tab).
4.  Click **Environment Variables** (left sidebar).
5.  Add a new variable:
    *   **Key**: `RESEND_API_KEY`
    *   **Value**: `re_123456...` *(Copy this from your Resend Dashboard)*
6.  Click **Save**.
7.  **IMPORTANT**: You must **Redeploy** for this to take effect.
    *   Go to **Deployments** tab.
    *   Click the three dots on the latest deployment -> **Redeploy**.

---

## 📱 2. How to Preview Emails "On Phone"

To verify how the email looks on a mobile device without spamming real users:

### Option A: Send to Yourself (Easiest)
1.  Go to your live website `gameflexhub.com` (after redeploying).
2.  Scroll to the footer.
3.  Enter your personal email address (e.g., `you@gmail.com`).
4.  Open the email app on your **Phone**.
5.  Check how it looks!

### Option B: Resend "Preview" Feature
1.  Go to **Resend Dashboard**.
2.  Click **Emails** (left sidebar).
3.  Click on any sent email to see a preview of what was sent.

---

## 🛠️ 3. Troubleshooting

### Email not arriving?
- Check **Spam Folder**.
- Did you add `RESEND_API_KEY` to Vercel?
- Did you **Redeploy** after adding the key?
- Is your domain verified in Resend? (If not, mail only goes to your admin email).

### "500 Internal Server Error"?
- This means the API key is missing in Vercel. See Step 1.
