
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started",
      reviews: "5-8 reviews per month",
      features: [
        "5-8 authentic reviews monthly",
        "Real local reviewers",
        "Basic analytics dashboard",
        "Email support",
        "30-day review warranty"
      ],
      cta: "Start Growing"
    },
    {
      name: "Professional", 
      icon: Zap,
      price: "$599",
      period: "/month",
      description: "Most popular for growing businesses",
      reviews: "12-15 reviews per month",
      features: [
        "12-15 authentic reviews monthly",
        "Priority reviewer selection",
        "Advanced analytics & reporting",
        "Phone + email support",
        "60-day review warranty",
        "Custom review scheduling",
        "Competitor analysis"
      ],
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "For established businesses with high volume needs",
      reviews: "20+ reviews per month",
      features: [
        "20+ authentic reviews monthly",
        "Dedicated account manager",
        "White-label reporting",
        "24/7 priority support",
        "90-day review warranty",
        "Multi-location support",
        "API access",
        "Custom integrations"
      ],
      cta: "Contact Sales"
    }
  ];

  const scrollToTrial = () => {
    const trialElement = document.getElementById('free-trial');
    trialElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-ibrand mb-8 text-foreground">Simple, Transparent Pricing</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your business size. All plans include authentic reviews from real local Americans.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative group transition-all duration-500 rounded-3xl overflow-hidden min-h-[600px] flex flex-col border-2 border-border/30 hover:border-primary/30 hover:shadow-xl hover:scale-102">
              
              <CardHeader className="text-center pb-6 pt-12 px-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 bg-muted/50">
                  <plan.icon className="w-10 h-10 text-muted-foreground" />
                </div>
                
                <CardTitle className="text-3xl font-ibrand text-foreground mb-3">{plan.name}</CardTitle>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                </div>
                
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-muted/70 text-muted-foreground">
                  {plan.reviews}
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToTrial}
                  className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-foreground hover:bg-foreground/90 text-background"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-lg">
            All plans include our 30-day money-back guarantee
          </p>
          <p className="text-muted-foreground">
            Need a custom plan? <Button variant="link" className="p-0 text-primary font-semibold">Contact our sales team</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
