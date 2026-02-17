// components/Skills/skillEntry.jsx
import React from "react";
import Image from "next/image";

const SkillsEntry = ({ logo, label }) => {
  return (
    <div
      className="
        p-4 sm:p-5
        rounded-xl
        bg-[#C9CED6]
        border border-black/10
        shadow-lg shadow-black/20
        hover:scale-105
        hover:border-[#B11226]/40
        transition-all duration-300
      "
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={logo}
          width={48}
          height={48}
          alt={label}
          className="select-none"
        />

        <h3 className="text-sm sm:text-base font-medium text-center leading-tight text-[#111827]">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default SkillsEntry;
