# Arsheen Syeda — Portfolio

A single static site: `arsheen-portfolio.html`, `styles.css`, `script.js`, plus `vercel.json`
(tells Vercel to serve `arsheen-portfolio.html` as the homepage). No build step required.

**Important:** upload all four files, including `vercel.json` — that's what makes the site work
even though the main page isn't named `index.html`.

## Deploy to Vercel (easiest path)

**Option A — no GitHub needed (fastest):**
1. Go to https://vercel.com and sign up / log in (you can use GitHub, GitLab, or email).
2. Click **Add New → Project**, then choose **Deploy without Git** / drag-and-drop.
3. Drag the whole `portfolio` folder (containing all four files) onto the upload area.
4. Vercel will detect it as a static site and deploy it — you'll get a live `.vercel.app` URL in under a minute.

**Option B — via GitHub (better if you'll keep updating it):**
1. Create a new repo on GitHub (e.g. `arsheen-portfolio`) and push all four files to it —
   `arsheen-portfolio.html`, `styles.css`, `script.js`, and `vercel.json`.
2. In Vercel, click **Add New → Project**, connect your GitHub account, and select the repo.
3. Leave the framework preset as **Other** — no build command or output directory needed.
4. Click **Deploy**.

Either way, you can later add a custom domain from the Vercel project's **Settings → Domains** tab.

## If you still see a 404 after deploying
- Open the repo on GitHub and confirm the file is literally named `arsheen-portfolio.html`
  (not `arsheen-portfolio (1).html` or similar — check for a stray number in parentheses from
  a duplicate download).
- Confirm `vercel.json` is in the repo too — without it, Vercel won't know which file to treat
  as the homepage.
- In Vercel's project Settings → General, check that **Framework Preset** is "Other" and
  **Root Directory** is blank.

## Editing content later
- Text and sections: edit `arsheen-portfolio.html`.
- Colors, fonts, spacing: edit `styles.css` (all the key colors are CSS variables at the top).
- Small interactions (nav toggle, hero animation): `script.js`.
