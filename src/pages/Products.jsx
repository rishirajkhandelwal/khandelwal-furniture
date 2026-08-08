import { useState } from "react";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ProductCard from "../components/common/ProductCard";
import CategoryFilter from "../components/products/CategoryFilter";

import { products } from "../data/products";
import { categories } from "../data/categories";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterCategories = [
    {
      id: "all",
      name: "All",
    },
    ...categories,
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            String(product.department).trim().toLowerCase() ===
            String(selectedCategory).trim().toLowerCase()
        );

  return (
    <>
      <PageHeader
        eyebrow="Our Collection"
        title="Furniture for Every Space"
        description="Browse our collection of furniture for homes, offices, institutions and more."
      />

      <section className="bg-white pb-24">
        <Container>

          <CategoryFilter
            categories={filterCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                No products found
              </h2>

              <p className="mt-3 text-gray-600">
                We are adding more products to this collection soon.
              </p>
            </div>
          )}

        </Container>
      </section>
    </>
  );
};

export default Products;