"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FaDownload, FaEye } from "react-icons/fa";

export default function MeSection() {
  return (
    <section
      id="me"
      className="section bg-gradient-to-br from-slate-50 via-green-50 to-slate-50"
    >
      <div className="container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-64 h-64 mx-auto"
          >
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={256}
              height={256}
              objectFit="cover"
              className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-green-950 to-green-400 bg-clip-text text-transparent rounded-lg p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-green-800 font-light rounded-lg p-2 bg-gradient-to-r from-green-950 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-teal-800 max-w-2xl mx-auto leading-relaxed rounded-lg p-2 bg-gradient-to-r from-green-950 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              <FaEye className="w-4 h-4" />
              View My Work
            </button>
            <button className="px-8 py-3 border border-green-600 hover:border-green-700 rounded-lg font-medium transition-colors text-green-600 hover:text-green-700 duration-200 backdrop-blur-sm flex items-center gap-2">
              <FaDownload className="w-4 h-4" />
              Resume
            </button>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <p className="text-sm text-white/60 mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}
