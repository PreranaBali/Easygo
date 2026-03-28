import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiCheckCircle, FiXCircle, FiLoader, FiArrowLeft, FiPackage, FiShield } from 'react-icons/fi';

// Import your frontend data to grab the images!
import { servicePagesData } from '../data/data';

// --- Shared Framer Motion Variants ---
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};



// --- HELPER: Find image from frontend data ---
const SERVICE_FALLBACKS = {
  cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop",
  plumbing: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=400&auto=format&fit=crop",
  electrical: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
  painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=400&auto=format&fit=crop",
  pest: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=400&auto=format&fit=crop",
  appliance: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
  ac: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=400&auto=format&fit=crop",
  carpentry: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=400&auto=format&fit=crop",
  moving: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=400&auto=format&fit=crop",
  gardening: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
  salon: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1170&auto=format&fit=crop",
  massage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
};

const getSmartFallback = (serviceTitle = "") => {
  const title = serviceTitle.toLowerCase();
  const keywordMap = [
    { keywords: ["clean", "sweep", "mop", "sanitiz", "disinfect", "wash"], key: "cleaning" },
    { keywords: ["plumb", "pipe", "leak", "tap", "drain", "water"], key: "plumbing" },
    { keywords: ["electric", "wir", "switch", "fan", "light", "circuit", "fuse"], key: "electrical" },
    { keywords: ["paint", "wall", "colour", "color", "polish"], key: "painting" },
    { keywords: ["pest", "cockroach", "termite", "mosquito", "rodent", "fumig"], key: "pest" },
    { keywords: ["appliance", "fridge", "washing machine", "microwave", "oven", "dishwasher"], key: "appliance" },
    { keywords: ["ac", "air condition", "hvac", "cooler", "heater"], key: "ac" },
    { keywords: ["carpentr", "wood", "furniture", "cabinet", "door", "window"], key: "carpentry" },
    { keywords: ["mov", "relocat", "packers", "shifting"], key: "moving" },
    { keywords: ["garden", "lawn", "plant", "trim", "prune"], key: "gardening" },
    { keywords: ["salon", "hair", "beauty", "makeup", "facial", "wax", "nail"], key: "salon" },
    { keywords: ["massage", "spa", "therapy", "relaxat"], key: "massage" },
  ];

  for (const { keywords, key } of keywordMap) {
    if (keywords.some((kw) => title.includes(kw))) {
      return SERVICE_FALLBACKS[key];
    }
  }
  return SERVICE_FALLBACKS.default;
};

const findServiceImage = (serviceTitle) => {
  for (const categoryKey in servicePagesData) {
    const category = servicePagesData[categoryKey];
    if (!category.sections) continue;
    for (const section of category.sections) {
      for (const item of section.items) {
        if (item.title === serviceTitle || item.id === serviceTitle) {
          return item.image;
        }
      }
    }
  }
  return getSmartFallback(serviceTitle);
};

const formatDateTime = (isoString) => {
  try {
    const date = new Date(isoString);
    const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    return { dateStr, timeStr };
  } catch (e) {
    return { dateStr: "Pending", timeStr: "Pending" };
  }
};

// --- HELPER: Status Badge Styling (Modernized) ---
const StatusBadge = ({ status }) => {
  const statusMap = {
    pending: { color: "bg-amber-100 text-amber-800 border-amber-200", icon: <FiClock size={12} />, label: "Pending Confirmation" },
    accepted: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: <FiCheckCircle size={12} />, label: "Assigned" },
    completed: { color: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: <FiCheckCircle size={12} />, label: "Completed" },
    cancelled: { color: "bg-red-100 text-red-800 border-red-200", icon: <FiXCircle size={12} />, label: "Cancelled" },
  };

  const current = statusMap[status?.toLowerCase()] || statusMap.pending;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${current.color}`}
    >
      {current.icon} {current.label}
    </motion.div>
  );
};


// ==========================================
// MAIN COMPONENT
// ==========================================
const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const USER_ID = "user_12345"; 
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/bookings/my/${USER_ID}`);
        if (!response.ok) throw new Error("Failed to fetch bookings");
        
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.booking_date) - new Date(a.booking_date));
        setBookings(sortedData);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Could not load your bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [API_BASE_URL]);

  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pt-8 pb-20 relative overflow-hidden">
      
      {/* Background Orbs for Depth */}
      <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-80 z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#AA593E]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>


      <main className="max-w-[1000px] mx-auto px-4 md:px-8 py-8 relative z-10">
        
        <motion.button 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-[#2A4334]/50 hover:text-[#AA593E] transition-colors mb-8 font-bold text-xs uppercase tracking-widest bg-white/50 w-fit px-4 py-2 rounded-full border border-white shadow-sm"
        >
          <FiArrowLeft /> Back to Home
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A4334] mb-3 tracking-tight">My Bookings</h1>
          <p className="text-[#2A4334]/60 mb-12 font-medium text-lg">Manage and track your sanctuary services.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* LOADING STATE */}
          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <FiLoader className="text-[#AA593E] mb-4" size={40} />
              </motion.div>
              <p className="text-[#2A4334]/60 font-bold uppercase tracking-widest text-xs">Fetching your history...</p>
            </motion.div>
          )}

          {/* ERROR STATE */}
          {error && !loading && (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-md border border-red-100 rounded-[2rem] p-10 text-center shadow-lg"
            >
              <FiXCircle className="mx-auto text-red-400 mb-4" size={48} />
              <p className="text-red-800 font-bold text-lg">{error}</p>
            </motion.div>
          )}

          {/* EMPTY STATE */}
          {!loading && !error && bookings.length === 0 && (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: customEase }}
              className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center text-center"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#2A4334]/5"
              >
                <FiPackage className="text-[#2A4334]/20" size={40} />
              </motion.div>
              <h2 className="text-3xl font-serif font-bold text-[#2A4334] mb-4">No bookings found</h2>
              <p className="text-[#2A4334]/60 mb-10 max-w-sm font-medium text-lg">You haven't booked any services yet. Experience premium home care today.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')} 
                className="bg-[#2A4334] text-white font-bold uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:bg-[#1a2a21] transition-colors"
              >
                Explore Services
              </motion.button>
            </motion.div>
          )}

          {/* POPULATED STATE (THE BOOKINGS LIST) */}
          {!loading && !error && bookings.length > 0 && (
            <motion.div 
              key="list"
              variants={staggerContainer} initial="hidden" animate="show" 
              className="space-y-6"
            >
              {bookings.map((booking) => {
                const { dateStr, timeStr } = formatDateTime(booking.booking_date);
                const serviceImage = findServiceImage(booking.service_id);

                return (
                  <motion.div 
                    variants={fadeUp}
                    key={booking._id || booking.id} 
                    className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:bg-white transition-colors group relative overflow-hidden"
                  >
                    
                    {/* Decorative Status Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-2 transition-colors ${
                        booking.status === 'completed' ? 'bg-emerald-400' : 
                        booking.status === 'cancelled' ? 'bg-red-400' : 
                        booking.status === 'accepted' ? 'bg-blue-400' : 'bg-amber-400'
                    }`}></div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start pl-4">
                      
                      {/* Service Image */}
                      <div className="w-full md:w-40 h-48 md:h-40 shrink-0 rounded-[1.5rem] overflow-hidden border border-[#2A4334]/5 bg-[#F9F8F6] relative">
                        <img
                          src={serviceImage}
                          alt={booking.service_id}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          onError={(e) => {
                              e.currentTarget.onerror = null; 
                              e.currentTarget.src = getSmartFallback(booking.service_id);
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Booking Details */}
                      <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                          <div>
                            <StatusBadge status={booking.status || 'pending'} />
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2A4334] mt-3 mb-1 leading-tight">{booking.service_id}</h2>
                            <p className="text-[10px] font-bold text-[#2A4334]/40 uppercase tracking-widest">ID: {booking._id?.slice(-8) || "N/A"}</p>
                          </div>
                          <div className="text-left md:text-right bg-white px-5 py-3 rounded-2xl border border-[#2A4334]/5 shadow-sm">
                            <p className="text-[10px] font-bold text-[#2A4334]/50 uppercase tracking-widest mb-0.5">Total Amount</p>
                            <p className="text-2xl font-black text-[#2A4334]">₹{booking.total_amount}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F9F8F6] p-5 rounded-2xl border border-[#2A4334]/5">
                          <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm text-[#AA593E]">
                              <FiCalendar size={16} />
                            </div>
                            <div>
                              <p className="font-bold text-[#2A4334] text-sm">Date & Time</p>
                              <p className="text-[#2A4334]/70 text-sm mt-0.5 font-medium">{dateStr} <br/> {timeStr}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm text-[#AA593E]">
                              <FiMapPin size={16} />
                            </div>
                            <div>
                              <p className="font-bold text-[#2A4334] text-sm">Service Address</p>
                              <p className="text-[#2A4334]/70 text-sm mt-0.5 leading-relaxed font-medium">{booking.address}, {booking.city}</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    {(!booking.status || booking.status === 'pending') && (
                      <div className="mt-6 pt-6 border-t border-[#2A4334]/5 flex justify-end gap-3 pl-4">
                        <motion.button 
                          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          Cancel
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2A4334] border border-[#2A4334]/20 rounded-full hover:border-[#AA593E] hover:text-[#AA593E] transition-colors"
                        >
                          Contact Support
                        </motion.button>
                      </div>
                    )}

                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MyBookings;