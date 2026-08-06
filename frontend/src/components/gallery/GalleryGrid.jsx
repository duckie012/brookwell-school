import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

import { getGalleryImages } from "../../api/gallery";

function GalleryGrid({ selectedCategory }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGalleryImages();

        setImages(data);
      } catch (error) {
        console.error("Failed to load gallery:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return images;

    return images.filter(
      (image) => image.category === selectedCategory
    );
  }, [images, selectedCategory]);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {loading ? (

          <div className="py-20 text-center text-gray-500 dark:text-gray-400">

            Loading gallery...

          </div>

        ) : filteredImages.length === 0 ? (

          <div className="py-20 text-center text-gray-500 dark:text-gray-400">

            No gallery images found.

          </div>

        ) : (

          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >

            {filteredImages.map((image, index) => (

              <motion.div
                key={image.id || index}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl border border-purple-100 dark:border-gray-800"
              >

                <div className="relative overflow-hidden">

                  {image.image ? (

                    <img
                      src={image.image}
                      alt={image.title}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  ) : (

                    <div className="h-72 flex flex-col items-center justify-center bg-purple-100 dark:bg-gray-800">

                      <ImageIcon
                        size={50}
                        className="text-purple-700"
                      />

                    </div>

                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="absolute top-5 left-5 rounded-full bg-purple-700 px-4 py-2 text-xs font-semibold text-white shadow-lg">

                    {image.category}

                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <h3 className="text-xl font-bold text-white">

                      {image.title}

                    </h3>

                    {image.description && (

                      <p className="mt-2 text-sm text-gray-200 line-clamp-2">

                        {image.description}

                      </p>

                    )}

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        )}

      </div>

    </section>
  );
}

export default GalleryGrid;