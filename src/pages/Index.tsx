import RealResultsSection from "@/components/RealResultsSection";
import RealReviewsCarousel from "@/components/RealReviewsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-12 lg:py-20 gap-8 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center rounded-full border px-3 sm:px-4 py-2 text-xs sm:text-sm bg-muted/50 text-muted-foreground mb-4 sm:mb-6">
                  ⭐ Trusted by 500+ Local Businesses
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                  Get More
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Reviews</span>
                  <br className="hidden sm:block" />
                  <span className="block mt-2 lg:mt-0">Grow Your Business</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Accreditry helps local businesses get authentic reviews from real Americans, 
                  boosting your online reputation and driving more customers to your door.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-8">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-border hover:border-primary/30 text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-muted/50">
                    See How It Works
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Real Local Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No Fake Accounts</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Interactive Map Visualization */}
            <div className="flex-1 w-full max-w-lg lg:max-w-2xl">
              <div className="relative">
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-border/50">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Real Business Growth</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">Live results from our clients</p>
                    </div>
                    
                    {/* Simulated Business Cards */}
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { name: "Mike's Auto Shop", location: "San Francisco", reviews: "+45 reviews", growth: "+180%" },
                        { name: "Dental Care Plus", location: "Los Angeles", reviews: "+38 reviews", growth: "+250%" },
                        { name: "Home Repair Pro", location: "San Diego", reviews: "+52 reviews", growth: "+320%" }
                      ].map((business, index) => (
                        <div key={index} className="bg-background/80 rounded-xl p-3 sm:p-4 border border-border/30 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-sm sm:text-base">{business.name.charAt(0)}</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground text-sm sm:text-base">{business.name}</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground">{business.location}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs sm:text-sm font-semibold text-primary">{business.growth}</div>
                              <div className="text-xs text-muted-foreground">{business.reviews}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-4 sm:pt-6">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Updates every 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements for visual appeal */}
                <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-12 sm:h-12 bg-primary/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <RealResultsSection />
      <RealReviewsCarousel />
      <TestimonialsSection />
      <PricingSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
