import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Star, 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  BarChart3, 
  Zap, 
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Award,
  Globe,
  Clock,
  Mail,
  Building,
  Link,
  Crown
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import ChatWidget from "@/components/ChatWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import RealResultsSection from "@/components/RealResultsSection";
import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Pricing } from "@/components/ui/pricing";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessProfile: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Free Trial Requested!",
      description: "We'll follow up with your trial details via email within 24 hours.",
    });
    setFormData({ name: '', email: '', businessProfile: '' });
  };

  const scrollToTrial = () => {
    const trialElement = document.getElementById('free-trial');
    trialElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      features: [
        "Up to 10 authentic reviews",
        "Real local reviewers",
        "Custom review content",
        "7-day delivery window"
      ],
      isPopular: false
    },
    {
      name: "Weekly Subscription",
      icon: Crown,
      price: "$13",
      period: "per review",
      description: "Charged weekly, cancel anytime",
      reviews: "Ongoing weekly delivery",
      features: [
        "Weekly review delivery",
        "Real local reviewers",
        "Cancel anytime",
        "Priority support",
        "Custom scheduling"
      ],
      isPopular: true
    },
    {
      name: "Monthly Subscription",
      icon: BarChart3,
      price: "$12",
      period: "per review",
      description: "Charged monthly, cancel anytime",
      reviews: "Ongoing monthly delivery",
      features: [
        "Monthly review delivery",
        "Real local reviewers", 
        "Cancel anytime",
        "Best value pricing",
        "Advanced analytics"
      ],
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
              <img 
                src="/lovable-uploads/b595e9d1-ad26-41b3-9049-1809a2e14233.png" 
                alt="Accreditry Logo"
                className="h-6 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium cursor-pointer bg-transparent border-none"
              >
                FAQ
              </button>
            </nav>
            <Button 
              onClick={scrollToTrial}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get started free
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
                  <span className="text-primary"> authentic reviews</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your online reputation with genuine reviews from real local Americans. 
                  No fake accounts, no bots - just authentic voices that drive real results and sustainable growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToTrial}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('testimonials')}
                  className="border-2 border-primary/20 hover:bg-primary/5 rounded-xl px-8 py-4 text-lg font-medium"
                >
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
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=500&fit=crop" 
                  alt="Professional business team helping with review growth"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-xl border-2 border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">+247%</div>
                    <div className="text-sm text-muted-foreground">Avg Growth</div>
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
            <div className="relative">
              <img 
                src="/lovable-uploads/3546c5fb-6508-4e07-ba4b-47dcd58d77a0.png" 
                alt="Analytics dashboard showing review growth over time"
                className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
              />
            </div>
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

      {/* Completely Customizable Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-foreground">Completely Customizable</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our team of professionals will write the most effective reviews relevant to your business for you to verify / customise before being posted.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/62e11244-9579-4993-a7e1-ef1d11a3d95f.png" 
                alt="UI Screenshot showing customizable review interface"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">Take a look at how we've improved the businesses of our past clients</h3>
          </div>
          
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">Residential Elevator Installation Business</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Saw their reviews increase from 100 when they first started to over 400 now, and despite having 600 less 5 star reviews than their competitor they still rank first on google SEO searches for 'Elevator Installations' as they chose to use our service and thus received reviews from real locals rather than fake bot accounts which could potentially damage their rankings.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                  alt="Elevator installation business"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="IT firm business profile"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h4 className="text-2xl font-bold text-foreground">IT Firm</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Their reviews improved from 250 → 500+, with steady growth of 5-10 weekly with our professional plan tailored towards their businesses growth. The quantity of reviews gradually increased over time as their business profiles grew accustomed to it, and with the high rankings, their business has seen significant new double digit % customer growth since starting.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-8 italic">
              To protect the confidentiality of our clients, we aren't revealing exact names.
            </p>
            <Button 
              onClick={scrollToTrial}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Try it out today, free of charge!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing 
        plans={pricingPlans}
        onCardClick={scrollToTrial}
      />

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
            {faqData.map((faq, index) => (
              <Card key={index} className="cursor-pointer border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden" onClick={() => toggleFaq(index)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-foreground pr-4">{faq.question}</h4>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form */}
      <section id="free-trial" className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4">Get Your Free Review Trial</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to see the difference authentic reviews can make? Start with a free trial review today.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Progress Indicator */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="bg-gradient-to-b from-primary to-primary/80 rounded-2xl p-6 text-white relative">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium">Basic Details</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-sm">Review & Setup</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5" />
                      </div>
                      <span className="text-sm">Free Trial</span>
                    </div>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute left-6 top-20 bottom-20 w-px bg-white/20"></div>
                  <div className="absolute left-5 top-24 w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="absolute left-5 top-32 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute left-5 bottom-32 w-2 h-2 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-4">
                <Card className="bg-background border-2 border-border/20 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-muted/30 border-b border-border/20 px-8 py-6">
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      Basic Details
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      Tell us about your business to get started with your free trial
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-base font-medium text-foreground flex items-center gap-2">
                            <Building className="w-4 h-4 text-primary" />
                            Your Name
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your name"
                            required
                            className="text-base py-3 px-4 border-2 border-border/50 rounded-xl focus:border-primary/50 transition-colors bg-background"
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-base font-medium text-foreground flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Contact Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your@email.com"
                            required
                            className="text-base py-3 px-4 border-2 border-border/50 rounded-xl focus:border-primary/50 transition-colors bg-background"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="businessProfile" className="text-base font-medium text-foreground flex items-center gap-2">
                          <Link className="w-4 h-4 text-primary" />
                          Google Business Profile URL
                        </Label>
                        <Input
                          id="businessProfile"
                          type="url"
                          value={formData.businessProfile}
                          onChange={(e) => setFormData({...formData, businessProfile: e.target.value})}
                          placeholder="https://business.google.com/..."
                          required
                          className="text-base py-3 px-4 border-2 border-border/50 rounded-xl focus:border-primary/50 transition-colors bg-background"
                        />
                        <p className="text-sm text-muted-foreground">
                          We'll analyze your current review profile to create the perfect strategy
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          Start My Free Trial
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <p>✓ No credit card required • ✓ 24-hour response time • ✓ Free consultation included</p>
                          <p className="mt-2">Call us: <a href="tel:+13107361406" className="text-primary font-semibold hover:underline">+1 (310) 736-1406</a></p>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Made Black */}
      <Footer7 
        logo={{
          url: "#",
          src: "/lovable-uploads/6af8b769-c93d-41dc-b4c2-3f074d0db8bf.png",
          alt: "Accreditry Logo",
          title: ""
        }}
        sections={[
          {
            title: "Services",
            links: [
              { name: "Review Management", href: "#services" },
              { name: "Analytics", href: "#analytics" },
              { name: "Pricing", href: "#pricing" },
              { name: "Free Trial", href: "#free-trial" }
            ]
          },
          {
            title: "Company",
            links: [
              { name: "About Us", href: "#" },
              { name: "How It Works", href: "#services" },
              { name: "Success Stories", href: "#" },
              { name: "Contact", href: "#" }
            ]
          },
          {
            title: "Support",
            links: [
              { name: "Help Center", href: "#" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact Support", href: "tel:+13107361406" },
              { name: "Live Chat", href: "#" }
            ]
          }
        ]}
        description="Transform your online reputation with genuine reviews from real local Americans. No fake accounts, no bots - just authentic voices that drive real results."
        socialLinks={[
          { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
          { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
          { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
          { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" }
        ]}
        copyright="© 2025 Accreditry. All rights reserved. Executed by Webtic Studio"
        legalLinks={[
          { name: "Terms of Service", href: "#" },
          { name: "Privacy Policy", href: "#" }
        ]}
      />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
