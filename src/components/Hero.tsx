import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/badge93-logo.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 z-[1] texture-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img
              src={logo}
              alt="Badge 93 AI Agency"
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-display mb-4 animate-fade-in">
            Mission-Driven AI Innovation
          </h1>

          <p className="text-lg sm:text-xl text-cream/70 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Empowering veteran-owned businesses with cutting-edge artificial intelligence solutions.
            Built on the values of service, precision, and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-rust-red hover:bg-rust-red-dark text-cream shadow-glow text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-blue-dark bg-cream text-slate-blue-dark hover:bg-cream-dark text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="#mission">
                Learn More
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

export default Hero;
