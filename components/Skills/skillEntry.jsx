// components/Skills/skillEntry.jsx
import React from "react";
import Image from "next/image";

const SkillsEntry = ({ logo, label }) => {
  return (
    <div className="p-4 sm:p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src={logo} width={48} height={48} alt={label} />
        <h3 className="text-sm sm:text-base font-medium text-center leading-tight">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default SkillsEntry;
