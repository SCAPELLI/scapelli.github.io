import React from "react";
import Image from "next/image";
import Link from "next/link";

const renderSkills = (skills) => {
  return (
  <div className="grid grid-cols-2 gap-4">
  {skills.map((skill) => (
    <Image
      src={`/skills/${skill}.png`}
      width="64"
      height="64"
      alt="/"
    />
  ))}
  </div>)
}

const index = ({ title, thumbnail, projectURL, skills}) => {
  return (
    <Link href={projectURL} >
      <div className="relative p-2 space-x-8 flex flex-col md:flex-row items-center justify-center md:flex shadow-custom-large shadow-gray-400  justify-center  shadow rounded-xl group hover:scale-105 ease-in duration-200">
      <Image
          className="rounded-xl w-full md:w-auto"
          src={thumbnail}
          loading="lazy"
          width={300}
          quality={100}
          alt={title}
        />
        <div className="items-center pr-4 w-64 flex flex-col items-center justify-center">
          <h2 className="text-center pb-8">{title}</h2>
          <div className="flex justify-center space-x-8">
            {renderSkills(skills)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default index;
