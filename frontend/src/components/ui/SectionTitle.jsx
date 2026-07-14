function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      <div className="w-24 h-1 bg-purple-700 mx-auto my-6 rounded-full"></div>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;