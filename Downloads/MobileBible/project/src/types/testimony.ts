export interface Testimony {
    id: string;
    author: string;
    title: string;
    content: string;
    category: string;
    likes: number;
    comments: number;
    date: string;
    isLiked?: boolean;
  }
  
  export interface Comment {
    id: string;
    author: string;
    content: string;
    date: string;
  }
  
  export type TestimonyCategory = {
    id: string;
    name: string;
    icon: string;
  };


  export interface Verse {
    id: number;
    text: string;
  }
  
  export interface Book {
    id: string;
    name: string;
    chaptersCount: number;
  }