"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import BentoGrid from "@/components/bento/BentoGrid";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Flagship Work"
          subtitle="Each project represents a marriage of engineering rigor and design excellence."
        />
        <BentoGrid />
      </div>
    </section>
  );
}
