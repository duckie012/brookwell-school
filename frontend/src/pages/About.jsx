import PublicLayout from "../components/layout/PublicLayout";

import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import Facilities from "../components/about/Facilities";
import WhyChooseSection from "../components/about/WhyChooseSection";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <PublicLayout>

      <AboutHero />

      <StorySection />

      <VisionMission />

      <CoreValues />

      <Facilities />

      <WhyChooseSection />

      <AboutCTA />

    </PublicLayout>
  );
}

export default About;