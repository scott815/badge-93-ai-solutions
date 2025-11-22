import { CheckCircle2 } from "lucide-react";

const WhyVeterans = () => {
  const reasons = [
    "Disciplined approach to project management and execution",
    "Strong leadership and decision-making under pressure",
    "Proven ability to adapt and overcome challenges",
    "Commitment to mission success and excellence",
    "Integrity and trustworthiness in every engagement",
    "Team-oriented mindset with clear communication"
  ];

  return (
    <section id="why-veterans" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Why Veteran-Owned?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Veterans bring unique strengths to business that translate directly into superior AI solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-lg backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary-foreground/90 font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
            <p className="text-primary-foreground/90 text-center italic text-lg">
              "Veterans don't just complete missions—they exceed expectations. That same dedication powers every AI solution we deliver."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVeterans;
