import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft, FiMapPin, FiCalendar, FiShoppingCart } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { 
  FaTwitter, FaFacebook, FaInstagram, FaLinkedin 
} from 'react-icons/fa';
import { 
  Flower2, Scissors, Droplets, Wrench, 
  Paintbrush, Home, Zap, ShieldCheck 
} from 'lucide-react';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ==========================================
// 1. DATA (Untouched)
// ==========================================
const heroCategories = [
  { title: "InstaHelp", icon: Zap, time: "14 mins", path: '/service/instahelp' },
  { title: "Women's Salon & Spa", icon: Flower2, path: '/hub/womens_salon' },
  { title: "Men's Salon & Massage", icon: Scissors, path: '/hub/mens_salon' },
  { title: "Cleaning", icon: Droplets },
  { title: "AC & Appliance Repair", icon: Wrench, time: "44 mins" },
  { title: "Native Water Purifier", icon: Droplets },
  { title: "Electrician, Plumber", icon: ShieldCheck, time: "29 mins" },
  { title: "Painting & Makeover", icon: Paintbrush },
  { title: "Wall panels by Revamp", icon: Home }
];

const spotlightData = [
  { 
    title: "Full home makeover, without a hassle", 
    badge: "Newly launched", 
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    bg: "bg-[#EAE3D9]", text: "text-[#181D1A]"
  },
  { 
    title: "Big transformations, zero stress.", 
    badge: "Get flat 5% off", 
    img: "https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?auto=format&fit=crop&w=600&q=80",
    bg: "bg-[#2A312C]", text: "text-[#F4EBE1]"
  },
  { 
    title: "Bathroom deep cleaning starting at ₹449", 
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    bg: "bg-[#AA593E]", text: "text-[#F4EBE1]"
  }
];

const mostBookedData = [
  { title: "Insta Help", rating: "4.69", price: "₹99", time: "Instant", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" },
  { title: "Intense cleaning (2 bathrooms)", rating: "4.80", price: "₹798", original: "₹998", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { title: "Roll-on waxing (Full arms, legs)", rating: "4.87", price: "₹1,099", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" },
  { title: "Plumber consultation", rating: "4.73", price: "₹49", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80" },
  { title: "Crystal rose pedicure", rating: "4.83", price: "₹859", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=400&q=80" }
];

// ==========================================
// 2. APP NAVIGATION (Sidebar & Topbar)
// ==========================================
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
        <span className="hover:text-[#181D1A] cursor-pointer transition-colors">Native</span>
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
// 3. PAGE COMPONENTS
// ==========================================

// --- NEW COMPONENT: Top Hero Banner (Matching the Image) ---
const TopHeroBanner = () => {
  // SVG pattern to match the subtle wavy lines on the rust background
  const wavePattern = `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 15 20 30 10 T 60 10' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`;

  return (
    <section className="w-full mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="flex flex-col lg:flex-row w-full min-h-[480px]">
        
        {/* Left Side: Rust Text Area */}
        <div className="flex-1 bg-[#B3644B] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle wavy pattern overlay */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ backgroundImage: wavePattern, backgroundSize: '60px 20px' }}
          ></div>
          
          <div className="relative z-10 max-w-xl">
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-serif leading-[1.05] text-[#FDFBF7] mb-6 tracking-tight">
              Integrated Design +<br />Wellness Spaces
            </h1>
            <p className="font-sans text-[#FDFBF7]/90 text-sm md:text-base mb-10 leading-relaxed max-w-md">
              The premier platform for home services and space revamps. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
            </p>
            <button className="bg-[#FDFBF7] text-[#B3644B] font-bold text-[11px] md:text-xs uppercase tracking-[0.15em] px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-fit">
              Book Your Experience
            </button>
          </div>
        </div>

        {/* Right Side: Image Area with Dark Green Padding */}
        <div className="flex-1 bg-[#2C3E35] p-0 md:py-8 lg:py-12 flex items-center justify-center relative min-h-[350px]">
           {/* Image Container */}
           <div className="w-full h-full md:w-[90%] md:h-full relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Living Space" 
                className="absolute inset-0 w-full h-full object-cover"
              />
           </div>
        </div>

      </div>
      
      {/* Bottom Wave Border Detail */}
      <div className="w-full h-8 bg-[#F4EBE1]" style={{ backgroundImage: wavePattern, backgroundSize: '60px 20px', filter: 'invert(1) opacity(0.05)' }}></div>
    </section>
  );
};


const EditorialCarousel = ({ title, data, type = "standard" }) => {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 border-t border-[#181D1A]/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-[40px] font-serif text-[#181D1A] leading-tight tracking-tight">{title}</h2>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A]"><FiChevronLeft size={20} /></button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A]"><FiChevronRight size={20} /></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 hide-scrollbar snap-x pb-8">
          {data.map((item, idx) => {
            
            // SPOTLIGHT CARDS
            if (type === "spotlight") {
              return (
                <div key={idx} className={`min-w-[340px] md:min-w-[500px] h-[300px] rounded-[2.5rem] p-8 md:p-10 flex relative overflow-hidden snap-start cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-[#181D1A]/5 ${item.bg} ${item.text}`}>
                  <div className="w-[55%] pr-6 z-10 flex flex-col justify-center">
                    {item.badge && <span className="inline-block px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 w-fit border border-white/10 shadow-sm">{item.badge}</span>}
                    <h3 className="text-2xl md:text-[26px] font-serif mb-8 leading-[1.15] tracking-tight">{item.title}</h3>
                    <button className="w-fit px-8 py-3 bg-white text-[#181D1A] text-xs font-bold uppercase tracking-wider rounded-full shadow-md group-hover:-translate-y-1 transition-transform duration-300">Explore</button>
                  </div>
                  <div className="absolute right-4 top-4 bottom-4 w-[45%] rounded-[1.5rem] overflow-hidden shadow-inner bg-[#F4EBE1]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                </div>
              );
            }

            // STANDARD SERVICE CARDS
            return (
              <div key={idx} className="min-w-[240px] md:min-w-[280px] snap-start cursor-pointer group flex flex-col">
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-5 relative bg-[#EAE3D9] shadow-sm group-hover:shadow-lg transition-all duration-500 border border-[#181D1A]/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-xl text-[#181D1A] mb-3 leading-snug group-hover:text-[#AA593E] transition-colors line-clamp-1">{item.title}</h3>
                  <div className="flex items-center gap-3 font-sans text-sm">
                    {item.rating && (
                      <div className="flex items-center gap-1.5 text-[#2A312C] font-semibold bg-white px-2 py-0.5 rounded-md border border-[#181D1A]/5">
                        <BsStarFill size={12} className="text-[#AA593E]" /> {item.rating}
                      </div>
                    )}
                    {item.price && (
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#181D1A] text-base">{item.price}</span>
                        {item.original && <span className="text-[#181D1A]/40 line-through text-xs font-medium">{item.original}</span>}
                      </div>
                    )}
                    {item.time && <span className="text-[#181D1A]/60 text-xs font-bold px-2 py-1 bg-white rounded-md border border-[#181D1A]/5">{item.time}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const EditorialBanner = ({ title, subtitle, img, btnText, dark }) => (
  <section className="py-12 md:py-20">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
      <div className={`relative w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#181D1A]/5 ${dark ? 'bg-[#181D1A] text-[#F4EBE1]' : 'bg-[#EAE3D9] text-[#181D1A]'}`}>
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center z-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-6 opacity-60">EasyGo Native</p>
          <h2 className="text-4xl md:text-[52px] font-serif mb-6 leading-[1.1] tracking-tight">{title}</h2>
          <p className="font-sans text-base opacity-80 mb-10 max-w-md leading-relaxed">{subtitle}</p>
          <button className={`w-fit px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-1 ${dark ? 'bg-[#F4EBE1] text-[#181D1A] hover:bg-white' : 'bg-[#181D1A] text-[#F4EBE1] hover:bg-[#2A312C]'}`}>
            {btnText}
          </button>
        </div>
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <img src={img} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

// ==========================================
// 4. MAIN HOMEPAGE COMPONENT
// ==========================================
const EasyGoHome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F4EBE1] min-h-screen font-sans flex selection:bg-[#AA593E]/20 selection:text-[#AA593E]">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      {/* 1. APP SIDEBAR */}
      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen overflow-x-hidden">
        
        {/* 3. APP TOPBAR */}
        <Topbar />

        <main className="pt-[88px] pb-20">
          
          {/* --- NEW HERO BANNER (From Attached Image) --- */}
          <TopHeroBanner />

          {/* --- SERVICES GRID SECTION --- */}
          <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 flex flex-col xl:flex-row gap-12 xl:gap-20 items-center mt-8">
            
            {/* Left: Services Grid */}
            <div className="flex-1 w-full">
              <h1 className="text-[40px] md:text-[52px] font-serif text-[#181D1A] mb-10 leading-[1.1] tracking-tight">What are you looking for?</h1>
              <div className="grid grid-cols-3 gap-y-8 gap-x-4 md:gap-x-6">
                {heroCategories.map((cat, idx) => (
                  <div key={idx} onClick={() => cat.path && navigate(cat.path)} className="flex flex-col items-center justify-start text-center group cursor-pointer">
                    <div className="w-[84px] h-[84px] bg-white rounded-[1.75rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#181D1A]/5 flex flex-col items-center justify-center mb-3 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative">
                      <cat.icon size={26} strokeWidth={1.5} className="text-[#181D1A] group-hover:text-[#AA593E] transition-colors" />
                      {cat.time && (
                        <span className="absolute -bottom-2 bg-[#EAE3D9] text-[#AA593E] text-[9px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-[#AA593E]/10 shadow-sm">
                          {cat.time}
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] md:text-[13px] font-semibold text-[#181D1A]/80 leading-snug px-1 group-hover:text-[#AA593E] transition-colors">
                      {cat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Editorial Collage */}
            <div className="flex-1 w-full relative h-[450px] md:h-[550px] hidden xl:block">
              <div className="absolute top-0 right-0 w-[60%] h-[55%] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-[#F4EBE1] z-20 hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Massage" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-8 left-0 w-[50%] h-[50%] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-[#F4EBE1] z-30 hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Cleaning" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-8 w-[40%] h-[40%] rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#F4EBE1] z-10 hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" alt="Salon" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-20 left-10 w-40 h-40 bg-[#AA593E]/15 rounded-full filter blur-[50px] z-0"></div>
            </div>
          </section>

          {/* --- TRUST BANNER --- */}
          <section className="max-w-[1000px] mx-auto px-6 lg:px-10 mb-20">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#181D1A]/5 flex flex-col md:flex-row justify-evenly items-center gap-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#EAE3D9]/30 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-5 w-full md:w-auto justify-center">
                <div className="w-14 h-14 bg-[#F4EBE1] rounded-2xl flex items-center justify-center border border-[#181D1A]/5">
                  <BsStarFill size={24} className="text-[#AA593E]" />
                </div>
                <div>
                  <h3 className="text-3xl leading-none font-serif text-[#181D1A] mb-1">4.8</h3>
                  <p className="text-xs font-bold text-[#181D1A]/50 uppercase tracking-widest">Service Rating*</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#181D1A]/10"></div>
              
              <div className="flex items-center gap-5 w-full md:w-auto justify-center">
                <div className="w-14 h-14 bg-[#181D1A] rounded-2xl flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-[#F4EBE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl leading-none font-serif text-[#181D1A] mb-1">12M+</h3>
                  <p className="text-xs font-bold text-[#181D1A]/50 uppercase tracking-widest">Customers Globally*</p>
                </div>
              </div>
            </div>
          </section>

          {/* --- DYNAMIC CAROUSELS & BANNERS --- */}
          <EditorialCarousel title="In the spotlight" data={spotlightData} type="spotlight" />
          <EditorialCarousel title="Most booked services" data={mostBookedData} type="standard" />

          <EditorialBanner 
            title="Smart Locks." 
            subtitle="Camera. Doorbell. All-in one. Engineered for security and aesthetic perfection."
            img="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80"
            btnText="Discover Native"
            dark={true}
          />

          <EditorialCarousel title="Salon for Women" data={mostBookedData.slice(1, 5).reverse()} type="standard" />

          <EditorialBanner 
            title="Level up your walls." 
            subtitle="Bespoke wall panels and architectural textures designed to breathe life into your space."
            img="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80"
            btnText="Explore Revamp"
            dark={false}
          />

        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-white text-[#181D1A] pt-20 pb-12 mt-10 rounded-t-[3rem] border-t border-[#181D1A]/5">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
             <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#181D1A]/10 pb-12 mb-8 gap-8">
               <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                 <div className="text-3xl font-serif flex items-center gap-1">
                   <span className="text-4xl italic">E</span>
                   <span className="text-xl tracking-widest uppercase mt-1.5">asygo</span>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-[#F4EBE1] flex items-center justify-center hover:bg-[#AA593E] hover:text-white transition-colors cursor-pointer"><FaTwitter size={18} /></div>
                 <div className="w-10 h-10 rounded-full bg-[#F4EBE1] flex items-center justify-center hover:bg-[#AA593E] hover:text-white transition-colors cursor-pointer"><FaInstagram size={18} /></div>
                 <div className="w-10 h-10 rounded-full bg-[#F4EBE1] flex items-center justify-center hover:bg-[#AA593E] hover:text-white transition-colors cursor-pointer"><FaLinkedin size={18} /></div>
               </div>
             </div>
             <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-[#181D1A]/40 gap-4">
               <p>© 2026 EasyGo Technologies</p>
               <p className="cursor-pointer hover:text-[#AA593E] transition-colors">Privacy Policy &nbsp;·&nbsp; Terms of Service</p>
             </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default EasyGoHome;