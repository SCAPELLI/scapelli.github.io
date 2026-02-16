// pages/TCP.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";

import TCPHero from "../public/projects/tcp-header.png";
import Screenshot1 from "../public/projects/tcp-screenshot1.png";
import Screenshot2 from "../public/projects/tcp-screenshot2.png";
import Screenshot3 from "../public/projects/tcp-screenshot3.png";
import Screenshot4 from "../public/projects/tcp-screenshot4.png";
import Screenshot5 from "../public/projects/tcp-screenshot5.png";
import Screenshot6 from "../public/projects/tcp-screenshot6.png";

import en from "../public/locales/en";
import es from "../public/locales/es";

const REPO_URL = "https://github.com/SCAPELLI/intro-distribuidos-TP1.git";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const TCPScreenshots = () => {
  const shots = [
    { src: Screenshot6, alt: "TCP screenshot 6" },
    { src: Screenshot1, alt: "TCP screenshot 1" },
    { src: Screenshot2, alt: "TCP screenshot 2" },
    { src: Screenshot3, alt: "TCP screenshot 3" },
    { src: Screenshot4, alt: "TCP screenshot 4" },
    { src: Screenshot5, alt: "TCP screenshot 5" },
  ];

  return (
    <div className="md:flex justify-center items-center md:min-h-screen">
      <div className="grid grid-cols-1 gap-8">
        {shots.map(({ src, alt }) => (
          <div key={alt} className="flex justify-center items-center">
            <div className="w-full">
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
const TCPPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.tcp.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  const reportButton = (
    <button
      className="px-8 py-2 w-full"
      onClick={() => window.open("/projects/informe-tcp.pdf", "_blank")}
      type="button"
    >
      {t.sections.projects.report}
    </button>
  );

  return (
    <ProjectLayout
      t={t}
      title="UDP based File Transfer Protocol"
      stack="Python / Wireshark"
      heroImage={TCPHero}
      heroAlt="UDP based File Transfer Protocol"
      backHref="/#projects"
      repoUrl={REPO_URL}
      badgeText={t.sections.projects.singularTitle}
      projectName="UDP based File Transfer Protocol"
      descriptionHtml={descriptionHtml}
      extraActions={reportButton}
      screenshots={<TCPScreenshots />}
      technologies={["Python", "TCP/IP", "UDP", "Wireshark", "Git"]}
    />
  );
};

export default TCPPage;
