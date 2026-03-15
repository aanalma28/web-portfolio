import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'kollab',
    title: 'Kollab',
    description: 'A powerful Kanban Board application to visualize workflow, manage tasks, and streamline team collaboration in real-time.',
    duration: 'April 2025 - Juli 2025',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000',
    link: 'https://kollab-test-vercel.app',
    tags: ['React', 'Node.js', 'WebSockets', 'Tailwind CSS']
  },
  {
    id: 'edutrash',
    title: 'EduTrash',
    description: 'AI-powered waste classification app designed to help users identify and categorize waste types using machine learning.',
    duration: 'Desember 2024 - Januari 2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    tags: ['Express.js', 'Google Cloud Platform', 'Vertex AI', 'Machine Learning']
  },
  {
    id: 'educa',
    title: 'Educa',
    description: 'Backend services for an educational platform handling complex data operations and reliable synchronization.',
    duration: 'Mei 2024 - Juni 2024',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
    tags: ['Firebase', 'NoSQL', 'Node.js']
  },
  {
    id: 'tipayungkos',
    title: 'TipayungKos',
    description: 'A comprehensive boarding house management system with authentication, room management, and transactional operations.',
    duration: 'November 2023 - Desember 2023',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000',
    link: 'https://tipayungkos.rf.gd',
    tags: ['Laravel', 'MySQL', 'REST API', 'Bootstrap']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp0',
    company: 'Kollab',
    role: 'Fullstack Developer',
    period: 'APRIL 2025 - JULY 2025',
    description: [
      'Developed a real-time Kanban Board application for team collaboration.',
      'Implemented interactive task management features with drag-and-drop functionality.',
      'Integrated WebSockets for real-time data synchronization across clients.'
    ]
  },
  {
    id: 'exp1',
    company: 'Edutrash',
    role: 'Assistant Backend Developer',
    period: 'DECEMBER 2024 - JANUARY 2025',
    description: [
      'Assisted in developing and integrating RESTful APIs using Express.js on Google Cloud Platform.',
      'Integrated Vertex AI API for generative AI use cases within the application backend.'
    ]
  },
  {
    id: 'exp2',
    company: 'Educa',
    role: 'Backend Developer',
    period: 'MAY 2024 - JUNE 2024',
    description: [
      'Implemented backend services to handle data operations using Firebase NoSQL Database.',
      'Ensured structured data flow, efficient query handling, and reliable data synchronization.'
    ]
  },
  {
    id: 'exp3',
    company: 'TipayungKos',
    role: 'Backend Developer',
    period: 'NOVEMBER 2023 - DECEMBER 2023',
    description: [
      'Developed and maintained RESTful APIs using Laravel to support frontend integration.',
      'Implemented authentication, data validation, and transactional database operations using MySQL.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Laravel', category: 'Backend' },
  { name: 'Node.js (Express)', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Google Cloud Platform', category: 'Cloud' },
  { name: 'Vertex AI API', category: 'Cloud' },
  { name: 'Git', category: 'Cloud' },
  { name: 'Machine Learning', category: 'Other' },
  { name: 'Android Development', category: 'Other' }
];
