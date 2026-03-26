import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiX, FiArrowLeft, FiShare2 } from 'react-icons/fi';

const mainCategories = [
  { id: 'instahelp', title: 'InstaHelp', icon: 'https://cdn-icons-png.flaticon.com/512/476/476863.png', type: 'link', path: '/service/instahelp' },
  { id: 'womens_salon', title: "Women's Salon & Spa", icon: 'https://cdn-icons-png.flaticon.com/512/1940/1940954.png', type: 'modal' },
  { id: 'mens_salon', title: "Men's Salon & Massage", icon: 'https://cdn-icons-png.flaticon.com/512/3257/3257321.png', type: 'modal' },
  { id: 'cleaning', title: 'Cleaning & Pest Control', icon: 'https://cdn-icons-png.flaticon.com/512/2035/2035079.png', type: 'link', path: '/service/full_home' },
  { id: 'ac_appliance', title: 'AC & Appliance Repair', icon: 'https://cdn-icons-png.flaticon.com/512/3565/3565575.png', type: 'modal' },
  { id: 'water_purifier', title: 'Native Water Purifier', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png', type: 'link', path: '/product/water_purifier' },
  { id: 'home_repairs', title: 'Electrician, Plumber & Carpenter', icon: 'https://cdn-icons-png.flaticon.com/512/2809/2809831.png', type: 'modal' },
  { id: 'painting', title: 'Painting & Waterproofing', icon: 'https://cdn-icons-png.flaticon.com/512/1032/1032158.png', type: 'submodal' },
  { id: 'smart_locks', title: 'Native Smart Locks', icon: 'https://cdn-icons-png.flaticon.com/512/2883/2883494.png', type: 'link', path: '/service/native_smart_locks' },
];

const hubData = {
  womens_salon: {
    title: "Women's Salon & Spa",
    items: [
      { id: 'salon_women', title: 'Salon for Women', icon: 'https://cdn-icons-png.flaticon.com/512/1940/1940954.png', hasSub: false, path: '/service/salon_for_women' },
      { id: 'spa_women', title: 'Spa for Women', icon: 'https://cdn-icons-png.flaticon.com/512/3163/3163478.png', hasSub: true, subModal: 'spa_women' },
      { id: 'hair_studio_women', title: 'Hair Studio for Women', icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png', hasSub: false, path: '/service/hair_studio_women' },
    ],
  },
  mens_salon: {
    title: "Men's Salon & Massage",
    items: [
      { id: 'salon_men', title: 'Salon for Men', icon: 'https://cdn-icons-png.flaticon.com/512/3257/3257321.png', hasSub: false, path: '/service/salon_prime_men' },
      { id: 'massage_men', title: 'Massage for Men', icon: 'https://cdn-icons-png.flaticon.com/512/3163/3163478.png', hasSub: true, subModal: 'massage_men' },
    ],
  },
};

const subModalData = {
  spa_women: {
    title: 'Spa for Women',
    subtitle: null,
    banner: {
      bg: '#F9A8D4',
      label: '25% OFF',
      sublabel: 'summer spree',
      footnote: '*Up to ₹200 off',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    },
    items: [
      { id: 'ayurveda', title: 'Ayurveda', subtitle: 'Experts in ancient techniques with herbal oils', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=200', path: '/service/ayurvedic_spa_women' },
      { id: 'spa_prime', title: 'Prime', subtitle: 'Certified therapists & essential oils', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=200', path: '/service/prime_spa_women' },
    ],
  },
  massage_men: {
    title: 'Massage for Men',
    subtitle: null,
    banner: null,
    items: [
      { id: 'massage_prime', title: 'Prime', subtitle: 'Certified therapists & essential oils', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=200', path: '/service/prime_massage_men' },
      { id: 'massage_ayurvedic', title: 'Ayurvedic', subtitle: 'High-rated therapists & premium-grade oils', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=200', path: '/service/ayurvedic_massage_men' },
    ],
  },
  // ✅ NEW: Painting submodal
  painting: {
    title: 'Painting & Waterproofing',
    subtitle: 'Select your scope',
    banner: null,
    items: [
      { id: 'full_home_painting', title: 'Full home painting', subtitle: '1/2/3/4 BHK & above', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=200', path: '/service/full_home_makeover' },
      { id: 'wall_painting', title: 'Few walls & rooms', subtitle: 'Individual walls or 1/2/3 rooms', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=200', path: '/service/few_rooms_walls_painting' },
    ],
  },
};

const modalData = {
  ac_appliance: {
    title: "AC & Appliance Repair",
    groups: [
      {
        groupName: "Large appliances",
        items: [
          { id: 'ac', title: 'AC', icon: 'https://cdn-icons-png.flaticon.com/512/3565/3565575.png', path: '/service/ac' },
          { id: 'washing_machine', title: 'Washing Machine Repair', icon: 'https://cdn-icons-png.flaticon.com/512/3565/3565620.png', path: '/service/washing_machine' },
          { id: 'refrigerator', title: 'Refrigerator', icon: 'https://cdn-icons-png.flaticon.com/512/1301/1301646.png', path: '/service/refrigerator' },
          { id: 'television', title: 'Television', icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085188.png', path: '/service/television' },
        ]
      },
      {
        groupName: "Other appliances",
        items: [
          { id: 'chimney', title: 'Chimney', icon: 'https://cdn-icons-png.flaticon.com/512/2822/2822081.png', path: '/service/chimney' },
          { id: 'microwave', title: 'Microwave', icon: 'https://cdn-icons-png.flaticon.com/512/2403/2403163.png', path: '/service/microwave' },
          { id: 'laptop', title: 'Laptop', icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067252.png', path: '/service/laptop' },
          { id: 'water_purifier_repair', title: 'Water Purifier Repair', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png', path: '/service/water_purifier_repair' },
          { id: 'geyser', title: 'Geyser', icon: 'https://cdn-icons-png.flaticon.com/512/3074/3074404.png', path: '/service/geyser' },
        ]
      }
    ]
  },
  home_repairs: {
    title: "Electrician, Plumber & Carpenter",
    groups: [
      {
        groupName: "All Services",
        items: [
          { id: 'electrician', title: 'Electrician', icon: 'https://cdn-icons-png.flaticon.com/512/913/913214.png', path: '/service/electrician' },
          { id: 'plumber', title: 'Plumber', icon: 'https://cdn-icons-png.flaticon.com/512/1973/1973946.png', path: '/service/plumber' },
          { id: 'carpenter', title: 'Carpenter', icon: 'https://cdn-icons-png.flaticon.com/512/2984/2984880.png', path: '/service/carpenter' },
          { id: 'fan_installation', title: 'Fan Installation', icon: 'https://cdn-icons-png.flaticon.com/512/2162/2162601.png', path: '/service/fan_installation' },
          { id: 'geyser', title: 'Geyser', icon: 'https://cdn-icons-png.flaticon.com/512/3074/3074404.png', path: '/service/geyser' },
          { id: 'ikea_furniture', title: 'IKEA Furniture Assembly', icon: 'https://cdn-icons-png.flaticon.com/512/2765/2765031.png', path: '/service/ikea_furniture' },
        ]
      }
    ]
  }
};

const Navbar = () => (
  <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b-[0.5px] border-[#2A4334]/10">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer">
        <span className="text-3xl italic">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
      </div>
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border-[0.5px] border-[#2A4334]/20 rounded-full h-12 items-center shadow-sm">
        <div className="flex items-center px-4 border-r-[0.5px] border-[#2A4334]/20 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-4 flex-1">
          <FiSearch className="text-gray-400 mr-2" size={16} />
          <input type="text" placeholder="Search for services" className="w-full text-sm outline-none bg-transparent text-[#2A4334]" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

const HubModal = ({ isOpen, onClose, hubId, onSubOpen }) => {
  if (!isOpen || !hubId || !hubData[hubId]) return null;
  const data = hubData[hubId];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl z-10">
        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#2A4334] mb-8">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.hasSub) {
                  onSubOpen(item.subModal);
                } else {
                  document.body.style.overflow = 'unset';
                  onClose();
                  window._navigateTo && window._navigateTo(item.path);
                }
              }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[11px] text-center font-semibold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] px-1">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ UPDATED: SubModal now accepts `hasBack` prop and shows subtitle
const SubModal = ({ isOpen, onClose, onBack, subId, hasBack }) => {
  const navigate = useNavigate();
  if (!isOpen || !subId || !subModalData[subId]) return null;
  const data = subModalData[subId];

  const handleItemClick = (path) => {
    document.body.style.overflow = 'unset';
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          {/* ✅ Back arrow only shows if hasBack is true */}
          <button
            onClick={hasBack ? onBack : onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft size={20} className="text-[#2A4334]" />
          </button>
          <h2 className="text-lg font-bold text-[#2A4334]">{data.title}</h2>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <FiShare2 size={18} className="text-[#2A4334]" />
          </button>
        </div>

        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>

        {/* ✅ Title + subtitle block (for painting style) */}
        {data.subtitle && (
          <>
            <div className="px-6 pb-4">
              <p className="text-2xl font-bold text-[#2A4334]">{data.title}</p>
              <p className="text-sm text-gray-400 mt-1">{data.subtitle}</p>
            </div>
            <div className="border-t border-gray-100 mx-0 mb-2" />
          </>
        )}

        {/* Banner (optional) */}
        {data.banner && (
          <div className="mx-4 mb-4 rounded-2xl overflow-hidden flex h-40 relative" style={{ backgroundColor: data.banner.bg }}>
            <div className="flex flex-col justify-center px-5 z-10 w-1/2">
              <span className="text-white text-3xl font-black leading-none">{data.banner.label}</span>
              <span className="text-yellow-300 text-xl font-bold italic leading-tight">{data.banner.sublabel}</span>
              <span className="text-white/80 text-[11px] mt-1">{data.banner.footnote}</span>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img src={data.banner.image} alt="banner" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        )}

        {/* Items list */}
        <div className="px-4 pb-6 divide-y divide-gray-100">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.path)}
              className="flex items-center gap-4 py-4 cursor-pointer group hover:bg-gray-50 rounded-2xl px-2 -mx-2 transition-colors"
            >
              <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#2A4334] text-base">{item.title}</p>
                <p className="text-sm text-gray-500 leading-snug mt-0.5">{item.subtitle}</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryModal = ({ isOpen, onClose, categoryId }) => {
  const navigate = useNavigate();
  if (!isOpen || !categoryId || !modalData[categoryId]) return null;
  const data = modalData[categoryId];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-2xl p-8 md:p-10 shadow-2xl z-10 animate-slide-up">
        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#2A4334] mb-8">{data.title}</h2>
        {data.groups.map((group, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <h3 className="text-lg font-bold text-[#2A4334]/80 mb-4">{group.groupName}</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {group.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  onClick={() => {
                    document.body.style.overflow = 'unset';
                    navigate(item.path);
                  }}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm">
                    <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[11px] text-center font-semibold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] px-1">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const [hubOpen, setHubOpen] = useState(false);
  const [activeHubId, setActiveHubId] = useState(null);

  const [subOpen, setSubOpen] = useState(false);
  const [activeSubId, setActiveSubId] = useState(null);
  // ✅ NEW: tracks whether submodal was opened from a hub (has back) or directly
  const [subHasBack, setSubHasBack] = useState(false);

  window._navigateTo = (path) => {
    document.body.style.overflow = 'unset';
    navigate(path);
  };

  const handleCategoryClick = (category) => {
    document.body.style.overflow = 'hidden';
    if (category.id === 'womens_salon' || category.id === 'mens_salon') {
      setActiveHubId(category.id);
      setHubOpen(true);
    } else if (category.type === 'submodal') {
      // ✅ NEW: painting — opens SubModal directly, no hub behind it
      setActiveSubId(category.id);
      setSubOpen(true);
      setSubHasBack(false);
    } else if (category.type === 'modal') {
      setActiveModalId(category.id);
      setModalOpen(true);
    } else if (category.path) {
      document.body.style.overflow = 'unset';
      navigate(category.path);
    }
  };

  const closeAll = () => {
    setHubOpen(false);
    setSubOpen(false);
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setActiveHubId(null);
      setActiveSubId(null);
      setActiveModalId(null);
    }, 300);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setActiveModalId(null), 300);
  };

  // From hub → submodal (has back button)
  const handleSubOpen = (subId) => {
    setActiveSubId(subId);
    setSubOpen(true);
    setSubHasBack(true); // ✅ came from hub, back button returns to hub
    setHubOpen(false);
  };

  // Back from submodal → reopen hub
  const handleSubBack = () => {
    setSubOpen(false);
    setHubOpen(true);
    setActiveSubId(null);
  };

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pt-24 overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1300px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-[54px] font-serif font-bold text-[#2A4334] mb-8 leading-[1.1] tracking-tight">
              Home services at your <br className="hidden md:block" /> doorstep
            </h1>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2A4334]/5">
              <h2 className="text-lg font-bold text-[#2A4334]/80 mb-6">What are you looking for?</h2>
              <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {mainCategories.map((cat, idx) => (
                  <div key={idx} onClick={() => handleCategoryClick(cat)} className="flex flex-col items-center cursor-pointer group">
                    <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm relative overflow-hidden">
                      <img src={cat.icon} alt={cat.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    </div>
                    <span className="text-[12px] text-center font-semibold leading-snug text-[#2A4334]/90 group-hover:text-[#AA593E] px-1">{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[600px] animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Spa" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Massage" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Repair" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="AC" />
            </div>
          </div>
        </div>
      </main>

      <HubModal isOpen={hubOpen} onClose={closeAll} hubId={activeHubId} onSubOpen={handleSubOpen} />

      {/* ✅ Now passes hasBack and correct onBack */}
      <SubModal
        isOpen={subOpen}
        onClose={closeAll}
        onBack={handleSubBack}
        subId={activeSubId}
        hasBack={subHasBack}
      />

      <CategoryModal isOpen={modalOpen} onClose={closeModal} categoryId={activeModalId} />
    </div>
  );
};

export default MainPage;