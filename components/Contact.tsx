
import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* Info Side */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-blue-800 text-blue-100 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Let's Work <span className="text-blue-500">Together</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-md text-justify" style={{ textJustify: 'inter-word' }}>
              Ready to elevate your organization's visual identity? I'm available for new projects and collaborations. My goal is to create designs that truly reflect your values and mission.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Mail size={22} />, label: 'Email Me', value: 'juliandcosta.bd@gmail.com', href: 'mailto:juliandcosta.bd@gmail.com' },
                { icon: <Phone size={22} />, label: 'Call Me', value: '01844692914', href: 'tel:01844692914' },
                { icon: <MapPin size={22} />, label: 'Location', value: 'Chattogram, Bangladesh', href: '#' }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{info.label}</span>
                    <a 
                      href={info.href} 
                      className={`text-lg md:text-xl font-bold transition-colors ${info.href !== '#' ? 'hover:text-blue-400' : 'cursor-default'}`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-12 rounded-[40px] text-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-0"></div>
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What is this about?" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me more about your design needs..." 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-medium resize-none placeholder:text-slate-400"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message <Send size={22} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
