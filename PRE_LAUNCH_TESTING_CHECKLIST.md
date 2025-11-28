# Pre-Launch Website Testing Checklist

Use this checklist to ensure your site is 100% ready for affiliate applications.

---

## 🌐 Page Accessibility Tests

Test EVERY page loads correctly:

### Public Pages (Must work WITHOUT login)
- [ ] Home page (`/`)
- [ ] Categories page (`/categories`)
- [ ] News page (`/news`)
- [ ] Individual game review (test 5 different games)
- [ ] About Us (`/about-us`)
- [ ] Contact (`/contact`)
- [ ] Privacy Policy (`/privacy-policy`)
- [ ] Terms of Service (`/terms-of-service`)

### Auth Pages (Optional for testing)
- [ ] Welcome/Login page redirects correctly
- [ ] Signup works
- [ ] Logout works

---

## 🔗 Link Testing

Click EVERY link on your site:

### Header Navigation
- [ ] Logo → Home
- [ ] Home link works
- [ ] Categories link works
- [ ] News link works

### Footer Links
- [ ] About Us works
- [ ] Contact works
- [ ] Privacy Policy works
- [ ] Terms of Service works
- [ ] Instagram link (update when you create account)
- [ ] Twitter/GitHub link (update when you create account)

### Game Cards
- [ ] Click 10 random game cards → Review page loads
- [ ] "Watch Trailer" button opens YouTube
- [ ] All game images load correctly
- [ ] No broken thumbnails

### Category Filters
- [ ] Click each category (Action, RPG, Shooter, etc.)
- [ ] Games filter correctly
- [ ] "All" shows all games

---

## 📱 Mobile Responsiveness

Test on your phone OR use browser DevTools:

### iPhone/Android Portrait (375px width)
- [ ] Header looks good
- [ ] Mobile menu works
- [ ] Game cards stack vertically
- [ ] Images scale properly
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (not too small)

### Tablet (768px width)
- [ ] Two-column grid for game cards
- [ ] Header navigation still visible
- [ ] Footer layout adapts

### Desktop (1920px width)
- [ ] Three+ column grid works
- [ ] No weird spacing
- [ ] Images aren't pixelated

---

## ⚡ Performance Tests

### Load Speed
- [ ] Home page loads in < 3 seconds
- [ ] Review pages load in < 2 seconds
- [ ] Images load progressively (no long blank screens)

### Console Errors
1. Open browser DevTools (F12)
2. Go to Console tab
3. Navigate through your site
4. [ ] No red errors appear
5. [ ] No 404 errors for images/scripts

---

## 📝 Content Quality Check

### Game Reviews
- [ ] At least 50 games have unique descriptions
- [ ] All games have 4 pros and 2 cons
- [ ] No "Lorem ipsum" placeholder text
- [ ] Game titles are spelled correctly
- [ ] Ratings display correctly (stars)

### Legal Pages
- [ ] Privacy Policy mentions cookies
- [ ] Privacy Policy has contact email
- [ ] Terms of Service is filled out (not template)
- [ ] About Us sounds professional

### Contact Page
- [ ] Email is `contact@gamezone.com` (or your real email)
- [ ] No fake phone numbers
- [ ] No fake addresses

---

## 🔍 SEO & Analytics

### Meta Tags
Open DevTools → Elements → Check `<head>`:
- [ ] Every page has `<title>` tag
- [ ] Every page has meta description
- [ ] No page title says "React App"

### Google Analytics (if installed)
- [ ] Tracking code is present in HTML
- [ ] Real-time report shows your visit
- [ ] Page views are being recorded

### Files
- [ ] `robots.txt` exists in `/public`
- [ ] `sitemap.xml` exists in `/public`

---

## 🍪 Cookie Consent

- [ ] Banner appears on first visit
- [ ] "Accept" button works
- [ ] Banner doesn't reappear after accepting
- [ ] Preference is saved in localStorage

---

## 🎨 Visual Polish

### Images
- [ ] All game cover images load
- [ ] No broken images (check Network tab)
- [ ] Lazy loading works (images load as you scroll)

### Colors & Branding
- [ ] Logo/site name is consistent everywhere
- [ ] Color scheme looks professional
- [ ] Dark mode works (if implemented)

### Typography
- [ ] Text is readable (good contrast)
- [ ] Headings use proper hierarchy (H1 > H2 > H3)
- [ ] No text overlaps images

---

## 🚀 Deployment Readiness

### Before Going Live
- [ ] Build the production version (`npm run build`)
- [ ] Test the build locally (`npm run preview`)
- [ ] No console errors in production build
- [ ] Environment variables are set (if any)

### After Deployment
- [ ] Update `sitemap.xml` with real domain
- [ ] Update `robots.txt` with real domain
- [ ] Update social media links with real accounts
- [ ] Test from a different device/network
- [ ] Submit sitemap to Google Search Console

---

## ✅ Final Pre-Application Check

Before submitting to ANY affiliate program:

- [ ] Website is publicly accessible (no login wall)
- [ ] Google Analytics shows 50+ visitors
- [ ] All 100+ games have unique content
- [ ] No broken links anywhere
- [ ] Mobile version works perfectly
- [ ] Contact email is real and working
- [ ] Privacy Policy & Terms are accessible
- [ ] Social media accounts created and linked
- [ ] Cookie consent banner is working
- [ ] No "under construction" or placeholder pages

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Images not loading | Check `public/` folder or CDN URLs |
| 404 on page refresh | Configure server for SPA routing |
| Mobile menu doesn't close | Check `onClick` handler in `Header.jsx` |
| Analytics not tracking | Verify Measurement ID in code |
| White screen on load | Check console for JavaScript errors |
| Slow loading | Optimize images, enable lazy loading |

---

**When all boxes are checked, you're ready to apply! 🎉**
