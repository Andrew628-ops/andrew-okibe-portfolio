# 🚀 Quick Start Guide

Welcome to your professional portfolio! Follow these steps to get your portfolio up and running.

## Step 1: Clone or Download the Repository

```bash
git clone https://github.com/Andrew628-ops/andrew-okibe-portfolio.git
cd andrew-okibe-portfolio
```

Or download the ZIP file and extract it.

## Step 2: Prepare Your Assets

Create an `assets/` folder in the root directory and add these files:

### Images Needed:
- **profile.jpg** - Your professional headshot for the hero section (recommended: 400x400px)
- **about.jpg** - Your photo for the about section (recommended: 500x600px)
- **afrobeat-buzz.jpg** - Project 1 thumbnail (recommended: 600x400px)
- **ai-chat.jpg** - Project 2 thumbnail (recommended: 600x400px)
- **task-manager.jpg** - Project 3 thumbnail (recommended: 600x400px)
- **Andrew-Okibe-CV.pdf** - Your resume/CV file

### File Structure:
```
andrew-okibe-portfolio/
├── assets/
│   ├── profile.jpg
│   ├── about.jpg
│   ├── afrobeat-buzz.jpg
│   ├── ai-chat.jpg
│   ├── task-manager.jpg
│   └── Andrew-Okibe-CV.pdf
├── index.html
├── styles.css
├── script.js
├── config.js
└── README.md
```

## Step 3: Customize Your Content

### Option A: Quick Edit in HTML (Easiest)
Open `index.html` and update these sections:

**Social Links:**
```html
<a href="https://github.com/your-username" target="_blank">
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://twitter.com/your-handle" target="_blank">
<a href="mailto:your-email@example.com">
```

**Project Links:**
Find each project card and update:
```html
<a href="your-live-demo-url" class="btn btn-small">Live Demo</a>
<a href="your-github-repo-url" class="btn btn-small">GitHub</a>
```

**Personal Information:**
- Email address
- Project descriptions
- Tech stack items

### Option B: Use Configuration File (Advanced)
Edit `config.js` with your information:
```javascript
const portfolioConfig = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your-email@example.com",
        // ... more settings
    },
    social: {
        github: "https://github.com/your-username",
        // ... more social links
    }
    // ... and more configurations
};
```

## Step 4: Test Locally

### Option A: Using Python (Recommended)
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option B: Using Node.js
```bash
npx http-server
```
Then visit: `http://localhost:8080`

### Option C: Direct File Opening
Simply double-click `index.html` to open in your browser (works but some features may be limited)

## Step 5: Deploy to GitHub Pages

### Setup:
1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**

Your portfolio will be live at: `https://your-username.github.io/andrew-okibe-portfolio/`

### Make it Your Primary Portfolio:
If you want it at `https://your-username.github.io/`:
1. Rename the repository to `your-username.github.io`
2. Deploy from the main branch

## Step 6: Alternative Deployment Options

### Deploy to Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Accept default build settings
5. Deploy!

Live at: `https://your-portfolio.netlify.app/`

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy!

Live at: `https://your-portfolio.vercel.app/`

### Traditional Hosting (Bluehost, GoDaddy, etc.)
1. Upload all files to your web hosting account
2. Use FTP or File Manager
3. Upload to the `public_html` folder
4. Visit your domain

## Essential Customizations Checklist

- [ ] Replace profile image
- [ ] Replace about section image
- [ ] Replace project thumbnails
- [ ] Update all social media links
- [ ] Update email addresses
- [ ] Update project titles and descriptions
- [ ] Update project GitHub links
- [ ] Update project live demo links
- [ ] Add your CV/Resume PDF
- [ ] Update tech stack (if different)
- [ ] Update journey timeline (if needed)
- [ ] Update about section text
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Deploy!

## Common Customizations

### Change Hero Section Text
Find in `index.html`:
```html
<h1 class="hero-title">Hi, I'm Andrew Okibe</h1>
<p class="hero-role">Web Developer & AI Engineer</p>
<p class="hero-description">
    I build modern web applications...
</p>
```

### Add/Remove Projects
Find the Projects section and duplicate or remove project cards:
```html
<div class="project-card">
    <!-- Copy this entire block to add a new project -->
</div>
```

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --accent-purple: #8b5cf6;  /* Change this hex code */
    --accent-cyan: #06b6d4;    /* Change this hex code */
    /* etc. */
}
```

### Update Tech Stack
Find the Tech Stack section and modify or add cards:
```html
<div class="tech-card" data-tech="your-tech">
    <div class="tech-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h3>Your Technology</h3>
    <p>Category</p>
</div>
```

## Troubleshooting

### Images Not Loading
- Ensure image files are in the `assets/` folder
- Check file names match exactly (case-sensitive)
- Use correct image formats (jpg, png, webp)

### CV Download Not Working
- Ensure PDF file is in `assets/Andrew-Okibe-CV.pdf`
- Check file path in the CV button click handler

### Mobile Menu Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors
- Verify `script.js` is properly linked in HTML

### Links Not Working
- Verify URL format is correct (http:// or https://)
- Test URLs in separate browser tab
- Check for typos in email addresses

### Styling Issues
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Reload page (F5 or Cmd+R)
- Check that `styles.css` is properly linked

## Next Steps After Deployment

1. **Share Your Portfolio**
   - Add link to GitHub bio
   - Share on LinkedIn
   - Share on Twitter/X
   - Include in your resume/CV

2. **Add More Content**
   - Add more projects as you build them
   - Update tech stack as you learn new technologies
   - Add blog section (optional)

3. **Optimize Further**
   - Compress images for faster loading
   - Add analytics (Google Analytics)
   - Set up custom domain
   - Add SSL certificate

4. **Maintain Your Portfolio**
   - Keep projects and descriptions updated
   - Update links regularly
   - Add new projects frequently
   - Keep CV current

## Support & Help

If you encounter issues:
1. Check the [README.md](README.md) file
2. Review browser console for errors (F12)
3. Compare your setup with the file structure
4. Test in different browsers
5. Check GitHub repository for updates

## Resources

- **Font Awesome Icons**: [fontawesome.com](https://fontawesome.com)
- **CSS Gradients**: [cssgradient.io](https://cssgradient.io)
- **Color Picker**: [coolors.co](https://coolors.co)
- **Image Compression**: [tinypng.com](https://tinypng.com)
- **Deployment Help**: Check your hosting provider's documentation

---

**You're all set! 🎉 Your portfolio is ready to impress.** 

Good luck on your journey as a Web Developer & AI Engineer!
