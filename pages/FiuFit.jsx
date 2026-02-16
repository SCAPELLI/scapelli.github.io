// pages/FiuFit.jsx
import React from "react";
import { useRouter } from "next/router";
import en from "../public/locales/en";
import es from "../public/locales/es";

import ProjectLayout from "../components/Projects/ProjectLayout";
import ProjectVideo from "../components/Projects/ProjectVideo";

import FiuFitHeader from "../public/projects/fiufit-header.png";
import Screenshot1 from "../public/projects/fiufit-screenshot1.png";
import Screenshot2 from "../public/projects/fiufit-screenshot2.png";
import Screenshot3 from "../public/projects/fiufit-screenshot3.png";
import Screenshot4 from "../public/projects/fiufit-screenshot4.png";
import Screenshot5 from "../public/projects/fiufit-screenshot5.png";
import Screenshot6 from "../public/projects/fiufit-screenshot6.png";
import Image from "next/image";

const REPO_URL = "https://github.com/T2-1c2023/.github";
const MANUAL_URL = "https://scapelli.github.io/MobileAppGuide/";

const renderScreenshots = () => (
  <div className="md:flex justify-center items-center md:min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[Screenshot3, Screenshot1, Screenshot5, Screenshot4, Screenshot2, Screenshot6].map((s, idx) => (
        <div key={idx} className="flex justify-center items-center">
          <div className="w-3/4">
            <Image src={s} alt={`FiuFit screenshot ${idx + 1}`} layout="responsive" width={500} height={300} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FiuFitPage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.fiufit.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <ProjectLayout
      t={t}
      title="FiuFit"
      stack="JavaScript / React / React Native / SQL"
      heroImage={FiuFitHeader}
      heroAlt="FiuFit"
      repoUrl={REPO_URL}
      badgeText={t.sections.projects.singularTitle}
      projectName="FiuFit"
      descriptionHtml={descriptionHtml}
      video={<ProjectVideo videoId="VSIAF6OmcTc" />}
      extraActions={
        <button
          className="px-8 py-2 w-full"
          onClick={() => window.open(MANUAL_URL, "_blank")}
          type="button"
        >
          {t.sections.projects.userManual}
        </button>
      }
      screenshots={renderScreenshots()}
      technologies={["JavaScript", "React", "React Native", "SQL", "Git", "Figma", "Firebase"]}
      // tweak si lo necesitás:
      // heroButtonsTopClass="top-10"
      // stickyTop="top-[72px]"
    />
  );
};

export default FiuFitPage;
