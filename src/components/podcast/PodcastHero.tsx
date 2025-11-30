import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/badge93-logo.webp";

const PodcastHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 z-[1] texture-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img
              src={logo}
              alt="Badge 93"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-display mb-4 animate-fade-in">
            The Veteran Growth Edge
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-bronze mb-6 font-display font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Insights from the Front Lines of Business
          </p>

          <p className="text-lg sm:text-xl text-cream/80 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            The podcast dedicated to showcasing the resilience, strategy, and community driving veteran-owned businesses and their allies
          </p>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-rust-red hover:bg-rust-red-dark text-cream shadow-glow text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="#apply">
                Apply to Be a Guest <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
