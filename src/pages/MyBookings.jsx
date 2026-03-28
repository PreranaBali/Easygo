import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin, FiCheckCircle, FiXCircle, FiLoader, FiArrowLeft, FiPackage } from 'react-icons/fi';

// Import your frontend data to grab the images!
import { servicePagesData } from '../data/data';

// --- HELPER: Find image from frontend data ---
const findServiceImage = (serviceTitle) => {
  // Loop through all categories, sections, and items to find the matching image
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
  // Aesthetic fallback image if we can't find it in data.js
  return "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop"; 
};

// --- HELPER: Format Date & Time safely ---
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

// --- HELPER: Status Badge Styling ---
const StatusBadge = ({ status }) => {
  const statusMap = {
    pending: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: <FiClock size={14} />, label: "Pending Confirmation" },
    accepted: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: <FiCheckCircle size={14} />, label: "Professional Assigned" },
    completed: { color: "bg-[#2A4334]/10 text-[#2A4334] border-[#2A4334]/20", icon: <FiCheckCircle size={14} />, label: "Service Completed" },
    cancelled: { color: "bg-red-100 text-red-800 border-red-200", icon: <FiXCircle size={14} />, label: "Cancelled" },
  };

  // Default to pending if backend didn't set a status
  const current = statusMap[status?.toLowerCase()] || statusMap.pending;

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${current.color}`}>
      {current.icon} {current.label}
    </div>
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

  // Hardcoded user for MVP - match this to the one in your CartPage checkout!
  const USER_ID = "user_12345"; 
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Fetch from your FastAPI endpoint
        const response = await fetch(`${API_BASE_URL}/api/bookings/my/${USER_ID}`);
        if (!response.ok) throw new Error("Failed to fetch bookings");
        
        const data = await response.json();
        
        // Sort bookings by newest first
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
    <div className="bg-[#F5F2EA] min-h-screen font-sans text-[#1F2922] pt-24 pb-20">
      
      {/* Assuming Navbar is rendered globally or you can import it here */}

      <main className="max-w-[1000px] mx-auto px-4 md:px-8 py-8 animate-fade-in">
        
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#1F2922]/60 hover:text-[#9A5B40] transition-colors mb-6 font-bold text-sm uppercase tracking-widest">
          <FiArrowLeft /> Back to Home
        </button>

        <h1 className="text-4xl font-serif font-bold text-[#1F2922] mb-2">My Bookings</h1>
        <p className="text-[#1F2922]/60 mb-10 font-medium">Manage and track your upcoming and past services.</p>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <FiLoader className="animate-spin text-[#9A5B40] mb-4" size={40} />
            <p className="text-[#1F2922]/60 font-medium">Fetching your secure booking history...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
            <FiXCircle className="mx-auto text-red-400 mb-3" size={32} />
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && bookings.length === 0 && (
          <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-[#1F2922]/5 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#E8DCCB] rounded-full flex items-center justify-center mb-6">
              <FiPackage className="text-[#9A5B40] opacity-50" size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#1F2922] mb-3">No bookings found</h2>
            <p className="text-[#1F2922]/60 mb-8 max-w-sm">You haven't booked any services yet. Experience premium home care today.</p>
            <button onClick={() => navigate('/')} className="bg-[#9A5B40] text-white font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md hover:bg-[#8a4731] transition-colors">
              Explore Services
            </button>
          </div>
        )}

        {/* POPULATED STATE (THE BOOKINGS LIST) */}
        {!loading && !error && bookings.length > 0 && (
          <div className="space-y-6">
            {bookings.map((booking) => {
              const { dateStr, timeStr } = formatDateTime(booking.booking_date);
              // Merge Backend data with Frontend Image
              const serviceImage = findServiceImage(booking.service_id);

              return (
                <div key={booking._id || booking.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#1F2922]/5 hover:shadow-md transition-shadow group relative overflow-hidden">
                  
                  {/* Decorative Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#E8DCCB] group-hover:bg-[#9A5B40] transition-colors"></div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    
                    {/* Fetched Image from Frontend Data */}
                    <div className="w-full md:w-36 h-48 md:h-36 shrink-0 rounded-2xl overflow-hidden border border-[#1F2922]/10 bg-[#F5F2EA]">
                      <img src={serviceImage} alt={booking.service_id} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <StatusBadge status={booking.status || 'pending'} />
                          <h2 className="text-2xl font-serif font-bold text-[#1F2922] mt-3 mb-1">{booking.service_id}</h2>
                          <p className="text-sm font-bold text-[#1F2922]/50 uppercase tracking-widest">Booking ID: {booking._id?.slice(-8) || "N/A"}</p>
                        </div>
                        <div className="text-left md:text-right bg-[#F5F2EA] px-4 py-2 rounded-xl border border-[#1F2922]/5">
                          <p className="text-xs font-bold text-[#1F2922]/60 uppercase tracking-widest mb-1">Total Amount</p>
                          <p className="text-xl font-bold text-[#9A5B40]">₹{booking.total_amount}</p>
                        </div>
                      </div>

                      <hr className="border-[#1F2922]/10 my-4" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-3">
                          <FiCalendar className="text-[#9A5B40] mt-0.5" size={18} />
                          <div>
                            <p className="font-bold text-[#1F2922]">Date & Time</p>
                            <p className="text-[#1F2922]/70 mt-0.5">{dateStr} at {timeStr}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FiMapPin className="text-[#9A5B40] mt-0.5" size={18} />
                          <div>
                            <p className="font-bold text-[#1F2922]">Service Address</p>
                            <p className="text-[#1F2922]/70 mt-0.5 leading-relaxed">{booking.address}, {booking.city}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                  {/* Action Buttons (Optional based on status) */}
                  {(!booking.status || booking.status === 'pending') && (
                    <div className="mt-6 pt-4 border-t border-[#1F2922]/5 flex justify-end gap-3">
                      <button className="px-5 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        Cancel Booking
                      </button>
                      <button className="px-5 py-2 text-sm font-bold text-[#1F2922] border border-[#1F2922]/20 rounded-lg hover:border-[#9A5B40] hover:text-[#9A5B40] transition-colors">
                        Contact Support
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </div>
  );
};

export default MyBookings;