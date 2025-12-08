import { Target, UserCheck, BarChart3, MessageCircle, ListChecks } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AutomationFoundation = () => {
  const deliverables = [
    {
      icon: Target,
      title: "Lead Routing Automation",
      description: "Never miss a prospect again. Automatic lead capture, qualification, and assignment to your team."
    },
    {
      icon: UserCheck,
      title: "Client Onboarding Workflow",
      description: "Transform chaotic first impressions into seamless, professional experiences that build trust from day one."
    },
    {
      icon: BarChart3,
      title: "Automated Reporting Dashboard",
      description: "Real-time visibility into your business metrics without manual data entry or spreadsheet hell."
    },
    {
      icon: MessageCircle,
      title: "Communication Automation",
      description: "Keep clients informed and engaged without manual follow-up. Automated touchpoints that feel personal and timely."
    },
    {
      icon: ListChecks,
      title: "Task & Project Management Automation",
      description: "Ensure nothing falls through the cracks. Automated workflow management that keeps your team aligned and accountable."
    }
  ];

  return (
    <section id="automation-foundation" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-blue font-display mb-6">
            The 90-Day Automation Foundation: What We Build
          </h2>
          <p className="text-lg text-muted-foreground">
            Five core workflows that transform operational chaos into predictable, scalable growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-bronze/20 hover:border-rust-red/50 bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-rust-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rust-red/20 transition-colors">
                    <Icon className="h-6 w-6 text-rust-red" />
                  </div>
                  <CardTitle className="text-xl text-slate-blue">{deliverable.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {deliverable.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-rust-red hover:bg-rust-red-dark text-cream shadow-glow text-lg px-8 py-6 transition-all hover:scale-105 font-semibold"
            asChild
          >
            <a href="#contact-form">
              Book Your Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationFoundation;
