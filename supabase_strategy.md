# Supabase Integration Strategy Plan

## Objective
Migrate the "GameZone" affiliate platform from a static, hardcoded application to a dynamic, scalable web app backed by Supabase. This will enable real-time content updates, user authentication, and server-side logic via Edge Functions.

## 1. Architecture Overview
-   **Frontend**: React (Vite) + Tailwind CSS (Material Minimal Design).
-   **Backend**: Supabase (PostgreSQL).
-   **Storage**: Supabase Storage (Images).
-   **Logic**: Supabase Edge Functions (Newsletter, Complex Logic).
-   **Auth**: Supabase Auth.

## 2. Database Schema (PostgreSQL)

### `games` Table
Stores all game metadata.
-   `id` (UUID, Primary Key)
-   `title` (Text)
-   `slug` (Text, Unique) - For SEO friendly URLs (e.g., `/review/cyberpunk-2077`)
-   `description` (Text)
-   `short_description` (Text) - For cards
-   `image_url` (Text) - URL from Supabase Storage
-   `rating` (Numeric) - e.g., 4.8
-   `category` (Text) - e.g., 'Action', 'RPG'
-   `affiliate_link` (Text)
-   `release_date` (Date)
-   `developer` (Text)
-   `platform` (Text[]) - Array of strings e.g., ['PC', 'PS5']
-   `created_at` (Timestamp)

### `reviews` Table
User-generated reviews (future proofing).
-   `id` (UUID, Primary Key)
-   `game_id` (UUID, Foreign Key -> games.id)
-   `user_id` (UUID, Foreign Key -> auth.users.id)
-   `rating` (Integer)
-   `comment` (Text)
-   `created_at` (Timestamp)

### `newsletter_subscribers` Table
-   `id` (UUID, Primary Key)
-   `email` (Text, Unique)
-   `created_at` (Timestamp)
-   `is_active` (Boolean)

## 3. Storage Strategy

### Buckets
1.  **`game-covers`**: Public bucket for game cover art.
    *   Policy: Public Read, Authenticated Upload/Update.
2.  **`avatars`**: Public bucket for user profiles.

## 4. Edge Functions

### `subscribe-newsletter`
-   **Trigger**: POST request from Footer newsletter form.
-   **Logic**:
    1.  Validate email format.
    2.  Check if email exists in `newsletter_subscribers`.
    3.  Insert if new.
    4.  (Optional) Send welcome email via Resend/SendGrid.

### `get-featured-games` (Optional)
-   **Trigger**: GET request.
-   **Logic**: Returns a curated list of games for the Hero/Featured section, potentially cached.

## 5. Authentication Flow
-   **"Join Now" Button**: Opens a Modal (Dialog).
-   **Providers**: Email/Password, Google (Social Auth).
-   **State**: Store user session in React Context (`AuthProvider`).
-   **Permissions**:
    *   Public: View games, View reviews.
    *   Authenticated: Write reviews, Manage profile.
    *   Admin: Add/Edit games (via Supabase Dashboard or Admin Page).

## 6. Implementation Roadmap

### Phase 1: Setup & Data Migration
1.  Initialize Supabase project.
2.  Create tables (`games`, `newsletter_subscribers`).
3.  Upload existing `games.js` data to Supabase `games` table via a script.
4.  Upload images to `game-covers` bucket and update URLs.

### Phase 2: Frontend Integration
1.  Install `@supabase/supabase-js`.
2.  Create `src/lib/supabase.js` client.
3.  **Refactor `Home.jsx`**: Fetch featured games from Supabase.
4.  **Refactor `Categories.jsx`**: Fetch categories dynamically (or aggregate from games).
5.  **Refactor `Review.jsx`**: Fetch single game details by ID/Slug.

### Phase 3: Features
1.  **Newsletter**: Wire up the Footer input to call `subscribe-newsletter` function.
2.  **Auth**: Implement "Join Now" modal with Supabase Auth UI.
3.  **Search/Filter**: Implement server-side filtering for Categories page.

## 7. Immediate Fixes (Pre-Migration)
While preparing for Supabase, we will fix the current UI issues:
1.  **"Explore Games"**: Scroll to `#featured` section.
2.  **"Join Now"**: Show a "Coming Soon" toast or simple login form.
3.  **Footer Links**: Create a generic `PageLayout` for static content.
