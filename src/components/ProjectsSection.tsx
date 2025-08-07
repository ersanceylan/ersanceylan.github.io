"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { useState } from "react";
import MediaGallery from "./MediaGallery";
import {
  FaAndroid,
  FaApple,
  FaGithub,
  FaGlobe,
  FaImages,
  FaYoutube,
} from "react-icons/fa";

export default function ProjectsSection() {
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

  return (
    <section
      id="projects"
      className="section bg-gradient-to-t from-stone-900 via-green-800 to-stone-900"
    >
      <div className="container mx-auto px-6 py-20">
        <LayoutGroup>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2> */}
            <p className="text-xl text-green-100 dark:text-green-100 max-w-3xl mx-auto">
              Here are some of my favorite projects that showcase my skills and
              passion for creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
    </section>
  );
}
