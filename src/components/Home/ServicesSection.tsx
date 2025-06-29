// components/ServicesSection.tsx
import { FaShippingFast, FaLock, FaSyncAlt, FaHeadset } from "react-icons/fa";
import ServiceCard from "../shared/ServiceCard";

const services = [
  {
    icon: FaShippingFast,
    title: "Fast Delivery",
    description: "Get your orders delivered to your doorstep in record time.",
  },
  {
    icon: FaLock,
    title: "Secure Payment",
    description: "Your payment information is encrypted and safe with us.",
  },
  {
    icon: FaSyncAlt,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of purchase.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "We’re here to help anytime you need assistance.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-base-100 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Why Choose PremiumShop?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience top-tier services designed to make your shopping journey
          smooth and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
