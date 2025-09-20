export interface ProjectDetails {
  overview: string;
  features: string[];
  challenges: string;
  solutions: string;
  numberOfDevelopers: number;

  role: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  tech: string[];
  featured: boolean;
  github: string;
  demo: string;
  details: ProjectDetails;
  category: 'main' | 'latest' | 'side';
  status: 'completed' | 'in-progress';
  createdAt: string;
}

export interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
  }

export type FilterType = 'all' | 'main' | 'latest' | 'side';
export type StatusFilterType = 'all' | 'completed' | 'in-progress';
