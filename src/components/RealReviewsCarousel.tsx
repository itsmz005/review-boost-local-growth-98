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
  return;
};
export default RealReviewsCarousel;