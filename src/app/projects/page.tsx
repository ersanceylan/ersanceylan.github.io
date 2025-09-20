"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { useState } from "react";
import MediaGallery from "@/components/MediaGallery";
import { useI18n, useTranslations } from "@/components/I18nProvider";
import {
  FaAndroid,
  FaApple,
  FaGithub,
  FaGlobe,
  FaImages,
} from "react-icons/fa";

export default function ProjectsPage() {
  const { isLoaded } = useI18n();
  const t = useTranslations("projects");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [galleryProject, setGalleryProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const openGallery = (project: (typeof projects)[0]) => {
    if (project.gallery && project.gallery.length > 0) {
      setGalleryProject(project);
      setIsGalleryOpen(true);
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setGalleryProject(null);
  };

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
      <div className="container mx-auto px-6 py-20 pt-22">
        <LayoutGroup>
          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gray-50 dark:bg-stone-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer shadow-stone-700"
                    onMouseEnter={() => setSelectedProject(project.id)}
                    onMouseLeave={() => setSelectedProject(null)}
                    onClick={() => openGallery(project)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={256}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 space-x-2">
                        {project.gallery && project.gallery.length > 0 && (
                          <div className="inline-block p-2 bg-blue-500/80 text-white rounded-full">
                            <FaImages />
                          </div>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGlobe />
                          </a>
                        )}
                        {project.androidUrl && (
                          <a
                            href={project.androidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaAndroid />
                          </a>
                        )}
                        {project.iosUrl && (
                          <a
                            href={project.iosUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaApple />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-stone-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-sm bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
                {t("otherProjects")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setSelectedProject(project.id)}
                    onMouseLeave={() => setSelectedProject(null)}
                    onClick={() => openGallery(project)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute top-3 right-3 space-x-1">
                        {project.gallery && project.gallery.length > 0 && (
                          <div className="inline-block p-1.5 bg-blue-500/80 text-white rounded-full text-sm">
                            <FaImages />
                          </div>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGlobe />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-stone-600 mb-3 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs text-blue-700 dark:text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-stone-600 dark:text-stone-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </LayoutGroup>

        {/* Media Gallery Modal */}
        {galleryProject && (
          <MediaGallery
            media={galleryProject.gallery || []}
            isOpen={isGalleryOpen}
            onClose={closeGallery}
            projectTitle={galleryProject.title}
          />
        )}
      </div>
    </div>
  );
}
