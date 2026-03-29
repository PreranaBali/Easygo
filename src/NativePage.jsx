import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FiMapPin, FiCalendar, FiShoppingCart } from 'react-icons/fi';
import { Flower2, Scissors, Droplets, Wrench, Paintbrush, Home, Zap, ShieldCheck } from 'lucide-react';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ==========================================
// 1. APP NAVIGATION (Sidebar & Topbar)
// ==========================================
// Reused to ensure the Native page feels like part of the cohesive app
const heroCategories = [
  { title: "InstaHelp", icon: Zap, path: '/service/instahelp' },
  { title: "Women's Salon & Spa", icon: Flower2, path: '/hub/womens_salon' },
  { title: "Men's Salon & Massage", icon: Scissors, path: '/hub/mens_salon' },
  { title: "Cleaning", icon: Droplets },
  { title: "AC & Appliance Repair", icon: Wrench },
  { title: "Native Water Purifier", icon: Droplets },
  { title: "Electrician, Plumber", icon: ShieldCheck },
  { title: "Painting & Makeover", icon: Paintbrush },
  { title: "Wall panels by Revamp", icon: Home }
];

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-[#181D1A] text-white z-50 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="p-6">
        <div className="bg-[#212723] rounded-xl flex items-center px-4 py-3 mb-8 cursor-pointer hover:bg-[#2A312C] transition-colors">
          <FiMapPin className="text-[#AA593E] mr-3" size={18} />
          <span className="text-sm font-medium text-white/90 truncate">3, Norris Rd - Richmond...</span>
        </div>
        <h3 className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase mb-4 px-2">Core Services</h3>
      </div>
      <div className="flex-1 px-4 pb-6 flex flex-col gap-1">
        {heroCategories.map((cat, idx) => (
          <div 
            key={idx} 
            onClick={() => cat.path && navigate(cat.path)}
            className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#212723] transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
              <cat.icon size={18} className="text-white/70 group-hover:text-white transition-colors group-hover:scale-110 duration-300" />
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{cat.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

const Topbar = () => (
  <nav className="fixed top-0 left-[280px] right-0 h-[88px] bg-[#F4EBE1]/90 backdrop-blur-md z-40 flex items-center justify-between px-10 border-b border-[#181D1A]/5">
    <div className="flex items-center gap-8">
      <div className="text-2xl font-serif text-[#181D1A] flex items-center gap-1 cursor-pointer">
        <span className="text-4xl italic">E</span>
        <span className="text-xl tracking-widest uppercase mt-2">G</span>
        <span className="text-lg ml-2 font-sans tracking-normal mt-1">EasyGo</span>
      </div>
      <div className="hidden lg:flex items-center gap-6 ml-6 text-sm font-medium text-[#181D1A]/70">
        <span className="hover:text-[#181D1A] cursor-pointer transition-colors">Revamp</span>
        <span className="hover:text-[#181D1A] cursor-pointer transition-colors text-[#181D1A] font-bold border-b border-[#181D1A] pb-0.5">Native</span>
        <span className="hover:text-[#181D1A] cursor-pointer transition-colors">Beauty</span>
        <span className="hover:text-[#181D1A] cursor-pointer transition-colors">About Us</span>
      </div>
    </div>
    <div className="flex items-center gap-4 lg:gap-6">
      <div className="hidden xl:flex bg-white px-5 py-2.5 rounded-full items-center gap-2 shadow-sm border border-gray-100">
        <FiMapPin className="text-[#AA593E]" size={16} />
        <span className="text-sm font-semibold text-[#181D1A]">15th Main Road, Bengaluru</span>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
        <button className="text-[#181D1A]/60 hover:text-[#181D1A] transition-colors"><FiCalendar size={20} /></button>
        <button className="text-[#181D1A]/60 hover:text-[#181D1A] transition-colors relative">
          <FiShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#AA593E] text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
        </button>
        <div className="w-[1px] h-6 bg-gray-200 mx-1"></div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold">P</div>
          <div className="hidden md:flex flex-col">
            <span className="text-xs font-bold text-[#181D1A] leading-none">Prerana</span>
            <span className="text-[9px] text-green-600 font-bold uppercase mt-0.5">Active</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. SHARED ANIMATIONS & COMPONENTS
// ==========================================
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

// UI UPGRADE: Integrated slider into the editorial aesthetic
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
      className="mt-20 mb-24 relative"
    >
      <div className="flex items-end justify-between mb-10 pl-2">
        <motion.div variants={fadeUp}>
          <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-[#181D1A] tracking-tight leading-tight">
            {title}
          </h2>
          <div className="h-[2px] w-12 bg-[#AA593E] mt-4 mb-2 rounded-full"></div>
        </motion.div>

        <motion.div variants={fadeUp} className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll('left')} 
            className={`w-12 h-12 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A] ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-30 pointer-events-none'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className={`w-12 h-12 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A] ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-30 pointer-events-none'}`}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="relative group/slider">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-8 hide-scrollbar snap-x snap-mandatory px-2"
        >
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
const NativePage = () => {
  // --- DATA ---
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
    <div className="bg-[#F4EBE1] min-h-screen font-sans text-[#181D1A] flex selection:bg-[#AA593E]/20 selection:text-[#AA593E] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      {/* 1. APP SIDEBAR */}
      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen relative">
        
        {/* Soft Background Orbs for Depth */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-80 z-0 mix-blend-overlay"></div>
        <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] bg-[#AA593E]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
        
        {/* 3. APP TOPBAR */}
        <Topbar />

        <main className="pt-32 pb-24 relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-12">
          
          <div className="flex items-center gap-3 mb-8 pl-2">
             <div className="text-[10px] font-black tracking-[0.2em] uppercase text-[#181D1A]/50 bg-white/50 px-3 py-1.5 rounded-md border border-[#181D1A]/5">EasyGo Native Collection</div>
          </div>

          {/* 1. NATIVE WATER PURIFIER HERO BANNER */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="w-full rounded-[3rem] overflow-hidden mb-6 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#181D1A]/5 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-700 relative bg-[#EAE3D9]"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773417291105-8b19dc.jpeg" 
              alt="Native Water Purifier" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
            />
          </motion.div>

          {/* 2. BEST-IN-CLASS FEATURES SLIDER */}
          <HorizontalSlider title="Best-in-class features">
            {waterFeaturesImages.map((imgSrc, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="snap-start flex-none w-[300px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[480px] lg:h-[500px] bg-[#EAE3D9] rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm border border-[#181D1A]/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <img 
                  src={imgSrc} 
                  alt={`Feature ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </HorizontalSlider>


          {/* 3. NATIVE LOCK PRO HERO BANNER */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="w-full rounded-[3rem] overflow-hidden mb-6 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#181D1A]/5 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-700 relative bg-[#181D1A]"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770915458514-b0f670.jpeg" 
              alt="Native Lock Pro" 
              className="w-full h-auto object-cover group-hover:scale-105 opacity-95 transition-transform duration-[1.5s] ease-out" 
            />
          </motion.div>

          {/* 4. ALL INTELLIGENT FEATURES SLIDER */}
          <HorizontalSlider title="All intelligent features">
            {lockFeaturesImages.map((imgSrc, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="snap-start flex-none w-[300px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[480px] lg:h-[500px] bg-white rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm border border-[#181D1A]/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <img 
                  src={imgSrc} 
                  alt={`Intelligent Feature ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </HorizontalSlider>


          {/* 5. NATIVE MANIFESTO BANNER */}
          <motion.div 
             initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
             className="w-full rounded-[3rem] overflow-hidden cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#181D1A]/5 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-700 relative mt-10 bg-[#EAE3D9]"
          >
            <motion.img 
              variants={imageReveal}
              src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1748612847256-8e2681.jpeg" 
              alt="Native Manifesto" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
            />
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default NativePage;