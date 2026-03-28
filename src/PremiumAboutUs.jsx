import React from 'react';

const EarthyAboutBody = () => {
  return (
    <div className="bg-[#F6F4EE] text-[#2A4334] font-sans selection:bg-[#AA593E] selection:text-white pb-0 overflow-hidden">
      
      {/* --- HERO SECTION (Split Block Layout with Wavy SVG Lines) --- */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row w-full min-h-[500px] shadow-sm">
          
          {/* Terracotta Left Side with Custom SVG Waves */}
          <div className="bg-[#AA593E] w-full lg:w-[55%] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
            
            {/* Wavy Topographic/Leaf Line Accents */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50,50 Q100,-20 200,100 T450,50" stroke="#F6F4EE" strokeWidth="1" />
              <path d="M-50,80 Q100,10 200,130 T450,80" stroke="#F6F4EE" strokeWidth="1" />
              <path d="M-50,110 Q100,40 200,160 T450,110" stroke="#F6F4EE" strokeWidth="1" />
              <path d="M-50,300 Q150,400 300,300 T500,350" stroke="#F6F4EE" strokeWidth="1" />
              <path d="M-50,330 Q150,430 300,330 T500,380" stroke="#F6F4EE" strokeWidth="1" />
              {/* Botanical Leaf Motif */}
              <path d="M-20,150 C50,200 100,150 150,250 C100,250 50,220 -20,150 Z" stroke="#F6F4EE" strokeWidth="1.5" />
              <path d="M20,180 C80,210 110,180 140,240" stroke="#F6F4EE" strokeWidth="1.5" />
            </svg>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F6F4EE] leading-[1.1] mb-6 relative z-10">
              Integrated Home + <br /> Wellness Collective
            </h1>
            <p className="text-[#F6F4EE]/90 text-sm md:text-base max-w-md leading-relaxed mb-8 relative z-10 font-light">
              A unique collective dedicated to the care of your personal sanctuary. From bespoke beauty treatments to expert home restoration, we curate the top 1% of specialists to bring absolute peace of mind to your door. <span className="underline underline-offset-4 decoration-white/50 cursor-pointer hover:decoration-white transition-all font-medium">Discover our philosophy.</span>
            </p>
            <button className="bg-[#F6F4EE] text-[#AA593E] px-8 py-3.5 rounded-full text-sm font-bold w-fit hover:bg-white transition-colors relative z-10 shadow-sm">
              Book Your Studio Experience
            </button>
          </div>

          {/* Forest Green Right Side with Overlapping Image */}
          <div className="bg-[#2A4334] w-full lg:w-[45%] relative min-h-[400px] lg:min-h-auto flex items-center justify-center p-8 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[120%] h-[85%] lg:-ml-20 shadow-2xl z-20">
              <img 
                src="img/EG logo.png" 
                alt="EasyGo Professionals & Spaces" 
                className="w-full h-full object-cover rounded-sm border-4 border-[#F6F4EE]/10"
              />
            </div>
            {/* Subtle botanical lines on the green side */}
            <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 Q100,150 200,100" stroke="#F6F4EE" strokeWidth="1" />
              <path d="M80,250 Q130,150 200,130" stroke="#F6F4EE" strokeWidth="1" />
            </svg>
          </div>
          
        </div>
      </section>

      {/* --- THREE PILLAR SECTION (Designed for Whole Living) --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2A4334] mb-4">Designed for Whole Living</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
          
          {/* Pillar 1: Beauty & Wellness */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-pointer">
            <div className="relative mb-8 w-full max-w-[280px] mx-auto md:mx-0">
              {/* Soft organic blob background (Terracotta tint) */}
              <div className="absolute -inset-5 bg-[#E8DCCB] rounded-tl-[60px] rounded-br-[40px] rounded-tr-[20px] rounded-bl-[80px] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
              <img src="https://wallpaperaccess.com/full/3776507.jpg" alt="Personal Wellness" className="w-full aspect-square object-cover shadow-md rounded-sm transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
            <h3 className="text-2xl font-serif text-[#2A4334] mb-3 leading-snug">Personal<br/>Wellness:</h3>
            <p className="text-sm font-bold text-[#2A4334] mb-2">Bespoke Salon & Spa Services</p>
            <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed">Experience premium, sterilized beauty treatments and relaxation therapies in the comfort of your own home.</p>
            <span className="text-sm font-semibold text-[#2A4334] border-b border-[#2A4334] pb-0.5 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-colors">Learn More</span>
          </div>

          {/* Pillar 2: Home Care */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-0 md:mt-12 group cursor-pointer">
            <div className="relative mb-8 w-full max-w-[280px] mx-auto md:mx-0">
              {/* Soft organic blob background (Sage tint) */}
              <div className="absolute -inset-5 bg-[#D5D8D2] rounded-tr-[70px] rounded-bl-[50px] rounded-tl-[20px] rounded-br-[80px] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" alt="Sanctuary Maintenance" className="w-full aspect-square object-cover shadow-md rounded-sm transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
            <h3 className="text-2xl font-serif text-[#2A4334] mb-3 leading-snug">Sanctuary<br/>Maintenance:</h3>
            <p className="text-sm font-bold text-[#2A4334] mb-2">Deep Cleaning & Organization</p>
            <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed">Restore spatial harmony with our meticulous deep cleaning, pest control, and environment-safe sanitization.</p>
            <span className="text-sm font-semibold text-[#2A4334] border-b border-[#2A4334] pb-0.5 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-colors">Learn More</span>
          </div>

          {/* Pillar 3: Expert Repairs */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-0 md:mt-24 group cursor-pointer">
            <div className="relative mb-8 w-full max-w-[280px] mx-auto md:mx-0">
              {/* Soft organic blob background (Cream tint) */}
              <div className="absolute -inset-5 bg-[#E8DCCB] rounded-bl-[60px] rounded-tr-[40px] rounded-br-[20px] rounded-tl-[80px] -z-10 opacity-70 transition-transform duration-500 group-hover:scale-105"></div>
              <img src="https://prorestoredki.com/wp-content/uploads/2023/09/professional-water-damage-restoration.jpg" alt="Expert Restoration" className="w-full aspect-square object-cover shadow-md rounded-sm transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
            <h3 className="text-2xl font-serif text-[#2A4334] mb-3 leading-snug">Expert<br/>Restoration:</h3>
            <p className="text-sm font-bold text-[#2A4334] mb-2">Plumbing, Electric & Handyman</p>
            <p className="text-sm text-[#2A4334]/70 mb-5 max-w-[260px] leading-relaxed">Trust our master tradesmen to handle complex repairs, installations, and structural care safely and efficiently.</p>
            <span className="text-sm font-semibold text-[#2A4334] border-b border-[#2A4334] pb-0.5 group-hover:text-[#AA593E] group-hover:border-[#AA593E] transition-colors">Learn More</span>
          </div>

        </div>
      </section>

      {/* --- FOUNDER STORY --- */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="bg-[#2A4334] text-[#F6F4EE] flex flex-col md:flex-row items-center overflow-hidden rounded-lg shadow-xl">
          
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-[40px] font-serif mb-8 leading-snug">
              "We believe true wellness begins with the environment you live in."
            </h2>
            <p className="text-[#F6F4EE]/80 text-sm md:text-base leading-relaxed mb-10 font-light">
              Before EasyGo, finding reliable help for your home was a disjointed, stressful process. We created this collective to bring the top 1% of dedicated specialists—from estheticians to electricians—into a single, trustworthy space. Inviting someone into your personal sanctuary requires absolute trust, and that is exactly what we guarantee.
            </p>
            <div className="border-t border-[#F6F4EE]/20 pt-6">
              <p className="font-serif text-2xl text-[#E8DCCB] mb-1">Mr. Muthyal Ashwin Kumar</p>
              <p className="text-[11px] uppercase tracking-widest text-[#F6F4EE]/60">Founder & CEO</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
            <img 
              src="https://resultz-education.vercel.app/assets/director-DPfLMU53.png" 
              alt="Mr. Muthyal Ashwin Kumar" 
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient to blend image into the green block */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#2A4334] via-transparent to-transparent opacity-60"></div>
          </div>

        </div>
      </section>


    </div>
  );
};

export default EarthyAboutBody;