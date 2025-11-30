import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const PodcastCTA = () => {
  return (
    <section id="apply" className="py-24 bg-slate-blue-dark relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-cream font-display mb-4">
            Join the Conversation
          </h2>
          <p className="text-2xl text-bronze font-display mb-6">
            Expand Your Influence
          </p>

          <p className="text-lg text-cream/80 mb-8">
            We are actively booking guests who are ready to share their insights and amplify their
            brand's commitment to the veteran community.
          </p>

          <p className="text-xl text-cream mb-10 font-semibold">
            Ready to share your story or your alliance?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-rust-red hover:bg-rust-red-dark text-cream shadow-glow text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="#contact">
                Apply to Be a Guest <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream bg-cream text-slate-blue-dark hover:bg-cream-dark text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="mailto:scott@badge93.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Scott Thompson
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastCTA;
