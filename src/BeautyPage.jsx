import React, { useRef, useState, useEffect } from 'react';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FiMapPin, FiCalendar, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

// Import your data
import { hubPagesData } from './data/data';

// ==========================================
// 1. SHARED UI COMPONENTS (Layout)
// ==========================================
// Note: In a real app, Sidebar and Topbar would ideally live in a <Layout /> component,
// but they are included here so this file works perfectly as a standalone copy-paste.

const mainCategories = [
  { id: 'instahelp', title: 'InstaHelp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1771308635267-27aaf0.jpeg', path: '/service/instahelp' },
  { id: 'womens_salon', title: "Women's Salon & Spa", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526047861-554660.jpeg', path: '/hub/womens_salon' },
  { id: 'mens_salon', title: "Men's Salon & Massage", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', path: '/hub/mens_salon' },
  { id: 'cleaning_pest_control', title: 'Cleaning & Pest Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699869110346-61ab83.jpeg' },  
  { id: 'ac_appliance', title: 'AC & Appliance Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544313670-e3f84b.jpeg' },
  { id: 'water_purifier', title: 'Native Water Purifier', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057787930-167720.jpeg' },
  { id: 'home_repairs', title: 'Electrician, Plumber & Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526974386-784d50.jpeg' },
  { id: 'painting', title: 'Painting & Waterproofing', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg' },
  { id: 'wall_panels', title: 'Wall panels by revamp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1724138391296-c1780b.jpeg' },
];

const Sidebar = ({ activeId }) => {
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
        {mainCategories.map((cat, idx) => {
          const isActive = activeId === cat.id;
          return (
            <div 
              key={idx} 
              onClick={() => cat.path && navigate(cat.path)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all group ${isActive ? 'bg-[#2A312C] shadow-inner' : 'hover:bg-[#212723]'}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                <img src={cat.icon} alt={cat.title} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <span className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{cat.title}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

const Topbar = () => (
  <nav className="fixed top-0 left-[280px] right-0 h-[88px] bg-[#F4EBE1]/90 backdrop-blur-md z-40 flex items-center justify-between px-10 border-b border-[#2A4334]/5">
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
      <div className="hidden md:flex bg-white px-5 py-2.5 rounded-full items-center gap-2 shadow-sm border border-gray-100">
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
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#181D1A] leading-none">Prerana</span>
            <span className="text-[9px] text-green-600 font-bold uppercase mt-0.5">Active</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. HORIZONTAL SLIDER (Upgraded Aesthetics)
// ==========================================

const HorizontalSlider = ({ title, subtitle, actionText, children }) => {
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
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-16 mb-12 relative">
      <div className="flex items-end justify-between mb-8">
        <div>
          {/* UPDATED: Typography to match editorial theme */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#181D1A] tracking-tight">{title}</h2>
          {subtitle && <p className="text-[#181D1A]/60 text-[15px] mt-2 font-medium">{subtitle}</p>}
        </div>
        {actionText && (
          <button className="text-sm font-semibold text-[#AA593E] hover:text-[#8a4731] transition-colors border-b border-transparent hover:border-[#AA593E] pb-0.5">
            {actionText}
          </button>
        )}
      </div>

      <div className="relative group/slider">
        {/* UPDATED: Slider Buttons styling */}
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-[40%] -translate-y-1/2 -left-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 text-[#181D1A] ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <div ref={scrollRef} onScroll={checkScroll} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory">
          {children}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-[40%] -translate-y-1/2 -right-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 text-[#181D1A] ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

// ==========================================
// 3. MAIN PAGE
// ==========================================

const DynamicHubPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const dataKey = categoryId || 'womens_salon';
  const pageData = hubPagesData[dataKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#F4EBE1] flex items-center justify-center text-3xl font-serif text-[#181D1A]">
        Hub not found.
      </div>
    );
  }

  return (
    <div className="bg-[#F4EBE1] min-h-screen font-sans flex relative selection:bg-[#AA593E]/20">
      
      {/* LEFT SIDEBAR */}
      <Sidebar activeId={dataKey} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen overflow-x-hidden">
        <Topbar />
        
        <main className="flex-1 pt-32 px-10 pb-20 max-w-[1400px]">
          
          {/* 1. HERO SECTION (Redesigned) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            <div className="lg:col-span-5 pr-4">
              <h1 className="text-[48px] md:text-[64px] leading-[1.05] font-serif text-[#181D1A] mb-12 tracking-tight">
                {pageData.title}
              </h1>

              {/* Redesigned "What are you looking for" - Removed boxy borders, made it elegant */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#181D1A] mb-8 font-serif">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                  {pageData.heroServices.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-[88px] h-[88px] bg-white/50 backdrop-blur-sm rounded-[1.25rem] flex items-center justify-center relative mb-4 group-hover:bg-white shadow-sm group-hover:shadow-[0_8px_20px_-4px_rgba(170,89,62,0.15)] transition-all duration-300">
                        {service.tag && (
                          <span className="absolute -top-2.5 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider bg-[#AA593E] rounded-md z-10 shadow-md">
                            {service.tag}
                          </span>
                        )}
                        <img src={service.img} alt={service.title} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-[13px] font-semibold text-center text-[#181D1A]/80 leading-snug px-1 group-hover:text-[#AA593E] transition-colors">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats - Cleaned up typography */}
              <div className="flex items-center gap-14 border-t border-[#181D1A]/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAE3D9] flex items-center justify-center">
                    <Star size={20} className="text-[#AA593E] fill-[#AA593E]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none mb-1.5 text-[#181D1A]">{pageData.rating}</div>
                    <div className="text-xs text-[#181D1A]/60 font-semibold tracking-wide uppercase">Service Rating*</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAE3D9] flex items-center justify-center">
                    <Users size={20} className="text-[#AA593E]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none mb-1.5 text-[#181D1A]">{pageData.customers}</div>
                    <div className="text-xs text-[#181D1A]/60 font-semibold tracking-wide uppercase">Customers Globally*</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Images - Adjusted rounding and gaps to look native */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-5 h-[500px] md:h-[650px] transform transition-all duration-1000 group/bento">
              <div className="flex flex-col gap-5 translate-y-6 group-hover/bento:translate-y-4 transition-transform duration-700">
                <img src={pageData.heroImages[0]} className="w-full h-[55%] object-cover rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500" alt="Hero 1" />
                <img src={pageData.heroImages[1]} className="w-full h-[45%] object-cover rounded-[2rem] object-top shadow-sm hover:shadow-xl transition-shadow duration-500" alt="Hero 2" />
              </div>
              <div className="flex flex-col gap-5 -translate-y-6 group-hover/bento:-translate-y-8 transition-transform duration-700">
                <img src={pageData.heroImages[2]} className="w-full h-[45%] object-cover rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500" alt="Hero 3" />
                <img src={pageData.heroImages[3]} className="w-full h-[55%] object-cover rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500" alt="Hero 4" />
              </div>
            </div>
          </div>

          {/* 2. PROMO BANNERS */}
          {pageData.promoBanners?.length > 0 && (
            <div className="flex overflow-x-auto gap-6 pb-4 pt-10 hide-scrollbar snap-x">
              {pageData.promoBanners.map((banner, idx) => (
                <div key={idx} className="snap-start flex-none w-[500px] md:w-[400px] h-[160px] md:h-[200px] rounded-[2rem] overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500">
                  <img src={banner} alt="Promo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              ))}
            </div>
          )}

          {/* 3. MOST BOOKED SERVICES */}
          {pageData.mostBooked && (
            <HorizontalSlider title="Most booked services">
              {pageData.mostBooked.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[220px] cursor-pointer group flex flex-col">
                  <div className="w-full aspect-[4/5] bg-gray-100 rounded-[1.5rem] overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="px-1">
                    <h4 className="font-serif text-lg leading-snug mb-2 line-clamp-1 text-[#181D1A] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-1.5 text-sm text-[#181D1A]/60 mb-1.5 font-medium">
                      <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                      <span className="font-bold text-[#181D1A]">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                    <div className="font-sans font-bold text-[#181D1A] text-base">{item.price}</div>
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 4. SALON FOR WOMEN */}
          {pageData.salonForWomen && (
            <HorizontalSlider title="Salon for women">
              {pageData.salonForWomen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[200px] cursor-pointer group">
                  <div className="w-full h-[240px] bg-[#EAE3D9] rounded-[2rem] overflow-hidden mb-4 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#D5D8D2]">
                    <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-[2rem] transition-transform duration-700 group-hover:scale-105 shadow-md" />
                  </div>
                  <h4 className="font-serif text-lg text-center text-[#181D1A] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 4. SALON FOR MEN */}
          {pageData.salonForMen && (
            <HorizontalSlider title="Salon for Men">
              {pageData.salonForMen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[200px] cursor-pointer group">
                  <div className="w-full h-[240px] bg-[#D5D8D2] rounded-[2rem] overflow-hidden mb-4 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#EAE3D9]">
                    <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-[2rem] transition-transform duration-700 group-hover:scale-105 shadow-md" />
                  </div>
                  <h4 className="font-serif text-lg text-center text-[#181D1A] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 5. SPA FOR WOMEN */}
          {pageData.spaForWomen && (
            <HorizontalSlider title="Spa for women" subtitle="Refresh. Rewind. Rejuvenate.">
              {pageData.spaForWomen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[280px] md:w-[320px] aspect-square bg-white rounded-[2rem] overflow-hidden cursor-pointer flex flex-col group hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="p-6 md:p-8">
                    <h4 className="font-serif text-[22px] md:text-[26px] leading-snug text-[#181D1A] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                  <div className="mt-auto w-full h-[60%] overflow-hidden bg-gray-50">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 5. SPA FOR MEN */}
          {pageData.spaForMen && (
            <HorizontalSlider title="Massage for Men" subtitle="Refresh. Rewind. Rejuvenate.">
              {pageData.spaForMen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[280px] md:w-[320px] aspect-square bg-white rounded-[2rem] overflow-hidden cursor-pointer flex flex-col group hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="p-6 md:p-8">
                    <h4 className="font-serif text-[22px] md:text-[26px] leading-snug text-[#181D1A] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                  <div className="mt-auto w-full h-[60%] overflow-hidden bg-gray-50">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 6. HAIR & NAIL GRID (Women's Only) */}
          {pageData.hairAndNailGrid && (
            <section className="mt-20 mb-16">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#181D1A] tracking-tight">Hair & Nail services</h2>
                <p className="text-[#181D1A]/60 text-[15px] mt-2 font-medium">Refreshed style, revamped look</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {pageData.hairAndNailGrid.map((item, idx) => (
                  <div key={idx} className="cursor-pointer group flex flex-col">
                    <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div className="px-1">
                      <h4 className="font-serif text-lg text-[#181D1A] leading-snug mb-2 line-clamp-1 group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                      <div className="flex items-center gap-1.5 text-sm text-[#181D1A]/60 mb-1.5 font-medium">
                        <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                        <span className="font-bold text-[#181D1A]">{item.rating}</span>
                        <span>({item.reviews})</span>
                      </div>
                      <div className="font-sans font-bold text-[#181D1A] text-base">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
        
        {/* --- FOOTER --- */}
        <footer className="mt-auto pt-20 pb-10 border-t border-[#181D1A]/10 bg-white rounded-t-[3rem] px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-2 mb-12 cursor-pointer hover:opacity-80 transition-opacity w-max">
              <div className="text-2xl font-serif text-[#181D1A] flex items-center gap-1">
                <span className="text-3xl italic">E</span>
                <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div>
                <h4 className="font-bold text-[#181D1A] mb-6 tracking-wide">Company</h4>
                <ul className="space-y-4 text-sm font-medium text-[#181D1A]/60">
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">About us</li>
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Terms & conditions</li>
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Privacy policy</li>
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Anti-discrimination policy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#181D1A] mb-6 tracking-wide">For customers</h4>
                <ul className="space-y-4 text-sm font-medium text-[#181D1A]/60">
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">UC reviews</li>
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Categories near you</li>
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Contact us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#181D1A] mb-6 tracking-wide">For professionals</h4>
                <ul className="space-y-4 text-sm font-medium text-[#181D1A]/60">
                  <li className="hover:text-[#AA593E] hover:translate-x-1 transition-all cursor-pointer w-max">Register as a professional</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#181D1A] mb-6 tracking-wide">Social links</h4>
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#F4EBE1] text-[#181D1A] flex items-center justify-center cursor-pointer hover:bg-[#AA593E] hover:text-white hover:-translate-y-1 transition-all shadow-sm"><FaTwitter size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-[#F4EBE1] text-[#181D1A] flex items-center justify-center cursor-pointer hover:bg-[#AA593E] hover:text-white hover:-translate-y-1 transition-all shadow-sm"><FaFacebook size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-[#F4EBE1] text-[#181D1A] flex items-center justify-center cursor-pointer hover:bg-[#AA593E] hover:text-white hover:-translate-y-1 transition-all shadow-sm"><FaInstagram size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-[#F4EBE1] text-[#181D1A] flex items-center justify-center cursor-pointer hover:bg-[#AA593E] hover:text-white hover:-translate-y-1 transition-all shadow-sm"><FaLinkedin size={18} /></div>
                </div>
              </div>
            </div>
            <div className="text-center text-sm font-medium text-[#181D1A]/40 pt-8 border-t border-[#181D1A]/10">
              © 2026 Easygo Technologies India Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </div>
  );
};

export default DynamicHubPage;