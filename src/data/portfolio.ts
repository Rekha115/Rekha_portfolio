export interface Project {
  id: string;
  title: string;
  tag: string;
  emoji: string;
  description: string;
  overview: string;
  features: string[];
  techStack: string[];
  github: string;
  demo: string;
}

export const projectsData: Project[] = [
  {
    id: "fitness-mobile-app",
    title: "Fitness Mobile App",
    tag: "UI/UX · Featured",
    emoji: "🏋️",
    description: "Designed a user-centered fitness application interface with a focus on streamlined navigation, visual hierarchy, and user engagement.",
    overview: "A comprehensive fitness app UI covering onboarding, workout tracking, progress dashboards and social features — all validated through user testing sessions.",
    features: [
      "Onboarding & personalisation flow",
      "Workout logging & tracking screens",
      "Progress charts & analytics",
      "High-fidelity interactive prototype",
      "User research & usability testing",
    ],
    techStack: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    github: "https://github.com/Rekha115",
    demo: "https://github.com/Rekha115",
  },
  {
    id: "ecommerce-checkout-redesign",
    title: "E-commerce Checkout Redesign",
    tag: "UI/UX",
    emoji: "🛒",
    description: "Redesigned the checkout flow to simplify the user journey and improve visual hierarchy, reducing friction and drop-offs.",
    overview: "Streamlined a multi-step checkout into a clean single-page flow, cutting form complexity and improving conversion by reducing user drop-offs.",
    features: [
      "Simplified 3-step to 1-page checkout",
      "Improved form field hierarchy",
      "Trust signals & progress indicators",
      "Mobile-first responsive layouts",
    ],
    techStack: ["Figma", "UI/UX", "Information Architecture"],
    github: "https://github.com/Rekha115",
    demo: "https://github.com/Rekha115",
  },
  {
    id: "java-nlp-chatbot",
    title: "Java-Based NLP Chatbot",
    tag: "Java · NLP",
    emoji: "🤖",
    description: "Developed a chatbot in Java that processes user queries and generates context-aware responses using text processing techniques and OOP principles.",
    overview: "A rule-based NLP chatbot capable of understanding natural language inputs and providing contextually relevant responses using tokenisation and intent matching.",
    features: [
      "Natural language tokenisation",
      "Intent detection & matching",
      "Context-aware response generation",
      "OOP architecture with design patterns",
    ],
    techStack: ["Java", "NLP", "OOP"],
    github: "https://github.com/Rekha115",
    demo: "https://github.com/Rekha115",
  },
  {
    id: "student-grade-tracker",
    title: "Student Grade Tracker System",
    tag: "Java · SQL",
    emoji: "📊",
    description: "Designed and built a full system to track student grades and performance, integrating SQL for efficient data storage and retrieval.",
    overview: "A full-stack student grade management system with CRUD operations, report generation, and database-backed persistence using relational SQL schemas.",
    features: [
      "Student & grade CRUD operations",
      "SQL-backed persistent storage",
      "Performance analytics & reports",
      "Modular OOP class architecture",
    ],
    techStack: ["Java", "SQL", "DBMS", "OOP"],
    github: "https://github.com/Rekha115",
    demo: "https://github.com/Rekha115",
  },
];

export const skillsData = [
  { name: "UI/UX Design", emoji: "🎨", tools: ["Figma", "Canva", "Wireframing", "Prototyping", "User Research"] },
  { name: "Frontend Dev", emoji: "💻", tools: ["HTML", "CSS", "Responsive Design"] },
  { name: "Programming", emoji: "⚙️", tools: ["Java", "Python", "C / C++", "R"] },
  { name: "Database", emoji: "🗄️", tools: ["SQL", "MySQL", "DBMS"] },
  { name: "Tools", emoji: "🛠️", tools: ["Git", "GitHub", "VS Code", "OOP", "NLP"] },
];

export const experiencesData = [
  {
    role: "UI/UX Design Intern",
    period: "Aug 2025 – Sep 2025",
    org: "SkillCraft Technology",
    location: "Gurugram, India",
    details: [
      "Orchestrated 5 user research sessions, synthesizing findings to fix the 3 biggest crash causes in a mobile app — resulting in 20% higher satisfaction scores.",
      "Designed and improved mobile and web interfaces using Figma, including a fitness app and an e-commerce redesign.",
      "Collaborated with design guidelines and received a Letter of Recommendation for quality work and consistency.",
    ],
  },
  {
    role: "Graphic & PR Volunteer",
    period: "Jan 2025 – Present",
    org: "GDG · Dronacharya College",
    location: "Gurugram, India",
    details: [
      "Created event graphics and promotional materials for tech community events.",
      "Managed social media content and public relations for GDG chapter.",
    ],
  },
];
