import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const pathCV = locale === "es" ? "/cv-CAPELLI.pdf" : "/cv-en-CAPELLI.pdf";

  const shortDescription = t.sections.home.shortDescription
    .replace(/<red>/g, '<span class="text-[#B11226]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  const description = t.sections.home.description.replace(/\n/g, "<br/>");

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#8B93A1]">
            {t.sections.home.descriptionHeader}
          </p>

          <h2
            className="py-4 text-[#F5F5F5]"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />

          <p
            className="py-4 text-[#B3B3B3] max-w-[70%] m-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-custom-large shadow-black/40 p-6 cursor-pointer text-[#F5F5F5] hover:text-[#B11226] hover:scale-120 ease-in duration-200"
              onClick={() => window.open("https://www.linkedin.com/in/scapelli", "_blank")}
            >
              <FaLinkedinIn size={30} />
            </div>

            <div
              className="rounded-full shadow-custom-large shadow-black/40 p-6 cursor-pointer text-[#F5F5F5] hover:text-[#B11226] hover:scale-120 ease-in duration-200"
              onClick={() => window.open("https://github.com/scapelli", "_blank")}
            >
              <FaGithub size={30} />
            </div>

            <div
              className="group relative rounded-full shadow-custom-large shadow-black/40 p-4 cursor-pointer hover:scale-120 ease-in duration-200"
              onClick={() => window.open(pathCV, "_blank")}
            >
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/cv.png"
                  alt="CV"
                  fill
                  className="
        object-contain transition duration-200
        group-hover:[filter:brightness(0)_saturate(100%)_invert(14%)_sepia(88%)_saturate(6500%)_hue-rotate(345deg)_brightness(90%)_contrast(110%)]
      "
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
