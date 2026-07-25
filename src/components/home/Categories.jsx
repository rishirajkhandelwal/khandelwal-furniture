import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const Categories = () => {
  return (
    <section className="bg-[#F8F6F3] py-20">
      <Container>
        <div className="mb-14">
          <SectionHeading
            eyebrow="Collections"
            title="Shop by Category"
            description="Explore our carefully crafted furniture collections designed to suit every space and lifestyle."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;