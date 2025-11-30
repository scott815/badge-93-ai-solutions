import PodcastHero from "@/components/podcast/PodcastHero";
import AboutHost from "@/components/podcast/AboutHost";
import PodcastMission from "@/components/podcast/PodcastMission";
import PodcastSeries from "@/components/podcast/PodcastSeries";
import PodcastCTA from "@/components/podcast/PodcastCTA";
import PodcastContact from "@/components/podcast/PodcastContact";
import PodcastFooter from "@/components/podcast/PodcastFooter";

const Podcast = () => {
  return (
    <div className="min-h-screen">
      <PodcastHero />
      <AboutHost />
      <PodcastMission />
      <PodcastSeries />
      <PodcastCTA />
      <PodcastContact />
      <PodcastFooter />
    </div>
  );
};

export default Podcast;
