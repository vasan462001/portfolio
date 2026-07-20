// IntroAnimation.js
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export function WelcomeAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { theme, systemTheme } = useTheme();
    const colorMode = theme === "system" ? systemTheme : theme;
    const darkThemeColor = colorMode === "dark";

    return (
        <div
            ref={ref}
            className="relative w-[70%] sm:w-[65%] lg:w-[80%] xl:w-[70%] aspect-square flex items-center justify-center"
        >
            {/* Decorative Blue Rings - Adopted to Dark Mode with Neon Glow */}
            <div className={`absolute w-[95%] h-[95%] rounded-full border-[3px] sm:border-[4px] border-dashed animate-[spin_25s_linear_infinite] ${darkThemeColor ? "border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "border-white/20"}`}></div>
            <div className={`absolute w-[85%] h-[85%] rounded-full border-2 animate-[spin_20s_linear_infinite_reverse] ${darkThemeColor ? "border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]" : "border-white/10"}`}></div>
            
            {/* Background Glow */}
            <div className={`absolute w-[70%] h-[70%] rounded-full blur-3xl ${darkThemeColor ? "bg-blue-600/40 animate-pulse" : "bg-blue-400/20"}`} style={!darkThemeColor ? {} : {animationDuration: '3s'}}></div>

            {/* Extra Large Professional Image Container */}
            <div className="relative w-[80%] h-[80%] sm:w-[75%] sm:h-[75%] lg:w-[80%] lg:h-[80%] group z-10">
                
                {/* Outer Border Wrapper - Glassmorphism in dark mode */}
                <div className={`relative w-full h-full rounded-full p-1.5 sm:p-2 lg:p-3 shadow-2xl border ${darkThemeColor ? "bg-slate-800/80 backdrop-blur-sm shadow-blue-500/10 border-slate-700" : "bg-white/90 border-gray-200"}`}>
                    <div className={`relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 ${darkThemeColor ? "border-blue-500/80 shadow-[inset_0_0_20px_rgba(59,130,246,0.5)]" : "border-blue-600"}`}>
                        <Image
                            src="/proflioprofile.png"
                            alt="Srinivasan Saravanan"
                            fill
                            priority
                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 450px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle inner shadow overlay for depth */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"></div>
                        
                        {/* Dark Mode Only: AI Scanline overlay */}
                        {darkThemeColor && (
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-[scanline_3s_ease-in-out_infinite] pointer-events-none"></div>
                        )}
                    </div>
                </div>

                {/* Professional Floating Badge - Dark mode adopted */}
                <div className={`absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-2xl border-2 whitespace-nowrap z-30 text-white text-[10px] sm:text-xs font-bold ${darkThemeColor ? "bg-slate-800 shadow-black/50 border-slate-600" : "bg-blue-800 border-white"}`}>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Software Developer
                    </div>
                </div>
            </div>

            {/* CSS for Scanline Animation */}
            <style jsx>{`
                @keyframes scanline {
                    0%, 100% { transform: translateY(-100%); }
                    50% { transform: translateY(100%); }
                }
            `}</style>
        </div>
    );
}