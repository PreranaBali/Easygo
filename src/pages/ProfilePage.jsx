import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMapPin, FiPhone, FiShoppingCart, FiCalendar, FiLogOut, FiEdit2, FiChevronRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

// Import your auth tools
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// --- Shared Framer Motion Variants ---
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

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 
  
  const [dbUser, setDbUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ phone: '', location: '' });
  const [saving, setSaving] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  // --- GOOGLE LOGIN LOGIC ---
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  // --- FETCH BACKEND DATA ---
  useEffect(() => {
    const fetchBackendProfile = async () => {
      if (user) {
        try {
          const token = await user.getIdToken(); 
          const response = await fetch(`${API_BASE_URL}/api/profile`, { 
            headers: { 'Authorization': `Bearer ${token}` }
          });

          if (response.ok) {
            const data = await response.json();
            setDbUser(data);
            setFormData({ phone: data.phone || '', location: data.location || '' });
          }
        } catch (error) {
          console.error("Error fetching backend profile:", error);
        }
      } else {
        setDbUser(null);
      }
    };
    fetchBackendProfile();
  }, [user, API_BASE_URL]);

  // --- UPDATE PROFILE LOGIC ---
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = await user.getIdToken();
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setDbUser(prev => ({ ...prev, ...formData }));
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // STATE 1: NOT LOGGED IN
  // ==========================================
  if (!user) {
    return (
      <div className="bg-[#F9F8F6] min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-sans text-[#2A4334]">
        {/* Background Depth Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-80 z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#AA593E]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="bg-white/60 backdrop-blur-2xl max-w-md w-full rounded-[3rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white text-center relative z-10"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-24 h-24 bg-[#F9F8F6] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-[#2A4334]/5"
          >
            <FiUser className="text-[#AA593E]" size={36} />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2A4334] mb-4 tracking-tight">Welcome to EasyGo</h1>
          <p className="text-[#2A4334]/60 mb-10 text-sm md:text-base font-medium leading-relaxed">Sign in to manage your sanctuary, track bookings, and experience premium home care.</p>
          
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#2A4334]/10 text-[#2A4334] font-bold py-4 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all"
          >
            <FcGoogle size={24} />
            Continue with Google
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ==========================================
  // STATE 2: LOGGED IN & PROFILE LOADED
  // ==========================================
  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pt-8 pb-20 relative overflow-hidden">
      
      {/* Background Depth Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-100 z-0 mix-blend-overlay"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-[#AA593E]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A4334] mb-10 tracking-tight">My Account</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: ID CARD & QUICK LINKS */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="lg:col-span-4 space-y-6">
            
            {/* ID Card */}
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#E8DCCB] to-[#F9F8F6] group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="relative w-32 h-32 mx-auto mb-5 z-10">
                <div className="absolute inset-0 bg-[#AA593E]/10 rounded-full animate-pulse"></div>
                <img 
                  src={dbUser?.photoURL || user?.photoURL || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  referrerPolicy="no-referrer"  
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-md relative z-10 bg-white"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150" }} 
                />
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-[#2A4334] relative z-10">{dbUser?.name || user.displayName}</h2>
              <p className="text-sm text-[#2A4334]/50 font-bold tracking-wide mb-8 relative z-10">{dbUser?.email || user.email}</p>
              
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={logout}
                className="bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 w-full py-3.5 rounded-full hover:bg-red-500 hover:text-white transition-colors relative z-10"
              >
                <FiLogOut size={16} /> Sign Out
              </motion.button>
            </motion.div>

            {/* Quick Links Bento */}
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white space-y-2">
              <button onClick={() => navigate('/cart')} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex items-center gap-4 font-bold text-[#2A4334]">
                  <div className="w-12 h-12 bg-[#F9F8F6] rounded-[1rem] flex items-center justify-center group-hover:bg-[#AA593E] group-hover:text-white transition-colors text-[#AA593E] shadow-inner border border-[#2A4334]/5">
                    <FiShoppingCart size={20} />
                  </div>
                  My Cart
                </div>
                <FiChevronRight className="text-[#2A4334]/30 group-hover:text-[#AA593E] group-hover:translate-x-1 transition-all" size={20} />
              </button>
              
              <button onClick={() => navigate(`/bookings/my/${user.uid}`)} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex items-center gap-4 font-bold text-[#2A4334]">
                  <div className="w-12 h-12 bg-[#F9F8F6] rounded-[1rem] flex items-center justify-center group-hover:bg-[#AA593E] group-hover:text-white transition-colors text-[#AA593E] shadow-inner border border-[#2A4334]/5">
                    <FiCalendar size={20} />
                  </div>
                  Booking History
                </div>
                <FiChevronRight className="text-[#2A4334]/30 group-hover:text-[#AA593E] group-hover:translate-x-1 transition-all" size={20} />
              </button>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: PROFILE DETAILS FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: customEase }}
            className="lg:col-span-8"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 shadow-[0_12px_50px_rgb(0,0,0,0.06)] border border-white">
              
              <div className="flex items-center justify-between mb-10 border-b border-[#2A4334]/10 pb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2A4334]">Profile Details</h3>
                <AnimatePresence mode="wait">
                  {!isEditing && (
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => setIsEditing(true)} 
                      className="flex items-center gap-2 bg-[#AA593E]/10 text-[#AA593E] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#AA593E] hover:text-white transition-colors"
                    >
                      <FiEdit2 size={14} /> Edit
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-8">
                
                {/* Phone Field */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2A4334]/50 mb-3 pl-2">Phone Number</label>
                  <div className="relative">
                    <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isEditing ? 'text-[#AA593E]' : 'text-[#2A4334]/30'}`}>
                      <FiPhone size={20} />
                    </div>
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      placeholder="Add your phone number"
                      className={`w-full pl-14 pr-5 py-4 rounded-[1.25rem] outline-none font-bold transition-all duration-300 ${
                        isEditing 
                          ? 'bg-white border-2 border-[#AA593E]/40 focus:border-[#AA593E] text-[#2A4334] shadow-[0_4px_20px_rgba(170,89,62,0.1)]' 
                          : 'bg-[#F9F8F6] border-2 border-transparent text-[#2A4334]/60 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2A4334]/50 mb-3 pl-2">Service Address</label>
                  <div className="relative">
                    <div className={`absolute left-5 top-5 transition-colors ${isEditing ? 'text-[#AA593E]' : 'text-[#2A4334]/30'}`}>
                      <FiMapPin size={20} />
                    </div>
                    <textarea 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      disabled={!isEditing}
                      placeholder="Add your complete home address"
                      rows="3"
                      className={`w-full pl-14 pr-5 py-4 rounded-[1.25rem] outline-none font-bold transition-all duration-300 resize-none ${
                        isEditing 
                          ? 'bg-white border-2 border-[#AA593E]/40 focus:border-[#AA593E] text-[#2A4334] shadow-[0_4px_20px_rgba(170,89,62,0.1)]' 
                          : 'bg-[#F9F8F6] border-2 border-transparent text-[#2A4334]/60 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>

                {/* Save / Cancel Controls */}
                <AnimatePresence>
                  {isEditing && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, height: 0 }} 
                      animate={{ opacity: 1, y: 0, height: 'auto' }} 
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      className="flex gap-4 pt-4 overflow-hidden"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        type="button" 
                        onClick={() => {
                          setIsEditing(false);
                          setFormData({ phone: dbUser?.phone || '', location: dbUser?.location || '' });
                        }}
                        className="px-8 py-4 font-bold text-[#2A4334]/60 bg-[#F9F8F6] rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs"
                      >
                        Cancel
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        type="submit" 
                        disabled={saving}
                        className="flex-1 bg-[#2A4334] text-white font-bold uppercase tracking-widest py-4 rounded-full shadow-[0_8px_25px_rgba(42,67,52,0.25)] hover:bg-[#1a2a21] transition-colors disabled:opacity-50 text-xs"
                      >
                        {saving ? "Saving..." : "Save Changes"}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;