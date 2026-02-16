// componentes/AboutMe/index.jsx
import React from "react";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import Image from "next/image";

const toHtml = (raw) => {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "<br/>")
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/<h4x>/g, '<span class="text-lg font-semibold">')
    .replace(/<\/h4x>/g, "</span>");
};

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const currentJobs = t.sections.aboutMe.currentJobs
    .replace(/\n/g, "<br/>")
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>");

  const college = t.sections.aboutMe.college
    .replace(/\n/g, "<br/>")
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")

  return (<>
    <div id="about" className="w-full md:h-full p-2 flex items-center py-2">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ab1c1c]">
            {t.sections.aboutMe.title}
          </p>
          <h2 className="py-4">
            {t.sections.aboutMe.subtitle}
          </h2>

          <div className="py-2 text-sl text-gray-500" dangerouslySetInnerHTML={{ __html: toHtml(t.sections.aboutMe.currentJobs) }} />


        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/foto-circular.png"
            alt="/"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>

    <div id="about" className="w-full md:h-full p-2 py-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1 order-1 md:order-2">
          <div className="py-2 text-sl text-gray-500" dangerouslySetInnerHTML={{ __html: toHtml(t.sections.aboutMe.college) }} />
        </div>

        <div className="col-span-2 order-2 md:order-1 w-full h-auto m-auto rounded-xl flex items-center justify-center md:justify-start p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            src="/titulo.png"
            alt="Formación"
            width={2000}
            height={1623}
            className="w-full h-auto max-w-[600px] rounded-xl"
          />
        </div>

      </div>
    </div>

    <div id="about" className="w-full md:h-full p-2 py-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3">
          <div className="py-2 text-sl text-gray-500" dangerouslySetInnerHTML={{ __html: toHtml(t.sections.aboutMe.previousJobs) }} />
        </div>
      </div>
    </div>

    <div id="about" className="w-full md:h-full p-2 flex items-center py-2">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3">
          <div className="py-2 text-sl text-gray-500" dangerouslySetInnerHTML={{ __html: toHtml(t.sections.aboutMe.personalInterests) }} />
        </div>
      </div>
    </div>

  </>
  );
};

export default Index;
