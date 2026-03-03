import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TravelDiaries from "@/components/TravelDiaries";
import RunnerZone from "@/components/RunnerZone";
import BusinessBrain from "@/components/BusinessBrain";
import DebateCorner from "@/components/DebateCorner";
import FamilyWall from "@/components/FamilyWall";
import BucketList from "@/components/BucketList";
import BirthdayMessage from "@/components/BirthdayMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <TravelDiaries />
      <RunnerZone />
      <BusinessBrain />
      <DebateCorner />
      <FamilyWall />
      <BucketList />
      <BirthdayMessage />
      <Footer />
    </main>
  );
};

export default Index;
