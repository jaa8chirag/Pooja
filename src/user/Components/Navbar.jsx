import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User, ShieldCheck, ChevronDown, LogIn, ChevronRight, Home, Image, Settings } from "lucide-react";

const NAVBAR_HEIGHT = 72;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/puja", label: "Puja", icon: <User size={18} /> },
    { to: "/katha", label: "Katha", icon: <User size={18} /> },
    { to: "/products", label: "Products", icon: <Settings size={18} /> },
    { to: "/pind_dan", label: "Pind Dan", icon: <Settings size={18} /> },
  ];

  const galleryItems = ["Temple", "Festivals", "Aarti", "Events"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-[60] bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-[72px]">
          
          {/* LOGO - Responsive Text */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0">
            <img
              src="/img/download.jpg"
              alt="Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl shadow-md group-hover:rotate-6 transition-transform"
            />
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#3b2a1a] whitespace-nowrap">
              Pooja Mandir
            </span>
          </div>

          {/* DESKTOP NAV - Switches to Mobile Menu on tablets/small laptops (lg breakpoint) */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[16px] font-bold tracking-tight transition-all relative py-1 ${
                    isActive ? "text-orange-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-500" : "text-[#3b2a1a]/80 hover:text-orange-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <li 
              className="relative py-6 cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className={`flex items-center gap-1 text-[16px] font-bold transition-colors ${dropdownOpen ? 'text-orange-600' : 'text-[#3b2a1a]/80'}`}>
                Gallery <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-52 bg-white rounded-2xl shadow-2xl border border-orange-50 py-3 animate-in fade-in slide-in-from-top-1 z-50">
                  {galleryItems.map((item, i) => (
                    <NavLink key={i} to="/gallery" className="block px-6 py-2 text-sm font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600">
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* DESKTOP BUTTONS - Hidden on tablets/small laptops */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <button className="flex items-center gap-2 text-[15px] font-bold text-[#3b2a1a] hover:text-orange-600 transition-colors">
              <LogIn size={18} /> Sign In
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[15px] font-bold rounded-full shadow-lg hover:shadow-orange-200 transition-all active:scale-95">
              Partner Sign In
            </button>
          </div>

          {/* TABLET & MOBILE TOGGLE - Shows up on 'lg' screens and down */}
          <button 
            className="lg:hidden p-2.5 rounded-xl bg-orange-50 text-orange-600 active:scale-90 transition-transform shadow-sm border border-orange-100" 
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* ================= PREMIUM MOBILE DRAWER ================= */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-[70] bg-[#3b2a1a]/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`} 
        onClick={() => setMenuOpen(false)} 
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] z-[80] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-gray-50 bg-orange-50/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg">
                <User size={24} />
              </div>
              <div>
                <p className="font-bold text-[#3b2a1a]">Jai Shree Ram!</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-orange-600">Guest Profile</p>
              </div>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 bg-white rounded-full shadow-md text-gray-400">
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 px-4 py-8 overflow-y-auto space-y-2">
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Navigation</p>
            {navItems.map((item, i) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between p-4 rounded-2xl font-bold transition-all
                  ${isActive ? "bg-orange-500 text-white shadow-lg shadow-orange-100" : "text-gray-600 hover:bg-orange-50"}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={({ isActive }) => isActive ? "text-white" : "text-orange-400"}>
                    {item.icon}
                  </span>
                  {item.label}
                </div>
                <ChevronRight size={18} className="opacity-40" />
              </NavLink>
            ))}

            {/* Gallery in Mobile */}
            <details className="group px-4 py-2">
              <summary className="flex items-center justify-between list-none cursor-pointer font-bold text-gray-600">
                <div className="flex items-center gap-4">
                  <Image size={18} className="text-orange-400" />
                  Gallery
                </div>
                <ChevronDown size={18} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-4 ml-8 space-y-4 border-l-2 border-orange-100 pl-4">
                {galleryItems.map((item, i) => (
                  <NavLink key={i} to="/gallery" onClick={() => setMenuOpen(false)} className="block text-sm font-bold text-gray-500">
                    {item}
                  </NavLink>
                ))}
              </div>
            </details>
          </div>

          {/* Mobile Footer Buttons */}
          <div className="p-6 border-t border-gray-50 bg-gray-50/50 flex flex-col gap-3">
             <button className="w-full py-4 bg-white border-2 border-orange-200 text-orange-600 font-bold rounded-2xl flex items-center justify-center gap-2">
                <LogIn size={18} /> Sign In
             </button>
             <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <ShieldCheck size={18} /> Partner Sign In
             </button>
          </div>
        </div>
      </div>

      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
};

export default Navbar;