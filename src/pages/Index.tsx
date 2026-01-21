import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Criteria from "@/components/Criteria";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />
      <Hero />
      <SponsorsCarousel />
      <About />
      <Schedule />
      <Criteria />
      <Prizes />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;