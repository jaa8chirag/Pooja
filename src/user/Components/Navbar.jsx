// src/user/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/puja", label: "Puja" },
    { to: "/katha", label: "Katha" },
    { to: "/products", label: "Products" },
    { to: "/pind_dan", label: "Pind Dan" },
  ];

  const galleryItems = [
    "Temple Gallery",
    "Festival Gallery",
    "Aarti Photos",
    "Spiritual Events",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/img/download.jpg" alt="Pooja Mandir" className="h-9 w-9" />
          <span className="text-lg font-semibold">Pooja Mandir</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-medium"
                    : "hover:text-yellow-300"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Gallery */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-yellow-300 flex items-center gap-1"
            >
              Gallery <span className="text-xs">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg">
                {galleryItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to="/gallery"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <select className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <div className="cursor-pointer">👤</div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-5 pb-5">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300"
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Gallery */}
            <details className="cursor-pointer">
              <summary className="hover:text-yellow-300">Gallery</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                {galleryItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to="/gallery"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-orange-400"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </details>

            <select className="bg-gray-700 text-white px-2 py-1 rounded w-fit">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
