import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-14">
          <SectionHeading
            eyebrow="Featured Collection"
            title="Our Best Selling Furniture"
            description="Discover some of our most loved furniture pieces, crafted with quality materials and timeless designs."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;