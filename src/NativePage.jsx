import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Shared Animation Variants ---
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
  show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: customEase } }
};

// --- UPGRADED HORIZONTAL SLIDER (WITH FRAMER MOTION) ---
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
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="mt-20 mb-20"
    >
      {/* Section Header */}
      <motion.div variants={fadeUp} className="mb-10 pl-2">
        <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#2A4334] tracking-tight leading-tight">
          {title}
        </h2>
        {/* Added Terracotta Accent Line for Premium Feel */}
        <div className="h-[2px] w-16 bg-[#AA593E] mt-4 mb-2 rounded-full opacity-70"></div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative group/slider">
        {/* Left Arrow */}
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-16 h-16 items-center justify-center rounded-full bg-[#F9F8F6]/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#2A4334]/10 transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={32} className="text-[#2A4334]" />
        </motion.button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-8 hide-scrollbar snap-x snap-mandatory px-2"
        >
          {children}
        </div>

        {/* Right Arrow */}
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-16 h-16 items-center justify-center rounded-full bg-[#F9F8F6]/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#2A4334]/10 transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={32} className="text-[#2A4334]" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const NativePage = () => {
  // --- MOCK DATA ---
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
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pb-0 flex flex-col selection:bg-[#AA593E]/20 selection:text-[#AA593E] relative overflow-hidden">
      
      {/* Absolute Background Orbs for Depth */}
      <div className="absolute top-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-80 z-0 mix-blend-overlay"></div>
      <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-[#AA593E]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#2A4334]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-grow relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 pt-16 pb-24">
          
          {/* 1. NATIVE WATER PURIFIER HERO BANNER */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-8 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border-4 border-white hover:shadow-[0_12px_50px_rgb(0,0,0,0.1)] transition-all duration-500 relative"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773417291105-8b19dc.jpeg" 
              alt="Native Water Purifier" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          </motion.div>

          {/* 2. BEST-IN-CLASS FEATURES SLIDER */}
          <HorizontalSlider title="Best-in-class features">
            {waterFeaturesImages.map((imgSrc, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-[#E8DCCB] rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm border-2 border-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <img 
                  src={imgSrc} 
                  alt={`Feature ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </HorizontalSlider>

          <div className="h-10 md:h-16"></div> {/* Extra Spacing */}

          {/* 3. NATIVE LOCK PRO HERO BANNER */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-8 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border-4 border-white hover:shadow-[0_12px_50px_rgb(0,0,0,0.1)] transition-all duration-500 relative"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770915458514-b0f670.jpeg" 
              alt="Native Lock Pro" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          </motion.div>

          {/* 4. ALL INTELLIGENT FEATURES SLIDER */}
          <HorizontalSlider title="All intelligent features">
            {lockFeaturesImages.map((imgSrc, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="snap-start flex-none w-[320px] md:w-[400px] lg:w-[420px] h-[420px] md:h-[500px] lg:h-[520px] bg-white rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm border-2 border-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <img 
                  src={imgSrc} 
                  alt={`Intelligent Feature ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </HorizontalSlider>

          <div className="h-10 md:h-16"></div> {/* Extra Spacing */}

          {/* 5. NATIVE MANIFESTO BANNER */}
          <motion.div 
             initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
             className="w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border-4 border-white hover:shadow-[0_12px_50px_rgb(0,0,0,0.1)] transition-all duration-500 relative mb-10"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1748612847256-8e2681.jpeg" 
              alt="Native Manifesto" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          </motion.div>

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