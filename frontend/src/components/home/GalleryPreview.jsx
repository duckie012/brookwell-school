import { Link } from "react-router-dom";

function GalleryPreview() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-bold">
            School Gallery
          </h2>

          <Link
            to="/gallery"
            className="text-purple-700 font-semibold"
          >
            View Gallery →
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {[1,2,3,4,5,6].map((image)=>(
            <div
              key={image}
              className="bg-purple-700 rounded-xl h-60 flex items-center justify-center text-white text-xl"
            >
              Image {image}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;