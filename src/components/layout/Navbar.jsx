import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#7A4E2D]">
          Khandelwal Furniture
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 font-medium">

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
        >
          Get Best Price
        </a>

      </nav>
    </header>
  );
}