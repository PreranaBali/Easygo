import React, { useState } from 'react';
import { Star, ShieldCheck } from 'lucide-react';

// Premium dummy data specific to the Salon page
const SALON_CATEGORIES = ['Bestsellers', 'Facials & Cleanups', 'Waxing', 'Hair Care', 'Manicure'];

const SALON_SERVICES = [
  { id: 1, category: 'Bestsellers', name: 'Korean Glass Skin Facial', price: 1499, originalPrice: 2000, time: '60 mins', rating: '4.9', reviews: '12k', tag: 'MUST TRY', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=500&auto=format&fit=crop' },
  { id: 2, category: 'Bestsellers', name: 'Full Arms + Underarms Waxing', price: 499, originalPrice: 699, time: '45 mins', rating: '4.7', reviews: '18k', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=500&auto=format&fit=crop' },
  { id: 3, category: 'Facials & Cleanups', name: 'Deep Cleansing Fruit Facial', price: 899, originalPrice: 1200, time: '50 mins', rating: '4.8', reviews: '5k', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format&fit=crop' },
  { id: 4, category: 'Facials & Cleanups', name: 'Charcoal Peel-off Mask', price: 399, originalPrice: 500, time: '30 mins', rating: '4.6', reviews: '2k', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500&auto=format&fit=crop' },
  { id: 5, category: 'Hair Care', name: 'Advanced Hair Spa', price: 1299, originalPrice: 1800, time: '1 hr 15 mins', rating: '4.9', reviews: '8k', tag: 'RELAXING', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=500&auto=format&fit=crop' },
];

export default function ServiceList() {
  const [activeCategory, setActiveCategory] = useState('Bestsellers');
  const [cart, setCart] = useState({});

  // Filters the middle column based on what you click on the left
  const displayedServices = SALON_SERVICES.filter(s => s.category === activeCategory);

  const cartTotal = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateCart = (service, delta) => {
    setCart(prev => {
      const current = prev[service.id]?.quantity || 0;
      const newQty = Math.max(0, current + delta);
      if (newQty === 0) {
        const newCart = { ...prev };
        delete newCart[service.id];
        return newCart;
      }
      return { ...prev, [service.id]: { ...service, quantity: newQty } };
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-20 font-sans text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/60 py-8 px-6">
        <div className="max-w-[1280px] mx-auto flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop" alt="Salon" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2">Salon Luxe for Women</h1>
            <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1"><Star size={16} className="text-black fill-black" /> 4.89 (2M+ bookings)</span>
            </div>
          </div>
        </div>
      </div>

      {/* THE 3-COLUMN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-6 mt-8 flex items-start gap-8">
        
        {/* LEFT COLUMN: Static/Sticky Categories */}
        <aside className="w-1/4 max-w-[280px] sticky top-[100px] hidden md:block">
          <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-4 pt-2">Categories</h3>
            <nav className="flex flex-col gap-1">
              {SALON_CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-5 py-3.5 rounded-xl font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* MIDDLE COLUMN: Scrollable Services */}
        <main className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight mb-6">{activeCategory}</h2>
          
          <div className="flex flex-col gap-6">
            {displayedServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 border border-slate-100 flex gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
                
                {/* Service Details */}
                <div className="flex-1">
                  {service.tag && (
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md mb-3 inline-block">
                      {service.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-tight mb-2">{service.name}</h3>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="font-bold flex items-center gap-1"><Star size={14} className="text-black fill-black" /> {service.rating}</span>
                    <span className="text-slate-400">({service.reviews})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black">₹{service.price}</span>
                    <span className="text-sm text-slate-400 line-through">₹{service.originalPrice}</span>
                    <span className="text-sm text-slate-500 font-medium ml-2 flex items-center gap-1">⏱️ {service.time}</span>
                  </div>
                </div>

                {/* Service Image & Add Button */}
                <div className="w-[120px] shrink-0 flex flex-col items-center gap-3">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {!cart[service.id] ? (
                    <button 
                      onClick={() => updateCart(service, 1)}
                      className="w-full bg-slate-50 hover:bg-black hover:text-white border border-slate-200 text-slate-900 font-bold py-2 rounded-xl transition-colors shadow-sm text-sm"
                    >
                      Add
                    </button>
                  ) : (
                    <div className="w-full flex items-center bg-black text-white rounded-xl overflow-hidden shadow-md h-9">
                      <button onClick={() => updateCart(service, -1)} className="flex-1 h-full hover:bg-slate-800 font-black">-</button>
                      <span className="flex-1 text-center font-bold text-sm">{cart[service.id].quantity}</span>
                      <button onClick={() => updateCart(service, 1)} className="flex-1 h-full hover:bg-slate-800 font-black">+</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* RIGHT COLUMN: Static/Sticky Cart */}
        <aside className="w-1/3 max-w-[340px] sticky top-[100px] hidden lg:block">
          <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-6">
            <h2 className="text-xl font-black tracking-tight mb-6">Your Cart</h2>
            
            {Object.keys(cart).length === 0 ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={28} className="text-slate-300" />
                </div>
                <p className="font-bold text-slate-500">No items in your cart</p>
                <p className="text-sm text-slate-400 mt-1">Add services to get started</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {Object.values(cart).map(item => (
                  <div key={item.id} className="flex justify-between items-start pb-4 border-b border-slate-50">
                    <div className="w-2/3">
                      <p className="font-bold text-sm text-slate-800 leading-snug">{item.name}</p>
                      <p className="font-black text-slate-900 mt-1">₹{item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden h-8 w-20">
                      <button onClick={() => updateCart(item, -1)} className="flex-1 font-bold text-slate-600 hover:bg-slate-200">-</button>
                      <span className="flex-1 text-center font-bold text-xs">{item.quantity}</span>
                      <button onClick={() => updateCart(item, 1)} className="flex-1 font-bold text-slate-600 hover:bg-slate-200">+</button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-4">
                  <div className="flex justify-between text-slate-500 font-medium mb-2">
                    <span>Item Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between font-black text-xl text-slate-900 mt-4 border-t border-slate-100 pt-4">
                    <span>To Pay</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <button className="w-full bg-black text-white font-bold py-4 rounded-xl mt-6 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-300">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>

      </div>
    </div>
  );
}