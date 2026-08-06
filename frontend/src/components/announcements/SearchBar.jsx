import { Search, X } from "lucide-react";

function SearchBar({
  searchTerm,
  setSearchTerm,
  totalResults = 0,
}) {
  return (
    <section className="bg-white dark:bg-gray-950 py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mx-auto">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-purple-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white py-4 pl-14 pr-14 shadow-sm outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
              >
                <X size={20} />
              </button>
            )}

          </div>

          <div className="mt-4 flex justify-between items-center text-sm">

            <p className="text-gray-500 dark:text-gray-400">

              {totalResults} announcement{totalResults !== 1 ? "s" : ""} found

            </p>

            {searchTerm && (
              <p className="text-purple-600 font-medium">

                Searching for: <span className="font-bold">"{searchTerm}"</span>

              </p>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default SearchBar;