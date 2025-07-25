
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, TrendingUp, CheckCircle, BarChart3, Zap, ChevronDown, ChevronUp, ArrowRight, Award, Globe, Clock, Mail, Building, Link, Crown, Heart, Target, Menu, X } from 'lucide-react';
import ChatWidget from "@/components/ChatWidget";
import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Pricing } from "@/components/ui/pricing";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTrial = () => {
    const trialElement = document.getElementById('free-trial');
    trialElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMobileMenuOpen(false);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What if I don't see the growth I'm looking for?",
      answer: "We're so confident in our approach that none of our plans require long-term contracts. If you're not seeing the results you want, you can cancel anytime - no questions asked. But here's the thing: 98% of our clients see significant growth within the first month."
    },
    {
      question: "What happens if reviews disappear?",
      answer: "This is incredibly rare with our authentic approach, but we've got you covered. Our advanced monitoring system tracks every review, and if any do disappear, we automatically schedule replacements at no extra cost. Your investment is protected."
    },
    {
      question: "Is this actually safe for my business?",
      answer: "Absolutely. When reviews come from real people with genuine accounts (like ours do), Google actually rewards your business. We've never had a client penalized because we follow Google's guidelines perfectly - real people, real accounts, real experiences."
    },
    {
      question: "How much does this really cost?",
      answer: "Our pricing is straightforward and honest - typically $10-20 per review depending on your plan. But here's what matters: our clients usually see their investment pay for itself within weeks through increased business. We're not an expense, we're a growth investment."
    },
    {
      question: "Do you really guarantee the reviews will stick?",
      answer: "Yes, we offer a 30-day warranty on every review. If any disappear, we replace them free of charge. We just ask that you let us know about any major promotions so we can time our reviews appropriately - your business profile needs to grow naturally."
    }
  ];

  const pricingPlans = [
    {
      name: "Individual Orders",
      icon: Zap,
      price: "$15",
      period: "per review",
      description: "Perfect for small batches under 10 reviews",
      reviews: "Sub 10 reviews",
      features: ["Up to 10 authentic reviews", "Real local reviewers", "Custom review content", "7-day delivery window"],
      isPopular: false
    },
    {
      name: "Weekly Subscription",
      icon: Crown,
      price: "$13",
      period: "per review",
      description: "Charged weekly, cancel anytime",
      reviews: "Ongoing weekly delivery",
      features: ["Weekly review delivery", "Real local reviewers", "Cancel anytime", "Priority support", "Custom scheduling"],
      isPopular: true
    },
    {
      name: "Monthly Subscription",
      icon: BarChart3,
      price: "$12",
      period: "per review",
      description: "Charged monthly, cancel anytime",
      reviews: "Ongoing monthly delivery",
      features: ["Monthly review delivery", "Real local reviewers", "Cancel anytime", "Best value pricing", "Advanced analytics"],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <header className="bg-background/95 backdrop-blur-sm border-b-2 border-border/20 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcSet="/lovable-uploads/e23f5dcd-bea4-4baf-8946-20bbd7e92d9f.png" />
                <img src="/lovable-uploads/b595e9d1-ad26-41b3-9049-1809a2e14233.png" alt="Accreditry Logo" className="h-5 sm:h-6 w-auto" />
              </picture>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors text-base xl:text-lg font-medium cursor-pointer bg-transparent border-none">
                How it works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-primary transition-colors text-base xl:text-lg font-medium cursor-pointer bg-transparent border-none">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition-colors text-base xl:text-lg font-medium cursor-pointer bg-transparent border-none">
                FAQ
              </button>
            </nav>

            {/* Desktop CTA Button */}
            <Button onClick={scrollToTrial} className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started for Free
            </Button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg">
              <nav className="container mx-auto px-4 py-4 space-y-4 max-w-7xl">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors text-lg font-medium py-2">
                  How it works
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors text-lg font-medium py-2">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors text-lg font-medium py-2">
                  FAQ
                </button>
                <Button onClick={scrollToTrial} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                  Get Started for Free
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - More Emotional */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium w-fit">
                  🚀 Trusted by over 500 businesses who've seen a significant increase in traffic
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Stop Losing Customers to 
                  <span className="text-primary"> Better-Reviewed Competitors</span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Our automated review system helps honest businesses like yours get the recognition you deserve - from real local customers, not bots.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={scrollToTrial} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  Stop Losing Customers Today
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('testimonials')} className="border-2 border-primary/20 hover:bg-primary/5 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto">
                  See Real Success Stories
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Businesses Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">See Growth in Month 1</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">184%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Avg Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Human Support</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" alt="Long line of customers waiting outside a popular local business" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-background rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl border-2 border-primary/20">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-foreground">+184%</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Avg Growth</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-background rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl border-2 border-primary/20">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  <span className="text-xs lg:text-sm font-medium text-foreground">Real US Reviewers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">Why Businesses Choose Us Over Everyone Else</h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              While others promise quick fixes with low-quality botted reviews that never stick, we're in the business of building long-term relationships. We ensure all reviews delivered stick with a 30-day warranty and maximize the effect by sourcing from real locals.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-1 p-4 lg:p-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-3">Personalized Towards Your Success</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Every review is personally crafted to showcase what makes your business special. No templates, no copy-paste - just authentic voices that convert visitors into customers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-primary/5 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4 flex-1 p-4 lg:p-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-3">Real Neighbors, Real Impact</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Your reviews come from actual people in your area with established Google accounts and review histories. When Google sees local voices supporting you, your rankings soar.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4 flex-1 p-4 lg:p-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-3">Indistinguishable from Organic Growth</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our strategic timing and authentic approach means Google rewards you instead of penalizing you. Your growth looks completely natural because it is - just accelerated.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">See Your Growth in Real-Time</h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8">
              Unlike other services that leave you in the dark, our platform gives you complete transparency. 
              Track every review, monitor your progress, and watch your business transform before your eyes.
            </p>
            <AnalyticsDashboard />
            <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed italic mt-6 lg:mt-8">
              Full transparency means you can see exactly how your investment is paying off. No surprises, no hidden metrics - just clear, measurable growth that you can track 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section - More Emotional */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">Our Promise: Your Success is Our Obsession</h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just deliver reviews - we deliver results that transform businesses and change lives
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-4 lg:pb-6 p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-2 lg:mb-3">Written by Real Locals</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our reviewers are all real locals to ensure high review stickiness and identical effect to reviews you currently get
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-4 lg:pb-6 p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-2 lg:mb-3">Advanced Analytics and Refills</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our system automatically checks if any reviews from our side drops off and automatically schedules new tasks for them to be reposted at a future date in the rare chance this occurs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-4 lg:pb-6 p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-2 lg:mb-3">Only Personal Accounts</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  All our reviewers are audited to ensure that they only use their main personal accounts and not another secondary account, to ensure legitimacy and many will also have a review history
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-4 lg:pb-6 p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground mb-2 lg:mb-3">Maximised Realism & Effectiveness</CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our slow drip approach whereby only 1-3 reviews are delivered on a weekly basis allows for the best and safest SEO effect, mimicking additional reviews you would normally receive
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* New Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Client Success Stories - More Emotional */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">Real Businesses, Real Transformations</h3>
            <p className="text-lg sm:text-xl text-muted-foreground">
              These aren't just numbers - they're dreams realized, families supported, and businesses saved from closure
            </p>
          </div>
          
          <div className="space-y-16 lg:space-y-20">
            {/* First Success Story */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground">From 100 to 400+ Reviews</h4>
                <div className="text-base sm:text-lg font-semibold text-muted-foreground mb-3 lg:mb-4">
                  Residential Elevator Installation Business
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Saw their reviews increase from 100 when they first started to over 400 now, and despite having 600 less 5 star reviews than their competitor they still rank first on google SEO searches for 'Elevator Installations' as they chose to use our service and thus received reviews from real locals rather than fake bot accounts which could potentially damage their rankings.
                </p>
                <div className="flex items-center gap-6 lg:gap-8 pt-3 lg:pt-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">300%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">#1</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">State Ranking for Elevators</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-2xl lg:rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/930ccfef-099d-4707-8d41-382eb0766f15.png"
                        alt="Modern elevator installation in residential building"
                        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 lg:gap-3">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-xs lg:text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-base lg:text-lg font-bold text-primary">+300%</div>
                              <div className="text-xs text-muted-foreground">Increase</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Second Success Story */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-2xl lg:rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop"
                        alt="Modern IT office with professional team"
                        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 lg:gap-3">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-xs lg:text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-base lg:text-lg font-bold text-primary">+100%</div>
                              <div className="text-xs text-muted-foreground">Increase</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground">Steady Growth Drives New Business</h4>
                <div className="text-base sm:text-lg font-semibold text-muted-foreground mb-3 lg:mb-4">
                  IT Services Firm
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  An IT services firm improved from 250 to 500+ reviews with steady growth of 5-10 weekly through our professional plan. The gradual increase allowed their business profile to grow naturally, resulting in significant double-digit customer growth.
                </p>
                <div className="flex items-center gap-6 lg:gap-8 pt-3 lg:pt-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">#1</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">City Ranking for IT Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Success Story */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground">Local Restaurant Success</h4>
                <div className="text-base sm:text-lg font-semibold text-muted-foreground mb-3 lg:mb-4">
                  Family Restaurant Chain
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  A local restaurant chain saw their reviews grow from 180 to 450+ across 3 locations. The authentic local reviews helped them outrank established competitors and increase foot traffic by 150% within 6 months of starting our service.
                </p>
                <div className="flex items-center gap-6 lg:gap-8 pt-3 lg:pt-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">150%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">Top 5</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">City Ranking for Restaurants</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-2xl lg:rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop"
                        alt="Busy family restaurant with customers dining"
                        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 lg:gap-3">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-xs lg:text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-base lg:text-lg font-bold text-primary">+150%</div>
                              <div className="text-xs text-muted-foreground">Increase</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <p className="text-muted-foreground mb-6 lg:mb-8 italic">
              Client privacy is sacred to us - that's why we protect their identities while sharing their victories.
            </p>
            <Button onClick={scrollToTrial} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Your Success Story Starts Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={pricingPlans} onCardClick={scrollToTrial} />

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">Frequently Asked Questions</h3>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Got questions? We've got answers. Here's everything you need to know.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 lg:space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="cursor-pointer border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-xl lg:rounded-2xl overflow-hidden" onClick={() => toggleFaq(index)}>
                <CardHeader className="pb-3 p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground pr-4">{faq.question}</h4>
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {expandedFaq === index ? <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary" /> : <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />}
                    </div>
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0 p-4 lg:p-6 lg:pt-0">
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form */}
      <section id="free-trial" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <EnhancedContactForm />
        </div>
      </section>

      {/* Replace Footer7 with new Footerdemo */}
      <Footerdemo />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
