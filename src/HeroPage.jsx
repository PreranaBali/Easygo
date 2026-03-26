import React, { useRef, useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { 
  FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay 
} from 'react-icons/fa';
import { 
  Sparkles, Flower2, Scissors, Droplets, Wrench, 
  Paintbrush, Home, Zap, ShieldCheck 
} from 'lucide-react'; // Using lucide-react for elegant minimal icons

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- DATA FROM VIDEO (Mapped to Unsplash for premium look) ---
const heroCategories = [
  { title: "InstaHelp", icon: Zap, time: "14 mins" },
  { title: "Women's Salon & Spa", icon: Flower2 },
  { title: "Men's Salon & Massage", icon: Scissors },
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
    bg: "bg-[#E8DCC8]", text: "text-[#1F2922]"
  },
  { 
    title: "Big transformations, zero stress.", 
    badge: "Get flat 5% off", 
    img: "https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?auto=format&fit=crop&w=600&q=80",
    bg: "bg-[#25392D]", text: "text-[#F5F2EA]"
  },
  { 
    title: "Bathroom deep cleaning starting at ₹449", 
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    bg: "bg-[#9A5B40]", text: "text-[#F5F2EA]"
  }
];

const mostBookedData = [
  { title: "Insta Help", rating: "4.69", price: "₹99", time: "Instant", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" },
  { title: "Intense cleaning (2 bathrooms)", rating: "4.80", price: "₹798", original: "₹998", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { title: "Roll-on waxing (Full arms, legs)", rating: "4.87", price: "₹1,099", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" },
  { title: "Plumber consultation", rating: "4.73", price: "₹49", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80" },
  { title: "Crystal rose pedicure", rating: "4.83", price: "₹859", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=400&q=80" }
];

// --- REUSABLE EDITORIAL CAROUSEL ---
const EditorialCarousel = ({ title, data, type = "standard" }) => {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 border-t border-[#1F2922]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2922]">{title}</h2>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-[#1F2922]/20 flex items-center justify-center hover:bg-[#1F2922] hover:text-[#F5F2EA] transition-colors"><FiChevronLeft /></button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-[#1F2922]/20 flex items-center justify-center hover:bg-[#1F2922] hover:text-[#F5F2EA] transition-colors"><FiChevronRight /></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 hide-scrollbar snap-x pb-8">
          {data.map((item, idx) => {
            
            // SPOTLIGHT CARDS (Wide, text + image)
            if (type === "spotlight") {
              return (
                <div key={idx} className={`min-w-[320px] md:min-w-[480px] h-[280px] rounded-[2rem] p-8 flex justify-between relative overflow-hidden snap-start cursor-pointer group ${item.bg} ${item.text}`}>
                  <div className="flex-1 pr-4 z-10 flex flex-col justify-center">
                    {item.badge && <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 w-fit border border-white/10">{item.badge}</span>}
                    <h3 className="text-2xl font-serif mb-6 leading-tight">{item.title}</h3>
                    <button className="w-fit px-6 py-2 bg-white text-[#1F2922] text-sm font-bold rounded-full shadow-lg group-hover:scale-105 transition-transform">Explore</button>
                  </div>
                  <div className="w-[45%] h-full absolute right-0 top-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 z-10"></div>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              );
            }

            // STANDARD SERVICE CARDS (Image top, text bottom)
            return (
              <div key={idx} className="min-w-[240px] md:min-w-[280px] snap-start cursor-pointer group flex flex-col">
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-5 relative bg-[#E8DCC8]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <h3 className="font-serif text-lg text-[#1F2922] mb-2 leading-snug group-hover:text-[#9A5B40] transition-colors">{item.title}</h3>
                <div className="flex items-center gap-3 font-sans text-sm">
                  {item.rating && (
                    <div className="flex items-center gap-1 text-[#25392D] font-semibold">
                      <BsStarFill size={12} className="text-[#9A5B40]" /> {item.rating}
                    </div>
                  )}
                  {item.price && (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1F2922]">{item.price}</span>
                      {item.original && <span className="text-[#1F2922]/40 line-through text-xs">{item.original}</span>}
                    </div>
                  )}
                  {item.time && <span className="text-[#1F2922]/50 text-xs px-2 py-0.5 bg-[#1F2922]/5 rounded-sm">{item.time}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- EDITORIAL BANNER (Replaces the Native Smart Locks / RO banner) ---
const EditorialBanner = ({ title, subtitle, img, btnText, dark }) => (
  <section className="py-8 md:py-16">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className={`relative w-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[400px] ${dark ? 'bg-[#1F2922] text-[#F5F2EA]' : 'bg-[#E8DCC8] text-[#1F2922]'}`}>
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center z-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-70">EasyGo Native</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">{title}</h2>
          <p className="font-sans text-lg opacity-80 mb-8 max-w-md">{subtitle}</p>
          <button className={`w-fit px-8 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 ${dark ? 'bg-[#F5F2EA] text-[#1F2922]' : 'bg-[#1F2922] text-[#F5F2EA]'}`}>
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

// --- MAIN HOMEPAGE COMPONENT ---
const EasyGoHome = () => {
  return (
    <div className="bg-[#F5F2EA] min-h-screen font-sans selection:bg-[#9A5B40] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Services Grid */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1F2922] mb-8">What are you looking for?</h1>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {heroCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-start text-center group cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border border-[#1F2922]/5 flex flex-col items-center justify-center mb-3 group-hover:border-[#9A5B40]/40 group-hover:shadow-md transition-all relative">
                    <cat.icon size={28} strokeWidth={1.5} className="text-[#1F2922] group-hover:text-[#9A5B40] transition-colors" />
                    {cat.time && (
                      <span className="absolute -bottom-2 bg-[#E8DCC8] text-[#9A5B40] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#9A5B40]/10">
                        {cat.time}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] md:text-xs font-medium text-[#1F2922]/80 leading-tight px-1">
                    {cat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Editorial Collage */}
          <div className="flex-1 w-full relative h-[400px] md:h-[550px] hidden md:block">
            {/* Large Main Image */}
            <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#F5F2EA] z-20">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Massage" className="w-full h-full object-cover" />
            </div>
            {/* Bottom Left Image */}
            <div className="absolute bottom-4 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#F5F2EA] z-30">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Cleaning" className="w-full h-full object-cover" />
            </div>
            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-4 w-[45%] h-[40%] rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#F5F2EA] z-10">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" alt="Salon" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Blob */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-[#9A5B40]/10 rounded-full filter blur-3xl z-0"></div>
          </div>
        </section>

        {/* --- TRUST BANNER --- */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-[#1F2922]/5 flex flex-col md:flex-row justify-around items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1F2922]/10">
            <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start pt-4 md:pt-0">
              <div className="w-14 h-14 bg-[#E8DCC8] rounded-full flex items-center justify-center">
                <BsStarFill size={24} className="text-[#9A5B40]" />
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#1F2922]">4.8</h3>
                <p className="text-sm font-sans text-[#1F2922]/60">Service Rating*</p>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start pt-6 md:pt-0 pl-0 md:pl-12">
              <div className="w-14 h-14 bg-[#25392D] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#F5F2EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#1F2922]">12M+</h3>
                <p className="text-sm font-sans text-[#1F2922]/60">Customers Globally*</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC CAROUSELS --- */}
        <EditorialCarousel title="In the spotlight" data={spotlightData} type="spotlight" />
        <EditorialCarousel title="Most booked services" data={mostBookedData} type="standard" />

        {/* --- BANNER --- */}
        <EditorialBanner 
          title="Smart Locks." 
          subtitle="Camera. Doorbell. All-in one. Engineered for security and aesthetic perfection."
          img="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80"
          btnText="Discover Native"
          dark={true}
        />

        <EditorialCarousel title="Salon for Women" data={mostBookedData.slice(1, 5).reverse()} type="standard" />

        {/* --- BANNER 2 --- */}
        <EditorialBanner 
          title="Level up your walls." 
          subtitle="Bespoke wall panels and architectural textures designed to breathe life into your space."
          img="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80"
          btnText="Explore Revamp"
          dark={false}
        />

      </main>

      {/* --- FOOTER (From previous iterations) --- */}
      <footer className="bg-[#1F2922] text-[#F5F2EA] pt-20 pb-10 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#F5F2EA]/10 pb-12 mb-8 gap-8">
             <div className="flex items-center gap-3">
               <div className="bg-[#9A5B40] text-[#F5F2EA] font-sans font-bold text-sm px-2.5 py-1.5 rounded-md">EG</div>
               <h2 className="text-3xl font-serif">EasyGo</h2>
             </div>
             <div className="flex gap-4">
               <FaTwitter size={20} className="hover:text-[#9A5B40] cursor-pointer" />
               <FaInstagram size={20} className="hover:text-[#9A5B40] cursor-pointer" />
               <FaLinkedin size={20} className="hover:text-[#9A5B40] cursor-pointer" />
             </div>
           </div>
           <div className="flex justify-between items-center text-sm opacity-60">
             <p>© 2026 EasyGo Technologies</p>
             <p>Privacy · Terms</p>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default EasyGoHome;