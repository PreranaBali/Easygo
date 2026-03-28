import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiStar, FiShield, FiCheckCircle, FiX, FiChevronRight, FiChevronDown, FiImage } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

// Import your data
import { productPagesData, servicePagesData } from '../data/data';

// --- Framer Motion Shared Variants ---
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = ({ searchPlaceholder }) => (
  <nav className="fixed w-full top-0 z-50 bg-[#F9F8F6]/80 backdrop-blur-2xl border-b-[0.5px] border-[#2A4334]/10 transition-all duration-300">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer group">
        <span className="text-3xl italic group-hover:text-[#AA593E] transition-colors">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5 group-hover:text-[#AA593E] transition-colors">asygo</span>
      </div>
      
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border border-white rounded-full h-12 items-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#2A4334]/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#AA593E]/20">
        <div className="flex items-center px-5 border-r border-[#2A4334]/10 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2 shrink-0" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-5 flex-1">
          <FiSearch className="text-[#2A4334]/40 mr-2 shrink-0" size={16} />
          <input type="text" placeholder={searchPlaceholder} className="w-full text-sm outline-none bg-transparent text-[#2A4334] placeholder:text-[#2A4334]/40 font-medium" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</button>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. PRODUCT MODAL COMPONENT 
// ==========================================
const ProductModal = ({ product, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Glassmorphism Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#1F3327]/40 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal Content Window */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: customEase }}
            className="relative bg-[#F9F8F6] rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row z-10 border border-white"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2A4334] hover:bg-white hover:text-[#AA593E] hover:scale-110 active:scale-95 transition-all shadow-sm z-20"
            >
              <FiX size={20} />
            </button>

            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#E8DCCB] to-[#F9F8F6] p-10 flex items-center justify-center rounded-t-[2.5rem] md:rounded-l-[2.5rem] md:rounded-tr-none relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)]"></div>
              {product.image ? (
                <img src={product.image} alt={product.title} className="w-full max-w-[220px] object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 ease-out" />
              ) : (
                <FiImage className="opacity-10 text-[#2A4334] relative z-10" size={60} />
              )}
            </div>

            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col bg-white/50">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A4334] mb-3 leading-tight">{product.title}</h2>
              
              <div className="flex items-center gap-2 text-sm mb-6">
                <span className="bg-[#2A4334] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-sm text-xs">
                  {product.rating} <FiStar className="fill-white" size={10} />
                </span>
                <span className="text-[#2A4334]/60 font-medium">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#2A4334]/10 flex items-end gap-2">
                <span className="text-sm font-bold text-[#2A4334]/50 mb-1 uppercase tracking-wider">{product.priceLabel}</span>
                <span className="text-4xl font-black text-[#2A4334] tracking-tight leading-none">₹{product.price}</span>
              </div>

              <p className="text-[#2A4334]/70 text-sm leading-relaxed mb-8 font-medium">
                {product.description || "Premium appliance designed for efficiency and durability. Enjoy seamless integration into your modern lifestyle."}
              </p>

              <div className="mb-8 flex-grow">
                <h3 className="font-bold text-[#2A4334] uppercase tracking-widest text-xs mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product?.features?.length > 0 ? product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#2A4334]/80 font-medium">
                      <FiCheckCircle className="text-[#AA593E] mt-0.5 shrink-0 opacity-80" size={16} />
                      <span>{feature}</span>
                    </li>
                  )) : (
                    <li className="text-sm text-[#2A4334]/50 italic">Features data unavailable.</li>
                  )}
                </ul>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#AA593E] text-white font-bold uppercase tracking-widest py-4 rounded-full shadow-[0_8px_25px_rgba(170,89,62,0.25)] hover:bg-[#8a4731] transition-colors duration-300"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
const ProductPage = () => {
  const { categoryId } = useParams();

  const dataKey = categoryId || 'water_purifier';
  const pageData = productPagesData[dataKey]; 
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [categoryId]);

  if (!pageData) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F8F6] text-[#2A4334]">
      <h1 className="text-2xl font-serif">Category not found.</h1>
    </div>
  );

  const openDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E]/20 selection:text-[#AA593E] pt-24 pb-20 relative overflow-hidden">
      
      {/* Absolute background orbs for modern depth (Will not overlap footer) */}
      <div className="absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-100 z-0 mix-blend-overlay"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#AA593E]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#2A4334]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* <Navbar searchPlaceholder={pageData.searchPlaceholder} /> */}

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: HEADER INFO & SIDEBAR MENU */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="sticky top-28 space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A4334] mb-4 leading-tight tracking-tight">
                  {pageData.title}
                </h1>
                <div className="flex items-center gap-2 text-[#2A4334] mb-8 font-medium bg-white/50 w-fit px-4 py-2 rounded-full border border-white">
                  <span className="flex items-center gap-1 font-bold text-sm">
                     <FiStar className="fill-[#F59E0B] text-[#F59E0B]" size={14} /> {pageData.rating}
                  </span>
                  <span className="text-[#2A4334]/50 mx-1">•</span>
                  <span className="text-[#2A4334]/70 text-sm">
                    {pageData.bookings} models
                  </span>
                </div>
              </div>

              {/* Warranty Card */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between cursor-pointer group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#AA593E]/10 p-2 rounded-full text-[#AA593E]">
                    <FiCheckCircle size={16} />
                  </div>
                  <span className="text-xs font-bold text-[#2A4334]">Upto 1 year warranty</span>
                </div>
                <FiChevronRight className="text-gray-400 group-hover:text-[#AA593E] transition-colors" />
              </motion.div>

              {/* Dynamic Left Sidebar Menu */}
              {pageData.navCategories && (
                <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-white">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2A4334]/40 mb-3 px-4 pt-2">Categories</h3>
                  <div className="flex flex-col gap-1">
                    {pageData.navCategories.map((link, idx) => (
                      <motion.div 
                        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,1)" }}
                        key={idx} 
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
              )}
            </motion.div>
          </div>

          {/* ========================================== */}
          {/* CENTER COLUMN: PRODUCT LIST */}
          {/* ========================================== */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-4 md:p-6 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white"
            >
              <div className="px-4 pt-4 mb-4">
                <h2 id="models" className="text-2xl md:text-3xl font-serif font-bold text-[#2A4334] flex items-center gap-3">
                  Available Models <span className="h-[2px] w-12 bg-[#AA593E] rounded-full inline-block opacity-50"></span>
                </h2>
              </div>
              
              <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col">
                {pageData.models?.map((product, idx) => (
                  <motion.div 
                    variants={fadeUp}
                    layout
                    key={product.id} 
                    className="p-6 md:p-8 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-[#2A4334]/5 transition-all duration-300 flex flex-col sm:flex-row gap-8 group relative"
                  >
                    
                    {/* Left: Product Text Info */}
                    <div className="flex-1 order-2 sm:order-1">
                      <h3 className="text-2xl font-serif font-bold text-[#2A4334] mb-3 group-hover:text-[#AA593E] transition-colors leading-tight">{product.title}</h3>
                      
                      <div className="flex items-center gap-2 text-xs mb-5">
                        <span className="bg-[#2A4334] text-white px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                          {product.rating} <FiStar className="fill-white" size={10} />
                        </span>
                        <span className="text-[#2A4334]/50 font-medium">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="mb-5 flex items-end gap-2">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-bold text-[#2A4334]/50 uppercase tracking-widest mb-1">{product.priceLabel}</span>
                           <span className="font-black text-[#2A4334] text-2xl leading-none">₹{product.price}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => openDetails(product)}
                        className="text-[#AA593E] text-xs font-bold flex items-center gap-1 hover:opacity-70 transition-all bg-[#AA593E]/5 px-4 py-2 rounded-full w-fit"
                      >
                        View full details <FiChevronRight />
                      </button>
                    </div>

                    {/* Right: Product Image & Interactive Add Button */}
                    <div className="w-full sm:w-[180px] flex flex-col items-center shrink-0 order-1 sm:order-2">
                      <div 
                        onClick={() => openDetails(product)}
                        className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-[#F9F8F6] to-[#E8DCCB]/40 flex items-center justify-center p-5 relative border-2 border-white cursor-pointer group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
                      >
                        {product.image ? (
                           <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-md relative z-10" />
                        ) : (
                           <FiImage className="opacity-10 text-[#2A4334]" size={40} />
                        )}
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative -mt-4 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-[0_8px_20px_rgba(170,89,62,0.15)] font-bold text-xs uppercase tracking-wider px-10 py-2.5 rounded-full hover:bg-[#AA593E] hover:text-white transition-colors duration-300 z-10"
                      >
                        Add +
                      </motion.button>
                      <span className="text-[10px] text-[#2A4334]/50 font-semibold mt-3 text-center">{product.options}</span>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: STICKY CART & OFFERS */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="sticky top-28 space-y-6"
            >
              
              {/* Empty Cart Container */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white shadow-[0_10px_40px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center text-center h-56 transition-all duration-300">
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm border border-[#2A4334]/5 opacity-60 mix-blend-multiply"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" alt="Cart" className="w-8 h-8 object-contain" />
                </motion.div>
                <h3 className="font-bold text-[#2A4334] text-lg mb-1">Cart is empty</h3>
                <p className="text-sm font-medium text-[#2A4334]/50">Select a model to proceed.</p>
              </div>

              {/* Offers Box */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer group transition-all"
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#E8DCCB]/50 rounded-full flex items-center justify-center shrink-0 text-[#AA593E] group-hover:bg-[#AA593E] group-hover:text-white transition-colors duration-300">
                    <span className="font-black text-lg">%</span>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-[#2A4334]">Flat 10% off upto ₹1000</h4>
                    <p className="text-xs font-semibold text-[#2A4334]/50 mt-1">Axis Bank CC Full Swipe</p>
                  </div>
                </div>
                <div className="text-[#AA593E] text-xs font-bold flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform bg-[#AA593E]/5 w-fit px-3 py-1.5 rounded-full">
                  View More Offers <FiChevronDown />
                </div>
              </motion.div>

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

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProductPage;