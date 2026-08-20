# 📦 Deployment & Hosting Guide

Complete guide to deploy your Andrew Okibe portfolio to various hosting platforms.

## Table of Contents
1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [Traditional Hosting](#traditional-hosting)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Performance Optimization](#performance-optimization)
7. [Monitoring & Analytics](#monitoring--analytics)

---

## GitHub Pages

### Easiest and Most Popular Option

**Pros:**
- Completely free
- Integrated with GitHub
- Automatic HTTPS
- Easy to maintain
- Great for portfolios

**Cons:**
- Static site only (no backend)
- Limited to GitHub infrastructure
- Slower in some regions

### Setup Instructions

#### Method 1: Using main Branch (Recommended)

1. **Ensure your repository is public**
   - Go to repository Settings
   - Check visibility is "Public"

2. **Configure GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch
   - Select root folder (/)
   - Click "Save"

3. **Wait for deployment**
   - GitHub will build and deploy automatically
   - Check the "Deployments" tab for status
   - Live URL: `https://your-username.github.io/andrew-okibe-portfolio/`

#### Method 2: Using gh-pages Branch (Alternative)

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts
# "deploy": "gh-pages -d ."

# Deploy
npm run deploy
```

#### Method 3: Rename Repository (Primary Portfolio)

To make it your primary portfolio at `https://your-username.github.io/`:

1. Go to Settings → General
2. Rename repository to: `your-username.github.io`
3. Update local repository:
   ```bash
   git remote set-url origin https://github.com/your-username/your-username.github.io.git
   git push origin main
   ```
4. Site will be live at: `https://your-username.github.io/`

### GitHub Pages Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not building | Check repo is public, settings are correct |
| Images not loading | Use relative paths, check assets folder |
| Style not applying | Clear browser cache (Ctrl+Shift+Del) |
| Takes too long to deploy | Normal, can take 1-5 minutes |
| 404 error | Check file paths and branch settings |

---

## Netlify

### Best for Advanced Features

**Pros:**
- Fast CDN globally
- Continuous deployment
- Free SSL/HTTPS
- Serverless functions support
- Form handling built-in
- Analytics included
- Environment variables support

**Cons:**
- Requires account
- Limited free tier bandwidth
- Slightly more complex setup

### Step-by-Step Setup

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub
   - Authorize Netlify to access your repositories
   - Choose `andrew-okibe-portfolio` repository

3. **Configure Build Settings**
   - **Build command:** (leave empty - static site)
   - **Publish directory:** `.` (root folder)
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will build automatically
   - Check deployment status in dashboard
   - Your site is live!

### Custom Netlify URL

Your site will get a random URL like: `https://inspiring-name-123456.netlify.app/`

To customize:
1. Go to Site Settings
2. Click "Change site name"
3. Enter your desired subdomain
4. Your site: `https://your-portfolio.netlify.app/`

### Netlify Form Handling

Add form support without backend:

```html
<form name="contact" method="POST" netlify>
    <input type="text" name="name" required />
    <input type="email" name="email" required />
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

Submissions will appear in Netlify Dashboard → Forms.

### Netlify Environment Variables

For sensitive data:

1. Go to Site Settings → Build & Deploy → Environment
2. Add variables:
   - `API_KEY=your-secret-key`
   - `FORM_ID=your-form-id`
3. Access in build: `process.env.API_KEY`

### Continuous Deployment on Netlify

Every time you push to GitHub:
1. Netlify automatically detects changes
2. Runs build process
3. Deploys new version
4. Old versions saved as rollbacks

To disable auto-deploy:
- Site Settings → Build & Deploy → Deploy contexts
- Disable GitHub auto-publish

---

## Vercel

### Optimized for JavaScript/Next.js

**Pros:**
- Extremely fast
- Optimized for static sites
- One-click deployment
- Global CDN
- Free tier is generous
- Automatic image optimization

**Cons:**
- Slightly overkill for static sites
- Limited features vs Netlify

### Setup Steps

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select GitHub and authorize
   - Choose `andrew-okibe-portfolio`

3. **Configure**
   - Framework Preset: "Other" (it's static)
   - Root Directory: `.`
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Click "Deploy"

4. **Deployed!**
   - Vercel assigns a URL automatically
   - Set custom domain in Project Settings

### Vercel Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS instructions
4. Wait for SSL certificate (usually instant)

---

## Traditional Hosting

For Bluehost, GoDaddy, HostGator, etc.

### Via FTP

1. **Get FTP Credentials**
   - Check hosting provider's control panel
   - Download FTP client (Filezilla, WinSCP)
   - Connect with host, username, password

2. **Upload Files**
   ```
   FTP Root (public_html/)
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── config.js
   ├── CONTACT-FORM-TEMPLATE.html
   ├── README.md
   ├── QUICKSTART.md
   ├── .gitignore
   └── assets/
       ├── profile.jpg
       ├── about.jpg
       ├── afrobeat-buzz.jpg
       ├── ai-chat.jpg
       ├── task-manager.jpg
       └── Andrew-Okibe-CV.pdf
   ```

3. **Set Permissions**
   - Folders: 755
   - Files: 644

4. **Test**
   - Visit your domain
   - Check all links work

### Via cPanel File Manager

1. Log into cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload files as ZIP
5. Extract using built-in tool
6. Set permissions if needed

### .htaccess Configuration

Create `.htaccess` in root directory:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Enable caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 day"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>

# Rewrite URLs (optional - for clean URLs)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Custom Domain Setup

### Point Domain to GitHub Pages

1. **Buy Domain**
   - Namecheap, GoDaddy, Google Domains, etc.

2. **GitHub Setup**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter: `yourdomain.com`
   - Save

3. **Domain DNS Settings**
   - Go to domain registrar DNS settings
   - Add DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
           185.199.109.153
           185.199.110.153
           185.199.111.153
   ```
   - Add CNAME (optional):
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

4. **Wait for Propagation**
   - Can take 24 hours
   - Check with: `dig yourdomain.com`
   - HTTPS auto-configured by GitHub

### Point Domain to Netlify

1. **Netlify Setup**
   - Go to Site Settings → Domain management
   - Add custom domain
   - Netlify shows DNS records

2. **Domain Registrar**
   - Copy Netlify's DNS servers
   - Update domain registrar's nameservers
   - Wait for propagation

3. **SSL Certificate**
   - Automatic, managed by Netlify

### Point Domain to Vercel

1. **Vercel Setup**
   - Project Settings → Domains
   - Add domain
   - Vercel provides DNS records

2. **Registrar**
   - Update DNS with Vercel records
   - Or change nameservers to Vercel's

---

## Performance Optimization

### Image Optimization

```bash
# Compress images before uploading
# Use tools: TinyPNG, ImageOptim, Squoosh
```

### CSS & JavaScript Minification

Already optimized, but can further compress:

```bash
# Install tools
npm install -g terser cssnano

# Minify
terser script.js -o script.min.js
cssnano styles.css -o styles.min.css

# Update references in HTML
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

### Enable Caching

```html
<!-- Add to <head> in index.html -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

### Preload Critical Resources

```html
<link rel="preload" as="style" href="styles.css">
<link rel="preload" as="script" href="script.js">
<link rel="preload" as="image" href="assets/profile.jpg">
```

### Performance Checklist

- [ ] Compress all images
- [ ] Remove unused CSS/JS
- [ ] Enable GZIP compression
- [ ] Set up caching headers
- [ ] Use CDN (included with Netlify/Vercel)
- [ ] Minify CSS and JavaScript
- [ ] Lazy load images
- [ ] Test with Lighthouse (DevTools)

---

## Monitoring & Analytics

### Google Analytics

1. **Create Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with Google account
   - Create property

2. **Get Tracking ID**
   - Measurement ID: G-XXXXXXXXXX

3. **Add to Portfolio**
   ```html
   <!-- Add before closing </head> tag in index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. **Track Events**
   ```javascript
   // Track button clicks
   document.getElementById('contactBtn').addEventListener('click', () => {
       gtag('event', 'contact_button_click');
   });
   ```

### Netlify Analytics

Built-in for Netlify deployments:
- Site Analytics in dashboard
- Visitor count, page views
- Browser/device breakdown

### Vercel Analytics

Web Vitals included:
- First Contentful Paint
- Largest Contentful Paint
- Cumulative Layout Shift

### Monitor Uptime

1. **Uptime Robot** (free)
   - Go to [uptimerobot.com](https://uptimerobot.com)
   - Add your portfolio URL
   - Get alerts if site goes down

---

## Post-Deployment Checklist

- [ ] Test on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test all links and buttons
- [ ] Test form submission
- [ ] Test PDF download
- [ ] Check loading speed (Lighthouse)
- [ ] Verify images load correctly
- [ ] Check SEO (meta tags, sitemap)
- [ ] Set up analytics
- [ ] Set up monitoring
- [ ] Share portfolio on LinkedIn, GitHub, Twitter
- [ ] Add to resume/CV
- [ ] Get feedback from friends

---

## Troubleshooting Deployment

| Problem | Solution |
|---------|----------|
| Site shows 404 | Check file paths, ensure index.html in root |
| Images not loading | Use relative paths: `assets/image.jpg` |
| Styles not working | Verify styles.css linked correctly |
| Mobile looks broken | Check viewport meta tag in HTML |
| Domain not working | Wait 24-48 hours for DNS propagation |
| Form not submitting | Set up Formspree/EmailJS/Netlify Forms |
| Site very slow | Optimize images, enable caching |
| HTTPS not working | Automatic on GitHub Pages/Netlify/Vercel |

---

## Free vs Paid Hosting Comparison

| Feature | GitHub Pages | Netlify | Vercel | Traditional |
|---------|--------------|---------|--------|-------------|
| Cost | Free | Free | Free | $3-50/mo |
| Ease of Setup | Very Easy | Easy | Easy | Medium |
| Performance | Good | Excellent | Excellent | Good |
| Custom Domain | Free | Free | Free | Included |
| SSL/HTTPS | Free | Free | Free | Paid/Free |
| Bandwidth | Unlimited | 100GB/mo free | Very generous | Limited |
| Forms | No | Yes | Limited | Custom |
| Serverless | No | Yes | Yes | Limited |
| Analytics | No | Built-in | Built-in | Custom |
| Support | Community | Email support | Email support | 24/7 support |

---

## Maintenance Tips

1. **Keep Links Updated**
   - Test links monthly
   - Update project URLs
   - Fix broken references

2. **Update Content**
   - Add new projects regularly
   - Update tech stack as you learn
   - Keep CV current

3. **Monitor Performance**
   - Check analytics monthly
   - Monitor speed with Lighthouse
   - Update images if needed

4. **Security**
   - Keep dependencies updated
   - No sensitive data in code
   - Use environment variables for secrets

5. **Backups**
   - Maintain Git history (automatic with GitHub)
   - Backup important files locally

---

**Your portfolio is now live and ready to impress! 🎉**

Share it proudly with potential employers and collaborators!
