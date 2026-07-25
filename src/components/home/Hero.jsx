import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <p className="mb-3 text-lg uppercase tracking-[0.3em] text-amber-300">
            Premium Furniture
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Crafting Beautiful Spaces
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Elegant furniture for homes, offices and commercial spaces.
            Designed for comfort. Built to last.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary">
                 Explore Collection
            </Button>

            <Button variant="outline">
                 Get Best Price
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}