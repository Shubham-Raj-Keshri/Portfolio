export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/Shubham-Raj-Keshri",
  linkedin: "https://www.linkedin.com/in/shubham-raj-keshri/",
  email: "shubhamkeshri2020@gmail.com",
  phone: "8210057738",
};

export const experiences = [
  {
    company: "Dil Se Trader Pvt Ltd",
    role: "Full Stack Engineer",
    period: "June 2026 – Present",
    type: "Full Time",
    responsibilities: [
      "Developed scalable full-stack applications using Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma ORM.",
      "Built secure JWT authentication systems.",
      "Designed and implemented RESTful APIs.",
      "Created responsive dashboards with modern UI patterns.",
      "Worked closely with backend and frontend architecture decisions.",
    ],
  },
  {
    company: "Dil Se Trader Pvt Ltd",
    role: "Frontend Developer",
    period: "Sep 2025 – Jul 2026",
    type: "Full Time",
    responsibilities: [
      "Developed modern React & Next.js applications.",
      "Integrated REST APIs with clean data-fetching patterns.",
      "Optimized rendering performance across the application.",
      "Implemented reusable component libraries.",
      "Improved application responsiveness and accessibility.",
      "Worked with Git Flow for version control.",
    ],
  },
  {
    company: "LearningMate",
    role: "Associate Content Technologist",
    period: "Jan 2023 – Jul 2025",
    type: "Full Time",
    responsibilities: [
      "Developed 200+ LMS courses for enterprise clients.",
      "Built reusable React components for course templates.",
      "Created responsive HTML/CSS layouts for e-learning modules.",
      "Integrated REST APIs for dynamic content delivery.",
      "Worked with SCORM standards for LMS compatibility.",
    ],
  },
];

export const projects = [
  {
    title: "Klue Drinks",
    description:
      "Modern responsive e-commerce frontend for a premium drinks brand. Built with React.js and Tailwind CSS featuring reusable UI architecture, optimized rendering performance, and an interactive product showcase.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    image: "/assets/Kluedrinks.png",
    live: "https://kluedrinks.com/",
    github: null,
    featured: true,
  },
  {
    title: "Interview Dashboard",
    description:
      "Full Stack Interview Tracker with JWT Authentication. Manage job applications with CRUD operations, advanced filtering, sorting, and a fully responsive user interface.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    image: "/assets/InterviewDashboard.png",
    live: null,
    github: null,
    featured: true,
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance management platform to track income, expenses, and categories. Features JWT authentication, a clean dashboard interface, and comprehensive financial reporting.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    image: null,
    live: null,
    github: null,
    featured: false,
  },
  {
    title: "Edutech Course Directory",
    description:
      "Modern SaaS-inspired course discovery platform built with React and Vite. Features search, filtering, pagination, skeleton loading, and smooth Framer Motion animations.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/assets/Edutech.png",
    live: "https://edutech-course-directory.vercel.app/",
    github: null,
    featured: false,
  },

  // ============================================================
  // PROJECT 5
  // ============================================================

  {
    title: "Jewel's Galore",
    description:
      "A modern full-stack jewellery e-commerce website with a responsive shopping experience, category-wise product collections, premium visuals, smooth navigation, and a Node.js and Express backend with REST APIs.",
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    image: "/assets/JewelGalore.png",
    live: "https://shubham-raj-keshri.github.io/Jewel-s-Galore/",
    github: null,
    featured: false,
  },

  // ============================================================
  // PROJECT 6
  // ============================================================

  {
    title: "Responsive Burger Website",
    description:
      "A fully responsive fast-food restaurant website featuring a modern hero section, menu cards, smooth animations, and an interactive mobile navigation experience optimized for all screen sizes.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "AOS",
      "FontAwesome",
      "Responsive Design",
    ],
    image: "/assets/Responsive Burger.png",
    live: "https://shubham-raj-keshri.github.io/Responsive-Burger/",
    github: null,
    featured: false,
  },
];

export const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "SCSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "REST APIs",
    "JWT Authentication",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "ClickUp"],
};

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Master of Computer Applications",
    period: "2021 – 2023",
    cgpa: "8.13",
  },
  {
    institution: "Sikkim Manipal University",
    degree: "Bachelor of Computer Applications",
    period: "2017 – 2020",
    cgpa: "6.43",
  },
];

export const certificates = [
  "ClickUp Novice",
  "ReactJS for Beginners",
  "IBM Web Development",
  "Python for Data Science",
  "MySQL Basics",
];

export const aboutCards = [
  {
    title: "Responsive UI",
    description: "Pixel-perfect interfaces that work flawlessly across all devices and screen sizes.",
    icon: "monitor",
  },
  {
    title: "Performance",
    description: "Optimized rendering, lazy loading, and efficient data fetching for blazing-fast apps.",
    icon: "zap",
  },
  {
    title: "Clean Architecture",
    description: "Scalable, maintainable codebases with reusable components and clear separation of concerns.",
    icon: "layers",
  },
];
