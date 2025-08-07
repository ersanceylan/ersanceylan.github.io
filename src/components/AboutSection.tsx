"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I&apos;m passionate about creating digital experiences that make a
            difference. With years of experience in full-stack development, I
            bring ideas to life through clean, efficient code and thoughtful
            design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in software development began with curiosity and has
              evolved into a passion for solving complex problems through
              technology. I specialize in building scalable web applications
              that prioritize user experience and performance.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or mentoring
              aspiring developers. I believe in continuous learning and staying
              up-to-date with the latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  50+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-500 pl-6 pb-6"
                >
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {exp.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {exp.duration}
                    </p>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      {exp.description.slice(0, 2).map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
