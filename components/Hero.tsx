
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-50 to-white -z-10 rounded-b-[100px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Center Circular Profile Image */}
          <div className="relative mb-12 group">
            {/* Decorative Outer Rings */}
            <div className="absolute inset-0 bg-blue-50 rounded-full animate-pulse scale-125 -z-10 opacity-40"></div>
            <div className="absolute -inset-4 border border-blue-100 rounded-full -z-10"></div>
            <div className="absolute -inset-8 border border-blue-50 rounded-full -z-10"></div>
            
            {/* Main Circular Container with Double Border */}
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-tr from-blue-800 to-blue-400 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white flex items-center justify-center shadow-inner">
                <img 
                  src="https://i.postimg.cc/3NsYqzSM/Final.jpg" 
                  alt="Julian D Costa" 
                  // Using object-cover with a custom center-top position to ensure head/chin are preserved
                  // object-[center_20%] typically helps in keeping the head from being cut off in portrait crops
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-blue-900 text-[10px] md:text-xs font-bold px-5 py-2 rounded-full shadow-xl z-20 uppercase tracking-widest border border-blue-100 flex items-center gap-2 whitespace-nowrap">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              Available for new projects
            </div>
          </div>

          {/* Content - Perfectly Centered */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              <span className="block mb-2">Julian D Costa</span>
              <span className="flex items-center justify-center gap-4 text-blue-800 text-2xl md:text-3xl font-semibold opacity-90">
                <span className="hidden md:inline-block h-[2px] w-10 bg-blue-300"></span>
                Graphic Designer & Brand Strategist
                <span className="hidden md:inline-block h-[2px] w-10 bg-blue-300"></span>
              </span>
            </h1>
            
            <p className="max-w-2xl text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
              Specializing in professional branding, print design, and social media creatives for organizations and businesses since 2021.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20 active:scale-95"
              >
                Explore Portfolio <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-800 hover:text-blue-800 px-10 py-4 rounded-full font-bold transition-all shadow-sm flex items-center justify-center active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
            <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
