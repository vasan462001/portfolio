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
				staggerChildren: 0.1,
				delayChildren: 0.2
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
				damping: 15,
				stiffness: 100,
				duration: 0.6
			}
		}
	};

	const handleContactClick = () => {
		window.location.href = 'mailto:srini462001@gmail.com';
	};

	const techStack = [
		{ name: "Flutter", color: "from-blue-500 to-cyan-500" },
		{ name: "React", color: "from-cyan-500 to-blue-600" },
		{ name: "Next.js", color: "from-gray-800 to-black dark:from-white dark:to-gray-300" },
		{ name: "Python", color: "from-yellow-500 to-amber-500" },
		{ name: "FastAPI", color: "from-green-500 to-teal-500" },
		{ name: "MongoDB", color: "from-green-600 to-emerald-600" },
		{ name: "TypeScript", color: "from-blue-600 to-indigo-600" },
		{ name: "Capacitor", color: "from-indigo-500 to-purple-500" },
		{ name: "Java", color: "from-red-500 to-orange-500" },
		{ name: "Firebase", color: "from-amber-500 to-yellow-500" },
		{ name: "Node.js", color: "from-green-600 to-emerald-600" },
		{ name: "Dart", color: "from-blue-400 to-cyan-400" }
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				<HeadingDivider title="About Me" />

				<div className="pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 max-w-4xl mx-auto">
					{/* All Content on Left */}
					<m.div
						ref={ref}
						className="space-y-8 sm:space-y-10 lg:space-y-12"
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={containerVariants}
					>
						{/* Main Introduction */}
						<m.div variants={itemVariants} className="group">
							<div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:scale-[1.01]">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
										<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
										</svg>
									</div>
									<div>
										<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
											Full Stack Developer
										</h2>
								
									</div>
								</div>
								<p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300">
									I'm a <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">results-oriented developer</span> building high-quality, cross-platform mobile and web applications with a focus on performance and user experience.
								</p>
							</div>
						</m.div>

						{/* Technical Expertise */}
						<m.div variants={itemVariants} className="group">
							<div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:scale-[1.01]">
								<h3 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 flex items-center gap-3">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
									</svg>
									Current Role & Expertise
								</h3>
								<div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
									<p>
										As a <strong>Software Developer at VMASOFT</strong>, I work with a modern technology stack including <span className="font-semibold text-cyan-600 dark:text-cyan-400">React.js</span>, <span className="font-semibold text-gray-800 dark:text-gray-200">Next.js</span>, and <span className="font-semibold text-green-600 dark:text-green-400">Python FastAPI</span>.
									</p>
									<p>
										My expertise spans the full development lifecycle - from crafting responsive frontends to building robust backend services with <strong>MongoDB</strong>, and developing cross-platform mobile applications using <strong>Capacitor</strong> with native <strong>Java</strong> integration.
									</p>
								</div>
							</div>
						</m.div>

						{/* Journey & Experience */}
						<m.div variants={itemVariants} className="group">
							<div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:scale-[1.01]">
								<h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
									</svg>
									My Journey
								</h3>
								<div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
									<p>
										My journey began with a comprehensive <strong>Python Full-Stack course at QSpiders Training Institute</strong> in Chennai, which provided me with a solid foundation in end-to-end development.
									</p>
									<p>
										I enhanced my skills through practical internships as a <strong>Python Programmer at Encryptix</strong> in Delhi and a <strong>Python Intern at Shiaash Info Solution</strong>, where I applied my knowledge to real-world projects and collaborative development.
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
						className="text-center mt-12 sm:mt-16 lg:mt-20"
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ delay: 0.8, duration: 0.6 }}
					>
						<div className="bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500">
						
							<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
								I'm always open to discussing new opportunities, innovative projects, or just chatting about technology.
							</p>
							<button 
								onClick={handleContactClick}
								className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg sm:text-xl"
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