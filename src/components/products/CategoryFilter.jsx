const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-[var(--primary)] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;