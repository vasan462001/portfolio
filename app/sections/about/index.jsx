import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView, m } from "framer-motion";
import { useRef } from "react";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:srini462001@gmail.com';
    };

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <HeadingDivider title="About Me" />

                <div className="pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 max-w-4xl mx-auto">
                    <m.div
                        ref={ref}
                        className="space-y-6"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Main Introduction */}
                        <m.div variants={itemVariants}>
                            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Full Stack Developer
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I am a <span className="font-semibold text-gray-900 dark:text-white">results-oriented developer</span> building high-quality, cross-platform mobile and web applications with a strong focus on performance and user experience.
                                </p>
                            </div>
                        </m.div>

                        {/* Technical Expertise */}
                        <m.div variants={itemVariants}>
                            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Current Role & Expertise
                                </h3>
                                <div className="space-y-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>
                                        As a <strong className="text-gray-900 dark:text-white">Software Developer at VMASOFT</strong>, I work with a modern technology stack including <span className="font-semibold text-cyan-600 dark:text-cyan-400">React.js</span>, <span className="font-semibold text-gray-900 dark:text-white">Next.js</span>, and <span className="font-semibold text-green-600 dark:text-green-400">Python FastAPI</span>.
                                    </p>
                                    <p>
                                        My expertise spans the full development lifecycle—from crafting responsive frontends to building robust backend services with <strong className="text-gray-900 dark:text-white">MongoDB</strong>, and developing cross-platform mobile applications using <strong className="text-gray-900 dark:text-white">Capacitor</strong> with native <strong className="text-gray-900 dark:text-white">Java</strong> integration.
                                    </p>
                                </div>
                            </div>
                        </m.div>

                        {/* Journey & Experience */}
                        <m.div variants={itemVariants}>
                            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Professional Journey
                                </h3>
                                <div className="space-y-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>
                                        My journey began with a comprehensive <strong className="text-blue-600 dark:text-blue-400">Python Full-Stack course at QSpiders Training Institute</strong> in Chennai, which provided me with a solid foundation in end-to-end development.
                                    </p>
                                    <p>
                                        I enhanced my skills through practical internships as a <strong className="text-indigo-600 dark:text-indigo-400">Python Programmer at Encryptix</strong> in Delhi and a <strong className="text-indigo-600 dark:text-indigo-400">Python Intern at Shiaash Info Solution</strong>, applying my knowledge to real-world projects.
                                    </p>
                                    <p>
                                        This foundation enabled me to contribute to complex products including dating platforms, digital wallets, and enterprise applications, with proven success in migrations and real-time feature integrations.
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    </m.div>

                    {/* Call to Action */}
                    <m.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-gray-700/50 shadow-sm">
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                                I am always open to discussing new opportunities, innovative projects, or just connecting about technology.
                            </p>
                            <button
                                onClick={handleContactClick}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </m.div>
                </div>

                <TimeLine />
            </section>
        </LazyMotion>
    );
}