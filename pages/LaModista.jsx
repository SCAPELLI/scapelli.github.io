// pages/Wolfenstein.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";
import ProjectVideo from "../components/Projects/ProjectVideo";

import LaModistaHero from "../public/projects/lamodista-header.jpeg";
import Screenshot1 from "../public/projects/lamodista-screenshot-1.png";
import Screenshot2 from "../public/projects/lamodista-screenshot-2.png";
import Screenshot3 from "../public/projects/lamodista-screenshot-3.png";
import Screenshot4 from "../public/projects/lamodista-screenshot-4.png";
import Screenshot5 from "../public/projects/wolfenstein-screenshot-5.png";

import en from "../public/locales/en";
import es from "../public/locales/es";

const GITHUB_URL = "https://github.com/SCAPELLI/soluciones-textiles";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const LaModistaScreenshots = () => {
  return (
    <div>
      <div className="col-span-2 flex justify-center pb-3">
        <Image src={Screenshot1} alt="La Modista screenshot 1" />
      </div>

      <div className="col-span-2 flex justify-center pb-3">
        <Image src={Screenshot4} alt="La Modista screenshot 4" />
      </div>

      <div className="col-span-2 flex justify-center pb-3">
        <Image src={Screenshot3} alt="La Modista screenshot 3" />
      </div>

      <div className="col-span-2 flex justify-center pb-3">
        <Image src={Screenshot2} alt="La Modista screenshot 2" />
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
const LaModistaPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const extraActions = (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="px-8 py-2 w-full"
        onClick={() => window.open("https://lamodista.com.ar", "_blank")}
      >
        Visitar Sitio Web
      </button>
    </div>
  );

  const descriptionHtml = t.sections.projects.lamodista.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <ProjectLayout
      t={t}
      title="La Modista"
      stack="JavaScript / Next.js"
      heroImage={LaModistaHero}
      heroAlt="La Modista"
      backHref="/#projects"
      repoUrl={GITHUB_URL}
      badgeText={t.sections.projects.freelanceTitle}
      projectName="La Modista"
      descriptionHtml={descriptionHtml}
      screenshots={<LaModistaScreenshots />}
      technologies={["JavaScript", "Next.js", "Git", "Google Maps API"]}
      extraActions={extraActions}
      // defaults OK:
      // stickyTop="top-[72px]"
      // heroButtonsTopClass="top-10"
    />
  );
};

export default LaModistaPage;
