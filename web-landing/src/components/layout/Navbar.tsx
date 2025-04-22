import { useState } from "react";
import { FaInfoCircle, FaTags, FaPhoneAlt, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-800">
            Gudang<span className="text-blue-600">KU</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Tentang
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Harga
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Kontak
            </a>
            <a
              href="/login"
              className="bg-indigo-600 text-white px-7 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              Login
            </a>
          </div>

          {/* Mobile Burger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="mb-12 mt-2 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Gudang<span className="text-blue-600">KU</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <a
            href="#about"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaInfoCircle className="text-blue-600" />
            <span>Tentang</span>
          </a>
          <a
            href="#pricing"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTags className="text-blue-600" />
            <span>Harga</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaPhoneAlt className="text-blue-600" />
            <span>Kontak</span>
          </a>
          <a
            href="/login"
            className="flex items-center justify-center mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            <FaSignInAlt className="mr-2" />
            <span>Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
