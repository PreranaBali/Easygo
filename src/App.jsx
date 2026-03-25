import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EasyGoApp from './EasyGoApp'; // This is your Revamp page
import BeautyPage from './BeautyPage'; // Make sure the path is correct based on where you saved it!
import NativePage from './NativePage';

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
            <Route path="/" element={<EasyGoApp />} />
            
            {/* The new Beauty page */}
            <Route path="/beauty" element={<BeautyPage />} />
            
            {/* You can add Native later! */}
            <Route path="/native" element={<NativePage/>}/>
            {/* <Route path="/native" element={<NativePage />} /> */}
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;