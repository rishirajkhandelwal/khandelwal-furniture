import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { siteConfig } from "../../constants/siteConfig";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold text-[#7A4E2D] sm:text-2xl"
        >
          {siteConfig.name}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 font-medium md:flex">
          {siteConfig.navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[#7A4E2D]"
                    : "text-gray-700 hover:text-[#7A4E2D]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Desktop WhatsApp Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
          >
            Get Best Price
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {siteConfig.navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-[#7A4E2D]/10 font-semibold text-[#7A4E2D]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile WhatsApp Button */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-lg bg-green-600 px-5 py-3 text-center font-medium text-white transition hover:bg-green-700"
            >
              Get Best Price on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}