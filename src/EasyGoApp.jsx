import React from 'react';
import { motion } from 'framer-motion';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  
  .bg-wavy-lines { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"); }
  .bg-wavy-lines-dark { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E"); }
`;

// --- FRAMER MOTION VARIANTS ---
const customEase = [0.16, 1, 0.3, 1]; // Apple-style silky smooth easing

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

// --- INNOVATION: Dynamic Morphing Blob Component ---
const MorphingBlob = ({ delay = 0 }) => (
  <motion.div
    animate={{
      borderRadius: [
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "60% 40% 30% 70% / 50% 60% 40% 50%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "40% 60% 70% 30% / 40% 50% 60% 50%"
      ],
      rotate: [0, 90, 180, 360]
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className="absolute inset-0 bg-[#E8DCC8] opacity-60 mix-blend-multiply"
  />
);

// --- HERO SECTION ---
const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
    <motion.div 
      initial="hidden" animate="show" variants={staggerContainer}
      className="w-full md:w-[55%] bg-[#9A5B40] bg-wavy-lines relative flex flex-col justify-center px-6 md:px-16 py-16 md:py-0 z-10"
    >
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#F5F2EA] leading-[1.1] mb-6 tracking-tight">
        Integrated Design + <br /> Wellness Spaces
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[#F5F2EA]/90 font-sans text-sm md:text-base max-w-md leading-relaxed mb-10 font-medium">
        The premier platform for home services and space revamps. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
      </motion.p>
      <motion.div variants={fadeUp}>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F5F2EA] text-[#9A5B40] shadow-xl px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors"
        >
          Book Your Experience
        </motion.button>
      </motion.div>
    </motion.div>

    <div className="w-full md:w-[45%] bg-[#25392D] relative flex items-center justify-start py-12 md:py-0 overflow-hidden">
      {/* Continuous Slow-Pan Animation on the Image */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[90%] md:w-[130%] h-[350px] md:h-[450px] md:-ml-32 mx-auto md:mx-0 shadow-[0_20px_50px_rgb(0,0,0,0.3)] z-20 rounded-sm overflow-hidden border-4 border-[#F5F2EA]/10"
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
          alt="Premium Living Space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#25392D]/40 to-transparent"></div>
      </motion.div>
    </div>
  </section>
);

// --- ORGANIC GRID COMPONENT ---
const OrganicGridSection = ({ title, subtitle, data }) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 md:py-28 bg-[#F5F2EA] bg-wavy-lines-dark relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2922] mb-4 tracking-tight">{title}</h2>
          <div className="h-[2px] w-12 bg-[#9A5B40] mx-auto mb-4 opacity-50"></div>
          <p className="text-[#1F2922]/70 font-sans text-lg font-medium">{subtitle}</p>
        </motion.div>

        {/* Improved Grid Layout for better responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {data.map((item, idx) => (
            <motion.div 
              variants={fadeUp}
              key={idx} 
              className="flex flex-col items-center w-full max-w-[280px] group cursor-pointer"
            >
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                {/* Dynamic Breathing Blob Background */}
                <MorphingBlob delay={idx * 2} />
                
                {/* Static foreground image that scales on hover */}
                <motion.div 
                  className="relative w-[85%] h-[85%] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.1)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
                  whileHover={{ scale: 1.08, borderRadius: "50% 50% 50% 50%" }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-[#1F2922] mb-2 text-center group-hover:text-[#9A5B40] transition-colors">{item.title}</h3>
              <div className="text-[#9A5B40] font-sans font-bold text-[11px] uppercase tracking-widest relative">
                Explore
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#9A5B40] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- MAIN APP COMPONENT ---
const PremiumEasyGoApp = () => {
  const exploreSpaces = [
    { title: "TV Wall", img: "https://i.pinimg.com/originals/01/0c/cc/010ccc579f2740518d2351ce14d20851.jpg" },
    { title: "Living Room Wall", img: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/12/Living-room-furniture-trends-2023-by-Kimberly-K-1024x768.jpg" },
    { title: "Bedroom Wall", img: "https://i5.walmartimages.com/asr/7936b2fc-2b7e-4cbc-87ae-98c0f25a5230.c6c49dfce9d46549e120fb8bb85a8097.jpeg" },
    { title: "Mandir", img: "https://i.pinimg.com/originals/d8/6b/03/d86b037dfefe33ed59a520c6fd3d649a.jpg" },
    { title: "Entrance", img: "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/foyer-1657190327-anMtN/entrance-1-1663661493-jTcnS.jpg" },
    { title: "Office Wall", img: "https://uploads-ssl.webflow.com/5e1f1da7fa3d448bab479847/63e50dceef8527e6d71a05ed_AdobeStock_339067151.png" },
    { title: "Bathroom", img: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/jfm-1736069001-9OxTK/bathroom-1736770548-kfd53/br-10-1737111094-Wk7T1.jpg"}
  ];

  const beautifulWalls = [
    { title: "Upcoming Family Events", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759914653238-da76d9.jpeg" },
    { title: "Home Workspace", img: "https://drhometech.com/wp-content/uploads/2023/10/Transforming-Your-Home-Office-Into-A-Productive-Workspace-132818764.jpg" },
    { title: "Seepage-Proof", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1759914641129-b19d89.jpeg" },
    { title: "Accent Designs", img: "https://ryannreed.com/wp-content/uploads/2023/10/design-an-accent-wall-with-bold-wallpaper-01.jpg" }
  ];

  return (
    <div className="bg-[#F5F2EA] min-h-screen selection:bg-[#9A5B40]/30 selection:text-[#9A5B40] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <main>
        <HeroSection />
        <OrganicGridSection 
          title="Explore by space" 
          subtitle="Transform your home with our premium revamp services." 
          data={exploreSpaces} 
        />
        <div className="w-full h-px bg-[#1F2922]/5 max-w-[1200px] mx-auto"></div>
        <OrganicGridSection 
          title="Beautiful walls for all your needs" 
          subtitle="Curated designs to elevate your everyday living." 
          data={beautifulWalls} 
        />
      </main>
    </div>
  );
};

export default PremiumEasyGoApp;