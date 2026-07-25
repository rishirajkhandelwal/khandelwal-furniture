import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8F6F3] py-24">
      <Container>
        <div className="mb-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Furniture Built to Last"
            description="We combine premium materials, skilled craftsmanship, and exceptional service to create furniture you'll love for years."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;