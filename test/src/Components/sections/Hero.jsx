import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          opacity: 0.12
        }}
      ></div>
      <div className="absolute inset-0 bg-white/80 z-[1]"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1100px]">
          {/* Small Label */}
          <div className="mb-8">
            <span className="text-sm md:text-base tracking-[0.2em] uppercase text-black/40 font-medium">
              Business Process Outsourcing
            </span>
          </div>
          
          {/* Massive Headline */}
          <h1 className="text-[clamp(48px,8vw,140px)] font-bold leading-[0.85] tracking-[-0.02em] text-black mb-10 md:mb-14">
            Outsource
            <br />
            <span className="text-black/30">Smarter</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-[clamp(18px,2.5vw,32px)] text-black/60 mb-12 md:mb-16 leading-[1.4] max-w-[800px] font-light">
            Professional BPO solutions that streamline operations, reduce costs, and accelerate growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-black text-white px-12 py-5 text-base font-medium hover:bg-black/90 focus:ring-4 focus:ring-black/20 transition-all duration-300"
              aria-label="Get started with NextelBPO services"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-black px-12 py-5 text-base font-medium border border-black/20 hover:border-black/40 focus:ring-4 focus:ring-black/10 transition-all duration-300"
              aria-label="View our BPO services"
            >
              <span>Our Services</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Large Hero Image */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop" 
            alt="Modern business operations center with professionals collaborating on BPO solutions" 
            className="w-full h-full object-cover opacity-90"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
