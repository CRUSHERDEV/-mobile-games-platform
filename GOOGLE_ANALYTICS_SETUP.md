# Google Analytics Setup Guide

## Step 1: Create a Google Analytics Account

1. Go to [https://analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter an Account Name: "GameZone"
5. Click "Next"

## Step 2: Create a Property

1. Property name: "GameZone Website"
2. Reporting time zone: Select your timezone
3. Currency: Select your currency
4. Click "Next"

## Step 3: Set Up Data Stream

1. Choose platform: **Web**
2. Website URL: Enter your actual domain (when deployed)
   - For testing: `http://localhost:5173`
3. Stream name: "GameZone Main Site"
4. Click "Create stream"

## Step 4: Get Your Measurement ID

You'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`

Copy this ID - you'll need it for Step 5.

## Step 5: Add Analytics to Your Site

### Option A: Using React Helmet (Recommended)

1. Open `src/App.jsx`
2. Add this inside the `<HelmetProvider>` at the top level:

```jsx
<Helmet>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </script>
</Helmet>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Option B: Add to index.html (Simpler)

1. Open `index.html`
2. Add before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->
```

## Step 6: Verify It's Working

1. Deploy your site OR use localhost
2. Visit your site
3. Go to Google Analytics → Reports → Realtime
4. You should see yourself as an active user within 30 seconds

## Step 7: Key Metrics to Track

Before applying to affiliate programs, aim for:
- **50-100 unique visitors**
- **Average session duration > 1 minute**
- **Pages per session > 2**

## Tips to Reach This Goal

1. **Share on Reddit**: Post in r/gaming, r/gamedeals (ask for feedback)
2. **Share on Discord**: Gaming communities love discovering new sites
3. **Ask friends/family**: Get your first 20-30 visitors easily
4. **Post on Twitter/X**: Use hashtags like #indiegames #gaming

---

**Note**: Most affiliate programs check if you have Google Analytics installed. This shows you're serious about tracking performance.
