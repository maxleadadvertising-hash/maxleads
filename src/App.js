import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Scrollup from "./components/scrolluparrow";
import Homepage from './components/pages/Homepage';
import { Helmet } from 'react-helmet'; // Import Helmet
// ... (your other imports)

const CanonicalHelper = () => {
  const location = useLocation();
  // This ensures your canonical link always matches the current URL
  const url = `https://www.maxleadadvertising.com${location.pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

const Aboutus = lazy(() => import('./components/pages/Aboutus'));
const Contactus = lazy(() => import('./components/pages/Contactus'));
const BlogSectionClassic = lazy(() => import('./components/pages/blogs/Blogpage'));
const FlyerDistribution = lazy(() => import('./components/pages/Flyers'));
const PrintingServices = lazy(() => import('./components/pages/PrintingServices'));
const DigitalMarketing = lazy(() => import('./components/pages/Digitalmarketing'));
const Outdoorads = lazy(() => import('./components/pages/outdoorads'));
const Clients = lazy(() => import('./components/pages/client'));
const Industries = lazy(() => import('./components/pages/industries'));
const ThankYou = lazy(() => import('./components/Thankyou'));
const Serviceoverview = lazy(() => import('./components/seriveoverview'));

const Blog1 = lazy(() => import('./components/pages/blogs/blog1'));
const Blog2 = lazy(() => import('./components/pages/blogs/blog2'));
const Blog3 = lazy(() => import('./components/pages/blogs/blog3'));
const Blog4 = lazy(() => import('./components/pages/blogs/blog4'));
const Blog5 = lazy(() => import('./components/pages/blogs/blog5'));
const Blog6 = lazy(() => import('./components/pages/blogs/blog6'));
const Blog7 = lazy(() => import('./components/pages/blogs/blog7'));
const Blog8 = lazy(() => import('./components/pages/blogs/blog8'));
const Blog9 = lazy(() => import('./components/pages/blogs/blog9'));
const Blog10 = lazy(() => import('./components/pages/blogs/blog10'));
const Blog11 = lazy(() => import('./components/pages/blogs/blog11'));
const Blog12 = lazy(() => import('./components/pages/blogs/blog12'));
const Blog13 = lazy(() => import('./components/pages/blogs/blog13'));
const Blog14 = lazy(() => import('./components/pages/blogs/blog14'));
const Blog15 = lazy(() => import('./components/pages/blogs/blog15'));
const Blog16 = lazy(() => import('./components/pages/blogs/blog16'));
const Blog17 = lazy(() => import('./components/pages/blogs/blog17'));
const Blog18 = lazy(() => import('./components/pages/blogs/blog18'));
const Blog19 = lazy(() => import('./components/pages/blogs/blog19'));
const Blog20 = lazy(() => import('./components/pages/blogs/blog20'));
/**
 * LOADING FALLBACK: 
 * Using a simple div instead of a heavy spinner reduces initial TBT.
 */
const PageLoader = () => <div className="min-h-screen bg-[#FAF9F6]" />;

function App() {
  return (
    <Router>
       <CanonicalHelper />
      <ScrollToTop />
      <Scrollup />
     
      
      {/* 4. Suspense handles the "Wait" while a new page chunk is downloaded */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-maxlead/" element={<Aboutus />} />
          <Route path="/blog/" element={<BlogSectionClassic />} />
          <Route path="/contact/" element={<Contactus />} />
          
          {/* Services */}
          <Route path="/flyer-distribution-services/" element={<FlyerDistribution/>} />
          <Route path="/digital-printing-services/" element={<PrintingServices/>} />
          <Route path="/digital-marketing-agency/" element={<DigitalMarketing/>} />
          <Route path="/outdoor-advertising-company/" element={<Outdoorads/>} />
          
          {/* Company Info */}
          <Route path="/work/" element={<Clients/>} />
          <Route path="/industries/" element={<Industries/>} />
          <Route path="/services/" element={<Serviceoverview/>} />
          <Route path="/thank-you/" element={<ThankYou />} />

          {/* Individual Blog Routes */}
          <Route path="/blog/why-uae-businesses-rely-on-flyer-distribution/" element={<Blog1 />} />
          <Route path="/blog/best-digital-marketing-agency-uae/" element={<Blog2 />} />
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
          <Route path="/blog/best-flyer-distribution-services-uae/" element={<Blog14 />} />
          <Route path="/blog/best-leaflet-distribution-companies-in-uae/" element={<Blog15 />} />
          <Route path="/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" element={<Blog16 />} />
          <Route path="/blog/creative-flyer-distribution-ideas-that-work-in-dubai/" element={<Blog17 />} />
          <Route path="/blog/measuring-roi-on-physical-marketing-campaigns/" element={<Blog18 />} />
          <Route path="/blog/best-digital-marketing-agency-uae/" element={<Blog19 />} />
          <Route path="/blog/flyer-distribution-company-near-me/" element={<Blog20 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;