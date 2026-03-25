import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Clock } from 'lucide-react';
import { CATEGORIES, POPULAR_SERVICES } from '../data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24 font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. PREMIUM HERO BANNER */}
      {/* The image acts as a massive, beautiful header, with the categories floating over the bottom */}
      <section className="relative w-full h-[480px] bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
          alt="Home Services" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FA] via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
            Quality home services, <br/> on demand.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl drop-shadow-md">
            Experienced, hand-picked professionals to serve you at your doorstep.
          </p>
        </div>
      </section>

      {/* 2. FLOATING CATEGORY DOCK */}
      {/* This grid overlaps the hero image for a deeply layered, native-app feel */}
      <section className="max-w-[1000px] mx-auto px-6 relative -mt-24 z-10">
        <div className="bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] p-4 md:p-8 border border-white/60 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {CATEGORIES.map((cat) => (
              <Link 
                to="/services" 
                key={cat.id} 
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`w-[72px] h-[72px] rounded-[24px] ${cat.bg} flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md border border-slate-50`}>
                  {cat.icon}
                </div>
                <span className="font-bold text-slate-700 text-xs md:text-sm text-center tracking-tight group-hover:text-black transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST BANNER */}
      {/* Small details like this build extreme user trust */}
      <section className="max-w-[1000px] mx-auto px-6 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-8 py-6 border-y border-slate-200/60">
          <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
            <Star size={20} className="text-black" /> 4.8+ Average Rating
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
            <ShieldCheck size={20} className="text-black" /> 100% Background Verified
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
            <Clock size={20} className="text-black" /> On-time Guarantee
          </div>
        </div>
      </section>

      {/* 4. PREMIUM SERVICE CARDS */}
      <section className="max-w-[1280px] mx-auto px-6 mt-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Bestsellers</h2>
            <p className="text-slate-500 font-medium mt-1">Our most booked services this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_SERVICES.map((service) => (
            <Link 
              to="/booking" 
              key={service.id} 
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-6 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1 text-slate-800 font-bold bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                    <Star size={14} className="text-black fill-black" /> {service.rating}
                  </span>
                  <span>({service.reviews})</span>
                  <span>•</span>
                  <span>{service.time}</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100">
                  <span className="font-black text-2xl text-slate-900 tracking-tight">₹{service.price}</span>
                  <button className="bg-slate-50 text-slate-900 border border-slate-200 px-6 py-2.5 rounded-xl font-bold text-sm group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </div>
  );
}