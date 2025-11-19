import { ArrowRight } from "lucide-react";

const Services = () => {
  const SERVICES = [
    {
      id: 1,
      title: "Lead Generation",
      description: "Build a high-quality sales pipeline with targeted lead generation services.",
      link: "/services/lead-generation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Inbound Services",
      description: "Deliver exceptional customer experiences with 24/7 inbound call handling.",
      link: "/services/inbound-services",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Transcriptions",
      description: "Fast, accurate transcription services for medical, legal, and business needs.",
      link: "/services/transcriptions",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Life Insurance Sales",
      description: "Specialized outbound sales services to boost life insurance policy sales.",
      link: "/services/life-insurance-sales",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    }
  ];

  const handleLearnMoreClick = (link) => {
    if (link) {
      window.location.href = link;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-24 md:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-sm tracking-[0.2em] uppercase text-white/40 font-medium mb-6 block">
            What We Do
          </span>
          <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white leading-[0.9] tracking-[-0.02em] mb-8">
            Services
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/50 max-w-[700px] font-light leading-[1.4]">
            End-to-end solutions for modern businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.link}
              onClick={(e) => { e.preventDefault(); handleLearnMoreClick(service.link); }}
              className="group relative bg-white/5 overflow-hidden hover:bg-white/8 focus:bg-white/8 focus:ring-4 focus:ring-white/20 transition-all duration-700 block"
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img 
                  src={service.image} 
                  alt={`${service.title} service illustration`}
                  className="w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Service Content */}
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white/50 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-3 text-white/80 font-medium group-hover:gap-4 transition-all text-sm uppercase tracking-wider">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
