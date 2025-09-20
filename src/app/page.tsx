"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ersanBlackImage from "../assets/images/ersan_black.png";
import { motion } from "framer-motion";
import { useTranslations, useI18n } from "@/components/I18nProvider";

export default function NewPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isLoaded } = useI18n();
  const t = useTranslations("homepage");

  const links = [
    { name: t("whoAmI"), href: "/me" },
    { name: t("myProjects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state while i18n is loading
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <div className="animate-spin h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white dark:bg-black items-center justify-evenly h-screen w-full relative transition-colors duration-300 ">
      {/* Image in the center with slide from bottom and fade-in animation */}

      <div
        className={`transition-all duration-500 ease-out ${
          imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <Image
          src={ersanBlackImage}
          alt="Ersan Ceylan"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>

      <div className="space-y-6 w-full max-w-4xl px-8 relative z-10  flex flex-col items-center justify-center transition-all duration-300">
        {links.map((link) => (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-black drop-shadow-lg font-slab 
            text-black dark:text-white tracking-tighter
            underline underline-offset-8 text-shadow-red-500
            transition-colors duration-300 hover:scale-105"
            href={link.href}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
