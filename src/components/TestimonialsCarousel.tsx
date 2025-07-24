
import React, { useEffect, useState } from 'react';
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      company: "Auto Repair Shop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Michael C.",
      role: "Owner, Auto Repair",
      review: "Accreditry helped us go from 45 reviews to over 200 in just 6 months. Our customer calls increased by 180% and we're now the top-rated auto shop in our area."
    },
    {
      company: "Dental Practice", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face",
      name: "Sarah R.",
      role: "Dentist, Family Dental",
      review: "The reviews look completely natural and helped us build trust with new patients. We've seen a 250% increase in new patient appointments since working with Accreditry."
    },
    {
      company: "Plumbing Services",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", 
      name: "David T.",
      role: "Owner, Plumbing Services",
      review: "I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. Revenue is up 300%."
    },
    {
      company: "Restaurant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Lisa P.", 
      role: "Owner, Korean BBQ",
      review: "Our restaurant went from unknown to fully booked weekends. The authentic reviews helped us build credibility and now we're one of the top Korean BBQ spots in LA."
    },
    {
      company: "Law Firm",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      name: "Robert M.",
      role: "Attorney, Law Firm", 
      review: "Client inquiries tripled after our review count went from 25 to 150. The reviews are indistinguishable from organic ones and helped establish our firm's reputation."
    },
    {
      company: "Real Estate",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      name: "Jennifer W.",
      role: "Realtor, Real Estate Group",
      review: "Our listing calls increased by 400% after building up our Google reviews. Accreditry's service is professional, reliable, and the results are outstanding."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-foreground">What Our Clients Say</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with authentic reviews
          </p>
        </div>
        
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
