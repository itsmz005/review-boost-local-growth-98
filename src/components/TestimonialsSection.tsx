
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      business: "Chen's Auto Repair",
      location: "San Francisco, CA",
      rating: 5,
      text: "Accreditry helped us go from 45 reviews to over 200 in just 6 months. Our customer calls increased by 180% and we're now the top-rated auto shop in our area.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      business: "Rodriguez Family Dental",
      location: "Austin, TX",
      rating: 5,
      text: "The reviews look completely natural and helped us build trust with new patients. We've seen a 250% increase in new patient appointments since working with Accreditry.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      business: "Thompson Plumbing Services",
      location: "Denver, CO",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. Revenue is up 300%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      business: "Park's Korean BBQ",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Our restaurant went from unknown to fully booked weekends. The authentic reviews helped us build credibility and now we're one of the top Korean BBQ spots in LA.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Martinez",
      business: "Martinez Law Firm",
      location: "Miami, FL",
      rating: 5,
      text: "Client inquiries tripled after our review count went from 25 to 150. The reviews are indistinguishable from organic ones and helped establish our firm's reputation.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jennifer Walsh",
      business: "Walsh Real Estate Group",
      location: "Seattle, WA",
      rating: 5,
      text: "Our listing calls increased by 400% after building up our Google reviews. Accreditry's service is professional, reliable, and the results are outstanding.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">What Our Clients Say</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with authentic reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
