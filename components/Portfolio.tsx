
import React, { useState } from 'react';
import { ProjectCategory, PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Youth Organization Identity', 
    category: 'Branding', 
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Corporate Annual Event Logo', 
    category: 'Logo', 
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Excellence Certificate Design', 
    category: 'Print', 
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    title: 'Social Media Campaign Pack', 
    category: 'Social Media', 
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    title: 'Conference Roll-up Banner', 
    category: 'Print', 
    imageUrl: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 6, 
    title: 'NGO Rebranding Project', 
    category: 'Branding', 
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 7, 
    title: 'Local Bakery Logo', 
    category: 'Logo', 
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 8, 
    title: 'Professional Event Banner', 
    category: 'Print', 
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800' 
  },
];

const categories: ProjectCategory[] = ['All', 'Logo', 'Branding', 'Print', 'Social Media'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Selected Works</h2>
          <p className="text-slate-600 text-lg">
            A showcase of impactful designs for organizations, communities, and local markets.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-blue-800 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-800 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fadeIn"
            >
              <div className="aspect-square overflow-hidden bg-slate-200">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-white text-xl font-bold mb-4 leading-tight">{item.title}</h4>
                <button className="px-5 py-2 bg-white text-blue-900 rounded-lg text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
