import { NavLink } from "react-router-dom";
import { siteConfig } from "../../constants/siteConfig";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold text-[#7A4E2D]">
             {siteConfig.name}
                </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 font-medium">
            {siteConfig.navLinks.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `transition-colors duration-200 ${
                          isActive
                           ? "text-[#7A4E2D] font-semibold"
                            : "text-gray-700 hover:text-[#7A4E2D]"
                          }`
                     }
                  >
                     {item.label}
                </NavLink>
             ))}

        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
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