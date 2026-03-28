import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiClock, FiPlus, FiMinus, FiTrash2, FiShield, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

// Reusing your Navbar for consistency
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b-[0.5px] border-[#2A4334]/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <span className="text-3xl italic">E</span>
          <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70">Secure Checkout</span>
          <FiShield className="text-[#AA593E]" size={20} />
        </div>
      </div>
    </nav>
  );
};

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Mock State for UI interactions
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('');

  const itemTotal = getCartTotal();
  const taxesAndFees = cart.length > 0 ? 49 : 0; // Mock platform fee
  const grandTotal = itemTotal + taxesAndFees;
  // 1. Add this function inside your CartPage component
const handleCheckout = async () => {
  // Pull the URL from the env file, with a fallback just in case
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const userDetails = {
    user_id: "user_12345", 
    address: "Apt 4B, Serenity Towers, 3 Norris Road",
    city: "Bangalore",
    booking_date: new Date().toISOString() 
  };

  try {
    const bookingPromises = cart.map(async (item) => {
      
      // 1. THE FIX: Strip out all letters, commas, and symbols. 
      // If it's a word like "Flexible", it gracefully falls back to 0.
      const cleanPrice = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
      const finalAmount = cleanPrice * (item.quantity || 1);

      // 2. Build the payload with the clean, guaranteed number
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
        total_amount: finalAmount // <--- This will now always be a valid number!
      };

      const response = await fetch(`${API_BASE_URL}/api/bookings/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingPayload)
      });

      if (!response.ok) {
        throw new Error(`Failed to book ${item.title}`);
      }

      return response.json();
    });

    await Promise.all(bookingPromises);
    
    alert("Booking successful! Your professionals have been assigned.");
    // clearCart(); 
    navigate('/bookings/my/user_12345'); 

  } catch (error) {
    console.error("Checkout Error:", error);
    alert("There was an issue processing your booking. Please try again.");
  }
};

  // Empty State View
  if (cart.length === 0) {
    return (
      <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pt-24 flex flex-col items-center justify-center">
        <Navbar />
        <div className="w-24 h-24 bg-[#E8DCCB] rounded-full flex items-center justify-center mb-6">
          <FiMapPin className="text-[#AA593E] opacity-50" size={40} />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-3 text-[#2A4334]">Your cart is empty</h2>
        <p className="text-[#2A4334]/60 mb-8 max-w-sm text-center">Looks like you haven't added any services to your cart yet.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#AA593E] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-md hover:bg-[#8a4731] transition-colors"
        >
          Explore Services
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pt-24 pb-20">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 animate-fade-in">
        
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#2A4334]/60 hover:text-[#AA593E] transition-colors mb-6 font-bold text-sm uppercase tracking-widest">
          <FiArrowLeft /> Back to services
        </button>

        <h1 className="text-4xl font-serif font-bold text-[#2A4334] mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: CART ITEMS & DETAILS */}
          {/* ========================================== */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Cart Items List */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#2A4334]/5">
              <h2 className="text-xl font-bold text-[#2A4334] mb-6 border-b border-[#2A4334]/10 pb-4">Service Details</h2>
              
              <div className="space-y-6">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6 items-center">
                    {/* Item Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-[#E8DCCB] shrink-0 border border-[#2A4334]/5">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Item Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2A4334] leading-snug mb-1">{item.title}</h3>
                      <div className="text-lg font-bold text-[#2A4334] mb-3">
                         {item.price === 0 ? "Flexible Quote" : `₹${item.price}`}
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-[#F6F4EE] rounded-lg border border-[#2A4334]/10">
                          <button onClick={() => updateQuantity(item.title, -1)} className="p-2 text-[#2A4334] hover:text-[#AA593E] transition-colors disabled:opacity-30" disabled={item.quantity <= 1}>
                            <FiMinus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.title, 1)} className="p-2 text-[#2A4334] hover:text-[#AA593E] transition-colors">
                            <FiPlus size={16} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.title)} className="text-[#2A4334]/40 hover:text-red-500 transition-colors p-2">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Date & Time Selection */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#2A4334]/5">
              <h2 className="text-xl font-bold text-[#2A4334] mb-6 border-b border-[#2A4334]/10 pb-4">Schedule Service</h2>
              
              <div className="mb-6">
                <p className="text-sm font-bold text-[#2A4334]/70 mb-3 flex items-center gap-2"><FiCalendar /> Select Date</p>
                <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                  {['Today', 'Tomorrow', 'Fri, 14 Nov', 'Sat, 15 Nov'].map(date => (
                    <button 
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`shrink-0 px-6 py-3 rounded-xl border font-bold text-sm transition-colors ${
                        selectedDate === date 
                          ? 'border-[#AA593E] bg-[#AA593E]/5 text-[#AA593E]' 
                          : 'border-[#2A4334]/10 text-[#2A4334]/70 hover:border-[#AA593E]/40'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-[#2A4334]/70 mb-3 flex items-center gap-2"><FiClock /> Select Time</p>
                <div className="grid grid-cols-3 gap-3">
                  {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border font-bold text-sm transition-colors ${
                        selectedTime === time 
                          ? 'border-[#AA593E] bg-[#AA593E] text-white' 
                          : 'border-[#2A4334]/10 text-[#2A4334]/70 hover:border-[#AA593E]/40'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Address Selection */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#2A4334]/5">
              <div className="flex justify-between items-center mb-6 border-b border-[#2A4334]/10 pb-4">
                <h2 className="text-xl font-bold text-[#2A4334]">Service Address</h2>
                <button className="text-[#AA593E] text-sm font-bold hover:underline">Change</button>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <FiMapPin className="text-[#AA593E]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A4334] mb-1">Home</h4>
                  <p className="text-sm text-[#2A4334]/70 leading-relaxed">
                    Apt 4B, Serenity Towers<br />
                    3 Norris Road, Richmond Town<br />
                    Bangalore, 560025
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: BILL SUMMARY */}
          {/* ========================================== */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#2A4334]/5 mb-6">
                <h2 className="text-xl font-bold text-[#2A4334] mb-6">Bill Summary</h2>
                
                <div className="space-y-4 text-sm mb-6 border-b border-[#2A4334]/10 pb-6">
                  <div className="flex justify-between text-[#2A4334]/80">
                    <span>Item Total ({cart.length} items)</span>
                    <span className="font-semibold text-[#2A4334]">₹{itemTotal}</span>
                  </div>
                  <div className="flex justify-between text-[#2A4334]/80">
                    <span>Taxes & Fees</span>
                    <span className="font-semibold text-[#2A4334]">₹{taxesAndFees}</span>
                  </div>
                  <div className="flex justify-between text-[#AA593E] font-semibold">
                    <span>EasyGo Discount</span>
                    <span>- ₹50</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-lg text-[#2A4334]">Grand Total</span>
                  <span className="font-bold text-2xl text-[#2A4334]">₹{grandTotal - 50 > 0 ? grandTotal - 50 : 0}</span>
                </div>

                <button 
                disabled={!selectedTime}
                onClick={handleCheckout} // <--- ATTACH FUNCTION HERE
                className="w-full bg-gradient-to-r from-[#AA593E] to-[#8a4731] text-white font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                {selectedTime ? 'Proceed to Payment' : 'Select a Time Slot'}
                </button>
                {!selectedTime && <p className="text-center text-xs text-red-400 mt-3 font-medium">Please select a time slot to continue.</p>}
              </div>

              {/* Trust Badge */}
              <div className="bg-[#E8DCCB]/40 rounded-2xl p-5 border border-[#2A4334]/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <FiShield className="text-[#AA593E]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A4334] text-sm">Safe & Secure</h4>
                  <p className="text-xs text-[#2A4334]/60 mt-0.5">Your payment data is encrypted and secure.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </div>
  );
};

export default CartPage;