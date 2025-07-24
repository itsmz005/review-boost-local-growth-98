
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Long line of customers waiting outside a local business"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Transform Your Business with
          <span className="text-primary block mt-2">Authentic Reviews</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Join thousands of local businesses that have boosted their online presence and increased revenue by 300% with our proven review generation system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started for Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Trusted by 10,000+ businesses</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">★★★★★</div>
            <div className="text-sm text-muted-foreground">4.9/5 rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
