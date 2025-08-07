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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-8xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            SOCIALS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div> */}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Get in touch
              </h3>

              <div className="space-y-6">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
