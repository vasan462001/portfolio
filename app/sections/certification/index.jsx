import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function Certification() {
    const certRef = useRef(null);
    const isCertInView = useInView(certRef, { once: true });

    const certifications = [
        {
            id: 1,
            name: "Python Full Stack course",
            issuer: "Qspiders Training Institute-Chennai",
            date: "2024",
            image: "/Qspider.jpg",
            url: "#"
        },
        {
            id: 2,
            name: "Advance SQL",
            issuer: "Great Learning",
            date: "2023",
            image: "/Greatlearning.jpg",
            url: "#"
        },
        {
            id: 3,
            name: "Internship In Python Programming",
            issuer: "Shiash Info Solution - Chennai",
            date: "2021",
            image: "/shiashintern.jpg",
            url: "#"
        },
    ];

    return (
        <LazyMotion features={domAnimation}>
            <section id="certification" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <HeadingDivider title="Certifications" />
            
                <div ref={certRef} className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

function CertificationCard({ cert, index, isCertInView }) {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 overflow-hidden h-full flex flex-col"
            style={{
                transform: isCertInView ? "none" : "translateY(30px)",
                opacity: isCertInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.1}s`
            }}
        >
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                {!imageError ? (
                    <>
                        <Image
                            src={cert.image}
                            alt={cert.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={handleImageError}
                            onLoad={handleImageLoad}
                            priority={index < 3}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {imageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
                                <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                        <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Details Section */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2 line-clamp-2">
                    {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {cert.issuer}
                </p>
            
            </div>
        </div>
    );
}