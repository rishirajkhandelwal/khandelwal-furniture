import sofa from "../assets/images/products/sofa.jpg";
import bed from "../assets/images/products/bed.jpg";
import wardrobe from "../assets/images/products/wardrobe.jpg";
import dining from "../assets/images/products/dining.jpg";
import tv from "../assets/images/products/tv-unit.jpg";
import office from "../assets/images/products/office.jpg";

export const products = [
  {
    id: 1,
    name: "Luxury Sofa Set",
    slug: "luxury-sofa-set",

    category: "Sofa Sets",

    featured: true,

    price: "Starting from ₹45,000",

    image: sofa,

    description:
      "Premium fabric sofa designed for comfort and elegance.",

    material: "Solid Wood & Premium Fabric",

    dimensions: "Custom Sizes Available",
  },

  {
    id: 2,
    name: "King Size Bed",
    slug: "king-size-bed",

    category: "Beds",

    featured: true,

    price: "Starting from ₹32,000",

    image: bed,

    description:
      "Modern king-size bed crafted with durable engineered wood.",

    material: "Engineered Wood",

    dimensions: "78 x 72 inches",
  },

  {
    id: 3,
    name: "Modern Wardrobe",
    slug: "modern-wardrobe",

    category: "Wardrobes",

    featured: true,

    price: "Starting from ₹28,000",

    image: wardrobe,

    description:
      "Spacious wardrobe with multiple storage compartments.",

    material: "Engineered Wood",

    dimensions: "6 x 7 ft",
  },

  {
    id: 4,
    name: "Dining Table Set",
    slug: "dining-table-set",

    category: "Dining Tables",

    featured: false,

    price: "Starting from ₹24,000",

    image: dining,

    description:
      "Elegant dining table suitable for modern homes.",

    material: "Solid Wood",

    dimensions: "6 Seater",
  },

  {
    id: 5,
    name: "Premium TV Unit",
    slug: "premium-tv-unit",

    category: "TV Units",

    featured: false,

    price: "Starting from ₹18,000",

    image: tv,

    description:
      "Contemporary TV unit with ample storage.",

    material: "Engineered Wood",

    dimensions: "6 ft",
  },

  {
    id: 6,
    name: "Office Workstation",
    slug: "office-workstation",

    category: "Office Furniture",

    featured: false,

    price: "Starting from ₹15,000",

    image: office,

    description:
      "Professional workstation for offices and home offices.",

    material: "Engineered Wood",

    dimensions: "Custom Sizes Available",
  },
];