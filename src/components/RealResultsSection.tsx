
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowRight } from 'lucide-react';

const RealResultsSection = () => {
  const scrollToTrial = () => {
    const trialElement = document.getElementById('free-trial');
    trialElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const results = [
    {
      title: "From 100 to 400+ Reviews",
      business: "Residential Elevator Installation Business",
      description: "A residential elevator installation business saw their reviews increase from 100 when they first started to over 400 now, and despite having 600 less 5 star reviews than their competitor they still rank first on Google SEO searches for 'Elevator Installations' because they chose to use our service and thus received reviews from real locals rather than fake bot accounts.",
      highlight: "300%",
      metric: "#1",
      subMetric: "Google Ranking",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      title: "Steady Growth Drives New Business", 
      business: "IT Services Firm",
      description: "An IT services firm improved from 250 to 500+ reviews with steady growth of 5-10 weekly through our professional plan. The gradual increase allowed their business profile to grow naturally, resulting in significant double-digit customer growth.",
      highlight: "5-10",
      metric: "17.6K",
      subMetric: "Monthly Views",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Local Restaurant Success",
      business: "Family Restaurant Chain",
      description: "A local restaurant chain saw their reviews grow from 180 to 450+ across 3 locations. The authentic local reviews helped them outrank established competitors and increase foot traffic by 35% within 6 months of starting our service.",
      highlight: "35%",
      metric: "450+",
      subMetric: "Total Reviews",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">Real Results from Real Businesses</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours achieve remarkable growth through authentic reviews
          </p>
        </div>
        
        <div className="space-y-20">
          {results.map((result, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Success Story
                </div>
                
                <h4 className="text-3xl font-bold text-foreground">{result.title}</h4>
                
                <div className="text-lg font-semibold text-muted-foreground mb-4">
                  {result.business}
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
                
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{result.highlight}</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.subMetric}</div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={result.image}
                        alt={`${result.business} success story`}
                        className="w-full h-[350px] object-cover"
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
                              <div className="text-lg font-bold text-primary">+{result.highlight}</div>
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
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
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
  );
};

export default RealResultsSection;
