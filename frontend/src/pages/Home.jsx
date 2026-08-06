import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AcademicsSection from "../components/home/AcademicsSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import ClubsSection from "../components/home/ClubsSection";
import TransportSection from "../components/home/TransportSection";
import Statistics from "../components/home/Statistics";
import GalleryPreview from "../components/home/GalleryPreview";
import AnnouncementsPreview from "../components/home/AnnouncementsPreview";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <>
      <Hero />

      <Welcome />

      <WhyChooseUs />

      <AcademicsSection />

      <ActivitiesSection />

      <ClubsSection />

      <TransportSection />

      <Statistics />

      <GalleryPreview />

      <AnnouncementsPreview />

      <CTASection />
    </>
  );
}

export default Home;