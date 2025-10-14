import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // SEO Meta Tags
    document.title = 'Privacy Policy - NextelBPO | Data Protection & Privacy';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'NextelBPO Privacy Policy: Learn how we collect, use, and protect your personal information. We are committed to data privacy and compliance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'NextelBPO Privacy Policy: Learn how we collect, use, and protect your personal information. We are committed to data privacy and compliance.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'NextelBPO privacy policy, data protection, personal information, privacy rights, BPO privacy';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Privacy Policy - NextelBPO' },
      { property: 'og:description', content: 'NextelBPO Privacy Policy: Protecting your data and privacy rights.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 animate-pulse"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Privacy Policy
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Protecting Your Data, Preserving Your Trust
            </h2>
            <p className="text-lg text-purple-200/80">
              Your privacy is our priority • Transparent data practices • Global compliance standards
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-100 font-medium">Legal Name: NextelBPO</span>
                  </div>
                  <p className="text-slate-400 text-sm">Last updated: October 14, 2025</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Lock className="w-6 h-6 text-purple-400" />
                      Introduction
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      NextelBPO ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                    </p>
                    <p className="text-slate-400 leading-relaxed mt-4">
                      By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Eye className="w-6 h-6 text-purple-400" />
                      Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                        <p className="text-slate-400">
                          We may collect personal information that you provide directly to us, such as:
                        </p>
                        <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                          <li>Name, email address, phone number</li>
                          <li>Business contact information</li>
                          <li>Resume and employment-related information (for career inquiries)</li>
                          <li>Messages and inquiries submitted through our contact forms</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                        <p className="text-slate-400">
                          We may automatically collect certain information about your device and usage:
                        </p>
                        <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                          <li>IP address and location information</li>
                          <li>Browser type and version</li>
                          <li>Pages visited and time spent on our site</li>
                          <li>Device information and operating system</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Users className="w-6 h-6 text-purple-400" />
                      How We Use Your Information
                    </h2>
                    <p className="text-slate-400 mb-4">We use the information we collect for various purposes, including:</p>
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                      <li>Providing and maintaining our BPO services</li>
                      <li>Responding to your inquiries and providing customer support</li>
                      <li>Processing job applications and recruitment</li>
                      <li>Sending administrative information and updates</li>
                      <li>Improving our website and services</li>
                      <li>Complying with legal obligations</li>
                      <li>Protecting against fraud and unauthorized access</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-purple-400" />
                      Information Sharing and Disclosure
                    </h2>
                    <p className="text-slate-400 mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                      <li>With service providers who assist us in operating our business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Lock className="w-6 h-6 text-purple-400" />
                      Data Security
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
                    </p>
                    <p className="text-slate-400 leading-relaxed mt-4">
                      However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Eye className="w-6 h-6 text-purple-400" />
                      Your Rights and Choices
                    </h2>
                    <p className="text-slate-400 mb-4">You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                      <li>Access: Request access to your personal information</li>
                      <li>Correction: Request correction of inaccurate information</li>
                      <li>Deletion: Request deletion of your personal information</li>
                      <li>Portability: Request transfer of your data</li>
                      <li>Opt-out: Unsubscribe from marketing communications</li>
                    </ul>
                    <p className="text-slate-400 leading-relaxed mt-4">
                      To exercise these rights, please contact us using the information provided below.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
                    <p className="text-slate-400 leading-relaxed">
                      We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
                    <p className="text-slate-400 leading-relaxed">
                      As a global BPO company, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-slate-400 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Mail className="w-6 h-6 text-purple-400" />
                      Contact Us
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold text-white mb-2">NextelBPO Headquarters</h3>
                          <p className="text-slate-400">838 walker rd STE 21-2<br />Dover, DE 19904<br />United States</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Contact Information</h3>
                          <p className="text-slate-400">
                            <Phone className="w-4 h-4 inline mr-2" />
                            +1 (659) 220-0667<br />
                            <Mail className="w-4 h-4 inline mr-2" />
                            info@nextelbpo.co
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;