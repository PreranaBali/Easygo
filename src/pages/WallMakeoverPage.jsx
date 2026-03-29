import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

const RevampDesignSections = () => {

  // --- DATA ---
  const exploreProducts = [
    {
      // Title kept for alt text, but removed from visual display
      title: "Wall panels",
      image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1764057222615-8300af.jpeg"
    },
    {
      title: "Consoles, cabinets & shelves",
      image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1767591941062-6fc350.jpeg"
    }
  ];

  const spotlightItems = [
    {
      title: "Fall 25'\ncollection",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop",
      badge: "New arrivals"
    },
    {
      title: "Discover\nlights",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Discover\nwoodwork",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* Expanded max-width to hold the massive new cards */}
      <main className="max-w-7xl mx-auto px-6 pt-10">

        {/* ========================================== */}
        {/* SECTION 1: Explore by product */}
        {/* ========================================== */}
        <section className="mb-20">
          <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-8">Explore by product</h2>
          
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6">
            {exploreProducts.map((item, idx) => (
              <div 
                key={idx} 
                // Massive dimensions applied here
                className="relative w-[350px] md:w-[450px] h-[500px] md:h-[600px] rounded-3xl overflow-hidden shrink-0 cursor-pointer group shadow-lg"
              >
                {/* Edge-to-edge Image only */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </section>


        {/* ========================================== */}
        {/* SECTION 2: In the spotlight */}
        {/* ========================================== */}
        <section className="relative">
          <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-8">In the spotlight</h2>
          
          {/* Right Arrow Navigation Overlay */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl items-center justify-center border border-slate-100 cursor-pointer hover:scale-105 transition-transform">
            <FiChevronRight size={28} className="text-slate-800" />
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x">
            {spotlightItems.map((item, idx) => (
              <div 
                key={idx} 
                // Massive dimensions for the spotlight section
                className="relative min-w-[400px] md:min-w-[500px] h-[600px] md:h-[700px] rounded-3xl overflow-hidden snap-start cursor-pointer group shadow-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.title.replace('\n', ' ')} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Kept the dark gradient since these Unsplash images don't have built-in text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

                {/* Scaled up "New Arrivals" Badge */}
                {item.badge && (
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[15px] font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-xl z-10">
                    {item.badge} <BsStars size={16} className="text-yellow-300" />
                  </div>
                )}

                {/* Scaled up Bottom Content: Title & Arrow */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <h3 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.1] whitespace-pre-line tracking-tight drop-shadow-xl">
                    {item.title}
                  </h3>
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0 shadow-xl group-hover:translate-x-2 transition-transform">
                    <FiChevronRight size={24} className="text-slate-900" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default RevampDesignSections;