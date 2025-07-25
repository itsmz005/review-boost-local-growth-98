
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, CheckCircle, Users, Award, TrendingUp, Moon, Sun, Menu, X } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import RealReviewsCarousel from "@/components/RealReviewsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import RealResultsSection from "@/components/RealResultsSection";
import PricingSection from "@/components/PricingSection";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import ChatWidget from "@/components/ChatWidget";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import FooterSection from "@/components/ui/footer-section";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Force light mode on initial load
    const root = document.documentElement;
    root.classList.remove('dark');
    setIsDark(false);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={isDark ? "https://media.discordapp.net/attachments/996663635860525057/1398332562811785286/Accreditry-W.png?ex=6884fa2e&is=6883a8ae&hm=22ee1be659668b80ecffa9c3e2157ba02b2ca713191e85c362620740b16708f2&=&format=webp&quality=lossless&width=1938&height=432" : "https://media.discordapp.net/attachments/996663635860525057/1398332562530893845/Accreditry.png?ex=6884fa2e&is=6883a8ae&hm=677aac220a4114c6a23bc2be0693c99b947195118d23fe0f5da606f1222948e2&=&format=webp&quality=lossless&width=1938&height=432"}
                alt="Accreditry"
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden sm:flex"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="sm:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <nav className="hidden sm:flex items-center space-x-6">
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
                <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
                <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              </nav>
              
              <Button className="hidden sm:flex">Get Started</Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
                <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
                <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
                <Button className="w-full mt-4">Get Started</Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-full mt-2"
                >
                  {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                #1 Review Management Platform
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transform Your Online Reputation
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Get authentic 5-star reviews from real US customers. Boost your credibility, increase sales, and dominate your market with our proven review management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9bed81b7-e88d-4a48-b20e-ebe143e8da0c.png"
                  alt="Review management dashboard"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  Real US Reviewers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Reviews Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Accreditry?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We connect you with real US customers who provide authentic reviews, helping you build trust and credibility in your market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real US Customers</h3>
                <p className="text-muted-foreground">
                  Connect with verified US customers who provide authentic, detailed reviews based on real experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">100% Authentic</h3>
                <p className="text-muted-foreground">
                  All reviews are from real customers with verified purchases and genuine experiences with your business.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our clients see an average increase of 300% in positive reviews within the first 30 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive review management solutions to boost your online reputation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">Review Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with real customers to generate authentic 5-star reviews for your business.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Reputation Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Track and monitor your online reputation across all major platforms.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Response Management</h3>
                <p className="text-muted-foreground mb-4">
                  Professional response management for all your customer reviews.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our clients transformed their online reputation with authentic reviews.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipOhZtszNKeu9g8zelVewC8Sl4ewfo6CxOAu9_bs=s1360-w1360-h1020-rw"
                    alt="Modern elevator installation in residential building"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    500% Growth
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Elite Elevator Services</h3>
                  <p className="text-muted-foreground mb-4">
                    "Accreditry helped us go from 12 reviews to over 200 authentic 5-star reviews in just 3 months. Our business has never been better!"
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">4.9/5</span>
                    <span className="ml-2">• 200+ Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/ec922bb9-3fa0-4905-b611-5031727c878a.png"
                    alt="Professional dental office interior"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    300% Increase
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Bright Smile Dental</h3>
                  <p className="text-muted-foreground mb-4">
                    "We tripled our patient base after improving our online reputation. The reviews are from real patients who love our service!"
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">4.8/5</span>
                    <span className="ml-2">• 150+ Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Real Results Section */}
      <RealResultsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Reputation?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started today and see the difference authentic reviews can make for your business.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <EnhancedContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
