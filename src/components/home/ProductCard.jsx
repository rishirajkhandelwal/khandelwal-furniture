import Button from "../common/Button";

const ProductCard = ({ product }) => {
  const {
    name,
    category,
    price,
    image,
    slug,
  } = product;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-6">
        <p className="text-sm uppercase tracking-wider text-[#7A4E2D]">
          {category}
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-lg font-medium text-gray-600">
          {price}
        </p>

        <Button
          to={`/products/${slug}`}
          variant="primary"
          className="w-full"
        >
          Get Best Price
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;