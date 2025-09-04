import {
  Project,
  Skill,
  Experience,
  Contact,
  PersonalInfo,
  MediaItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ersan Ceylan",
  title: "Full-Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable solutions and bringing ideas to life through code.",
  avatar: require("@/assets/images/ersan.jpg"),
  resume: "/resume.pdf",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Express.js", level: 78, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 72, category: "backend" },
  { name: "Redis", level: 65, category: "backend" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "LOKAL APP",
    description:
      "a platform for turkish coffeehouse games like backgammon, chess, checkers, card games etc.",
    image: require("@/assets/projects/lokal/image.png"),
    technologies: ["react-native", "expo", "firebase"],
    githubUrl: "https://github.com/lokals-online",
    liveUrl: "https://lokalapp.online",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.ersanceylan.lokalsonline",
    iosUrl: "https://apps.apple.com/app/lokalsonline/id6499447614",
    featured: true,
    gallery: [
      { type: "youtube", url: "https://www.youtube.com/watch?v=mWdcdV4OfOQ" },
    ],
  },
  {
    id: "2",
    title: "NONONO APP",
    description:
      "nonono! is an innovative boycott platform that empowers consumers to make their voices heard. You can choose unwanted brands or products to start a boycott, connect with like-minded people, and create a meaningful social movement.",
    image: require("@/assets/projects/nonono/image.png"),
    technologies: ["react-native", "expo", "firebase"],
    liveUrl: "https://nonono-dfba9.web.app/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.ersanceylan.nonono",
    iosUrl: "https://apps.apple.com/us/app/nonono-boycott/id6743887182",
    featured: true,
    gallery: [
      { type: "youtube", url: "https://www.youtube.com/watch?v=oywXRqWSY2s" },
    ],
  },
  {
    id: "3",
    title: "CHESS CLOCK APP",
    description: "a chess clock app for chess tournaments.",
    image: require("@/assets/projects/chess-clock/image.png"),
    technologies: ["react-native", "typescript"],
    githubUrl: "https://github.com/ersanceylan/chess-clock",
    iosUrl: "https://apps.apple.com/app/chess-clock/id6754444444",
    featured: true,
    gallery: [
      // { type: "youtube", url: "https://www.youtube.com/watch?v=oywXRqWSY2s" },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of scalable web applications serving 100k+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to create responsive user interfaces",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    id: "2",
    company: "Digital Agency",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    description: [
      "Developed responsive websites for various clients",
      "Optimized website performance achieving 95+ Lighthouse scores",
      "Integrated third-party APIs and payment systems",
      "Maintained and updated existing web applications",
    ],
    technologies: ["React", "JavaScript", "SASS", "WordPress", "PHP"],
  },
  {
    id: "3",
    company: "Startup Ventures",
    position: "Junior Developer",
    duration: "2019 - 2020",
    description: [
      "Built interactive web components using modern frameworks",
      "Participated in agile development processes",
      "Learned best practices for code quality and testing",
      "Contributed to open-source projects",
    ],
    technologies: ["JavaScript", "React", "HTML/CSS", "Git", "Jest"],
  },
];

export const contact: Contact = {
  email: "ersanceylan35@gmail.com",
  phone: "+905557079176",
  telegram: "ersanceylann",
  location: "Muğla, Türkiye",
  social: {
    github: "https://github.com/ersanceylan",
    linkedin: "https://linkedin.com/in/ersanceylan",
    twitter: "https://twitter.com/ersanceylan",
  },
};
