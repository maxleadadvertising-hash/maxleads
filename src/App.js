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
import Serviceoverview from './components/seriveoverview';
import Blog1 from './components/pages/blogs/blog1';
import Blog2 from './components/pages/blogs/blog2';
import Blog3 from './components/pages/blogs/blog3';
import Blog4 from './components/pages/blogs/blog4';
import Blog5 from './components/pages/blogs/blog5';
import Blog6 from './components/pages/blogs/blog6';
import Blog7 from './components/pages/blogs/blog7';
import Blog8 from './components/pages/blogs/blog8';
import Blog9 from './components/pages/blogs/blog9';
import Blog10 from './components/pages/blogs/blog10';
import Blog11 from './components/pages/blogs/blog11';
import Blog12 from './components/pages/blogs/blog12';
import Blog13 from './components/pages/blogs/blog13';



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
       <Route path="/services/" element={<Serviceoverview/>} />
         <Route path="/thank-you/" element={<ThankYou />} /> {/* Add this */}


<Route path="/blog/why-uae-businesses-rely-on-flyer-distribution/" element={<Blog1 />} />
<Route path="/blog/how-choose-best-digital-marketing-agency-uae/" element={<Blog2 />} />
<Route path="/blog/dos-and-donts-of-flyer-distribution-in-uae/" element={<Blog3 />} />
<Route path="/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" element={<Blog4 />} />
<Route path="/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" element={<Blog5 />} />
<Route path="/blog/best-locations-for-flyer-distribution-in-the-uae/" element={<Blog6 />} />
<Route path="/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" element={<Blog7 />} />
<Route path="/blog/what-is-the-role-of-a-flyer-distributor/" element={<Blog8 />} />
<Route path="/blog/how-to-increase-sales-with-flyer-distribution/" element={<Blog9 />} />
<Route path="/blog/integrating-online-and-offline-strategies-for-flyer-distribution/" element={<Blog10 />} />
<Route path="/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" element={<Blog11 />} />
<Route path="/blog/social-media-marketing-services-cost-uae/" element={<Blog12 />} />
<Route path="/blog/affordable-digital-marketing-packages-uae/" element={<Blog13 />} />



      </Routes>
    </Router>
  );
}

export default App;