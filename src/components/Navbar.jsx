import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#8A1538] text-white py-4 px-3 sm:py-3 md:py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <img src="/assets/logo.svg" alt="Educare Logo" className="h-8 sm:h-10" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm lg:text-base">
          <a href="/" className="font-dm-sans hover:opacity-80 transition-opacity">About us</a>
          <div className="relative group">
            <a href="/" className="font-dm-sans hover:opacity-80 flex items-center transition-opacity">
              Courses <span className="ml-1">▾</span>
            </a>
          </div>
          <a href="/" className="font-dm-sans hover:opacity-80 transition-opacity">Careers</a>
          <a href="/" className="font-dm-sans hover:opacity-80 transition-opacity">News & Blog</a>
          <a href="/" className="font-dm-sans hover:opacity-80 transition-opacity">Payments</a>
        </div>

        {/* Contact Info Desktop */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <span className="text-xs lg:text-sm font-dm-sans">
                <span className="mr-1 lg:mr-2">📞</span>+974 55555 3456
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xs lg:text-sm font-dm-sans">
                <span className="mr-1 lg:mr-2">✉️</span>info@educare.qa
              </span>
            </div>
          </div>

          <button className="bg-white text-[#8A1538] px-3 py-1.5 lg:px-4 lg:py-2 rounded-md font-dm-sans font-medium hover:bg-gray-100 transition text-sm">
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } mt-3 px-3`}
      >
        <a href="#about" className="block py-2 font-dm-sans text-sm">About us</a>
        <a href="#courses" className="block py-2 font-dm-sans text-sm">Courses</a>
        <a href="#careers" className="block py-2 font-dm-sans text-sm">Careers</a>
        <a href="#news" className="block py-2 font-dm-sans text-sm">News & Blog</a>
        <a href="#payments" className="block py-2 font-dm-sans text-sm">Payments</a>
        <div className="mt-3 pt-3 border-t border-white/20">
          <p className="text-xs sm:text-sm font-dm-sans">📞 +974 55555 3456</p>
          <p className="text-xs sm:text-sm font-dm-sans mt-2">✉️ info@educare.qa</p>
          <button className="mt-3 w-full bg-white text-[#8A1538] px-3 py-1.5 rounded-md font-dm-sans font-medium text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
