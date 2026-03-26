import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiStar, FiChevronDown, FiShield, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = () => (
  <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b-[0.5px] border-[#2A4334]/10">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer">
        <span className="text-3xl italic">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
      </div>
      
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border-[0.5px] border-[#2A4334]/20 rounded-full h-12 items-center shadow-sm">
        <div className="flex items-center px-4 border-r-[0.5px] border-[#2A4334]/20 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-4 flex-1">
          <FiSearch className="text-gray-400 mr-2" size={16} />
          <input type="text" placeholder="Search in AC" className="w-full text-sm outline-none bg-transparent text-[#2A4334]" defaultValue="AC" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. REUSABLE SERVICE ITEM CARD (Updated for AC)
// ==========================================
const ServiceItem = ({ title, rating, reviews, price, originalPrice, priceSuffix, duration, options, imageTag, image, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="py-6 border-b-[0.5px] border-[#2A4334]/10 flex gap-4 md:gap-6 relative">
      <div className="flex-1">
        <h3 className="text-lg font-serif text-[#2A4334] font-semibold leading-snug mb-1">{title}</h3>
        
        <div className="flex items-center gap-1.5 text-xs text-[#2A4334]/70 mb-2">
          <FiStar className="fill-[#AA593E] text-[#AA593E]" size={12} />
          <span className="font-bold text-[#2A4334]">{rating}</span>
          <span>({reviews} reviews)</span>
        </div>
        
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {originalPrice && <span className="text-xs text-gray-400 line-through">₹{originalPrice}</span>}
          <span className="font-bold text-[#2A4334]">₹{price}</span>
          {priceSuffix && <span className="text-xs text-[#2A4334]/70">{priceSuffix}</span>}
          {duration && <span className="text-xs text-[#2A4334]/60">• {duration}</span>}
        </div>

        {/* Highlighted Bullet Points (Always visible) */}
        {details && (
          <ul className="mt-3 space-y-1.5 text-xs text-[#2A4334]/80 font-medium mb-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-[#AA593E]">•</span> {detail}
              </li>
            ))}
          </ul>
        )}

        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#AA593E] text-xs font-bold mt-1 flex items-center gap-1 hover:underline"
        >
          View details <FiChevronDown className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`} />
        </button>

        {showDetails && (
          <div className="mt-4 p-4 bg-[#F6F4EE] rounded-lg text-xs text-[#2A4334]/70">
            <p className="font-semibold mb-1">Service Includes:</p>
            <ul className="space-y-1">
              <li>- Comprehensive diagnostic check.</li>
              <li>- Deep cleaning of indoor unit filters and coils.</li>
              <li>- Post-service cleanup of the surrounding area.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] relative shrink-0 flex flex-col items-center">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#E8DCCB] relative border border-[#2A4334]/10">
          {imageTag && (
            <div className="absolute top-0 w-full bg-[#2A4334] text-white text-[9px] font-bold uppercase tracking-widest text-center py-1 z-10">
              {imageTag}
            </div>
          )}
          {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full bg-[#D5D8D2] flex items-center justify-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/3565/3565575.png" alt="AC" className="opacity-20" />
             </div>
          )}
        </div>
        <button className="absolute -bottom-3 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-md font-bold text-xs uppercase px-8 py-2 rounded-lg hover:bg-[#AA593E] hover:text-white transition-colors">
          Add
        </button>
        {options && (
          <span className="absolute -bottom-8 text-[10px] text-[#2A4334]/60 font-medium">{options}</span>
        )}
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const ACServicePage = () => {

  // Smooth Scroll Functionality from Left Menu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const leftSidebarLinks = [
    { id: "super-saver", name: "Super saver packages", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
    { id: "service", name: "Service", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
    { id: "repair", name: "Repair & gas refill", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
    { id: "installation", name: "Installation/uninstall", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
  ];

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E] selection:text-white pt-24">
      <Navbar />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8">
        
        {/* THREE COLUMN LAYOUT (As seen in the AC video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* ========================================== */}
          {/* COLUMN 1: STICKY LEFT SIDEBAR (Menu) */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-28 space-y-6">
              
              <div>
                <h1 className="text-4xl font-serif font-bold text-[#2A4334] mb-2">AC</h1>
                <div className="flex items-center gap-2 text-sm text-[#2A4334]/80 mb-6">
                  <FiStar className="fill-[#AA593E] text-[#AA593E]" size={16} />
                  <span className="font-bold text-[#2A4334]">4.75</span>
                  <span>(12.0 M bookings)</span>
                </div>
              </div>

              {/* EasyGo Cover Card */}
              <div className="bg-white border border-[#2A4334]/10 rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#AA593E]/30 transition-colors">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <FiShield className="text-[#AA593E]" size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2A4334]">EasyGo Cover</span>
                  </div>
                  <p className="text-xs text-[#2A4334]/70 font-medium">Upto 30 days warranty on repairs</p>
                </div>
                <FiChevronRight className="text-gray-400 group-hover:text-[#AA593E] transition-colors" />
              </div>

              {/* Sticky Category Menu Grid */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2A4334]/5">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4">Select a service</h3>
                <div className="grid grid-cols-2 gap-4">
                  {leftSidebarLinks.map((link, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => scrollToSection(link.id)}
                      className="flex flex-col items-center cursor-pointer group p-2 rounded-xl hover:bg-[#F6F4EE] transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#F6F4EE] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                         <img src={link.icon} alt={link.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[11px] text-center font-medium leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E]">{link.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ========================================== */}
          {/* COLUMN 2: MAIN SCROLLABLE CATALOG */}
          {/* ========================================== */}
          <div className="lg:col-span-6">
            
            {/* Hero Banner */}
            <div className="w-full bg-[#E8DCCB] rounded-2xl overflow-hidden mb-12 relative group cursor-pointer shadow-sm border border-[#2A4334]/5 flex items-center h-[220px]">
              <div className="p-8 w-3/5 z-10">
                <div className="inline-flex items-center gap-1.5 bg-[#2A4334] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  <FiCheckCircle size={12} /> INSTANT
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2A4334] leading-tight mb-2">
                  AC service & repair in 60 mins
                </h2>
                <p className="text-[#2A4334]/70 font-medium">Starts at ₹449</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-2/5">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="AC Tech" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8DCCB] to-transparent"></div>
              </div>
            </div>

            {/* --- SECTION: SUPER SAVER PACKAGES --- */}
            <section id="super-saver" className="mb-12 pt-4">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Super saver packages</h2>
              
              {/* Promo Image Card inside section */}
              <div className="w-full bg-white rounded-xl mb-6 overflow-hidden flex shadow-sm border border-[#2A4334]/5">
                 <div className="w-2/3 p-6 flex flex-col justify-center">
                    <span className="bg-[#E8DCCB] text-[#2A4334] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-max mb-3">Free gas check</span>
                    <h3 className="text-xl font-serif font-bold text-[#2A4334] mb-2">Foam-jet AC service</h3>
                    <p className="text-sm text-[#2A4334]/70">Deep clean AC vents for efficient cooling</p>
                 </div>
                 <div className="w-1/3 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1596440263654-20b1c97a22e8?q=80&w=400" className="w-full h-full object-cover" alt="Cleaning AC" />
                 </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Foam-jet service (2 ACs)" 
                  rating="4.75" reviews="2.2M" price="1,198" originalPrice="1,598" duration="1 hr 30 mins" priceSuffix="₹599 per AC"
                />
                <ServiceItem 
                  title="Foam-jet service (3 ACs)" 
                  rating="4.75" reviews="2.2M" price="1,647" originalPrice="2,397" duration="2 hrs 15 mins" priceSuffix="₹549 per AC"
                />
                <ServiceItem 
                  title="Foam-jet service (4 ACs)" 
                  rating="4.75" reviews="2.2M" price="1,996" originalPrice="3,196" duration="3 hrs" priceSuffix="₹499 per AC"
                />
                <ServiceItem 
                  title="Foam-jet service (5 ACs)" 
                  rating="4.75" reviews="2.2M" price="2,495" originalPrice="3,995" duration="3 hrs 45 mins" priceSuffix="₹499 per AC"
                />
              </div>
            </section>

            {/* --- SECTION: SERVICE --- */}
            <section id="service" className="mb-12 pt-4">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Service</h2>
              
              <div className="w-full bg-white rounded-xl mb-6 overflow-hidden flex shadow-sm border border-[#2A4334]/5">
                 <div className="w-2/3 p-6 flex flex-col justify-center">
                    <span className="bg-[#E8DCCB] text-[#2A4334] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-max mb-3">Free gas check</span>
                    <h3 className="text-xl font-serif font-bold text-[#2A4334] mb-2">Foam-jet AC service</h3>
                    <p className="text-sm text-[#2A4334]/70">Deep clean AC vents for efficient cooling</p>
                 </div>
                 <div className="w-1/3 flex items-center justify-center bg-gray-50">
                    <button className="bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-sm font-bold text-xs uppercase px-8 py-2 rounded-lg hover:bg-[#AA593E] hover:text-white transition-colors">Add</button>
                 </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Foam-jet AC service" 
                  rating="4.75" reviews="2.2M" price="649" 
                  options="9 options"
                  details={[
                    "Applicable for both window & split ACs",
                    "Indoor unit deep cleaning with foam & jet spray"
                  ]}
                />
              </div>
            </section>

            {/* --- SECTION: REPAIR & GAS REFILL --- */}
            <section id="repair" className="mb-12 pt-4">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Repair & gas refill</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="AC repair" 
                  rating="4.74" reviews="752K" price="299" 
                  options="4 options"
                  details={[
                    "Complete check-up to identify issues before repair"
                  ]}
                  image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200"
                />
                <ServiceItem 
                  title="Gas refill & check-up" 
                  rating="4.75" reviews="133K" price="2,800" originalPrice="3,200" duration="2 hrs 30 mins"
                  image="https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200"
                />
              </div>
            </section>

            {/* --- SECTION: INSTALLATION --- */}
            <section id="installation" className="mb-12 pt-4">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Installation/uninstallation</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="AC installation" 
                  rating="4.75" reviews="153K" price="1,899" 
                  options="2 options"
                  details={[
                    "Installation of indoor & outdoor units with free gas check"
                  ]}
                  image="https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200"
                />
                <ServiceItem 
                  title="AC uninstallation" 
                  rating="4.81" reviews="126K" price="699" 
                  options="2 options"
                  details={[
                    "Uninstallation of both indoor & outdoor units"
                  ]}
                />
              </div>
            </section>

          </div>


          {/* ========================================== */}
          {/* COLUMN 3: STICKY CART & GUARANTEES */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Empty Cart Box */}
              <div className="bg-white rounded-2xl p-8 border border-[#2A4334]/5 shadow-sm flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-[#F6F4EE] rounded-full flex items-center justify-center mb-4">
                  <FiSearch className="text-[#2A4334]/40" size={20} />
                </div>
                <h3 className="font-bold text-[#2A4334] mb-1">No items in your cart</h3>
                <p className="text-xs text-[#2A4334]/60">Select a service to proceed.</p>
              </div>

              {/* Coupon Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#2A4334]/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#E8DCCB] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#AA593E] font-bold text-lg">%</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2A4334]">Get ₹50 coupon</h4>
                  <p className="text-xs text-[#2A4334]/60 mt-0.5">After first service delivery</p>
                </div>
              </div>

              {/* EasyGo Promise */}
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif font-bold text-[#2A4334] text-lg">The EasyGo Promise</h3>
                  <div className="w-10 h-10 bg-[#2A4334] rounded-full flex items-center justify-center">
                    <FiShield className="text-[#F6F4EE]" size={16} />
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-xs font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={16} /> Verified Professionals
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={16} /> Hassle Free Booking
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={16} /> Transparent Pricing
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* --- EARTHY PREMIUM FOOTER --- */}
      <footer className="bg-[#1F3327] text-[#F6F4EE] pt-20 pb-10 mt-12 w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-[#F6F4EE]/10 pb-16 px-6 md:px-12">
          
          <div className="lg:col-span-4 pr-0 md:pr-10">
            <div className="text-4xl font-serif text-[#E8DCCB] mb-6 flex items-center gap-1">
              <span className="text-5xl italic">E</span>
              <span className="text-2xl tracking-widest uppercase mt-2">asygo</span>
            </div>
            <p className="text-[#F6F4EE]/70 text-sm font-light leading-relaxed max-w-sm mb-8">
              The premier platform for holistic home and wellness services. We connect you with top-tier professionals.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-[#F6F4EE]/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-light text-[#F6F4EE]/80">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default ACServicePage;