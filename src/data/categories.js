import livingRoom from "../assets/images/categories/living-room.jpg";
import bedroom from "../assets/images/categories/bedroom.jpg";
import dining from "../assets/images/categories/dining.jpg";
import office from "../assets/images/categories/office.jpg";
import plastic from "../assets/images/categories/plastic.jpg";
import mattress from "../assets/images/categories/mattress.jpg";
import interior from "../assets/images/categories/interior.jpg";

export const categories = [
  {
    id: "living-room",
    name: "Living Room",
    description:
      "Sofa Sets, Recliners, TV Units, Center Tables and more.",
    image: livingRoom,
    href: "/products?category=living-room",

    subCategories: [
      "Sofa Sets",
      "Recliner Sofas",
      "TV Units",
      "Center Tables",
      "Temple Units",
    ],
  },

  {
    id: "bedroom",
    name: "Bedroom",
    description:
      "Beds, Wardrobes, Dressing Tables and Bedroom Storage.",
    image: bedroom,
    href: "/products?category=bedroom",

    subCategories: [
      "Beds",
      "Wardrobes",
      "Dressing Tables",
      "Bedside Tables",
      "Shoe Racks",
    ],
  },

  {
    id: "dining",
    name: "Dining",
    description:
      "Dining Tables, Dining Chairs and Complete Dining Sets.",
    image: dining,
    href: "/products?category=dining",

    subCategories: [
      "Dining Tables",
      "Dining Chairs",
      "Dining Sets",
    ],
  },

  {
    id: "office",
    name: "Office & Institutional",
    description:
      "Furniture for offices, schools and professional spaces.",
    image: office,
    href: "/products?category=office",

    subCategories: [
      "Office Workstations",
      "Computer Tables",
      "Office Chairs",
      "Bookshelves",
      "Staff Room Furniture",
      "School Study Sets",
    ],
  },

  {
    id: "plastic",
    name: "Plastic Furniture",
    description:
      "Plastic furniture from trusted brands including Nilkamal, Italica and Mango.",
    image: plastic,
    href: "/products?category=plastic",

    subCategories: [
      "Plastic Chairs",
      "Plastic Stools",
      "Plastic Dining Tables",
      "Plastic Wardrobes",
      "Multipurpose Racks",
      "Plastic Shoe Racks",
    ],
  },

  {
    id: "mattress",
    name: "Mattresses",
    description:
      "Mattresses from trusted brands including Kurlon and Century.",
    image: mattress,
    href: "/products?category=mattress",

    subCategories: [
      "Kurlon Mattresses",
      "Century Mattresses",
    ],
  },

  {
    id: "interior",
    name: "Interior & Utility",
    description:
      "Flooring, wallpapers, carpets and practical storage solutions.",
    image: interior,
    href: "/products?category=interior",

    subCategories: [
      "PVC Flooring",
      "Carpet Flooring",
      "Wallpapers",
      "Foam Sheets",
      "Iron Almirahs",
      "Angle Racks",
    ],
  },
];