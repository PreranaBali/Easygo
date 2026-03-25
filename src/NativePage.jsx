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
        <h2 className="text-[28px] md:text-3xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative group/slider">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-300 hover:scale-110 ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={28} className="text-black" />
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
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-300 hover:scale-110 ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={28} className="text-black" />
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
    <div className="bg-white min-h-screen font-sans text-gray-900 pb-0 flex flex-col">
      
      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-grow">
        {/* MODIFIED: Pulled back to max-w-[1400px] for the perfect middle ground */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-10 pb-20">
          
          {/* 1. NATIVE WATER PURIFIER HERO BANNER */}
          <div className="w-full rounded-xl overflow-hidden mb-16 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
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
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-gray-50 rounded-xl overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 ring-1 ring-black/5"
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
          <div className="w-full rounded-xl overflow-hidden mb-16 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
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
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-gray-50 rounded-2xl overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 ring-1 ring-black/5"
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
          <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            <img 
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1748612847256-8e2681.jpeg" 
              alt="Native Manifesto" 
              className="w-full h-auto object-cover md:h-[400px]" 
            />
          </div>

        </div>
      </main>

      {/* --- PREMIUM COMMERCIAL FOOTER --- */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 mt-auto w-full">
        {/* MODIFIED: Footer also pulled back to max-w-[1400px] to align perfectly */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-4 lg:pr-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white text-black font-extrabold text-sm px-2.5 py-1.5 rounded-md leading-none tracking-tight">
                  EG
                </div>
                <div className="text-2xl font-bold leading-none tracking-tight flex flex-col justify-center">
                  <span>Easy</span>
                  <span className="font-normal text-[22px]">Go</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-loose mb-8">
                The premier platform for home services and space revamps. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"><FaTwitter size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"><FaInstagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"><FaFacebook size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"><FaLinkedin size={16} /></a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Anti-Discrimination</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">For Customers</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">EasyGo Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Categories Near You</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Get the EasyGo App</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Book premium services on the go. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-xl px-5 py-3 w-full sm:w-auto">
                  <FaApple size={28} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold leading-none mb-1">Download on the</div>
                    <div className="text-sm font-bold text-white leading-none">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-xl px-5 py-3 w-full sm:w-auto">
                  <FaGooglePlay size={24} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold leading-none mb-1">GET IT ON</div>
                    <div className="text-sm font-bold text-white leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium">
              © {new Date().getFullYear()} EasyGo Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-gray-500 text-xs font-medium">India</span>
              <span className="text-gray-500 text-xs font-medium">USA</span>
              <span className="text-gray-500 text-xs font-medium">UAE</span>
              <span className="text-gray-500 text-xs font-medium">Singapore</span>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default NativePage;