import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-200 text-gray-700 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Pooja Mandir</h2>
          <p className="text-gray-600">
            Connecting devotees with temples, online puja booking, astrology tools, and spiritual guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="/puja" className="hover:text-orange-500 transition">Puja</a></li>
            <li><a href="/temples" className="hover:text-orange-500 transition">Temples</a></li>
            <li><a href="/astro-tools" className="hover:text-orange-500 transition">Astro Tools</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:info@sri-mandir.com" className="hover:text-orange-500">info@Pooja-mandir.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="hover:text-orange-500">+91 123 456 7890</a></p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500 transition text-2xl">🌐</a>
            <a href="#" className="hover:text-orange-500 transition text-2xl">📘</a>
            <a href="#" className="hover:text-orange-500 transition text-2xl">🐦</a>
            <a href="#" className="hover:text-orange-500 transition text-2xl">📸</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pooja Mandir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
