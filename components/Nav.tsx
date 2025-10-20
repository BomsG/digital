"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "@/public/logo.png";

interface NavItem {
  id: number;
  list: string;
}

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 1, list: "MAIN" },
    { id: 2, list: "GALLERY" },
    { id: 3, list: "PROJECTS" },
    { id: 4, list: "CERTIFICATIONS" },
    { id: 5, list: "CONTACTS" },
  ];

  return (
    <header className="relative mt-5 mb-10 ml-30 flex items-center justify-between">
      <Image src={logo} alt="logo" priority className="w-auto h-10" />

      {/* Desktop Navigation */}
      <nav className="hidden md:block absolute left-1/2 -translate-x-[40%]">
        <ul className="flex gap-10 text-[16px] tracking-wider ">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer text-gray-900 hover:text-gray-600 transition-colors"
            >
              {item.list}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 text-gray-900"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <IoMdClose size={28} /> : <CiMenuBurger size={28} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium text-gray-900 z-40"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-gray-600"
              >
                {item.list}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
