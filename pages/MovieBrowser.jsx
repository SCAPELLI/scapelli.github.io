import Image from "next/image";
import React from "react";
import FiuFit from "../public/projects/moviebrowser-thumbnail.png";
import Screenshot1 from "../public/projects/moviebrowser-screenshot1.png";
import Screenshot2 from "../public/projects/moviebrowser-screenshot2.png";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import en from "../public/locales/en";
import es from "../public/locales/es";

const renderVideo = () => {
  const opts = {
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  const opts2 = {
    width: "500",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className=" flex justify-center">
      <div className="md:hidden">
        <YouTube videoId="wFEBdb3LlfI"
          opts={opts} />
      </div>
      <div className="hidden md:block">
        <YouTube videoId="wFEBdb3LlfI"
          opts={opts2} />
      </div>
    </div>
  )
}

const renderScreenshots = () => {
  return (
    <div className="md:flex justify-center items-center md:min-h-screen">
      <div className="grid grid-cols-1  gap-8">
        <div className="flex justify-center items-center">
          <div className="w-full pr-2">
            <Image src={Screenshot1} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full">
            <Image src={Screenshot2} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}



const index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const pathCV = locale === "es" ? "/cv-CAPELLI.pdf" : "/cv-en-CAPELLI.pdf"

  const description = t.sections.projects.moviebrowser.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <div className="w-full bg-gradient-to-b from-black to-red-900">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20" />
        <Image
          className="absolute z-10"
          layout="fill"
          objectFit="cover"
          src={FiuFit}
          priority="true"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5eded] z-20 p-2">
          <h2 className="py-2">Movie Browser</h2>
          <h3>Ruby / Ruby on Rails / SQL</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 md:grid md:grid-cols-5 gap-8 pt-8">
        
        
        <div className="col-span-4 pb-4">
          <p>{t.sections.projects.singularTitle}</p>
          <h2>Movie Browser</h2>
          <p className="py-2" dangerouslySetInnerHTML={{ __html: description }}>
          </p>

          <h3>Demo</h3>
          {renderVideo()}

          <h3 className="pt-8">{t.sections.projects.screenshots}</h3>
          {renderScreenshots()}

        </div>



        <div className="justify-center ">

          <div className="col-span-4 md:col-span-1 shadow shadow-gray-600 rounded-xl p-4 ">

            <div className="p-2 ">

              <p className="uppercase text-center font-bold pb-2">
                {t.sections.projects.technologies}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />The Movie DataBase API{" "}
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />SQL{" "}
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />Ruby{" "}
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />Ruby on Rails{" "}
                </p>
              </div>
            </div>
          </div>
          
          <button className="px-8 py-2 mt-4 mr-8 w-full" onClick={() => window.open("https://github.com/SCAPELLI/Teoria-del-lenguaje", "_blank")}>
            
              {t.sections.projects.repository}
            
          </button>
          
        </div>




        <Link href="/#projects">
          <p className="underline cursor-pointer hidden md:block">{t.sections.projects.back}</p>
        </Link>
      </div>
    </div>
  );
};

export default index;
