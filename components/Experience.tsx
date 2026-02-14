
import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Graphics Designer',
    company: 'Chattogram Catholic Archdiocese',
    period: '2023 – Present',
    description: 'Working on organizational branding materials, youth organization visuals, event banners, certificates, and promotional designs. Playing a key role in visualizing the mission of the Archdiocese through modern design principles and clean layouts.'
  },
  {
    role: 'Freelance Graphic Designer',
    company: 'Various Clients & Local Markets',
    period: '2021 – 2023',
    description: 'Developed brand identities and marketing materials for local businesses. Specialized in logo creation and high-impact social media creatives, ensuring that each client received a unique and professional visual solution.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">
            PROFESSIONAL JOURNEY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Experience Timeline</h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-blue-800 rounded-full z-10 hidden md:flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></div>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-800 group-hover:w-full group-hover:opacity-5 transition-all duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-blue-800 font-bold text-sm bg-blue-50 px-3 py-1 rounded-lg">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{exp.role}</h3>
                    
                    <div className="flex items-center gap-2 text-blue-700 font-semibold mb-6">
                      <Building2 size={18} />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-base text-justify" style={{ textJustify: 'inter-word' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator for desktop */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent ${
                  index % 2 === 0 
                  ? 'right-[50%] border-l-[15px] border-l-slate-100' 
                  : 'left-[50%] border-r-[15px] border-r-slate-100'
                }`} style={{
                  transform: index % 2 === 0 ? 'translateY(-50%) translateX(-18px)' : 'translateY(-50%) translateX(18px)'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
