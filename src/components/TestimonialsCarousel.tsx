
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
      testimonial: "I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. Traffic is up 184%."
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
    },
    {
      name: "Carlos S.",
      role: "Owner",
      company: "S****** Construction",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      testimonial: "Construction is all about trust, and these reviews have given us the credibility we needed. Our project inquiries have doubled since we started."
    },
    {
      name: "Rachel D.",
      role: "Spa Owner",
      company: "D****** Day Spa",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      testimonial: "Our spa bookings have never been higher. The natural-looking reviews helped us stand out in a competitive market and attract quality clients."
    },
    {
      name: "James L.",
      role: "Contractor",
      company: "L***** Home Improvements",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face",
      testimonial: "From 40 reviews to 220 in 8 months. Homeowners now call us directly after seeing our reviews. Best investment we've made for our business."
    },
    {
      name: "Michelle B.",
      role: "Accountant",
      company: "B****** Tax Services",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face",
      testimonial: "Tax season bookings are up 200% thanks to our improved online reputation. Clients trust us more because of the authentic reviews we've received."
    }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (current + next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">What Our Clients Say</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with authentic reviews
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="flex gap-8 transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, i) => (
              <div
                key={`${testimonial.index}-${currentIndex}`}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 transition-all duration-500 ${
                  i === 0 ? 'opacity-100 scale-100' : 
                  i === 1 ? 'opacity-80 scale-95' : 
                  'opacity-60 scale-90'
                }`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
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
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-2">
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
    </section>
  );
};

export default TestimonialsCarousel;
