# 🚀 Quick Email Setup (5 minutes)

## What's the issue?
Your Edge Function is created but not deployed to Supabase, and it doesn't have the Resend API key configured.

## Fix it in 3 steps:

### ✅ Step 1: Get a Resend API Key (2 min)

1. Go to **https://resend.com**
2. Click "Start Building" or "Sign Up"
3. Once logged in, go to **API Keys** (left sidebar)
4. Click **"Create API Key"**
5. Name it "GameZone Newsletter"
6. **Copy the key** (starts with `re_...`) - you'll need it in Step 3!

> **Note**: With the free tier, you can only send emails to your own verified email address. To send to any email, you need to verify a domain (still free, just takes a few minutes).

---

### ✅ Step 2: Install Supabase CLI (1 min)

Open your terminal and run:

```bash
npm install -g supabase
```

Wait for it to install, then verify:

```bash
supabase --version
```

---

### ✅ Step 3: Deploy & Configure (2 min)

Run these commands one by one:

```bash
# 1. Link to your Supabase project
supabase link --project-ref qkebjviacnbsucpbngft

# 2. Set your Resend API key (replace with your actual key from Step 1)
supabase secrets set RESEND_API_KEY=re_your_actual_key_here

# 3. Deploy the Edge Function
supabase functions deploy subscribe
```

---

## ✨ Test It!

1. Go to your website: http://localhost:5173
2. Scroll to the footer
3. Enter your email and click "Go"
4. Check your inbox! 📧

---

## 🐛 Troubleshooting

**"Email not received"**
- Check your spam folder
- Make sure you used YOUR email (Resend free tier only sends to verified addresses)
- Check Supabase Dashboard → Edge Functions → subscribe → Logs

**"Command not found: supabase"**
- Close and reopen your terminal after installing the CLI
- Or use: `npx supabase` instead of `supabase`

**"RESEND_API_KEY is not set"**
- Make sure you ran the `supabase secrets set` command
- Verify with: `supabase secrets list`

---

## 📝 Want to send to ANY email?

You need to verify a domain in Resend:

1. Go to Resend Dashboard → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (or use a free subdomain from services like Vercel)
4. Add the DNS records shown
5. Wait for verification (usually instant)
6. Update the `from` field in `supabase/functions/subscribe/index.ts` to use your domain

---

Need help? Check the detailed guide in `EMAIL_SETUP.md`
