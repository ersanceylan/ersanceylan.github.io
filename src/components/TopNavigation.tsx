"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import BackNavigation from "./BackNavigation";
import HamburgerMenu from "./HamburgerMenu";

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
      <BackNavigation
        onMenuToggle={handleMenuToggle}
        showText={shouldShowText}
      />
      <HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
    </>
  );
}
