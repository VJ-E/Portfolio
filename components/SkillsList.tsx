"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function SkillsList() {
    const categories = Object.keys(resumeData.skills) as Array<keyof typeof resumeData.skills>;

    return (
        <div className="skills-container">
            {categories.map((category, index) => (
                <motion.div
                    key={category}
                    className="skill-category flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h4 className="skill-category-title capitalize">{category}</h4>
                    <div className="skill-tags justify-center">
                        {resumeData.skills[category].map((skill) => (
                            <span key={skill} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
