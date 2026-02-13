"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsScroll() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3; // Show 3 items

    // ... (rest of the logic remains similar but updated for 3 items)
    const maxStartIndex = Math.max(0, resumeData.projects.length - visibleCount);

    const canGoLeft = startIndex > 0;
    const canGoRight = startIndex < maxStartIndex;

    // Track direction for animation
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        if (canGoRight) {
            setDirection(1);
            setStartIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (canGoLeft) {
            setDirection(-1);
            setStartIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="relative !bg-background z-10 py-12 overflow-hidden">
            <div className="w-full px-4 md:px-8 flex flex-col gap-8">
                <div className="container px-0 flex justify-between items-center mb-4">
                    <h2>Projects</h2>
                </div>

                {/* Mobile: Vertical Stack (Unchanged) */}
                <div className="md:hidden flex flex-col gap-8">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="w-full">
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imageUrl="https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5dc4a5a8f5f4c2572a88_1586191812022-image18.jpg"
                                slug={project.slug}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop: Carousel */}
                <div className="hidden md:flex items-center gap-4 w-full">
                    {/* Left Button */}
                    <div className="w-12 flex-shrink-0 flex justify-center z-20">
                        {canGoLeft && (
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all transform hover:scale-110 shadow-md"
                                aria-label="Previous project"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                    </div>

                    {/* Cards Container */}
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                            className="flex gap-4"
                            layout
                        >
                            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                {resumeData.projects.slice(startIndex, startIndex + visibleCount).map((project) => (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        custom={direction}
                                        initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: direction > 0 ? -50 : 50, scale: 0.95 }}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                            layout: { duration: 0.3 }
                                        }}
                                        className="w-[calc(33.333%-11px)] flex-shrink-0"
                                    >
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            imageUrl="https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5dc4a5a8f5f4c2572a88_1586191812022-image18.jpg"
                                            slug={project.slug}
                                            link={project.link}
                                            className="h-full"
                                            thumbnailClassName="!h-[200px] w-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Right Button */}
                    <div className="w-12 flex-shrink-0 flex justify-center z-20">
                        {canGoRight && (
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all transform hover:scale-110 shadow-md"
                                aria-label="Next project"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
