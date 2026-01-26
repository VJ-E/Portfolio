"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Dock from "@/components/Dock";
import { Home, Folder, User, Mail, Github, Linkedin } from "lucide-react";
import { resumeData } from "@/lib/data";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function DockNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = (id: string) => {
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const items = [
        {
            icon: <Home size={24} className="text-neutral-950 dark:text-white" />,
            label: "Home",
            onClick: () => handleScroll("home"),
        },
        {
            icon: <Folder size={24} className="text-neutral-950 dark:text-white" />,
            label: "Projects",
            onClick: () => handleScroll("projects"),
        },
        {
            icon: <User size={24} className="text-neutral-950 dark:text-white" />,
            label: "About",
            onClick: () => handleScroll("about"),
        },
        {
            icon: <Mail size={24} className="text-neutral-950 dark:text-white" />,
            label: "Contact",
            onClick: () => handleScroll("contact"),
        },
        {
            icon: <Github size={24} className="text-neutral-950 dark:text-white" />,
            label: "GitHub",
            onClick: () => window.open(resumeData.profile.github, "_blank"),
        },
        {
            icon: <Linkedin size={24} className="text-neutral-950 dark:text-white" />,
            label: "LinkedIn",
            onClick: () => window.open(resumeData.profile.linkedin, "_blank"),
        },
        {
            icon: <AnimatedThemeToggler className="text-neutral-950 dark:text-white" />,
            label: "Theme",
            onClick: () => { },
        },

    ];

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    );
}


