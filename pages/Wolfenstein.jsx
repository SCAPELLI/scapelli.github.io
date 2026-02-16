// pages/Wolfenstein.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";
import ProjectVideo from "../components/Projects/ProjectVideo";

import WolfensteinHero from "../public/projects/wolfestein-thumbnail.png";
import Screenshot1 from "../public/projects/wolfenstein-screenshot-1.png";
import Screenshot2 from "../public/projects/wolfenstein-screenshot-2.png";
import Screenshot3 from "../public/projects/wolfenstein-screenshot-3.png";
import Screenshot4 from "../public/projects/wolfenstein-screenshot-4.png";
import Screenshot5 from "../public/projects/wolfenstein-screenshot-5.png";

import en from "../public/locales/en";
import es from "../public/locales/es";

const GITHUB_URL = "https://github.com/SCAPELLI/Wolfenstein3D";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const WolfensteinScreenshots = () => {
  return (
    <div>
      <div className="col-span-2 flex justify-center pb-3">
        <Image src={Screenshot4} alt="Wolfenstein screenshot 4" />
      </div>

      <div className="col-span-2 flex justify-center pb-3">
        <Image className="w-1/2" src={Screenshot3} alt="Wolfenstein screenshot 3" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-between">
          <Image className="w-1/2 pr-2" src={Screenshot2} alt="Wolfenstein screenshot 2" />
          <Image className="w-1/2" src={Screenshot1} alt="Wolfenstein screenshot 1" />
        </div>

        <div className="col-span-2 flex justify-center">
          <Image className="w-1/2" src={Screenshot5} alt="Wolfenstein screenshot 5" />
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
const WolfensteinPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.wolfenstein.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <ProjectLayout
      t={t}
      title="Wolfenstein 3D"
      stack="C++ / Lua"
      heroImage={WolfensteinHero}
      heroAlt="Wolfenstein 3D"
      backHref="/#projects"
      repoUrl={GITHUB_URL}
      badgeText={t.sections.projects.singularTitle}
      projectName="Wolfenstein"
      descriptionHtml={descriptionHtml}
      video={<ProjectVideo videoId="OXZVf4MpouQ" />}
      screenshots={<WolfensteinScreenshots />}
      technologies={["C++", "Lua", "QT", "SDL", "Git"]}
      // defaults OK:
      // stickyTop="top-[72px]"
      // heroButtonsTopClass="top-10"
    />
  );
};

export default WolfensteinPage;
