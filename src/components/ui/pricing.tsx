
"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  icon: React.ComponentType<any>;
  price: string;
  period: string;
  features: string[];
  description: string;
  reviews: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  onCardClick?: () => void;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that fits your business size. All plans include authentic reviews from real local Americans.",
  onCardClick,
}: PricingProps) {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    } else {
      const trialElement = document.getElementById('free-trial');
      trialElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-ibrand mb-8 text-foreground">{title}</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              onClick={handleCardClick}
              className={cn(
                "relative group transition-all duration-500 rounded-3xl overflow-hidden min-h-[600px] flex flex-col border-2 cursor-pointer hover:shadow-xl hover:scale-105",
                plan.isPopular 
                  ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10" 
                  : "border-border/30 bg-background hover:border-primary/30"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary py-2 px-4 rounded-bl-2xl rounded-tr-3xl flex items-center">
                  <Star className="text-primary-foreground h-4 w-4 fill-current" />
                  <span className="text-primary-foreground ml-1 font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center pb-6 pt-12 px-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 bg-muted/50">
                  <plan.icon className="w-10 h-10 text-muted-foreground" />
                </div>
                
                <h4 className="text-3xl font-ibrand text-foreground mb-3">{plan.name}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                </div>
                
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-muted/70 text-muted-foreground">
                  {plan.reviews}
                </div>
              </div>
              
              <div className="px-8 pb-8 flex-1 flex flex-col">
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
                
                <div className={cn(
                  "w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center",
                  plan.isPopular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-foreground hover:bg-foreground/90 text-background"
                )}>
                  Get Started
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-lg">
            All plans include our 30-day money-back guarantee
          </p>
          <p className="text-muted-foreground">
            Need a custom plan? <span className="text-primary font-semibold cursor-pointer" onClick={handleCardClick}>Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
}
