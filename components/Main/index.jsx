import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const pathCV = locale === "es" ? "/cv-CAPELLI.pdf" : "/cv-en-CAPELLI.pdf"

  const shortDescription = t.sections.home.shortDescription
  .replace(/<red>/g,'<span class="text-[#D72323]">')
  .replace(/<\/red>/g, "</span>")
  .replace(/\n/g, "<br/>");

  const description = t.sections.home.description
  .replace(/\n/g, "<br/>");

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            {t.sections.home.descriptionHeader}
          </p>
          <h2 className="py-4 text-gray-200" dangerouslySetInnerHTML={{ __html: shortDescription }}/>
          
          <p className="py-4 text-gray-500 max-w-[70%] m-auto" dangerouslySetInnerHTML={{ __html: description }}/>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-custom-large shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-200">
              <a
                href="https://www.linkedin.com/in/scapelli"
                target="_blank"
              >
                <FaLinkedinIn size={30}/>
              </a>
            </div>
            <div className="rounded-full shadow-custom-large shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-200">
              <a href="https://github.com/scapelli" target="_blank">
                <FaGithub size={30}/>
              </a>
            </div>

            <div className="rounded-full width-30 height-30 shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200">
              {/* <a
                href={linkCV}
                alt="resume"
                rel="noopener noreferrer"
                download
              > */}
                
                <Image 
                    src="/cv.png" 
                    alt="/" 
                    width={50} 
                    height={50}
                    onClick = {() => router.replace(pathCV)}
                  />
              {/* </a> */}
              {/* <div className="absolute bottom--1 right-0 rounded-full border p-1">
                <BiDownload size={20} />
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
