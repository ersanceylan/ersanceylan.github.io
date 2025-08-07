"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  const sections = [
    { name: "Home", id: "me" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-0 right-0 z-50 hidden lg:block"
    >
      <div className="flex justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20">
          <div className="flex space-x-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-green-500/70 hover:text-green-500 hover:bg-white/10 hover:scale-105"
                aria-label={`Go to ${section.name} section`}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// Mobile Navigation with Section Titles
export function MobileNavigation() {
  const sections = [
    { name: "Home", id: "me" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-0 right-0 z-50 lg:hidden"
    >
      <div className="flex justify-center px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-2 shadow-lg border border-white/20">
          <div className="flex space-x-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 text-green-500/70 hover:text-green-500 hover:bg-white/10 hover:scale-105"
                aria-label={`Go to ${section.name} section`}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
