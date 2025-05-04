# Corgi SQL

## Deploying to GitHub Pages

1.  On GitHub, go to **Settings** > **Pages** > and choose whichever branch you'd like to deploy from, but change the folder to /docs/
2.  Make sure you `npm run build` (which exports to docs) before pushing
3.  Push to branch

To run locally:
1.  `npm install -g serve`
2.  navigate into repo, and then `serve docs`