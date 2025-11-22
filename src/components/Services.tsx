import { Brain, Cog, TrendingUp, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "We help you identify AI opportunities and develop a roadmap tailored to your business objectives."
    },
    {
      icon: Cog,
      title: "Custom AI Development",
      description: "Build bespoke AI solutions that integrate seamlessly with your existing systems and workflows."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage machine learning to forecast trends, optimize operations, and make data-driven decisions."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline operations with intelligent automation solutions."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization."
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbots",
      description: "Enhance customer engagement with intelligent conversational AI that understands and responds naturally."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI services designed to give your veteran-owned business a competitive edge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
