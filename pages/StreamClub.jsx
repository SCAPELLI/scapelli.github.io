import Image from "next/image";
import React from "react";
import StreamClub from "../public/projects/streamclub-header.png";
import Screenshot1 from "../public/projects/streamclub-screenshot1.png";
import Screenshot2 from "../public/projects/streamclub-screenshot2.png";
import Screenshot3 from "../public/projects/streamclub-screenshot3.png";
import Screenshot4 from "../public/projects/streamclub-screenshot4.png";
import Screenshot5 from "../public/projects/streamclub-screenshot5.png";
import Screenshot6 from "../public/projects/streamclub-screenshot6.png";
import Screenshot7 from "../public/projects/streamclub-screenshot7.png";
import Screenshot8 from "../public/projects/streamclub-screenshot8.png";
import Screenshot9 from "../public/projects/streamclub-screenshot9.png";
import Screenshot10 from "../public/projects/streamclub-screenshot10.png";
import Screenshot11 from "../public/projects/streamclub-screenshot11.png";
import Screenshot12 from "../public/projects/streamclub-screenshot12.png";

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
        <YouTube videoId="vhRpTqwU3jo"
          opts={opts} />
      </div>
      <div className="hidden md:block">
        <YouTube videoId="vhRpTqwU3jo"
          opts={opts2} />
      </div>
    </div>
  )
}

const renderScreenshots = () => {
  return (
    <div className="md:flex justify-center items-center md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot1} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot6} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot2} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot7} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot4} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot5} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot8} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot9} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot10} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot11} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4 pr-2">
            <Image src={Screenshot12} alt="/" layout="responsive" width={500} height={300} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={Screenshot3} alt="/" layout="responsive" width={500} height={300} />
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

  const description = t.sections.projects.streamclub.description
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
          src={StreamClub}
          priority="true"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5eded] z-20 p-2">
          <h2 className="py-2">Stream Club (Work in Progress)</h2>
          <h3>TypeScript / React Native / SQL / NodeJs</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 md:grid md:grid-cols-5 gap-8 pt-8">
        
        
        <div className="col-span-4 pb-4">
          <p>{t.sections.projects.singularTitleInProgress}</p>
          <h2>Stream Club</h2>
          <p className="py-2" dangerouslySetInnerHTML={{ __html: description }}>
          </p>

          <h3>Demo</h3>
          {renderVideo()}

          {/* <button className="px-8 py-2 mt-4 mr-8 w-full" onClick={() => window.open("https://scapelli.github.io/MobileAppGuide/", "_blank")}>
              {t.sections.projects.userManual}
          </button> */}

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
                  <RiRadioButtonFill className="pr-1" />TypeScript{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />Node.js{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />React Native{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />SQL{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />MongoDB{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Git{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Figma{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Python{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> scikit-learn{" "}
                </p>
                <p className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Pandas{" "}
                </p>
              </div>
            </div>
          </div>
          
          <button className="px-8 py-2 mt-4 mr-8 w-full" onClick={() => window.open("https://github.com/orgs/StreamClub/repositories", "_blank")}>
            
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
