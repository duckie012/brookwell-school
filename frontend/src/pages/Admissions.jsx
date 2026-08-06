import AdmissionsHero from "../components/admissions/AdmissionsHero";
import WhyChooseUs from "../components/admissions/WhyChooseUs";
import AdmissionProcess from "../components/admissions/AdmissionProcess";
import Requirements from "../components/admissions/Requirements";
import FeeStructure from "../components/admissions/FeeStructure";
import FAQ from "../components/admissions/FAQ";
import EnrollmentForm from "../components/admissions/EnrollmentForm";
import ApplyCTA from "../components/admissions/ApplyCTA";

function Admissions() {
  return (
    <>
      <AdmissionsHero />

      <WhyChooseUs />

      <AdmissionProcess />

      <Requirements />

      <FeeStructure />

      <EnrollmentForm />

      <FAQ />

      <ApplyCTA />
    </>
  );
}

export default Admissions;