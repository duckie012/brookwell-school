const categories = [
  "All",
  "Academics",
  "Sports",
  "Events",
  "Transport",
  "Clubs",
  "Swimming",
  "Taekwondo",
  "Dancing",
];

function GalleryCategories() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">

        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-800 transition"
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}

export default GalleryCategories;