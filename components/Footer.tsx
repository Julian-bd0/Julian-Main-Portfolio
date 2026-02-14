
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-3xl font-extrabold tracking-tight">
              JULIAN<span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-400 mt-4 max-w-xs text-base text-justify" style={{ textJustify: 'inter-word' }}>
              Crafting clean, impactful, and purpose-driven visual identities for organizations and brands. Dedicated to professional excellence in graphic design.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Connect with me</p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700 hover:bg-blue-800 hover:border-blue-600 transition-all transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <span className="w-8 h-[1px] bg-slate-800"></span>
            <p>© {currentYear} Julian D Costa. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-8 text-slate-500 text-sm font-semibold">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a 
              href="#home" 
              className="group flex items-center gap-3 text-white hover:text-blue-400 transition-all font-bold"
            >
              Back to top 
              <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                <ArrowUp size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
