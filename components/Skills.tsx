
import React from 'react';
import { Palette, Layers, Printer, PenTool } from 'lucide-react';

const skills = [
  { name: 'Adobe Illustrator', icon: <PenTool size={32} />, description: 'Mastery in vector illustration and complex logo creation for diverse branding needs.' },
  { name: 'Adobe Photoshop', icon: <Palette size={32} />, description: 'Professional photo editing and creative digital compositions with advanced techniques.' },
  { name: 'Branding', icon: <Layers size={32} />, description: 'Strategic visual identity systems and comprehensive brand guides for organizations.' },
  { name: 'Print Design', icon: <Printer size={32} />, description: 'High-quality banners, brochures, and certificates designed for impactful physical presence.' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 text-lg">
            Mastering the industry standard tools and principles to deliver exceptional creative work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-blue-700 group transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{skill.name}</h3>
              <p className="text-slate-500 leading-relaxed text-sm text-justify" style={{ textJustify: 'inter-word' }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
