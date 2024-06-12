import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ title, backgroundImg, technologies, projectURL }) => {
  return (
    // <Link href={projectURL} >
      <div className="relative p-2 space-x-8 md:flex items-center shadow-custom-large shadow-gray-400 md-w-4/6 justify-center  shadow rounded-xl group hover:scale-105">
        <Image
          className="rounded-xl"
          src={backgroundImg}
          loading="lazy"
          height={300}
          quality={50}
          alt={title}
        />
        <div className="items-center pr-4">
          <h2 className="text-center pb-8">Wolfenstein 3D</h2>
          <div className="flex justify-center space-x-8">

          <Image
            src={"/skills/cpp.png"}
            width="64"
            height="64"
            alt="/"
            className="w-16 h-16 lg:w-20 lg:h-20"
            />
          <Image
            src={"/skills/lua.png"}
            width="64"
            height="64"
            alt="/"
            className="w-16 h-16 lg:w-20 lg:h-20"
            />
          </div>
        </div>
        {/* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-white text-center">{technologies}</p>
        <Link href={projectURL}>
          <p className="text-center py-2 rounded-lg bg-[#f5eded] text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div> */}
      </div>
    // </Link>
  );
};

export default index;
