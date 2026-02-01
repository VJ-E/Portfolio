import ProjectCard from "@/components/ProjectCard";
import { resumeData } from "@/lib/data";

export default function Projects() {
    return (
        <>
            <div className="section small-section">
                <div className="container">
                    <h1>Projects</h1>
                    <div className="subhead">Selected works from my portfolio.</div>
                </div>
            </div>
            <div className="section pattern">
                <div className="container">
                    <div className="w-dyn-list">
                        <div role="list" className="grid-column w-dyn-items">
                            {resumeData.projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    // Using a placeholder or specific image if avail, falling back to pattern
                                    imageUrl={"https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5dc4a5a8f5f4c2572a88_1586191812022-image18.jpg"}
                                    slug={project.slug}
                                    link={project.link}
                                    date={project.year}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
