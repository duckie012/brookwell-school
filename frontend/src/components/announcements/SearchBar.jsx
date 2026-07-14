import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section className="py-10 bg-white dark:bg-gray-900">

      <div className="max-w-4xl mx-auto px-6">

        <div className="relative">

          <Search
            className="absolute left-5 top-4 text-gray-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Search announcements..."
            className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-700"
          />

        </div>

      </div>

    </section>
  );
}

export default SearchBar;