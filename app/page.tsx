"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard"; // Keep if used? No, replace validation.
import ProjectsScroll from "@/components/ProjectsScroll";
import BlogList from "@/components/BlogList";
import CPStats from "@/components/CPStats";
import Experience from "@/components/Experience";
import SkillsList from "@/components/SkillsList";
import AboutSection from "@/components/AboutSection";
import { resumeData } from "@/lib/data";
import TextBulrUp from "@/components/TextBulrUp";
import PeekingCharacter from "@/components/PeekingCharacter";
import Certifications from "@/components/Certifications";
import GithubSection from "@/components/GithubSection";

export default function Home() {
  return (
    <>
      <div className="section hero-section relative overflow-hidden" id="home">
        <div className="container relative z-10">
          <div className="grid-hero">
            <div>
              <TextBulrUp
                text="Hello!"
                className="heading-jumbo block"
                as="h1"
              />
              <TextBulrUp
                text={`I'm ${resumeData.profile.name.split(" ")[0]}.`}
                className="heading-jumbo block"
                as="h1"
                delay={0.5}
              />
              <div className="subhead space-bottom-36">
                <br />
                <TextBulrUp text={resumeData.profile.oneliner1} delay={1.5} />
                <br />
                <TextBulrUp text={resumeData.profile.oneliner2} delay={2.5} />
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href={resumeData.profile.github} target="_blank" className="button w-button bg-foreground text-background border-foreground lift-on-hover w-full md:w-auto text-center justify-center">GitHub</a>
                <a href={resumeData.profile.resume_link} target="_blank" className="button w-button lift-on-hover w-full md:w-auto text-center justify-center">Resume</a>
              </div>
            </div>
          </div>
        </div>
        {/* Peeking Character */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[45%] rotate-[-25deg] z-20 hidden lg:block pointer-events-auto">
          <PeekingCharacter className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]" />
        </div>
      </div>

      <div id="about">
        <AboutSection />
      </div>


      <div id="projects" className="relative">
        <ProjectsScroll />
        <div className="container flex justify-end pb-12">
          <Link href="/projects" className="text-lg font-medium hover:underline text-foreground inline-flex items-center gap-1">
            Show more <span>→</span>
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div className="section">
        <div className="container">
          <h2>Experience</h2>
          <br />
          <Experience />
        </div>
      </div>

      <Certifications />

      {/* Skills Section */}
      <div className="section">
        <div className="container">
          <h2>Skills</h2>
          <br />
          <SkillsList />
        </div>
      </div>

      {/* Github Section */}
      <GithubSection />

      {/* CP Stats Section */}
      <div className="section">
        <div className="container">
          <h2>Competitive Programming</h2>
          {/* <p className="subhead">Rankings & Stats</p> */}
          <CPStats />
        </div>
      </div>

      <div className="section" id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p className="subhead">Let's Get in Touch</p>
          <div className="flex gap-4">
            <Link href="/contact" className="button w-button lift-on-hover">Contact Form</Link>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeData.profile.email}`} target="_blank" className="button w-button bg-foreground text-background border-foreground lift-on-hover">Email Me</a>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="text-lg font-medium hover:underline text-foreground inline-flex items-center gap-1">
              Show more <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
