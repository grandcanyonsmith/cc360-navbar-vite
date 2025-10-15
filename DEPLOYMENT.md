# Deployment Guide

This guide explains how to deploy your CC360 Sidebar widget so others can embed it on their websites.

## Files to Deploy

After running `npm run build`, you need to upload these files from the `dist/` folder:

- `cc360-sidebar.js` - The widget JavaScript (~600KB, ~180KB gzipped)
- `cc360-sidebar.css` - The widget styles (~16KB, ~4KB gzipped)

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a `gh-pages` branch in your repository
2. Copy the contents of the `dist/` folder to the root of the `gh-pages` branch
3. Enable GitHub Pages in your repository settings
4. Your widget will be available at: `https://your-username.github.io/your-repo/cc360-sidebar.js`

**Quick script:**
```bash
npm run build
git checkout -b gh-pages
cp -r dist/* .
git add cc360-sidebar.js cc360-sidebar.css
git commit -m "Deploy widget"
git push origin gh-pages
```

### Option 2: Netlify (Free)

1. Sign up for [Netlify](https://netlify.com)
2. Drag and drop the `dist/` folder to Netlify's deploy interface
3. Your widget will be available at: `https://your-site.netlify.app/cc360-sidebar.js`

### Option 3: Vercel (Free)

1. Sign up for [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel --prod`
4. Your widget will be available at: `https://your-project.vercel.app/cc360-sidebar.js`

### Option 4: AWS S3 + CloudFront (Paid)

1. Create an S3 bucket
2. Upload `cc360-sidebar.js` and `cc360-sidebar.css`
3. Make the files publicly accessible
4. (Optional) Set up CloudFront CDN for better performance

### Option 5: Traditional Web Host

1. Upload `cc360-sidebar.js` and `cc360-sidebar.css` to your web server via FTP/SFTP
2. Place them in a publicly accessible directory
3. Access via: `https://yourdomain.com/path/to/cc360-sidebar.js`

## After Deployment

Once deployed, users can embed your sidebar by adding these lines to their HTML:

```html
<link rel="stylesheet" href="https://your-deployment-url.com/cc360-sidebar.css">
<script src="https://your-deployment-url.com/cc360-sidebar.js"></script>
```

## Important: CORS Configuration

If users report CORS errors, make sure your hosting service allows cross-origin requests. Add these headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
```

Most static hosting services (GitHub Pages, Netlify, Vercel) handle this automatically.

## Performance Tips

1. **Enable Gzip Compression** - Most hosting services do this automatically
2. **Set Cache Headers** - Cache the files for at least 1 hour:
   ```
   Cache-Control: public, max-age=3600
   ```
3. **Use a CDN** - Services like Cloudflare, Netlify, and Vercel include CDN automatically

## Testing Your Deployment

1. Open `dist/test.html` in your browser to test locally
2. Replace the script URL with your deployed URL
3. Test on different websites to ensure embedding works correctly

## Updating the Widget

When you make changes:

1. Run `npm run build` to rebuild
2. Upload the new files to your hosting service
3. Users' browsers will cache the old version - consider adding a version number to the filename:
   - `cc360-sidebar-v1.0.0.js`
   - Update the script URL in your documentation

## CDN Alternative (jsdelivr)

If you push to a public GitHub repository, you can use jsdelivr for free CDN hosting:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/username/repo@latest/dist/cc360-sidebar.css">
<script src="https://cdn.jsdelivr.net/gh/username/repo@latest/dist/cc360-sidebar.js"></script>
```

Replace `username/repo` with your GitHub username and repository name.

