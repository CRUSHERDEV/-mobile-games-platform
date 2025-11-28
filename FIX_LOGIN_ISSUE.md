# How to Fix "Email Not Received" Issue

If you are not receiving the confirmation email from Supabase, it is likely because the default email service has strict limits or is being blocked by spam filters.

**To fix this immediately, you should disable email confirmation for your project.**

## Step 1: Go to Supabase Dashboard
1. Open your project in the [Supabase Dashboard](https://supabase.com/dashboard).
2. Click on the **Authentication** icon in the left sidebar.

## Step 2: Disable Email Confirmation
1. In the Authentication menu, click on **Providers**.
2. Click on **Email** to expand the settings.
3. **Toggle OFF** the switch that says **"Confirm email"**.
4. Click **Save**.

## Step 3: Fix Your Account
Since you already tried to sign up, your account is stuck in "unconfirmed" state.

1. Go to the **Users** section under Authentication.
2. Find your email (`gidadogidado03@gmail.com`).
3. Click the three dots `...` on the right side.
4. Select **Delete user**.
5. Go back to your website and **Sign Up again**.

> **Note:** Since you disabled email confirmation in Step 2, you will be logged in immediately after signing up!

## Alternative: Manually Confirm User
If you don't want to delete the user:
1. Go to **Authentication** -> **Users**.
2. Find your email.
3. If there is an option to "Confirm User" (sometimes hidden under `...`), click it.
4. If not, follow the "Delete user" steps above.
