import { Star } from 'lucide-react';
import TESTIMONIALS from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="bg-black py-24 md:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-sm tracking-[0.2em] uppercase text-white/40 font-medium mb-6 block">
            Testimonials
          </span>
          <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white leading-[0.9] tracking-[-0.02em] mb-8">
            Client Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 md:p-10 hover:bg-white/8 transition-all duration-500 border border-white/5 hover:border-white/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white/60 fill-white/60" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-base md:text-lg mb-10 leading-[1.6] font-light">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full grayscale"
                />
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs mt-1">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;