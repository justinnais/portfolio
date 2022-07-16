export interface Project {
  name: string;
  date: string;
  tags?: string[];
}

export interface ProjectResponse {
  meta: Project;
  path: string;
}
