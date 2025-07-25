import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Users, Award, Shield, Clock, Target, ArrowRight, Play, Pause } from 'lucide-react';
import TestimonialSlider from '@/components/ui/testimonial-slider';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import PricingSection from '@/components/PricingSection';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import ChatWidget from '@/components/ChatWidget';
import RealResultsSection from '@/components/RealResultsSection';
import { Footer7 } from '@/components/ui/footer-7';

const Index = () => {
  const [isTrialActive, setIsTrialActive] = useState(false);
  const [trialDays, setTrialDays] = useState(14);

  const toggleTrial = () => {
    setIsTrialActive(!isTrialActive);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl">
            Accreditry
          </a>
          <nav className="flex items-center space-x-4">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary shadow-sm border-none">
              #1 Review Management Platform
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Dominate Local SEO with Authentic Reviews
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Accreditry helps local businesses build trust and credibility by generating authentic reviews from real customers. Improve your online reputation and attract more clients today!
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <AnalyticsDashboard />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Authentic Review Generation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate genuine reviews from your satisfied customers, boosting your online reputation and credibility.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Reputation Monitoring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stay informed about your online reputation with real-time monitoring and alerts for new reviews and mentions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>SEO Optimization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Improve your local search ranking with optimized review content and increased online visibility.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span>Customer Engagement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Engage with your customers by responding to reviews and addressing feedback, fostering loyalty and trust.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Competitive Advantage</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stand out from the competition with a stellar online reputation and a flood of positive reviews.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-border/50 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-500" />
                <span>Review Monitoring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Protect your online reputation by identifying and addressing negative reviews promptly.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Choose Accreditry?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a comprehensive solution for managing your online reputation and generating authentic reviews. Here's why businesses trust us:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Proven track record of success</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Dedicated support team</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Customized solutions for your business needs</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Affordable pricing plans</span>
              </li>
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <Card className="shadow-2xl border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  See the Difference
                </CardTitle>
                <CardDescription>
                  Start your free trial today!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{trialDays} Days Free Trial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-purple-500" />
                  <span>No Credit Card Required</span>
                </div>
                <Button onClick={toggleTrial} className="w-full">
                  {isTrialActive ? (
                    <>
                      Trial Active <Pause className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Activate Trial <Play className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Pricing Section */}
      <PricingSection />

      {/* Real Results Section */}
      <RealResultsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Contact Us</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions? Ready to get started? Contact us today to learn more about how Accreditry can help your business thrive.
            </p>
          </div>
          <EnhancedContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer7 />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
