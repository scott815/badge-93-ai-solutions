import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import AutomationFoundation from "@/components/AutomationFoundation";
import WhyVeterans from "@/components/WhyVeterans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <AutomationFoundation />
      <WhyVeterans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
