"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContactChannelProps {
  icon: ReactNode;
  title: string;
  href?: string;
  displayText: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
  hoverTextColor: string;
  delay?: number;
  isExternal?: boolean;
}

export default function ContactChannel({
  icon,
  title,
  href,
  displayText,
  bgColor,
  iconColor,
  textColor,
  hoverTextColor,
  delay = 0,
  isExternal = true,
}: ContactChannelProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center space-x-6 p-2 rounded-xl hover:shadow-lg transition-all duration-300"
    >
      <div className={`p-2 flex-1`}>
        {/* <div className={`${iconColor} text-2xl`}>{icon}</div> */}
        <div
          className={`text-black dark:text-white text-4xl justify-end flex items-center justify-end`}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        {href ? (
          <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`${textColor} ${hoverTextColor} transition-colors text-lg font-medium`}
          >
            {displayText}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {displayText}
          </p>
        )}
      </div>
    </motion.div>
  );

  return content;
}
