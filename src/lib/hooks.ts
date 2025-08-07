"use client";

import { useState, useEffect, useCallback } from "react";

export function useSwipeNavigation(sections: string[]) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sections.length && !isScrolling) {
        setIsScrolling(true);
        setCurrentSection(index);

        const element = document.getElementById(sections[index]);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    },
    [sections, isScrolling]
  );

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }, [currentSection, sections.length, scrollToSection]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection]);

  // Handle wheel events for desktop
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 0) {
          nextSection();
        } else if (e.deltaY < 0) {
          prevSection();
        }
      }, 50);
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        // Minimum swipe distance
        if (deltaY > 0) {
          nextSection(); // Swipe up
        } else {
          prevSection(); // Swipe down
        }
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case " ":
          e.preventDefault();
          nextSection();
          break;
        case "ArrowUp":
          e.preventDefault();
          prevSection();
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, [isScrolling, nextSection, prevSection, scrollToSection, sections.length]);

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (currentSection !== i) {
            setCurrentSection(i);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, sections, isScrolling]);

  return {
    currentSection,
    scrollToSection,
    nextSection,
    prevSection,
    isScrolling,
  };
}

export function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

// YouTube utility functions
export function getYouTubeVideoId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function getYouTubeThumbnail(
  videoId: string,
  quality: "default" | "medium" | "high" | "standard" | "maxres" = "medium"
): string {
  return `https://img.youtube.com/vi/${videoId}/${
    quality === "medium"
      ? "mqdefault"
      : quality === "high"
      ? "hqdefault"
      : quality === "standard"
      ? "sddefault"
      : quality === "maxres"
      ? "maxresdefault"
      : "default"
  }.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
}

export function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(
    url
  );
}
