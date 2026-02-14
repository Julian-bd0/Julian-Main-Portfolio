// Added React import to resolve "Cannot find namespace 'React'" for React.ReactNode
import React from 'react';

export type ProjectCategory = 'All' | 'Logo' | 'Branding' | 'Print' | 'Social Media';

export interface PortfolioItem {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}