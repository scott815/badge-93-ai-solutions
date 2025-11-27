import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-semibold text-sm tracking-wider">
                AI SOLUTIONS FOR VETERANS
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            BADGE 93
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Mission-Driven AI Innovation
          </p>
          
          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Empowering veteran-owned businesses with cutting-edge artificial intelligence solutions. 
            Built on the values of service, precision, and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 bg-primary-foreground text-accent hover:bg-primary-foreground/90 text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
