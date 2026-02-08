import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaCode, FaTerminal, FaServer, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";

export function WelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";
	
	const [activeTech, setActiveTech] = useState(0);
	
	// Tech icons rotation - slower for professional look
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTech(prev => (prev + 1) % 6);
		}, 3000); // Slower transition
		return () => clearInterval(interval);
	}, []);

	const techIcons = [
		{ icon: FaCode, color: "text-blue-500", label: "Code" },
		{ icon: FaTerminal, color: "text-green-500", label: "Terminal" },
		{ icon: FaServer, color: "text-purple-500", label: "Server" },
		{ icon: FaDatabase, color: "text-cyan-500", label: "Database" },
		{ icon: FaReact, color: "text-cyan-400", label: "React" },
		{ icon: FaNodeJs, color: "text-green-600", label: "Node.js" }
	];

	return (
		<div
			ref={ref}
			className="relative w-full h-full min-h-[400px] md:min-h-[480px] lg:min-h-[550px] flex items-center justify-center py-4 md:py-6 lg:py-8 overflow-hidden"
			style={{
				transform: isInView ? "none" : "translateX(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
			}}
		>
			{/* Minimal Background Pattern */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* Subtle Circuit Board Pattern */}
				<div className="absolute inset-0 opacity-[0.03]">
					<svg className="w-full h-full" viewBox="0 0 400 400">
						<defs>
							<pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
								<path d="M0 20h40M20 0v40" stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"} strokeWidth="0.5" fill="none" />
								<circle cx="10" cy="10" r="1" fill={darkThemeColor ? "#60A5FA" : "#3B82F6"} />
								<circle cx="30" cy="10" r="1" fill={darkThemeColor ? "#60A5FA" : "#3B82F6"} />
								<circle cx="10" cy="30" r="1" fill={darkThemeColor ? "#60A5FA" : "#3B82F6"} />
								<circle cx="30" cy="30" r="1" fill={darkThemeColor ? "#60A5FA" : "#3B82F6"} />
							</pattern>
						</defs>
						<rect width="400" height="400" fill="url(#circuit)" />
					</svg>
				</div>

				{/* Subtle Gradient Orbs - reduced opacity */}
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
			</div>

			{/* Tech Icons Ring - Simplified */}
			<div className="absolute z-10 w-full max-w-lg">
				<div className="relative w-full h-full">
					{techIcons.map((tech, index) => {
						const Icon = tech.icon;
						const isActive = index === activeTech;
						const angle = (index * 60) * (Math.PI / 180);
						const radius = 120; // Slightly smaller radius
						const x = Math.cos(angle) * radius;
						const y = Math.sin(angle) * radius;

						return (
							<div
								key={index}
								className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out ${
									isActive ? 'scale-110' : 'scale-95 opacity-60'
								}`}
								style={{
									transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.1)' : 'scale(0.95)'}`,
								}}
							>
								<div className={`
									p-2.5 md:p-3 rounded-xl 
									bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60
									backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30
									shadow-md ${isActive ? 'shadow-blue-300/30 dark:shadow-blue-700/30' : ''}
									transition-all duration-1000
								`}>
									<Icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.color} transition-all duration-500`} />
								</div>
								{isActive && (
									<div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-blue-100/90 dark:bg-blue-900/60 px-2 py-0.5 rounded-full whitespace-nowrap animate-fade-in">
										{tech.label}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* Main Image Container - Professional & Clean */}
			<div className="relative z-20 flex flex-col items-center justify-center w-full max-w-md mx-auto">
				<div className="relative group">
					{/* Simplified Outer Rings - Subtle */}
					<div className="absolute inset-0 -inset-3 md:-inset-4">
						<div className="absolute inset-0 rounded-full border-2 border-blue-300/10 dark:border-blue-600/10 animate-spin-very-slow"></div>
						<div className="absolute inset-2 rounded-full border-2 border-purple-300/8 dark:border-purple-600/8 animate-spin-very-slow-reverse"></div>
					</div>

					{/* Image Container */}
					<div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
						{/* Subtle Glow Effect */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-2xl"></div>
						
						{/* Rounded Image */}
						<div className="absolute inset-6 md:inset-8 lg:inset-10">
							<div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/90 dark:border-gray-800/90 shadow-xl">
								<Image
									src="/proflioprofile.png"
									alt="Srinivasan Saravanan - Software Developer"
									fill
									priority
									sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
									className="object-cover transition-transform duration-700 group-hover:scale-105"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
								/>
								
								{/* Professional Hover Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Developer Title - Cleaner Design */}
				<div className="mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-sm">
					<div className="flex items-center gap-2.5">
						<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle"></div>
						<h1 className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-300">
							Full Stack Developer
						</h1>
						<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
					</div>
				</div>
			</div>

			{/* Professional Animations - Minimal & Smooth */}
			<style jsx>{`
				@keyframes spin-very-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				
				@keyframes spin-very-slow-reverse {
					from { transform: rotate(360deg); }
					to { transform: rotate(0deg); }
				}
				
				@keyframes pulse-subtle {
					0%, 100% { opacity: 1; }
					50% { opacity: 0.5; }
				}
				
				@keyframes fade-in {
					from { opacity: 0; transform: translateY(5px); }
					to { opacity: 1; transform: translateY(0); }
				}
				
				.animate-spin-very-slow { animation: spin-very-slow 45s linear infinite; }
				.animate-spin-very-slow-reverse { animation: spin-very-slow-reverse 60s linear infinite; }
				.animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
				.animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
			`}</style>
		</div>
	);
}