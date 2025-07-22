import { Routes, Route } from 'react-router-dom'
 import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Support from './pages/support';
import Contact from './pages/Contact';
import Footer from './Components/footer';
import Sidebar from './Components/sidebar';

import './App.css';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
  }, [isSidebarOpen]);
  
  return(
    <>
    <main>
    <Header toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  <div className='footer'>
   <Footer/>
   </div>
  </>
  );

}

export default App;
