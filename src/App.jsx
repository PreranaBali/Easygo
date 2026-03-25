import React from 'react';
import Navbar from './components/Navbar';
import EasyGoApp from './EasyGoApp';


function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] relative">
      {/* We are forcing a red background here. 
        If this doesn't show up, the component isn't being imported correctly.
      */}
      <div className="fixed top-0 left-0 w-full z-[999] bg-red-500 h-20">
        <Navbar />
      </div>
      
      <main className="pt-24 overflow-x-hidden"> 
        <EasyGoApp/>
      </main>
    </div>
  );
}

export default App;