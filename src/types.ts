export interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  image?: string;
  link?: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Cloud' | 'Other';
}
