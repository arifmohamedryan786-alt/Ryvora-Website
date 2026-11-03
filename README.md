# RYVORA — Developer Portfolio

> **"Your Vision. Our Website."**  
> Founder: **Arif Mohamed**

A high-performance, 100% static developer portfolio website crafted with semantic HTML5, modern CSS3, and vanilla ES6+ JavaScript. Designed for instant loading, complete accessibility, and zero-configuration deployment to Vercel and GitHub Pages.

---

## 🌟 Highlights

- **100% Static & Native**: Built entirely without frameworks, node runtimes, or build steps.
- **Vercel-Ready**: Deploys directly from root with the included `vercel.json`.
- **Fast & Lightweight**: Clean typography with Google Fonts (*Space Grotesk* and *Plus Jakarta Sans*) with system font fallbacks.
- **Responsive & Accessible**: Seamlessly adapts from 360px mobile viewports to 1280px+ wide screens with WCAG compliant focus outlines and ARIA landmarks.
- **Dynamic Projects Grid**: Data-driven project rendering from `js/projects.js` with sanitization and commented template for effortless expansion.
- **Direct WhatsApp Chat**: One-click WhatsApp contact integration to quickly message the founder.

---

## 📁 Repository Structure

```text
ryvora-website/
├── index.html                  # Main single-page document in root
├── vercel.json                 # Static routing & clean URL config for Vercel
├── package.json                # Local dev script definition
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation & deployment guide
├── css/
│   └── portfolio.css           # Modern CSS with custom properties & responsive queries
├── js/
│   ├── portfolio-app.js        # Main application logic (drawer, scroll, observer, form)
│   └── projects.js             # Project data array & template
└── assets/
    ├── icons/
    │   └── favicon.svg         # Crisp, scalable SVG favicon & brand emblem
    └── images/
        └── .gitkeep            # Static images directory
```

---

## 🚀 Running Locally

To preview and test the website on your local machine:

1. Open your terminal in the project directory:
   ```bash
   cd "Ryvora Website"
   ```

2. Start the local server:
   ```bash
   npm run dev
   ```
   *(or directly run `npx serve -l 3000 .`)*

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## ➕ Adding New Projects

To add more projects to the portfolio, open [`js/projects.js`](file:///Users/arifmohamed/Ryvora%20Website/js/projects.js) and add an object to the `PROJECTS_DATA` array:

```javascript
{
  name: 'Project Title',
  description: 'A concise summary of what the application does.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  liveUrl: 'https://your-demo.vercel.app/',
  status: 'Live Project',
  githubUrl: 'https://github.com/your-username/repo' // optional or null
}
```

All content is automatically HTML-escaped and URL-sanitized before insertion into the DOM.

---

## 🌐 Deploying to GitHub & Vercel

### Step 1: Initialize Git and Push to GitHub

1. Initialize git in the workspace:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: RYVORA portfolio website"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `ryvora` or `ryvora-portfolio`. Leave it empty (without initializing README or .gitignore).

3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

---

### Step 2: Import into Vercel

1. Log in to [Vercel](https://vercel.com) and click **"Add New..."** > **"Project"**.
2. Select your GitHub provider and find your newly pushed repository. Click **"Import"**.
3. In the **Configure Project** screen:
   - **Framework Preset**: Leave as **Other** (configured by `vercel.json`).
   - **Root Directory**: `./` (leave default).
   - **Build and Output Settings**: All fields remain empty / default because this is a 100% static project with no build commands.
4. Click **"Deploy"**.
5. Vercel will deploy the site in seconds and provide a production URL (e.g., `https://ryvora.vercel.app`).

