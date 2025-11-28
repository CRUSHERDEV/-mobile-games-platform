# GameZone - Premium Gaming Affiliate Website

A high-performance, SEO-optimized gaming affiliate website built with React, Vite, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173` to view the site.

## 🛠️ Customization

### Branding
- **Logo & Name**: Update `Header.jsx` and `Footer.jsx` to change "GameZone".
- **Colors**: Edit `src/index.css` variables to match your brand:
    ```css
    :root {
      --color-primary: #00ff9d; /* Change this */
      --color-secondary: #7000ff; /* Change this */
    }
    ```

### Content
- **Games**: Update the `MOCK_GAMES` array in `src/pages/Home.jsx` with your actual affiliate offers.
- **Reviews**: Update the game data in `src/pages/Review.jsx`.

## 📦 Deployment

This project is "ready for hosting". It produces a static build that can be deployed to any static hosting provider (Vercel, Netlify, AWS S3, etc.).

### Build for Production

Run the build command to generate the static files:

```bash
npm run build
```

This will create a `dist` folder containing your optimized website.

### Deploy to Netlify (Recommended)
1.  Drag and drop the `dist` folder to Netlify Drop.
2.  Or connect your GitHub repository and set the build command to `npm run build` and publish directory to `dist`.

### Deploy to Vercel
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
