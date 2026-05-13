import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export function MobileWelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";
	
	const [activeText, setActiveText] = useState(0);
	
	const rotatingTexts = [
		"React Developer",
		"Next.js Expert", 
		"FastAPI Specialist",
		"Full Stack Engineer"
	];
	
	useEffect(() => {
		if (!isInView) return;
		const interval = setInterval(() => {
			setActiveText(prev => (prev + 1) % rotatingTexts.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden"
			style={{
				transform: isInView ? "none" : "translateY(30px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
			}}
		>
			{/* Professional Blue Gradient Background */}
			<div className="absolute inset-0 z-0">
				{/* Main Blue Gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 dark:from-blue-900 dark:via-blue-950 dark:to-indigo-950"></div>
				
				{/* Subtle Pattern Overlay */}
				<div className="absolute inset-0 opacity-5">
					<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
						<defs>
							<pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
								<circle cx="2" cy="2" r="1.5" fill="white" />
							</pattern>
						</defs>
						<rect width="100" height="100" fill="url(#dots)" />
					</svg>
				</div>
				
				{/* Subtle Light Effects */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 w-full max-w-md mx-auto">
				{/* Profile Image Section */}
				<div className="flex justify-center mb-8">
					<div className="relative">
						{/* Outer Rings */}
						<div className="absolute -inset-3 rounded-full bg-white/10 blur-xl"></div>
						<div className="absolute -inset-2 rounded-full border-2 border-white/20"></div>
						<div className="absolute -inset-4 rounded-full border border-white/10"></div>
						
						{/* Image Container */}
						<div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
							<Image
								src="/proflioprofile.png"
								alt="Srinivasan Saravanan"
								fill
								priority
								className="object-cover"
								sizes="160px"
							/>
						</div>
					</div>
				</div>

				{/* Name and Title Section */}
				<div className="text-center space-y-4 mb-8">
					{/* Greeting Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
						<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
						<span className="text-white/90 text-sm font-medium">Welcome to my portfolio</span>
					</div>
					
					{/* Name */}
					<h1 className="text-3xl md:text-4xl font-bold text-white">
						Srinivasan Saravanan
					</h1>
					
					{/* Rotating Role Text */}
					<div className="h-12">
						<p className="text-xl md:text-2xl text-blue-200 font-semibold">
							{rotatingTexts[activeText]}
						</p>
					</div>
					
					{/* Description */}
					<p className="text-blue-100/80 text-base leading-relaxed max-w-sm mx-auto">
						Building scalable web applications with modern technologies and best practices
					</p>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-3 gap-3 mb-8">
					{[
						{ value: "2+", label: "Years", icon: "🎯" },
						{ value: "20+", label: "Projects", icon: "🚀" },
						{ value: "10+", label: "Techs", icon: "💻" }
					].map((stat, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/10"
						>
							<div className="text-2xl font-bold text-white">{stat.value}</div>
							<div className="text-xs text-blue-200 mt-1">{stat.label}</div>
						</div>
					))}
				</div>

				{/* CTA Buttons */}
				<div className="flex gap-3 justify-center">
					<button className="px-6 py-2.5 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						View Projects
					</button>
					<button className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
						Resume
					</button>
				</div>
			</div>
		</div>
	);
}