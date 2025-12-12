# GroceryTrack™ Marketing Website

This repository contains the standalone marketing website for GroceryTrack™. It is built with React and Tailwind CSS, and is designed for static deployment to platforms like Vercel.

## Pages Included:
- Home (Landing Page)
- About Us
- Features
- Pricing
- FAQs
- Terms of Use
- Privacy Policy
- Cookie Policy

## Deployment

This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically detect the Vite React setup and deploy the site.

### Will GroceryIntel.com update automatically?

- **No automatic updates happen from this branch unless your host (e.g., Vercel) is already linked to it.** If GroceryIntel.com points to a different repo or branch, you’ll need to push/merge this code into the branch your host watches.
- On Vercel, production updates typically occur when you merge into the configured production branch (often `main`) of the connected repository. If your domain isn’t wired to this repo yet, connect it in Vercel’s dashboard first.
- After connecting, every push to the tracked branch will rebuild the site and update GroceryIntel.com. If you’re unsure which branch controls production, check your Vercel project settings.

## Local Development (Optional)

If you want to preview copy or layout changes before deploying, you can run the marketing site locally. These steps are intentionally explicit for non-technical contributors:

1. Install Node.js 18+ (skip if already installed).
2. In a terminal, navigate to the project folder (the one containing `package.json`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. When you see a message like `Local: http://localhost:5173/`, open that address in your browser to view the site.

If the port is busy, Vite will suggest another one—use the URL it prints. Close the terminal to stop the server when you are done.

### If you only use GitHub.com (no local terminal)

You can still preview the site without installing anything by launching a Codespace from the GitHub web UI. Make sure you open the branch you want to test (for this project, `marketing-copy-fix` right now) so the Codespace reflects the latest commits:

1. Open the repository on GitHub.com.
2. Click the green **Code** button and choose **Create codespace on main** (or the branch you want to preview).
3. Once the Codespace starts, open its built-in terminal and run:
   ```bash
   npm install
   npm run dev -- --host 0.0.0.0 --port 5173
   ```
4. In the Codespaces UI, click **Ports** → expose/forward port 5173, then click the forwarded URL to view the site in your browser.
5. When you’re finished reviewing, stop the Codespace; your code changes stay in the repo branch until you push or merge them.

#### Where are my changes right now?

- The updates we authored (Home, Features, FAQs copy) are saved in this repo’s `marketing-copy-fix` branch. They are **not** automatically live on GroceryIntel.com until that branch is pushed and deployed to the production-tracked branch (often `main`) that Vercel watches.
- If you make additional edits inside a Codespace, they stay inside that Codespace until you run `git commit` and `git push` to the branch. Closing a Codespace without pushing will leave those extra edits behind.

### How to push your changes from a Codespace

If you edited files in a Codespace and want them in GitHub:

1. In the Codespaces terminal, check what changed:
   ```bash
   git status
   ```
2. Save your work in a commit (the `-am` flag stages tracked files):
   ```bash
   git commit -am "Describe your change"
   ```
3. Push to the branch you opened (for this project, usually `work`):
   ```bash
   git push
   ```
4. Open the repo on GitHub.com. If you pushed to a non-default branch, click **Compare & pull request** to create a PR.

### Preview without pushing (optional)

If your host is linked to this repo (e.g., Vercel), you can get a shareable preview URL without pushing to production:

1. Create a new branch in the Codespace (optional but recommended):
   ```bash
   git checkout -b preview-changes
   ```
2. Commit your updates locally:
   ```bash
   git commit -am "Preview: describe your change"
   ```
3. Push the branch and open a pull request from GitHub.com. Vercel (or your host) will build a preview deployment for that PR so you can review it safely.

## Important Note

This marketing website is entirely separate from the main GroceryTrack™ application (which is built on Base44). Links on this site that lead to "Get Started", "Login", or similar, will redirect users to the main Base44 application.
