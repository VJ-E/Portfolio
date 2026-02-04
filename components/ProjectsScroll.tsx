"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [xRange, setXRange] = useState(["0px", "0px"]);
    const [sectionHeight, setSectionHeight] = useState("100vh");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const calculateScroll = () => {
            if (typeof window === "undefined") return;

            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            if (mobile) {
                setSectionHeight("auto");
                setXRange(["0px", "0px"]);
                return;
            }

            if (contentRef.current) {
                const contentWidth = contentRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                const scrollDist = contentWidth - viewportWidth + 100; // Adding padding buffer

                if (scrollDist > 0) {
                    setXRange(["1%", `-${scrollDist}px`]);
                    setSectionHeight(`${scrollDist + window.innerHeight}px`);
                } else {
                    setXRange(["0px", "0px"]);
                    setSectionHeight("100vh");
                }
            }
        };

        // Initial calculation
        const timer = setTimeout(calculateScroll, 100);
        window.addEventListener("resize", calculateScroll);

        return () => {
            window.removeEventListener("resize", calculateScroll);
            clearTimeout(timer);
        };
    }, [resumeData]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], xRange);

    return (
        <section
            ref={targetRef}
            className={`relative !bg-background z-10 ${isMobile ? "h-auto px-4 py-12" : ""}`}
            style={{ height: isMobile ? "auto" : sectionHeight }}
        >
            <div className={`${isMobile ? "relative h-auto flex flex-col gap-8" : "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"}`}>
                <div className={`w-full ${isMobile ? "px-0 pb-4" : "px-12 pb-8"}`}>
                    {!isMobile && <><br /><br /><br /></>}
                    <h2>Projects</h2>
                </div>
                <motion.div
                    ref={contentRef}
                    style={isMobile ? { x: 0 } : { x }}
                    className={`${isMobile ? "flex flex-col gap-8 w-full" : "flex gap-8 px-12 w-max"}`}
                >
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className={`${isMobile ? "w-full" : "w-[400px] md:w-[650px] flex-shrink-0"}`}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imageUrl="https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5dc4a5a8f5f4c2572a88_1586191812022-image18.jpg"
                                slug={project.slug}
                                link={project.link}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
