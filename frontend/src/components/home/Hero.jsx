import { motion } from "framer-motion";
import { GraduationCap, MapPin, School } from "lucide-react";
import { school } from "../../config/school";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/school-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Purple Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/60 via-transparent to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block bg-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Private Christian School • Nanyuki, Kenya
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">

              {school.name}

            </h1>

            <p className="mt-6 text-2xl italic text-purple-200">
              "{school.motto}"
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-200 max-w-2xl">

              Welcome to Brookwell Harmony School, where learning is enjoyable,
              talents are nurtured, and every child is inspired to become
              confident, responsible and successful in life.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Button to="/contact">
                Contact Us
              </Button>

              <Button
                to="/about"
                variant="secondary"
              >
                Learn More
              </Button>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center"
          >

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl">

              <h3 className="text-white text-3xl font-bold mb-8">
                Quick Facts
              </h3>

              <div className="space-y-8">

                <div className="flex items-center gap-4">

                  <GraduationCap
                    size={40}
                    className="text-purple-300"
                  />

                  <div>
                    <h4 className="text-white font-semibold">
                      Academic Levels
                    </h4>

                    <p className="text-gray-300">
                      Play Group to Grade 7
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <School
                    size={40}
                    className="text-purple-300"
                  />

                  <div>
                    <h4 className="text-white font-semibold">
                      School Type
                    </h4>

                    <p className="text-gray-300">
                      Private Christian School
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <MapPin
                    size={40}
                    className="text-purple-300"
                  />

                  <div>
                    <h4 className="text-white font-semibold">
                      Location
                    </h4>

                    <p className="text-gray-300">
                      Nanyuki, Kenya
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white animate-bounce">

        <span className="text-sm mb-2 tracking-wide">
          Scroll Down
        </span>

        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">

          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;