export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'leadership';
}

export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  stats: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}