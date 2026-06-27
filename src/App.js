import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './index.css';

// Existing pages
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Home from './pages/Home';
import Payment from './pages/Payment';

// New core pages
import TradingSolutions from './pages/TradingSolutions';
import ServicesPage from './pages/ServicesPage';
import KYC from './pages/KYC';
import ComplaintStatus from './pages/ComplaintStatus';

// Legal pages
import Disclaimer from './pages/legal/Disclaimer';
import Disclosure from './pages/legal/Disclosure';
import Grievance from './pages/legal/Grievance';
import InvestorCharter from './pages/legal/InvestorCharter';
import InvestorCharges from './pages/legal/InvestorCharges';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import TermsConditions from './pages/legal/TermsConditions';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import TermsPopup from './components/TermsPopup';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("SigmaOne Capital - SMARTER MOVES STRONGER OUTCOMES");

  return (
    <>
      <TermsPopup />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/payment" element={<Payment />} />
            
            {/* Core pages */}
            <Route path="/trading-solutions" element={<TradingSolutions />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/complaint-status" element={<ComplaintStatus />} />
            
            {/* Legal pages */}
            <Route path="/legal/disclaimer" element={<Disclaimer />} />
            <Route path="/legal/disclosure" element={<Disclosure />} />
            <Route path="/legal/grievance" element={<Grievance />} />
            <Route path="/legal/investor-charter" element={<InvestorCharter />} />
            <Route path="/legal/investor-charges" element={<InvestorCharges />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/refund-policy" element={<RefundPolicy />} />
            <Route path="/legal/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

