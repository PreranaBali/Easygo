import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EasyGoApp from './EasyGoApp'; // This is your Revamp page
import BeautyPage from './BeautyPage.jsx'; // Make sure the path is correct based on where you saved it!
import NativePage from './NativePage';
import PremiumAboutUs from './PremiumAboutUs';
import MyBookings from './pages/MyBookings';  
import CartPage from './pages/CartPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// import Bathroom  from './Bathroom-1.jsx';
import Beauty from './pages/Beauty.jsx'
import EasyGoHome from './HeroPage';
// import Kitchen from './Kitchen-1.jsx';
// import LivingRoomCleaningPage from './Living&Bedroom-1.jsx';
// import FullHomeCleaning from './HomeCleaning-1.jsx';
// import ACServicePage from './Acservice-1.jsx';
// import WashingMachinePage from './Washingmachine-1.jsx';
// import RefrigeratorService from './Freezer-1.jsx';
import DynamicServicePage from './pages/ServicePage';
import ProductPage from './pages/Product.jsx';
import MainPage from './pages/MainPage.jsx';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f9fa] relative">
        
        {/* Navbar Wrapper */}
        <div className="fixed top-0 left-0 w-full z-[999] h-20">
          <Navbar />
        </div>
        
        {/* Page Content */}
        <main className="pt-18 overflow-x-hidden"> 
          <Routes>
            {/* The default page (Revamp) */}
            <Route path='/' element={<MainPage/>}></Route>
            <Route path="/revamp" element={<EasyGoApp />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/profile" element={<ProfilePage />} />
            
            {/* The new Beauty page */}
            <Route path="/hub/:categoryId" element={<BeautyPage />} />
            <Route path="/bookings/my/:userId" element={<MyBookings />} />
            
            
            {/* You can add Native later! */}
            <Route path="/native" element={<NativePage/>}/>
            {/* <Route path="/native" element={<NativePage />} /> */}
            <Route path="/About us" element={<PremiumAboutUs/>}/>
            {/* <Route path="/Bathroom Cleaning" element={<Bathroom/>}/> */}
            <Route path="/service/:categoryId" element={<DynamicServicePage/>}/>
            <Route path="/Home" element={<EasyGoHome/>}/>
            <Route path="/product/:categoryId" element={<ProductPage/>}/>
            {/* <Route path="/Living" element={<LivingRoomCleaningPage/>}/> */}
            {/* <Route path="/fullhomecleaning" element={<FullHomeCleaning/>}/> */}
            {/* <Route path="/Acservice" element={<ACServicePage/>}/> */}
            {/* <Route path="/wm" element={<WashingMachinePage/>}/> */}
            {/* <Route path="/rf" element={<RefrigeratorService/>}/> */}
          </Routes>
        </main>
        <footer className="bg-[#1F3327] text-[#F6F4EE] pt-20 pb-10 mt-auto w-full">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-[#F6F4EE]/10 pb-16 px-6 md:px-12">
                  
                  <div className="lg:col-span-4 pr-0 md:pr-10">
                    {/* Elegant Logo Matching About Page */}
                    <div className="text-4xl font-serif text-[#E8DCCB] mb-6 flex items-center gap-1">
                      <span className="text-5xl italic">E</span>
                      <span className="text-2xl tracking-widest uppercase mt-2">asygo</span>
                    </div>
                    <p className="text-[#F6F4EE]/70 text-sm font-light leading-relaxed max-w-sm mb-8">
                      The premier platform for holistic home and wellness services. We connect you with top-tier professionals to transform your living spaces with uncompromising quality.
                    </p>
                    {/* Minimalist Social Links */}
                    <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold">
                      <a href="#" className="hover:text-[#AA593E] transition-colors flex items-center gap-2"><FaInstagram size={14}/> Instagram</a>
                      <a href="#" className="hover:text-[#AA593E] transition-colors flex items-center gap-2"><FaFacebook size={14}/> Facebook</a>
                      <a href="#" className="hover:text-[#AA593E] transition-colors flex items-center gap-2"><FaLinkedin size={14}/> LinkedIn</a>
                    </div>
                  </div>
        
                  <div className="lg:col-span-2 lg:col-start-7">
                    <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Company</h4>
                    <ul className="space-y-4 text-sm font-light text-[#F6F4EE]/80">
                      <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                  </div>
        
                  <div className="lg:col-span-2">
                    <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Customers</h4>
                    <ul className="space-y-4 text-sm font-light text-[#F6F4EE]/80">
                      <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Categories Near You</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                  </div>
        
                  <div className="lg:col-span-2">
                    <h4 className="font-bold tracking-widest text-xs uppercase text-[#AA593E] mb-6">Get the App</h4>
                    <div className="space-y-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
        
                </div>
        
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#F6F4EE]/50 font-semibold gap-4 px-6 md:px-12">
                  <p>© {new Date().getFullYear()} EasyGo Technologies Pvt. Ltd.</p>
                  <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">India</a>
                    <a href="#" className="hover:text-white transition-colors">USA</a>
                    <a href="#" className="hover:text-white transition-colors">UAE</a>
                    <a href="#" className="hover:text-white transition-colors">Singapore</a>
                  </div>
                </div>
              </footer>
        
      </div>
    </Router>
  );
}

export default App;