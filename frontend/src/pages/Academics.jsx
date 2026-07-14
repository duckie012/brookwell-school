import PublicLayout from "../components/layout/PublicLayout";

import AcademicsHero from "../components/academics/AcademicsHero";
import Curriculum from "../components/academics/Curriculum";
import ClassLevels from "../components/academics/ClassLevels";
import TeachingApproach from "../components/academics/TeachingApproach";
import CoCurricular from "../components/academics/CoCurricular";
import Assessment from "../components/academics/Assessment";
import AcademicsCTA from "../components/academics/AcademicsCTA";

function Academics() {
  return (
    <PublicLayout>

      <AcademicsHero />

      <Curriculum />

      <ClassLevels />

      <TeachingApproach />

      <CoCurricular />

      <Assessment />

      <AcademicsCTA />

    </PublicLayout>
  );
}

export default Academics;