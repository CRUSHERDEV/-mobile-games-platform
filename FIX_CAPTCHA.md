# How to Fix "Captcha Verification Failed"

This error happens because Supabase has CAPTCHA protection enabled by default, but it hasn't been fully configured. The easiest fix is to disable it.

## Step 1: Go to Supabase Dashboard
1. Open your project in the [Supabase Dashboard](https://supabase.com/dashboard).
2. Click on the **Project Settings** (gear icon) in the bottom of the left sidebar.

## Step 2: Disable CAPTCHA
1. In the Settings menu, look for **Authentication** section (sometimes under "Security" or "Auth").
   - *Note: It might be under **Authentication** -> **Security & Protection** in the sidebar.*
2. Look for a section called **Bot Protection** or **Captcha**.
3. **Toggle OFF** the switch that says **"Enable Captcha protection"**.
4. Click **Save**.

## Step 3: Try Again
1. Go back to your website.
2. Refresh the page.
3. Try to Log In or Sign Up again.

It should work immediately!
