import PublicLayout from "../components/layout/PublicLayout";

import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AcademicsSection from "../components/home/AcademicsSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import ClubsSection from "../components/home/ClubsSection";
import TransportSection from "../components/home/TransportSection";
import AnnouncementsPreview from "../components/home/AnnouncementsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <AcademicsSection />
      <ActivitiesSection />
      <ClubsSection />
      <TransportSection />
      <AnnouncementsPreview />
      <GalleryPreview />
      <CTASection />
    </PublicLayout>
  );
}

export default Home;