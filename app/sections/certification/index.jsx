import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function Certification() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const certRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });
	const isCertInView = useInView(certRef, { once: true });

	// Sample certifications data - replace with your actual certifications
	const certifications = [
		{
			id: 1,
			name: "Python Full Stack course",
			issuer: "Qspiders Training Institute-Chennai",
			date: "2024",
			image: "/Qspider.jpg", // Fixed path
			url: "#"
		},
		{
			id: 2,
			name: "Advance SQL",
			issuer: "Great Learning",
			date: "2023",
			image: "/Greatlearning.jpg", // Fixed path - use actual filename
			url: "#"
		},
			{
			id: 3,
			name: "Internship In Python Programming",
			issuer: "Shiash Info Solution - Chennai",
			date: "2021",
			image: "/shiashintern.jpg", // Fixed path - use actual filename
			url: "#"
		},
	];

	return (
		<LazyMotion features={domAnimation}>
			<section id="certification" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				<HeadingDivider title="Certifications" />
			
				{/* Certifications Section */}
				<div ref={certRef} className="mt-12">
					
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
						{certifications.map((cert, index) => (
							<CertificationCard 
								key={cert.id} 
								cert={cert} 
								index={index} 
								isCertInView={isCertInView} 
							/>
						))}
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}

// Separate component for each certification card to handle image state properly
function CertificationCard({ cert, index, isCertInView }) {
	const [imageError, setImageError] = useState(false);
	const [imageLoading, setImageLoading] = useState(true);

	const handleImageError = () => {
		console.log(`Image failed to load: ${cert.image}`);
		setImageError(true);
		setImageLoading(false);
	};

	const handleImageLoad = () => {
		console.log(`Image loaded successfully: ${cert.image}`);
		setImageLoading(false);
	};

	return (
		<div
			className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
			style={{
				transform: isCertInView ? "none" : "translateY(100px)",
				opacity: isCertInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.3 + index * 0.2}s`
			}}
		>
			{/* Certification Image - Increased height */}
			<div className="relative h-64 bg-gray-100 dark:bg-gray-700 overflow-hidden"> {/* Changed from h-48 to h-64 */}
				{!imageError ? (
					<>
						<Image
							src={cert.image}
							alt={cert.name}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-500"
							onError={handleImageError}
							onLoad={handleImageLoad}
							priority={index < 3}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 53vw"
						/>
						{imageLoading && (
							<div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
								<div className="animate-pulse flex flex-col items-center">
									<svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="text-gray-500 dark:text-gray-400 text-sm">Loading...</span>
								</div>
							</div>
						)}
					</>
				) : (
					// Fallback content if image doesn't exist
					<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
						<div className="text-white text-center p-4">
							<svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span className="text-sm font-semibold">{cert.name}</span>
							<p className="text-xs mt-1 opacity-90">Certificate Image</p>
						</div>
					</div>
				)}
			</div>

			{/* Certification Details - Increased padding for better proportion */}
			<div className="p-8"> {/* Changed from p-6 to p-8 */}
				<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2"> {/* Increased text size */}
					{cert.name}
				</h3>
				<p className="text-gray-600 dark:text-gray-300 text-base mb-4"> {/* Increased text size */}
					{cert.issuer}
				</p>
				<div className="flex justify-between items-center">
					<span className="text-blue-600 dark:text-blue-400 text-base font-semibold"> {/* Increased text size */}
						{cert.date}
					</span>
					
				</div>
			</div>

			{/* Hover Effect */}
			<div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-300 pointer-events-none"></div>
		</div>
	);
}