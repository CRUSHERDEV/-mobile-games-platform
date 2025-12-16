# 📧 Email Troubleshooting Guide (GameFlex)

If users aren't receiving emails, follow these steps to debug and fix the issue.

---

## 1. Check Resend Dashboard (CRITICAL)

We use **Resend.com** for sending emails. 

1. **Log in** to your [Resend Dashboard](https://resend.com/emails).
2. Check the **Emails** tab.
   - Do you see any failed attempts?
   - If the list is empty, the request isn't even reaching Resend.

---

## 2. Understand "Test Mode" Restrictions

If you are on the **Free Tier** and haven't added your own domain (e.g., `gameflex.com`) to Resend:

> ⚠️ **You can ONLY send emails to the email address you signed up with.**

- **Scenario A**: You signed up for Resend with `admin@gmail.com`.
- **Scenario B**: You try to subscribe on your website with `testuser@yahoo.com`.
- **Result**: Resend will **BLOCK** this email because `testuser@yahoo.com` is not verified.

**Solution:**
1. Test ONLY with your own email address (the one used for Resend).
2. Or, add and verify a custom domain in Resend to send to anyone.

---

## 3. Verify Supabase Secrets

The code relies on `RESEND_API_KEY`. If this is missing or wrong, emails will fail silently (frontend says success, backend logs error).

1. Go to your **Supabase Dashboard**.
2. Click **Edge Functions**.
3. Click on the `subscribe` function -> **Logs**.
4. Look for errors like `RESEND_API_KEY is not set` or `401 Unauthorized`.

**To fix the key:**
Run this in your terminal (replace with your actual key starting with `re_`):

```bash
# If you have Supabase CLI installed
supabase secrets set RESEND_API_KEY=re_123456789...
```

or set it in the Supabase Dashboard under **Project Settings > Edge Functions > Secrets**.

---

## 4. Redeploy the Function

If you made changes to the code but didn't deploy, the live site is still using the old code.

**Run this command:**

```bash
supabase functions deploy subscribe
```

*Note: You must be logged in to Supabase CLI (`supabase login`).*

---

## 5. Check "Spam" Folder

Since we are sending from `onboarding@resend.dev` (a shared test domain), emails often land in **Spam** or **Promotions** tabs.

1. Search for "GameFlex" in your email.
2. Check the Spam folder.

---

## Quick Checklist for You

- [ ] Did you put the correct `RESEND_API_KEY` in Supabase Secrets?
- [ ] Are you testing with the **SAME email** you used to sign up for Resend?
- [ ] Did you run `supabase functions deploy subscribe` after the latest code changes?
- [ ] Did you check your Spam folder?
