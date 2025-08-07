import { Phone, Search, Headphones, Shield } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Lead Generation",
    description: "Targeted lead generation services to help you build a high-quality sales pipeline and increase conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    features: [
      "Targeted lead sourcing",
      "Lead qualification",
      "CRM integration",
      "Performance analytics"
    ],
    icon: <Search className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Inbound Services",
    description: "Professional inbound call handling and customer service to enhance your customer experience.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=300&fit=crop",
    features: [
      "24/7 availability",
      "Multilingual support",
      "Call routing",
      "Customer satisfaction tracking"
    ],
    icon: <Phone className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Transcriptions",
    description: "Accurate and fast transcription services for medical, legal, and general business needs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    features: [
      "99% accuracy guarantee",
      "Fast turnaround",
      "Secure handling",
      "Multiple file formats"
    ],
    icon: <Headphones className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Life Insurance Sales",
    description: "Specialized outbound sales services for life insurance providers to boost policy sales.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop",
    features: [
      "Trained insurance agents",
      "Lead nurturing",
      "Appointment setting",
      "Sales reporting"
    ],
    icon: <Shield className="w-8 h-8" />
  }
];

export default SERVICES; 