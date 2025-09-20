"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { useI18n, useTranslations } from "@/components/I18nProvider";
import ContactChannel from "@/components/ContactChannel";
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

export default function ContactPage() {
  const { isLoaded } = useI18n();
  const t = useTranslations("contact");

  // Show loading state while i18n is loading
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 py-20 pt-28">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl p-8 shadow-lg">
            <div className="space-y-8 max-w-2xl mx-auto">
              {/* WhatsApp */}
              {contact.phone && (
                <ContactChannel
                  icon={<FaWhatsapp />}
                  title={t("whatsapp")}
                  href={`https://wa.me/${contact.phone?.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  displayText={contact.phone}
                  bgColor="bg-green-100 dark:bg-green-900"
                  iconColor="text-green-600 dark:text-green-400"
                  textColor="text-green-600 dark:text-green-400"
                  hoverTextColor="hover:text-green-700 dark:hover:text-green-300"
                  delay={0.3}
                />
              )}

              {/* Telegram */}
              {contact.telegram && (
                <ContactChannel
                  icon={<FaTelegram />}
                  title={t("telegram")}
                  href={`https://t.me/${contact.telegram}`}
                  displayText={`@${contact.telegram}`}
                  bgColor="bg-blue-100 dark:bg-blue-900"
                  iconColor="text-blue-600 dark:text-blue-400"
                  textColor="text-blue-600 dark:text-blue-400"
                  hoverTextColor="hover:text-blue-700 dark:hover:text-blue-300"
                  delay={0.4}
                />
              )}

              {/* LinkedIn */}
              <ContactChannel
                icon={<FaLinkedin />}
                title={t("linkedin")}
                href="https://www.linkedin.com/in/ersanceylan/"
                displayText="@ersanceylan"
                bgColor="bg-blue-100 dark:bg-blue-900"
                iconColor="text-blue-700 dark:text-blue-400"
                textColor="text-blue-700 dark:text-blue-400"
                hoverTextColor="hover:text-blue-800 dark:hover:text-blue-300"
                delay={0.5}
              />

              {/* GitHub */}
              <ContactChannel
                icon={<FaGithub />}
                title={t("github")}
                href="https://github.com/ersanceylan"
                displayText="@ersanceylan"
                bgColor="bg-gray-100 dark:bg-gray-700"
                iconColor="text-gray-800 dark:text-gray-300"
                textColor="text-gray-800 dark:text-gray-300"
                hoverTextColor="hover:text-gray-900 dark:hover:text-gray-200"
                delay={0.6}
              />

              {/* Instagram */}
              <ContactChannel
                icon={<FaInstagram />}
                title={t("instagram")}
                href="https://www.instagram.com/ersanceylann/"
                displayText="@ersanceylann"
                bgColor="bg-pink-100 dark:bg-pink-900"
                iconColor="text-pink-600 dark:text-pink-400"
                textColor="text-pink-600 dark:text-pink-400"
                hoverTextColor="hover:text-pink-700 dark:hover:text-pink-300"
                delay={0.7}
              />

              {/* YouTube */}
              <ContactChannel
                icon={<FaYoutube />}
                title={t("youtube")}
                href="https://www.youtube.com/@ersanceylan"
                displayText="@ersanceylan"
                bgColor="bg-red-100 dark:bg-red-900"
                iconColor="text-red-600 dark:text-red-400"
                textColor="text-red-600 dark:text-red-400"
                hoverTextColor="hover:text-red-700 dark:hover:text-red-300"
                delay={0.8}
              />

              {/* Location */}
              <ContactChannel
                icon={<FaMapMarker />}
                title={t("location")}
                displayText={contact.location}
                bgColor="bg-gray-100 dark:bg-gray-700"
                iconColor="text-gray-600 dark:text-gray-400"
                textColor="text-gray-600 dark:text-gray-400"
                hoverTextColor=""
                delay={0.9}
                isExternal={false}
              />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
              {t("workTogether")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              {t("workTogetherSubtitle")}
            </p>
            <a
              href="https://wa.me/905546842627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 hover:scale-105 transform font-semibold"
            >
              <FaWhatsapp className="mr-3 text-xl" />
              {t("startConversation")}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
