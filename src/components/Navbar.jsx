import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: 'home' },
    { id: 2, text: 'resources' },
    { id: 3, text: 'about' },
    { id: 4, text: 'contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-blue-600 tracking-wide cursor-pointer">
          Scholar<span className="text-black">Connect</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer capitalize text-gray-700 hover:text-blue-600 font-medium"
            >
              <a href={`/#${text}`} className="capitalize">
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col bg-white px-6 py-4 shadow-md">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="py-2 border-b border-gray-200 cursor-pointer text-gray-700 hover:text-blue-600 font-medium capitalize"
            >
              <a href={`/#${text}`} className="capitalize">
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
