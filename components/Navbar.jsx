import { useState } from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <Image src="/zingify.png" alt="Logo" width={100} height={100} />
                <span className="font-semibold text-gray-500 text-lg"></span>
              </a>
            </div>
          </div>
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-2 px-2 text-gray-600 hover:text-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="py-2 px-2 text-gray-600 hover:text-blue-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="py-2 px-2 text-gray-600 hover:text-pink-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="py-2 px-2 text-gray-600 hover:text-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden mt-1 flex w-12 h-12 rounded-full  bg-slate-600">
            <button className="mobile-menu-button items-center p-3" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} text-gray-500 `}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <FaFacebookF className="inline mr-2" />Facebook
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <FaTwitter className="inline mr-2" />Twitter
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <FaInstagram className="inline mr-2" />Instagram
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 ">
          <FaLinkedinIn className="inline mr-2 " />LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
