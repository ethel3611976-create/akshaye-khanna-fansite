
export interface Movie {
  id: string;
  title: string;
  year: number;
  role: string;
  description: string;
  category: 'Drama' | 'Thriller' | 'Comedy' | 'Action' | 'Debut' | 'Music Video' | 'Cameo';
  imageUrl: string;
}

export interface Achievement {
  year: string;
  title: string;
  award: string;
}

export interface Quote {
  text: string;
  context: string;
}

export interface FanArt {
  id: string;
  author: string;
  imageUrl: string;
}

export interface Analysis {
  id: string;
  title: string;
  snippet: string;
  content: string;
  imageUrl: string;
}

export interface Interview {
  id: string;
  title: string;
  source: string;
  date: string;
  type: 'Video' | 'Article';
  imageUrl: string;
  link: string;
}

export interface FanEdit {
  id: string;
  title: string;
  platform: 'Instagram' | 'TikTok';
  thumbnailUrl: string;
}

export interface Tribute {
  id: string;
  author: string;
  content: string;
}
