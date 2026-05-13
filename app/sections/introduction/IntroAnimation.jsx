import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export function WelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";

	return (
		<div
			ref={ref}
			className="relative w-full h-full min-h-[400px] md:min-h-[480px] lg:min-h-[550px] flex items-center justify-center py-4 md:py-6 lg:py-8 overflow-hidden"
			style={{
				transform: isInView ? "none" : "translateX(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s"
			}}
		>
			{/* Minimal Background Pattern - Static */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* Subtle Circuit Board Pattern - No Animation */}
				<div className="absolute inset-0 opacity-[0.02]">
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

				{/* Subtle Gradient Orbs - Static */}
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
			</div>

			{/* Main Image Container - Large Circle */}
			<div className="relative z-0 flex flex-col items-center justify-center w-full max-w-md mx-auto">
				<div className="relative group">
					{/* Large Outer Rings */}
					<div className="absolute inset-0 -inset-8 md:-inset-10 lg:-inset-12">
						<div className="absolute inset-0 rounded-full border border-blue-300/20 dark:border-blue-600/20"></div>
						<div className="absolute inset-3 rounded-full border border-purple-300/15 dark:border-purple-600/15"></div>
						<div className="absolute inset-6 rounded-full border border-cyan-300/10 dark:border-cyan-600/10"></div>
					</div>

					{/* Large Image Circle Container - No cropping */}
					<div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
						{/* Subtle Static Glow */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-cyan-500/8 blur-2xl"></div>
						
						{/* Full Image Circle - No inner cropping */}
						<div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/90 dark:border-gray-800/90 shadow-xl">
							<Image
								src="/proflioprofile.png"
								alt="Srinivasan Saravanan - Software Developer"
								fill
								priority
								sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
							/>
							
							{/* Subtle Hover Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}