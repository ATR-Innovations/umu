import Hero from "../components/Hero";
import CompetitionBanner from "../components/CompetitionBanner";
import StatsCounter from "../components/StatsCounter";
import MissionSection from "../components/MissionSection";
import LatestEventSection from "../components/LatestEventSection";
import GalleryCarouselSection from "../components/GalleryCarouselSection";
import NewsCarouselSection from "../components/NewsCarouselSection";
import ContactSection from "../components/ContactSection";

const Home = ({ onOpenModal }) => {
  const handleScroll = (sectionId) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      <Hero onScroll={handleScroll} />
      <StatsCounter />
      <CompetitionBanner />
      <MissionSection />
      <LatestEventSection onOpenModal={onOpenModal} />
      <GalleryCarouselSection />
      <NewsCarouselSection onOpenModal={onOpenModal} />
      <ContactSection />
    </div>
  );
};

export default Home;