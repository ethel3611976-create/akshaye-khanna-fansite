
import { Movie, Achievement, Quote, FanArt, Analysis, Interview, FanEdit, Tribute } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Himalay Putra',
    year: 1997,
    role: 'Abhay',
    description: 'The cinematic debut of Akshaye Khanna, showcasing his raw talent.',
    category: 'Debut',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Border',
    year: 1997,
    role: '2nd Lt. Dharamvir Singh Bhan',
    description: 'A breakthrough performance that earned him the Filmfare Best Male Debut Award.',
    category: 'Action',
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Taal',
    year: 1999,
    role: 'Manav Mehta',
    description: 'A soulful performance in Subhash Ghai\'s musical masterpiece.',
    category: 'Drama',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Dil Chahta Hai',
    year: 2001,
    role: 'Siddharth "Sid" Sinha',
    description: 'Arguably his most iconic role, defining the silent, artistic youth of modern India.',
    category: 'Drama',
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mv1',
    title: 'Bol De Mithe Bol',
    year: 2002,
    role: 'Self',
    description: 'A popular music video appearance showcasing his romantic charm.',
    category: 'Music Video',
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c1',
    title: 'Luck by Chance',
    year: 2009,
    role: 'Self',
    description: 'A memorable cameo appearance in Zoya Akhtar\'s tribute to Bollywood.',
    category: 'Cameo',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    title: 'Section 375',
    year: 2019,
    role: 'Tarun Saluja',
    description: 'A powerful comeback showcasing his maturity as a seasoned performer.',
    category: 'Drama',
    imageUrl: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=800'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { year: '1998', title: 'Border', award: 'Filmfare Best Male Debut' },
  { year: '2002', title: 'Dil Chahta Hai', award: 'Filmfare Best Supporting Actor' },
  { year: '2007', title: 'Gandhi, My Father', award: 'Special Jury Award' },
  { year: '2020', title: 'Section 375', award: 'Best Actor (Critics) Nomination' }
];

export const QUOTES: Quote[] = [
  { text: "I've never been one to follow the herd. I choose roles that challenge the artist in me, not the star.", context: "Interview with Filmfare, 2019" },
  { text: "Acting is about silence as much as it is about dialogue.", context: "On the sets of Section 375" },
  { text: "Success is fleeting, but the integrity of your work stays forever.", context: "Press Conference, 2017" }
];

export const INTERVIEWS: Interview[] = [
  {
    id: 'i1',
    title: "Akshaye Khanna on Reclusiveness & Craft",
    source: "Film Companion",
    date: "Sep 2019",
    type: "Video",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 'i2',
    title: "The Return of the Prodigal Son",
    source: "Hindustan Times",
    date: "Aug 2022",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export const FAN_ARTS: FanArt[] = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  author: `Artist_${i + 1}`,
  imageUrl: `https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=800`
}));

export const ANALYSES: Analysis[] = [
  {
    id: 'a1',
    title: 'The Silence of Siddharth',
    snippet: 'Exploring why Sid in Dil Chahta Hai remains the benchmark for introverted characters in Bollywood.',
    content: 'Long form analysis of the subtle facial expressions used by Akshaye...',
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAN_EDITS: FanEdit[] = [
  { id: 'e1', title: 'The Intense Gaze', platform: 'Instagram', thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800' },
  { id: 'e2', title: 'Sid & Tara: A Visual Poetry', platform: 'TikTok', thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
  { id: 'e3', title: 'Villainous Charisma', platform: 'Instagram', thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' }
];

export const TRIBUTES: Tribute[] = [
  { id: 't1', author: 'Sameer R.', content: "Akshaye taught me that you don't need to be loud to be heard. His silence is more powerful than a thousand shouts." },
  { id: 't2', author: 'Priya K.', content: "A true artist who respects his audience. Every role he picks feels like a gift to cinema lovers." }
];
