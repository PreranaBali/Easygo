import React from 'react';

export default function Sidebar({ categories, activeCategory, setActiveCategory }) {
  
  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName);
    const element = document.getElementById(categoryName);
    if (element) {
      // Smoothly scroll down to the section, offsetting for the top navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden md:block w-1/4 max-w-[280px] h-fit sticky top-28">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Luxe Salon for Women</h1>
      <div className="flex items-center gap-1 mb-8 text-sm">
        <span className="font-bold text-gray-800">★ 4.89</span>
        <span className="text-gray-500 underline">(1.8 M bookings)</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <p className="text-sm text-gray-500 font-medium mb-4">Select a service</p>
        
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => scrollToCategory(cat.name)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-[70px] h-[70px] rounded-xl overflow-hidden transition-all ${
                activeCategory === cat.name ? 'ring-2 ring-black ring-offset-2' : 'bg-gray-50 group-hover:shadow-md'
              }`}>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className={`text-[10px] text-center leading-tight ${
                activeCategory === cat.name ? 'font-bold text-black' : 'font-medium text-gray-600'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}