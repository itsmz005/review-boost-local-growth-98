"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  business: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    quote: "Accreditry helped us go from 45 reviews to over 200 in just 6 months. Our customer calls increased by 184% and we're now the top-rated auto shop in our area.", 
    name: "Alex J.", 
    business: "Auto Repair Shop Owner", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 2, 
    quote: "The reviews look completely natural and helped us build trust with new patients. We've seen a 184% increase in new patient appointments since working with Accreditry.", 
    name: "Maria G.", 
    business: "Dental Practice Owner", 
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 3, 
    quote: "I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. Traffic is up 184%.", 
    name: "Sam L.", 
    business: "Plumbing Service Owner", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 4, 
    quote: "Our restaurant went from unknown to fully booked weekends. The authentic reviews helped us build credibility and now we're one of the top Korean BBQ spots in LA.", 
    name: "Chris B.", 
    business: "Restaurant Owner", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 5, 
    quote: "Client inquiries tripled after our review count went from 25 to 150. The reviews are indistinguishable from organic ones and helped establish our firm's reputation.", 
    name: "Pat S.", 
    business: "Law Firm Partner", 
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 6, 
    quote: "Our listing calls increased by 184% after building up our Google reviews. Accreditry's service is professional, reliable, and the results are outstanding.", 
    name: "Jordan W.", 
    business: "Real Estate Agent", 
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 7, 
    quote: "We went from 60 reviews to 300+ in under a year. Our appointment bookings have increased dramatically and we're now the #1 auto service in our city.", 
    name: "Taylor D.", 
    business: "Auto Service Manager", 
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 8, 
    quote: "The steady flow of authentic reviews has helped us become the most trusted vet clinic in the area. New pet owners constantly mention our reviews when booking.", 
    name: "Casey M.", 
    business: "Veterinary Clinic Owner", 
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 9, 
    quote: "From 15 reviews to 120 in 8 months! Our bakery is now the go-to spot for custom cakes. Weekend orders are booked weeks in advance.", 
    name: "Riley K.", 
    business: "Bakery Owner", 
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 10, 
    quote: "Our fitness studio memberships doubled after improving our online reputation. The reviews showcase our community perfectly and attract serious fitness enthusiasts.", 
    name: "Morgan R.", 
    business: "Fitness Studio Owner", 
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 11, 
    quote: "As a family salon, trust is everything. Going from 40 to 200+ reviews helped us become the neighborhood's favorite. Walk-ins increased by 250%.", 
    name: "Avery H.", 
    business: "Hair Salon Owner", 
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face" 
  },
  { 
    id: 12, 
    quote: "Our cleaning service bookings skyrocketed after building up authentic reviews. Clients specifically mention our 5-star rating when calling for estimates.", 
    name: "Quinn P.", 
    business: "Cleaning Service Owner", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
  }
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);
      
      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex >= maxIndex) {
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex <= 0) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + direction);
        }
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, windowWidth, direction]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext();
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <div className="px-4 py-8 sm:py-16 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mt-3 sm:mt-4 px-4">
            What Our Clients Say
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-2 rounded-full ${
                canGoPrev
                  ? 'bg-background shadow-md hover:bg-muted text-primary'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-2 rounded-full ${
                canGoNext
                  ? 'bg-background shadow-md hover:bg-muted text-primary'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 3 ? 'md:w-1/3' :
                    visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                  } p-2`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                  style={{ cursor: 'grab' }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full bg-card border border-border shadow-lg"
                    whileHover={{
                      boxShadow: "0 10px 15px -3px rgba(24, 95, 53, 0.1), 0 4px 6px -2px rgba(24, 95, 53, 0.05)"
                    }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-10">
                      <Quote size={windowWidth < 640 ? 40 : 60} className="text-primary" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-sm sm:text-base text-muted-foreground font-medium mb-4 sm:mb-6 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      <div className="mt-auto pt-3 sm:pt-4 border-t border-border">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              width={48}
                              height={48}
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-background shadow-sm"
                            />
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-primary/20"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold text-sm sm:text-base text-foreground">{testimonial.name}</h4>
                            <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.business}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 sm:mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative mx-1 focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                  animate={{
                    scale: index === currentIndex ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatDelay: 1
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{
                      scale: [1, 1.8],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
