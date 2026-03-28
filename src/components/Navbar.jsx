import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart, User, ChevronDown, Search, Loader2, LocateFixed } from 'lucide-react';

// --- CUSTOM BOTANICAL BRAND LOGO ---
const BrandLogo = ({ className = "text-[#1F2922]", leafColor = "text-[#9A5B40]" }) => (
  <div className="relative flex items-center justify-center w-16 h-12 cursor-pointer group">
    <svg
      viewBox="0 0 64 64"
      className={`absolute -left-2 top-0 w-14 h-14 opacity-50 group-hover:opacity-80 transition-opacity duration-500 ${leafColor}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 54 Q 30 30 54 10" />
      <path d="M22 42 Q 15 25 32 18 Q 38 32 22 42 Z" />
      <path d="M40 25 Q 45 10 60 5 Q 60 20 40 25 Z" />
      <path d="M15 50 Q 5 40 10 25 Q 25 35 15 50 Z" />
    </svg>
    <span className={`text-4xl font-serif tracking-tighter relative z-10 ${className}`}>
      EG
    </span>
  </div>
);

// --- GEOLOCATION HOOK ---
const useGeolocation = () => {
  const [locationLabel, setLocationLabel] = useState('Detecting location...');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

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
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
          );
          const data = await res.json();

          // Build a short, readable label: road/suburb + city
          const addr = data.address || {};
          const parts = [
            addr.road || addr.neighbourhood || addr.suburb,
            addr.city || addr.town || addr.village || addr.county,
          ].filter(Boolean);

          const label = parts.length
            ? parts.join(', ')
            : data.display_name?.split(',').slice(0, 2).join(',') || 'Location found';

          setLocationLabel(label);
          setStatus('success');
        } catch {
          setLocationLabel('Location found');
          setStatus('success');
        }
      },
      (err) => {
        const messages = {
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timed out',
        };
        setLocationLabel(messages[err.code] || 'Location error');
        setStatus('error');
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  };

  // Auto-detect on mount
  useEffect(() => {
    detect();
  }, []);

  return { locationLabel, status, detect };
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

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

  // Truncate long location labels for display
  const displayLabel =
    locationLabel.length > 28 ? locationLabel.slice(0, 26) + '…' : locationLabel;

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F2EA]/90 backdrop-blur-md border-b border-[#1F2922]/10 w-full px-4 lg:px-8 h-20 flex items-center">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between h-full">

        {/* Left Section: Logo & Navigation */}
        <div className="flex items-center gap-8 h-full">
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <BrandLogo className="text-[#1F2922]" leafColor="text-[#9A5B40]" />
            <span className="text-2xl font-serif text-[#1F2922] hidden sm:block tracking-wide mt-1">EasyGo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 h-full ml-4">
            {[
              { path: '/revamp', label: 'Revamp' },
              { path: '/native', label: 'Native' },
              { path: '/beauty', label: 'Beauty' },
              { path: '/About us', label: 'About Us' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`h-full flex items-center pt-1 transition-colors text-sm font-medium ${
                  isActive(path) || isActive(path.replace(' ', '%20'))
                    ? 'text-[#9A5B40] border-b-[2px] border-[#9A5B40]'
                    : 'text-[#1F2922]/70 hover:text-[#9A5B40]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Section: Location Dropdown & Dynamic Search */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8 gap-4 h-full">

          {/* Location Button */}
          <button
            onClick={detect}
            title={status === 'error' ? 'Click to retry location detection' : 'Click to refresh location'}
            className="flex items-center justify-between border border-[#1F2922]/20 rounded-full px-5 py-2.5 w-[260px] hover:bg-white/40 transition-all bg-transparent group"
          >
            <div className="flex items-center text-[#1F2922] gap-2 overflow-hidden">
              {status === 'loading' ? (
                <Loader2 size={18} className="text-[#9A5B40] flex-shrink-0 animate-spin" />
              ) : status === 'error' ? (
                <LocateFixed size={18} className="text-red-400 flex-shrink-0" />
              ) : (
                <MapPin size={18} className="text-[#1F2922]/60 flex-shrink-0 group-hover:text-[#9A5B40] transition-colors" />
              )}
              <span
                className={`text-sm font-medium truncate whitespace-nowrap transition-colors ${
                  status === 'loading'
                    ? 'text-[#1F2922]/50 italic'
                    : status === 'error'
                    ? 'text-red-400'
                    : 'text-[#1F2922]'
                }`}
              >
                {displayLabel}
              </span>
            </div>
            <ChevronDown size={18} className="text-[#1F2922]/60 ml-2 flex-shrink-0" />
          </button>

          {/* Dynamic Search Box */}
          <div className="relative flex items-center w-[300px] xl:w-[400px]">
            <div className="absolute left-4 text-[#1F2922]/50">
              <Search size={18} strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder={`Search for '${searchTerms[currentTermIndex]}'`}
              className="w-full border border-[#1F2922]/20 rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:border-[#9A5B40] transition-colors bg-transparent hover:bg-white/40 placeholder-[#1F2922]/50 text-[#1F2922]"
            />
          </div>

        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center justify-end space-x-4 h-full">
          <button
            onClick={() => navigate('/cart')}
            className="p-2.5 text-[#1F2922] border border-[#1F2922]/20 rounded-full hover:bg-[#1F2922] hover:text-[#F5F2EA] transition-colors flex items-center justify-center"
          >
            <ShoppingCart size={18} strokeWidth={2} />
          </button>
          <button className="p-2.5 text-[#1F2922] hover:text-[#9A5B40] transition-colors flex items-center justify-center">
            <User size={22} strokeWidth={2} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;