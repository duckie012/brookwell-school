import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeHours from "../components/contact/OfficeHours";
import LocationMap from "../components/contact/LocationMap";
import FAQSection from "../components/contact/FAQSection";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <OfficeHours />

      <LocationMap />

      <FAQSection />

      <ContactCTA />
    </>
  );
}

export default Contact;