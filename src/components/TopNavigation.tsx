"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { useTranslations } from "./I18nProvider";

export default function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Show text on projects and contact pages
  const shouldShowText = pathname === "/projects" || pathname === "/contact";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50`}
      >
        <div className="flex justify-between items-center container mx-auto px-4 py-3">
          <BackButton />

          <Title />

          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            className="inline-flex items-center px-3 py-2 text-black dark:text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            aria-label="Toggle menu"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </motion.div>
      <HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
    </>
  );
}

const BackButton = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <div className="w-10"></div>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-3 py-2 text-black dark:text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
    >
      <FaChevronLeft className="text-lg" />
    </button>
  );
};

const Title = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getNamespace = () => {
    // Normalize pathname by removing trailing slash
    const normalizedPath =
      pathname.endsWith("/") && pathname !== "/"
        ? pathname.slice(0, -1)
        : pathname;

    if (normalizedPath === "/projects") return "projects";
    if (normalizedPath === "/contact") return "contact";
    if (normalizedPath === "/me") return "me";
    return "homepage";
  };

  const t = useTranslations(getNamespace());

  if (isHomePage) {
    return (
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-bold text-black dark:text-white">
          ersanceylan
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-black dark:text-white">
        {t("title")}
      </h1>
    </div>
  );
};
