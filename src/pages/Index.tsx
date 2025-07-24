import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BuiltForSection from "@/components/BuiltForSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import RealResultsSection from "@/components/RealResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AnalyticsDashboardSection from "@/components/AnalyticsDashboardSection";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import AutoSpinningTestimonials from "@/components/AutoSpinningTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Built for Long-Term Success Section */}
      <BuiltForSection />

      {/* How We Help Section */}
      <HowWeHelpSection />

      {/* Real Results Section */}
      <RealResultsSection />

      {/* Replace RealReviewsCarousel with AutoSpinningTestimonials */}
      <AutoSpinningTestimonials />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Analytics Dashboard */}
      <AnalyticsDashboardSection />

      {/* Contact Form */}
      <ContactForm />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
