import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart, User, Search, Loader2, LocateFixed, CalendarDays, KeyRound, ChevronRight } from 'lucide-react';

// IMPORT USEAUTH
import { useAuth } from '../context/AuthContext';

// --- CUSTOM BOTANICAL BRAND LOGO (Unchanged) ---
const BrandLogo = ({ className = "text-[#1F2922]", leafColor = "text-[#9A5B40]" }) => (
  <div className="relative flex items-center justify-center w-14 h-14 cursor-pointer group">
    <svg viewBox="0 0 64 64" className={`absolute inset-0 w-full h-full opacity-50 group-hover:opacity-80 transition-opacity duration-500 ${leafColor}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 54 Q 30 30 54 10" />
      <path d="M22 42 Q 15 25 32 18 Q 38 32 22 42 Z" />
      <path d="M40 25 Q 45 10 60 5 Q 60 20 40 25 Z" />
      <path d="M15 50 Q 5 40 10 25 Q 25 35 15 50 Z" />
    </svg>
    <span className={`text-[32px] font-serif tracking-tighter relative z-10 ${className}`}>EG</span>
  </div>
);

// --- GEOLOCATION HOOK (Unchanged) ---
const useGeolocation = () => {
  const [locationLabel, setLocationLabel] = useState('Detecting location...');
  const [status, setStatus] = useState('idle');
  const detect = () => {
    if (!navigator.geolocation) {
      setLocationLabel('Location unavailable');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setLocationLabel('Detecting location...');
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`);
          const data = await res.json();
          const addr = data.address || {};
          const parts = [
            addr.road || addr.neighbourhood || addr.suburb,
            addr.city || addr.town || addr.village || addr.county,
          ].filter(Boolean);
          const label = parts.length ? parts.join(', ') : data.display_name?.split(',').slice(0, 2).join(',') || 'Location found';
          setLocationLabel(label);
          setStatus('success');
        } catch {
          setLocationLabel('Location found');
          setStatus('success');
        }
      },
      (err) => {
        const messages = { 1: 'Permission denied', 2: 'Position unavailable', 3: 'Request timed out' };
        setLocationLabel(messages[err.code] || 'Location error');
        setStatus('error');
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  };
  useEffect(() => { detect(); }, []);
  return { locationLabel, status, detect };
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  // PULL AUTH STATE
  const { user, dbUser } = useAuth();

  const { locationLabel, status, detect } = useGeolocation();

  // --- DYNAMIC SEARCH PLACEHOLDER LOGIC ---
  const searchTerms = ['Waxing', 'Massage', 'Haircut', 'Spa', 'AC Service', 'Water Purifier'];
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTermIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  const displayLabel = locationLabel.length > 28 ? locationLabel.slice(0, 26) + '…' : locationLabel;

  // Helpers for Profile Display
  const getFirstName = (name) => name ? name.split(' ')[0] : 'Guest';
  // Note: retained referrerPolicy="no-referrer" on final image
  const profilePic = dbUser?.photoURL || user?.photoURL || "https://via.placeholder.com/150";

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F2EA]/80 backdrop-blur-lg border-b border-[#1F2922]/5 w-full px-4 lg:px-8 h-[72px] flex items-center shadow-sm">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">

        {/* Left Section: Logo & Navigation */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <BrandLogo />
            <span className="text-2xl font-serif text-[#1F2922] hidden sm:block tracking-wide mt-1 group-hover:text-[#9A5B40] transition-colors">
              EasyGo
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 mt-1">
            {[
              { path: '/revamp', label: 'Revamp' },
              { path: '/native', label: 'Native' },
              { path: '/beauty', label: 'Beauty' },
              { path: '/About us', label: 'About Us' },
            ].map(({ path, label }) => {
              const active = isActive(path) || isActive(path.replace(' ', '%20'));
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative py-2 text-sm font-semibold tracking-wide transition-colors group"
                >
                  <span className={active ? 'text-[#9A5B40]' : 'text-[#1F2922]/60 group-hover:text-[#9A5B40]'}>
                    {label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#9A5B40] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Center Section: Location Pill & Search */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8 gap-5">
          <div 
            onClick={detect} 
            title={status === 'error' ? 'Click to retry' : 'Click to refresh location'} 
            className="flex items-center gap-2.5 bg-white/60 border border-[#1F2922]/10 rounded-full px-4 py-2 cursor-pointer hover:bg-white hover:shadow-sm hover:border-[#1F2922]/20 transition-all group max-w-[240px]"
          >
            {status === 'loading' ? (
              <Loader2 size={16} className="text-[#9A5B40] flex-shrink-0 animate-spin" />
            ) : status === 'error' ? (
              <LocateFixed size={16} className="text-red-400 flex-shrink-0" />
            ) : (
              <MapPin size={16} className="text-[#9A5B40] flex-shrink-0" />
            )}
            <span className={`text-[13px] font-bold tracking-wide truncate transition-colors ${status === 'loading' ? 'text-[#1F2922]/50 italic' : status === 'error' ? 'text-red-400' : 'text-[#1F2922]/80 group-hover:text-[#1F2922]'}`}>
              {displayLabel}
            </span>
          </div>

          {!user && (
            <div className="relative flex items-center w-[300px] xl:w-[400px]">
              <div className="absolute left-4 text-[#1F2922]/40">
                <Search size={16} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder={`Search for '${searchTerms[currentTermIndex]}'`}
                className="w-full bg-white/60 border border-[#1F2922]/10 rounded-full py-2 pl-11 pr-4 text-[13px] font-semibold tracking-wide outline-none focus:bg-white focus:border-[#9A5B40] focus:ring-2 focus:ring-[#9A5B40]/10 transition-all hover:bg-white placeholder-[#1F2922]/40 text-[#1F2922] shadow-sm"
              />
            </div>
          )}
        </div>

        {/* ================================================== */}
        {/* RIGHT SECTION: NEW PREMIUM CONTROL HUB REDESIGN */}
        {/* ================================================== */}
        {user ? (
          /* A unified, multi-pane glass island */
          <div className="flex items-center gap-1.5 backdrop-blur-sm bg-white/30 border border-[#1F2922]/5 p-1 rounded-full shadow-inner relative overflow-hidden group/hub transition-all hover:bg-white/50 hover:shadow-md hover:border-[#9A5B40]/10">
            
            {/* Minimalist divider background detail */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-[#1F2922]/10 group-hover/hub:bg-[#AA593E]/20 transition-colors"></div>

            {/* Pane 1: Integrated Quick Icons */}
            <div className="flex items-center gap-1 pl-1 relative z-10">
              {/* My Bookings */}
              <button 
                onClick={() => navigate(`/bookings/my/${user.uid}`)} 
                className="w-9 h-9 flex items-center justify-center text-[#1F2922]/60 rounded-full hover:bg-white hover:text-[#9A5B40] hover:shadow-sm transition-all relative group"
                title="My Bookings"
              >
                <CalendarDays size={18} strokeWidth={2} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full border border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>

              {/* Cart Icon */}
              <button 
                onClick={() => navigate('/cart')} 
                className="w-9 h-9 flex items-center justify-center text-[#1F2922]/60 rounded-full hover:bg-white hover:text-[#9A5B40] hover:shadow-sm transition-all relative group"
                title="My Cart"
              >
                <ShoppingCart size={18} strokeWidth={2} />
                {/* Cart Count Badge (mock) */}
                <span className="absolute -top-1 -right-1.5 px-1 bg-[#AA593E] text-white text-[9px] font-bold rounded-full border border-white min-w-[14px] flex items-center justify-center group-hover:scale-110 transition-transform">
                  3
                </span>
              </button>
            </div>

            {/* Pane 2: Creative Profile Composite */}
            <button 
              onClick={() => navigate('/profile')} 
              className="relative flex items-center gap-2.5 backdrop-blur-xl bg-white/80 border border-[#1F2922]/5 rounded-full pl-2 pr-3.5 py-1.5 transition-all group shadow-sm hover:shadow-inner hover:border-[#AA593E]/20 hover:-translate-x-0.5"
            >
              
              {/* Image with Terracotta Jewelry/Aura Border */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-[3px] bg-gradient-to-r from-[#AA593E] to-gold-300 group-hover:blur-[1px] transition-all"></div>
                <img 
                  src={profilePic} 
                  alt="User Profile" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
                  className="w-8 h-8 rounded-full object-cover shadow-sm relative z-10 border border-white group-hover:scale-105 transition-transform" 
                />
              </div>

              {/* Typography hierarchy */}
              <div className="flex flex-col items-start text-left relative z-10">
                <span className="text-[12px] font-bold text-[#1F2922] leading-none group-hover:text-[#9A5B40] transition-colors flex items-center gap-1.5">
                  {getFirstName(dbUser?.name || user.displayName)}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#9A5B40]" />
                </span>
                <span className="text-[10px] font-semibold text-[#1F2922]/40 uppercase tracking-widest leading-none mt-1">
                  Active
                </span>
              </div>
              
              {/* Subtle status indicator */}
              <span className="absolute bottom-1 right-3 flex h-1.5 w-1.5 relative z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AA593E] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#AA593E]"></span>
              </span>
            </button>

          </div>
        ) : (
          /* LOGGED OUT: Sleek, minimalistic pill with key access */
          <div className="flex items-center gap-1.5 backdrop-blur-sm bg-white/30 border border-[#1F2922]/5 p-1 rounded-full shadow-inner relative overflow-hidden group/login transition-all hover:bg-white/50 hover:shadow-md hover:border-[#9A5B40]/10 pr-2">
            
            <button 
              onClick={() => navigate('/profile')} 
              className="flex items-center gap-2.5 backdrop-blur-xl bg-white border border-[#1F2922]/5 rounded-full px-4 py-1.5 transition-all group hover:bg-[#AA593E] hover:border-[#AA593E]/50 group-hover/login:translate-x-0.5"
            >
              <div className="w-8 h-8 flex items-center justify-center text-[#1F2922] bg-[#E8DCCB] rounded-full group-hover:bg-white/90 group-hover:text-[#AA593E] transition-colors relative z-10">
                <KeyRound size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col items-start text-left relative z-10">
                <span className="text-[12px] font-bold text-[#1F2922] leading-none group-hover:text-white transition-colors">
                  Welcome
                </span>
                <span className="text-[10px] font-semibold text-[#1F2922]/50 group-hover:text-white/80 uppercase tracking-widest leading-none mt-1 transition-colors">
                  Sign In / Register
                </span>
              </div>
            </button>
            <ChevronRight size={16} className="text-[#1F2922]/30 group-hover/login:translate-x-1 group-hover/login:text-[#9A5B40] transition-all" />
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;