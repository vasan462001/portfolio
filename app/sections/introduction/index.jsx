import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useScrollTo } from "../../../hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../../utils/media_query";
import { WelcomeAnimation } from "./IntroAnimation";
import { useTheme } from "next-themes";
import NextImage from "next/image"; // Renamed to avoid conflict

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();
	const isTabletUp = useMediaQuery("min-width: 768px");
	const isMobile = useMediaQuery("max-width: 767px");
	const { theme, systemTheme } = useTheme();

	let [count, setCount] = useState(0);
	const [text] = useState([
		"build mobile apps for Android By capacitor converter",
		"convert design into modern UI",
		"build interactive UI using Nextjs",
		"develop websites using Next.js",
		"Backend Integration in Modern framework on Python FastAPI"
	]);

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 4) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section" ref={introRef}>
				{/* Mobile Image - Hidden on tablet and desktop */}
				{isMobile && (
					<div className="mb-8 md:hidden">
						<MobileWelcomeAnimation theme={theme} systemTheme={systemTheme} />
					</div>
				)}
				
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-8 items-center">
					<div className="py-5 md:py-10">
						<h1
							tabIndex="0"
							ref={ref}
							className="text-3xl md:text-2xl xl:text-6xl font-bold mb-10"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p>
								Hi, I&apos;m <mark>Srinivasan Saravanan</mark> a passionate software developer.
							</p>
						</h1>

						<div className="mt-3 relative flex flex-col overflow-hidden">
							<p
								ref={ref}
								className="text-[17px] md:text-2xl transform-none opacity-100"
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								I
								<span
									className="absolute flex flex-col transition-all duration-500 ease-in-expo"
									style={{
										top:
											count === 0
												? "0"
												: count === 1
													? "-100%"
													: count === 2
														? "-200%"
														: count === 3
															? "-300%"
															: count === 4
																? "-400%"
																: "0",
										left: "13px"
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>

						<p
							tabIndex="0"
							ref={ref}
							className="mt-3 mb-10 text-gray-500 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Stick around to see some of my work.
						</p>
						<div
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
							className="flex gap-4 flex-wrap"
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								See my latest projects
							</Link>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								Resume
							</Link>
						</div>
					</div>

					{/* Tablet and Desktop Image - Hidden on mobile */}
					{isTabletUp && <WelcomeAnimation />}
				</div>
			</section>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const firstWord = <b>{element.split(" ").at(0)}</b>;
	const restWords = element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex="0"
			ref={ref}
			className="text-[17px] md:text-2xl"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</span>
	);
}

// Mobile-specific image component
function MobileWelcomeAnimation({ theme, systemTheme }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	
	// Use props instead of useTheme hook
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";

	return (
		<div
			ref={ref}
			className="relative w-full h-full min-h-[300px] flex items-center justify-center py-4"
			style={{
				transform: isInView ? "none" : "translateY(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
			}}
		>
			{/* Simplified Background SVG for Mobile */}
			<div className="absolute inset-0 z-0 opacity-20">
				<svg
					className="w-full h-full"
					viewBox="0 0 602 602"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.1">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
							stroke={darkThemeColor ? "#3B82F6" : "#1E40AF"}
						/>
					</g>
				</svg>
			</div>

			{/* Mobile-optimized Profile Image */}
			<div className="relative z-10 flex items-center justify-center w-full max-w-[90vw] mx-auto">
				<div className="relative group w-full max-w-[250px]">
					{/* Simplified Outer Glow Effects for Mobile */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full blur-lg scale-105 animate-pulse-slow opacity-30"></div>
					
					{/* Mobile Image Container */}
					<div className="relative">
						{/* Main Image Wrapper for Mobile */}
						<div className="relative rounded-full p-2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 shadow-lg">
							<div className="relative rounded-full overflow-hidden border-4 border-white/90 dark:border-gray-800/90 shadow-lg aspect-square w-full">
								<NextImage
									src="/proflioprofile.png"
									alt="Srinivasan Saravanan - Professional Software Developer"
									width={300}
									height={300}
								
									priority
									quality={85}
									sizes="(max-width: 640px) 250px, 300px"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
								/>
								
								{/* Simple Overlay for Mobile */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
							</div>
						</div>
						
						{/* Simplified Professional Badge for Mobile */}
						<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
							<div className="flex items-center gap-1 text-xs font-semibold whitespace-nowrap">
								<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								Software Developer
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
}