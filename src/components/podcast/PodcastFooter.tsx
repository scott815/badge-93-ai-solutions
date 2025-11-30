import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/badge93-logo.webp";

const PodcastFooter = () => {
  return (
    <footer className="bg-slate-blue-dark py-12 relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <img src={logo} alt="Badge 93" className="w-14 h-14" />
            <div className="text-cream">
              <p className="text-xl font-bold font-display">BADGE 93</p>
              <p className="text-sm text-cream/70">The Veteran Growth Edge Podcast</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-cream">
            <h4 className="font-bold mb-3">Contact</h4>
            <div className="space-y-1 text-cream/70 text-sm">
              <p>scott@badge93.com</p>
              <p>623-326-0317</p>
            </div>
          </div>

          {/* Social */}
          <div className="text-cream">
            <h4 className="font-bold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/70 text-sm">
            &copy; {new Date().getFullYear()} Badge93. All rights reserved.
          </p>
          <p className="text-cream/70 text-sm">
            Built with honor. Powered by innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PodcastFooter;
