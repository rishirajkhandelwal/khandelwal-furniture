import { useState } from "react";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ProductCard from "../components/common/ProductCard";
import CategoryFilter from "../components/products/CategoryFilter";

import { products } from "../data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <>
      <PageHeader
        eyebrow="Our Collection"
        title="Furniture for Every Space"
        description="Browse our collection of premium furniture designed for homes and offices."
      />

      <section className="bg-white pb-24">
        <Container>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;