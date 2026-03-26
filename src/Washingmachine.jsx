import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiStar, FiChevronDown, FiShield, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

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
          <input type="text" placeholder="Search in Washing Machine" className="w-full text-sm outline-none bg-transparent text-[#2A4334]" defaultValue="Washing Machine" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. REUSABLE SERVICE ITEM CARD 
// ==========================================
const ServiceItem = ({ title, rating, reviews, priceLabel, price, options, details, image }) => {
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
        
        <div className="flex items-center flex-wrap gap-1 mb-3">
          {priceLabel && <span className="text-xs font-semibold text-[#2A4334]/70">{priceLabel}</span>}
          <span className="font-bold text-[#2A4334]">₹{price}</span>
        </div>

        {/* Highlighted Bullet Points */}
        {details && (
          <ul className="mt-2 space-y-1.5 text-xs text-[#2A4334]/80 font-medium mb-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="text-[#AA593E] mt-0.5">•</span> 
                <span>{detail}</span>
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
              <li>- Identification of faulty parts.</li>
              <li>- Post-service cleanup of the area.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] relative shrink-0 flex flex-col items-center">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#E8DCCB] relative border border-[#2A4334]/10 p-2 flex items-center justify-center bg-white">
          {image ? (
             <img src={image} alt={title} className="w-full h-full object-contain mix-blend-multiply" />
          ) : (
             <img src="https://cdn-icons-png.flaticon.com/512/3565/3565575.png" alt="Washing Machine" className="opacity-20 w-1/2" />
          )}
        </div>
        <button className="absolute -bottom-3 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-md font-bold text-xs uppercase px-8 py-2 rounded-lg hover:bg-[#AA593E] hover:text-white transition-colors">
          Add
        </button>
        {options && (
          <span className="absolute -bottom-8 text-[10px] text-[#2A4334]/60 font-medium whitespace-nowrap">{options}</span>
        )}
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const WashingMachinePage = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E] selection:text-white pt-24">
      <Navbar />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8">
        
        {/* TRUE 3-COLUMN ARCHITECTURE (Matches Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* ========================================== */}
          {/* COLUMN 1: STICKY LEFT SIDEBAR (Header Info) */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-28 space-y-6">
              
              <div>
                <h1 className="text-4xl font-serif font-bold text-[#2A4334] mb-3">Washing Machine</h1>
                <div className="flex items-center gap-2 text-sm text-[#2A4334]/80 mb-6">
                  <FiStar className="fill-[#AA593E] text-[#AA593E]" size={16} />
                  <span className="font-bold text-[#2A4334]">4.74</span>
                  <span>(3.2 M bookings)</span>
                </div>
              </div>

              {/* Warranty Card */}
              <div className="bg-white border border-[#2A4334]/10 rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#AA593E]/30 transition-colors">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#AA593E]" size={16} />
                  <span className="text-xs font-semibold text-[#2A4334]">Upto 180 days warranty</span>
                </div>
                <FiChevronRight className="text-gray-400 group-hover:text-[#AA593E] transition-colors" />
              </div>

              {/* View Services Action Button */}
              <button 
                onClick={() => scrollToSection('repair')}
                className="w-full bg-[#AA593E] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl shadow-md hover:bg-[#8a4731] transition-colors"
              >
                View Services
              </button>

            </div>
          </div>

          {/* ========================================== */}
          {/* COLUMN 2: MAIN SCROLLABLE CATALOG */}
          {/* ========================================== */}
          <div className="lg:col-span-6">

            {/* --- SECTION 1: REPAIR --- */}
            <section id="repair" className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Repair</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Automatic top load machine check-up" 
                  rating="4.77" reviews="362K" priceLabel="Starts at" price="199" 
                  options="6 options"
                  details={[
                    "Visitation fee will be adjusted in the final repair quote"
                  ]}
                  image="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=200&auto=format&fit=crop"
                />
                <ServiceItem 
                  title="Automatic front load machine check-up" 
                  rating="4.75" reviews="482K" priceLabel="Starts at" price="199" 
                  options="7 options"
                  details={[
                    "Visitation fee will be adjusted in the final repair quote"
                  ]}
                  image="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=200&auto=format&fit=crop"
                />
                <ServiceItem 
                  title="Semi-automatic machine check-up" 
                  rating="4.75" reviews="88K" priceLabel="Starts at" price="199" 
                  options="7 options"
                  details={[
                    "Visitation fee will be adjusted in the final repair quote"
                  ]}
                  image="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=200&auto=format&fit=crop"
                />
              </div>
            </section>

            {/* --- SECTION 2: INSTALLATION & UNINSTALLATION --- */}
            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Installation & uninstallation</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Washing machine installation & uninstallation" 
                  rating="4.81" reviews="39K" priceLabel="Starts at" price="399" 
                  options="3 options"
                  image="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=200&auto=format&fit=crop"
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
    </div>
  );
};

export default WashingMachinePage;