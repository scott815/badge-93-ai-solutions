import { Shield, Target, Award } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Shield,
      title: "Service First",
      description: "Built by veterans, for veterans. We understand the unique challenges and opportunities facing veteran-owned businesses."
    },
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "Military precision meets cutting-edge technology. We deliver AI solutions with unwavering attention to detail."
    },
    {
      icon: Award,
      title: "Mission-Driven",
      description: "Every project is a mission. We're committed to your success with the same dedication we brought to our service."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-blue font-display mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Badge 93 exists to bridge the gap between military excellence and modern technology. 
            We provide veteran-owned businesses with the AI tools they need to compete and thrive in today's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-bronze/20"
              >
                <div className="w-14 h-14 bg-rust-red/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-rust-red" />
                </div>
                <h3 className="text-xl font-bold text-slate-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
