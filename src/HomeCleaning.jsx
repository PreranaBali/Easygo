import React from 'react';
import { BsDot, BsPlus } from 'react-icons/bs';
import { FiChevronRight, FiClock } from 'react-icons/fi';
import { MdOutlineApartment, MdHouseSiding } from 'react-icons/md';
import { BiSprayCan } from 'react-icons/bi';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- DATA FROM VIDEO (Accurate mapping) ---
const serviceData = {
  apartment: [
    {
      id: 'a1',
      title: 'Furnished apartment',
      rating: '4.81',
      reviews: '103K reviews',
      priceText: 'Starts at ₹3,499',
      duration: '5 hrs 45 mins',
      bullets: [
        'Cleaning & stain removal from rooms, kitchen, bathroom & balcony',
        'Machine floor scrubbing & dusting of walls & ceilings'
      ],
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'a2',
      title: 'Unfurnished apartment',
      rating: '4.81',
      reviews: '131K reviews',
      priceText: 'Starts at ₹3,199',
      duration: '5 hrs',
      bullets: [
        'Cleaning & stain removal from rooms, kitchen, bathroom & balcony',
        'Machine floor scrubbing & dusting of walls & ceilings'
      ],
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80'
    }
  ],
  bungalow: [
    {
      id: 'b1',
      title: 'Furnished bungalow',
      rating: '4.81',
      reviews: '131K reviews',
      priceText: 'Starts at ₹4,199',
      duration: '6 hrs 50 mins',
      bullets: [
        'Ideal for furnished, occupied homes.',
        'Machine floor scrubbing & stain removal across rooms, kitchen, baths & balcony.'
      ],
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'b2',
      title: 'Unfurnished bungalow',
      rating: '4.81',
      reviews: '146K reviews',
      priceText: 'Starts at ₹3,999',
      duration: '6 hrs',
      bullets: [
        'Ideal for vacant, unoccupied homes.',
        'Machine floor scrubbing & stain removal across rooms, kitchen, baths & balcony.'
      ],
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80'
    }
  ],
  miniServices: [
    {
      id: 'm1',
      title: 'Kitchen appliances cleaning',
      rating: '4.81',
      reviews: '61K reviews',
      priceText: 'Starts at ₹99',
      bullets: ['Deep cleaning of chimney, fridge, microwave, or stove (all sides)'],
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
      optionsCount: 6
    },
    {
      id: 'm2',
      title: 'Sofa & upholstery wet shampooing',
      rating: '4.82',
      reviews: '32K reviews',
      priceText: 'Starts at ₹149',
      bullets: ['Includes wet vacuuming with shampoo'],
      img: 'https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?auto=format&fit=crop&w=400&q=80',
      optionsCount: 6
    },
    {
      id: 'm3',
      title: 'Utensil removal & placement',
      rating: '4.81',
      reviews: '2K reviews',
      priceText: '₹399',
      duration: '20 mins',
      bullets: ['Includes utensil removal & placement for upto 2 kitchen cabinets'],
      img: 'https://images.unsplash.com/photo-1556693682-019623e13d96?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm4',
      title: 'Cabinet cleaning (upto 2)',
      rating: '4.83',
      reviews: '1K reviews',
      priceText: '₹299',
      duration: '30 mins',
      bullets: ['Includes interior & exterior cleaning of upto 2 cabinets'],
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm5',
      title: 'Furniture wet wiping',
      rating: '4.81',
      reviews: '3K reviews',
      priceText: '₹499',
      duration: '1 hr 30 mins',
      bullets: ['Includes wet wiping of upto 2 tables, 5 chairs & 1 bed'],
      img: 'https://images.unsplash.com/photo-1505693416022-14c1c9240ce4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm6',
      title: 'Ceiling dusting & cobweb cleaning',
      rating: '4.84',
      reviews: '46K reviews',
      priceText: '₹199',
      duration: '30 mins',
      bullets: [
        'Includes cobweb removal & dry dusting of ceiling for 1 room',
        'Excludes wet wiping & paint removal'
      ],
      img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=400&q=80'
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
        <span className="text-[#1F2922]/50 text-xs font-sans">({item.reviews})</span>
      </div>

      <div className="flex items-center gap-3 font-sans mb-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1F2922] text-sm">
            {item.priceText}
          </span>
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
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-md border border-[#1F2922]/5 bg-[#E8DCC8]">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
const FullHomeCleaning = () => {
  return (
    <div className="bg-[#F5F2EA] min-h-screen font-sans selection:bg-[#9A5B40] selection:text-white pb-24">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8">
        
        {/* HERO HEADER */}
        <div className="mb-12 border-b border-[#1F2922]/10 pb-12 flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1F2922] mb-4 leading-tight">
              Full Home/ Move-in Cleaning
            </h1>
            <div className="flex items-center gap-2 text-[#1F2922] mb-10 font-medium">
              <svg className="w-5 h-5 text-[#9A5B40]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span className="text-xl">4.82</span>
              <span className="text-[#1F2922]/50 text-sm font-normal ml-1">(1.6 M bookings)</span>
            </div>

            <div className="bg-white/60 p-6 rounded-2xl border border-[#1F2922]/5 shadow-sm">
              <p className="text-xs text-[#1F2922]/50 font-bold tracking-widest uppercase mb-4">Select a service</p>
              <div className="flex gap-6 overflow-x-auto hide-scrollbar">
                
                {/* Tab: Apartment */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group">
                  <div className="w-16 h-16 rounded-2xl border-2 border-[#9A5B40] bg-white flex items-center justify-center shadow-sm transition-transform group-hover:-translate-y-1">
                     <MdOutlineApartment size={28} className="text-[#9A5B40]" />
                  </div>
                  <span className="text-xs font-bold text-[#1F2922] text-center">Apartment</span>
                </div>

                {/* Tab: Bungalow */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group opacity-70 hover:opacity-100">
                  <div className="w-16 h-16 rounded-2xl border border-[#1F2922]/10 bg-white flex items-center justify-center transition-transform group-hover:-translate-y-1">
                     <MdHouseSiding size={28} className="text-[#1F2922]/70" />
                  </div>
                  <span className="text-xs font-medium text-[#1F2922] text-center">Bungalow/duplex</span>
                </div>

                {/* Tab: Mini Services */}
                <div className="flex flex-col items-center gap-3 cursor-pointer min-w-[90px] group opacity-70 hover:opacity-100">
                  <div className="w-16 h-16 rounded-2xl border border-[#1F2922]/10 bg-white flex items-center justify-center transition-transform group-hover:-translate-y-1">
                     <BiSprayCan size={28} className="text-[#1F2922]/70" />
                  </div>
                  <span className="text-xs font-medium text-[#1F2922] text-center">Mini services</span>
                </div>

              </div>
            </div>
          </div>

          {/* Hero Decorative Area */}
          <div className="flex-[1.2] w-full hidden md:block">
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-[#1F2922]/5 relative group bg-[#E8DCC8]">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" alt="Full home clean" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2922]/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-[#F5F2EA]">
                <p className="text-3xl font-serif mb-1">Pristine Spaces.</p>
                <p className="text-sm opacity-80 font-sans">Comprehensive deep cleaning for your sanctuary.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Service Lists */}
          <div className="flex-1">
            
            {/* Apartment Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-[#1F2922] mb-6">Apartment</h2>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1F2922]/5">
                {serviceData.apartment.map(item => <ServiceCard key={item.id} item={item} />)}
              </div>
            </section>

            {/* Bungalow Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-[#1F2922] mb-6">Bungalow/duplex</h2>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1F2922]/5">
                {serviceData.bungalow.map(item => <ServiceCard key={item.id} item={item} />)}
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
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1F2922]/5 flex items-start gap-4 cursor-pointer hover:border-[#9A5B40]/30 transition-colors group">
                <div className="bg-[#E8DCC8]/50 p-2.5 rounded-lg text-[#9A5B40] group-hover:bg-[#9A5B40] group-hover:text-[#F5F2EA] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.854 1.146a.5.5 0 00-.708 0L10.5 2.793 8.854 1.146a.5.5 0 00-.708 0L6.5 2.793 4.854 1.146a.5.5 0 00-.708 0l-2 2A.5.5 0 002 3.5v17a.5.5 0 00.146.354l2 2a.5.5 0 00.708 0L6.5 21.207l1.646 1.647a.5.5 0 00.708 0L10.5 21.207l1.646 1.647a.5.5 0 00.708 0l2-2A.5.5 0 0015 20.5v-17a.5.5 0 00-.146-.354l-2-2zM4 4.207l1.146 1.147a.5.5 0 00.708 0L7.5 3.707l1.646 1.647a.5.5 0 00.708 0L11.5 3.707l1.5 1.5V19.5l-1.146-1.146a.5.5 0 00-.708 0L9.5 20.293l-1.646-1.647a.5.5 0 00-.708 0L5.5 20.293l-1.146-1.146a.5.5 0 00-.708 0L2 17.5v-15l1.5-1.5zM17.5 10a.5.5 0 100-1 .5.5 0 000 1zm0 4a.5.5 0 100-1 .5.5 0 000 1zM20 7h-4a.5.5 0 000 1h4a.5.5 0 000-1zm0 4h-4a.5.5 0 000 1h4a.5.5 0 000-1zm0 4h-4a.5.5 0 000 1h4a.5.5 0 000-1z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2922] text-sm mb-1">Get ₹50 coupon</h4>
                  <p className="text-xs text-[#1F2922]/60">After first service delivery</p>
                </div>
              </div>

              {/* EasyGo Promise Widget */}
              <div className="bg-[#25392D] rounded-2xl p-6 text-[#F5F2EA] shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5F2EA]/10">
                  <div className="w-8 h-8 rounded-full border border-[#9A5B40] flex items-center justify-center text-[10px] font-sans tracking-widest text-[#9A5B40] bg-[#F5F2EA]">
                    EG
                  </div>
                  <h3 className="font-serif text-xl tracking-wide">Promise</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-sans tracking-wide">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Verified Professionals
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans tracking-wide">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    Safe Chemicals
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans tracking-wide">
                    <svg className="w-5 h-5 text-[#9A5B40]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    Superior Stain Removal
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

export default FullHomeCleaning;