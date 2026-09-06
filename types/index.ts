export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  stack: string[];
  points: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CertificationItem {
  title: string;
}