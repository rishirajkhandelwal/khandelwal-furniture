import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/common/Button";
import { getWhatsAppLink } from "../utils/whatsapp";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}
        <Link
          to="/products"
          className="mb-8 inline-block text-[#7A4E2D] hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-[550px] w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Product Information */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-[#7A4E2D]">
              {product.subCategory}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              {product.brand}
            </p>

            <div className="mt-6 flex items-center gap-3">

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {product.availability}
              </span>

              <span className="text-3xl font-bold text-[#7A4E2D]">
                {product.price}
              </span>

            </div>

            <p className="mt-8 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="mt-10 rounded-2xl border border-gray-200">

              <div className="flex justify-between border-b p-5">
                <span className="font-semibold">Material</span>
                <span>{product.material}</span>
              </div>

              <div className="flex justify-between border-b p-5">
                <span className="font-semibold">Dimensions</span>
                <span>{product.dimensions}</span>
              </div>

              <div className="flex justify-between p-5">
                <span className="font-semibold">Warranty</span>
                <span>{product.warranty}</span>
              </div>

            </div>

            {/* Features */}
            <div className="mt-10">

              <h2 className="mb-5 text-2xl font-bold">
                Features
              </h2>

              <ul className="space-y-3">

                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600">✔</span>

                    <span>{feature}</span>
                  </li>
                ))}

              </ul>

            </div>

            {/* CTA */}
            <div className="mt-10">

                <Button
                    href={getWhatsAppLink(product)}
                    variant="whatsapp"
                    className="w-full"
                >
                    Get Price on WhatsApp
                </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;