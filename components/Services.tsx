
import React from 'react';
import { Compass, Shapes, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Logo Design',
    description: 'Professional and memorable logo creation tailored to brand identity, ensuring your business stands out. I focus on creating iconic marks that resonate with your specific target audience.',
    icon: <Compass size={32} />
  },
  {
    title: 'Branding',
    description: 'Complete branding solutions including visual identity systems, typography, color palettes, and brand guidelines. I ensure consistency across all touchpoints for a unified brand presence.',
    icon: <Shapes size={32} />
  },
  {
    title: 'Social Media Design',
    description: 'Creative and engaging designs for social media platforms to boost your online presence and audience engagement. From posts to cover images, I make your brand shine on digital spaces.',
    icon: <Megaphone size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-slate-600 text-lg">
            Providing comprehensive design solutions tailored to your unique organizational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-blue-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-50 text-blue-700 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-justify" style={{ textJustify: 'inter-word' }}>
                {service.description}
              </p>
              <div className="mt-auto h-1 w-12 bg-blue-200 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
