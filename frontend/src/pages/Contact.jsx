import PublicLayout from "../components/layout/PublicLayout";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import LocationMap from "../components/contact/LocationMap";
import OfficeHours from "../components/contact/OfficeHours";
import FAQSection from "../components/contact/FAQSection";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <PublicLayout>

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <LocationMap />

      <OfficeHours />

      <FAQSection />

      <ContactCTA />

    </PublicLayout>
  );
}

export default Contact;