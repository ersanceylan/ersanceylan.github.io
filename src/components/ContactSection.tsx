"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-8xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get in touch
          </h2>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-white dark:bg-slate-900 p-8 w-full flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="space-y-6 flex flex-col items-center">
                {contact.phone && (
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-xl font-bold">
                      <FaWhatsapp className="text-green-500 size-16" />
                    </div>
                    <div>
                      <p className="text-lg text-slate-500 dark:text-slate-400">
                        Whatsapp
                      </p>
                      <a
                        href={`https://wa.me/${contact.phone?.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        target="_blank"
                        className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contact.telegram && (
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-xl font-bold">
                      <FaTelegram className="text-blue-500 size-16" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Telegram
                      </p>
                      <a
                        href={`https://t.me/${contact.telegram}`}
                        target="_blank"
                        className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                      >
                        {contact.telegram}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg text-xl font-bold">
                    <FaLinkedin className="text-slate-500 size-16" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                      Linkedin
                    </p>
                    <a
                      href={`https://www.linkedin.com/in/ersanceylan/`}
                      target="_blank"
                      className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                      @ersanceylan
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg text-xl font-bold">
                    <FaGithub className="text-slate-500 size-16" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                      Github
                    </p>
                    <a
                      href={`https://github.com/ersanceylan`}
                      target="_blank"
                      className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                      @ersanceylan
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg text-xl font-bold">
                    <FaInstagram className="text-pink-500 size-16" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Instagram
                    </p>
                    <a
                      href={`https://www.instagram.com/ersanceylann/`}
                      target="_blank"
                      className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                      @ersanceylann
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg text-xl font-bold">
                    <FaYoutube className="text-red-500 size-16" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Youtube
                    </p>
                    <a
                      href={`https://www.youtube.com/@ersanceylan`}
                      target="_blank"
                      className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                      @ersanceylan
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg text-xl font-bold">
                    <FaMapMarker className="text-slate-500 size-16" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-xl text-slate-900 dark:text-white">
                      {contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
