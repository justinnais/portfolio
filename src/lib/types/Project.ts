export interface Project {
  name: string;
  date: string;
  category: Category;
  summary: string;
  tags?: string[];
  links?: {
    external?: string;
    github?: string;
  };
}

export interface ProjectResponse {
  meta: Project;
  path: string;
}

enum Category {
  'uni project',
  'personal project',
  'work',
}
