import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

export function ProjectSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const projectRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });
	const isProjectInView = useInView(projectRef, { once: true });

	// Sample projects data - replace with your actual projects
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
			technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
			image: "/projects/ecommerce.jpg",
			githubUrl: "https://github.com/yourusername/ecommerce",
			liveUrl: "https://ecommerce-demo.com",
			date: "2024",
			status: "Completed",
			features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Real-time Updates"],
			type: "Full Stack",
			icon: <FaServer className="w-5 h-5" />
		},
		{
			id: 2,
			title: "Task Management App",
			description: "Collaborative task management application with drag-and-drop functionality and team features.",
			technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
			image: "/projects/taskmanager.jpg",
			githubUrl: "https://github.com/yourusername/taskmanager",
			liveUrl: "https://taskmanager-demo.com",
			date: "2023",
			status: "Completed",
			features: ["Drag & Drop", "Team Collaboration", "Real-time Sync", "File Attachments"],
			type: "Web App",
			icon: <FaLaptopCode className="w-5 h-5" />
		},
		{
			id: 3,
			title: "Weather Dashboard",
			description: "Real-time weather forecasting application with interactive maps and location-based alerts.",
			technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "PWA"],
			image: "/projects/weather.jpg",
			githubUrl: "https://github.com/yourusername/weather-dashboard",
			liveUrl: "https://weather-dashboard.com",
			date: "2023",
			status: "Completed",
			features: ["Real-time Data", "Interactive Maps", "Location-based", "PWA Support"],
			type: "Frontend",
			icon: <FaMobileAlt className="w-5 h-5" />
		},
		{
			id: 4,
			title: "AI Content Generator",
			description: "AI-powered content creation tool using GPT-3 for automated blog posts and social media content.",
			technologies: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL"],
			image: "/projects/ai-content.jpg",
			githubUrl: "https://github.com/yourusername/ai-content-generator",
			liveUrl: "https://ai-content-generator.com",
			date: "2024",
			status: "In Progress",
			features: ["AI Integration", "Content Templates", "Export Options", "User Analytics"],
			type: "AI/ML",
			icon: <FaCode className="w-5 h-5" />
		},
		{
			id: 5,
			title: "Portfolio Website",
			description: "Modern portfolio website with dark/light mode, animations, and project showcase.",
			technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
			image: "/projects/portfolio.jpg",
			githubUrl: "https://github.com/yourusername/portfolio",
			liveUrl: "https://yourportfolio.com",
			date: "2024",
			status: "Completed",
			features: ["Dark/Light Mode", "Animations", "Responsive", "Performance Optimized"],
			type: "Frontend",
			icon: <FaPalette className="w-5 h-5" />
		},
		{
			id: 6,
			title: "Inventory Management System",
			description: "Enterprise inventory management system with barcode scanning and reporting features.",
			technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
			image: "/projects/inventory.jpg",
			githubUrl: "https://github.com/yourusername/inventory-system",
			liveUrl: "https://inventory-demo.com",
			date: "2023",
			status: "Completed",
			features: ["Barcode Scanning", "Reporting", "Multi-user", "Export Features"],
			type: "Enterprise",
			icon: <FaDatabase className="w-5 h-5" />
		}
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="project" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				<HeadingDivider title="Projects" />
				
	
				{/* Projects Section */}
				<div ref={projectRef} className="mt-12">
					{/* Desktop: Grid Layout */}
					<div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard 
								key={project.id} 
								project={project} 
								index={index} 
								isInView={isProjectInView} 
								isMobile={false}
							/>
						))}
					</div>

					{/* Mobile: Sliding Carousel */}
					<div className="md:hidden">
						<MobileCarousel 
							projects={projects} 
							isInView={isProjectInView}
						/>
					</div>
				</div>

				{/* View More Button */}
				<div className="text-center mt-12">
					<a 
						href="https://github.com/yourusername" 
						target="_blank" 
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg"
					>
						<FaGithub className="w-5 h-5" />
						View All Projects on GitHub
					</a>
				</div>
			</section>
		</LazyMotion>
	);
}

// Mobile Carousel Component
function MobileCarousel({ projects, isInView }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);
	const cardRef = useRef(null);

	// Minimum swipe distance
	const minSwipeDistance = 50;

	const handleTouchStart = (e) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			nextSlide();
		}
		if (isRightSwipe) {
			prevSlide();
		}
	};

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	// Auto slide every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 6000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="relative">
			{/* Carousel Container */}
			<div className="overflow-hidden">
				<div 
					ref={cardRef}
					className="flex transition-transform duration-500 ease-out"
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
					}}
				>
					{projects.slice(0, 4).map((project, index) => (
						<div 
							key={project.id} 
							className="w-full flex-shrink-0 px-4"
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onTouchEnd={handleTouchEnd}
						>
							<ProjectCard 
								project={project} 
								index={index} 
								isInView={isInView} 
								isMobile={true}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Dots */}
			<div className="flex justify-center mt-8 space-x-2">
				{projects.slice(0, 4).map((_, index) => (
					<button
						key={index}
						className={`h-2 rounded-full transition-all duration-300 ${
							index === currentIndex 
								? 'w-8 bg-gradient-to-r from-blue-500 to-indigo-500' 
								: 'w-2 bg-gray-300 dark:bg-gray-600'
						}`}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-10"
				onClick={prevSlide}
				aria-label="Previous slide"
			>
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-10"
				onClick={nextSlide}
				aria-label="Next slide"
			>
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}

// Updated ProjectCard with enhanced styling
function ProjectCard({ project, index, isInView, isMobile }) {
	const [imageError, setImageError] = useState(false);
	const [imageLoading, setImageLoading] = useState(true);
	const cardRef = useRef(null);

	const handleImageError = () => {
		setImageError(true);
		setImageLoading(false);
	};

	const handleImageLoad = () => {
		setImageLoading(false);
	};

	// Different animations for mobile vs desktop
	const animationStyles = isMobile 
		? {
				transform: isInView ? "none" : "translateX(50px)",
				opacity: isInView ? 1 : 0,
				transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`
		  }
		: {
				transform: isInView ? "none" : "translateY(30px)",
				opacity: isInView ? 1 : 0,
				transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`
		  };

	return (
		<div
			ref={cardRef}
			className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
			style={animationStyles}
		>
			{/* Status Badge */}
			<div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
				project.status === "Completed" 
					? "bg-green-100/90 dark:bg-green-900/50 text-green-700 dark:text-green-300" 
					: "bg-yellow-100/90 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300"
			}`}>
				{project.status}
			</div>

			{/* Type Badge */}
			<div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-blue-100/90 dark:bg-blue-900/50 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300">
				{project.icon}
				<span>{project.type}</span>
			</div>

			{/* Project Image */}
			<div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 dark:from-blue-500/5 dark:to-indigo-600/5 overflow-hidden">
				{!imageError ? (
					<>
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-700"
							onError={handleImageError}
							onLoad={handleImageLoad}
							priority={index < 3}
							sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
						/>
						{imageLoading && (
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
								<div className="animate-pulse flex flex-col items-center">
									<div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mb-4 animate-pulse"></div>
									<span className="text-gray-500 dark:text-gray-400 text-sm">Loading project...</span>
								</div>
							</div>
						)}
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
					</>
				) : (
					// Fallback content
					<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
						<div className="text-white text-center p-6">
							<div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
								<FaCode className="w-8 h-8" />
							</div>
							<span className="text-lg font-semibold block mb-2">{project.title}</span>
							<p className="text-sm opacity-90">Project Preview</p>
						</div>
					</div>
				)}
			</div>

			{/* Project Details */}
			<div className="p-6 relative z-10">
				{/* Title and Date */}
				<div className="flex justify-between items-start mb-3">
					<h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1">
						{project.title}
					</h3>
					<span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
						{project.date}
					</span>
				</div>

				{/* Description */}
				<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
					{project.description}
				</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech, techIndex) => (
						<span 
							key={techIndex}
							className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
						>
							{tech}
						</span>
					))}
				</div>

				{/* Features */}
				<div className="mb-4">
					<p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
					<ul className="grid grid-cols-2 gap-1">
						{project.features.map((feature, featureIndex) => (
							<li key={featureIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
								<svg className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								<span className="truncate">{feature}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Action Buttons */}
				<div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
					<div className="flex gap-2">
						<a 
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
						>
							<FaGithub className="w-4 h-4" />
							Code
						</a>
						<a 
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 text-sm font-medium transform hover:-translate-y-0.5"
						>
							<FaExternalLinkAlt className="w-3 h-3" />
							Live Demo
						</a>
					</div>
				</div>
			</div>

			{/* Hover Effects */}
			<div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
			
			{/* Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/3 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
		</div>
	);
}	