// components/ProjectItem/index.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SkillsRow = ({ skills }) => (
  <div className="flex items-center gap-2">
    {skills.map((skill) => (
      <Image
        key={skill}
        src={`/skills/${skill}.png`}
        width={28}
        height={28}
        alt={skill}
      />
    ))}
  </div>
);

const ProjectItem = ({ title, thumbnail, projectURL, skills }) => {
  return (
    <Link href={projectURL} className="block">
      <div className="w-full overflow-hidden rounded-xl shadow-custom-large shadow-gray-400 group hover:scale-[1.02] transition-transform duration-200">
        {/* Imagen con alto fijo para que todas las cards ocupen similar espacio */}
        <div className="relative w-full h-96">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        </div>

        {/* Footer compacto */}
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          <SkillsRow skills={skills} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
