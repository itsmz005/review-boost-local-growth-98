
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, ArrowRight, Phone, Mail, MessageSquare, Globe } from 'lucide-react';

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2 text-base font-medium mb-6">
          🎯 Ready to Transform Your Business?
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Get Your First <span className="text-primary">Review is Free</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Join hundreds of businesses that have transformed their online presence. 
          No contracts, no hidden fees - just results you can see.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Form Section */}
        <Card className="border-2 border-primary/20 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 text-center pb-8">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">Start Your Free Trial</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Get 10 authentic reviews from real local customers - absolutely free
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@business.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-sm font-medium text-foreground">Business Name *</Label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="Your Business Name"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium text-foreground">Business Profile Link</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://www.google.com/maps/place/your-business-name"
                  value={formData.website}
                  onChange={handleChange}
                  className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200"
                />
                <p className="text-sm text-muted-foreground">
                  Copy your Google Maps business profile link here
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Tell Us About Your Business</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What services do you offer? What makes your business special?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-2 border-border/50 focus:border-primary/50 rounded-xl py-3 px-4 text-base transition-all duration-200 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get My Free 10 Reviews Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Call our agent at (310) 736-1406
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+13107361406" className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">(310) 736-1406</span>
                  </a>
                  <a href="mailto:support@accreditry.com" className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">support@accreditry.com</span>
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Our Free Trial?</h3>
            <p className="text-lg text-muted-foreground">
              Experience the difference authentic reviews make - with zero risk and zero commitment.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">100% Authentic Reviews</h4>
                    <p className="text-muted-foreground">
                      Every review comes from real local customers with established Google accounts and review histories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Guaranteed Results</h4>
                    <p className="text-muted-foreground">
                      98% of our clients see increased customer inquiries within the first month of service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safe & Compliant</h4>
                    <p className="text-muted-foreground">
                      Our method is completely safe and follows all Google guidelines. No risk to your business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">
                      Our team is here to help you every step of the way. Real humans, real support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-sm text-muted-foreground">
              "The free trial convinced me this was the real deal. Now we're the #1 rated business in our category!"
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-medium">
              - Sarah M., Dental Practice Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
