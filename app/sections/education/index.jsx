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

                    <div
                        ref={sectionRef}
                        className="mt-12 flex flex-col lg:flex-row gap-10 items-center"
                    >
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
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                            <div className="bg-gradient-to-br from-white to-blue-50/40 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 border-l-4 border-l-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                                        B.Sc – Information Technology
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    2018 – 2021
                                </p>
                            </div>

                            {/* School */}
                            <div className="bg-gradient-to-br from-white to-blue-50/40 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 border-l-4 border-l-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                    <FaGraduationCap />
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                                        MCA – Computer Application
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    2021 – 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyMotion>
        );
    }