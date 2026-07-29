// index.js (WelcomeSection)
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useScrollTo } from "../../../hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WelcomeAnimation } from "./IntroAnimation";
import { useTheme } from "next-themes";

export function WelcomeSection() {
    const ref = useRef(null);
    const introRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollToEl } = useScrollTo();
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
            {/* Full-Width Wrapper (No Side Space) */}
            <div className="w-screen left-1/2 -translate-x-1/2 relative overflow-hidden">
                <section 
                    id="intro" 
                    ref={introRef}
                    className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-slate-900 dark:via-blue-950 dark:to-black flex items-center transition-colors duration-500 min-h-auto lg:min-h-screen"
                >
                    {/* AI Video-style Animated Background */}
                    <div className="absolute inset-0 z-0">
                        {/* Flowing Grid Lines (AI processing look) */}
                        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                            animation: 'gridMove 20s linear infinite'
                        }}></div>
                        
                        {/* Moving Glowing Orbs */}
                        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-[flow_8s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-800/30 rounded-full blur-3xl animate-[flow_8s_ease-in-out_infinite_reverse]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/0 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>

                        {/* Animated Particle Dots */}
                        <div className="absolute top-[10%] left-[10%] w-1.5 h-1.5 bg-white/60 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                        <div className="absolute top-[20%] left-[80%] w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                        <div className="absolute top-[60%] left-[30%] w-1 h-1 bg-white/70 rounded-full animate-ping" style={{animationDuration: '2.5s'}}></div>
                        <div className="absolute top-[80%] left-[70%] w-2 h-2 bg-white/50 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
                    </div>

                    {/* CSS for Grid Movement */}
                    <style jsx>{`
                        @keyframes flow {
                            0%, 100% { transform: translate(0, 0) scale(1); }
                            50% { transform: translate(50px, -50px) scale(1.2); }
                        }
                        @keyframes gridMove {
                            0% { transform: translate(0, 0); }
                            100% { transform: translate(60px, 60px); }
                        }
                    `}</style>

                    {/* Inner Container - Reduced Vertical Padding on Mobile */}
                    <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-4 sm:px-6 py-6 sm:py-8 lg:py-12 lg:px-8 xl:px-12">
                        
                        {/* LEFT: Text Content */}
                        <div className="order-2 lg:order-1 w-full">
                            <h1
                                tabIndex="0"
                                ref={ref}
                                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-snug"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            >
                                <p>
                                    Hi, I&apos;m <mark className="bg-transparent text-white dark:text-blue-300">Srinivasan Saravanan</mark> a passionate software developer.
                                </p>
                            </h1>

                            <div className="mt-2 relative flex flex-col overflow-hidden h-6 sm:h-7">
                                <p
                                    ref={ref}
                                    className="text-xs sm:text-sm md:text-base text-white dark:text-blue-100"
                                    style={{
                                        transform: isInView ? "none" : "translateX(-200px)",
                                        opacity: isInView ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                    }}
                                >
                                    I
                                    <span
                                        className="absolute flex flex-col transition-all duration-500 ease-in-expo text-white dark:text-blue-100"
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
                                            left: "9px"
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
                                className="mt-3 mb-6 text-white dark:text-gray-300 text-xs sm:text-sm lg:text-base opacity-90 max-w-lg leading-relaxed"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            >
                                Stick around to see some of my work.
                            </p>
                            
                        </div>

                        {/* RIGHT: Image Section */}
                        <div 
                            className="order-1 lg:order-2 w-full min-h-[220px] sm:min-h-[260px] lg:h-auto lg:min-h-[400px] xl:min-h-[500px] flex items-end lg:items-center justify-center pb-2 lg:pb-0"
                            style={{
                                transform: isInView ? "none" : "scale(0.9)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                            }}
                        >
                            <WelcomeAnimation />
                        </div>

                    </div>
                </section>
            </div>
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
            className="text-xs sm:text-sm md:text-base text-white dark:text-blue-100"
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