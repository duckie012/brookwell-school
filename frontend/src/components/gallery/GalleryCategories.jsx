import { useEffect, useState } from "react";
import { getGalleryCategories } from "../../api/gallery";

function GalleryCategories({
  selectedCategory,
  setSelectedCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getGalleryCategories();

        setCategories(["All", ...data]);
      } catch (error) {
        console.error("Failed to load gallery categories:", error);
        setCategories(["All"]);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {loading ? (

          <div className="flex justify-center">

            <div className="text-gray-500 dark:text-gray-400">

              Loading categories...

            </div>

          </div>

        ) : (

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 border

                ${
                  selectedCategory === category
                    ? "bg-purple-700 border-purple-700 text-white shadow-lg scale-105"
                    : "bg-purple-100 dark:bg-gray-900 border-purple-200 dark:border-gray-700 text-purple-700 dark:text-purple-300 hover:bg-purple-700 hover:text-white hover:border-purple-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default GalleryCategories;