// pages/StreamClub.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";
import ProjectVideo from "../components/Projects/ProjectVideo";

import StreamClubHero from "../public/projects/streamclub-header.png";
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

import en from "../public/locales/en";
import es from "../public/locales/es";

const REPO_URL = "https://github.com/orgs/StreamClub/repositories";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const StreamClubScreenshots = () => {
  const shots = [
    { src: Screenshot1, alt: "StreamClub screenshot 1" },
    { src: Screenshot6, alt: "StreamClub screenshot 6" },
    { src: Screenshot2, alt: "StreamClub screenshot 2" },
    { src: Screenshot7, alt: "StreamClub screenshot 7" },
    { src: Screenshot4, alt: "StreamClub screenshot 4" },
    { src: Screenshot5, alt: "StreamClub screenshot 5" },
    { src: Screenshot8, alt: "StreamClub screenshot 8" },
    { src: Screenshot9, alt: "StreamClub screenshot 9" },
    { src: Screenshot10, alt: "StreamClub screenshot 10" },
    { src: Screenshot11, alt: "StreamClub screenshot 11" },
    { src: Screenshot12, alt: "StreamClub screenshot 12" },
    { src: Screenshot3, alt: "StreamClub screenshot 3" },
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
const StreamClubPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.streamclub.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <ProjectLayout
      t={t}
      title="Stream Club (Work in Progress)"
      stack="TypeScript / React Native / SQL / Node.js"
      heroImage={StreamClubHero}
      heroAlt="Stream Club"
      backHref="/#projects"
      repoUrl={REPO_URL}
      badgeText={t.sections.projects.singularTitleInProgress}
      projectName="Stream Club"
      descriptionHtml={descriptionHtml}
      video={<ProjectVideo videoId="vhRpTqwU3jo" />}
      screenshots={<StreamClubScreenshots />}
      technologies={[
        "TypeScript",
        "Node.js",
        "React Native",
        "SQL",
        "MongoDB",
        "Git",
        "Figma",
        "Python",
        "scikit-learn",
        "Pandas",
      ]}
    />
  );
};

export default StreamClubPage;
