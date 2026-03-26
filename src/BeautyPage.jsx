import React, { useRef, useState, useEffect } from 'react';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

// Import your data
import { hubPagesData } from './data/data';

// --- UPGRADED HORIZONTAL SLIDER (Unchanged) ---
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
    <section className="mt-12 mb-10 relative">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-[34px] font-serif text-[#2A4334] tracking-tight leading-snug">{title}</h2>
          <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
          {subtitle && <p className="text-[#2A4334]/70 text-[15px] mt-1 font-light">{subtitle}</p>}
        </div>
        {actionText && (
          <button className="text-sm font-semibold text-[#AA593E] hover:text-[#8a4731] transition-colors border-b border-transparent hover:border-[#AA593E] pb-0.5">
            {actionText}
          </button>
        )}
      </div>

      <div className="relative group/slider">
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-[#F6F4EE] border border-[#2A4334]/10 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={24} className="text-[#2A4334]" />
        </button>

        <div ref={scrollRef} onScroll={checkScroll} className="flex overflow-x-auto gap-5 pb-4 hide-scrollbar snap-x snap-mandatory">
          {children}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-[#F6F4EE] border border-[#2A4334]/10 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={24} className="text-[#2A4334]" />
        </button>
      </div>
    </section>
  );
};

const DynamicHubPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  // Use the ID from the URL to pull the specific data (womens_salon OR mens_salon)
  const dataKey = categoryId || 'womens_salon';
  const pageData = hubPagesData[dataKey];

  // Scroll to top whenever the category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-serif text-[#2A4334]">Hub not found.</div>;
  }

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pb-0 flex flex-col selection:bg-[#AA593E] selection:text-white pt-24">
      
      <main className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
          
          {/* 1. HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              {/* Refined Title Logic: Using max-w instead of hardcoded split index */}
              <h1 className="text-[40px] md:text-[50px] leading-[1.1] font-serif text-[#2A4334] mb-10 tracking-tight max-w-sm">
                {pageData.title}
              </h1>

              <div className="border border-[#2A4334]/10 bg-white rounded-2xl p-6 shadow-sm mb-10">
                <h3 className="text-xl font-bold text-[#2A4334] mb-6 font-serif">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                  {pageData.heroServices.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-[84px] h-[84px] bg-[#F6F4EE] rounded-2xl flex items-center justify-center relative mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                        {service.tag && (
                          <span className="absolute -top-2 px-2 py-0.5 text-[10px] font-bold text-white bg-[#AA593E] rounded-[4px] z-10 shadow-sm">
                            {service.tag}
                          </span>
                        )}
                        <img src={service.img} alt={service.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[13px] font-medium text-center text-[#2A4334]/80 leading-snug px-1 group-hover:text-[#AA593E] transition-colors">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-12 pl-2">
                <div className="flex items-center gap-3">
                  <Star size={24} className="text-[#AA593E] fill-[#AA593E]" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1 text-[#2A4334]">{pageData.rating}</div>
                    <div className="text-xs text-[#2A4334]/60 font-medium">Service Rating*</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={24} className="text-[#AA593E]" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1 text-[#2A4334]">{pageData.customers}</div>
                    <div className="text-xs text-[#2A4334]/60 font-medium">Customers Globally*</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="flex flex-col gap-4">
                <img src={pageData.heroImages[0]} className="w-full h-[60%] object-cover rounded-2xl shadow-sm" alt="Hero 1" />
                <img src={pageData.heroImages[1]} className="w-full h-[40%] object-cover rounded-2xl object-top shadow-sm" alt="Hero 2" />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <img src={pageData.heroImages[2]} className="w-full h-[40%] object-cover rounded-2xl shadow-sm" alt="Hero 3" />
                <img src={pageData.heroImages[3]} className="w-full h-[60%] object-cover rounded-2xl shadow-sm" alt="Hero 4" />
              </div>
            </div>
          </div>

          <hr className="border-[#2A4334]/10 my-10" />

          {/* 2. PROMO BANNERS */}
          {pageData.promoBanners?.length > 0 && (
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
              {pageData.promoBanners.map((banner, idx) => (
                <div key={idx} className="snap-start flex-none w-[500px] md:w-[360px] h-[150px] md:h-[180px] rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-md transition-all border border-[#2A4334]/5">
                  <img src={banner} alt="Promo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          )}

          {/* 3. MOST BOOKED SERVICES */}
          {pageData.mostBooked && (
            <HorizontalSlider title="Most booked services">
              {pageData.mostBooked.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                  <div className="w-full h-[180px] rounded-[20px] overflow-hidden mb-3 shadow-sm">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h4 className="font-semibold text-[15px] leading-snug mb-1 line-clamp-2 text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-1 text-sm text-[#2A4334]/70 mb-1">
                    <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                    <span className="font-bold text-[#2A4334]">{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="font-bold text-[15px] text-[#2A4334]">{item.price}</div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 4. CONDITIONAL GENDER SLIDERS */}
          {/* Will only show "Salon for women" on the womens_salon route */}
          {pageData.salonForWomen && (
            <>
              <hr className="border-[#2A4334]/10 my-10" />
              <HorizontalSlider title="Salon for women">
                {pageData.salonForWomen.map((item, idx) => (
                  <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                    <div className="w-full h-[200px] bg-[#E8DCCB] rounded-[24px] overflow-hidden mb-3 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#D5D8D2]">
                      <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105 shadow-md" />
                    </div>
                    <h4 className="font-semibold text-[15px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                ))}
              </HorizontalSlider>
            </>
          )}

          {/* Will only show "Salon for Men" on the mens_salon route */}
          {pageData.salonForMen && (
            <>
              <hr className="border-[#2A4334]/10 my-10" />
              <HorizontalSlider title="Salon for Men">
                {pageData.salonForMen.map((item, idx) => (
                  <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                    <div className="w-full h-[200px] bg-[#D5D8D2] rounded-[24px] overflow-hidden mb-3 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#E8DCCB]">
                      <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105 shadow-md" />
                    </div>
                    <h4 className="font-semibold text-[15px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                ))}
              </HorizontalSlider>
            </>
          )}

          {/* 5. SPA SECTION (Conditional per gender) */}
          {pageData.spaForWomen && (
            <HorizontalSlider title="Spa for women" subtitle="Refresh. Rewind. Rejuvenate.">
              {pageData.spaForWomen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-white border border-[#2A4334]/10 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-lg hover:border-[#AA593E]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-5 md:p-6">
                    <h4 className="font-serif text-[19px] md:text-[21px] text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                  <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {pageData.spaForMen && (
            <HorizontalSlider title="Massage for Men" subtitle="Refresh. Rewind. Rejuvenate.">
              {pageData.spaForMen.map((item, idx) => (
                <div key={idx} className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-white border border-[#2A4334]/10 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-lg hover:border-[#AA593E]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-5 md:p-6">
                    <h4 className="font-serif text-[19px] md:text-[21px] text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                  </div>
                  <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          )}

          {/* 6. HAIR & NAIL GRID (Women's Only) */}
          {pageData.hairAndNailGrid && (
            <section className="mt-16 mb-16">
              <div className="mb-8">
                <h2 className="text-[28px] md:text-4xl font-serif text-[#2A4334] tracking-tight">Hair & Nail services</h2>
                <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
                <p className="text-[#2A4334]/70 text-[15px] mt-1 font-light">Refreshed style, revamped look</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                {pageData.hairAndNailGrid.map((item, idx) => (
                  <div key={idx} className="cursor-pointer group flex flex-col">
                    <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-4 bg-white shadow-sm border border-[#2A4334]/5">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h4 className="font-semibold text-[15px] text-[#2A4334] leading-snug mb-1.5 line-clamp-1 group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-1.5 text-[13px] text-[#2A4334]/70 mb-1.5">
                      <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                      <span className="font-bold text-[#2A4334]">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                    <div className="text-[14px] font-bold text-[#2A4334]">{item.price}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* --- FOOTER (Simplified) --- */}
      <footer className="bg-[#1F3327] text-[#F6F4EE] pt-20 pb-10 mt-auto w-full">
         {/* Footer content unchanged */}
      </footer>

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