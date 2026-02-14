import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop'; // Make sure this path matches where you saved the file

import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/blogs/Blogpage';
import FlyerDistribution from './components/pages/Flyers';
import PrintingServices from './components/pages/PrintingServices';
import DigitalMarketing from './components/pages/Digitalmarketing';
import Outdoorads from './components/pages/outdoorads';
import Clients from './components/pages/client';
import Industries from './components/pages/industries';
import Scrollup from "./components/scrolluparrow";
import ThankYou from './components/Thankyou';
import Blog1 from './components/pages/blogs/blog1';
import Blog2 from './components/pages/blogs/blog2';
import Blog3 from './components/pages/blogs/blog3';
import Blog4 from './components/pages/blogs/blog4';
function App() {
  return (
    <Router>
      {/* Add ScrollToTop here so it listens to route changes */}
      <ScrollToTop />
      <Scrollup />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-maxlead/" element={<Aboutus />} />
        <Route path="/blog/" element={<BlogSectionClassic />} />
        <Route path="/contact/" element={<Contactus />} />
        
        {/* Services */}
        <Route path="/flyer-distribution-services/" element={<FlyerDistribution/>} />
        <Route path="/digital-printing-services/" element={<PrintingServices/>} />
        <Route path="digital-marketing-agency/" element={<DigitalMarketing/>} />
        <Route path="/outdoor-advertising-company/" element={<Outdoorads/>} />
        
        {/* Other */}
        <Route path="/work/" element={<Clients/>} />
        <Route path="/industries/" element={<Industries/>} />
       
         <Route path="/thank-you/" element={<ThankYou />} /> {/* Add this */}



          {/* Other */}
        <Route path="/blog/why-uae-businesses-rely-on-flyer-distribution/" element={<Blog1/>} />
        <Route path="/blog/how-choose-best-digital-marketing-agency-uae/" element={<Blog2/>} />
        <Route path="/blog3/" element={<Blog3/>} />
        <Route path="/blog4/" element={<Blog4/>} />




      </Routes>
    </Router>
  );
}

export default App;