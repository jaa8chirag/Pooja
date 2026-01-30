import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User, ShieldCheck, ChevronDown, LogIn } from "lucide-react";

const NAVBAR_HEIGHT = 72;

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
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[72px]">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 group">
            <img
              src="/img/download.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-xl shadow-md transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-serif font-bold text-[#3b2a1a]">
              Pooja Mandir
            </span>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[16px] font-bold tracking-tight transition-all duration-300 ${
                    isActive ? "text-orange-600 border-b-2 border-orange-500 pb-1" : "text-[#3b2a1a]/80 hover:text-orange-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* GALLERY DROPDOWN (Hover Logic) */}
            <li 
              className="relative py-6" // Added padding to bridge the gap
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 text-[16px] font-bold transition-colors ${dropdownOpen ? 'text-orange-600' : 'text-[#3b2a1a]/80'}`}>
                Gallery <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-52 bg-white rounded-2xl shadow-2xl border border-orange-50 py-2 animate-in fade-in slide-in-from-top-1">
                  {galleryItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to="/gallery"
                      className="block px-5 py-3 text-sm font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="hidden md:flex items-center gap-5">
            <button className="flex items-center gap-2 text-[15px] font-bold text-[#3b2a1a] hover:text-orange-600 transition-colors">
              <LogIn size={18} />
              Sign In
            </button>

            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[15px] font-bold rounded-full shadow-lg shadow-orange-100 hover:shadow-orange-200 hover:-translate-y-0.5 transition-all">
              Partner Sign In
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden p-2 text-orange-600" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER (Simplified) */}
      <div className={`fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-[75%] z-[80] bg-white transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <button className="self-end p-2 mb-4" onClick={() => setMenuOpen(false)}><X size={28} /></button>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="text-xl font-bold text-[#3b2a1a]" onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
};

export default Navbar;