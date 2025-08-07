export interface MediaItem {
  type: "image" | "youtube";
  url: string;
  thumbnail?: string; // For YouTube videos, this can be the auto-generated thumbnail
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  featured: boolean;
  gallery?: MediaItem[];
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  telegram?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume: string;
}
