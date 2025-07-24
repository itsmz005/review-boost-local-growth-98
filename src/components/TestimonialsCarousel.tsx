
import { useState, useEffect } from 'react';
import { Testimonial } from "@/components/ui/testimonial-card";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael C.",
      role: "Owner",
      company: "C***'s Auto Repair",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial: "Accreditry helped us go from 45 reviews to over 200 in just 6 months. Our customer calls increased by 184% and we're now the top-rated auto shop in our area."
    },
    {
      name: "Sarah R.",
      role: "Dentist",
      company: "R******* Family Dental",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face",
      testimonial: "The reviews look completely natural and helped us build trust with new patients. We've seen a 184% increase in new patient appointments since working with Accreditry."
    },
    {
      name: "David T.",
      role: "Owner",
      company: "T******* Plumbing Services",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial: "I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. More traffic is up 184%."
    },
    {
      name: "Lisa P.",
      role: "Owner",
      company: "P***'s Korean BBQ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial: "Our restaurant went from unknown to fully booked weekends. The authentic reviews helped us build credibility and now we're one of the top Korean BBQ spots in LA."
    },
    {
      name: "Robert M.",
      role: "Attorney",
      company: "M****** Law Firm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      testimonial: "Client inquiries tripled after our review count went from 25 to 150. The reviews are indistinguishable from organic ones and helped establish our firm's reputation."
    },
    {
      name: "Jennifer W.",
      role: "Realtor",
      company: "W**** Real Estate Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      testimonial: "Our listing calls increased by 184% after building up our Google reviews. Accreditry's service is professional, reliable, and the results are outstanding."
    },
    {
      name: "Mark J.",
      role: "Manager",
      company: "J****'s Auto Center",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      testimonial: "We went from 60 reviews to 300+ in under a year. Our appointment bookings have increased dramatically and we're now the #1 auto service in our city."
    },
    {
      name: "Amanda K.",
      role: "Veterinarian",
      company: "K****** Pet Clinic",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      testimonial: "The steady flow of authentic reviews has helped us become the most trusted vet clinic in the area. New pet owners constantly mention our reviews when booking."
    }
  ];

  // Auto-scroll every 3 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get multiple visible testimonials for overlapping effect
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], slideIndex: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-muted/30 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">What Our Clients Say</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with authentic reviews
          </p>
        </div>
        
        <div className="relative h-[400px] mx-auto max-w-7xl">
          {/* Auto-scrolling testimonials with smooth animations */}
          <div className="absolute inset-0 flex items-center justify-center">
            {getVisibleTestimonials().map((testimonial, i) => {
              const offset = i * 280; // Spacing between cards
              const opacity = i === 0 ? 1 : i === 1 ? 0.8 : i === 2 ? 0.6 : 0.4;
              const scale = i === 0 ? 1 : i === 1 ? 0.95 : i === 2 ? 0.9 : 0.85;
              const zIndex = 10 - i;
              
              return (
                <div
                  key={`${testimonial.slideIndex}-${currentIndex}`}
                  className="absolute transition-all duration-1000 ease-in-out transform"
                  style={{
                    transform: `translateX(${offset}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    width: '350px',
                    animation: 'smoothSlide 1s ease-in-out'
                  }}
                >
                  <Testimonial
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              );
            })}
          </div>
          
          {/* Infinite scroll effect - duplicate testimonials on the right */}
          <div className="absolute inset-0 flex items-center justify-center">
            {getVisibleTestimonials().map((testimonial, i) => {
              const offset = (i + 4) * 280; // Position after main set
              const opacity = 0.3;
              const scale = 0.8;
              
              return (
                <div
                  key={`duplicate-${testimonial.slideIndex}-${currentIndex}`}
                  className="absolute transition-all duration-1000 ease-in-out transform"
                  style={{
                    transform: `translateX(${offset}px) scale(${scale})`,
                    opacity,
                    zIndex: 1,
                    width: '350px',
                    animation: 'smoothSlide 1s ease-in-out'
                  }}
                >
                  <Testimonial
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    className="h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Add custom CSS for smooth scrolling animation */}
      <style jsx>{`
        @keyframes smoothSlide {
          0% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-20px) scale(0.98);
            opacity: 0.9;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
