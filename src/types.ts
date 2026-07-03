export interface StatMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface TradingSkill {
  id: string;
  name: string;
  category: "Technical" | "Execution" | "Psychology";
  description: string;
  percentage: number;
}

export interface DetailedTradingStat {
  id: string;
  label: string;
  value: string;
  percentage: number; // For circular progress
  color: "gold" | "emerald" | "charcoal";
  description: string;
}

export interface TradingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  iconName: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  tag: string;
  status: "completed" | "ongoing";
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Gold Analysis" | "Weekly Outlook" | "Trade Recap" | "Case Study" | "Trading Plan" | "Journal";
  description: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Setup" | "Lifestyle" | "Chart" | "Workspace";
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  verified: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: "Achievement" | "Course" | "Award";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
