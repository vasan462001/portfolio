"use client";

import { LazyMotion, domAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TimeLineData = [
  { year: 2023, text: "Working as a Full Stack Developer At VMASOFT in Ramanathapuram" },
  { year: 2022, text: "Start my journey To learing a software Devloper Course in Qspider at Chennai in Real World Projects" },
  { year: 2022, text: "Dive into Data Scientist Internship at Evoastra" },
  { year: 2021, text: "Work as a Intern on Encrptix as a Python Programmer" },
  { year: 2021, text: "Start a 3month Python internship at shiash Info Solutions" }
];

export function TimeLine() {
  const colorMode = "dark";
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true, margin: "-100px" });

  // Auto-slide configuration
  const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

  const scrollToItem = (index) => {
    setActiveItem(index);
    
    if (carouselRef.current) {
      const card = carouselRef.current.children[index];
      const container = carouselRef.current;
      const cardWidth = card.offsetWidth + 20; // width + gap
      
      const scrollLeft = cardWidth * index;
      
      container.scrollTo({ 
        left: scrollLeft, 
        behavior: "smooth" 
      });
    }
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    scrollToItem(i);
  };

  const nextSlide = () => {
    const nextIndex = (activeItem + 1) % TimeLineData.length;
    scrollToItem(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeItem - 1 + TimeLineData.length) % TimeLineData.length;
    scrollToItem(prevIndex);
  };

  const handleScroll = () => {
    if (carouselRef.current && !isPaused) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.children[0]?.offsetWidth + 20 || 300;
      const index = Math.round(scrollLeft / cardWidth);
      
      setActiveItem(index);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeItem, isPaused]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Responsive touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Resume auto-slide after swipe
    setTimeout(() => setIsPaused(false), 2000);
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleResize = () => {
      scrollToItem(activeItem);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeItem]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Auto-play Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={isPaused ? "Play auto-slide" : "Pause auto-slide"}
            >
              {isPaused ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
                </svg>
              )}
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Auto-slide {isPaused ? "paused" : "playing"}
            </span>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {TimeLineData.map((_, index) => (
            <button
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeItem === index 
                  ? "bg-blue-500 scale-110" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${TimeLineData[index].year}`}
              aria-current={activeItem === index}
            />
          ))}
        </div>

        {/* Timeline Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={activeItem === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 hidden sm:block"
            aria-label="Previous timeline item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={activeItem === TimeLineData.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 hidden sm:block"
            aria-label="Next timeline item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Timeline Items */}
          <ul
            ref={carouselRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex flex-row flex-nowrap gap-5 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing hide-scroll-bar pb-6"
          >
            {TimeLineData.map((item, index) => (
              <motion.li
                key={index}
                className={`flex flex-col gap-4 snap-start flex-shrink-0 w-4/5 sm:w-72 md:w-80 p-6 rounded-xl border transition-all duration-300 ${
                  activeItem === index
                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 scale-105 shadow-lg"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg"
                }`}
                onClick={(e) => handleClick(e, index)}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.9
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: activeItem === index ? 1.05 : 1
                } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: activeItem === index ? 1.05 : 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Year Indicator */}
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    className={`w-3 h-3 rounded-full border-2 ${
                      activeItem === index
                        ? "bg-blue-500 border-blue-500 scale-125"
                        : "bg-white dark:bg-gray-800 border-gray-400"
                    } transition-all duration-300`}
                    animate={{
                      scale: activeItem === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeItem === index ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.h3
                    tabIndex="0"
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      activeItem === index
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {item.year}
                  </motion.h3>
                </div>

                {/* Timeline Content */}
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base"
                  tabIndex="0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.text}
                </motion.p>

                {/* Auto-slide Progress Bar */}
                {activeItem === index && !isPaused && (
                  <motion.div
                    className="mt-4 h-1 bg-blue-200 dark:bg-blue-800 rounded-full overflow-hidden"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ 
                      duration: AUTO_SLIDE_INTERVAL / 1000, 
                      ease: "linear" 
                    }}
                    onAnimationComplete={nextSlide}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Active Item Indicator */}
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">{activeItem + 1}</span> of {TimeLineData.length} • {TimeLineData[activeItem].year}
        </div>
      </div>
    </LazyMotion>
  );
}