import React from "react";
import Image from "next/image";
import Link from "next/link";

const renderSkills = (skills) => {
  return skills.map((skill) => (
    <Image
      src={`/skills/${skill}.png`}
      width="64"
      height="64"
      alt="/"
    />
  ));
}

const index = ({ title, thumbnail, projectURL, skills}) => {
  return (
    <Link href={projectURL} >
      <div className="relative p-2 space-x-8 md:flex items-center shadow-custom-large shadow-gray-400 md-w-4/6 justify-center  shadow rounded-xl group hover:scale-105 ease-in duration-200">
        <Image
          className="rounded-xl"
          src={thumbnail}
          loading="lazy"
          height={300}
          quality={50}
          alt={title}
        />
        <div className="items-center pr-4">
          <h2 className="text-center pb-8">Wolfenstein 3D</h2>
          <div className="flex justify-center space-x-8">
            {renderSkills(skills)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default index;
