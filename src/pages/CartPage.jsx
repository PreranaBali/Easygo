import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiPlus, FiMinus, FiTrash2, FiShield, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

// --- Shared Animation Variants ---
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



const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Mock State for UI interactions
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('');

  const itemTotal = getCartTotal();
  const taxesAndFees = cart.length > 0 ? 49 : 0; 
  const grandTotal = itemTotal + taxesAndFees;

  const handleCheckout = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

    const userDetails = {
      user_id: "user_12345", 
      address: "Apt 4B, Serenity Towers, 3 Norris Road",
      city: "Bangalore",
      booking_date: new Date().toISOString() 
    };

    try {
      const bookingPromises = cart.map(async (item) => {
        const cleanPrice = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
        const finalAmount = cleanPrice * (item.quantity || 1);

        const bookingPayload = {
          user_id: userDetails.user_id,
          category_id: "home_services", 
          subcategory_id: "makeover",
          service_id: item.title,
          package_id: item.id || item.title, 
          addon_ids: [], 
          booking_date: userDetails.booking_date,
          address: userDetails.address,
          city: userDetails.city,
          total_amount: finalAmount 
        };

        const response = await fetch(`${API_BASE_URL}/api/bookings/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingPayload)
        });

        if (!response.ok) throw new Error(`Failed to book ${item.title}`);
        return response.json();
      });

      await Promise.all(bookingPromises);
      alert("Booking successful! Your professionals have been assigned.");
      navigate('/bookings/my/user_12345'); 

    } catch (error) {
      console.error("Checkout Error:", error);
      alert("There was an issue processing your booking. Please try again.");
    }
  };

  // --- EMPTY STATE VIEW ---
  if (cart.length === 0) {
    return (
      <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pt-24 flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-80 z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: customEase }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2A4334]/5"
          >
            <FiMapPin className="text-[#2A4334]/20" size={48} />
          </motion.div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-[#2A4334]">Your cart is empty</h2>
          <p className="text-[#2A4334]/60 mb-10 max-w-sm text-center font-medium text-lg">Looks like you haven't added any services to your sanctuary yet.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-[#2A4334] text-white font-bold uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_8px_25px_rgba(42,67,52,0.25)] hover:bg-[#1a2a21] transition-colors"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // --- POPULATED CART VIEW ---
  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pt-8 pb-20 relative overflow-hidden">
      
      {/* Background Orbs for Depth */}
      <div className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-100 z-0 mix-blend-overlay"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-[#AA593E]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="max-w-[1300px] mx-auto px-4 md:px-8 py-8 relative z-10">
        
        <motion.button 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-[#2A4334]/50 hover:text-[#AA593E] transition-colors mb-8 font-bold text-xs uppercase tracking-widest bg-white/50 w-fit px-4 py-2 rounded-full border border-white"
        >
          <FiArrowLeft /> Back to services
        </motion.button>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#2A4334] mb-10 tracking-tight"
        >
          Secure Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: CART ITEMS & DETAILS */}
          {/* ========================================== */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="lg:col-span-7 space-y-8">
            
            {/* 1. Cart Items List */}
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white">
              <h2 className="text-2xl font-serif font-bold text-[#2A4334] mb-6 flex items-center gap-3">
                Service Details <span className="h-[2px] w-8 bg-[#AA593E] rounded-full opacity-50"></span>
              </h2>
              
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.4, ease: customEase }}
                      key={item.title} 
                      className="flex gap-4 md:gap-6 items-center bg-white p-4 rounded-[2rem] border border-[#2A4334]/5 shadow-sm group"
                    >
                      {/* Item Image */}
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-[#F9F8F6] shrink-0 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                      </div>
                      
                      {/* Item Info */}
                      <div className="flex-1 py-1">
                        <h3 className="font-bold text-[#2A4334] leading-snug mb-1 text-base md:text-lg">{item.title}</h3>
                        <div className="text-xl font-black text-[#2A4334] mb-4">
                           {item.price === 0 ? "Flexible Quote" : `₹${item.price}`}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-[#F9F8F6] rounded-full border border-[#2A4334]/5 p-1 shadow-inner">
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.title, -1)} 
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#2A4334] shadow-sm hover:text-[#AA593E] transition-colors disabled:opacity-30" 
                              disabled={item.quantity <= 1}
                            >
                              <FiMinus size={14} />
                            </motion.button>
                            <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.title, 1)} 
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#2A4334] shadow-sm hover:text-[#AA593E] transition-colors"
                            >
                              <FiPlus size={14} />
                            </motion.button>
                          </div>
                          <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "#fee2e2", color: "#ef4444" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.title)} 
                            className="text-[#2A4334]/30 bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                          >
                            <FiTrash2 size={16} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* 2. Date & Time Selection */}
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white">
              <h2 className="text-2xl font-serif font-bold text-[#2A4334] mb-8 flex items-center gap-3">
                Schedule Service <span className="h-[2px] w-8 bg-[#AA593E] rounded-full opacity-50"></span>
              </h2>
              
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4 flex items-center gap-2"><FiCalendar size={14} /> Select Date</p>
                <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 px-1">
                  {['Today', 'Tomorrow', 'Fri, 14 Nov', 'Sat, 15 Nov'].map(date => (
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`shrink-0 px-6 py-3.5 rounded-[1rem] font-bold text-sm transition-all duration-300 ${
                        selectedDate === date 
                          ? 'border-2 border-[#AA593E] bg-[#AA593E]/5 text-[#AA593E] shadow-sm' 
                          : 'border border-[#2A4334]/10 bg-white text-[#2A4334]/70 hover:border-[#AA593E]/30'
                      }`}
                    >
                      {date}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/50 mb-4 flex items-center gap-2"><FiClock size={14} /> Select Time</p>
                <div className="grid grid-cols-3 gap-3">
                  {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(time => (
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3.5 rounded-[1rem] font-bold text-sm transition-all duration-300 ${
                        selectedTime === time 
                          ? 'border-2 border-[#AA593E] bg-[#AA593E] text-white shadow-[0_4px_15px_rgba(170,89,62,0.3)]' 
                          : 'border border-[#2A4334]/10 bg-white text-[#2A4334]/70 hover:border-[#AA593E]/30'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3. Address Selection */}
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#2A4334] flex items-center gap-3">
                  Service Address <span className="h-[2px] w-8 bg-[#AA593E] rounded-full opacity-50"></span>
                </h2>
                <button className="text-[#AA593E] text-xs font-bold uppercase tracking-wider bg-[#AA593E]/5 px-4 py-2 rounded-full hover:bg-[#AA593E]/10 transition-colors">Change</button>
              </div>
              
              <div className="flex gap-5 items-start bg-white p-5 rounded-[1.5rem] border border-[#2A4334]/5 shadow-sm">
                <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center shrink-0">
                  <FiMapPin className="text-[#AA593E]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A4334] text-lg mb-1">Home</h4>
                  <p className="text-sm text-[#2A4334]/70 leading-relaxed font-medium">
                    Apt 4B, Serenity Towers<br />
                    3 Norris Road, Richmond Town<br />
                    Bangalore, 560025
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: BILL SUMMARY */}
          {/* ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: customEase }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-28">
              
              <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_12px_50px_rgb(0,0,0,0.06)] border border-white mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#2A4334] mb-8">Bill Summary</h2>
                
                <div className="space-y-4 text-sm mb-6 border-b border-[#2A4334]/10 pb-8">
                  <div className="flex justify-between text-[#2A4334]/70 font-medium">
                    <span>Item Total ({cart.length} items)</span>
                    <span className="font-bold text-[#2A4334]">₹{itemTotal}</span>
                  </div>
                  <div className="flex justify-between text-[#2A4334]/70 font-medium">
                    <span>Taxes & Platform Fees</span>
                    <span className="font-bold text-[#2A4334]">₹{taxesAndFees}</span>
                  </div>
                  <div className="flex justify-between text-[#AA593E] font-bold bg-[#AA593E]/5 p-3 rounded-xl">
                    <span className="flex items-center gap-2"><FiCheckCircle /> EasyGo Member Discount</span>
                    <span>- ₹50</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-10">
                  <span className="font-bold text-sm text-[#2A4334]/60 uppercase tracking-widest">Grand Total</span>
                  <motion.span 
                    key={grandTotal}
                    initial={{ scale: 1.1, color: '#AA593E' }}
                    animate={{ scale: 1, color: '#2A4334' }}
                    className="font-black text-4xl leading-none"
                  >
                    ₹{grandTotal - 50 > 0 ? grandTotal - 50 : 0}
                  </motion.span>
                </div>

                <motion.button 
                  whileHover={selectedTime ? { scale: 1.02 } : {}}
                  whileTap={selectedTime ? { scale: 0.98 } : {}}
                  disabled={!selectedTime}
                  onClick={handleCheckout} 
                  className={`w-full font-bold uppercase tracking-widest py-5 rounded-full shadow-xl transition-all duration-300 relative overflow-hidden ${
                    selectedTime 
                      ? 'bg-[#2A4334] text-white hover:bg-[#1a2a21] shadow-[0_10px_30px_rgba(42,67,52,0.3)]' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  {selectedTime ? 'Proceed to Payment' : 'Select a Time Slot'}
                </motion.button>
                
                <AnimatePresence>
                  {!selectedTime && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      className="text-center text-xs text-red-400 mt-4 font-bold tracking-wide"
                    >
                      Please select a time slot to continue.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust Badge */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 border border-white shadow-sm flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <FiShield className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A4334] text-[15px] mb-0.5">Safe & Secure Payment</h4>
                  <p className="text-xs text-[#2A4334]/60 font-medium">Your data is encrypted using banking-grade security.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default CartPage;