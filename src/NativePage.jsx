import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

// --- UPGRADED HORIZONTAL SLIDER (WITH DYNAMIC ARROWS) ---
const HorizontalSlider = ({ title, children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-16 mb-16">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#2A4334] tracking-tight">
          {title}
        </h2>
        {/* Added Terracotta Accent Line for Premium Feel */}
        <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
      </div>

      <div className="relative group/slider">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#F6F4EE] shadow-md border border-[#2A4334]/10 transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={28} className="text-[#2A4334]" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory"
        >
          {children}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#F6F4EE] shadow-md border border-[#2A4334]/10 transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={28} className="text-[#2A4334]" />
        </button>
      </div>
    </section>
  );
};

const NativePage = () => {
  // --- MOCK DATA (Images only, text is baked in) ---
  const waterFeaturesImages = [
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582565075-6c8698.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582588281-4d6e51.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582583117-f3fe55.jpeg" ,
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582579114-967873.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582575130-a10178.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582569314-1e8653.jpeg" 
  ];

  const lockFeaturesImages = [
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729585400527-2811fe.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583343127-a159ca.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583339154-821ff9.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583334981-f0c81c.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583330394-1ebbf7.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583326489-57e778.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583322295-78684a.jpeg" 
  ];

  return (
    // Applied Earthy Background and Typography selection
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pb-0 flex flex-col selection:bg-[#AA593E] selection:text-white">
      
      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-grow">
        {/* MODIFIED: Pulled back to max-w-[1400px] for the perfect middle ground */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-10 pb-20">
          
          {/* 1. NATIVE WATER PURIFIER HERO BANNER */}
          <div className="w-full rounded-2xl overflow-hidden mb-16 cursor-pointer group shadow-sm border border-[#2A4334]/5 hover:shadow-md transition-shadow">
            <img 
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773417291105-8b19dc.jpeg" 
              alt="Native Water Purifier" 
              className="w-full h-auto object-cover md:h-[400px] lg:h-[450px]" 
            />
          </div>

          {/* 2. BEST-IN-CLASS FEATURES SLIDER */}
          <HorizontalSlider title="Best-in-class features">
            {waterFeaturesImages.map((imgSrc, idx) => (
              <div 
                key={idx} 
                // MODIFIED: Slightly narrowed to w-[420px] so 3 fit perfectly in a 1400px container
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-white rounded-[24px] overflow-hidden cursor-pointer group shadow-sm border border-[#2A4334]/10 hover:shadow-lg hover:border-[#AA593E]/30 transition-all duration-300"
              >
                <img 
                  src={imgSrc} 
                  alt="Feature" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            ))}
          </HorizontalSlider>

          <div className="h-10"></div> {/* Spacing */}

          {/* 3. NATIVE LOCK PRO HERO BANNER */}
          <div className="w-full rounded-2xl overflow-hidden mb-16 cursor-pointer group shadow-sm border border-[#2A4334]/5 hover:shadow-md transition-shadow">
            <img 
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770915458514-b0f670.jpeg" 
              alt="Native Lock Pro" 
              className="w-full h-auto object-cover md:h-[400px] lg:h-[450px]" 
            />
          </div>

          {/* 4. ALL INTELLIGENT FEATURES SLIDER */}
          <HorizontalSlider title="All intelligent features">
            {lockFeaturesImages.map((imgSrc, idx) => (
              <div 
                key={idx} 
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-white rounded-[24px] overflow-hidden cursor-pointer group shadow-sm border border-[#2A4334]/10 hover:shadow-lg hover:border-[#AA593E]/30 transition-all duration-300"
              >
                <img 
                  src={imgSrc} 
                  alt="Intelligent Feature" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            ))}
          </HorizontalSlider>

          <div className="h-10"></div> {/* Spacing */}

          {/* 5. NATIVE MANIFESTO BANNER */}
          <div className="w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-[#2A4334]/5 hover:shadow-md transition-shadow">
            <img 
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1748612847256-8e2681.jpeg" 
              alt="Native Manifesto" 
              className="w-full h-auto object-cover md:h-[400px]" 
            />
          </div>

        </div>
      </main>



      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default NativePage;