"use client";

import { LazyMotion, domAnimation, useInView, m } from "framer-motion";
import { useRef } from "react";

// ATS Optimized & Grammatically Corrected Data
const TimeLineData = [
    { 
        year: "2023 - Present", 
        role: "Full Stack Developer",
        company: "VMASOFT",
        location: "Ramanathapuram",
        description: "Building scalable web and mobile applications using React.js, Next.js, and Python FastAPI."
    },
    { 
        year: "2022", 
        role: "Full-Stack Student",
        company: "QSpiders Training Institute",
        location: "Chennai",
        description: "Completed intensive training in software development with a focus on real-world projects."
    },
    { 
        year: "2022", 
        role: "Data Science Intern",
        company: "Evoastra",
        location: "Remote",
        description: "Gained foundational experience in data analysis and machine learning concepts."
    },
    { 
        year: "2021", 
        role: "Python Programmer Intern",
        company: "Encryptix",
        location: "Delhi",
        description: "Developed backend solutions and automation scripts using Python."
    },
    { 
        year: "2021", 
        role: "Python Intern",
        company: "Shiaash Info Solutions",
        location: "Remote",
        description: "Completed a 3-month internship focusing on core Python programming and API integration."
    }
];

export function TimeLine() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <LazyMotion features={domAnimation}>
            <div className="w-full max-w-4xl mx-auto mt-20 px-4 sm:px-6" ref={containerRef}>
                <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Experience & Education
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                        My professional journey so far
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-10 sm:space-y-12">
                        {TimeLineData.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <m.div
                                    key={index}
                                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 ${
                                        isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                                    }`}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full sm:w-[calc(50%-30px)] ${isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"}`}>
                                        <div className="bg-white dark:bg-gray-800/60 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                            <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3">
                                                {item.year}
                                            </span>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {item.role}
                                            </h4>
                                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                                {item.company} <span className="text-gray-400 font-normal">• {item.location}</span>
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot (Desktop) */}
                                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 -translate-x-1/2 bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 rounded-full z-10 shadow-md hidden sm:block"></div>
                                    
                                    {/* Mobile Dot */}
                                    <div className="absolute left-4 w-4 h-4 -translate-x-1/2 bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 rounded-full z-10 shadow-md sm:hidden"></div>

                                    {/* Empty space for the other side on desktop */}
                                    <div className="hidden sm:block w-[calc(50%-30px)]"></div>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </LazyMotion>
    );
}