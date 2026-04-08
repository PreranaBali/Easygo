import React from 'react';
import { motion } from 'framer-motion';

// --- Shared Framer Motion Variants ---
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 0.3, transition: { duration: 2.5, ease: "easeInOut" } }
};

// --- INNOVATION: Morphing Organic Blob Component ---
const MorphingBlob = ({ color, duration = 15 }) => (
  <motion.div
    animate={{
      // Animating border-radius creates a beautiful, organic morphing effect
      borderRadius: [
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "60% 40% 30% 70% / 50% 60% 40% 50%",
        "40% 60% 70% 30% / 40% 50% 60% 50%"
      ],
      rotate: [0, 180, 360],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    className={`absolute -inset-5 ${color} -z-10 opacity-80`}
  />
);

const EarthyAboutBody = () => {
  return (
    <div className="bg-[#F9F8F6] text-[#2A4334] font-sans selection:bg-[#AA593E]/30 selection:text-[#AA593E] pb-0 overflow-hidden relative">
      
      {/* Background Depth Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[120px] pointer-events-none opacity-80 z-0 mix-blend-overlay"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mt-8 relative z-10 pt-24 pb-12">
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="flex flex-col lg:flex-row w-full min-h-[550px] shadow-[0_20px_50px_rgb(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden border-4 border-white relative"
        >
          
          {/* Terracotta Left Side */}
          <div className="bg-[#AA593E] w-full lg:w-[55%] p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            
            {/* Animated SVG Topographic Waves */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={drawLine} d="M-50,50 Q100,-20 200,100 T450,50" stroke="#F6F4EE" strokeWidth="1" />
              <motion.path variants={drawLine} d="M-50,80 Q100,10 200,130 T450,80" stroke="#F6F4EE" strokeWidth="1" />
              <motion.path variants={drawLine} d="M-50,110 Q100,40 200,160 T450,110" stroke="#F6F4EE" strokeWidth="1" />
              <motion.path variants={drawLine} d="M-50,300 Q150,400 300,300 T500,350" stroke="#F6F4EE" strokeWidth="1" />
              <motion.path variants={drawLine} d="M-20,150 C50,200 100,150 150,250 C100,250 50,220 -20,150 Z" stroke="#F6F4EE" strokeWidth="1.5" />
            </svg>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F6F4EE] leading-[1.1] mb-6 relative z-10 tracking-tight">
              Integrated Home + <br /> Wellness Collective
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#F6F4EE]/90 text-sm md:text-base max-w-md leading-relaxed mb-10 relative z-10 font-medium">
              A unique collective dedicated to the care of your personal sanctuary. From bespoke beauty treatments to expert home restoration, we curate the top 1% of specialists to bring absolute peace of mind to your door. 
              <br/><br/>
              <span className="underline underline-offset-4 decoration-white/50 cursor-pointer hover:decoration-white transition-all font-bold tracking-wide">Discover our philosophy.</span>
            </motion.p>
            
            <motion.button 
              variants={fadeUp}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F6F4EE] text-[#AA593E] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest w-fit transition-colors relative z-10 shadow-lg"
            >
              Book Studio Experience
            </motion.button>
          </div>

          {/* Forest Green Right Side */}
          <div className="bg-[#2A4334] w-full lg:w-[45%] relative min-h-[400px] lg:min-h-auto flex items-center justify-center p-8">
            {/* Infinite subtle float animation on the image */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[110%] h-[75%] lg:-ml-16 shadow-2xl z-20 rounded-[2rem] overflow-hidden border-[6px] border-white/10 backdrop-blur-sm"
            >
              <img 
                src="img/EG logo.png" 
                alt="EasyGo Professionals & Spaces" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2A4334]/40 to-transparent"></div>
            </motion.div>
            
            {/* Background SVG on right */}
            <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 Q100,150 200,100" stroke="#F6F4EE" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
          
        </motion.div>
      </section>

      {/* --- THREE PILLAR SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1300px] mx-auto relative z-10">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A4334] mb-4 font-bold tracking-tight">Designed for Whole Living</h2>
            <div className="h-[2px] w-16 bg-[#AA593E] mx-auto mt-4 rounded-full opacity-60"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
            
            {/* Pillar 1: Beauty & Wellness */}
            <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left group cursor-pointer">
              <div className="relative mb-10 w-full max-w-[280px] mx-auto md:mx-0">
                <MorphingBlob color="bg-[#E8DCCB]" duration={12} />
                <div className="w-full aspect-square overflow-hidden rounded-[2rem] shadow-lg border-2 border-white relative z-10 bg-white">
                  <motion.img 
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.7, ease: customEase }}
                    src="https://wallpaperaccess.com/full/3776507.jpg" alt="Personal Wellness" className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <h3 className="text-3xl font-serif text-[#2A4334] mb-3 leading-snug font-bold">Personal<br/>Wellness:</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#AA593E] mb-3">Bespoke Salon & Spa</p>
              <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed font-medium">Experience premium, sterilized beauty treatments and relaxation therapies in the comfort of your own home.</p>
              <span className="text-sm font-bold text-[#2A4334] border-b-2 border-[#2A4334]/20 pb-1 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-all">Explore Services</span>
            </motion.div>

            {/* Pillar 2: Home Care */}
            <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left mt-0 md:mt-16 group cursor-pointer">
              <div className="relative mb-10 w-full max-w-[280px] mx-auto md:mx-0">
                <MorphingBlob color="bg-[#D5D8D2]" duration={15} />
                <div className="w-full aspect-square overflow-hidden rounded-[2rem] shadow-lg border-2 border-white relative z-10 bg-white">
                  <motion.img 
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.7, ease: customEase }}
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" alt="Sanctuary Maintenance" className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <h3 className="text-3xl font-serif text-[#2A4334] mb-3 leading-snug font-bold">Sanctuary<br/>Maintenance:</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#AA593E] mb-3">Deep Cleaning & Org.</p>
              <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed font-medium">Restore spatial harmony with our meticulous deep cleaning, pest control, and environment-safe sanitization.</p>
              <span className="text-sm font-bold text-[#2A4334] border-b-2 border-[#2A4334]/20 pb-1 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-all">Explore Services</span>
            </motion.div>

            {/* Pillar 3: Expert Repairs */}
            <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left mt-0 md:mt-32 group cursor-pointer">
              <div className="relative mb-10 w-full max-w-[280px] mx-auto md:mx-0">
                <MorphingBlob color="bg-[#E8DCCB]" duration={18} />
                <div className="w-full aspect-square overflow-hidden rounded-[2rem] shadow-lg border-2 border-white relative z-10 bg-white">
                  <motion.img 
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.7, ease: customEase }}
                    src="https://prorestoredki.com/wp-content/uploads/2023/09/professional-water-damage-restoration.jpg" alt="Expert Restoration" className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <h3 className="text-3xl font-serif text-[#2A4334] mb-3 leading-snug font-bold">Expert<br/>Restoration:</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#AA593E] mb-3">Plumbing & Electric</p>
              <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed font-medium">Trust our master tradesmen to handle complex repairs, installations, and structural care safely and efficiently.</p>
              <span className="text-sm font-bold text-[#2A4334] border-b-2 border-[#2A4334]/20 pb-1 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-all">Explore Services</span>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* --- FOUNDER STORY --- */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto relative z-10 mb-20">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="bg-[#2A4334] text-[#F6F4EE] flex flex-col md:flex-row items-center overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.15)] relative border-4 border-white/10"
        >
          {/* Subtle Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#AA593E]/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

          <div className="w-full md:w-[55%] p-10 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-[42px] font-serif mb-8 leading-[1.15] font-bold">
              "We believe true wellness begins with the environment you live in."
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#F6F4EE]/70 text-sm md:text-base leading-relaxed mb-10 font-medium max-w-lg">
              Before EasyGo, finding reliable help for your home was a disjointed, stressful process. We created this collective to bring the top 1% of dedicated specialists—from estheticians to electricians—into a single, trustworthy space. Inviting someone into your personal sanctuary requires absolute trust, and that is exactly what we guarantee.
            </motion.p>
            <motion.div variants={fadeUp} className="border-t border-[#F6F4EE]/20 pt-8 mt-auto">
              <p className="font-serif font-bold text-2xl text-[#E8DCCB] mb-1">Mr. Muthyal Ashwin Kumar</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#F6F4EE]/50">Founder & CEO</p>
            </motion.div>
          </div>

          <div className="w-full md:w-[45%] h-[400px] md:h-[650px] relative overflow-hidden group">
            <motion.img 
              whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: customEase }}
              src="img/founder.png" 
              alt="Mr. Muthyal Ashwin Kumar" 
              className="w-full h-full object-cover object-top"
            />
            
          </div>

        </motion.div>
      </section>

    </div>
  );
};

export default EarthyAboutBody;