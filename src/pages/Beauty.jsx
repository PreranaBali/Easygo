import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: customEase } }
};

// ==========================================
// 1. HORIZONTAL SLIDER (Animated)
// ==========================================
const HorizontalSlider = ({ title, subtitle, actionText, children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="mt-12 mb-10"
    >
      <motion.div variants={fadeUp} className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-[34px] font-serif text-[#2A4334] tracking-tight leading-snug">{title}</h2>
          <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full opacity-60"></div>
          {subtitle && <p className="text-[#2A4334]/70 text-[15px] mt-1 font-medium">{subtitle}</p>}
        </div>
        {actionText && (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-bold text-[#AA593E] hover:text-[#8a4731] transition-colors px-4 py-2 bg-[#AA593E]/5 rounded-full"
          >
            {actionText}
          </motion.button>
        )}
      </motion.div>

      <motion.div variants={fadeUp} className="relative group/slider">
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#F9F8F6]/90 backdrop-blur-sm border border-[#2A4334]/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-opacity duration-300 ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronLeft size={28} className="text-[#2A4334]" />
        </motion.button>

        <div ref={scrollRef} onScroll={checkScroll} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory px-1">
          {children}
        </div>

        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-14 h-14 items-center justify-center rounded-full bg-[#F9F8F6]/90 backdrop-blur-sm border border-[#2A4334]/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-opacity duration-300 ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronRight size={28} className="text-[#2A4334]" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================
const BeautyPage = () => {
  const navigate = useNavigate();

  const handleServiceClick = (slug) => {
    if (slug) navigate(`/service/${slug}`); 
  };

  // --- MOCK DATA ---
  const heroServices = [
    { title: "Salon for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg", tag: "Sale", time: "45 mins", slug: "salon_for_women" },
    { title: "Spa for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg", tag: "Sale", slug: "ayurvedic_spa_women" },
    { title: "Hair Studio for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg", slug: "hair_studio_women" },
    { title: "Makeup, Saree & Styling", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1669023257508-ffd582.jpeg", slug: "makeup_saree_styling" },
    { title: "Salon Prime for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg", slug: "salon_prime_men" },
    { title: "Massage for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1674623814769-eeca92.jpeg", slug: "prime_massage_men" }
  ];

  const promoBanners = [
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1712901363859-410ccb.jpeg", slug: "salon_for_women" },
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1749719167789-a2e4a9.jpeg", slug: "salon_prime_men" },
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428187463-abb19d.jpeg", slug: "ayurvedic_spa_women" }
  ];

  const hairAndNailGrid = [
    { title: "Haircut for women", rating: "4.83", reviews: "125K", price: "₹549", img: "https://images.pexels.com/photos/19239103/pexels-photo-19239103/free-photo-of-young-beautiful-woman-having-her-hair-cut-at-the-hairdresser-scissors-cut-the-girls-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", slug: "hair_studio_women" },
    { title: "Hair colour (application only)", rating: "4.81", reviews: "42K", price: "₹399", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_144,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762946941523-faef6e.jpeg", slug: "hair_studio_women" },
    { title: "Basic makeup", rating: "4.73", reviews: "9K", price: "₹1,599", img: "https://thumbs.dreamstime.com/b/woman-face-portrait-makeup-lip-liner-beauty-cosmetic-product-glow-studio-background-indian-female-cosmetics-pencil-274901504.jpg", slug: "makeup_saree_styling" },
    { title: "In curl/out curl blow-dry", rating: "4.80", reviews: "58K", price: "₹399", img: "https://i.pinimg.com/736x/78/e0/56/78e056f6534d005c053d4171947d53e6.jpg", slug: "hair_studio_women" },
  ];

  const mostBooked = [
    { title: "Roll-on Waxing (Full arms, legs & underarms)", rating: "4.87", reviews: "155K", price: "₹1,099", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1670322517916-aeaa17.jpeg", slug: "salon_for_women" },
    { title: "Crystal rose pedicure", rating: "4.81", reviews: "38K", price: "₹859", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763038614950-13e09b.jpeg", slug: "salon_for_women" },
    { title: "Haircut for women", rating: "4.83", reviews: "120K", price: "₹549", img: "https://vittagold.com/cdn/shop/articles/salon-at-home-transform-your-home-into-a-salon-with-exclusive-services-vitta-gold-cosmetics.jpg?v=1719432742&width=2700", slug: "hair_studio_women" },
    { title: "Haircut for men", rating: "4.87", reviews: "200K", price: "₹259", img: "https://wallpapercave.com/wp/wp11627930.jpg", slug: "salon_prime_men" },
  ];

  const salonForWomen = [
    { title: "Waxing", img: "https://img.freepik.com/free-photo/woman-getting-legs-waxed-spa_53876-13496.jpg", slug: "salon_for_women" },
    { title: "Cleanup", img: "https://as1.ftcdn.net/jpg/04/39/44/68/1000_F_439446829_oVfOIXT5lSt5r0pxV9iiGZ5bTYYZuX3Z.jpg", slug: "salon_for_women" },
    { title: "Hair care", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1634207119118-ec91e9.png", slug: "hair_studio_women" },
  ];

  const salonForMen = [
    { title: "Haircut and Beard styling", img: "https://www.shutterstock.com/image-photo/getting-perfect-shape-closeup-side-600nw-364870139.jpg", slug: "salon_prime_men" },
    { title: "Facial & cleanup", img: "https://aryahotelmahabaleshwar.com/storage/2024/04/facial-and-cleanup.jpg", slug: "salon_prime_men" },
    { title: "Pedicure & Manicure", img: "https://shinecode.ae/storage/212/mani4.jpg", slug: "salon_prime_men" },
  ];

  const spaForWomen = [
    { title: "Stress relief", img: "https://aromatherapyhomespa.com/wp-content/uploads/2025/05/Ayurvedic-Spa-Treatments-for-Stress-Relief.jpg", slug: "ayurvedic_spa_women" },
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681975066670-e71141.jpeg", slug: "ayurvedic_spa_women" },
  ];

  const spaForMen = [
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/partner-app-supply/1662545107373-4baa44.png", slug: "prime_massage_men" },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen font-sans text-[#2A4334] pb-0 flex flex-col selection:bg-[#AA593E]/20 selection:text-[#AA593E] relative overflow-hidden">
      
      {/* Background Orbs for Depth */}
      <div className="absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-100 z-0 mix-blend-overlay"></div>
      <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] bg-[#AA593E]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="flex-grow relative z-10">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 pt-24 pb-20">
          
          {/* 1. HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-5"
            >
              <motion.h1 variants={fadeUp} className="text-[46px] md:text-[56px] leading-[1.05] font-serif font-bold text-[#2A4334] mb-10 tracking-tight">
                Beauty services at <br/> your doorstep
              </motion.h1>

              {/* Service Grid - Glassmorphism */}
              <motion.div variants={fadeUp} className="border border-white bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] mb-10">
                <h3 className="text-xl font-bold text-[#2A4334] mb-8 font-serif">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                  {heroServices.map((service, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleServiceClick(service.slug)} 
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-[88px] h-[88px] bg-[#F9F8F6] rounded-[1.5rem] flex items-center justify-center relative mb-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300 border border-transparent group-hover:border-[#2A4334]/5">
                        {service.tag && (
                          <span className="absolute -top-2 px-2.5 py-0.5 text-[10px] font-bold text-white bg-[#AA593E] rounded-full z-10 shadow-sm uppercase tracking-wider">
                            {service.tag}
                          </span>
                        )}
                        {service.time && (
                          <span className="absolute -bottom-2.5 px-2.5 py-0.5 text-[10px] font-bold text-[#2A4334] bg-white border border-[#2A4334]/10 shadow-sm rounded-full z-10">
                            {service.time}
                          </span>
                        )}
                        <img src={service.img} alt={service.title} className="w-11 h-11 object-contain group-hover:scale-110 transition-transform duration-500 ease-out" />
                      </div>
                      <span className="text-[13px] font-bold text-center text-[#2A4334]/80 leading-snug px-1 group-hover:text-[#AA593E] transition-colors">
                        {service.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-10 pl-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#2A4334]/5">
                     <Star size={20} className="text-[#F59E0B] fill-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-2xl font-black leading-none mb-1.5 text-[#2A4334]">4.8</div>
                    <div className="text-xs text-[#2A4334]/60 font-bold uppercase tracking-wider">Service Rating</div>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-[#2A4334]/10"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#2A4334]/5">
                     <Users size={20} className="text-[#AA593E]" />
                  </div>
                  <div>
                    <div className="text-2xl font-black leading-none mb-1.5 text-[#2A4334]">12M+</div>
                    <div className="text-xs text-[#2A4334]/60 font-bold uppercase tracking-wider">Happy Users</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 grid grid-cols-2 gap-5 h-[500px] md:h-[650px]"
            >
              <div className="flex flex-col gap-5">
                <motion.img variants={imageReveal} src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" className="w-full h-[60%] object-cover rounded-[2.5rem] shadow-lg border border-white" alt="Facial" />
                <motion.img variants={imageReveal} src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-[2.5rem] object-top shadow-lg border border-white" alt="Haircut" />
              </div>
              <div className="flex flex-col gap-5 pt-12">
                <motion.img variants={imageReveal} src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-[2.5rem] shadow-lg border border-white" alt="Massage" />
                <motion.img variants={imageReveal} src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?cs=srgb&dl=pexels-engin-akyurt-3356170.jpg&fm=jpg" className="w-full h-[60%] object-cover rounded-[2.5rem] shadow-lg border border-white" alt="Styling" />
              </div>
            </motion.div>
          </div>

          <motion.hr initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-[#2A4334]/10 my-16" />

          {/* 2. PROMO BANNERS */}
          <motion.div 
             initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
             className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x px-1"
          >
            {promoBanners.map((banner, idx) => (
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={idx}
                onClick={() => handleServiceClick(banner.slug)}
                className="snap-start flex-none w-[85vw] md:w-[400px] h-[160px] md:h-[200px] rounded-[2rem] overflow-hidden relative cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 border-white"
              >
                <img src={banner.img} alt="Promo" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </motion.div>
            ))}
          </motion.div>

          {/* 3. MOST BOOKED SERVICES */}
          <HorizontalSlider title="Most booked services">
            {mostBooked.map((item, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} 
                onClick={() => handleServiceClick(item.slug)} 
                className="snap-start flex-none w-[180px] cursor-pointer group bg-white/40 backdrop-blur-md p-3 rounded-[1.8rem] border border-white hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-[160px] rounded-2xl overflow-hidden mb-4 shadow-sm relative">
                  <div className="absolute inset-0 bg-[#2A4334]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-[14px] leading-tight mb-2 line-clamp-2 text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                <div className="flex items-center gap-1.5 text-xs text-[#2A4334]/60 mb-2 font-medium">
                  <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="font-bold text-[#2A4334]">{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
                <div className="font-black text-[16px] text-[#2A4334]">{item.price}</div>
              </motion.div>
            ))}
          </HorizontalSlider>

          {/* 4. SALON FOR WOMEN */}
          <HorizontalSlider title="Salon for women">
            {salonForWomen.map((item, idx) => (
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={idx} 
                onClick={() => handleServiceClick(item.slug)} 
                className="snap-start flex-none w-[200px] cursor-pointer group"
              >
                <div className="w-full h-[220px] bg-[#E8DCCB] rounded-[2rem] overflow-hidden mb-4 relative flex items-end justify-center pb-0 border-2 border-white shadow-sm transition-colors group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <img src={item.img} alt={item.title} className="w-[90%] h-[90%] object-cover rounded-t-full transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <h4 className="font-bold text-[16px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
              </motion.div>
            ))}
          </HorizontalSlider>

          {/* 5. LARGE BANNER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleServiceClick('ayurvedic_spa_women')} 
            className="w-full h-[250px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative mt-16 mb-20 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.08)] border-4 border-white"
          >
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216798701-9a08f0.jpeg" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" alt="Banner" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute bottom-10 left-10 md:bottom-14 md:left-14">
               <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Premium</span>
               <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg">Ayurvedic Spa</h2>
            </div>
          </motion.div>

          {/* 6. HAIR & NAIL SERVICES (GRID LAYOUT) */}
          <motion.section 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="mt-20 mb-20 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgb(0,0,0,0.03)]"
          >
            <motion.div variants={fadeUp} className="mb-10 text-center">
              <h2 className="text-[32px] md:text-4xl font-serif font-bold text-[#2A4334] tracking-tight">Hair & Nail services</h2>
              <div className="h-[2px] w-16 bg-[#AA593E] mx-auto mt-4 mb-3 rounded-full opacity-60"></div>
              <p className="text-[#2A4334]/60 text-[15px] font-medium uppercase tracking-widest">Refreshed style, revamped look</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {hairAndNailGrid.map((item, idx) => (
                <motion.div 
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  key={idx} 
                  onClick={() => handleServiceClick(item.slug)} 
                  className="cursor-pointer group flex flex-col bg-white p-3 rounded-[2rem] shadow-sm border border-[#2A4334]/5 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden mb-4 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </div>
                  <div className="px-2 pb-2">
                    <h4 className="font-bold text-[15px] text-[#2A4334] leading-snug mb-2 line-clamp-1 group-hover:text-[#AA593E] transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[12px] text-[#2A4334]/60 mb-2 font-medium">
                      <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="font-bold text-[#2A4334]">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                    <div className="text-[16px] font-black text-[#2A4334]">{item.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 7. SALON FOR MEN */}
          <HorizontalSlider title="Salon for Men">
            {salonForMen.map((item, idx) => (
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={idx} 
                onClick={() => handleServiceClick(item.slug)} 
                className="snap-start flex-none w-[200px] cursor-pointer group"
              >
                <div className="w-full h-[220px] bg-[#D5D8D2] rounded-[2rem] overflow-hidden mb-4 relative flex items-end justify-center pb-0 border-2 border-white shadow-sm transition-colors group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-[#E8DCCB]">
                  <img src={item.img} alt={item.title} className="w-[90%] h-[90%] object-cover rounded-t-full transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <h4 className="font-bold text-[15px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors px-2 leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </HorizontalSlider>

          {/* 8. LARGE BANNER (Massage) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleServiceClick('prime_massage_men')} 
            className="w-full h-[250px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative mt-16 mb-16 cursor-pointer group shadow-[0_8px_40px_rgb(0,0,0,0.08)] border-4 border-white"
          >
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg" alt="Massage" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 md:bottom-14 md:left-14">
               <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Relax</span>
               <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg">Prime Massage</h2>
            </div>
          </motion.div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </div>
  );
};

export default BeautyPage;