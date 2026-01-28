import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-orange-600">
              Pooja Mandir
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Book pujas, explore temples, and access trusted astrology tools —
              all in one spiritual platform.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-orange-600" href="/">Home</a></li>
              <li><a className="hover:text-orange-600" href="/puja">Puja</a></li>
              <li><a className="hover:text-orange-600" href="/temples">Temples</a></li>
              <li><a className="hover:text-orange-600" href="/astro-tools">Astro Tools</a></li>
              <li><a className="hover:text-orange-600" href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 mb-3">
              Contact
            </h3>
            <p className="text-sm text-gray-600">
              info@pooja-mandir.com
            </p>
            <p className="text-sm text-gray-600 mt-1">
              +91 123 456 7890
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a className="hover:text-orange-600" href="#">Facebook</a>
              <a className="hover:text-orange-600" href="#">Twitter</a>
              <a className="hover:text-orange-600" href="#">Instagram</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-orange-200 mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Pooja Mandir. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
