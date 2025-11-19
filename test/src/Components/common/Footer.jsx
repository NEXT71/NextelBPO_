import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold tracking-tight text-white">
                NEXTELBPO
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">
                Elevate To The Next
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering excellence in business process outsourcing with cutting-edge technology and expert professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/nextel-bpo-3-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-all duration-500"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/p/Nextel-BPO-100094110325568/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-all duration-500"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/services" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Services</a></li>
              <li><a href="/about" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">About Us</a></li>
              <li><a href="/careers" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Careers</a></li>
              <li><a href="/contact" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Contact</a></li>
              <li><a href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/lead-generation" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Lead Generation</a></li>
              <li><a href="/services/inbound-services" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Inbound Services</a></li>
              <li><a href="/services/transcriptions" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Transcriptions</a></li>
              <li><a href="/services/life-insurance-sales" className="text-sm text-white/70 hover:text-white transition-all duration-500 inline-block py-1">Life Insurance Sales</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Contact</h4>
            <address className="not-italic space-y-4 text-white/70">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm">838 walker rd STE 21-2 Dover DE 19904</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-white/40 mr-3 flex-shrink-0" />
                <a href="mailto:info@nextelbpo.co" className="text-sm hover:text-white transition-all duration-500">info@nextelbpo.co</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-white/40 mr-3 flex-shrink-0" />
                <a href="tel:+1 (659) 220-0667" className="text-sm hover:text-white transition-all duration-500">+1 (659) 220-0667</a>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-white/40 mr-3 flex-shrink-0" />
                <span className="text-xs uppercase tracking-wider text-white/50">24/7 Support</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} NextelBPO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
