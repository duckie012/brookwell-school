import PublicLayout from "../components/layout/PublicLayout";

import AnnouncementHero from "../components/announcements/AnnouncementHero";
import SearchBar from "../components/announcements/SearchBar";
import FeaturedAnnouncement from "../components/announcements/FeaturedAnnouncement";
import AnnouncementList from "../components/announcements/AnnouncementList";
import UpcomingEvents from "../components/announcements/UpcomingEvents";
import NewsletterCTA from "../components/announcements/NewsletterCTA";

function Announcements() {
  return (
    <PublicLayout>

      <AnnouncementHero />

      <SearchBar />

      <FeaturedAnnouncement />

      <AnnouncementList />

      <UpcomingEvents />

      <NewsletterCTA />

    </PublicLayout>
  );
}

export default Announcements;