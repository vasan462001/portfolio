import { HeadingDivider } from "../../../components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TECHNOLOGIES } from "../../../constants";

export function TechnologiesSection() {
  const stackRef = useRef(null);
  const isStackInView = useInView(stackRef, { once: true, margin: "-100px" });

  return (
    <LazyMotion features={domAnimation}>
      <section id="tech" className="section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <HeadingDivider title="Technologies" />
        
        <div ref={stackRef} className="max-w-6xl mx-auto">
          {!!TECHNOLOGIES.length && (
            <div className="mt-12 space-y-16">
              {TECHNOLOGIES.map((tech, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      transform: isStackInView ? "none" : "translateY(30px)",
                      opacity: isStackInView ? 1 : 0,
                      transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.1}s`
                    }}
                  >
                    {/* Category Title */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="h-px flex-1 max-w-[100px] bg-gray-200 dark:bg-gray-700"></div>
                      <h3 
                        tabIndex="0" 
                        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {tech.category}
                      </h3>
                      <div className="h-px flex-1 max-w-[100px] bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    
                    {/* Tech Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                      {tech.items.map((item, itemIndex) => {
                        return (
                          <div 
                            key={itemIndex} 
                            className="group flex flex-col items-center"
                            style={{
                              transform: isStackInView ? "none" : "scale(0.8)",
                              opacity: isStackInView ? 1 : 0,
                              transition: `all 0.5s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.1 + itemIndex * 0.05}s`
                            }}
                          >
                            {/* Icon Container */}
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-3">
                              
                              {/* Container handles sizing and hover scaling uniformly. 
                                  Icons inherit colors from the constants file above. */}
                              <div className="[&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-10 sm:[&>svg]:h-10 transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                              </div>

                            </div>
                            
                            {/* Label */}
                            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
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