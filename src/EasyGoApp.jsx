import React, { useRef, useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

// --- REUSABLE SCROLL SECTION COMPONENT ---
const ScrollableSection = ({ title, subtitle, data }) => {
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
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-24 relative">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111]">
          {title}
        </h2>
        <div className="h-1 w-12 bg-black rounded-full mt-6 mb-4"></div>
        <p className="text-gray-500 font-medium text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
      
      <div className="relative group/slider">
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${
            canScrollLeft ? 'opacity-100 translate-x-0 cursor-pointer' : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}
        >
          <FiChevronLeft size={26} className="text-black" />
        </button>

        <div 
          ref={scrollRef} 
          onScroll={checkScroll} 
          className="flex overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          {data.map((item, idx) => (
            <div key={idx} className="snap-start flex-none" style={{ paddingRight: '40px' }}>
              <div className="relative w-[320px] h-[440px] md:w-[420px] md:h-[560px] rounded-[2rem] overflow-hidden cursor-pointer bg-gray-100 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 ring-1 ring-black/5">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 ease-out"></div>
                
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                  <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/50 flex items-center justify-center text-black shadow-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                    <BsArrowRight size={24} strokeWidth={0.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${
            canScrollRight ? 'opacity-100 translate-x-0 cursor-pointer' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <FiChevronRight size={26} className="text-black" />
        </button>
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
const PremiumEasyGoApp = () => {
  const exploreSpaces = [
    { title: "TV Wall", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1762703001006-ba1cc9.jpeg" },
    { title: "Living Room", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1762703024593-0b83e7.jpeg" },
    { title: "Bedroom", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1762703020736-a5675f.jpeg" },
    { title: "Entrance", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1762703009446-625171.jpeg" },
    { title: "Mandir", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1762703016991-9ad8ab.jpeg" }
  ];

  const beautifulWalls = [
    { title: "Upcoming Events", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759914653238-da76d9.jpeg" },
    { title: "Home Workspace", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759914980413-8762aa.jpeg" },
    { title: "Seepage-Proof", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759914641129-b19d89.jpeg" },
    { title: "Accent Designs", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759911537520-254096.jpeg" }
  ];

  return (
    <div className="bg-[#FAFAFA] text-[#111] font-sans">
      
      {/* FIXED GAP: Changed 'py-20' to 'pt-8 pb-20'. 
        The top padding is now much smaller, allowing the Navbar to sit nicely above it. 
      */}
      <main className="max-w-[1600px] mx-auto pt-8 pb-20 px-6 md:px-10">
        <ScrollableSection 
          title="Explore by space" 
          subtitle="Transform your home with our premium revamp services." 
          data={exploreSpaces} 
        />
        <ScrollableSection 
          title="Beautiful walls for all your needs" 
          subtitle="Curated designs to elevate your everyday living." 
          data={beautifulWalls} 
        />
      </main>

      {/* --- PREMIUM COMMERCIAL FOOTER --- */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 mt-12">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
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
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaFacebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
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

            {/* Links Column 2 */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">For Customers</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">EasyGo Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Categories Near You</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* App Download Column */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Get the EasyGo App</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Book premium services on the go. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                {/* Apple Store Button */}
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-xl px-5 py-3 w-full sm:w-auto">
                  <FaApple size={28} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold leading-none mb-1">Download on the</div>
                    <div className="text-sm font-bold text-white leading-none">App Store</div>
                  </div>
                </button>
                
                {/* Google Play Button */}
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

          {/* Bottom Copyright Bar */}
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

export default PremiumEasyGoApp;