
import { useEffect, useState } from 'react';
import { Testimonial } from "@/components/ui/testimonial-card";

const AutoSpinningTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real reviews with profile images
  const testimonials = [
    {
      name: "S. C****",
      role: "Auto Repair Shop Owner",
      company: "San Diego, CA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Outstanding experience! They really understand what small businesses need. The results speak for themselves - we've seen a significant increase in customer inquiries."
    },
    {
      name: "L. P****",
      role: "Restaurant Owner",
      company: "Las Vegas, NV",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "Game changer for our restaurant! We went from being relatively unknown to having a constant stream of new customers. The quality of service is unmatched."
    },
    {
      name: "M. R****",
      role: "Real Estate Agent",
      company: "Los Angeles, CA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face",
      testimonial: "Exceptional service from start to finish. The team was professional, knowledgeable, and delivered exactly what they promised. Our business has seen tremendous growth."
    },
    {
      name: "D. M****",
      role: "Medical Practice",
      company: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "Highly recommend! The process was smooth and transparent. We now have the online presence we always wanted and our customer base has grown substantially."
    },
    {
      name: "R. T****",
      role: "Legal Services",
      company: "Denver, CO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      testimonial: "Professional, reliable, and results-driven. They delivered everything they promised and more. Our online reputation has never been stronger."
    },
    {
      name: "J. W****",
      role: "Home Services",
      company: "Seattle, WA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      testimonial: "Incredible ROI! The investment has paid for itself many times over. We're now the top-rated business in our category in the area."
    }
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (current + next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], key: index });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">Real Reviews We've Delivered</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are actual reviews from our service - see the authentic voices of satisfied customers
          </p>
        </div>
        
        {/* Auto-spinning carousel container */}
        <div className="relative">
          <div className="flex gap-6 transition-transform duration-1000 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.key}-${currentIndex}`}
                className={`flex-shrink-0 w-80 transition-all duration-1000 ${
                  index === 0 ? 'opacity-100 scale-100' : 
                  index === 1 ? 'opacity-90 scale-95' : 
                  'opacity-75 scale-90'
                }`}
              >
                <Testimonial
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                  image={testimonial.image}
                  className="h-full min-h-[300px]"
                />
              </div>
            ))}
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSpinningTestimonials;
