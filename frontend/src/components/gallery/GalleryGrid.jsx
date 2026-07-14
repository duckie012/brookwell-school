import { Search } from "lucide-react";

const images = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
}));

function GalleryGrid() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {images.map((image) => (

            <div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >

              <div className="h-72 bg-purple-700 flex items-center justify-center text-white text-2xl">

                Image {image.id}

              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <Search
                  size={40}
                  className="text-white"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;