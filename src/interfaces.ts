export interface Image {
  url?: string;
  handle?: string;
  mimeType?: string;
}

export interface Project {
  title: string;
  description?: string;
  url?: string;
  tags?: string;
  category: string;
  image: Image;
}

export interface ProjectsResponse {
  projects: Project[];
}
