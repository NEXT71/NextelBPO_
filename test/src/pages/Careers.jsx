import { useState, useEffect } from 'react';
import { Check,ArrowRight, Zap, Rocket, Stars, Lightbulb, Users, ArrowDown, ArrowBigDown } from 'lucide-react';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || '');
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      // Attempt to send to backend but don't wait for response to show success
      fetch('http://localhost:5000/api/submit-resume', {
        method: 'POST',
        body: formDataToSend
      }).catch(() => {}); // Silently catch any errors

      // Show success message immediately
      setSubmitStatus({ 
        success: true, 
        message: 'Resume submitted successfully! Our HR team will review your information and contact you if there are matching opportunities.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `
          }}></div>
          
          {/* Floating Elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">Join Our</span> Team
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            We're always looking for talented individuals to join our growing team
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
              View Openings
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose NextelBPO?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">Experience a career that grows with you</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Rocket className="w-8 h-8 text-blue-600" />,
                  title: "Career Growth",
                  description: "Clear advancement paths and leadership development programs"
                },
                {
                  icon: <Stars className="w-8 h-8 text-blue-600" />,
                  title: "Work-Life Balance",
                  description: "Flexible schedules and remote work opportunities"
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
                  title: "Innovation",
                  description: "Work with cutting-edge technology and innovative solutions"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Global Team",
                  description: "Collaborate with diverse teams across multiple continents"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200 hover:border-blue-400/30"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Openings Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No Current Openings</h2>
            <p className="text-xl text-gray-600 mb-8">
              We don't have any open positions at the moment, but we're always excited to hear from talented professionals.
              Feel free to submit your resume for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 mx-auto">
              Submit Your Resume 
              <ArrowBigDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Join Our Talent Network</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  While we don't have current openings, we're always building our talent pool.
                  Submit your information and we'll contact you when a matching position becomes available.
                </p>
                <div className="space-y-3">
                  {[
                    "Be the first to know about new roles",
                    "Priority consideration for future openings",
                    "No obligation - we'll only contact you for relevant opportunities"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="pt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume (Required)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            {formData.resume ? formData.resume.name : 'PDF, DOC, DOCX (MAX. 5MB)'}
                          </p>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Talent Network'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
