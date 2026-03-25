import React from 'react';
import CategoryCard from './CategoryCard';
import { 
  Star, 
  Users, 
  Scissors, 
  Flower2, 
  Sparkles, 
  Palette, 
  Briefcase, 
  HandHeart 
} from 'lucide-react';

const categories = [
  { id: 1, title: 'Salon for Women', icon: Scissors },
  { id: 2, title: 'Spa for Women', icon: Flower2 },
  { id: 3, title: 'Hair Studio for Women', icon: Sparkles },
  { id: 4, title: 'Makeup, Saree & Styling', icon: Palette },
  { id: 5, title: 'Salon Prime for Men', icon: Briefcase },
  { id: 6, title: 'Massage for Men', icon: HandHeart },
];

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: Content and Card */}
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black">
            Beauty services <br className="hidden sm:block" /> at your doorstep
          </h1>

          {/* Interactive Service Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-black">What are you looking for?</h2>
            
            {/* 3x2 Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} title={cat.title} Icon={cat.icon} />
              ))}
            </div>

            {/* Bottom Stats Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Star className="text-green-600" size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-lg">4.8</p>
                  <p className="text-xs text-gray-500 font-medium">Service Rating</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">12M+</p>
                  <p className="text-xs text-gray-500 font-medium">Customers Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Pinterest-style Asymmetrical Image Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4 h-[600px] relative">
          
          {/* Column 1 (Pushed down slightly) */}
          <div className="flex flex-col gap-4 pt-12">
            <div className="h-64 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Salon" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Facial treatment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 2 (Pushed up slightly) */}
          <div className="flex flex-col gap-4 pb-12">
            <div className="h-80 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Makeup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Massage" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default HeroSection;