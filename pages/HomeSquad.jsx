// pages/HomeSquad.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";

import HomeSquadHero from "../public/projects/homesquad-header3.png";
import Screenshot1 from "../public/projects/homesquad-screenshot1.jpg";
import Screenshot2 from "../public/projects/homesquad-screenshot2.jpg";
import Screenshot3 from "../public/projects/homesquad-screenshot3.jpg";
import Screenshot4 from "../public/projects/homesquad-screenshot4.jpg";

import en from "../public/locales/en";
import es from "../public/locales/es";

const REPO_URL = "https://github.com/SCAPELLI/Homesquad";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const HomeSquadScreenshots = () => {
  const shots = [
    { src: Screenshot1, alt: "HomeSquad screenshot 1" },
    { src: Screenshot2, alt: "HomeSquad screenshot 2" },
    { src: Screenshot3, alt: "HomeSquad screenshot 3" },
    { src: Screenshot4, alt: "HomeSquad screenshot 4" },
  ];

  return (
    <div className="md:flex justify-center items-center md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shots.map(({ src, alt }) => (
          <div key={alt} className="flex justify-center items-center">
            <div className="w-3/4">
              <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
const HomeSquadPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.homesquad.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  const extraActions = (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="px-8 py-2 w-full"
        onClick={() => window.open("/projects/homesquad-presentation.pdf", "_blank")}
      >
        Pitch Deck
      </button>

      <button
        type="button"
        className="px-8 py-2 w-full"
        onClick={() => window.open("/projects/homesquad-informe.pdf", "_blank")}
      >
        {t.sections.projects.report}
      </button>
    </div>
  );

  return (
    <ProjectLayout
      t={t}
      title="HomeSquad"
      stack="TypeScript / React Native"
      heroImage={HomeSquadHero}
      heroAlt="HomeSquad"
      backHref="/#projects"
      repoUrl={REPO_URL}
      badgeText={t.sections.projects.singularTitle}
      projectName="HomeSquad"
      descriptionHtml={descriptionHtml}
      extraActions={extraActions}
      screenshots={<HomeSquadScreenshots />}
      technologies={["TypeScript", "React Native", "Firebase", "JSON Server", "Git"]}
    />
  );
};

export default HomeSquadPage;
