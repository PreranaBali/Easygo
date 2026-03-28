import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiStar, FiChevronDown, FiShield, FiCheckCircle, FiChevronRight, FiVideo, FiX } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useParams, useLocation } from 'react-router-dom';

// Import your master data and Cart Context
import { servicePagesData } from '../data/data';
import { useCart } from '../context/CartContext'; 

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = ({ searchPlaceholder }) => (
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
          <input type="text" placeholder={searchPlaceholder} className="w-full text-sm outline-none bg-transparent text-[#2A4334]" defaultValue={searchPlaceholder} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. UNIFIED SERVICE ITEM CARD
// ==========================================
const ServiceItem = ({ 
  id, title, rating, reviews, price, originalPrice, priceLabel, priceSuffix, 
  duration, discount, options, details, image, imageTag, badge, isBestseller 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart(); // Hook into the Cart Context

  const handleAddClick = () => {
    // Package item data for the cart
    const itemData = {
      id: id || title, // Use unique ID if available, fallback to title
      title,
      price: price === "Flexible" ? 0 : price, // Handle flexible pricing logic
      image
    };
    addToCart(itemData);
  };

  return (
    <div className="py-6 border-b-[0.5px] border-[#2A4334]/10 flex gap-4 md:gap-6 relative group">
      <div className="flex-1">
        {/* Badges */}
        {isBestseller && <span className="bg-[#AA593E]/10 text-[#AA593E] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block">Bestseller</span>}
        {discount && <span className="bg-[#2A4334] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block ml-2">{discount}</span>}
        
        <h3 className="text-lg font-serif text-[#2A4334] font-semibold leading-snug mb-1 group-hover:text-[#AA593E] transition-colors">{title}</h3>
        
        {rating && (
          <div className="flex items-center gap-1.5 text-xs text-[#2A4334]/70 mb-2">
            <FiStar className="fill-[#AA593E] text-[#AA593E]" size={12} />
            <span className="font-bold text-[#2A4334]">{rating}</span>
            <span>({reviews} reviews)</span>
          </div>
        )}
        
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {priceLabel && <span className="text-xs font-semibold text-[#2A4334]/70">{priceLabel}</span>}
          <span className="font-bold text-[#2A4334]">{price === "Flexible" ? price : `₹${price}`}</span>
          {originalPrice && <span className="text-xs text-gray-400 line-through">₹{originalPrice}</span>}
          {priceSuffix && <span className="text-xs text-[#2A4334]/70">{priceSuffix}</span>}
          {duration && <span className="text-xs text-[#2A4334]/60">• {duration}</span>}
        </div>

        {/* Dynamic Bullet Points */}
        {details && details.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-xs text-[#2A4334]/80 font-medium mb-3">
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
          <div className="mt-4 p-4 bg-[#F6F4EE] rounded-lg text-xs text-[#2A4334]/70 animate-fade-in">
            <p className="font-semibold mb-1">Service Includes:</p>
            <ul className="space-y-1">
              <li>- Comprehensive diagnostic check and service.</li>
              <li>- Use of professional grade tools and materials.</li>
              <li>- Post-service cleanup of the surrounding area.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] relative shrink-0 flex flex-col items-center mt-2 md:mt-0">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#E8DCCB] relative border border-[#2A4334]/10">
          {(imageTag || badge) && (
            <div className="absolute top-0 w-full bg-[#2A4334] text-white text-[9px] font-bold uppercase tracking-widest text-center py-1 z-10">
              {imageTag || badge}
            </div>
          )}
          {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
             <div className="w-full h-full bg-white flex items-center justify-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/3565/3565575.png" alt="Icon" className="opacity-20 w-1/2" />
             </div>
          )}
        </div>
        
        {/* ADD TO CART ACTION */}
        <button 
          onClick={handleAddClick}
          className="absolute -bottom-3 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-md font-bold text-xs uppercase px-8 py-2 rounded-lg hover:bg-[#AA593E] hover:text-white transition-colors z-10 active:scale-95"
        >
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
// 3. MAIN SERVICE PAGE COMPONENT
// ==========================================
const DynamicServicePage = () => {
  const { categoryId } = useParams();
  const dataKey = categoryId || 'laptop';
  const pageData = servicePagesData[dataKey];
  const { hash } = useLocation();
  
  // Bring in Cart Context for the Right Sidebar
  const { cart, getCartTotal, removeFromCart } = useCart();

  useEffect(() => {
    // Safety check to ensure scrolling is enabled
    document.body.style.overflow = 'unset';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); 
    }
  }, [categoryId, hash]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F4EE] text-[#2A4334]">
        <h1 className="text-2xl font-serif">Service category not found.</h1>
      </div>
    );
  }

  const isSidebarLayout = !!pageData.navCategories;
  const categoriesList = isSidebarLayout ? pageData.navCategories : pageData.topNavCategories;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E] selection:text-white pt-24">
      <Navbar searchPlaceholder={pageData.searchPlaceholder} />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: SIDEBAR */}
          {/* ========================================== */}
          {isSidebarLayout && (
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-28 space-y-6">
                <div>
                  <h1 className="text-4xl font-serif font-bold text-[#2A4334] mb-3">{pageData.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-[#2A4334]/80 mb-6">
                    <FiStar className="fill-[#AA593E] text-[#AA593E]" size={16} />
                    <span className="font-bold text-[#2A4334]">{pageData.rating}</span>
                    <span>({pageData.bookings})</span>
                  </div>
                </div>

                <div className="bg-white border border-[#2A4334]/10 rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#AA593E]/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#AA593E]" size={16} />
                    <span className="text-xs font-semibold text-[#2A4334]">Upto 180 days warranty</span>
                  </div>
                  <FiChevronRight className="text-gray-400 group-hover:text-[#AA593E] transition-colors" />
                </div>

                {pageData.navCategories.length > 2 ? (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2A4334]/5">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4">Select a service</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {pageData.navCategories.map((link, idx) => (
                        <div key={idx} onClick={() => scrollToSection(link.id)} className="flex flex-col items-center cursor-pointer group p-2 rounded-xl hover:bg-[#F6F4EE] transition-colors">
                          <div className="w-12 h-12 bg-[#F6F4EE] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                             <img src={link.icon} alt={link.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-[11px] text-center font-medium leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E]">{link.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button onClick={() => scrollToSection(pageData.navCategories[0].id)} className="w-full bg-[#AA593E] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl shadow-md hover:bg-[#8a4731] transition-colors">
                    View Services
                  </button>
                )}
              </div>
            </div>
          )}

          <div className={isSidebarLayout ? "lg:col-span-6" : "lg:col-span-8"}>
            
            {/* Header info for Non-Sidebar Layouts */}
            {!isSidebarLayout && (
              <div className="mb-8 border-b border-[#2A4334]/10 pb-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2A4334] mb-3 leading-tight">{pageData.title}</h1>
                  <div className="flex items-center gap-2 text-[#2A4334] mb-8 font-medium">
                    <FiStar className="fill-[#AA593E] text-[#AA593E]" size={20} />
                    <span className="text-xl">{pageData.rating}</span>
                    <span className="text-[#2A4334]/50 text-sm font-normal ml-1">({pageData.bookings})</span>
                  </div>

                  <div className="bg-white/60 p-6 rounded-2xl border border-[#2A4334]/5 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4">Select a service</h3>
                    <div className="flex overflow-x-auto gap-6 hide-scrollbar">
                      {categoriesList?.map((cat, idx) => (
                        <div key={idx} onClick={() => scrollToSection(cat.name.replace(/\s+/g, '-').toLowerCase())} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform border border-[#2A4334]/10 group-hover:border-[#AA593E]">
                             <img src={cat.icon} alt={cat.name} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-[11px] text-center font-semibold leading-tight text-[#2A4334] group-hover:text-[#AA593E]">{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {pageData.heroImage && (
                  <div className="flex-[1.2] w-full hidden md:block">
                    <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-[#2A4334]/5 relative group bg-[#E8DCCB]">
                      <img src={pageData.heroImage} alt={pageData.heroTitle} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A4334]/90 via-transparent to-transparent opacity-90"></div>
                      <div className="absolute bottom-6 left-6 text-[#F6F4EE]">
                        <p className="text-3xl font-serif mb-1 leading-tight">{pageData.heroTitle}</p>
                        {pageData.heroSubtitle && <p className="text-sm opacity-90 font-sans mt-1">{pageData.heroSubtitle}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Hero Banner for Sidebar Layouts */}
            {isSidebarLayout && pageData.heroImage && (
              <div className="w-full bg-[#E8DCCB] rounded-2xl overflow-hidden mb-12 relative group cursor-pointer shadow-sm border border-[#2A4334]/5 flex items-center h-[220px]">
                <div className="p-8 w-3/5 z-10">
                  <div className="inline-flex items-center gap-1.5 bg-[#2A4334] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                    <FiCheckCircle size={12} /> INSTANT
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2A4334] leading-tight mb-2">
                    {pageData.heroTitle}
                  </h2>
                  <p className="text-[#2A4334]/70 font-medium">{pageData.heroSubtitle}</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-2/5">
                  <img src={pageData.heroImage} className="w-full h-full object-cover" alt="Hero" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8DCCB] to-transparent"></div>
                </div>
              </div>
            )}

            {/* DYNAMIC SECTIONS RENDERING */}
            {pageData.sections.map((section, idx) => (
              <section key={idx} id={section.id || section.title.replace(/\s+/g, '-').toLowerCase()} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#2A4334]">{section.title}</h2>
                
                {section.banner && (
                  <div className="w-full h-40 bg-[#D5D8D2] rounded-xl mb-6 overflow-hidden relative group cursor-pointer">
                    <img src={section.banner.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={section.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A4334]/80 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white font-serif text-xl">{section.banner.title}</h3>
                  </div>
                )}

                <div className="bg-white rounded-[1.5rem] p-6 border border-[#2A4334]/5 shadow-sm space-y-2">
                  {section.items.map((item, itemIdx) => (
                     <ServiceItem key={itemIdx} {...item} />
                  ))}
                </div>
              </section>
            ))}

          </div>


          {/* ========================================== */}
          {/* RIGHT COLUMN: STICKY CART & GUARANTEES */}
          {/* ========================================== */}
          <div className={isSidebarLayout ? "hidden lg:block lg:col-span-3 relative" : "lg:col-span-4 relative"}>
            <div className="sticky top-28 space-y-6">
              
              {/* DYNAMIC CART CONTAINER */}
              <div className="bg-white rounded-[2rem] p-6 border border-[#2A4334]/5 shadow-sm flex flex-col">
                {cart.length === 0 ? (
                  // EMPTY STATE
                  <div className="flex flex-col items-center justify-center text-center h-40">
                    <div className="w-12 h-12 bg-[#F6F4EE] rounded-full flex items-center justify-center mb-4">
                      <FiSearch className="text-[#2A4334]/40" size={20} />
                    </div>
                    <h3 className="font-bold text-[#2A4334] mb-1">No items in your cart</h3>
                    <p className="text-xs text-[#2A4334]/60">Select a service to proceed.</p>
                  </div>
                ) : (
                  // FILLED STATE
                  <>
                    <h3 className="font-bold text-[#2A4334] mb-4 font-serif text-lg">Your Cart</h3>
                    <div className="space-y-4 max-h-[300px] overflow-y-auto hide-scrollbar">
                      {cart.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start gap-2 border-b border-[#2A4334]/5 pb-3">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[#2A4334] leading-tight mb-1">{item.title}</h4>
                            <div className="text-xs font-bold text-[#2A4334]">
                              {item.price === 0 ? "Flexible Quote" : `₹${item.price}`} <span className="text-[#2A4334]/50 font-normal">x {item.quantity}</span>
                            </div>
                          </div>
                          <button onClick={() => removeFromCart(item.title)} className="text-[#2A4334]/40 hover:text-red-500 mt-0.5">
                            <FiX size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 mt-2 border-t border-[#2A4334]/10">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-[#2A4334]">Total</span>
                        <span className="font-bold text-xl text-[#2A4334]">₹{getCartTotal()}</span>
                      </div>
                      <button className="w-full bg-[#AA593E] text-white font-bold uppercase tracking-widest py-3 rounded-xl shadow-md hover:bg-[#8a4731] transition-colors active:scale-95">
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Guarantees */}
              <div className="bg-white rounded-2xl p-5 border border-[#2A4334]/5 shadow-sm flex items-start gap-4 cursor-pointer hover:border-[#AA593E]/30 transition-colors group">
                <div className="w-10 h-10 bg-[#E8DCCB] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#AA593E] group-hover:text-white transition-colors text-[#AA593E]">
                  <span className="font-bold text-lg">%</span>
                </div>
                <div className="mt-1">
                  <h4 className="text-sm font-bold text-[#2A4334]">Get ₹50 coupon</h4>
                  <p className="text-xs text-[#2A4334]/60 mt-0.5">After first service delivery</p>
                </div>
              </div>

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


      
      {/* Global CSS injected */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}} />
    </div>
  );
};

export default DynamicServicePage;