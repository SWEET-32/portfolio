export interface ProjectItem {
  number: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "RoktoSheba",
    description:
      "A location-aware blood donor matching platform for Dhaka. Recipients can request nearby verified donors with matching blood groups and receive notifications quickly.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/your-github/roktosheba",
    live: "https://roktosheba.example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=338&fit=crop",
  },
  {
    number: "02",
    title: "ShikkhaSetu",
    description:
      "An education platform that connects volunteer university tutors with students in rural areas through live classes and recorded lessons.",
    tech: ["Node.js", "Django", "PostgreSQL"],
    github: "https://github.com/your-github/shikkhasetu",
    live: "https://shikkhasetu.example.com",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=338&fit=crop",
  },
  {
    number: "03",
    title: "Dhaka Traffic Insight",
    description:
      "A traffic analysis and prediction dashboard using historical traffic and weather data from major roads in Dhaka.",
    tech: ["Python", "Pandas", "scikit-learn"],
    github: "https://github.com/your-github/traffic-insight",
    live: "https://traffic.example.com",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=338&fit=crop",
  },
  {
    number: "04",
    title: "CRM",
    description:
      "A customer relationship management platform for handling customer information, requests, notifications, and business communication.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/your-github/crm",
    live: "https://crm.example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=338&fit=crop",
  },
  {
    number: "05",
    title: "Workplace",
    description:
      "A workplace management system for managing employees, activities, resources, and internal communication.",
    tech: ["Node.js", "Django", "PostgreSQL"],
    github: "https://github.com/your-github/workplace",
    live: "https://workplace.example.com",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=338&fit=crop",
  },
  {
    number: "06",
    title: "BazarDaam Tracker",
    description:
      "A market price tracking and analysis platform that collects product-price information and presents it through a simple dashboard.",
    tech: ["Python", "BeautifulSoup", "React"],
    github: "https://github.com/your-github/bazardaam",
    live: "https://bazardaam.example.com",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=338&fit=crop",
  },
];
