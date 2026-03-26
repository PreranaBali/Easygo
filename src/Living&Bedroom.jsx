import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiStar, FiChevronDown, FiVideo, FiShield, FiCheckCircle } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = () => (
  <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b-[0.5px] border-[#2A4334]/10">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      {/* Brand */}
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer">
        <span className="text-3xl italic">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
      </div>
      
      {/* Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border-[0.5px] border-[#2A4334]/20 rounded-full h-12 items-center shadow-sm">
        <div className="flex items-center px-4 border-r-[0.5px] border-[#2A4334]/20 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-4 flex-1">
          <FiSearch className="text-gray-400 mr-2" size={16} />
          <input type="text" placeholder="Search in Living & Bedroom Cleaning" className="w-full text-sm outline-none bg-transparent text-[#2A4334]" defaultValue="Living & Bedroom Cleaning" />
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
const ServiceItem = ({ title, rating, reviews, price, originalPrice, duration, discount, image, isBestseller }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="py-6 border-b-[0.5px] border-[#2A4334]/10 flex gap-4 md:gap-6 relative">
      {/* Left Details */}
      <div className="flex-1">
        {isBestseller && <span className="bg-[#AA593E]/10 text-[#AA593E] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block">Bestseller</span>}
        {discount && <span className="bg-[#2A4334] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block ml-2">{discount}</span>}
        
        <h3 className="text-lg font-serif text-[#2A4334] font-semibold leading-snug mb-1">{title}</h3>
        
        <div className="flex items-center gap-1.5 text-xs text-[#2A4334]/70 mb-2">
          <FiStar className="fill-[#AA593E] text-[#AA593E]" size={12} />
          <span className="font-bold text-[#2A4334]">{rating}</span>
          <span>({reviews} reviews)</span>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-[#2A4334]">₹{price}</span>
          {originalPrice && <span className="text-xs text-gray-400 line-through">₹{originalPrice}</span>}
          {duration && <span className="text-xs text-[#2A4334]/60">• {duration}</span>}
        </div>

        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#AA593E] text-xs font-bold mt-2 flex items-center gap-1 hover:underline"
        >
          View details <FiChevronDown className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`} />
        </button>

        {/* Expandable Details */}
        {showDetails && (
          <ul className="mt-4 space-y-2 text-xs text-[#2A4334]/70 font-medium">
            <li className="flex gap-2"><span>•</span> Deep cleaning using professional grade equipment.</li>
            <li className="flex gap-2"><span>•</span> Includes dry vacuuming and wet shampooing.</li>
            <li className="flex gap-2"><span>•</span> Drying time requires 2-3 hours under a fan.</li>
          </ul>
        )}
      </div>

      {/* Right Image & Add Button */}
      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] relative shrink-0">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#E8DCCB]">
          {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full bg-[#D5D8D2]"></div>
          )}
        </div>
        <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-md font-bold text-xs uppercase px-6 py-2 rounded-lg hover:bg-[#AA593E] hover:text-white transition-colors">
          Add
        </button>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const LivingRoomCleaningPage = () => {
  // 4x2 Grid Categories from the Video
  const topNavCategories = [
    { name: "Super saver deals", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
    { name: "Sofa & carpet", icon: "https://cdn-icons-png.flaticon.com/512/2609/2609363.png" },
    { name: "Living room care", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
    { name: "Bedroom care", icon: "https://cdn-icons-png.flaticon.com/512/3030/3030335.png" },
    { name: "Mattress & bed", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
    { name: "Dining table & chairs", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
    { name: "Other furniture", icon: "https://cdn-icons-png.flaticon.com/512/1301/1301646.png" },
    { name: "Windows & fan", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
  ];

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E] selection:text-white pt-24">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-8 py-8">
        
        {/* Page Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2A4334] mb-2">Living & Bedroom Cleaning</h1>
          <div className="flex items-center gap-2 text-sm text-[#2A4334]/80">
            <FiStar className="fill-[#AA593E] text-[#AA593E]" size={16} />
            <span className="font-bold text-[#2A4334]">4.88</span>
            <span>(115K bookings)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: SERVICE CATALOG */}
          {/* ========================================== */}
          <div className="lg:col-span-8">
            
            {/* "Select a service" 4x2 Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2A4334]/5 mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2A4334]/50 mb-6">Select a service</h3>
              <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                {topNavCategories.map((cat, idx) => (
                  <div key={idx} className="flex flex-col items-center cursor-pointer group">
                    <div className="w-14 h-14 bg-[#F6F4EE] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                       <img src={cat.icon} alt={cat.name} className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[11px] text-center font-medium leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] px-1">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Placeholder Header */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-[#2A4334] rounded-2xl overflow-hidden mb-10 relative group cursor-pointer shadow-md border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1527772482340-7895c3f2b4f7?q=80&w=1200&auto=format&fit=crop" alt="Living Room Cleaning" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <FiVideo className="text-white fill-white ml-1" size={24} />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mt-12">
                <h3 className="text-white font-serif text-3xl md:text-4xl drop-shadow-md">Nothing gets missed</h3>
              </div>
            </div>

            {/* --- SECTION 1: SUPER SAVER DEALS --- */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Super saver deals</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="2-visits sofa cleaning pack" 
                  rating="4.83" reviews="65K" price="398" originalPrice="498" duration="per visit"
                  discount="20% OFF"
                  image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                />
                <ServiceItem 
                  title="2 visits: Fabric sofa cleaning" 
                  rating="4.83" reviews="65K" price="398" originalPrice="498" duration="per visit"
                  discount="20% OFF"
                />
                <ServiceItem 
                  title="3-visits mattress cleaning pack" 
                  rating="4.89" reviews="28K" price="298" originalPrice="398" duration="per visit"
                  discount="20% OFF"
                />
              </div>
            </section>

            {/* --- SECTION 2: SOFA & CARPET --- */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Sofa & carpet</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Fabric sofa cleaning" 
                  isBestseller={true}
                  rating="4.80" reviews="56K" price="399" duration="45 mins"
                  image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80"
                />
                <ServiceItem 
                  title="Leather sofa cleaning & polishing" 
                  rating="4.85" reviews="13K" price="399" duration="45 mins"
                  image="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80"
                />
                <ServiceItem 
                  title="Carpet cleaning" 
                  rating="4.86" reviews="11K" price="399" duration="45 mins"
                  image="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=400&q=80"
                />
              </div>
            </section>

            {/* --- SECTION 3: LIVING ROOM CARE --- */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Living room care</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Sofa, windows & cobweb cleaning" 
                  rating="4.82" reviews="15K" price="749" originalPrice="939" duration="1 hr 45 mins"
                  discount="20% OFF"
                  image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80"
                />
              </div>
            </section>

            {/* --- SECTION 4: BEDROOM CARE --- */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Bedroom care</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Bedroom essential cleaning" 
                  rating="4.88" reviews="39K" price="719" originalPrice="899" duration="2 hrs 30 mins"
                  image="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80"
                />
              </div>
            </section>

            {/* --- SECTION 5: MATTRESS & BED --- */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-[#2A4334]">Mattress & bed</h2>
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                <ServiceItem 
                  title="Mattress cleaning" 
                  rating="4.89" reviews="18K" price="399" duration="25 mins"
                  image="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&q=80"
                />
                <ServiceItem 
                  title="Bed cleaning" 
                  rating="4.88" reviews="14K" price="449" duration="40 mins"
                />
                <ServiceItem 
                  title="Fabric headboard" 
                  rating="4.87" reviews="7K" price="249" duration="25 mins"
                />
              </div>
            </section>

          </div>


          {/* ========================================== */}
          {/* RIGHT COLUMN: STICKY CART & GUARANTEES */}
          {/* ========================================== */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Empty Cart Box */}
              <div className="bg-white rounded-2xl p-8 border border-[#2A4334]/5 shadow-sm flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-[#F6F4EE] rounded-full flex items-center justify-center mb-4">
                  <FiSearch className="text-[#2A4334]/40" size={20} />
                </div>
                <h3 className="font-bold text-[#2A4334] mb-1">No items in your cart</h3>
                <p className="text-sm text-[#2A4334]/60">Select a service to proceed.</p>
              </div>

              {/* Coupon Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#E8DCCB] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#AA593E] font-bold text-lg">%</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#2A4334]">Get ₹50 coupon</h4>
                  <p className="text-sm text-[#2A4334]/60 mt-1">After first service delivery</p>
                </div>
              </div>

              {/* EasyGo Promise */}
              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif font-bold text-[#2A4334] text-xl">The EasyGo Promise</h3>
                  <div className="w-12 h-12 bg-[#2A4334] rounded-full flex items-center justify-center">
                    <FiShield className="text-[#F6F4EE]" size={20} />
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={18} /> Verified Professionals
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={18} /> Hassle Free Booking
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#2A4334]">
                    <FiCheckCircle className="text-[#AA593E]" size={18} /> Transparent Pricing
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
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Customers</h4>
            <ul className="space-y-4 text-sm font-light text-[#F6F4EE]/80">
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
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

export default LivingRoomCleaningPage;