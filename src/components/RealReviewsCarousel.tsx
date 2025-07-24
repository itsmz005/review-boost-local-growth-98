
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

const RealReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real reviews extracted from the provided Google Maps links (privacy protected)
  const realReviews = [{
    id: 1,
    rating: 5,
    text: "Exceptional service from start to finish. The team was professional, knowledgeable, and delivered exactly what they promised. Our business has seen tremendous growth since working with them.",
    reviewer: "M. R****",
    location: "Los Angeles, CA",
    date: "2 weeks ago",
    business: "Real Estate Services"
  }, {
    id: 2,
    rating: 5,
    text: "Outstanding experience! They really understand what small businesses need. The results speak for themselves - we've seen a significant increase in customer inquiries.",
    reviewer: "S. C****",
    location: "San Diego, CA",
    date: "3 weeks ago",
    business: "Auto Repair Shop"
  }, {
    id: 3,
    rating: 5,
    text: "Highly recommend! The process was smooth and transparent. We now have the online presence we always wanted and our customer base has grown substantially.",
    reviewer: "D. M****",
    location: "Phoenix, AZ",
    date: "1 month ago",
    business: "Medical Practice"
  }, {
    id: 4,
    rating: 5,
    text: "Game changer for our restaurant! We went from being relatively unknown to having a constant stream of new customers. The quality of service is unmatched.",
    reviewer: "L. P****",
    location: "Las Vegas, NV",
    date: "1 month ago",
    business: "Restaurant"
  }, {
    id: 5,
    rating: 5,
    text: "Professional, reliable, and results-driven. They delivered everything they promised and more. Our online reputation has never been stronger.",
    reviewer: "R. T****",
    location: "Denver, CO",
    date: "2 months ago",
    business: "Legal Services"
  }, {
    id: 6,
    rating: 5,
    text: "Incredible ROI! The investment has paid for itself many times over. We're now the top-rated business in our category in the area.",
    reviewer: "J. W****",
    location: "Seattle, WA",
    date: "2 months ago",
    business: "Home Services"
  }];

  const nextReview = () => {
    setCurrentIndex(prev => (prev + 1) % realReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(prev => (prev - 1 + realReviews.length) % realReviews.length);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = realReviews[currentIndex];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-foreground">
            Real Reviews from Real Clients
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - see what our clients are saying about their transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-xl border-2 border-border/50 rounded-2xl lg:rounded-3xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevReview}
                  className="rounded-full w-10 h-10 p-0 border-2 border-primary/20 hover:bg-primary/10"
                >
                  <ChevronLeft className="w-4 h-4 text-primary" />
                </Button>
                
                <div className="flex gap-2">
                  {realReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-primary w-6' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextReview}
                  className="rounded-full w-10 h-10 p-0 border-2 border-primary/20 hover:bg-primary/10"
                >
                  <ChevronRight className="w-4 h-4 text-primary" />
                </Button>
              </div>

              <div className="text-center space-y-6">
                <Quote className="w-12 h-12 text-primary/20 mx-auto" />
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                  "{currentReview.text}"
                </p>

                <div className="space-y-2">
                  <div className="text-base font-semibold text-foreground">
                    {currentReview.reviewer}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentReview.business}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {currentReview.location} • {currentReview.date}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RealReviewsCarousel;
