"use client";

import { motion } from "framer-motion";
import { FaChevronLeft, FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "./I18nProvider";

interface BackNavigationProps {
  href?: string;
  onClick?: () => void;
  showText?: boolean;
  text?: string;
  className?: string;
  onMenuToggle?: () => void;
}

export default function BackNavigation({
  href = "/",
  onClick,
  showText = false,
  text = "Back",
  className = "",
  onMenuToggle,
}: BackNavigationProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Get the appropriate translation namespace based on current page
  const getNamespace = () => {
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    if (pathname === "/me") return "me";
    return "navigation";
  };

  const t = useTranslations(getNamespace());

  // Get localized back text based on page
  const getBackText = () => {
    if (text !== "Back") return text; // Use custom text if provided
    if (pathname === "/projects" || pathname === "/contact") {
      return t("backToHome") || "Back to Home";
    }
    return "Back";
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 ${className}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Back Button - Hidden on home page */}
          {!isHomePage && (
            <>
              {onClick ? (
                <button
                  onClick={handleClick}
                  className="inline-flex items-center px-3 py-2 text-black dark:text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  <FaChevronLeft className="text-lg" />
                  {showText && (
                    <span className="ml-2 font-medium">{getBackText()}</span>
                  )}
                </button>
              ) : (
                <a
                  href={href}
                  className="inline-flex items-center px-3 py-2 text-black dark:text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  <FaChevronLeft className="text-lg" />
                  {showText && (
                    <span className="ml-2 font-medium">{getBackText()}</span>
                  )}
                </a>
              )}
            </>
          )}

          {/* Empty div to maintain layout when back button is hidden */}
          {isHomePage && <div></div>}

          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            className="inline-flex items-center px-3 py-2 text-black dark:text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            aria-label="Toggle menu"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
