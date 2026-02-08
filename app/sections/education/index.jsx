    import { HeadingDivider } from "../../../components";
    import { LazyMotion, domAnimation, useInView } from "framer-motion";
    import { useRef } from "react";
    import Image from "next/image";
    import { FaUniversity, FaGraduationCap } from "react-icons/fa";

    export function EducationSection() {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { once: true });

        return (
            <LazyMotion features={domAnimation}>
                <section
                    id="education"
                    className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
                >
                    <HeadingDivider title="Education" />

                    <div
                        ref={sectionRef}
                        className="mt-12 flex flex-col lg:flex-row gap-10 items-center"
                    >
                        {/* IMAGE */}
                        {/* IMAGE */}
                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(-50px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
                            }}
                            className="relative w-full lg:w-1/2 
    aspect-[16/10] sm:aspect-[16/9] 
    rounded-3xl overflow-hidden shadow-2xl bg-black/5 dark:bg-white/5 group"
                        >
                            <Image
                                src="/education.jpg"
                                alt="College Campus"
                                fill
                                priority
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Optional soft overlay (won't hide image) */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />

                            {/* Image Caption */}
                            <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <FaUniversity />
                                    Karpagam University
                                </div>
                                <p className="text-sm opacity-90">Coimbatore,Tamil Nadu, India</p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(50px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                    "all 0.9s cubic-bezier(0.4,0,0.2,1) 0.15s",
                            }}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            {/* Degree */}
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg">
                                        B.Sc– Information Technology
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    2018 – 201
                                </p>
                            </div>

                            {/* School */}
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg">
                                        MCA - Computer Application
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    2021 – 2023
                                </p>


                            </div>
                        </div>
                    </div>
                </section>
            </LazyMotion>
        );
    }
