# Andrew Okibe | Web Developer & AI Engineer Portfolio

A modern, futuristic, and responsive personal portfolio website for **Andrew Okibe**, a Web Developer and AI Engineer. This portfolio showcases technical skills, projects, services, learning journey, and contact information.

## 🌟 Features

- **Modern Dark Aesthetic** - Dark navy/black background with purple, violet, electric blue, and cyan gradients
- **Responsive Design** - Fully responsive for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle hover effects, scroll reveals, and interactive transitions
- **Performance Optimized** - Fast loading, optimized images, and clean code
- **Professional Layout** - Clean typography, proper spacing, and technical credibility
- **Fully Functional** - Smooth scrolling, mobile menu, form handling, and more

## 📋 Sections

1. **Navigation Bar** - Fixed sticky navigation with brand name, links, and CV download button
2. **Hero Section** - Impressive welcome section with headline, role, description, CTA buttons, and social icons
3. **Tech Stack** - Showcase of technologies used (Go, JavaScript, Python, MySQL, HTML, CSS)
4. **About Me** - Personal introduction with statistics (years learning, projects built, tech tools, passion)
5. **Projects** - Portfolio of three featured projects with descriptions, tech badges, and action buttons
6. **Services** - Two main service offerings (Web Development & AI Engineering)
7. **Journey** - Timeline of learning and growth milestones
8. **CTA Section** - Call-to-action banner for getting in touch
9. **Footer** - Copyright, social links, and profession description

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design**: Responsive Grid/Flexbox layouts
- **Icons**: Font Awesome 6.4.0
- **Animations**: CSS3 animations and JavaScript Intersection Observer API
- **No Dependencies** - Pure HTML, CSS, and JavaScript (except Font Awesome for icons)

## 📁 File Structure

```
andrew-okibe-portfolio/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Comprehensive CSS with animations and responsive design
├── script.js           # JavaScript for interactivity and functionality
├── assets/             # Images and media files
│   ├── profile.jpg     # Hero section profile image
│   ├── about.jpg       # About section image
│   ├── afrobeat-buzz.jpg      # Project thumbnail
│   ├── ai-chat.jpg            # Project thumbnail
│   ├── task-manager.jpg       # Project thumbnail
│   └── Andrew-Okibe-CV.pdf    # CV file for download
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Andrew628-ops/andrew-okibe-portfolio.git
   cd andrew-okibe-portfolio
   ```

2. **Add your assets**
   - Create an `assets/` folder in the root directory
   - Add your profile image as `assets/profile.jpg`
   - Add your about section image as `assets/about.jpg`
   - Add project thumbnails: `assets/afrobeat-buzz.jpg`, `assets/ai-chat.jpg`, `assets/task-manager.jpg`
   - Add your CV as `assets/Andrew-Okibe-CV.pdf`

3. **Update personal information**
   - Open `index.html` and update social media links
   - Update project links (GitHub and Live Demo URLs)
   - Update contact email addresses
   - Customize project descriptions if needed

4. **Run locally**
   - Open `index.html` in your browser, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```
   - Visit `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-bg: #0a0e27;           /* Main background */
    --accent-purple: #8b5cf6;        /* Primary accent */
    --accent-violet: #a78bfa;        /* Secondary accent */
    --accent-blue: #3b82f6;          /* Tertiary accent */
    --accent-cyan: #06b6d4;          /* Highlight accent */
    /* ... other variables ... */
}
```

### Social Links
Update social media URLs in `index.html`:
```html
<a href="https://github.com/your-username" target="_blank">
<a href="https://linkedin.com/in/your-profile" target="_blank">
<!-- etc. -->
```

### Projects
Edit the project cards in the "My Projects" section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description</p>
        <div class="project-tech">
            <span class="tech-badge">Technology 1</span>
            <span class="tech-badge">Technology 2</span>
        </div>
    </div>
</div>
```

### Tech Stack
Update the Tech Stack section with your technologies:
```html
<div class="tech-card" data-tech="your-tech">
    <div class="tech-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h3>Your Tech</h3>
    <p>Category</p>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ JavaScript Features

### 1. **Smooth Scrolling**
- Smooth scroll behavior for all navigation links
- Active link highlighting based on scroll position

### 2. **Mobile Menu**
- Hamburger menu toggle for mobile devices
- Auto-close on link click

### 3. **Animations**
- Fade-in animations on page load
- Scroll-reveal animations for sections
- Timeline animations
- Parallax effect on hero section
- Button ripple effects

### 4. **Interactive Elements**
- Hover effects on cards and buttons
- Tech card interactions
- Project card overlays
- Service card transformations

### 5. **CV Download**
- Download CV button functionality
- Success feedback on download

### 6. **Form Handling** (if contact form added)
- Email validation
- Form submission handling
- Success/error messages

### 7. **Lazy Loading**
- Image lazy loading support
- Intersection Observer API

## 🔧 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile Browsers: Latest versions

## 📊 Performance Optimization

- Minimal CSS (~20KB)
- Lightweight JavaScript (~12KB)
- No external frameworks or heavy libraries
- Optimized images (recommend using compressed assets)
- CSS Grid and Flexbox for efficient layouts
- Intersection Observer for scroll animations (no scroll event spam)

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://your-username.github.io/andrew-okibe-portfolio/`

### Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty - static site)
3. Set publish directory: `.` (root)
4. Deploy!

### Vercel
1. Import your GitHub repository
2. No configuration needed
3. Deploy automatically

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `.htaccess` or server config allows direct access to HTML, CSS, JS files
3. Visit your domain

## 🎯 Future Enhancements

- [ ] Add blog section with articles
- [ ] Add AI chatbot feature
- [ ] Add dark/light theme toggle
- [ ] Add contact form with backend integration
- [ ] Add more interactive demonstrations
- [ ] Add loading animations
- [ ] Add service worker for PWA support
- [ ] Add analytics tracking

## 📧 Contact

For questions or suggestions about this portfolio template:
- Email: andrewokibeotokpa@gmail.com
- GitHub: [@Andrew628-ops](https://github.com/Andrew628-ops)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

If you'd like to suggest improvements or report issues:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

**Made with ❤️ by Andrew Okibe | Web Developer & AI Engineer**

Built with modern web technologies for a professional and futuristic portfolio experience.
