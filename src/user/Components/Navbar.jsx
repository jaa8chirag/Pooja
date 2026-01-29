import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NAVBAR_HEIGHT = 72;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[60] bg-white/20 backdrop-blur-3xl shadow-md">
        <div className="flex items-center justify-between px-5 py-4 h-[72px]">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/img/download.jpg" alt="Pooja Mandir" className="h-9 w-9 rounded" />
            <span className="text-lg font-semibold text-black">
              Pooja Mandir
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 text-black md:justify-center ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 text-xl"
                    : "hover:text-orange-600 text-md"
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* GALLERY */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-orange-600"
              >
                Gallery <span className="text-xs">▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white/80 backdrop-blur-xl text-black rounded-xl shadow-lg">
                  {galleryItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to="/gallery"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-white/60 hover:text-orange-600"
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4 text-black">
            <select className="bg-white/40 backdrop-blur-md px-2 py-1 rounded text-sm border border-white/40">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <div className="text-xl cursor-pointer">👤</div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed left-0 right-0 bottom-0 top-[72px] z-40 bg-white/40 backdrop-blur-md"
        />
      )}

      {/* RIGHT SLIDE DRAWER */}
      <div
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-72 z-50
        bg-white/30 backdrop-blur-2xl shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* DRAWER HEADER */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-white/40 text-black">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <p className="text-sm font-medium">Guest User</p>
              <p className="text-xs opacity-70">View profile</p>
            </div>
          </div>

          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ×
          </button>
        </div>

        {/* DRAWER MENU */}
        <ul className="flex flex-col gap-5 px-5 py-6 overflow-y-auto text-black">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-600"
            >
              {item.label}
            </NavLink>
          ))}

          {/* GALLERY */}
          <details className="cursor-pointer">
            <summary className="hover:text-orange-600">
              Gallery
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              {galleryItems.map((item, i) => (
                <NavLink
                  key={i}
                  to="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-600"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </details>

          {/* LANGUAGE */}
          <div className="pt-4 border-t border-black">
            <p className="text-xs opacity-70 mb-1 text-black">
              Language
            </p>
            <select className=" backdrop-blur-md text-black px-2 py-1 rounded w-full border border-black/40">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

        </ul>
      </div>

      {/* SPACER */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
};

export default Navbar;
