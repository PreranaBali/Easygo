import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, FiMapPin, FiX, FiArrowLeft, FiShare2, 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin 
} from 'react-icons/fi';

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const floatAnimationReverse = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
  }
};

// ==========================================
// 1. DATA CONSTANTS 
// ==========================================

const mainCategories = [
  { id: 'instahelp', title: 'InstaHelp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1771308635267-27aaf0.jpeg', type: 'link', path: '/service/instahelp' },
  { id: 'womens_salon', title: "Women's Salon & Spa", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526047861-554660.jpeg', type: 'modal' },
  { id: 'mens_salon', title: "Men's Salon & Massage", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', type: 'modal' },
  { id: 'cleaning_pest_control', title: 'Cleaning & Pest Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699869110346-61ab83.jpeg', type: 'modal' },  
  { id: 'ac_appliance', title: 'AC & Appliance Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544313670-e3f84b.jpeg', type: 'modal' },
  { id: 'water_purifier', title: 'Native Water Purifier', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057787930-167720.jpeg', type: 'link', path: '/product/water_purifier' },
  { id: 'home_repairs', title: 'Electrician, Plumber & Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526974386-784d50.jpeg', type: 'modal' },
  { id: 'painting', title: 'Painting & Waterproofing', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg', type: 'submodal' },
  { id: 'smart_locks', title: 'Native Smart Locks', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1724138391296-c1780b.jpeg', type: 'submodal' },
];

const hubData = {
  womens_salon: {
    title: "Women's Salon & Spa",
    items: [
      { id: 'salon_women', title: 'Salon for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg', hasSub: false, path: '/service/salon_for_women' },
      { id: 'spa_women', title: 'Spa for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'spa_women' },
      { id: 'hair_studio_women', title: 'Hair Studio for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg', hasSub: false, path: '/service/hair_studio_women' },
      { id: 'makeup_saree', title: 'Makeup & Saree Styling', icon: 'https://cdn-icons-png.flaticon.com/128/17981/17981227.png', hasSub: false, path: '/service/makeup_saree_styling' },
    ],
  },
  mens_salon: {
    title: "Men's Salon & Massage",
    items: [
      { id: 'salon_men', title: 'Salon for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', hasSub: false, path: '/service/salon_prime_men' },
      { id: 'massage_men', title: 'Massage for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'massage_men' },
    ],
  },
};

const subModalData = {
  smart_locks: {
  title: 'Native Smart Locks',
  subtitle: 'Smart. Secure. Stunning.',
  banner: null,
  isProduct: true,
  features: [
    {
      heading: 'Only with Lock Pro',
      items: [
        { bg: '#1a2744', theme: 'dark', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800', title: 'See every visitor. 100% of the time.', subtitle: 'The only smart lock that activates from your home doorbell', cta: 'How it works', tall: true },
        { bg: '#111', theme: 'dark', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', title: 'Unlock mechanism hidden inside steel mortise', subtitle: 'Impossible to reach. Impossible to break.', cta: null, tall: false },
        { bg: '#0d1f12', theme: 'dark', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800', title: '6 ways to unlock', subtitle: 'Fingerprint · PIN · Card · Key · App · Voice. All in one sleek device.', cta: null, tall: false },
      ],
    },
  ],
  items: [
    { id: 'lock_pro_blue', title: 'Lock Pro (Cosmic blue)', rating: '4.83', reviews: '5K reviews', price: '₹15,499', oldPrice: '₹16,999', offer: 'Get it at ₹13,999 with offer', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400', path: '/product/smart_locks/lock_pro_blue' },
    { id: 'lock_pro_grey', title: 'Lock Pro (Space grey)', rating: '4.82', reviews: '7K reviews', price: '₹15,499', oldPrice: '₹16,999', offer: 'Get it at ₹13,999 with offer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400', path: '/product/smart_locks/lock_pro_grey' },
  ],
},
  spa_women: {
    title: 'Spa for Women',
    subtitle: null,
    banner: { bg: '#F9A8D4', label: '25% OFF', sublabel: 'summer spree', footnote: '*Up to ₹200 off', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' },
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
  painting: {
    title: 'Painting & Waterproofing',
    subtitle: 'Select your scope',
    banner: null,
    items: [
      { id: 'full_home_painting', title: 'Full home painting', subtitle: '1/2/3/4 BHK & above', image: 'https://tse2.mm.bing.net/th/id/OIP.Jg9EgBRNM9tgLXI39V4ywwHaFC?pid=Api&P=0&h=180', path: '/service/full_home_makeover' },
      { id: 'wall_painting', title: 'Few walls & rooms', subtitle: 'Individual walls or 1/2/3 rooms', image: 'https://i.ytimg.com/vi/n8EzgAKqTF8/maxresdefault.jpg' },
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
          { id: 'ac', title: 'AC', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768547669053-10fbb9.jpeg', path: '/service/ac' },
          { id: 'washing_machine', title: 'Washing Machine', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326898650-c51e1a.jpeg', path: '/service/washing_machine' },
          { id: 'refrigerator', title: 'Refrigerator', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544315662-c55288.jpeg', path: '/service/refrigerator' },
          { id: 'television', title: 'Television', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326902037-b6af08.jpeg', path: '/service/television' },
        ]
      },
      {
        groupName: "Other appliances",
        items: [
          { id: 'chimney', title: 'Chimney', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326927579-afd045.jpeg', path: '/service/chimney' },
          { id: 'microwave', title: 'Microwave', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326912075-c4a3fe.jpeg', path: '/service/microwave' },
          { id: 'laptop', title: 'Laptop', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326917322-7186a1.jpeg', path: '/service/laptop' },
          { id: 'water_purifier_repair', title: 'Water Purifier', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1767779593973-92758b.jpeg', path: '/service/water_purifier_repair' },
        ]
      }
    ]
  },
  cleaning_pest_control: {
  title: "Cleaning & Pest Control",
  groups: [
    {
      groupName: "Cleaning",
      items: [
        { id: 'bathroom_cleaning', title: 'Bathroom Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900642258-b12524.jpeg', path: '/service/bathroom' },
        { id: 'kitchen_cleaning', title: 'Kitchen Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900636163-e44538.jpeg', path: '/service/kitchen' },
        { id: 'full_home_cleaning', title: 'Full Home Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900634115-e18640.jpeg', path: '/service/full_home' },
        { id: 'sofa_carpet_cleaning', title: 'Sofa Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1749192312325-37e66d.jpeg', path: '/service/sofa_carpet_cleaning' },
      ]
    },
    {
      groupName: "Pest Control",
      items: [
        { id: 'cockroach_ant_pest', title: 'General Pest Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900622918-72accc.jpeg', path: '/service/cockroach_control' },
        { id: 'termite_control', title: 'Termite Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900625197-f96e53.jpeg', path: '/service/termite_control' },
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
          { id: 'electrician', title: 'Electrician', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699868754554-a5c5c9.jpeg', path: '/service/electrician' },
          { id: 'plumber', title: 'Plumber', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1722431282836-ee5db3.jpeg', path: '/service/plumber' },
          { id: 'carpenter', title: 'Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1722431287847-8acb8c.jpeg', path: '/service/carpenter' },
        ]
      }
    ]
  }
};

const homeSections = {
  newAndNoteworthy: [
    { title: 'Wall makeover by Revamp', badge: 'NEW', image: 'https://jakijellz.com/wp-content/uploads/2024/04/Bedroom-Renovation-Inspiration.jpeg' },
    { title: 'Native Water Purifier', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057790001-45ccab.jpeg' },
    { title: 'Native Smart Locks', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1772545415993-9fc71c.jpeg' },
    { title: 'Kitchen Cleaning', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1757512720453-11701e.jpeg' },
  ],
  mostBooked: [
    { title: 'Intense bathroom cleaning', rating: '4.80', price: '₹399', oldPrice: '₹499', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1750094373282-58f431.jpeg' },
    { title: 'Haircut for men', rating: '4.87', price: '₹259', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg' },
    { title: 'Foam-jet service (2 ACs)', rating: '4.76', price: '₹1,098', oldPrice: '₹1,190', badge: '2 ACs', image: 'https://www.socspl.com/_next/image?url=https:%2F%2Fcq-dev-rsa.s3.ap-south-1.amazonaws.com%2Fsocspl%2Fservice-management%2Fservices%2F1767797051539_djzom6wg1v_Foam-jet-Service.jpeg&w=1080&q=75' },
    { title: 'Spatula waxing', rating: '4.86', price: '₹699', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1758774489432-95070a.jpeg' },
  ],
  spaForWomen: [
    { title: 'Quick Comfort Therapy', rating: '4.8', price: '₹999', image: 'https://healthywarehouse.com/wp-content/uploads/2025/12/Gemini_Generated_Image_hqlqkihqlqkihqlq.png' },
    { title: '4 Session: Swedish Massage', rating: '4.8', price: '₹1,299', image: 'https://tymedayspa.com/storage/2024/04/Swedish-Massage-by-Tyme-Day-Spa-in-Charlotte-NC.webp' },
    { title: 'Leg Relief Massage', rating: '4.9', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681982472194-c274f9.jpeg' },
  ],
  cleaningEssentials: [
    { title: 'Intense bathroom cleaning', rating: '4.80', price: '₹399', image: 'https://tidyman.com.sg/wp-content/uploads/2025/03/office-bathroom-cleaning.jpg' },
    { title: 'Chimney cleaning', rating: '4.84', price: '₹399', image: 'https://artfasad.com/wp-content/uploads/2023/07/modern-kitchen-chimney-design-11.jpg'},
    { title: 'Fridge cleaning', rating: '4.82', price: '₹499', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1742210433154-7ef1d2.jpeg' },
  ],
  largeAppliances: [
    { title: 'Foam-jet service (2 ACs)', rating: '4.75', price: '₹249', image: 'https://www.socspl.com/_next/image?url=https:%2F%2Fcq-dev-rsa.s3.ap-south-1.amazonaws.com%2Fsocspl%2Fservice-management%2Fservices%2F1767797051539_djzom6wg1v_Foam-jet-Service.jpeg&w=1080&q=75' },
    { title: 'TV check-up', rating: '4.81', price: '₹199', image: 'https://hometriangle.com/imagecache/media/531535/package.png' },
    { title: 'Washing machine repair', rating: '4.70', price: '₹299', image: 'https://dam.thdstatic.com/content/production/Uu9j7EVTtCiPbdcwyEpYkA/nl_UJHvUeVALA8mb6L7gFg/Original%20file/how-to-clean-a-washing-machine-step-10.jpg' },
  ],
};

// ==========================================
// 2. REUSABLE COMPONENTS
// ==========================================

const ServiceCarousel = ({ title, items }) => {
  const navigate = useNavigate();

  const getSlugFromTitle = (title) => {
    const t = title.toLowerCase();
    if (t.includes('bathroom') || t.includes('kitchen') || t.includes('full home') || t.includes("stove")) return 'full_home';
    if (t.includes('sofa') || t.includes('carpet')) return 'sofa_carpet_cleaning';
    if (t.includes('cockroach') || t.includes('pest')) return 'general_pest_control';
    if (t.includes('waxing')) return 'salon_for_women';
    if (t.includes('haircut for men')) return 'salon_prime_men';
    if (t.includes('massage')) return 'ayurvedic_spa_women';
    if (t.includes('water')) return 'water_purifier_repair';
    if (t.includes('ac')) return 'ac';
    return null;
  };

  return (
    <motion.div 
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
      className="mt-16 md:mt-24"
    >
      <motion.div variants={fadeUp} className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#2A4334] tracking-tight">{title}</h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white px-4 py-2 rounded-full text-[#2A4334] text-sm font-bold shadow-sm hover:text-[#AA593E] transition-colors border border-[#2A4334]/5">See all</motion.button>
      </motion.div>
      <div className="flex overflow-x-auto gap-6 pb-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item, i) => (
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -8 }}
            key={i} 
            onClick={() => {
              const slug = getSlugFromTitle(item.title);
              if(slug) navigate(`/service/${slug}`);
            }}
            className="min-w-[220px] md:min-w-[260px] snap-start cursor-pointer group bg-white/40 p-3 rounded-[2rem] border border-white hover:bg-white hover:shadow-lg transition-colors duration-300"
          >
            <div className="rounded-[1.5rem] overflow-hidden relative bg-[#F9F8F6] aspect-square mb-4 shadow-inner">
              {item.badge && <span className="absolute top-3 left-3 bg-[#AA593E] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full z-10 shadow-md">{item.badge}</span>}
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <h3 className="font-bold text-[#2A4334] text-sm md:text-base leading-snug group-hover:text-[#AA593E] transition-colors px-1">{item.title}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-[#2A4334]/80 px-1">
              {item.rating && <span className="flex items-center font-bold bg-[#F59E0B]/10 text-[#F59E0B] px-2 py-0.5 rounded-md text-xs">★ {item.rating}</span>}
              {item.price && <span className="font-black text-[#2A4334]">{item.price}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const BannerAd = ({ title, subtitle, btnText, bg, imgUrl, theme = 'light', targetSlug }) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
    >
      <motion.div 
        variants={fadeUp}
        whileHover={{ scale: 1.01, y: -4 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => targetSlug && navigate(`/service/${targetSlug}`)}
        className="mt-16 md:mt-24 rounded-[3rem] overflow-hidden relative h-[280px] md:h-[400px] flex items-center cursor-pointer shadow-[0_8px_40px_rgb(0,0,0,0.06)] border-4 border-white group" 
        style={{ background: bg }}
      >
        <div className="absolute left-8 md:left-16 z-20 w-[60%] md:w-1/2">
          <h2 className={`text-3xl md:text-[50px] font-bold mb-4 leading-[1.05] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#2A4334]'}`}>{title}</h2>
          <p className={`text-sm md:text-xl mb-8 font-medium ${theme === 'dark' ? 'text-white/80' : 'text-[#2A4334]/80'}`}>{subtitle}</p>
          <button className={`px-6 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl transition-transform active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-[#2A4334] text-white hover:bg-[#1f3126]'}`}>
            {btnText}
          </button>
        </div>
        <div className={`absolute inset-0 z-10 w-[70%] bg-gradient-to-r ${theme === 'dark' ? 'from-black/70 via-black/40 to-transparent' : 'from-white/50 via-white/20 to-transparent'}`}></div>
        <div className="absolute right-0 top-0 h-full w-[60%] md:w-[60%] overflow-hidden z-0 rounded-l-[4rem]">
          <img src={imgUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Banner Ad" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// 3. MODAL COMPONENTS (Animated)
// ==========================================

const HubModal = ({ isOpen, onClose, hubId, onSubOpen }) => {
  const data = hubId ? hubData[hubId] : null;

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#1F3327]/40 backdrop-blur-md" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: customEase }}
            className="relative bg-[#F9F8F6] rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 shadow-2xl z-10 border border-white"
          >
            <button onClick={onClose} className="absolute -top-14 right-0 md:-right-14 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2A4334] shadow-xl hover:bg-white hover:text-[#AA593E] transition-all hover:scale-110 active:scale-95">
              <FiX size={24} />
            </button>
            <h2 className="text-3xl font-serif font-bold text-[#2A4334] mb-8 tracking-tight">{data.title}</h2>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {data.items.map((item) => (
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.95 }}
                  key={item.id}
                  onClick={() => {
                    if (item.hasSub) onSubOpen(item.subModal);
                    else {
                      document.body.style.overflow = 'unset';
                      onClose();
                      window._navigateTo && window._navigateTo(item.path);
                    }
                  }}
                  className="flex flex-col items-center cursor-pointer group bg-white p-3 rounded-2xl shadow-sm border border-[#2A4334]/5"
                >
                  <div className="w-16 h-16 bg-[#F9F8F6] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors duration-300">
                    <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[11px] text-center font-bold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] transition-colors">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SubModal = ({ isOpen, onClose, onBack, subId, hasBack }) => {
  const navigate = useNavigate();
  const data = subId ? subModalData[subId] : null;

  const handleItemClick = (path) => {
    document.body.style.overflow = 'unset';
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1F3327]/40 backdrop-blur-md" onClick={onClose} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: customEase }}
            className="relative bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl z-10 overflow-hidden border border-white"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-white/90 backdrop-blur-md sticky top-0 z-20 border-b border-[#2A4334]/5">
              <button onClick={hasBack ? onBack : onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F9F8F6] hover:bg-[#E8DCCB] transition-colors active:scale-95 text-[#2A4334]">
                <FiArrowLeft size={20} />
              </button>
              <h2 className="text-lg font-bold text-[#2A4334] tracking-tight">{data.title}</h2>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F9F8F6] hover:bg-[#E8DCCB] transition-colors active:scale-95 text-[#2A4334]">
                <FiShare2 size={18} />
              </button>
            </div>

            <button onClick={onClose} className="absolute -top-14 right-0 md:-right-14 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2A4334] shadow-xl hover:scale-110 active:scale-95 transition-transform z-30">
              <FiX size={24} />
            </button>

            <div className="max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#F9F8F6]">
              {data.subtitle && (
                <div className="px-6 pt-6 pb-4">
                  <p className="text-2xl font-bold text-[#2A4334] tracking-tight">{data.title}</p>
                  <p className="text-sm font-medium text-[#2A4334]/60 mt-1">{data.subtitle}</p>
                </div>
              )}

              {data.isProduct ? (
                <div>
                  <div className="px-4 pb-2">
                    {data.items.map((item) => (
                      <motion.div
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        key={item.id} onClick={() => handleItemClick(item.path)}
                        className="flex items-center gap-4 p-4 cursor-pointer group hover:shadow-md bg-white rounded-2xl transition-all duration-300 mb-3 border border-[#2A4334]/5"
                      >
                        <div className="w-24 h-24 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-[#F9F8F6] p-2">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[#2A4334] text-sm leading-tight group-hover:text-[#AA593E] transition-colors">{item.title}</p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <span className="text-yellow-500 text-xs">★</span>
                            <span className="text-xs font-bold text-[#2A4334]">{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-[#2A4334] text-[15px]">{item.price}</span>
                          </div>
                        </div>
                        <span className="text-gray-300 text-xl group-hover:text-[#AA593E] transition-all">›</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="px-4 pb-6 mt-2">
                  {data.items.map((item) => (
                    <motion.div
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      key={item.id} onClick={() => handleItemClick(item.path)}
                      className="flex items-center gap-5 p-3 cursor-pointer group bg-white rounded-[1.5rem] shadow-sm border border-[#2A4334]/5 hover:shadow-md transition-all duration-300 mb-3"
                    >
                      <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#2A4334] text-base leading-tight group-hover:text-[#AA593E] transition-colors">{item.title}</p>
                        <p className="text-xs font-medium text-gray-500 leading-snug mt-1.5">{item.subtitle}</p>
                      </div>
                      <span className="text-gray-300 text-2xl group-hover:text-[#AA593E] transition-all mr-2">›</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CategoryModal = ({ isOpen, onClose, categoryId }) => {
  const navigate = useNavigate();
  const data = categoryId ? modalData[categoryId] : null;

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1F3327]/40 backdrop-blur-md" onClick={onClose} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: customEase }}
            className="relative bg-[#F9F8F6] rounded-[2.5rem] w-full max-w-3xl p-8 md:p-12 shadow-2xl z-10 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-white"
          >
            <button onClick={onClose} className="absolute top-6 right-6 md:-right-14 md:-top-14 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2A4334] shadow-xl hover:bg-white hover:text-[#AA593E] hover:scale-110 active:scale-95 transition-all z-20">
              <FiX size={24} />
            </button>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A4334] mb-10 tracking-tight">{data.title}</h2>
            {data.groups.map((group, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h3 className="text-xs font-bold text-[#2A4334]/50 mb-6 tracking-widest uppercase">{group.groupName}</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4">
                  {group.items.map((item, itemIdx) => (
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.95 }}
                      key={itemIdx}
                      onClick={() => {
                        document.body.style.overflow = 'unset';
                        navigate(item.path);
                      }}
                      className="flex flex-col items-center cursor-pointer group bg-white p-3 rounded-2xl shadow-sm border border-[#2A4334]/5"
                    >
                      <div className="w-16 h-16 bg-[#F9F8F6] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors duration-300">
                        <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-[11px] text-center font-bold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] transition-colors">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


// ==========================================
// 4. MAIN PAGE
// ==========================================

const MainPage = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);
  const [hubOpen, setHubOpen] = useState(false);
  const [activeHubId, setActiveHubId] = useState(null);
  const [subOpen, setSubOpen] = useState(false);
  const [activeSubId, setActiveSubId] = useState(null);
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
    }, 500);
  };

  const handleSubOpen = (subId) => {
    setActiveSubId(subId);
    setSubOpen(true);
    setSubHasBack(true);
    setHubOpen(false);
  };

  const handleSubBack = () => {
    setSubOpen(false);
    setHubOpen(true);
    setTimeout(() => setActiveSubId(null), 500);
  };

  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pt-24 overflow-x-hidden selection:bg-[#AA593E]/20 relative">
      
      {/* Background Orbs for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-80 z-0 mix-blend-overlay"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#AA593E]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="max-w-[1300px] mx-auto px-4 md:px-8 py-10 relative z-10">
        
        {/* === HERO SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Categories */}
          <motion.div initial="hidden" animate="show" variants={staggerContainer}>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-[72px] font-serif font-bold text-[#2A4334] mb-10 leading-[1.05] tracking-tight">
              Home services <br className="hidden md:block" />
              <span className="text-[#AA593E] italic font-medium pr-2">at your</span> doorstep
            </motion.h1>
            
            <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white">
              <h2 className="text-xl font-bold text-[#2A4334] mb-8 tracking-tight font-serif">What are you looking for?</h2>
              <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                {mainCategories.map((cat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCategoryClick(cat)} 
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F9F8F6] rounded-[1.5rem] flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 border border-transparent group-hover:border-[#2A4334]/5">
                      <img src={cat.icon} alt={cat.title} className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-500 ease-out" />
                    </div>
                    <span className="text-[13px] text-center font-bold leading-snug text-[#2A4334]/80 group-hover:text-[#AA593E] px-1 transition-colors">{cat.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Image Grid (Bento style) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }}
            className="hidden lg:grid grid-cols-2 gap-6 h-[700px]"
          >
            <motion.div variants={floatAnimation} className="flex flex-col gap-6 pt-12">
              <div className="w-full h-[55%] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-[6px] border-white/40">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="Spa" />
              </div>
              <div className="w-full h-[45%] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-[6px] border-white/40">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="Massage" />
              </div>
            </motion.div>
            <motion.div variants={floatAnimationReverse} className="flex flex-col gap-6 pb-12">
              <div className="w-full h-[45%] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-[6px] border-white/40">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="AC" />
              </div>
              <div className="w-full h-[55%] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-[6px] border-white/40">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="Repair" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* === SCROLLING CONTENT === */}
        <div className="mt-16 md:mt-32">
          <ServiceCarousel title="New and noteworthy" items={homeSections.newAndNoteworthy} />
          <ServiceCarousel title="Most booked services" items={homeSections.mostBooked} />
          <BannerAd 
            title="Wall Panels" subtitle="Level up your walls" btnText="Know more" bg="#E8DCCB"
            targetSlug="full_home_painting" imgUrl="https://www.familyhandyman.com/wp-content/uploads/2023/02/GettyImages-1290170612-scaled.jpg?resize=2048" 
          />
          <ServiceCarousel title="Spa for Women" items={homeSections.spaForWomen} />
          <BannerAd 
            title="Native Smart locks" subtitle="Camera. Doorbell. All-in one." btnText="Buy now" bg="#1A1F2C" theme="dark"
            targetSlug="smart_locks" imgUrl="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600" 
          />
          <ServiceCarousel title="Cleaning Essentials" items={homeSections.cleaningEssentials} />
          <BannerAd 
            title="Give your Space the glow-up it deserves" subtitle="Home painting" btnText="Buy now" bg="#D6E0D9" 
            targetSlug="painting" imgUrl="https://wallpapers.com/images/hd/unique-living-room-house-interior-q76ikyi5mcdi302m.jpg" 
          />
          <ServiceCarousel title="Large appliances" items={homeSections.largeAppliances} />
        </div>
      </main>

      {/* === MODALS === */}
      <HubModal isOpen={hubOpen} onClose={closeAll} hubId={activeHubId} onSubOpen={handleSubOpen} />
      <SubModal isOpen={subOpen} onClose={closeAll} onBack={handleSubBack} subId={activeSubId} hasBack={subHasBack} />
      <CategoryModal isOpen={modalOpen} onClose={closeAll} categoryId={activeModalId} />
    </div>
  );
};

export default MainPage;