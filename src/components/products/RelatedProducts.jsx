import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "../common/ProductCard";
import { products } from "../../data/products";

const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = products
    .filter((product) => product.id !== currentProduct.id)
    .slice(0, 3);

  return (
    <section className="bg-[#F8F5F2] py-20">
      <Container>
        <div className="mb-12">
          <SectionHeading
            eyebrow="You May Also Like"
            title="Explore More Furniture"
            description="Discover more furniture pieces from our collection."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
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

export default RelatedProducts;