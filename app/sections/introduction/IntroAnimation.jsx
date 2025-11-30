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
			className="relative w-full h-full min-h-[600px] flex items-center justify-center py-12"
			style={{
				transform: isInView ? "none" : "translateX(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
			}}
		>
			{/* Enhanced Background SVG Animation */}
			<div className="absolute inset-0 z-0 opacity-30">
				<svg
					className="w-full h-full"
					viewBox="0 0 602 602"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.15">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
							stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
							id="path_0"
						/>
						<path
							d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
							stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
							id="path_1"
						/>
						<path
							d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
							stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
							id="path_2"
						/>
					</g>
					<ellipse
						cx="295.027"
						cy="193.118"
						transform="translate(-295.027 -193.118)"
						rx="1.07306"
						ry="1.07433"
						fill={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_2" />
						</animateMotion>
					</ellipse>
					
					<ellipse
						cx="295.027"
						cy="193.118"
						transform="translate(-295.027 -193.118)"
						rx="1.07306"
						ry="1.07433"
						fill={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_2" />
						</animateMotion>
					</ellipse>
					<path
						d="M294.685 193.474L268.932 219.258"
						transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
						stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_2" />
						</animateMotion>
					</path>
					<ellipse
						cx="476.525"
						cy="363.313"
						rx="1.07433"
						ry="1.07306"
						transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
						fill={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_0" />
						</animateMotion>
					</ellipse>
					<path
						d="M476.171 362.952L450.417 337.168"
						transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
						stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_0" />
						</animateMotion>
					</path>
					<ellipse
						cx="382.164"
						cy="155.029"
						rx="1.07433"
						ry="1.07306"
						transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
						fill={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_0" />
						</animateMotion>
					</ellipse>
					<path
						d="M381.81 154.669L356.057 128.885"
						transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
						stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
					>
						<animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto">
							<mpath xlinkHref="#path_0" />
						</animateMotion>
					</path>
				</svg>
			</div>

			{/* Enhanced Professional Profile Image */}
			<div className="relative z-10 flex items-center justify-center">
				<div className="relative group">
					{/* Outer Glow Effects */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full blur-3xl scale-110 animate-pulse-slow opacity-60"></div>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl scale-105 animate-pulse-medium opacity-40"></div>
					
					{/* Floating Elements */}
					<div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80 shadow-lg"></div>
					<div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '1s' }}></div>
					<div className="absolute top-1/2 -right-12 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '2s' }}></div>
					
					{/* Main Image Container with Enhanced Styling */}
					<div className="relative">
						
						{/* Main Image Wrapper */}
						<div className="relative rounded-full p-3 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 shadow-2xl">
							<div className="relative rounded-full overflow-hidden border-8 border-white/90 dark:border-gray-800/90 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] group-hover:border-white transition-all duration-500">
								<Image
									src="/proflioprofile.jpeg"
									alt="Srinivasan Saravanan - Professional Software Developer"
									width={500}
									height={500}
									className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
									priority
									quality={100}
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
								/>
								
								{/* Overlay Effects */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
								<div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 rounded-full"></div>
							</div>
						</div>
						
						{/* Professional Badge */}
						<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm">
							<div className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								Software Developer
							</div>
						</div>
					</div>

					{/* Hover Effect Rings */}
					<div className="absolute inset-0 rounded-full border-2 border-blue-300/0 group-hover:border-blue-300/50 group-hover:scale-110 transition-all duration-1000 ease-out"></div>
					<div className="absolute inset-4 rounded-full border-2 border-purple-300/0 group-hover:border-purple-300/30 group-hover:scale-105 transition-all duration-700 ease-out delay-100"></div>
				</div>
			</div>

			{/* Additional Background Elements */}
			<div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse-slow"></div>
			<div className="absolute top-10 right-10 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse-medium"></div>
			<div className="absolute top-1/3 left-1/4 w-12 h-12 bg-indigo-400/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
		</div>
	);
}