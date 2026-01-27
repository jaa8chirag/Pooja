// src/user/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const galleryItems = [
    { name: "Temple Gallery", link: "/gallery" },
    { name: "Festival Gallery", link: "/gallery" },
    { name: "Aarti Photos", link: "/gallery" },
    { name: "Spiritual Events", link: "/gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 text-white px-20 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/img/download.jpg" alt="Sri Mandir" className="h-10 w-10" />
        <span className="text-xl font-bold">Pooja Mandir</span>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex space-x-6 gap-5 items-center">
        {[
          { to: "/", label: "Home" },
          { to: "/puja", label: "Puja" },
          { to: "/katha", label: "Katha" },
          { to: "/products", label: "Products" },
        ].map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}



        <li className="relative">
          {/* Gallery Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-yellow-300 font-medium flex items-center gap-1"
          >
            Gallery
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl z-50">
              <ul className="py-2">
                {galleryItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.link}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li>
          <NavLink
            to="/pind_dan"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
            }
          >
            Pind Dan
          </NavLink>
        </li>
      </ul>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <select className="bg-gray-700 text-white px-2 py-1 rounded">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <div className="text-2xl cursor-pointer">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
