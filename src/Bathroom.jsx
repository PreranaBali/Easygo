import React, { useState } from 'react';
import { BsStarFill, BsDot, BsPlus, BsTagFill, BsCheckCircle } from 'react-icons/bs';
import { FiChevronRight, FiClock, FiShield } from 'react-icons/fi';
import { MdOutlineCleaningServices, MdOutlineBathtub } from 'react-icons/md';
import { BiSprayCan } from 'react-icons/bi';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- DATA FROM VIDEO ---
const serviceData = {
  combos: [
    {
      id: 'c1',
      title: 'Intense cleaning (2 bathrooms)',
      rating: '4.80',
      reviews: '4.9M reviews',
      price: 798,
      originalPrice: 999,
      duration: '2 hrs',
      perk: '₹399 per bathroom',
      bullets: ['Floor & tile cleaning with a scrub machine'],
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80',
      badge: '2 BATHROOMS'
    },
    {
      id: 'c2',
      title: 'Intense cleaning (3 bathrooms)',
      rating: '4.80',
      reviews: '4.9M reviews',
      price: 1197,
      originalPrice: 1497,
      duration: '3 hrs',
      perk: '₹399 per bathroom',
      bullets: ['Floor & tile cleaning with a scrub machine'],
      img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=300&q=80',
      badge: '3 BATHROOMS'
    }
  ],
  bathroomCleaning: [
    {
      id: 'b1',
      title: 'Bathroom cleaning',
      rating: '4.80',
      reviews: '5.2M reviews',
      priceText: 'Starts at ₹399',
      originalPrice: 499,
      duration: '60 mins',
      bullets: [
        'Floor & tile cleaning with scrubbing machine',
        'Recommended for deep cleaning and tough stains'
      ],
      img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=300&q=80'
    }
  ],
  miniServices: [
    {
      id: 'm1',
      title: 'Bathroom exhaust fan cleaning',
      rating: '4.75',
      reviews: '104K reviews',
      price: 89,
      duration: '15 mins',
      bullets: ['Additional, one fan is already covered in bathroom service'],
      img: 'https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'm2',
      title: 'Washbasin cleaning',
      rating: '4.83',
      reviews: '268K reviews',
      price: 69,
      duration: '10 mins',
      bullets: ['Additional, one washbasin is already covered in bathroom service'],
      img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'm3',
      title: 'Ceiling fan cleaning',
      rating: '4.81',
      reviews: '575K reviews',
      price: 69,
      duration: '10 mins',
      bullets: ['Not covered in bathroom service'],
      img: 'https://images.unsplash.com/photo-1565191060933-2de56317e0b5?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'm4',
      title: 'Door cleaning (upto 1)',
      rating: '4.78',
      reviews: '28K reviews',
      price: 49,
      duration: '10 mins',
      bullets: ['Additional, bathroom door is covered in bathroom cleaning'],
      img: 'https://images.unsplash.com/photo-1512613866299-92c905b63fc3?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'm5',
      title: 'Balcony cleaning',
      rating: '4.80',
      reviews: '52K reviews',
      priceText: 'Starts at ₹489',
      bullets: ['Cleaning walls, grills & railings of up to 1 balcony'],
      img: 'https://images.unsplash.com/photo-1542456485-6110f03ec03b?auto=format&fit=crop&w=300&q=80',
      optionsCount: 2
    },
    {
      id: 'm6',
      title: 'Mirror cleaning (upto 1)',
      rating: '4.82',
      reviews: '55K reviews',
      price: 59,
      duration: '10 mins',
      bullets: ['Additional, one mirror is already covered in bathroom service'],
      img: 'https://images.unsplash.com/photo-1605371306354-9bb828a1c976?auto=format&fit=crop&w=300&q=80'
    }
  ]
};

// --- REUSABLE SERVICE CARD (Earthy Boutique Style) ---
const ServiceCard = ({ item }) => (
  <div className="py-8 border-b border-[#1F2922]/10 flex flex-col md:flex-row gap-6 group">
    {/* Left Content */}
    <div className="flex-1">
      <h3 className="text-xl font-serif text-[#1F2922] mb-2 leading-tight group-hover:text-[#9A5B40] transition-colors">
        {item.title}
      </h3>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-[#25392D] bg-[#25392D]/5 px-2 py-0.5 rounded text-xs font-semibold">
          <svg className="w-3 h-3 text-[#9A5B40]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <span>{item.rating}</span>
        </div>
        <span className="text-[#1F2922]/50 text-xs">({item.reviews})</span>
      </div>

      <div className="flex items-center gap-3 font-sans mb-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1F2922] text-sm">
            {item.priceText || `₹${item.price}`}
          </span>
          {item.originalPrice && (
            <span className="text-[#1F2922]/40 text-xs line-through">₹{item.originalPrice}</span>
          )}
        </div>
        {item.duration && (
          <>
            <BsDot className="text-[#1F2922]/30" />
            <span className="text-[#1F2922]/60 text-xs flex items-center gap-1">
              <FiClock size={12} /> {item.duration}
            </span>
          </>
        )}
      </div>

      {item.perk && (
        <div className="mb-4">
          <span className="inline-block bg-[#E8DCC8]/50 text-[#9A5B40] text-xs font-medium px-2.5 py-1 rounded-sm border border-[#9A5B40]/10">
            {item.perk}
          </span>
        </div>
      )}

      <ul className="space-y-2 mt-4">
        {item.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-[#1F2922]/70 font-sans leading-relaxed">
            <span className="text-[#1F2922]/30 mt-1.5 flex-shrink-0"><BsDot size={12} /></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-4 text-[#9A5B40] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
        View details <FiChevronRight size={14} />
      </button>
    </div>

    {/* Right Image & Add Button */}
    <div className="w-full md:w-[140px] flex flex-col items-center flex-shrink-0 mt-4 md:mt-0">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-md border border-[#1F2922]/5">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        {item.badge && (
          <div className="absolute top-0 left-0 w-full bg-[#1F2922]/80 backdrop-blur-sm text-[#F5F2EA] text-[9px] font-bold tracking-widest uppercase py-1 text-center">
            {item.badge}
          </div>
        )}
      </div>
      
      <button className="relative -mt-8 bg-[#F5F2EA] text-[#9A5B40] border border-[#1F2922]/10 hover:border-[#9A5B40] hover:bg-[#9A5B40] hover:text-[#F5F2EA] transition-colors shadow-sm font-bold text-sm px-6 py-2 rounded-full flex items-center justify-center w-[85%]">
        Add
        <BsPlus size={18} className="absolute right-2" />
      </button>
      
      {item.optionsCount && (
        <span className="text-[10px] text-[#1F2922]/50 font-medium mt-2">
          {item.optionsCount} options
        </span>
      )}
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const ServicePage = () => {
  return (
    <div className="bg-[#F5F2EA] min-h-screen font-sans selection:bg-[#9A5B40] selection:text-white pb-24">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8">
        
        {/* HERO HEADER */}
        <div className="mb-12 border-b border-[#1F2922]/10 pb-12 flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h1 className="text-5xl font-serif text-[#1F2922] mb-4">Bathroom Cleaning</h1>
            <div className="flex items-center gap-2 text-[#1F2922] mb-10 font-medium">
              <svg className="w-5 h-5 text-[#9A5B40]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span className="text-xl">4.82</span>
              <span className="text-[#1F2922]/50 text-sm font-normal ml-1">(8.5 M bookings)</span>
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-[#1F2922]/5">
              <p className="text-xs text-[#1F2922]/50 font-bold tracking-widest uppercase mb-4">Select a service</p>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                
                {/* Active Tab */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group">
                  <div className="w-16 h-16 rounded-2xl border-2 border-[#9A5B40] bg-white flex items-center justify-center shadow-sm relative transition-transform group-hover:-translate-y-1">
                     <span className="absolute -top-2 bg-[#E8DCC8] text-[#9A5B40] text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-[#9A5B40]/20">
                       Combo Deals
                     </span>
                     <MdOutlineCleaningServices size={28} className="text-[#9A5B40]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1F2922] text-center">Combos</span>
                </div>

                {/* Inactive Tab */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group opacity-70 hover:opacity-100">
                  <div className="w-16 h-16 rounded-2xl border border-[#1F2922]/10 bg-white flex items-center justify-center transition-transform group-hover:-translate-y-1">
                     <MdOutlineBathtub size={28} className="text-[#1F2922]/70" />
                  </div>
                  <span className="text-xs font-medium text-[#1F2922] text-center">Bathroom cleaning</span>
                </div>

                {/* Inactive Tab */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group opacity-70 hover:opacity-100">
                  <div className="w-16 h-16 rounded-2xl border border-[#1F2922]/10 bg-white flex items-center justify-center transition-transform group-hover:-translate-y-1">
                     <BiSprayCan size={28} className="text-[#1F2922]/70" />
                  </div>
                  <span className="text-xs font-medium text-[#1F2922] text-center">Mini services</span>
                </div>

              </div>
            </div>
          </div>

          {/* Hero Image replacement for video player */}
          <div className="flex-[1.2] w-full">
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-[#1F2922]/10 relative group">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" alt="Professional cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2922]/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-[#F5F2EA]">
                <p className="text-3xl font-serif mb-1">We got you.</p>
                <p className="text-sm opacity-80 font-sans">Premium restoration for your private spaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Service Lists */}
          <div className="flex-1">
            {/* Combos Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-[#1F2922] mb-6">Combos</h2>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1F2922]/5">
                {serviceData.combos.map(item => <ServiceCard key={item.id} item={item} />)}
              </div>
            </section>

            {/* Bathroom Cleaning Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-[#1F2922] mb-6">Bathroom cleaning</h2>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1F2922]/5">
                {serviceData.bathroomCleaning.map(item => <ServiceCard key={item.id} item={item} />)}
              </div>
            </section>

            {/* Mini Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-[#1F2922] mb-6">Mini services</h2>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1F2922]/5">
                {serviceData.miniServices.map(item => <ServiceCard key={item.id} item={item} />)}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Cart & Promos */}
          <div className="w-full lg:w-[350px] flex flex-col gap-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Cart Widget */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#1F2922]/5 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="w-16 h-16 bg-[#F5F2EA] rounded-full flex items-center justify-center mb-4 border border-[#1F2922]/5">
                   <svg className="w-8 h-8 text-[#1F2922]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <p className="text-[#1F2922]/50 font-medium">No items in your cart</p>
              </div>

              {/* Coupon Widget */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1F2922]/5 flex items-start gap-4 cursor-pointer hover:border-[#9A5B40]/30 transition-colors">
                <div className="bg-[#E8DCC8] p-2.5 rounded-lg text-[#9A5B40]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.854 1.146a.5.5 0 00-.708 0L10.5 2.793 8.854 1.146a.5.5 0 00-.708 0L6.5 2.793 4.854 1.146a.5.5 0 00-.708 0l-2 2A.5.5 0 002 3.5v17a.5.5 0 00.146.354l2 2a.5.5 0 00.708 0L6.5 21.207l1.646 1.647a.5.5 0 00.708 0L10.5 21.207l1.646 1.647a.5.5 0 00.708 0l2-2A.5.5 0 0015 20.5v-17a.5.5 0 00-.146-.354l-2-2zM4 4.207l1.146 1.147a.5.5 0 00.708 0L7.5 3.707l1.646 1.647a.5.5 0 00.708 0L11.5 3.707l1.5 1.5V19.5l-1.146-1.146a.5.5 0 00-.708 0L9.5 20.293l-1.646-1.647a.5.5 0 00-.708 0L5.5 20.293l-1.146-1.146a.5.5 0 00-.708 0L2 17.5v-15l1.5-1.5zM17.5 10a.5.5 0 100-1 .5.5 0 000 1zm0 4a.5.5 0 100-1 .5.5 0 000 1zM20 7h-4a.5.5 0 000 1h4a.5.5 0 000-1zm0 4h-4a.5.5 0 000 1h4a.5.5 0 000-1zm0 4h-4a.5.5 0 000 1h4a.5.5 0 000-1z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2922] text-sm mb-1">Get ₹50 coupon</h4>
                  <p className="text-xs text-[#1F2922]/60">After first service delivery</p>
                </div>
              </div>

              {/* UC Promise Widget (Rebranded to EasyGo Promise) */}
              <div className="bg-[#25392D] rounded-2xl p-6 text-[#F5F2EA] shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full border border-[#9A5B40] flex items-center justify-center text-[10px] font-sans tracking-widest text-[#9A5B40] bg-[#F5F2EA]">
                    EG
                  </div>
                  <h3 className="font-serif text-xl">Promise</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Verified Professionals
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                    Hassle Free Booking
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg>
                    Transparent Pricing
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ServicePage;