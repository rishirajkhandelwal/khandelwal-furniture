import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ShowroomInfo from "./ShowroomInfo";
import { siteConfig } from "../../constants/siteConfig";

const VisitShowroom = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Visit Us"
          title="Experience Our Furniture in Person"
          description="Visit our showroom to explore a wide range of quality furniture designed for every home and office."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <ShowroomInfo />

          {/* Right Side */}
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <iframe
              src={siteConfig.googleMapsEmbed}
              title="Khandelwal Furniture Showroom"
              className="h-[450px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisitShowroom;