import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

// --- STYLES & FONTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  
  .bg-wavy-lines { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"); }
  .bg-wavy-lines-dark { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E"); }
  
  .blob-shape-0 { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  .blob-shape-1 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  .blob-shape-2 { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  .blob-shape-3 { border-radius: 50% 50% 30% 70% / 70% 30% 70% 30%; }
`;

// --- HERO SECTION ---
const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row w-full min-h-[500px] md:min-h-[550px]">
    <div className="w-full md:w-[55%] bg-[#9A5B40] bg-wavy-lines relative flex flex-col justify-center px-6 md:px-16 py-12 md:py-0 z-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F2EA] leading-[1.15] mb-5">
        Integrated Design + <br /> Wellness Spaces
      </h2>
      <p className="text-[#F5F2EA]/90 font-sans text-sm md:text-base max-w-md leading-relaxed mb-8">
        The premier platform for home services and space revamps. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
      </p>
      <div>
        <button className="bg-[#F5F2EA] text-[#1F2922] hover:bg-white px-8 py-3.5 rounded-full font-semibold transition-colors">
          Book Your Home Experience
        </button>
      </div>
    </div>
    <div className="w-full md:w-[45%] bg-[#25392D] relative flex items-center justify-start py-8 md:py-0">
      <div className="relative w-[90%] md:w-[120%] h-[300px] md:h-[400px] md:-ml-32 mx-auto md:mx-0 shadow-2xl z-20">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
          alt="Premium Living Space" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

// --- ORGANIC GRID COMPONENT ---
const OrganicGridSection = ({ title, subtitle, data }) => {
  const blobClasses = ['blob-shape-0', 'blob-shape-1', 'blob-shape-2', 'blob-shape-3'];

  return (
    <section className="py-16 md:py-20 bg-[#F5F2EA] bg-wavy-lines-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2922] mb-3">{title}</h2>
          <p className="text-[#1F2922]/70 font-sans text-lg">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] max-w-[280px] group cursor-pointer">
              <div className="relative w-full aspect-square mb-5 flex items-center justify-center">
                <div className={`absolute inset-0 bg-[#E8DCC8] opacity-70 ${blobClasses[idx % 4]} transition-transform duration-500 group-hover:scale-105`}></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`relative w-[85%] h-[85%] object-cover ${blobClasses[(idx + 1) % 4]} shadow-md`}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-[#1F2922] mb-1 text-center">{item.title}</h3>
              <a href="#" className="text-[#9A5B40] font-sans font-semibold text-xs hover:underline underline-offset-4 uppercase tracking-wider mt-1">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <div className="bg-[#F5F2EA] min-h-screen selection:bg-[#9A5B40] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <main>
        <HeroSection />
        <OrganicGridSection 
          title="Explore by space" 
          subtitle="Transform your home with our premium revamp services." 
          data={exploreSpaces} 
        />
        <div className="w-full h-px bg-[#1F2922]/10 max-w-7xl mx-auto my-2"></div>
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