import React, { useRef, useState, useEffect } from 'react';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-[34px] font-serif text-[#2A4334] tracking-tight leading-snug">{title}</h2>
          <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
          {subtitle && <p className="text-[#2A4334]/70 text-[15px] mt-1 font-light">{subtitle}</p>}
        </div>
        {actionText && (
          <button className="text-sm font-semibold text-[#AA593E] hover:text-[#8a4731] transition-colors border-b border-transparent hover:border-[#AA593E] pb-0.5">
            {actionText}
          </button>
        )}
      </div>

      <div className="relative group/slider">
        <button onClick={() => scroll('left')} className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-[#F6F4EE] border border-[#2A4334]/10 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}>
          <ChevronLeft size={24} className="text-[#2A4334]" />
        </button>

        <div ref={scrollRef} onScroll={checkScroll} className="flex overflow-x-auto gap-5 pb-4 hide-scrollbar snap-x snap-mandatory">
          {children}
        </div>

        <button onClick={() => scroll('right')} className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-20 w-12 h-12 items-center justify-center rounded-full bg-[#F6F4EE] border border-[#2A4334]/10 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#AA593E] ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}>
          <ChevronRight size={24} className="text-[#2A4334]" />
        </button>
      </div>
    </section>
  );
};

const BeautyPage = () => {
  const navigate = useNavigate();

  // --- SMART ROUTING HELPER ---
  // Now it just takes the explicit slug we assign it. No more random missing pages!
  const handleServiceClick = (slug) => {
    if (slug) navigate(`/service/${slug}`); 
  };

  // --- MOCK DATA UPDATED WITH EXPLICIT SLUGS ---
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
    { title: "Straight & smooth blow-dry", rating: "4.86", reviews: "25K", price: "₹399", img: "https://images.squarespace-cdn.com/content/v1/5efb21e22d2fd96571cbb173/dac42b8f-5360-4b43-b57d-c9e2b95c1f40/Retexturising+smoothing+treatments+-+brazilian+blow+dry.png", slug: "hair_studio_women" },
    { title: "L'Oreal Inoa root touch-up", rating: "4.73", reviews: "12K", price: "₹1,299", img: "https://ie.lorealpartnershop.com/dw/image/v2/BCKD_PRD/on/demandware.static/-/Sites-master-PPD-IE/default/dw81643990/products/INOACORENEW_BLACK_ABYSS_2.jpg?sw=500&sh=500&sm=fit", slug: "salon_for_women" },
    { title: "Hair trim", rating: "4.82", reviews: "45K", price: "₹449", img: "https://img77.uenicdn.com/image/upload/v1523876994/service_images/adobestock_163721760.jpg", slug: "hair_studio_women" },
    { title: "Basic makeup package", rating: "4.70", reviews: "18K", price: "₹2,099", img: "https://www.megoonthego.com/wp-content/uploads/2021/05/basic-makeup-kit-for-beginners-on-a-budget-sq.jpg", slug: "makeup_saree_styling" },
  ];

  const mostBooked = [
    { title: "Roll-on Waxing (Full arms, legs & underarms)", rating: "4.87", reviews: "155K", price: "₹1,099", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1670322517916-aeaa17.jpeg", slug: "salon_for_women" },
    { title: "Crystal rose pedicure", rating: "4.81", reviews: "38K", price: "₹859", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763038614950-13e09b.jpeg", slug: "salon_for_women" },
    { title: "Haircut for women", rating: "4.83", reviews: "120K", price: "₹549", img: "https://vittagold.com/cdn/shop/articles/salon-at-home-transform-your-home-into-a-salon-with-exclusive-services-vitta-gold-cosmetics.jpg?v=1719432742&width=2700", slug: "hair_studio_women" },
    { title: "Haircut for men", rating: "4.87", reviews: "200K", price: "₹259", img: "https://wallpapercave.com/wp/wp11627930.jpg", slug: "salon_prime_men" },
    { title: "Rejuvenating Crystal Spa Pedicure", rating: "4.86", reviews: "155K", price: "₹1,249", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1733298284712-4d996d.jpeg", slug: "ayurvedic_spa_women" },
    { title: "Hair Color (Application Only)", rating: "4.81", reviews: "38K", price: "₹399", img: "https://pinklimevc.com/wp-content/uploads/2023/09/Best-semi-permanent-hair-colour-in-Vancouver.webp", slug: "hair_studio_women" },
    { title: "RICA / Aloe / Honey Waxing", rating: "4.90", reviews: "120K", price: "₹1,199", img: "https://images.squarespace-cdn.com/content/v1/6358773dfa2fa42351f2e029/406cb918-b619-4c0e-a5fa-a4f31708ec85/full+face+waxing.jpeg", slug: "salon_for_women" },
    { title: "Haircut for Kids", rating: "4.85", reviews: "200K", price: "₹259", img: "https://i.pinimg.com/originals/30/a9/7f/30a97f37a281413a0b438ac0c7579caa.jpg", slug: "salon_prime_men" },
    { title: "Basic Makeup", rating: "4.73", reviews: "120K", price: "₹1,599", img: "https://thumbs.dreamstime.com/b/woman-face-portrait-makeup-lip-liner-beauty-cosmetic-product-glow-studio-background-indian-female-cosmetics-pencil-274901504.jpg", slug: "makeup_saree_styling" },
    { title: "Spatula Waxing", rating: "4.86", reviews: "200K", price: "₹799", img: "https://img.freepik.com/premium-photo/professional-leg-waxing-treatment-beauty-spa-with-beautician-applying-wax-using-wooden-spatula_664057-4426.jpg", slug: "salon_for_women" },
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
    { title: "Hair color & Hair spa", img: "https://salon85.co.in/wp-content/uploads/2025/09/Ceramide-treatment.webp", slug: "salon_prime_men" },
  ];

  const spaForWomen = [
    { title: "Stress relief", img: "https://aromatherapyhomespa.com/wp-content/uploads/2025/05/Ayurvedic-Spa-Treatments-for-Stress-Relief.jpg", slug: "ayurvedic_spa_women" },
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681975066670-e71141.jpeg", slug: "ayurvedic_spa_women" },
  ];

  const spaForMen = [
    { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/partner-app-supply/1662545107373-4baa44.png", slug: "prime_massage_men" },
  ];

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pb-0 flex flex-col selection:bg-[#AA593E] selection:text-white">
      <main className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 pb-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <h1 className="text-[40px] md:text-[50px] leading-[1.1] font-serif text-[#2A4334] mb-10 tracking-tight">
                Beauty services at your <br/> doorstep
              </h1>

              <div className="border border-[#2A4334]/10 bg-white rounded-2xl p-6 shadow-sm mb-10">
                <h3 className="text-xl font-bold text-[#2A4334] mb-6 font-serif">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                  {heroServices.map((service, idx) => (
                    // Updated to use service.slug
                    <div key={idx} onClick={() => handleServiceClick(service.slug)} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-[84px] h-[84px] bg-[#F6F4EE] rounded-2xl flex items-center justify-center relative mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20">
                        {service.tag && (
                          <span className="absolute -top-2 px-2 py-0.5 text-[10px] font-bold text-white bg-[#AA593E] rounded-[4px] z-10 shadow-sm">
                            {service.tag}
                          </span>
                        )}
                        {service.time && (
                          <span className="absolute -bottom-2 px-2 py-0.5 text-[10px] font-bold text-[#2A4334] bg-white border border-[#2A4334]/10 shadow-sm rounded-[4px] z-10">
                            {service.time}
                          </span>
                        )}
                        <img src={service.img} alt={service.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[13px] font-medium text-center text-[#2A4334]/80 leading-snug px-1 group-hover:text-[#AA593E] transition-colors">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-12 pl-2">
                <div className="flex items-center gap-3">
                  <Star size={24} className="text-[#AA593E] fill-[#AA593E]" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1 text-[#2A4334]">4.8</div>
                    <div className="text-xs text-[#2A4334]/60 font-medium">Service Rating*</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={24} className="text-[#AA593E]" />
                  <div>
                    <div className="text-xl font-bold leading-none mb-1 text-[#2A4334]">12M+</div>
                    <div className="text-xs text-[#2A4334]/60 font-medium">Customers Globally*</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" className="w-full h-[60%] object-cover rounded-2xl shadow-sm" alt="Facial" />
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-2xl object-top shadow-sm" alt="Haircut" />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" className="w-full h-[40%] object-cover rounded-2xl shadow-sm" alt="Massage" />
                <img src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?cs=srgb&dl=pexels-engin-akyurt-3356170.jpg&fm=jpg" className="w-full h-[60%] object-cover rounded-2xl shadow-sm" alt="Styling" />
              </div>
            </div>
          </div>

          <hr className="border-[#2A4334]/10 my-10" />

          {/* 2. PROMO BANNERS */}
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
            {promoBanners.map((banner, idx) => (
              <div
                key={idx}
                onClick={() => handleServiceClick(banner.slug)}
                className="snap-start flex-none w-[500px] md:w-[360px] h-[150px] md:h-[180px] rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-md transition-all border border-[#2A4334]/5"
              >
                <img src={banner.img} alt="Promo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>

          {/* 3. MOST BOOKED SERVICES */}
          <HorizontalSlider title="Most booked services">
            {mostBooked.map((item, idx) => (
              <div key={idx} onClick={() => handleServiceClick(item.slug)} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[180px] rounded-[20px] overflow-hidden mb-3 shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-semibold text-[15px] leading-snug mb-1 line-clamp-2 text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm text-[#2A4334]/70 mb-1">
                  <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                  <span className="font-bold text-[#2A4334]">{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
                <div className="font-bold text-[15px] text-[#2A4334]">{item.price}</div>
              </div>
            ))}
          </HorizontalSlider>

          <hr className="border-[#2A4334]/10 my-10" />

          {/* 4. SALON FOR WOMEN */}
          <HorizontalSlider title="Salon for women">
            {salonForWomen.map((item, idx) => (
              <div key={idx} onClick={() => handleServiceClick(item.slug)} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[200px] bg-[#E8DCCB] rounded-[24px] overflow-hidden mb-3 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#D5D8D2]">
                  <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105 shadow-md" />
                </div>
                <h4 className="font-semibold text-[15px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
              </div>
            ))}
          </HorizontalSlider>

          {/* 5. LARGE BANNER (Spa) */}
          <div onClick={() => handleServiceClick('ayurvedic_spa_women')} className="w-full h-[250px] md:h-[380px] rounded-2xl overflow-hidden relative mt-12 mb-16 cursor-pointer group shadow-sm border border-[#2A4334]/5">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216798701-9a08f0.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Banner" />
          </div>

          {/* 6. SPA FOR WOMEN */}
          <HorizontalSlider title="Spa for women" subtitle="Refresh. Rewind. Rejuvenate.">
            {spaForWomen.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(item.slug)}
                className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-white border border-[#2A4334]/10 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-lg hover:border-[#AA593E]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <h4 className="font-serif text-[19px] md:text-[21px] text-[#2A4334] group-hover:text-[#AA593E] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </HorizontalSlider>

          {/* 7. HAIR & NAIL SERVICES (GRID LAYOUT) */}
          <section className="mt-16 mb-16">
            <div className="mb-8">
              <h2 className="text-[28px] md:text-4xl font-serif text-[#2A4334] tracking-tight">Hair & Nail services</h2>
              <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
              <p className="text-[#2A4334]/70 text-[15px] mt-1 font-light">Refreshed style, revamped look</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {hairAndNailGrid.map((item, idx) => (
                <div key={idx} onClick={() => handleServiceClick(item.slug)} className="cursor-pointer group flex flex-col">
                  <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-4 bg-white shadow-sm border border-[#2A4334]/5">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h4 className="font-semibold text-[15px] text-[#2A4334] leading-snug mb-1.5 line-clamp-1 group-hover:text-[#AA593E] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[13px] text-[#2A4334]/70 mb-1.5">
                    <Star size={14} className="fill-[#AA593E] text-[#AA593E]" />
                    <span className="font-bold text-[#2A4334]">{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="text-[14px] font-bold text-[#2A4334]">{item.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. LARGE BANNER (Spa 2) */}
          <div onClick={() => handleServiceClick('ayurvedic_spa_women')} className="w-full h-[250px] md:h-[380px] rounded-2xl overflow-hidden relative mt-12 mb-16 cursor-pointer group shadow-sm border border-[#2A4334]/5">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216790006-967dd6.jpeg" alt="Spa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* 9. SALON FOR MEN */}
          <HorizontalSlider title="Salon for Men">
            {salonForMen.map((item, idx) => (
              <div key={idx} onClick={() => handleServiceClick(item.slug)} className="snap-start flex-none w-[180px] cursor-pointer group">
                <div className="w-full h-[200px] bg-[#D5D8D2] rounded-[24px] overflow-hidden mb-3 relative flex items-end justify-center pb-0 transition-colors group-hover:bg-[#E8DCCB]">
                  <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105 shadow-md" />
                </div>
                <h4 className="font-semibold text-[15px] text-center text-[#2A4334] group-hover:text-[#AA593E] transition-colors">{item.title}</h4>
              </div>
            ))}
          </HorizontalSlider>

          {/* 10. LARGE BANNER (Spa 3) */}
          <div onClick={() => handleServiceClick('prime_massage_men')} className="w-full h-[250px] md:h-[380px] rounded-2xl overflow-hidden relative mt-12 mb-16 cursor-pointer group shadow-sm border border-[#2A4334]/5">
            <img src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg" alt="Massage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* 11. MASSAGE FOR MEN */}
          <HorizontalSlider title="Massage for Men" subtitle="Refresh. Rewind. Rejuvenate.">
            {spaForMen.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(item.slug)}
                className="snap-start flex-none w-[220px] md:w-[240px] h-[280px] md:h-[300px] bg-white border border-[#2A4334]/10 rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:shadow-lg hover:border-[#AA593E]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <h4 className="font-serif text-[19px] md:text-[21px] text-[#2A4334] group-hover:text-[#AA593E] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-auto w-full h-[180px] md:h-[200px] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </HorizontalSlider>

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