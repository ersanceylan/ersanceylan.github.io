"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MediaItem } from "@/types";
import {
  getYouTubeVideoId,
  getYouTubeThumbnail,
  getYouTubeEmbedUrl,
} from "@/lib/hooks";

interface MediaGalleryProps {
  media: MediaItem[];
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function MediaGallery({
  media,
  isOpen,
  onClose,
  projectTitle,
}: MediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first media item when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % media.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, media.length, onClose]);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const goToMedia = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMedia = media[currentIndex];
  const isYouTube = currentMedia?.type === "youtube";
  const videoId = isYouTube ? getYouTubeVideoId(currentMedia.url) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex justify-between items-center text-white">
                <h3 className="text-xl font-semibold">{projectTitle}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Media */}
            <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  {isYouTube && videoId ? (
                    <iframe
                      src={getYouTubeEmbedUrl(videoId)}
                      title={`${projectTitle} video ${currentIndex + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={currentMedia.url}
                      alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Media Counter */}
              {media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                  {currentIndex + 1} / {media.length}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {media.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-2 mt-4 px-4"
              >
                {media.map((mediaItem, index) => {
                  const isVideoThumb = mediaItem.type === "youtube";
                  const thumbVideoId = isVideoThumb
                    ? getYouTubeVideoId(mediaItem.url)
                    : null;
                  const thumbnailSrc =
                    isVideoThumb && thumbVideoId
                      ? getYouTubeThumbnail(thumbVideoId, "medium")
                      : mediaItem.url;

                  return (
                    <button
                      key={index}
                      onClick={() => goToMedia(index)}
                      className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                        index === currentIndex
                          ? "border-blue-500"
                          : "border-white/30 hover:border-white/60"
                      }`}
                    >
                      <Image
                        src={thumbnailSrc}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {isVideoThumb && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white ml-0.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
