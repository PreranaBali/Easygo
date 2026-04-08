import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ==========================================
// 1. INTERACTIVE ATOM PARTICLE BACKGROUND
// ==========================================
const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    
    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        if (force < 0) force = 0;

        let directionX = (forceDirectionX * force * this.density);
        let directionY = (forceDirectionY * force * this.density);

        if (distance < mouse.radius + this.size) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 50;
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 50;
        }

        this.baseX += this.directionX;
        this.baseY += this.directionY;

        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = Math.random() > 0.5 ? 'rgba(170, 89, 62, 0.4)' : 'rgba(24, 29, 26, 0.15)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            opacityValue = 1 - (distance / 10000);
            ctx.strokeStyle = `rgba(170, 89, 62, ${opacityValue * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};


// ==========================================
// 2. SHARED ANIMATIONS & COMPONENTS
// ==========================================
const customEase = [0.16, 1, 0.3, 1];
const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } };

// --- ADVANCED HORIZONTAL SLIDER ---
const HorizontalSlider = ({ title, children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', checkScroll);
    
    return () => {
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const startX = useRef(0);
  const scrollLeftState = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftState.current = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeftState.current - walk;
  };

  return (
    <motion.section 
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
      className="mt-16 mb-24 relative z-10 w-full"
    >
      <div className="flex items-end justify-between mb-8">
        <motion.div variants={fadeUp}>
          <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-[#181D1A] tracking-tight leading-tight select-none">
            {title}
          </h2>
          <div className="h-[2px] w-12 bg-[#AA593E] mt-3 mb-2 rounded-full"></div>
        </motion.div>

        <motion.div variants={fadeUp} className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')} 
            className={`w-10 h-10 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A] ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-30 pointer-events-none'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className={`w-10 h-10 rounded-full border border-[#181D1A]/10 flex items-center justify-center hover:border-[#181D1A]/30 hover:bg-white transition-all shadow-sm text-[#181D1A] ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-30 pointer-events-none'}`}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="relative group/slider">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto gap-5 pb-4 hide-scrollbar transition-all ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
        >
          {children}
        </div>
        
        {/* Animated Progress Bar */}
        <div className="hidden md:block w-full max-w-xs h-[3px] bg-[#181D1A]/10 rounded-full mx-auto mt-6 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#AA593E] rounded-full origin-left"
            style={{ scaleX }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};


// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
const NativePage = () => {
  const waterFeaturesImages = [
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582565075-6c8698.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582588281-4d6e51.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582583117-f3fe55.jpeg" ,
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582579114-967873.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582575130-a10178.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729582569314-1e8653.jpeg" 
  ];

  const lockFeaturesImages = [
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729585400527-2811fe.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583343127-a159ca.jpeg", 
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583339154-821ff9.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583334981-f0c81c.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583330394-1ebbf7.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583326489-57e778.jpeg",
    "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729583322295-78684a.jpeg" 
  ];

  return (
    <div className="bg-[#F4EBE1] min-h-screen font-sans text-[#181D1A] flex flex-col selection:bg-[#AA593E]/20 selection:text-[#AA593E] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      {/* Interactive Atom/Constellation Background */}
      <CanvasParticles />
      
      {/* WIDER CONTAINER TO FIT EVERYTHING WITHOUT CLIPPING */}
      <main className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-24 relative z-10">
        
        <div className="flex items-center gap-3 mb-8">
           <div className="text-[10px] font-black tracking-[0.2em] uppercase text-[#181D1A]/70 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded border border-[#181D1A]/10 shadow-sm">
             EasyGo Native Collection
           </div>
        </div>

        {/* NATIVE WATER PURIFIER HERO BANNER */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "50px" }} variants={staggerContainer}
          className="w-full rounded-2xl mb-12 shadow-lg border border-white/40 bg-white/30 backdrop-blur-sm overflow-hidden"
        >
          {/* Changed to standard img tags so they auto-size to natural dimensions with NO zoom/cropping */}
          <motion.img 
            variants={fadeUp}
            src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773417291105-8b19dc.jpeg"
            alt="Native Water Purifier"
            className="w-full h-auto block rounded-2xl"
          />
        </motion.div>

        {/* BEST-IN-CLASS FEATURES SLIDER */}
        <HorizontalSlider title="Best-in-class features">
          {waterFeaturesImages.map((imgSrc, idx) => (
            <motion.div 
              whileHover={{ y: -6 }}
              key={idx} 
              className="snap-start flex-none w-[260px] sm:w-[320px] md:w-[340px] aspect-[4/5] bg-[#EAE3D9] rounded-2xl overflow-hidden group shadow-sm border border-[#181D1A]/5 hover:shadow-xl transition-all duration-500 relative"
            >
              <img 
                src={imgSrc} 
                alt={`Feature ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 pointer-events-none select-none" 
              />
            </motion.div>
          ))}
        </HorizontalSlider>

        {/* NATIVE LOCK PRO HERO BANNER */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "50px" }} variants={staggerContainer}
          className="w-full rounded-2xl mb-12 shadow-lg border border-white/40 bg-[#181D1A]/5 backdrop-blur-sm overflow-hidden"
        >
          <motion.img 
            variants={fadeUp}
            src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770915458514-b0f670.jpeg"
            alt="Native Lock Pro"
            className="w-full h-auto block rounded-2xl"
          />
        </motion.div>

        {/* ALL INTELLIGENT FEATURES SLIDER */}
        <HorizontalSlider title="All intelligent features">
          {lockFeaturesImages.map((imgSrc, idx) => (
            <motion.div 
              whileHover={{ y: -6 }}
              key={idx} 
              className="snap-start flex-none w-[260px] sm:w-[320px] md:w-[340px] aspect-[4/5] bg-white rounded-2xl overflow-hidden group shadow-sm border border-[#181D1A]/5 hover:shadow-xl transition-all duration-500 relative"
            >
              <img 
                src={imgSrc} 
                alt={`Intelligent Feature ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 pointer-events-none select-none" 
              />
            </motion.div>
          ))}
        </HorizontalSlider>

        {/* NATIVE MANIFESTO BANNER */}
        <motion.div 
           initial="hidden" whileInView="show" viewport={{ once: true, margin: "50px" }} variants={staggerContainer}
           className="w-full rounded-2xl mt-10 shadow-lg border border-white/40 bg-white/30 backdrop-blur-sm overflow-hidden"
        >
          <motion.img 
            variants={fadeUp}
            src="https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1748612847256-8e2681.jpeg"
            alt="Native Manifesto"
            className="w-full h-auto block rounded-2xl"
          />
        </motion.div>

      </main>

    </div>
  );
};

export default NativePage;