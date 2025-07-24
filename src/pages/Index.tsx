
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, TrendingUp, CheckCircle, BarChart3, Zap, ChevronDown, ChevronUp, ArrowRight, Award, Globe, Clock, Mail, Building, Link, Crown } from 'lucide-react';
import ChatWidget from "@/components/ChatWidget";
import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Pricing } from "@/components/ui/pricing";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import EnhancedContactForm from "@/components/EnhancedContactForm";

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToTrial = () => {
    const trialElement = document.getElementById('free-trial');
    trialElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What if I don't see considerable growth?",
      answer: "Don't worry we are confident you'll see growth with our plans that's why none of our plans are lock in and you're free to cancel whenever you'd like to no questions asked."
    },
    {
      question: "What if the reviews disappear?",
      answer: "Our system tracks all the review progress and we will inform you which reviews disappear in the rare cases which they do and we will schedule them for redelivery!"
    },
    {
      question: "Is this safe?",
      answer: "It's completely safe if it's written by real people from their personal accounts like our services offer, as well as if there aren't any sudden spikes in number of reviews, that's why we offer fully customised plans tailored towards each business we work with."
    },
    {
      question: "What do the plans cost?",
      answer: "Our prices are dynamic but price of per review basis typically ranges from $10-$20. We work out a tailored and customised plan for every client to ensure the best results."
    },
    {
      question: "Do you offer warranty?",
      answer: "We offer a 30day warranty on all reviews delivered, we will reschedule any which disappear for a refill. However what we do ask is you notify us of any business promotions which may result in a increased number of reviews within a short period as your google business profile is sensitive to sudden changes, thus we will schedule our reviews around those."
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
      {/* Enhanced Professional Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b-2 border-border/20 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/b595e9d1-ad26-41b3-9049-1809a2e14233.png" alt="Accreditry Logo" className="h-6 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none">
                How it works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none">
                FAQ
              </button>
            </nav>
            <Button onClick={scrollToTrial} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started for Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2 text-base font-medium">
                  🚀 Trusted by 500+ Businesses
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Boost your business through 
                  <span className="text-primary"> our automated review system</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your online reputation with genuine reviews from real local Americans. 
                  No fake accounts, no bots - just authentic voices that drive real results and sustainable growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToTrial} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('testimonials')} className="border-2 border-primary/20 hover:bg-primary/5 rounded-xl px-8 py-4 text-lg font-medium">
                  View Success Stories
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - US Map with Business Pins */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/5c882e5f-3e15-43c4-b0d1-d936d10ed91c.png" alt="US map showing real local reviewers across America" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-xl border-2 border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">+184%</div>
                    <div className="text-sm text-muted-foreground">Avg Traffic Growth</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -top-6 -right-6 bg-background rounded-2xl p-4 shadow-xl border-2 border-primary/20">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Real US Reviewers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Relationship Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-foreground">Built for Long-Term Success</h3>
            <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                While others promise quick fixes with low-quality, temporary bot reviews that never stick, 
                we're in the business of building lasting partnerships that drive sustainable growth.
              </p>
              <p>
                We ensure every review delivered comes with a <span className="font-semibold text-primary">30-day warranty</span> and 
                maximize impact by sourcing exclusively from <span className="font-semibold text-primary">real locals in your area</span>. 
                Our approach focuses on authentic, long-term reputation building that search engines trust and customers believe.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">30-Day Warranty</h4>
                <p className="text-muted-foreground">Every review is backed by our guarantee for lasting results</p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Real Local Reviewers</h4>
                <p className="text-muted-foreground">Authentic voices from your community, not bots or fake accounts</p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Sustainable Growth</h4>
                <p className="text-muted-foreground">Long-term reputation building that search engines trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 3 Circle Boxes */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">How We Help Your Business Grow</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven approach combines authentic reviews with smart analytics to deliver sustainable growth for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Completely Customizable</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Every review is carefully crafted to match your business voice and resonate with your target customers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-primary/5 rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Real Reviewers Near Your Business</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Genuine reviewers with established accounts and authentic review histories in your local area
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Identical to Natural Reviews</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Our reviews are indistinguishable from organic ones, ensuring your reputation grows naturally and safely
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnalyticsDashboard />
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed italic mt-8">
              Track your review count changes over time live from us, with full analytics ensuring your business has sustainable growth over time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section - 2x2 Bubbly Boxes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">Our Promise</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Written by Real Locals</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Our reviewers are all real locals to ensure high review stickiness and identical effect to reviews you currently get
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Advanced Analytics and Refills</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Our system automatically checks if any reviews from our side drops off and automatically schedules new tasks for them to be reposted at a future date in the rare chance this occurs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Only Personal Accounts</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  All our reviewers are audited to ensure that they only use their main personal accounts and not another secondary account, to ensure legitimacy and many will also have a review history
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-border/50 hover:border-primary/20 rounded-3xl overflow-hidden hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">Maximised Realism & Effectiveness</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Our slow drip approach whereby only 1-3 reviews are delivered on a weekly basis allows for the best and safest SEO effect, mimicking additional reviews you would normally receive
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">Take a look at how we've improved the businesses of our past clients</h3>
          </div>
          
          <div className="space-y-20">
            {/* First Success Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-3xl font-bold text-foreground">From 100 to 400+ Reviews</h4>
                <div className="text-lg font-semibold text-muted-foreground mb-4">
                  Residential Elevator Installation Business
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Saw their reviews increase from 100 when they first started to over 400 now, and despite having 600 less 5 star reviews than their competitor they still rank first on google SEO searches for 'Elevator Installations' as they chose to use our service and thus received reviews from real locals rather than fake bot accounts which could potentially damage their rankings.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">#1</div>
                    <div className="text-sm text-muted-foreground">Google Ranking</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                        alt="Elevator installation business success story"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Overlay Stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">+300%</div>
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                        alt="IT firm business profile success story"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Overlay Stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">+5-10</div>
                              <div className="text-xs text-muted-foreground">Increase</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-3xl font-bold text-foreground">Steady Growth Drives New Business</h4>
                <div className="text-lg font-semibold text-muted-foreground mb-4">
                  IT Services Firm
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An IT services firm improved from 250 to 500+ reviews with steady growth of 5-10 weekly through our professional plan. The gradual increase allowed their business profile to grow naturally, resulting in significant double-digit customer growth.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5-10</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">17.6K</div>
                    <div className="text-sm text-muted-foreground">Monthly Views</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Success Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                <h4 className="text-3xl font-bold text-foreground">Local Restaurant Success</h4>
                <div className="text-lg font-semibold text-muted-foreground mb-4">
                  Family Restaurant Chain
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A local restaurant chain saw their reviews grow from 180 to 450+ across 3 locations. The authentic local reviews helped them outrank established competitors and increase foot traffic by 35% within 6 months of starting our service.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">35%</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">450+</div>
                    <div className="text-sm text-muted-foreground">Total Reviews</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300 rounded-3xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                        alt="Restaurant chain success story"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Overlay Stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">Review Growth</div>
                                <div className="text-xs text-muted-foreground">Last 12 months</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">+35%</div>
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

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-8 italic">
              To protect the confidentiality of our clients, we aren't revealing exact names.
            </p>
            <Button onClick={scrollToTrial} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Try it out today, free of charge!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={pricingPlans} onCardClick={scrollToTrial} />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">Frequently Asked Questions</h3>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers. Here's everything you need to know.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => <Card key={index} className="cursor-pointer border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden" onClick={() => toggleFaq(index)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-foreground pr-4">{faq.question}</h4>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {expandedFaq === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
                    </div>
                  </div>
                </CardHeader>
                {expandedFaq === index && <CardContent className="pt-0">
                    <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* Free Trial Form */}
      <section id="free-trial" className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <EnhancedContactForm />
        </div>
      </section>

      {/* Footer - Made Black */}
      <Footer7 logo={{
      url: "#",
      src: "/lovable-uploads/6af8b769-c93d-41dc-b4c2-3f074d0db8bf.png",
      alt: "Accreditry Logo",
      title: ""
    }} sections={[{
      title: "Services",
      links: [{
        name: "Review Management",
        href: "#services"
      }, {
        name: "Analytics",
        href: "#analytics"
      }, {
        name: "Pricing",
        href: "#pricing"
      }, {
        name: "Free Trial",
        href: "#free-trial"
      }]
    }, {
      title: "Company",
      links: [{
        name: "About Us",
        href: "#"
      }, {
        name: "How It Works",
        href: "#services"
      }, {
        name: "Success Stories",
        href: "#"
      }, {
        name: "Contact",
        href: "#"
      }]
    }, {
      title: "Support",
      links: [{
        name: "Help Center",
        href: "#"
      }, {
        name: "FAQ",
        href: "#faq"
      }, {
        name: "Contact Support",
        href: "tel:+13107361406"
      }, {
        name: "Live Chat",
        href: "#"
      }]
    }]} description="Transform your online reputation with genuine reviews from real local Americans. No fake accounts, no bots - just authentic voices that drive real results." socialLinks={[{
      icon: <FaInstagram className="size-5" />,
      href: "#",
      label: "Instagram"
    }, {
      icon: <FaFacebook className="size-5" />,
      href: "#",
      label: "Facebook"
    }, {
      icon: <FaTwitter className="size-5" />,
      href: "#",
      label: "Twitter"
    }, {
      icon: <FaLinkedin className="size-5" />,
      href: "#",
      label: "LinkedIn"
    }]} copyright="© 2025 Accreditry. All rights reserved. Executed by Webtic Studio" legalLinks={[{
      name: "Terms of Service",
      href: "#"
    }, {
      name: "Privacy Policy",
      href: "#"
    }]} />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
