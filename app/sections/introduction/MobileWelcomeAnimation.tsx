import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaCode, FaMobileAlt, FaLaptopCode, FaStar, FaRocket } from "react-icons/fa";

export function MobileWelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";
	
	// State for interactive elements
	const [isTapped, setIsTapped] = useState(false);
	const [activeIcon, setActiveIcon] = useState(0);
	
	// Rotate through tech icons
	useEffect(() => {
		if (!isInView) return;
		
		const interval = setInterval(() => {
			setActiveIcon(prev => (prev + 1) % 5);
		}, 2000);
		
		return () => clearInterval(interval);
	}, [isInView]);

	const handleTap = () => {
		setIsTapped(true);
		setTimeout(() => setIsTapped(false), 600);
	};

	// Mobile-friendly tech icons
	const techIcons = [
		{ icon: FaCode, color: "text-blue-500", label: "React" },
		{ icon: FaMobileAlt, color: "text-purple-500", label: "Flutter" },
		{ icon: FaLaptopCode, color: "text-green-500", label: "Python" },
		{ icon: FaStar, color: "text-yellow-500", label: "Next.js" },
		{ icon: FaRocket, color: "text-cyan-500", label: "FastAPI" }
	];

	return (
		<div
			ref={ref}
			className="relative w-full h-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-8"
			style={{
				transform: isInView ? "none" : "translateY(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{/* Animated Background Pattern for Mobile */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* Gradient Background */}
				<div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-sky-50 to-cyan-50 dark:from-blue-950 dark:via-gray-900 dark:to-gray-950"></div>
				
				{/* Animated Grid Pattern */}
				<div className="absolute inset-0 opacity-10">
					<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
						<defs>
							<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
								<path d="M 10 0 L 0 0 0 10" fill="none" stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"} strokeWidth="0.5" />
							</pattern>
						</defs>
						<rect width="100" height="100" fill="url(#grid)" />
					</svg>
				</div>
				
				{/* Floating Particles */}
				{Array.from({ length: 15 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-2 h-2 rounded-full bg-blue-400/30 dark:bg-blue-500/20 animate-float"
						style={{
							left: `${(i * 7) % 90}%`,
							top: `${(i * 11) % 90}%`,
							animationDelay: `${i * 0.3}s`,
							animationDuration: `${3 + (i % 3)}s`
						}}
					/>
				))}
			</div>

			{/* Tech Icons Carousel - Mobile Optimized */}
			<div className="relative z-10 w-full max-w-md mb-8">
				<div className="flex justify-center items-center gap-4 mb-6">
					{techIcons.map((item, index) => {
						const Icon = item.icon;
						const isActive = index === activeIcon;
						
						return (
							<div
								key={index}
								className={`relative transition-all duration-500 ${
									isActive 
										? 'scale-125 opacity-100' 
										: 'scale-90 opacity-40'
								}`}
								style={{
									transform: isActive ? 'translateY(-5px)' : 'none',
									transitionDelay: `${index * 100}ms`
								}}
							>
								<div className={`relative p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg ${
									isActive ? 'shadow-blue-200 dark:shadow-blue-900' : ''
								}`}>
									<Icon className={`w-6 h-6 ${item.color}`} />
								</div>
								{isActive && (
									<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded-full whitespace-nowrap">
										{item.label}
									</div>
								)}
							</div>
						);
					})}
				</div>
				
				{/* Tech Stack Label */}
				<div className="text-center mb-4">
					<div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm border border-blue-200 dark:border-blue-700">
						<p className="text-sm font-medium text-blue-700 dark:text-blue-300">
							Tech Stack | Full Stack Developer
						</p>
					</div>
				</div>
			</div>

			{/* Main Profile Image with Interactive Effects */}
			<div className="relative z-20 w-full max-w-xs mx-auto">
				{/* Pulsing Rings */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="absolute w-full h-full rounded-full border-4 border-blue-300/30 animate-ping-slow"></div>
					<div className="absolute w-[90%] h-[90%] rounded-full border-4 border-purple-300/20 animate-ping-slow" style={{ animationDelay: '0.3s' }}></div>
					<div className="absolute w-[80%] h-[80%] rounded-full border-4 border-cyan-300/15 animate-ping-slow" style={{ animationDelay: '0.6s' }}></div>
				</div>

				{/* Interactive Image Container */}
				<div 
					className={`relative group mx-auto w-48 h-48 md:w-56 md:h-56
						transition-all duration-500 ease-out
						${isTapped ? 'scale-95 rotate-3' : 'scale-100 rotate-0'}`}
					onClick={handleTap}
					onTouchStart={handleTap}
				>
					{/* Floating Card Effect */}
					<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-700"></div>
					
					{/* Glow Effect */}
					<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					
					{/* Main Image Container */}
					<div className="relative rounded-3xl overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl">
						<Image
							src="/proflioprofile.jpeg"
							alt="Srinivasan Saravanan - Software Developer"
							width={400}
							height={400}
							className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
							priority
							quality={95}
							sizes="(max-width: 768px) 100vw, 400px"
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
						/>
						
						{/* Interactive Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
							<button className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Tap to Explore
								</span>
							</button>
						</div>
						
						{/* Tap Feedback */}
						{isTapped && (
							<div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl animate-tap-feedback"></div>
						)}
					</div>
					
					{/* Corner Accents */}
					<div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-bounce-slow"></div>
					<div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
				</div>

				{/* Tap Indicator */}
				<div className="mt-6 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm">
						<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
						<span className="text-sm text-blue-700 dark:text-blue-300">
							Tap image for effect
						</span>
					</div>
				</div>
			</div>

			{/* Welcome Text & Info */}
			<div className="relative z-10 w-full max-w-md mt-8 text-center space-y-4">
				{/* Greeting with Typing Effect */}
				<div className="relative overflow-hidden">
					<h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
						<span className="inline-block animate-slide-in" style={{ animationDelay: '0.8s' }}>
							Hello, I'm
						</span>
					</h1>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-2">
						<span className="inline-block animate-slide-in" style={{ animationDelay: '1s' }}>
							Srinivasan Saravanan
						</span>
					</h2>
				</div>

				{/* Role Badge with Animation */}
				<div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 backdrop-blur-sm border border-blue-200 dark:border-blue-700 shadow-lg animate-scale-in">
					<div className="flex items-center justify-center gap-3">
						<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
						<p className="text-lg font-semibold text-blue-800 dark:text-blue-300">
							Full Stack Developer
						</p>
						<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
					</div>
				</div>

				{/* Short Description */}
				<div className="px-4">
					<p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '1.2s' }}>
						Building seamless digital experiences with modern web & mobile technologies
					</p>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-2 gap-3 px-4 mt-6">
					{[
						{ value: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
						{ value: "20+", label: "Projects", color: "from-purple-500 to-pink-500" },
						{ value: "10+", label: "Tech Stack", color: "from-green-500 to-emerald-500" },
						{ value: "100%", label: "Dedication", color: "from-amber-500 to-orange-500" }
					].map((stat, index) => (
						<div
							key={index}
							className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100 dark:border-blue-800/50 animate-slide-up"
							style={{ animationDelay: `${1.4 + index * 0.1}s` }}
						>
							<div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
								{stat.value}
							</div>
							<div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="flex flex-col items-center gap-1">
					<span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
						Scroll down
					</span>
					<svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>

			{/* Custom Animations CSS */}
			<style jsx>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-20px) rotate(5deg); }
				}
				
				@keyframes ping-slow {
					75%, 100% { transform: scale(1.5); opacity: 0; }
				}
				
				@keyframes bounce-slow {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-10px); }
				}
				
				@keyframes slide-in {
					from { transform: translateY(20px); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				
				@keyframes slide-up {
					from { transform: translateY(30px); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				
				@keyframes fade-in {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				
				@keyframes scale-in {
					from { transform: scale(0.9); opacity: 0; }
					to { transform: scale(1); opacity: 1; }
				}
				
				@keyframes tap-feedback {
					0% { opacity: 0.5; transform: scale(1); }
					100% { opacity: 0; transform: scale(1.2); }
				}
				
				.animate-float { animation: float ease-in-out infinite; }
				.animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
				.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
				.animate-slide-in { animation: slide-in 0.8s ease-out forwards; opacity: 0; }
				.animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
				.animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
				.animate-scale-in { animation: scale-in 0.6s ease-out forwards; opacity: 0; }
				.animate-tap-feedback { animation: tap-feedback 0.6s ease-out; }
			`}</style>
		</div>
	);
}