"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/components/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeToggle from "./DarkModeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

interface HamburgerMenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function HamburgerMenu({
  isOpen = false,
  onToggle,
}: HamburgerMenuProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const t = useTranslations();

  const isMenuOpen = onToggle ? isOpen : internalIsOpen;

  const toggleMenu = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const closeMenu = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(false);
    }
  };

  const menuItems = [
    { name: t("homepage.whoAmI") || "Home", href: "/" },
    { name: t("homepage.myProjects") || "Projects", href: "/projects" },
    { name: t("homepage.contact") || "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Blurred Background Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 gap-2 fixed justify-between inset-0 z-[9999] bg-black/50 backdrop-blur-md flex flex-col"
          >
            <button
              onClick={closeMenu}
              className="text-white hover:text-red-400 transition-colors duration-300 text-4xl transform absolute top-4 right-4"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col justify-center items-center h-full p-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-6xl mb-2 font-black drop-shadow-lg font-slab 
            text-white tracking-tighter
            underline underline-offset-8 text-shadow-red-500
            transition-colors duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex-1 flex flex-col justify-center items-center h-full p-2">
              <div className="mb-2 p-2">
                <LanguageSwitcher />
              </div>
              <div className="mt-2 mb-2 p-2">
                <DarkModeToggle />
              </div>
            </div>

            {/* Close Button - Bottom center */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
