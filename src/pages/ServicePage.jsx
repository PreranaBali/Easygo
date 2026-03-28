import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiStar, FiChevronDown, FiShield, FiCheckCircle, FiImage, FiX } from 'react-icons/fi';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

// Import your master data and Cart Context
import { servicePagesData } from '../data/data';
import { useCart } from '../context/CartContext'; 

// --- Refined Framer Motion Variants ---
// Using custom easing for a "silky smooth" Apple-like feel
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};

// ==========================================
// 2. UNIFIED SERVICE ITEM CARD
// ==========================================
const ServiceItem = ({ 
  id, title, rating, reviews, price, originalPrice, priceLabel, priceSuffix, 
  duration, discount, options, details, image, imageTag, badge, isBestseller 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart(); 

  const handleAddClick = () => {
    const itemData = {
      id: id || title,
      title,
      price: price === "Flexible" ? 0 : price,
      image
    };
    addToCart(itemData);
  };

  return (
    <motion.div 
      layout
      variants={fadeUp} 
      // Modern interactive card: soft hover states, rounded corners
      className="p-4 md:p-6 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-[#2A4334]/5 transition-all duration-300 flex gap-4 md:gap-6 relative group"
    >
      <div className="flex-1">
        {/* Badges - Modernized to sleek pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {isBestseller && <span className="bg-[#AA593E]/10 text-[#AA593E] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#AA593E]/20">Bestseller</span>}
          {discount && <span className="bg-[#2A4334] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">{discount}</span>}
        </div>
        
        <h3 className="text-xl font-serif text-[#2A4334] font-bold leading-snug mb-2 group-hover:text-[#AA593E] transition-colors">{title}</h3>
        
        {rating && (
          <div className="flex items-center gap-1.5 text-xs text-[#2A4334]/70 mb-3">
            <FiStar className="fill-[#F59E0B] text-[#F59E0B]" size={14} />
            <span className="font-bold text-[#2A4334]">{rating}</span>
            <span>({reviews} reviews)</span>
          </div>
        )}
        
        <div className="flex items-end flex-wrap gap-2 mb-3">
          {priceLabel && <span className="text-xs font-semibold text-[#2A4334]/60 mb-0.5">{priceLabel}</span>}
          <span className="font-bold text-[#2A4334] text-lg leading-none">{price === "Flexible" ? price : `₹${price}`}</span>
          {originalPrice && <span className="text-sm text-gray-400 line-through mb-0.5">₹{originalPrice}</span>}
          {priceSuffix && <span className="text-xs text-[#2A4334]/60 mb-0.5">{priceSuffix}</span>}
          {duration && <span className="text-xs text-[#2A4334]/50 mb-0.5 font-medium px-2 py-0.5 bg-[#F9F8F6] rounded-md">• {duration}</span>}
        </div>

        {details && details.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-[#2A4334]/70 mb-4">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <FiCheckCircle className="text-[#AA593E] mt-1 opacity-70" size={12} /> 
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#AA593E] text-xs font-bold mt-2 flex items-center gap-1 hover:opacity-70 transition-opacity bg-[#AA593E]/5 px-3 py-1.5 rounded-full"
        >
          {showDetails ? 'Hide details' : 'View details'}
          <motion.div animate={{ rotate: showDetails ? 180 : 0 }} transition={{ duration: 0.4, ease: customEase }}>
            <FiChevronDown />
          </motion.div>
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="overflow-hidden"
            >
              <div className="p-5 bg-[#F9F8F6] rounded-2xl border border-[#2A4334]/5 text-sm text-[#2A4334]/80 shadow-inner">
                <p className="font-bold mb-3 text-[#2A4334]">Service Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2A4334]/30" /> Comprehensive diagnostic check.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2A4334]/30" /> Use of professional grade tools.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2A4334]/30" /> Post-service cleanup area.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] relative shrink-0 flex flex-col items-center">
        {/* Modern Image Container */}
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#E8DCCB] relative border-2 border-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-500">
          {(imageTag || badge) && (
            <div className="absolute top-0 w-full bg-white/80 backdrop-blur-md text-[#2A4334] text-[9px] font-bold uppercase tracking-widest text-center py-1.5 z-10 border-b border-white/50">
              {imageTag || badge}
            </div>
          )}
          {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          ) : (
             <div className="w-full h-full bg-gradient-to-br from-white to-[#F9F8F6] flex items-center justify-center p-4">
                <FiImage className="opacity-10 text-[#2A4334]" size={40} />
             </div>
          )}
        </div>
        
        {/* Floating Add Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddClick}
          className="absolute -bottom-4 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-[0_8px_20px_rgba(170,89,62,0.15)] font-bold text-xs uppercase px-8 py-2.5 rounded-full hover:bg-[#AA593E] hover:text-white transition-colors duration-300 z-10"
        >
          Add +
        </motion.button>
        {options && (
          <span className="absolute -bottom-9 text-[10px] text-[#2A4334]/50 font-medium whitespace-nowrap">{options}</span>
        )}
      </div>
    </motion.div>
  );
};

// ==========================================
// 3. MAIN SERVICE PAGE COMPONENT
// ==========================================
const DynamicServicePage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const dataKey = categoryId || 'laptop';
  const pageData = servicePagesData[dataKey];
  const { hash } = useLocation();
  
  const { cart, getCartTotal, removeFromCart } = useCart();

  useEffect(() => {
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
      <div className="min-h-screen flex items-center justify-center bg-[#F9F8F6] text-[#2A4334]">
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
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E]/20 selection:text-[#AA593E] pt-24 pb-20 relative overflow-hidden">
      
      {/* Refined background orbs for modern depth */}
      <div className="absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-100 z-0 mix-blend-overlay"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#AA593E]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#2A4334]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative">
          
          {/* LEFT COLUMN: SIDEBAR */}
          {isSidebarLayout && (
            <div className="hidden lg:block lg:col-span-3 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: customEase }}
                className="sticky top-28 space-y-6"
              >
                <div>
                  <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2A4334] mb-4 tracking-tight leading-tight">{pageData.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-[#2A4334]/70 mb-8 bg-white/50 w-fit px-4 py-2 rounded-full border border-white">
                    <FiStar className="fill-[#F59E0B] text-[#F59E0B]" size={16} />
                    <span className="font-bold text-[#2A4334]">{pageData.rating}</span>
                    <span>({pageData.bookings} bookings)</span>
                  </div>
                </div>

                {pageData.navCategories.length > 2 ? (
                  <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-white">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2A4334]/40 mb-3 px-4 pt-2">Categories</h3>
                    <div className="flex flex-col gap-1">
                      {pageData.navCategories.map((link, idx) => (
                        <motion.div 
                          whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,1)" }}
                          key={idx} 
                          onClick={() => scrollToSection(link.id)} 
                          className="flex items-center gap-4 cursor-pointer p-3 rounded-2xl transition-all border border-transparent hover:shadow-sm group"
                        >
                          <div className="w-10 h-10 bg-[#F9F8F6] rounded-xl flex items-center justify-center group-hover:bg-[#AA593E]/5 transition-colors">
                             <img src={link.icon} alt={link.name} className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300" />
                          </div>
                          <span className="text-sm font-bold text-[#2A4334]/70 group-hover:text-[#AA593E] transition-colors">{link.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </div>
          )}

          <div className={isSidebarLayout ? "lg:col-span-6" : "lg:col-span-8"}>
            
            {/* HERO BANNER */}
            {isSidebarLayout && pageData.heroImage && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: customEase }}
                className="w-full bg-[#E8DCCB] rounded-[2.5rem] overflow-hidden mb-12 relative group cursor-pointer shadow-[0_20px_40px_rgb(0,0,0,0.06)] border-4 border-white flex items-center h-[260px]"
              >
                <div className="p-8 md:p-10 w-3/5 z-10">
                  <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#2A4334] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#AA593E] animate-pulse" /> INSTANT
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A4334] leading-tight mb-3">
                    {pageData.heroTitle}
                  </h2>
                  <p className="text-[#2A4334]/70 font-medium text-sm max-w-sm">{pageData.heroSubtitle}</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-[4rem] overflow-hidden">
                  <img src={pageData.heroImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Hero" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8DCCB] via-[#E8DCCB]/40 to-transparent"></div>
                </div>
              </motion.div>
            )}

            {/* DYNAMIC SECTIONS RENDERING */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {pageData.sections.map((section, idx) => (
                <section key={idx} id={section.id || section.title.replace(/\s+/g, '-').toLowerCase()} className="mb-14">
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#2A4334] px-2">{section.title}</motion.h2>
                  
                  {section.banner && (
                    <motion.div variants={fadeUp} className="w-full h-56 bg-[#E8DCCB] rounded-[2rem] mb-8 overflow-hidden relative group cursor-pointer shadow-lg border-2 border-white">
                      <img src={section.banner.image} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" alt={section.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A4334]/90 via-[#2A4334]/20 to-transparent"></div>
                      <div className="absolute bottom-8 left-8">
                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Featured</span>
                        <h3 className="text-white font-serif text-3xl drop-shadow-md">{section.banner.title}</h3>
                      </div>
                    </motion.div>
                  )}

                  {/* Refined Wrapper for Service Items */}
                  <motion.div variants={fadeUp} className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-2 md:p-3 border border-white shadow-[0_8px_40px_rgb(0,0,0,0.04)]">
                    {section.items.map((item, itemIdx) => (
                       <ServiceItem key={itemIdx} {...item} />
                    ))}
                  </motion.div>
                </section>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: CART */}
          <div className={isSidebarLayout ? "hidden lg:block lg:col-span-3 relative" : "lg:col-span-4 relative"}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="sticky top-28 space-y-6"
            >
              {/* DYNAMIC CART CONTAINER */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 border border-white shadow-[0_10px_40px_rgb(0,0,0,0.06)] flex flex-col relative overflow-hidden">
                <div className="relative z-10">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center h-56">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm border border-[#2A4334]/5"
                      >
                        <FiSearch className="text-[#2A4334]/20" size={28} />
                      </motion.div>
                      <h3 className="font-bold text-[#2A4334] text-lg mb-1">Cart is empty</h3>
                      <p className="text-sm text-[#2A4334]/50">Select a service to proceed.</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif font-bold text-[#2A4334] text-xl">Your Cart</h3>
                        <span className="bg-[#AA593E] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">{cart.length}</span>
                      </div>
                      
                      <div className="space-y-4 max-h-[320px] overflow-y-auto hide-scrollbar pr-2 mb-2">
                        <AnimatePresence>
                          {cart.map((item, idx) => (
                            <motion.div 
                              layout
                              initial={{ opacity: 0, scale: 0.95, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, x: -20 }}
                              transition={{ duration: 0.3 }}
                              key={idx} 
                              className="flex justify-between items-center gap-3 bg-white p-3 rounded-2xl border border-[#2A4334]/5 shadow-sm"
                            >
                              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#F9F8F6]">
                                {item.image && <img src={item.image} className="w-full h-full object-cover" alt="" />}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-[#2A4334] leading-tight mb-1 truncate max-w-[120px]">{item.title}</h4>
                                <div className="text-xs font-bold text-[#AA593E]">
                                  {item.price === 0 ? "Flexible Quote" : `₹${item.price}`} <span className="text-[#2A4334]/40 font-semibold ml-1">x {item.quantity}</span>
                                </div>
                              </div>
                              <motion.button 
                                whileHover={{ scale: 1.1, backgroundColor: "#fee2e2", color: "#ef4444" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.title)} 
                                className="text-[#2A4334]/30 bg-gray-50 p-2 rounded-full transition-colors"
                              >
                                <FiX size={14} />
                              </motion.button>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                      
                      <motion.div layout className="pt-6 border-t border-[#2A4334]/10 mt-2">
                        <div className="flex justify-between items-end mb-6">
                          <span className="font-bold text-[#2A4334]/60 text-sm">Total Amount</span>
                          <span className="font-black text-3xl text-[#2A4334] leading-none">₹{getCartTotal()}</span>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#2A4334] text-white font-bold uppercase tracking-widest py-4 rounded-full shadow-[0_10px_30px_rgba(42,67,52,0.25)] hover:bg-[#1e3025] transition-colors"
                          onClick={() => navigate('/cart')}
                        >
                          Checkout Now
                        </motion.button>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>

              {/* Enhanced Guarantees Box */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#AA593E]/5 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif font-bold text-[#2A4334] text-xl">The EasyGo Promise</h3>
                    <div className="w-10 h-10 bg-[#AA593E]/10 text-[#AA593E] rounded-full flex items-center justify-center">
                      <FiShield size={18} />
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {['Verified Professionals', 'Hassle Free Booking', 'Transparent Pricing'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#2A4334]/80">
                        <div className="bg-green-100 p-1.5 rounded-full"><FiCheckCircle className="text-green-600" size={14} /></div> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </main>

      {/* Global CSS injected */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default DynamicServicePage;