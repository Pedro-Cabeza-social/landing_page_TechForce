import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Support' | 'Development' | 'Consulting';
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  tags: string[];
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  submittedAt: Date;
  status: 'new' | 'contacted' | 'converted';
}

export interface NavItem {
  label: string;
  href: string;
}