import { Briefcase, Handshake, TrendingUp, Building2 } from "lucide-react";

const PodcastSeries = () => {
  return (
    <section id="series" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-blue font-display mb-6">
            Two Powerful Series
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each series is designed to provide unique value to our audience and guests
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Series 1 */}
          <div className="bg-card p-8 rounded-lg shadow-md border border-bronze/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-rust-red/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-rust-red" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-blue font-display">
                  Veterans Talking Business
                </h3>
                <p className="text-bronze">Deep Dives into Entrepreneurial Strategy</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Candid conversations with veteran business owners who are actively scaling their companies. 
              We focus on the real, actionable strategies that drive growth.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-rust-red" />
                  <span className="font-semibold text-slate-blue text-sm">Key Topics</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  What is working now, what is changing in the market, and how veterans are navigating 
                  growth in their respective niches.
                </p>
              </div>

              <div className="bg-rust-red/5 p-4 rounded-lg border border-rust-red/20">
                <p className="font-semibold text-slate-blue text-sm mb-1">Value Proposition</p>
                <p className="text-sm text-muted-foreground">
                  A blueprint for success, highlighting the unique skills—leadership, discipline, 
                  operational planning—that veterans bring to the business world.
                </p>
              </div>
            </div>
          </div>

          {/* Series 2 */}
          <div className="bg-card p-8 rounded-lg shadow-md border border-bronze/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-rust-red/10 rounded-lg flex items-center justify-center">
                <Handshake className="h-7 w-7 text-rust-red" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-blue font-display font-display">
                  Veterans Alliances
                </h3>
                <p className="text-bronze">Corporate Responsibility and Partnership</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Interviews with leaders from established companies and organizations that are actively 
              committed to giving back to the veteran community through hiring, partnerships, or 
              philanthropic efforts.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-rust-red" />
                  <span className="font-semibold text-slate-blue text-sm">Key Topics</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Strategies for effective corporate social responsibility, building veteran employee 
                  resource groups, and creating impactful alliances that benefit both the company and 
                  the veteran ecosystem.
                </p>
              </div>

              <div className="bg-rust-red/5 p-4 rounded-lg border border-rust-red/20">
                <p className="font-semibold text-slate-blue text-sm mb-1">Value Proposition</p>
                <p className="text-sm text-muted-foreground">
                  Showcasing companies that walk the talk, offering insights on building meaningful, 
                  mutually beneficial alliances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSeries;
