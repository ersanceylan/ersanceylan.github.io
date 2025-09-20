"use client";

import { useI18n, useTranslations } from "@/components/I18nProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ersanBlackImage from "../../assets/images/ersan_black.png";

export default function WhoPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isLoaded } = useI18n();
  const t = useTranslations("me");

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
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="pt-20 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with smaller image */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div
                className={`transition-all duration-500 ease-out ${
                  imageLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                <Image
                  src={ersanBlackImage}
                  alt="Ersan Ceylan"
                  width={200}
                  height={200}
                  className="object-contain mx-auto rounded-full"
                  priority
                />
              </div>
            </motion.div>

            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-black dark:text-white mb-4"
            >
              {t("title")}
            </motion.h1> */}
          </div>

          {/* Biography Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200"
          >
            <div className="space-y-6 text-lg leading-relaxed">
              {/* <p className="text-xl font-medium mb-6">{t("subtitle")}</p> */}

              <p className="text-2xl text-center p-4 pt-0 pb-0 leading-relaxed tracking-tighter">
                {/* {t("bio1")} */}
                Merhaba! <br /> Ben Ersan Ceylan. <br /> 1988 yılında İzmir&apos;de
                doğdum.
              </p>
              <p className="text-2xl text-center p-4 pt-0 pb-0 leading-relaxed tracking-tighter">
                2008 yılında üniversite için geldiğim Muğla&apos;da yaşıyorum.
              </p>

              <p className="text-2xl text-center p-4 pt-0 pb-0 leading-relaxed tracking-tighter">
                Elektronik ve Bilgisayar Öğretmenliği lisansını 2013 yılında
                Muğla Üniversitesinden aldım ve yazılım dünyasına giriş yaptım.
              </p>

              <p className="text-2xl text-center p-4 pt-0 pb-0 leading-relaxed tracking-tighter">
                Kariyerim boyunca birçok şirkette ve birçok projede çalıştım.
                Başta backend olmak üzere, frontend ve mobil uygulama geliştirme
                konusunda uzmanlaştım.
              </p>

              {/* <p>{t("bio1")}</p>

            <p>{t("bio2")}</p>

            <p>{t("bio3")}</p>

            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <p className="italic text-gray-700 dark:text-gray-300">
                {t("quote")}
              </p>
            </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
