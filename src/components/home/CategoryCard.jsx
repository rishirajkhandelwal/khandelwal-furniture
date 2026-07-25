import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          {category.name}
        </h3>

        <div className="mt-5 flex items-center gap-2 font-medium text-[#7A4E2D]">
          Explore Collection
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;