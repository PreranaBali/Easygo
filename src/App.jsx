import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EasyGoApp from './EasyGoApp'; // This is your Revamp page
import BeautyPage from './BeautyPage.jsx'; // Make sure the path is correct based on where you saved it!
import NativePage from './NativePage';
import PremiumAboutUs from './PremiumAboutUs';
import MyBookings from './pages/MyBookings';  
import CartPage from './pages/CartPage.jsx';
// import Bathroom  from './Bathroom-1.jsx';
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


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f9fa] relative">
        
        {/* Navbar Wrapper */}
        <div className="fixed top-0 left-0 w-full z-[999] h-20">
          <Navbar />
        </div>
        
        {/* Page Content */}
        <main className="pt-24 overflow-x-hidden"> 
          <Routes>
            {/* The default page (Revamp) */}
            <Route path='/' element={<MainPage/>}></Route>
            <Route path="/revamp" element={<EasyGoApp />} />
            <Route path="/cart" element={<CartPage />} />
            
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
        
      </div>
    </Router>
  );
}

export default App;