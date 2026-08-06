import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ImageIcon,
} from "lucide-react";

import { getGalleryImages } from "../../api/gallery";

function GalleryPreview() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGalleryImages();

        // Show only latest 6 images on homepage
        setGallery(data.slice(0, 6));
      } catch (error) {
        console.error("Failed to load gallery:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-purple-600 uppercase font-semibold tracking-widest">
            School Gallery
          </span>

          <h2 className="mt-4 text-5xl font-bold dark:text-white">
            Moments Worth Remembering
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Explore memorable moments from academics, sports,
            clubs, school trips and co-curricular activities.
          </p>

        </div>

        {loading ? (

          <div className="mt-16 text-center text-gray-500">
            Loading gallery...
          </div>

        ) : gallery.length === 0 ? (

          <div className="mt-16 text-center text-gray-500">
            No gallery images available.
          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {gallery.map((image) => (

              <motion.div
                key={image.id}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >

                {image.image ? (

                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                  />

                ) : (

                  <div className="h-72 bg-purple-100 dark:bg-gray-800 flex flex-col items-center justify-center">

                    <ImageIcon
                      size={55}
                      className="text-purple-600"
                    />

                  </div>

                )}

                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">

                  <h3 className="text-white text-xl font-bold">

                    {image.title}

                  </h3>

                  <p className="text-purple-200 text-sm mt-2">

                    {image.category}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        )}

        <div className="flex justify-center mt-16">

          <Link
            to="/gallery"
            className="bg-purple-700 hover:bg-purple-800 transition text-white rounded-xl px-8 py-4 font-semibold flex items-center gap-2"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;