import { useEffect } from 'react';
import Hero from '../Components/sections/Hero.jsx';
import Services from '../Components/sections/Services.jsx';
import Testimonials from '../Components/sections/Testimonials.jsx';
import Stats from '../Components/sections/Stats.jsx';
import OfficeLocationsMap from '../Components/sections/Offices.jsx';

const Home = () => {
  useEffect(() => {
    // Set document title and meta description
    document.title = 'NextelBPO - Leading BPO Services Provider | Lead Generation, Customer Support & Life Insurance Sales';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'NextelBPO offers premier BPO services including lead generation, inbound customer support, life insurance sales, and transcription services. 99.9% client satisfaction. Get started today!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'NextelBPO offers premier BPO services including lead generation, inbound customer support, life insurance sales, and transcription services. 99.9% client satisfaction. Get started today!';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'BPO services, lead generation, customer support, life insurance sales, transcription services, business process outsourcing, inbound services, outbound sales, NextelBPO';

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO - Leading BPO Services Provider' },
      { property: 'og:description', content: 'Premier BPO services including lead generation, customer support, and life insurance sales. 99.9% client satisfaction rate.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'NextelBPO' },
      { property: 'og:locale', content: 'en_US' }
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

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'NextelBPO - Leading BPO Services Provider' },
      { name: 'twitter:description', content: 'Premier BPO services including lead generation, customer support, and life insurance sales. 99.9% client satisfaction rate.' }
    ];

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = tag.name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = tag.content;
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;

    // Add structured data for Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NextelBPO",
      "description": "Leading provider of comprehensive BPO services including lead generation, customer support, life insurance sales, and transcription services.",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
      "foundingDate": "2018",
      "numberOfEmployees": "200+",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "838 walker rd STE 21-2",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "postalCode": "19904",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-659-220-0667",
        "contactType": "customer service",
        "email": "info@nextelbpo.co",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nextelbpo"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "BPO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation Services",
              "description": "Professional lead generation and qualification services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inbound Customer Support",
              "description": "24/7 inbound call handling and customer service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Life Insurance Sales",
              "description": "Specialized outbound sales services for life insurance providers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transcription Services",
              "description": "Accurate transcription services for medical, legal, and business needs"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5"
      }
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, []);

  return (
    <main>
      {/* Hidden SEO content for better indexing */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO - Premier Business Process Outsourcing Services</h1>
        <p>
          NextelBPO is a leading BPO company founded in 2018, providing comprehensive business process outsourcing services 
          to clients worldwide. Our services include professional lead generation, 24/7 inbound customer support, 
          specialized life insurance sales, and accurate transcription services. With over 200 professionals and a 
          99.9% client satisfaction rate, we deliver exceptional results for businesses across various industries.
        </p>
        <p>
          Our team specializes in insurance BPO services, including final expense insurance, motor vehicle accident (MVA) 
          insurance, Affordable Care Act (ACA) plans, and Medicare supplement solutions. We serve clients in the United States 
          with headquarters in Dover, Delaware.
        </p>
        <p>
          Contact NextelBPO today at +1 (659) 220-0667 or email info@nextelbpo.co for professional BPO solutions 
          that drive business growth and success.
        </p>
      </div>

      <Hero />
      <Services />
      <OfficeLocationsMap/>
      <Stats />
      <Testimonials />
    </main>
  );
};

export default Home;