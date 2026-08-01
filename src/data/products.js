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

  gallery: [sofa],

  description:
    "A premium sofa set designed to bring elegance and comfort to your living room. Crafted with a sturdy wooden frame, high-density foam cushions, and premium upholstery for long-lasting durability.",

  material: "Solid Wood & Premium Fabric",

  dimensions: "Custom Sizes Available",

  warranty: "5 Years",

  features: [
    "Premium Fabric Upholstery",
    "Solid Wood Frame",
    "High Density Foam Cushions",
    "Custom Colours Available",
    "Modern Elegant Design",
  ],
},

{
  id: 2,
  name: "King Size Bed",
  slug: "king-size-bed",

  category: "Beds",

  featured: true,

  price: "Starting from ₹32,000",

  image: bed,

  gallery: [bed],

  description:
    "A stylish king-size bed designed for maximum comfort and durability. Perfect for modern bedrooms with premium finish and spacious sleeping area.",

  material: "Engineered Wood",

  dimensions: "78 × 72 Inches",

  warranty: "5 Years",

  features: [
    "Premium Finish",
    "Strong Wooden Structure",
    "Modern Design",
    "Easy Maintenance",
    "Custom Sizes Available",
  ],
},

{
  id: 3,
  name: "Modern Wardrobe",
  slug: "modern-wardrobe",

  category: "Wardrobes",

  featured: true,

  price: "Starting from ₹28,000",

  image: wardrobe,

  gallery: [wardrobe],

  description:
    "A spacious wardrobe with multiple storage compartments designed to keep your bedroom organized while adding a modern touch to your interiors.",

  material: "Engineered Wood",

  dimensions: "6 × 7 ft",

  warranty: "5 Years",

  features: [
    "Multiple Storage Compartments",
    "Premium Laminate Finish",
    "Smooth Sliding Hinges",
    "Durable Construction",
    "Custom Design Options",
  ],
},

{
  id: 4,
  name: "Dining Table Set",
  slug: "dining-table-set",

  category: "Dining Tables",

  featured: false,

  price: "Starting from ₹24,000",

  image: dining,

  gallery: [dining],

  description:
    "Elegant dining table set crafted for everyday family dining as well as special occasions. Designed with durability and timeless style in mind.",

  material: "Solid Wood",

  dimensions: "6 Seater",

  warranty: "5 Years",

  features: [
    "Premium Wooden Finish",
    "Comfortable Seating",
    "Strong & Durable Frame",
    "Scratch Resistant Surface",
    "Suitable for Modern Homes",
  ],
},

{
  id: 5,
  name: "Premium TV Unit",
  slug: "premium-tv-unit",

  category: "TV Units",

  featured: false,

  price: "Starting from ₹18,000",

  image: tv,

  gallery: [tv],

  description:
    "A contemporary TV unit designed to organize your entertainment area with spacious shelves and a premium modern finish.",

  material: "Engineered Wood",

  dimensions: "6 ft",

  warranty: "5 Years",

  features: [
    "Cable Management",
    "Storage Cabinets",
    "Premium Finish",
    "Modern Design",
    "Easy Maintenance",
  ],
},

{
  id: 6,
  name: "Office Workstation",
  slug: "office-workstation",

  category: "Office Furniture",

  featured: false,

  price: "Starting from ₹15,000",

  image: office,

  gallery: [office],

  description:
    "Professional office workstation designed for productivity, comfort, and efficient workspace management. Ideal for offices and home offices.",

  material: "Engineered Wood",

  dimensions: "Custom Sizes Available",

  warranty: "3 Years",

  features: [
    "Spacious Work Area",
    "Cable Management",
    "Premium Finish",
    "Custom Sizes Available",
    "Ideal for Office & Home Office",
  ],
},
];