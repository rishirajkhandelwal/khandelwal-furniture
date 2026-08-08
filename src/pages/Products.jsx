import { useSearchParams } from "react-router-dom";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ProductCard from "../components/common/ProductCard";
import CategoryFilter from "../components/products/CategoryFilter";

import { products } from "../data/products";
import { categories } from "../data/categories";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "all";

  const selectedSubCategory =
    searchParams.get("subcategory") || "all";

  const filterCategories = [
    {
      id: "all",
      name: "All",
    },
    ...categories,
  ];

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };

  const categoryProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.department === selectedCategory
        );

  const subCategories = [
    "all",
    ...new Set(
      categoryProducts.map(
        (product) => product.subCategory
      )
    ),
  ];

  const filteredProducts =
    selectedSubCategory === "all"
      ? categoryProducts
      : categoryProducts.filter(
          (product) =>
            product.subCategory === selectedSubCategory
        );

  const handleSubCategoryChange = (subCategory) => {
    if (subCategory === "all") {
      if (selectedCategory === "all") {
        setSearchParams({});
      } else {
        setSearchParams({
          category: selectedCategory,
        });
      }

      return;
    }

    setSearchParams({
      category: selectedCategory,
      subcategory: subCategory,
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Our Collection"
        title="Furniture for Every Space"
        description="Browse our collection of furniture for homes, offices, institutions and more."
      />

      <section className="bg-white pb-24">
        <Container>

          {/* Main Categories */}
          <CategoryFilter
            categories={filterCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Subcategories */}
          {selectedCategory !== "all" &&
            subCategories.length > 1 && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {subCategories.map((subCategory) => {
                  const isActive =
                    selectedSubCategory === subCategory;

                  return (
                    <button
                      key={subCategory}
                      onClick={() =>
                        handleSubCategoryChange(
                          subCategory
                        )
                      }
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        isActive
                          ? "border-[#7A4E2D] bg-[#7A4E2D] text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#7A4E2D] hover:text-[#7A4E2D]"
                      }`}
                    >
                      {subCategory === "all"
                        ? "All"
                        : subCategory}
                    </button>
                  );
                })}
              </div>
            )}

          {/* Products */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* No Products */}
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