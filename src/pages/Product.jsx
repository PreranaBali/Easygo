import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiStar, FiShield, FiCheckCircle, FiX, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

// Import your data
import { productPagesData, servicePagesData } from '../data/data';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = ({ searchPlaceholder }) => (
  <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/80 backdrop-blur-lg border-b-[0.5px] border-[#2A4334]/10 transition-all duration-300">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer group">
        <span className="text-3xl italic group-hover:text-[#AA593E] transition-colors">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5 group-hover:text-[#AA593E] transition-colors">asygo</span>
      </div>
      
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border border-[#2A4334]/10 rounded-full h-12 items-center shadow-sm hover:shadow-md hover:border-[#2A4334]/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#AA593E]/20">
        <div className="flex items-center px-4 border-r border-[#2A4334]/10 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2 shrink-0" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-4 flex-1">
          <FiSearch className="text-gray-400 mr-2 shrink-0" size={16} />
          <input type="text" placeholder={searchPlaceholder} className="w-full text-sm outline-none bg-transparent text-[#2A4334]" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

// ==========================================
// 2. PRODUCT MODAL COMPONENT 
// ==========================================
const ProductModal = ({ product, isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) setIsAnimating(true);
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Glassmorphism Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1F3327]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content Window */}
      <div 
        className={`relative bg-[#F6F4EE] rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row z-10 transition-all duration-500 ease-out transform ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'}`}
        onTransitionEnd={() => { if (!isOpen) setIsAnimating(false); }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2A4334] hover:bg-white hover:text-[#AA593E] transition-all shadow-sm z-20 hover:scale-110 active:scale-95"
        >
          <FiX size={20} />
        </button>

        <div className="w-full md:w-2/5 bg-gradient-to-br from-[#E8DCCB] to-[#F6F4EE] p-10 flex items-center justify-center rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
          <img src={product.image} alt={product.title} className="w-full max-w-[220px] object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
          <h2 className="text-3xl font-serif font-bold text-[#2A4334] mb-2 leading-tight">{product.title}</h2>
          
          <div className="flex items-center gap-2 text-sm mb-6">
            <span className="bg-[#2A4334] text-white px-2.5 py-1 rounded-md font-bold flex items-center gap-1 shadow-sm">
              {product.rating} <FiStar className="fill-white" size={12} />
            </span>
            <span className="text-[#2A4334]/60 font-medium">({product.reviews} reviews)</span>
          </div>

          <div className="mb-6 pb-6 border-b border-[#2A4334]/10 flex items-end gap-2">
            <span className="text-sm font-semibold text-[#2A4334]/60 mb-1">{product.priceLabel}</span>
            <span className="text-4xl font-bold text-[#2A4334] tracking-tight">₹{product.price}</span>
          </div>

          <p className="text-[#2A4334]/80 text-sm leading-relaxed mb-8 font-medium">
            {product.description}
          </p>

          <div className="mb-8 flex-grow">
            <h3 className="font-bold text-[#2A4334] uppercase tracking-widest text-xs mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product?.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#2A4334]/80 font-medium">
                  <FiCheckCircle className="text-[#AA593E] mt-0.5 shrink-0" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-gradient-to-r from-[#AA593E] to-[#8a4731] text-white font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-[#AA593E]/20 hover:shadow-[#AA593E]/40 hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
const ProductPage = () => {
  const { categoryId } = useParams();

  // Try to find the data in productPagesData first. If not found, fall back to water_purifier.
  // You can adjust this to pull from servicePagesData if you want to reuse this template for services.
  const dataKey = categoryId || 'water_purifier';
  
  // NOTE: If you are using this file to render "Chimney", make sure "chimney" is inside productPagesData in your data.js file!
  const pageData = productPagesData[dataKey]; 
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center text-2xl font-serif">Category not found.</div>;

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
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] selection:bg-[#AA593E] selection:text-white pt-24 overflow-hidden">
      <Navbar searchPlaceholder={pageData.searchPlaceholder} />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: HEADER INFO & SIDEBAR MENU */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative animate-fade-in">
            <div className="sticky top-28 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A4334] mb-4 leading-tight tracking-tight">
                  {pageData.title}
                </h1>
                <div className="flex items-center gap-3 text-[#2A4334] mb-8 font-medium">
                  <span className="bg-[#AA593E] text-white px-2.5 py-1 rounded-md text-sm font-bold flex items-center gap-1 shadow-sm">
                    <FiStar className="fill-white" size={12} /> {pageData.rating}
                  </span>
                  <span className="text-[#2A4334]/60 text-sm border-b border-[#2A4334]/20 pb-0.5 border-dashed cursor-pointer hover:text-[#AA593E] transition-colors">
                    ({pageData.bookings})
                  </span>
                </div>
              </div>

              {/* Warranty Card */}
              <div className="bg-white border border-[#2A4334]/10 rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#AA593E]/30 transition-colors">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#AA593E]" size={16} />
                  <span className="text-xs font-semibold text-[#2A4334]">Upto 180 days warranty</span>
                </div>
                <FiChevronRight className="text-gray-400 group-hover:text-[#AA593E] transition-colors" />
              </div>

              {/* Dynamic Left Sidebar Menu (Requires navCategories array in your data) */}
              {pageData.navCategories && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2A4334]/5">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4">Select a service</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {pageData.navCategories.map((link, idx) => (
                      <div key={idx} className="flex flex-col items-center cursor-pointer group p-2 rounded-xl hover:bg-[#F6F4EE] transition-colors">
                        <div className="w-12 h-12 bg-[#F6F4EE] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                           <img src={link.icon} alt={link.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[11px] text-center font-medium leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E]">{link.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ========================================== */}
          {/* CENTER COLUMN: PRODUCT LIST */}
          {/* ========================================== */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2A4334]/5 animate-slide-up">
            <h2 id="models" className="text-3xl font-serif font-bold mb-8 text-[#2A4334] flex items-center gap-3">
              Models <span className="h-[2px] w-12 bg-[#AA593E] rounded-full inline-block"></span>
            </h2>
            
            <div className="flex flex-col">
              {/* Optional Chaining (?.) added here to prevent crashes if models is undefined */}
              {pageData.models?.map((product, idx) => (
                <div 
                  key={product.id} 
                  className={`py-10 flex flex-col sm:flex-row gap-8 group animate-staggered-item`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  
                  {/* Left: Product Text Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2A4334] mb-3 group-hover:text-[#AA593E] transition-colors">{product.title}</h3>
                    
                    <div className="flex items-center gap-2 text-xs mb-5">
                      <span className="bg-[#2A4334] text-white px-2 py-0.5 rounded-sm font-bold flex items-center gap-1">
                        <FiStar className="fill-white" size={10} /> {product.rating}
                      </span>
                      <span className="text-[#2A4334]/60 border-b border-[#2A4334]/20 border-dashed pb-0.5 cursor-pointer hover:text-[#AA593E] transition-colors">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="mb-5">
                      <span className="text-xs font-bold text-[#2A4334]/60 uppercase tracking-wider block mb-1">{product.priceLabel}</span>
                      <span className="font-bold text-[#2A4334] text-2xl tracking-tight">₹{product.price}</span>
                    </div>

                    <button 
                      onClick={() => openDetails(product)}
                      className="text-[#AA593E] text-sm font-bold flex items-center gap-1 hover:text-[#8a4731] hover:gap-2 transition-all duration-300"
                    >
                      View full details <FiChevronRight />
                    </button>
                  </div>

                  {/* Right: Product Image & Interactive Add Button */}
                  <div className="w-full sm:w-[180px] flex flex-col items-center shrink-0">
                    <div 
                      onClick={() => openDetails(product)}
                      className="w-full aspect-square rounded-2xl bg-gradient-to-b from-[#F6F4EE] to-[#E8DCCB]/50 flex items-center justify-center p-5 relative border border-[#2A4334]/5 cursor-pointer group-hover:border-[#AA593E]/40 group-hover:shadow-lg transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg relative z-10" />
                    </div>
                    
                    <button className="relative -mt-5 bg-white text-[#AA593E] border border-[#AA593E]/20 shadow-lg font-bold text-sm uppercase tracking-widest px-12 py-3 rounded-xl hover:bg-[#AA593E] hover:text-white hover:shadow-[#AA593E]/30 hover:-translate-y-1 transition-all duration-300 z-10 w-[95%]">
                      Add
                    </button>
                    <span className="text-xs text-[#2A4334]/50 font-medium mt-4">{product.options}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: STICKY CART & OFFERS */}
          {/* ========================================== */}
          <div className="hidden lg:block lg:col-span-3 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-white rounded-[2rem] p-8 border border-[#2A4334]/5 shadow-sm flex flex-col items-center justify-center text-center h-48 transition-transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 mb-4 opacity-40 grayscale mix-blend-multiply transition-opacity hover:opacity-80">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" alt="Cart" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-medium text-[#2A4334]/60">No items in your cart</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#E8DCCB]/50 rounded-full flex items-center justify-center shrink-0 text-[#AA593E] group-hover:bg-[#AA593E] group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-lg">%</span>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-[#2A4334]">Flat 10% off upto ₹1000</h4>
                    <p className="text-xs text-[#2A4334]/60 mt-1">Axis Bank CC Full Swipe</p>
                  </div>
                </div>
                <div className="text-[#AA593E] text-xs font-bold flex items-center gap-1 mt-4 group-hover:pl-1 transition-all">
                  View More Offers <FiChevronDown />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#2A4334]/5 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <h3 className="font-serif font-bold text-[#2A4334] text-lg">The EasyGo Promise</h3>
                </div>
                <ul className="space-y-3 relative z-10">
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
                <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-[#E8DCCB] to-[#AA593E]/20 rounded-full flex items-center justify-center shadow-inner opacity-80 group-hover:scale-110 transition-transform duration-500">
                  <FiShield className="text-[#AA593E]" size={20} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      {/* --- CUSTOM CSS ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0; 
        }

        .animate-staggered-item {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
};

export default ProductPage;