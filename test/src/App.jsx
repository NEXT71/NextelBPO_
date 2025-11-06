import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Careers from './pages/Careers.jsx';
import LeadGeneration from './pages/LeadGeneration.jsx';
import InboundServices from './pages/InboundServices';
import Transcription from './pages/Transcription';
import LifeInsuranceSales from './pages/LifeInsurance.jsx';
import './styles/globals.css';
import TeamPage from './pages/Teampage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/careers';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>            
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/lead-generation"element={<LeadGeneration />} />
          <Route path="/services/inbound-services"element={<InboundServices />} />
          <Route path="/services/transcriptions"element={<Transcription />} />
          <Route path="/services/life-insurance-sales"element={<LifeInsuranceSales />} />
          <Route path="/about/team"element={<TeamPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;