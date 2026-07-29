import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function Certification() {
    const certRef = useRef(null);
    const isCertInView = useInView(certRef, { once: true });
    const scrollContainerRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const certifications = [
        {
            id: 1,
            name: "Python Full Stack course",
            issuer: "Qspiders Training Institute-Chennai",
            date: "2024",
            image: "/Qspider.jpg",
            url: "#"
        },
        {
            id: 2,
            name: "Advance SQL",
            issuer: "Great Learning",
            date: "2023",
            image: "/Greatlearning.jpg",
            url: "#"
        },
        {
            id: 3,
            name: "Internship In Python Programming",
            issuer: "Shiash Info Solution - Chennai",
            date: "2021",
            image: "/shiashintern.jpg",
            url: "#"
        },
    ];

    // Function to check scroll position and update arrow visibility
    const updateScrollButtons = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 5);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 5
        );
    }, []);

    // Check arrow states on mount and when window resizes
    useEffect(() => {
        updateScrollButtons();
        window.addEventListener("resize", updateScrollButtons);
        return () => window.removeEventListener("resize", updateScrollButtons);
    }, [updateScrollButtons]);

    // Slide functionality for arrows
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Get width of one card + gap to slide exactly one spot
        const cardWidth = container.querySelector(".cert-card")?.offsetWidth || 0;
        const scrollAmount = cardWidth + 32; // 32px is the gap-8

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <LazyMotion features={domAnimation}>
            <section id="certification" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <HeadingDivider title="Certifications" />
            
                <div ref={certRef} className="mt-12 relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                            canScrollLeft ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                        }`}
                        aria-label="Previous certification"
                    >
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                            canScrollRight ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                        }`}
                        aria-label="Next certification"
                    >
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Scrollable Track Container */}
                    <div 
                        ref={scrollContainerRef}
                        onScroll={updateScrollButtons}
                        // Custom CSS class below handles the drag scroll & hides scrollbar
                        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar cursor-grab active:cursor-grabbing"
                    >
                        {certifications.map((cert, index) => (
                            <div key={cert.id} className="cert-card flex-shrink-0 w-[85%] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] snap-center">
                                <CertificationCard 
                                    cert={cert} 
                                    index={index} 
                                    isCertInView={isCertInView} 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom CSS to hide scrollbar and allow dragging */}
                <style jsx>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </section>
        </LazyMotion>
    );
}

function CertificationCard({ cert, index, isCertInView }) {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 overflow-hidden h-full flex flex-col select-none"
            style={{
                transform: isCertInView ? "none" : "translateY(30px)",
                opacity: isCertInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.1}s`
            }}
        >
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                {!imageError ? (
                    <>
                        <Image
                            src={cert.image}
                            alt={cert.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                            onError={handleImageError}
                            onLoad={handleImageLoad}
                            priority={index < 3}
                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {imageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
                                <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                        <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Details Section */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2 line-clamp-2">
                    {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {cert.issuer}
                </p>
            </div>
        </div>
    );
}