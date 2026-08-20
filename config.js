/* ===========================
   PORTFOLIO CONFIGURATION
   Edit this file to customize your portfolio content
   =========================== */

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Andrew Okibe",
        title: "Web Developer & AI Engineer",
        description: "I build modern web applications and intelligent solutions using Go, Python, JavaScript and more. Passionate about clean code, scalable systems and the future of AI.",
        email: "hello@andrew.com",
        location: "Nigeria",
        resumeUrl: "assets/Andrew-Okibe-CV.pdf"
    },

    // Social Links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:hello@andrew.com"
    },

    // About Section
    about: {
        heading: "About Me",
        text: "I'm Andrew Okibe, a passionate Web Developer and AI Engineer from Nigeria. I enjoy building modern, responsive and scalable web applications, and exploring the exciting world of Artificial Intelligence and Machine Learning. I'm always learning, building and improving — turning ideas into real-world solutions.",
        stats: [
            { number: "2+", label: "Years Learning" },
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Tech Tools" },
            { number: "100%", label: "Passion for Growth" }
        ]
    },

    // Tech Stack
    techStack: [
        {
            name: "Go",
            category: "Backend",
            icon: "fab fa-golang",
            color: "#00ADD8"
        },
        {
            name: "JavaScript",
            category: "Frontend",
            icon: "fab fa-js-square",
            color: "#F7DF1E"
        },
        {
            name: "Python",
            category: "AI / Backend",
            icon: "fab fa-python",
            color: "#3776AB"
        },
        {
            name: "MySQL",
            category: "Database",
            icon: "fas fa-database",
            color: "#00758F"
        },
        {
            name: "HTML",
            category: "Frontend",
            icon: "fab fa-html5",
            color: "#E34C26"
        },
        {
            name: "CSS",
            category: "Styling",
            icon: "fab fa-css3-alt",
            color: "#1572B6"
        }
    ],

    // Projects
    projects: [
        {
            title: "Afrobeat Buzz",
            description: "A web platform for discovering and exploring Afrobeat music, artists and trending hits.",
            image: "assets/afrobeat-buzz.jpg",
            technologies: ["Go", "HTML", "CSS", "JavaScript"],
            liveDemo: "https://afrobeat-buzz.demo.com",
            github: "https://github.com/Andrew628-ops/afrobeat-buzz"
        },
        {
            title: "AI Chat Assistant",
            description: "An intelligent chatbot built with Python and advanced AI models to provide smart and helpful responses.",
            image: "assets/ai-chat.jpg",
            technologies: ["Python", "AI/ML", "FastAPI"],
            liveDemo: "https://ai-chat-assistant.demo.com",
            github: "https://github.com/Andrew628-ops/ai-chat-assistant"
        },
        {
            title: "Task Manager Pro",
            description: "A full-featured task management web app with user authentication and real-time updates.",
            image: "assets/task-manager.jpg",
            technologies: ["JavaScript", "MySQL", "CSS"],
            liveDemo: "https://task-manager-pro.demo.com",
            github: "https://github.com/Andrew628-ops/task-manager-pro"
        }
    ],

    // Services
    services: [
        {
            title: "Web Development",
            description: "Building responsive, functional and user-friendly web applications using modern technologies.",
            icon: "fas fa-code"
        },
        {
            title: "AI Engineering",
            description: "Developing intelligent applications and integrating AI/ML models into practical solutions for real-world problems.",
            icon: "fas fa-brain"
        }
    ],

    // Journey Timeline
    journey: [
        {
            year: "2024",
            title: "Started My Tech Journey",
            description: "Discovered my passion for programming and technology."
        },
        {
            year: "2024–2025",
            title: "Learning & Building",
            description: "Mastered key programming skills and built real-world projects."
        },
        {
            year: "2025–2026",
            title: "Growing & Experimenting",
            description: "Exploring Web Development and AI Engineering, working on bigger and smarter solutions."
        },
        {
            year: "Beyond",
            title: "Building the Future",
            description: "Aiming to become a world-class Web Developer and AI Engineer, creating impactful technology."
        }
    ],

    // Skills (Extended List)
    skills: {
        languages: ["JavaScript", "Python", "Go", "HTML", "CSS"],
        frontend: ["React", "Vue.js", "HTML5", "CSS3", "Responsive Design"],
        backend: ["Node.js", "Go", "FastAPI", "Express.js"],
        databases: ["MySQL", "PostgreSQL", "MongoDB"],
        ai_ml: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
        tools: ["Git", "Docker", "VS Code", "Figma", "GitHub"]
    },

    // CTA Section
    cta: {
        heading: "Let's Build Something Amazing",
        subheading: "Have a project in mind? Let's turn your ideas into reality.",
        buttonText: "Get In Touch"
    },

    // Footer
    footer: {
        copyright: "© 2026 Andrew Okibe. All rights reserved.",
        role: "Web Developer | AI Engineer"
    },

    // Theme Colors (matching CSS variables)
    theme: {
        primary_bg: "#0a0e27",
        secondary_bg: "#1a1f3a",
        tertiary_bg: "#252d47",
        accent_purple: "#8b5cf6",
        accent_violet: "#a78bfa",
        accent_blue: "#3b82f6",
        accent_cyan: "#06b6d4",
        text_primary: "#f0f4f8",
        text_secondary: "#b0b8c8"
    }
};

// Export configuration (for use in other scripts if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}