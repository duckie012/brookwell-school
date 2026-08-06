import { useState } from "react";

import AnnouncementHero from "../components/announcements/AnnouncementHero";
import SearchBar from "../components/announcements/SearchBar";
import FeaturedAnnouncement from "../components/announcements/FeaturedAnnouncement";
import AnnouncementList from "../components/announcements/AnnouncementList";
import UpcomingEvents from "../components/announcements/UpcomingEvents";
import NewsletterCTA from "../components/announcements/NewsletterCTA";

function Announcements() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <AnnouncementHero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FeaturedAnnouncement />

      <AnnouncementList searchTerm={searchTerm} />

      <UpcomingEvents />

      <NewsletterCTA />
    </>
  );
}

export default Announcements;