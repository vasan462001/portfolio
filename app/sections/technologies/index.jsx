import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TECHNOLOGIES } from "../../../constants";

export function TechnologiesSection() {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="tech" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <HeadingDivider title="Technologies" />
        
        <div className="max-w-10xl mx-auto">
          {!!TECHNOLOGIES.length && (
            <div className="mt-12">
              {TECHNOLOGIES.map((tech, index) => {
                return (
                  <div
                    key={tech.category}
                    ref={stackRef}
                    className="flex flex-col gap-8"
                    style={{
                      transform: isStackInView ? "none" : "translateY(50px)",
                      opacity: isStackInView ? 1 : 0,
                      transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.3 + index * 0.1}s`
                    }}
                  >
                    <h3 
                      tabIndex="0" 
                      className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center"
                    >
                      {tech.category}
                    </h3>
                    
                    {/* Removed background container - direct flex layout */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
                      {tech.items.map((item) => {
                        return (
                          <div 
                            key={item.name} 
                            className="group relative flex flex-col items-center gap-3 transition-all duration-300"
                          >
                            <div className="p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                              {item.icon}
                            </div>
                            <span
                              className="group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 bg-gray-800 dark:bg-gray-900 text-sm font-medium text-gray-100 rounded-lg absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 px-3 py-2 w-max z-10 shadow-lg"
                            >
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  );
}