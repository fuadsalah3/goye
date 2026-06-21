"use client";

import EliteMerkatoCard from "./EliteMerkatoCard";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/constants";

export default function BentoGrid() {
  const smallProjects = projects.filter((p) => p.id !== "elite-merkato");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <EliteMerkatoCard />

      {smallProjects.map((project, i) => (
        <div
          key={project.id}
          className={project.size === "wide" ? "col-span-2" : "col-span-1"}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
