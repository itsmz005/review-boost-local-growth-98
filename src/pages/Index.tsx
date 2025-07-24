
import RealResultsSection from "@/components/RealResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ChatWidget from "@/components/ChatWidget";
import AutoSpinningTestimonials from "@/components/AutoSpinningTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Real Results Section */}
      <RealResultsSection />

      {/* Auto Spinning Testimonials */}
      <AutoSpinningTestimonials />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
