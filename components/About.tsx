
import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-100 rounded-3xl -z-10 translate-x-2 translate-y-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" 
                alt="Creative Vector Workspace" 
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-800 p-8 rounded-2xl shadow-xl hidden md:flex flex-col items-center justify-center min-w-[140px]">
                <p className="text-white text-4xl font-bold leading-none">2+</p>
                <p className="text-blue-100 text-sm mt-2 text-center font-medium">Years of<br/>Experience</p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-6 tracking-widest text-center uppercase">
                ABOUT ME
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-900 leading-snug">
                Passionate About Creating <br />
                <span className="text-blue-700">Impactful Visual Identities</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg mb-10 text-justify" style={{ textJustify: 'inter-word' }}>
                <p>
                  I'm a <span className="text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">Graphics Designer</span> specialized in logo design, brochures, banners, certificates, and social media creatives. Since 2023, I have been serving at the <span className="text-blue-800 font-semibold">Chattogram Catholic Archdiocese</span>, leading organizational branding initiatives.
                </p>
                <p>
                  My design philosophy centers around <span className="text-blue-800 font-semibold">clarity, purpose, and professional aesthetics</span>. I believe every brand has a story that deserves to be told through clean and modern visual language.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="flex gap-5 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="p-3 bg-white shadow-sm rounded-xl text-blue-800 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Education</h4>
                    <p className="text-slate-600 text-sm leading-tight">Honours in Management</p>
                    <p className="text-blue-800 font-bold text-xs mt-1 uppercase tracking-wider">National University</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="p-3 bg-white shadow-sm rounded-xl text-blue-800 flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Current Role</h4>
                    <p className="text-slate-600 text-sm leading-tight">Graphics Designer</p>
                    <p className="text-blue-800 font-bold text-xs mt-1 uppercase tracking-wider">Catholic Archdiocese</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
