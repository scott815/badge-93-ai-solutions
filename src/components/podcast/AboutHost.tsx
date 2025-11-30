import { User, Shield, Code } from "lucide-react";

const AboutHost = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-blue font-display mb-6">
              From Service to Scale
            </h2>
            <p className="text-xl text-bronze font-display">
              Your Host, Scott Thompson
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-lg shadow-md border border-bronze/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-rust-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-16 w-16 text-rust-red" />
              </div>
              
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 21 years of service as a military veteran and two decades in IT and web development, 
                  I've seen firsthand how operational excellence and strategic tech implementation drive success. 
                  I'm now leveraging this expertise to build Badge93 and launch this podcast as a platform for the 
                  next generation of veteran business leaders.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-bronze/20">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-rust-red" />
                <div>
                  <p className="font-bold text-slate-blue">21+ Years</p>
                  <p className="text-sm text-muted-foreground">Military Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-8 w-8 text-rust-red" />
                <div>
                  <p className="font-bold text-slate-blue">20+ Years</p>
                  <p className="text-sm text-muted-foreground">IT & Development</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-8 w-8 text-rust-red" />
                <div>
                  <p className="font-bold text-slate-blue">Badge93</p>
                  <p className="text-sm text-muted-foreground">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHost;
