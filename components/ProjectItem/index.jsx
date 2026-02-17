// components/ProjectItem/index.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SkillsRow = ({ skills }) => (
  <div className="flex items-center gap-2 flex-wrap justify-end">
    {skills.map((skill) => (
      <div
        key={skill}
        className="
          w-9 h-9
          rounded-lg
          bg-[#C9CED6]
          border border-black/10
          flex items-center justify-center
          shadow-sm shadow-black/10
        "
        title={skill}
      >
        <Image
          src={`/skills/${skill}.png`}
          width={22}
          height={22}
          alt={skill}
          className="select-none"
        />
      </div>
    ))}
  </div>
);

const ProjectItem = ({ title, thumbnail, projectURL, skills }) => {
  return (
    <Link href={projectURL} className="block">
      <div
        className="
          w-full overflow-hidden rounded-xl
          border border-white/10
          shadow-lg shadow-black/40
          group hover:scale-[1.02]
          transition-transform duration-200
          bg-[#0F1115]
        "
      >
        {/* Imagen con alto fijo para que todas las cards ocupen similar espacio */}
        <div className="relative w-full h-80 md:h-96 bg-black">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain md:object-cover object-center md:object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
        </div>


        {/* Footer claro (surface) */}
        <div
          className="
            px-4 py-3
            flex items-center justify-between gap-4
            bg-[#C9CED6]
            border-t border-black/10
          "
        >
          <h3 className="text-base font-semibold leading-tight text-[#111827]">
            {title}
          </h3>

          <SkillsRow skills={skills} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
