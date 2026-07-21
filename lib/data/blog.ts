export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  link: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Cracking Codeforces Div 2: My six-month climb from Pupil to Specialist",
    date: "May 2026",
    readTime: "7 min read",
    excerpt:
      "A personal account of the strategies, resources, and mindset shifts that helped me break through the rating plateau.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=338&fit=crop",
    link: "#",
  },
  {
    title: "A beginner's guide to system design, with the diagrams I wish I'd had",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "The mental models and whiteboard habits that made system design interviews click — and the diagrams that tie it all together.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&h=338&fit=crop",
    link: "#",
  },
  {
    title: "What my Brain Station 23 internship taught me that lectures didn't",
    date: "January 2026",
    readTime: "6 min read",
    excerpt:
      "Lessons from my first real exposure to production codebases, pull requests, stand-ups, and the gap between theory and practice.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=338&fit=crop",
    link: "#",
  },
];
