import Hero from "@/components/Hero";
import RealReviewsCarousel from "@/components/RealReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero />

          {/* Testimonials Section - Static 3 Reviews */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6 text-foreground">What Our Clients Say</h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join hundreds of businesses that have transformed their online presence with authentic reviews
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8">
                  <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
                    "
                  </div>

                  <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-pretty text-base text-muted-foreground">
                      Accreditry helped us go from 45 reviews to over 200 in just 6 months. Our customer calls increased by 184% and we're now the top-rated auto shop in our area.
                    </p>

                    <div className="flex items-center gap-4 justify-start">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                            alt="Michael C." 
                            className="aspect-square h-full w-full"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="font-semibold text-foreground">Michael C.</h3>
                          <p className="text-sm text-muted-foreground">
                            Owner @ C***'s Auto Repair
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8">
                  <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
                    "
                  </div>

                  <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-pretty text-base text-muted-foreground">
                      The reviews look completely natural and helped us build trust with new patients. We've seen a 184% increase in new patient appointments since working with Accreditry.
                    </p>

                    <div className="flex items-center gap-4 justify-start">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face" 
                            alt="Sarah R." 
                            className="aspect-square h-full w-full"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="font-semibold text-foreground">Sarah R.</h3>
                          <p className="text-sm text-muted-foreground">
                            Dentist @ R******* Family Dental
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8">
                  <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
                    "
                  </div>

                  <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-pretty text-base text-muted-foreground">
                      I was skeptical at first, but the results speak for themselves. From 30 reviews to 180 reviews, and our Google ranking shot up to #1 for 'plumber Denver'. Traffic is up 184%.
                    </p>

                    <div className="flex items-center gap-4 justify-start">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                            alt="David T." 
                            className="aspect-square h-full w-full"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="font-semibold text-foreground">David T.</h3>
                          <p className="text-sm text-muted-foreground">
                            Owner @ T******* Plumbing Services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

      <RealReviewsCarousel />

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">How It Works</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We make it easy to get more reviews and improve your online reputation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-foreground">Sign Up</h4>
              <p className="text-muted-foreground">Create an account and tell us about your business.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-foreground">Invite Customers</h4>
              <p className="text-muted-foreground">Send review requests via SMS, email, or QR code.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-foreground">Get Reviews</h4>
              <p className="text-muted-foreground">Customers leave reviews, boosting your online presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-foreground">Pricing</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent pricing plans to fit your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-background rounded-3xl shadow-md p-6 border-2 border-border/50 hover:border-primary/20 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-foreground">Basic</h4>
              <div className="text-5xl font-bold mb-4 text-foreground">$29<span className="text-sm text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground mb-6">
                Essential features to get started with online reputation management.
              </p>
              <ul className="mb-6">
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Review Requests</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Review Management</li>
                <li className="flex items-center gap-2 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Competitor Analysis</li>
                <li className="flex items-center gap-2 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Reporting & Analytics</li>
              </ul>
              <Button variant="secondary" className="w-full">Get Started</Button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-background rounded-3xl shadow-md p-6 border-2 border-primary/20 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-foreground">Pro</h4>
              <div className="text-5xl font-bold mb-4 text-foreground">$79<span className="text-sm text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground mb-6">
                Advanced features for growing businesses that need more control.
              </p>
              <ul className="mb-6">
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>All Basic Features</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Competitor Analysis</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Reporting & Analytics</li>
                <li className="flex items-center gap-2 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Custom Branding</li>
              </ul>
              <Button variant="secondary" className="w-full">Get Started</Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-background rounded-3xl shadow-md p-6 border-2 border-border/50 hover:border-primary/20 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-foreground">Enterprise</h4>
              <div className="text-5xl font-bold mb-4 text-foreground">Contact Us</div>
              <p className="text-muted-foreground mb-6">
                Custom solutions for large organizations with unique needs.
              </p>
              <ul className="mb-6">
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>All Pro Features</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Dedicated Support</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Custom Integrations</li>
                <li className="flex items-center gap-2 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>Priority Support</li>
              </ul>
              <Button variant="secondary" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of businesses that have boosted their online presence with authentic reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Started for Free
            </Button>
            <p className="text-primary-foreground/90">
              Prefer to talk? Call our agent at (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Accreditry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
