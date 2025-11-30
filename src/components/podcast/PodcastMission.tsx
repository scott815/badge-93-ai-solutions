import { Target, Rocket, Users } from "lucide-react";

const PodcastMission = () => {
  return (
    <section id="mission" className="py-24 bg-slate-blue-dark relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-cream font-display mb-6">
            A New Platform for a Growing Community
          </h2>
          
          <p className="text-lg text-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            This podcast is the foundational project of Badge93, a new venture dedicated to streamlining 
            processes for high-growth businesses. Our mission is simple: to provide a high-impact, 
            high-visibility platform where the lessons of military service meet the challenges of the 
            modern marketplace.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream/10 backdrop-blur-sm p-6 rounded-lg border border-cream/20">
              <div className="w-14 h-14 bg-rust-red/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="h-7 w-7 text-rust-red" />
              </div>
              <h3 className="text-lg font-bold text-cream mb-2">High-Impact</h3>
              <p className="text-cream/70 text-sm">Real strategies from veterans who are actively scaling businesses</p>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm p-6 rounded-lg border border-cream/20">
              <div className="w-14 h-14 bg-rust-red/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="h-7 w-7 text-rust-red" />
              </div>
              <h3 className="text-lg font-bold text-cream mb-2">High-Visibility</h3>
              <p className="text-cream/70 text-sm">Amplify your brand and reach the veteran business community</p>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm p-6 rounded-lg border border-cream/20">
              <div className="w-14 h-14 bg-rust-red/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-7 w-7 text-rust-red" />
              </div>
              <h3 className="text-lg font-bold text-cream mb-2">Community-Driven</h3>
              <p className="text-cream/70 text-sm">Connecting veterans, allies, and corporate partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastMission;
