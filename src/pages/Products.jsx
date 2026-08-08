import { useSearchParams } from "react-router-dom";

import Container from "../components/common/Container";
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

  const searchQuery =
    searchParams.get("search") || "";

  const filterCategories = [
    {
      id: "all",
      name: "All",
    },
    ...categories,
  ];

  // ---------------------------------------------------------
  // Main Category
  // ---------------------------------------------------------

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

  // ---------------------------------------------------------
  // Subcategories
  // ---------------------------------------------------------

  const subCategories = [
    "all",
    ...new Set(
      categoryProducts.map(
        (product) => product.subCategory
      )
    ),
  ];

  const subCategoryProducts =
    selectedSubCategory === "all"
      ? categoryProducts
      : categoryProducts.filter(
          (product) =>
            product.subCategory === selectedSubCategory
        );

  const handleSubCategoryChange = (subCategory) => {
    if (subCategory === "all") {
      if (selectedCategory === "all") {
        setSearchParams(
          searchQuery
            ? { search: searchQuery }
            : {}
        );
      } else {
        setSearchParams({
          category: selectedCategory,
          ...(searchQuery
            ? { search: searchQuery }
            : {}),
        });
      }

      return;
    }

    setSearchParams({
      category: selectedCategory,
      subcategory: subCategory,
      ...(searchQuery
        ? { search: searchQuery }
        : {}),
    });
  };

  // ---------------------------------------------------------
  // Search
  // ---------------------------------------------------------

  const handleSearchChange = (event) => {
    const value = event.target.value;

    const params = {};

    if (selectedCategory !== "all") {
      params.category = selectedCategory;
    }

    if (selectedSubCategory !== "all") {
      params.subcategory = selectedSubCategory;
    }

    if (value.trim()) {
      params.search = value;
    }

    setSearchParams(params);
  };

  // ---------------------------------------------------------
  // Final Product Filtering
  // ---------------------------------------------------------

  const filteredProducts =
    searchQuery.trim() === ""
      ? subCategoryProducts
      : subCategoryProducts.filter((product) => {
          const query = searchQuery
            .toLowerCase()
            .trim();

          const searchableText = [
            product.name,
            product.department,
            product.subCategory,
            product.brand,
            //product.description,
            product.material,
           // ...(product.features || []),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchableText.includes(query);
        });

  return (
    <>
      <section className="bg-white pb-24">
        <Container>

          {/* Search */}
          <div className="mx-auto mb-8 max-w-2xl">
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Search Furniture
            </label>

            <input
              id="product-search"
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search sofa, wardrobe, chair, Kurlon..."
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 outline-none transition focus:border-[#7A4E2D] focus:ring-2 focus:ring-[#7A4E2D]/20"
            />
          </div>

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

          {/* Search Result Information */}
          <div className="mt-6 text-center text-sm text-gray-500">
            {searchQuery ? (
              <>
                Showing {filteredProducts.length} result
                {filteredProducts.length !== 1
                  ? "s"
                  : ""}{" "}
                for "
                <span className="font-medium text-gray-700">
                  {searchQuery}
                </span>
                "
              </>
            ) : (
              <>
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1
                  ? "s"
                  : ""}
              </>
            )}
          </div>

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
                Try a different search or browse another
                category.
              </p>
            </div>
          )}

        </Container>
      </section>
    </>
  );
};

export default Products;