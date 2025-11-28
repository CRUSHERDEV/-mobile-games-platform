# Email Setup Guide for GameZone Newsletter

## Overview
To send confirmation emails when users subscribe to your newsletter, you need to:
1. Get a Resend API key (free tier available)
2. Configure it in your Supabase project
3. Deploy the Edge Function

## Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Give it a name like "GameZone Newsletter"
6. Copy the API key (it starts with `re_`)

## Step 2: Set Up Locally (Optional - for testing)

If you want to test locally with Supabase CLI:

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Create a `.env.local` file in the `supabase` folder:
   ```bash
   cd supabase
   echo "RESEND_API_KEY=re_your_actual_key_here" > .env.local
   ```

3. Start Supabase locally:
   ```bash
   supabase start
   ```

4. Serve the function locally:
   ```bash
   supabase functions serve subscribe --env-file ./supabase/.env.local
   ```

## Step 3: Deploy to Supabase (Production)

1. **Link your project** (if not already linked):
   ```bash
   supabase link --project-ref your-project-ref
   ```
   
   Your project ref is in your Supabase URL: `https://[project-ref].supabase.co`

2. **Set the secret in Supabase**:
   ```bash
   supabase secrets set RESEND_API_KEY=re_your_actual_key_here
   ```

3. **Deploy the Edge Function**:
   ```bash
   supabase functions deploy subscribe
   ```

## Step 4: Verify It Works

1. Go to your website
2. Enter an email in the newsletter subscription form
3. Check the email inbox - you should receive a welcome email!

## Troubleshooting

### Email not sending?

1. **Check Supabase Function Logs**:
   - Go to your Supabase Dashboard
   - Navigate to **Edge Functions** → **subscribe**
   - Check the **Logs** tab for errors

2. **Verify the API key is set**:
   ```bash
   supabase secrets list
   ```

3. **Check Resend Dashboard**:
   - Go to [https://resend.com/emails](https://resend.com/emails)
   - Check if emails are being sent (even if they're failing)

### Common Issues

- **"RESEND_API_KEY is not set"**: You forgot to set the secret in Supabase
- **"Domain not verified"**: With Resend's free tier, you can only send to your own email. To send to any email, you need to verify a domain.
- **Emails going to spam**: This is normal for `onboarding@resend.dev`. Consider verifying your own domain.

## Using Your Own Domain (Optional)

To send emails from your own domain (e.g., `newsletter@gamezone.com`):

1. Add and verify your domain in Resend
2. Update the `from` field in `supabase/functions/subscribe/index.ts`:
   ```typescript
   from: "GameZone <newsletter@yourdomain.com>",
   ```
3. Redeploy the function

## Free Tier Limits

Resend free tier includes:
- 100 emails/day
- 3,000 emails/month
- Can only send to verified emails (or your own email)

To send to any email address, you need to verify a domain (still free).
