import React, { useRef, useState, useEffect } from 'react';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

// --- UPGRADED HORIZONTAL SLIDER (WITH DYNAMIC ARROWS) ---
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
    <section className="mt-12 mb-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight">{title}</h2>
          <div className="h-1 w-12 bg-black mt-3 mb-2 rounded-full"></div>
          {subtitle && <p className="text-gray-500 text-[15px] mt-1">{subtitle}</p>}
        </div>
        {actionText && (
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            {actionText}
          </button>
        )}
      </div>

      {/* Slider Wrapper with Arrows */}
      <div className="relative group/slider">
        
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={24} className="text-black" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-5 pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {children}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={24} className="text-black" />
        </button>

      </div>
    </section>
  );
};

const BeautyPage = () => {
  // --- MOCK DATA ---
  const heroServices = [
    { title: "Salon for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg", tag: "Sale", time: "45 mins" },
    { title: "Spa for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg", tag: "Sale" },
    { title: "Hair Studio for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg" },
    { title: "Makeup, Saree & Styling", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1669023257508-ffd582.jpeg" },
    { title: "Salon Prime for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg" },
    { title: "Massage for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1674623814769-eeca92.jpeg" }
  ];

  const promoBanners = [
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1712901363859-410ccb.jpeg" },
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1749719167789-a2e4a9.jpeg" },
    { img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428187463-abb19d.jpeg" }
  ];

  const hairAndNailGrid = [
    { title: "Haircut for women", rating: "4.83", reviews: "125K", price: "₹549", img: "https://images.pexels.com/photos/19239103/pexels-photo-19239103/free-photo-of-young-beautiful-woman-having-her-hair-cut-at-the-hairdresser-scissors-cut-the-girls-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Hair colour (application only)", rating: "4.81", reviews: "42K", price: "₹399", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_144,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762946941523-faef6e.jpeg" },
    { title: "Basic makeup", rating: "4.73", reviews: "9K", price: "₹1,599", img: "https://thumbs.dreamstime.com/b/woman-face-portrait-makeup-lip-liner-beauty-cosmetic-product-glow-studio-background-indian-female-cosmetics-pencil-274901504.jpg" },
    { title: "In curl/out curl blow-dry", rating: "4.80", reviews: "58K", price: "₹399", img: "https://i.pinimg.com/736x/78/e0/56/78e056f6534d005c053d4171947d53e6.jpg" },
    { title: "Straight & smooth blow-dry", rating: "4.86", reviews: "25K", price: "₹399", img: "https://images.squarespace-cdn.com/content/v1/5efb21e22d2fd96571cbb173/dac42b8f-5360-4b43-b57d-c9e2b95c1f40/Retexturising+smoothing+treatments+-+brazilian+blow+dry.png" },
    { title: "L'Oreal Inoa root touch-up", rating: "4.73", reviews: "12K", price: "₹1,299", img: "https://ie.lorealpartnershop.com/dw/image/v2/BCKD_PRD/on/demandware.static/-/Sites-master-PPD-IE/default/dw81643990/products/INOACORENEW_BLACK_ABYSS_2.jpg?sw=500&sh=500&sm=fit" },
    { title: "Hair trim", rating: "4.82", reviews: "45K", price: "₹449", img: "https://img77.uenicdn.com/image/upload/v1523876994/service_images/adobestock_163721760.jpg" },
    { title: "Basic makeup package", rating: "4.70", reviews: "18K", price: "₹2,099", img: "https://www.megoonthego.com/wp-content/uploads/2021/05/basic-makeup-kit-for-beginners-on-a-budget-sq.jpg" },
  ];

  const mostBooked = [
    { title: "Roll-on Waxing (Full arms, legs & underarms)", rating: "4.87", reviews: "155K", price: "₹1,099", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1670322517916-aeaa17.jpeg" },
    { title: "Crystal rose pedicure", rating: "4.81", reviews: "38K", price: "₹859", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763038614950-13e09b.jpeg" },
    { title: "Haircut for women", rating: "4.83", reviews: "120K", price: "₹549", img: "https://vittagold.com/cdn/shop/articles/salon-at-home-transform-your-home-into-a-salon-with-exclusive-services-vitta-gold-cosmetics.jpg?v=1719432742&width=2700" },
    { title: "Haircut for men", rating: "4.87", reviews: "200K", price: "₹259", img: "https://wallpapercave.com/wp/wp11627930.jpg" },
    { title: "Rejuvenating Crystal Spa Pedicure", rating: "4.86", reviews: "155K", price: "₹1,249", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1733298284712-4d996d.jpeg" },
    { title: "Hair Color (Application Only)", rating: "4.81", reviews: "38K", price: "₹399", img: "https://pinklimevc.com/wp-content/uploads/2023/09/Best-semi-permanent-hair-colour-in-Vancouver.webp" },
    { title: "RICA / Aloe / Honey Waxing", rating: "4.90", reviews: "120K", price: "₹1,199", img: "https://images.squarespace-cdn.com/content/v1/6358773dfa2fa42351f2e029/406cb918-b619-4c0e-a5fa-a4f31708ec85/full+face+waxing.jpeg" },
    { title: "Haircut for Kids", rating: "4.85", reviews: "200K", price: "₹259", img: "https://i.pinimg.com/originals/30/a9/7f/30a97f37a281413a0b438ac0c7579caa.jpg" },
    { title: "Basic Makeup", rating: "4.73", reviews: "120K", price: "₹1,599", img: "https://thumbs.dreamstime.com/b/woman-face-portrait-makeup-lip-liner-beauty-cosmetic-product-glow-studio-background-indian-female-cosmetics-pencil-274901504.jpg" },
    { title: "Spatula Waxing", rating: "4.86", reviews: "200K", price: "₹799", img: "https://img.freepik.com/premium-photo/professional-leg-waxing-treatment-beauty-spa-with-beautician-applying-wax-using-wooden-spatula_664057-4426.jpg" },
  ];

  const salonForWomen = [
    { title: "Waxing", img: "https://img.freepik.com/free-photo/woman-getting-legs-waxed-spa_53876-13496.jpg" },
    { title: "Cleanup", img: "https://as1.ftcdn.net/jpg/04/39/44/68/1000_F_439446829_oVfOIXT5lSt5r0pxV9iiGZ5bTYYZuX3Z.jpg" },
    { title: "Hair care", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1634207119118-ec91e9.png" },
  ];

  const salonForMen = [
    { title: "Haircut and Beard styling", img: "https://www.shutterstock.com/image-photo/getting-perfect-shape-closeup-side-600nw-364870139.jpg" },
    { title: "Facial & cleanup", img: "https://aryahotelmahabaleshwar.com/storage/2024/04/facial-and-cleanup.jpg" },
    { title: "Pedicure & Manicure", img: "https://shinecode.ae/storage/212/mani4.jpg" },
    { title: "Hair color & Hair spa", img: "https://salon85.co.in/wp-content/uploads/2025/09/Ceramide-treatment.webp" },
  ];

  const spaForWomen = [
    { title: "Stress relief", img: "https://aromatherapyhomespa.com/wp-content/uploads/2025/05/Ayurvedic-Spa-Treatments-for-Stress-Relief.jpg" },
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681975066670-e71141.jpeg" },
  ];

  const spaForMen = [
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/partner-app-supply/1662545107373-4baa44.png" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 pb-0 flex flex-col">
      
      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 pb-20">
          
          {/* 1. HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            {/* Hero Left Content */}
            <div>
              <h1 className="text-[40px] leading-[1.1] font-bold text-gray-900 mb-10 tracking-tight">
                Beauty services at your <br/> doorstep
              </h1>

              <div className="border border-gray-200 rounded-2xl p-6 shadow-sm mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                  {heroServices.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-[84px] h-[84px] bg-[#F5F5F6] rounded-2xl flex items-center justify-center relative mb-3 group-hover:bg-gray-200 transition-colors">
                        {service.tag && (
                          <span className="absolute -top-2 px-2 py-0.5 text-[10px] font-bold text-white bg-[#008A4A] rounded-[4px] z-10">
                            {service.tag}
                          </span>
                        )}
                        {service.time && (
                          <span className="absolute -bottom-2 px-2 py-0.5 text-[10px] font-bold text-gray-700 bg-white border border-gray-200 shadow-sm rounded-[4px] z-10">
                            {service.time}
                          </span>
                        )}
                        <img src={service.img} alt={service.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[13px] font-medium text-center text-gray-700 leading-snug px-1">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-12 pl-2">
                <div className="flex items-center gap-3">
                  <Star size={24} className="text-black" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1">4.8</div>
                    <div className="text-xs text-gray-500 font-medium">Service Rating*</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={24} className="text-black" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1">12M+</div>
                    <div className="text-xs text-gray-500 font-medium">Customers Globally*</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Images */}
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" className="w-full h-[60%] object-cover rounded-xl" alt="Facial" />
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-xl object-top" alt="Haircut" />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-xl" alt="Massage" />
                <img src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?cs=srgb&dl=pexels-engin-akyurt-3356170.jpg&fm=jpg" className="w-full h-[60%] object-cover rounded-xl" alt="Styling" />
              </div>
            </div>
          </div>

          <hr className="border-gray-100 my-10" />

          {/* 2. PROMO BANNERS */}
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
            {promoBanners.map((banner, idx) => (
              <div
                key={idx}
                className="snap-start flex-none w-[500px] md:w-[360px] h-[150px] md:h-[180px] rounded-xl overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={banner.img}
                  alt="Promo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* 3. MOST BOOKED SERVICES */}
          <HorizontalSlider title="Most booked services">
            {mostBooked.map((item, idx) => (
              <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-3">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-semibold text-[15px] leading-snug mb-1 line-clamp-2">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <Star size={14} className="fill-black text-black" />
                  <span className="font-bold text-black">{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
                <div className="font-bold text-[15px]">{item.price}</div>
              </div>
            ))}
          </HorizontalSlider>

          <hr className="border-gray-100 my-10" />

          {/* 4. SALON FOR WOMEN */}
          <HorizontalSlider title="Salon for women">
            {salonForWomen.map((item, idx) => (
              <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[200px] bg-[#FAF5F4] rounded-2xl overflow-hidden mb-3 relative flex items-end justify-center pb-0">
                  <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-semibold text-[15px] text-center">{item.title}</h4>
              </div>
            ))}
          </HorizontalSlider>

          {/* 5. LARGE BANNER (Spa) */}
          <div className="w-full h-[250px] md:h-[380px] rounded-xl overflow-hidden relative mt-12 mb-16 cursor-pointer group">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216798701-9a08f0.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* 6. SPA FOR WOMEN (REFINED & ATTRACTIVE) */}
          <HorizontalSlider title="Spa for women" subtitle="Refresh. Rewind. Rejuvenate.">
            {spaForWomen.map((item, idx) => (
              <div 
                key={idx} 
                className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-[#FAFAFA] border border-gray-200 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <h4 className="font-bold text-[17px] md:text-[19px] text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              </div>
            ))}
          </HorizontalSlider>

          {/* 7. HAIR & NAIL SERVICES (GRID LAYOUT) */}
          <section className="mt-16 mb-16">
            <div className="mb-8">
              <h2 className="text-[28px] md:text-3xl font-bold text-gray-900 tracking-tight">
                Hair & Nail services
              </h2>
              <p className="text-gray-500 text-[15px] mt-1">
                Refreshed style, revamped look
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {hairAndNailGrid.map((item, idx) => (
                <div key={idx} className="cursor-pointer group flex flex-col">
                  <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="font-semibold text-[15px] text-gray-900 leading-snug mb-1.5 line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[13px] text-gray-600 mb-1.5">
                    <Star size={14} className="fill-black text-black" />
                    <span className="font-bold text-black">{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="text-[14px] text-gray-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. LARGE BANNER (Spa 2) */}
          <div className="w-full h-[250px] md:h-[380px] rounded-xl overflow-hidden relative mt-12 mb-16 cursor-pointer group">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216790006-967dd6.jpeg" alt="Spa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* 9. SALON FOR MEN */}
          <HorizontalSlider title="Salon for Men">
            {salonForMen.map((item, idx) => (
              <div key={idx} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[200px] bg-[#FAF5F4] rounded-2xl overflow-hidden mb-3 relative flex items-end justify-center pb-0">
                  <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-semibold text-[15px] text-center">{item.title}</h4>
              </div>
            ))}
          </HorizontalSlider>

          {/* 10. LARGE BANNER (Spa 3) */}
          <div className="w-full h-[250px] md:h-[380px] rounded-xl overflow-hidden relative mt-12 mb-16 cursor-pointer group">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* 11. MASSAGE FOR MEN */}
          <HorizontalSlider title="Massage for Men" subtitle="Refresh. Rewind. Rejuvenate.">
            {spaForMen.map((item, idx) => (
              <div 
                key={idx} 
                className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-[#FAFAFA] border border-gray-200 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <h4 className="font-bold text-[17px] md:text-[19px] text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              </div>
            ))}
          </HorizontalSlider>

        </div>
      </main>

      {/* --- PREMIUM COMMERCIAL FOOTER --- */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 mt-auto w-full">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4 lg:pr-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white text-black font-extrabold text-sm px-2.5 py-1.5 rounded-md leading-none tracking-tight">
                  EG
                </div>
                <div className="text-2xl font-bold leading-none tracking-tight flex flex-col justify-center">
                  <span>Easy</span>
                  <span className="font-normal text-[22px]">Go</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-loose mb-8">
                The premier platform for home services and space revamps. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaFacebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Anti-Discrimination</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">For Customers</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">EasyGo Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Categories Near You</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* App Download Column */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Get the EasyGo App</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Book premium services on the go. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-xl px-5 py-3 w-full sm:w-auto">
                  <FaApple size={28} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold leading-none mb-1">Download on the</div>
                    <div className="text-sm font-bold text-white leading-none">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-xl px-5 py-3 w-full sm:w-auto">
                  <FaGooglePlay size={24} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold leading-none mb-1">GET IT ON</div>
                    <div className="text-sm font-bold text-white leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium">
              © {new Date().getFullYear()} EasyGo Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-gray-500 text-xs font-medium">India</span>
              <span className="text-gray-500 text-xs font-medium">USA</span>
              <span className="text-gray-500 text-xs font-medium">UAE</span>
              <span className="text-gray-500 text-xs font-medium">Singapore</span>
            </div>
          </div>

        </div>
      </footer>

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