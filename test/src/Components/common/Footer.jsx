import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, ArrowRight, Globe, Shield, Award, Users, BookOpen, Briefcase, HeartHandshake, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3">
                <img 
                  src="/nextelbpologo.jpg" 
                  alt="NextelBPO Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NEXTELBPO
                </span>
                <div className="text-xs text-purple-200">Elevate To The Next</div>
              </div>
            </div>
            <p className="text-purple-100 text-sm leading-relaxed">
              Delivering excellence in business process outsourcing with cutting-edge technology and expert professionals.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/services" className="text-purple-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="text-purple-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-purple-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/lead-generation" className="text-purple-200 hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="/services/inbound-services" className="text-purple-200 hover:text-white transition-colors">Inbound Services</a></li>
              <li><a href="/services/transcriptions" className="text-purple-200 hover:text-white transition-colors">Transcriptions</a></li>
              <li><a href="/services/life-insurance-sales" className="text-purple-200 hover:text-white transition-colors">Life Insurance Sales</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <address className="not-italic space-y-3 text-purple-100">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-300 mt-0.5 mr-3 flex-shrink-0" />
                <span>838 walker rd STE 21-2 Dover DE 19904</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@nextelbpo.co" className="hover:text-white transition-colors">info@nextelbpo.co</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                <a href="tel:+1 (659) 220-0667 className="hover:text-white transition-colors">+1 (659) 220-0667</a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                <span>24/7 Support Available</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-800 mt-12 pt-6 text-center">
          <p className="text-sm text-purple-300">
            &copy; {new Date().getFullYear()} NextelBPO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
