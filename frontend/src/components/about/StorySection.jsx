import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

function StorySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        <FadeIn>
          <div>
            <SectionTitle
              title="Who We Are"
              subtitle="A school dedicated to academic excellence and holistic child development."
            />

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Brookwell Harmony School is a private Christian school located
              in Nanyuki, Kenya. We provide quality education from Play Group
              to Grade 7 in a safe, caring and stimulating environment.
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
              We believe every learner possesses unique talents that deserve
              nurturing through academics, sports, leadership and
              co-curricular activities.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-purple-700 rounded-3xl h-105 flex items-center justify-center text-white text-3xl font-bold">
            School Image
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export default StorySection;