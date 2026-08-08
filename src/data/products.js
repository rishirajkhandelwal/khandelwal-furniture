import sofa from "../assets/images/products/sofa.jpg";
import bed from "../assets/images/products/bed.jpg";
import wardrobe from "../assets/images/products/wardrobe.jpg";
import dining from "../assets/images/products/dining.jpg";
import tv from "../assets/images/products/tv-unit.jpg";
import office from "../assets/images/products/office.jpg";

import recliner from "../assets/images/products/recliner.jpg";
import centerTable from "../assets/images/products/center-table.jpg";
import templeUnit from "../assets/images/products/temple-unit.jpg";

import dressingTable from "../assets/images/products/dressing-table.jpg";
import bedsideTable from "../assets/images/products/bedside-table.jpg";
import shoeRack from "../assets/images/products/shoe-rack.jpg";

import diningChair from "../assets/images/products/dining-chair.jpg";

import computerTable from "../assets/images/products/computer-table.jpg";
import officeChair from "../assets/images/products/office-chair.jpg";
import bookshelf from "../assets/images/products/bookshelf.jpg";
import schoolStudySet from "../assets/images/products/school-study-set.jpg";
import staffRoom from "../assets/images/products/staff-room.jpg";

import plasticChair from "../assets/images/products/plastic-chair.jpg";
import plasticStool from "../assets/images/products/plastic-stool.jpg";
import plasticTable from "../assets/images/products/plastic-table.jpg";
import plasticWardrobe from "../assets/images/products/plastic-wardrobe.jpg";
import plasticRack from "../assets/images/products/plastic-rack.jpg";



import kurlonMattress from "../assets/images/products/kurlon-mattress.jpg";
import centuryMattress from "../assets/images/products/century-mattress.jpg";

import flooring from "../assets/images/products/flooring.jpg";
import wallpaper from "../assets/images/products/wallpaper.jpg";
import foamSheets from "../assets/images/products/foam-sheets.jpg";
import ironAlmirah from "../assets/images/products/iron-almirah.jpg";
import angleRack from "../assets/images/products/angle-rack.jpg";

import salonChair from "../assets/images/products/salon-chair.jpg";

export const products = [
  // =========================================================
  // LIVING ROOM
  // =========================================================

  {
    id: 1,
    name: "Luxury Sofa Set",
    slug: "luxury-sofa-set",

    department: "living-room",
    subCategory: "Sofa Sets",

    brand: "Khandelwal Collection",
    availability: "In Store",

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
    name: "Modern Recliner Sofa",
    slug: "modern-recliner-sofa",

    department: "living-room",
    subCategory: "Recliner Sofas",

    brand: "Multiple Options Available",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: recliner,
    gallery: [recliner],

    description:
      "Comfortable recliner seating designed for relaxing at home. Multiple styles, sizes and upholstery options are available based on customer requirements.",

    material: "Wooden Frame, Foam & Upholstery",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Comfortable Reclining Design",
      "Multiple Upholstery Options",
      "Multiple Sizes Available",
      "Suitable for Living Rooms",
      "Available on Order",
    ],
  },

  {
    id: 3,
    name: "Premium TV Unit",
    slug: "premium-tv-unit",

    department: "living-room",
    subCategory: "TV Units",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: true,

    price: "Starting from ₹18,000",

    image: tv,
    gallery: [tv],

    description:
      "A contemporary TV unit designed to organize your entertainment area with spacious storage and a modern finish.",

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
    id: 4,
    name: "Modern Center Table",
    slug: "modern-center-table",

    department: "living-room",
    subCategory: "Center Tables",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: centerTable,
    gallery: [centerTable],

    description:
      "Modern center table designed to complement contemporary living room interiors. Available in different designs, finishes and sizes.",

    material: "Engineered Wood & Other Options",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Modern Designs",
      "Multiple Finishes Available",
      "Multiple Sizes Available",
      "Suitable for Living Rooms",
      "Ready-Made Options Available",
    ],
  },

  {
    id: 5,
    name: "Home Temple Unit",
    slug: "home-temple-unit",

    department: "living-room",
    subCategory: "Temple Units",

    brand: "Khandelwal Collection",
    availability: "Ready Made & On Order",

    featured: false,

    price: "Contact for Price",

    image: templeUnit,
    gallery: [templeUnit],

    description:
      "Home temple units available in different sizes and designs, from compact units for smaller homes to larger statement pieces. Custom requirements can also be discussed.",

    material: "Engineered Wood / Wood",
    dimensions: "Small to Large Sizes Available",
    warranty: "As per Product",

    features: [
      "Small to Large Sizes",
      "Multiple Designs Available",
      "Ready-Made Options",
      "Custom Requirements Considered",
      "Suitable for Home Interiors",
    ],
  },

  // =========================================================
  // BEDROOM
  // =========================================================

  {
    id: 6,
    name: "King Size Bed",
    slug: "king-size-bed",

    department: "bedroom",
    subCategory: "Beds",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: true,

    price: "Starting from ₹32,000",

    image: bed,
    gallery: [bed],

    description:
      "A stylish king-size bed designed for maximum comfort and durability. Perfect for modern bedrooms with a premium finish and spacious sleeping area.",

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
    id: 7,
    name: "Modern Wardrobe",
    slug: "modern-wardrobe",

    department: "bedroom",
    subCategory: "Wardrobes",

    brand: "Khandelwal Collection",
    availability: "In Store",

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
      "Smooth Hinges",
      "Durable Construction",
      "Custom Design Options",
    ],
  },

  {
    id: 8,
    name: "Modern Dressing Table",
    slug: "modern-dressing-table",

    department: "bedroom",
    subCategory: "Dressing Tables",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: dressingTable,
    gallery: [dressingTable],

    description:
      "A practical and stylish dressing table designed to provide organized storage while complementing modern bedroom interiors.",

    material: "Engineered Wood",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Storage Drawers",
      "Modern Design",
      "Multiple Finishes Available",
      "Space Efficient",
      "Ready-Made Options",
    ],
  },

  {
    id: 9,
    name: "Bedside Table",
    slug: "bedside-table",

    department: "bedroom",
    subCategory: "Bedside Tables",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: bedsideTable,
    gallery: [bedsideTable],

    description:
      "Compact bedside table designed to provide convenient storage beside the bed while maintaining a clean and modern bedroom look.",

    material: "Engineered Wood",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Compact Design",
      "Storage Space",
      "Modern Finish",
      "Easy Maintenance",
      "Multiple Designs Available",
    ],
  },

  {
    id: 10,
    name: "Shoe Rack",
    slug: "shoe-rack",

    department: "bedroom",
    subCategory: "Shoe Racks",

    brand: "Multiple Options Available",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: shoeRack,
    gallery: [shoeRack],

    description:
      "Practical shoe storage solutions available in different materials and designs, including plastic, pipe and iron options.",

    material: "Plastic / Pipe / Iron",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Multiple Storage Options",
      "Plastic Options Available",
      "Pipe Frame Options",
      "Iron Options Available",
      "Multiple Sizes",
    ],
  },

  // =========================================================
  // DINING
  // =========================================================

  {
    id: 11,
    name: "Dining Table Set",
    slug: "dining-table-set",

    department: "dining",
    subCategory: "Dining Tables",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: true,

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
    id: 12,
    name: "Dining Chairs",
    slug: "dining-chairs",

    department: "dining",
    subCategory: "Dining Chairs",

    brand: "Multiple Options Available",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: diningChair,
    gallery: [diningChair],

    description:
      "Comfortable dining chairs available in a range of designs and finishes to complement dining tables and home interiors.",

    material: "Wood / Engineered Wood / Upholstery",
    dimensions: "Multiple Designs Available",
    warranty: "As per Product",

    features: [
      "Comfortable Seating",
      "Multiple Designs",
      "Multiple Finishes",
      "Suitable for Dining Rooms",
      "Ready-Made Options Available",
    ],
  },

  // =========================================================
  // OFFICE & INSTITUTIONAL
  // =========================================================

  {
    id: 13,
    name: "Office Workstation",
    slug: "office-workstation",

    department: "office",
    subCategory: "Office Workstations",

    brand: "Khandelwal Collection",
    availability: "In Store",

    featured: true,

    price: "Starting from ₹15,000",

    image: office,
    gallery: [office],

    description:
      "Professional office workstation designed for productivity, comfort and efficient workspace management. Ideal for offices and home offices.",

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

  {
    id: 14,
    name: "Computer Table",
    slug: "computer-table",

    department: "office",
    subCategory: "Computer Tables",

    brand: "Khandelwal Collection",
    availability: "In Store & On Order",

    featured: false,

    price: "Contact for Price",

    image: computerTable,
    gallery: [computerTable],

    description:
      "Practical computer tables designed for home offices, workspaces and study areas. Different sizes and storage configurations are available.",

    material: "Engineered Wood",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Dedicated Computer Workspace",
      "Keyboard Space",
      "Storage Options",
      "Multiple Sizes",
      "Custom Requirements Considered",
    ],
  },

  {
    id: 15,
    name: "Office Chair",
    slug: "office-chair",

    department: "office",
    subCategory: "Office Chairs",

    brand: "Multiple Brands Available",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: officeChair,
    gallery: [officeChair],

    description:
      "Office seating options designed for comfortable everyday working. Multiple styles and configurations are available.",

    material: "Metal / Plastic / Fabric / Mesh",
    dimensions: "Multiple Models Available",
    warranty: "As per Product",

    features: [
      "Comfortable Seating",
      "Multiple Models",
      "Office & Home Office Suitable",
      "Multiple Price Options",
      "Ready-Made Options",
    ],
  },

  {
    id: 16,
    name: "Bookshelf",
    slug: "bookshelf",

    department: "office",
    subCategory: "Bookshelves",

    brand: "Multiple Options Available",
    availability: "In Store & On Order",

    featured: false,

    price: "Contact for Price",

    image: bookshelf,
    gallery: [bookshelf],

    description:
      "Bookshelves available in engineered wood and iron designs for homes, offices, schools and other spaces.",

    material: "Engineered Wood / Iron",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Engineered Wood Options",
      "Iron Options",
      "Multiple Sizes",
      "Open & Closed Storage Options",
      "Suitable for Offices & Homes",
    ],
  },

  {
    id: 17,
    name: "School Study Set",
    slug: "school-study-set",

    department: "office",
    subCategory: "School Study Sets",

    brand: "Khandelwal Furniture",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: schoolStudySet,
    gallery: [schoolStudySet],

    description:
      "Study furniture supplied for schools based on classroom requirements, including student study sets and related furniture.",

    material: "Engineered Wood / Metal",
    dimensions: "As per School Requirement",

    warranty: "As per Order",

    features: [
      "School Requirements",
      "Student Study Sets",
      "Bulk Orders",
      "Multiple Configurations",
      "Custom Requirements Considered",
    ],
  },

  {
    id: 18,
    name: "Staff Room Furniture",
    slug: "staff-room-furniture",

    department: "office",
    subCategory: "Staff Room Furniture",

    brand: "Khandelwal Furniture",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: staffRoom,
    gallery: [staffRoom],

    description:
      "Furniture solutions for school and institutional staff rooms, supplied according to space, quantity and functional requirements.",

    material: "Engineered Wood / Metal / Other Options",
    dimensions: "As per Requirement",

    warranty: "As per Order",

    features: [
      "School & Institutional Orders",
      "Bulk Supply",
      "Custom Requirements",
      "Space-Based Planning",
      "Delivery & Installation Available",
    ],
  },

  {
    id: 19,
    name: "Salon Chair",
    slug: "salon-chair",

    department: "office",
    subCategory: "Salon Chairs",

    brand: "Multiple Options Available",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: salonChair,
    gallery: [salonChair],

    description:
      "Salon seating solutions available for professional salons and beauty businesses, with different styles and configurations available on order.",

    material: "Metal / PU / Upholstery",
    dimensions: "Multiple Models Available",
    warranty: "As per Product",

    features: [
      "Professional Salon Use",
      "Multiple Designs",
      "Comfortable Seating",
      "Available on Order",
      "Suitable for Commercial Spaces",
    ],
  },

  // =========================================================
  // PLASTIC FURNITURE
  // =========================================================

  {
    id: 20,
    name: "Plastic Chair",
    slug: "plastic-chair",

    department: "plastic",
    subCategory: "Plastic Chairs",

    brand: "Nilkamal / Italica / Mango",
    availability: "In Store",

    featured: true,

    price: "Contact for Price",

    image: plasticChair,
    gallery: [plasticChair],

    description:
      "Durable plastic chairs available from popular brands including Nilkamal, Italica and Mango for homes, offices, events and everyday use.",

    material: "Plastic",
    dimensions: "Multiple Models Available",
    warranty: "As per Brand",

    features: [
      "Multiple Brands",
      "Multiple Designs",
      "Durable Construction",
      "Easy Maintenance",
      "Suitable for Home & Commercial Use",
    ],
  },

  {
    id: 21,
    name: "Plastic Stool",
    slug: "plastic-stool",

    department: "plastic",
    subCategory: "Plastic Stools",

    brand: "Nilkamal / Italica / Mango",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: plasticStool,
    gallery: [plasticStool],

    description:
      "Practical plastic stools available in different sizes, colours and designs for home and commercial use.",

    material: "Plastic",
    dimensions: "Multiple Models Available",
    warranty: "As per Brand",

    features: [
      "Lightweight",
      "Easy to Clean",
      "Multiple Colours",
      "Multiple Models",
      "Suitable for Everyday Use",
    ],
  },

  {
    id: 22,
    name: "Plastic Dining Table",
    slug: "plastic-dining-table",

    department: "plastic",
    subCategory: "Plastic Dining Tables",

    brand: "Nilkamal / Italica / Mango",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: plasticTable,
    gallery: [plasticTable],

    description:
      "Practical plastic tables suitable for dining, utility areas, balconies, commercial spaces and everyday household use.",

    material: "Plastic",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Brand",

    features: [
      "Lightweight",
      "Easy Maintenance",
      "Multiple Sizes",
      "Multiple Designs",
      "Suitable for Home & Commercial Use",
    ],
  },

  {
    id: 23,
    name: "Plastic Wardrobe",
    slug: "plastic-wardrobe",

    department: "plastic",
    subCategory: "Plastic Wardrobes",

    brand: "Nilkamal / Italica / Mango",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: plasticWardrobe,
    gallery: [plasticWardrobe],

    description:
      "Practical plastic wardrobes providing lightweight storage for bedrooms, utility spaces and other areas where easy maintenance is important.",

    material: "Plastic",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Brand",

    features: [
      "Lightweight Storage",
      "Easy Maintenance",
      "Multiple Storage Compartments",
      "Multiple Models",
      "Suitable for Home Use",
    ],
  },

  {
    id: 24,
    name: "Multipurpose Plastic Rack",
    slug: "multipurpose-plastic-rack",

    department: "plastic",
    subCategory: "Multipurpose Racks",

    brand: "Nilkamal / Italica / Mango",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: plasticRack,
    gallery: [plasticRack],

    description:
      "Multipurpose plastic racks designed for organized storage in kitchens, bedrooms, bathrooms, utility areas and offices.",

    material: "Plastic",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Brand",

    features: [
      "Multipurpose Storage",
      "Lightweight",
      "Easy to Clean",
      "Multiple Designs",
      "Suitable for Multiple Rooms",
    ],
  },

  // =========================================================
  // MATTRESSES
  // =========================================================

  {
    id: 25,
    name: "Kurlon Mattress",
    slug: "kurlon-mattress",

    department: "mattress",
    subCategory: "Kurlon Mattresses",

    brand: "Kurlon",
    availability: "In Store",

    featured: true,

    price: "Contact for Price",

    image: kurlonMattress,
    gallery: [kurlonMattress],

    description:
      "Kurlon mattresses available in different models and sizes. Ask us about the latest available options and suitable mattress choices.",

    material: "As per Model",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Model",

    features: [
      "Kurlon Brand",
      "Multiple Models",
      "Multiple Sizes",
      "Suitable for Different Sleeping Preferences",
      "Ready-Made Options Available",
    ],
  },

  {
    id: 26,
    name: "Century Mattress",
    slug: "century-mattress",

    department: "mattress",
    subCategory: "Century Mattresses",

    brand: "Century",
    availability: "In Store",

    featured: true,

    price: "Contact for Price",

    image: centuryMattress,
    gallery: [centuryMattress],

    description:
      "Century mattresses available in different models and sizes. Contact us for current availability and model-specific pricing.",

    material: "As per Model",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Model",

    features: [
      "Century Brand",
      "Multiple Models",
      "Multiple Sizes",
      "Different Comfort Options",
      "Ready-Made Options Available",
    ],
  },

  // =========================================================
  // INTERIOR & UTILITY
  // =========================================================

  {
    id: 27,
    name: "Wonderfloor Flooring",
    slug: "wonderfloor-flooring",

    department: "interior",
    subCategory: "PVC Flooring & Carpets",

    brand: "Wonderfloor",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: flooring,
    gallery: [flooring],

    description:
      "Carpet and PVC flooring solutions from Wonderfloor for homes, offices and commercial spaces. Options can be selected based on application and space requirements.",

    material: "PVC / Carpet Flooring",
    dimensions: "As per Area Requirement",
    warranty: "As per Product",

    features: [
      "Wonderfloor Brand",
      "PVC Flooring Options",
      "Carpet Flooring Options",
      "Suitable for Homes & Offices",
      "Installation Support Available",
    ],
  },

  {
    id: 28,
    name: "Wallpapers",
    slug: "wallpapers",

    department: "interior",
    subCategory: "Wallpapers",

    brand: "Multiple Options Available",
    availability: "Available on Order",

    featured: false,

    price: "Contact for Price",

    image: wallpaper,
    gallery: [wallpaper],

    description:
      "Decorative wallpapers available in a range of patterns, textures and styles for bedrooms, living rooms, offices and commercial interiors.",

    material: "Wallpaper",
    dimensions: "As per Wall Requirement",
    warranty: "As per Product",

    features: [
      "Multiple Designs",
      "Multiple Patterns",
      "Residential & Commercial Options",
      "Custom Selection",
      "Installation Support Available",
    ],
  },

  {
    id: 29,
    name: "Foam Sheets",
    slug: "foam-sheets",

    department: "interior",
    subCategory: "Foam Sheets",

    brand: "Multiple Options Available",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: foamSheets,
    gallery: [foamSheets],

    description:
      "Foam sheets available for furniture, upholstery and other practical applications. Different thicknesses and specifications may be available.",

    material: "Foam",
    dimensions: "Multiple Thicknesses Available",
    warranty: "As per Product",

    features: [
      "Multiple Thickness Options",
      "Furniture Applications",
      "Upholstery Applications",
      "Multiple Sizes",
      "Available for Different Requirements",
    ],
  },

  {
    id: 30,
    name: "Iron Almirah",
    slug: "iron-almirah",

    department: "interior",
    subCategory: "Iron Almirahs",

    brand: "Multiple Options Available",
    availability: "In Store",

    featured: false,

    price: "Contact for Price",

    image: ironAlmirah,
    gallery: [ironAlmirah],

    description:
      "Durable iron almirahs providing secure storage for homes, offices, institutions and other practical applications.",

    material: "Powder-Coated Iron / Steel",
    dimensions: "Multiple Sizes Available",
    warranty: "As per Product",

    features: [
      "Strong Metal Construction",
      "Secure Storage",
      "Multiple Sizes",
      "Suitable for Offices & Homes",
      "Low Maintenance",
    ],
  },

  {
    id: 31,
    name: "Angle Rack",
    slug: "angle-rack",

    department: "interior",
    subCategory: "Angle Racks",

    brand: "Khandelwal Furniture",
    availability: "In Store & On Order",

    featured: false,

    price: "Contact for Price",

    image: angleRack,
    gallery: [angleRack],

    description:
      "Practical angle racks designed for storage and display in homes, shops, offices, warehouses and other utility spaces.",

    material: "Iron / Metal",
    dimensions: "Custom Sizes Available",
    warranty: "As per Product",

    features: [
      "Strong Metal Construction",
      "Multiple Sizes",
      "Storage & Display Use",
      "Custom Sizes Available",
      "Suitable for Commercial & Home Use",
    ],
  },
];