// pages/MovieBrowser.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectLayout from "../components/Projects/ProjectLayout";
import ProjectVideo from "../components/Projects/ProjectVideo";

import MovieBrowserHero from "../public/projects/moviebrowser-thumbnail.png";
import Screenshot1 from "../public/projects/moviebrowser-screenshot1.png";
import Screenshot2 from "../public/projects/moviebrowser-screenshot2.png";

import en from "../public/locales/en";
import es from "../public/locales/es";

const REPO_URL = "https://github.com/SCAPELLI/Teoria-del-lenguaje";

// -----------------------------------------------------------------------------
// Screenshots (JSX)
// -----------------------------------------------------------------------------
const MovieBrowserScreenshots = () => {
  const shots = [
    { src: Screenshot1, alt: "Movie Browser screenshot 1" },
    { src: Screenshot2, alt: "Movie Browser screenshot 2" },
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
const MovieBrowserPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const descriptionHtml = t.sections.projects.moviebrowser.description
    .replace(/<red>/g, '<span class="text-[#D72323]">')
    .replace(/<\/red>/g, "</span>")
    .replace(/\n/g, "<br/>");

  return (
    <ProjectLayout
      t={t}
      title="Movie Browser"
      stack="Ruby / Ruby on Rails / SQL"
      heroImage={MovieBrowserHero}
      heroAlt="Movie Browser"
      backHref="/#projects"
      repoUrl={REPO_URL}
      badgeText={t.sections.projects.singularTitle}
      projectName="Movie Browser"
      descriptionHtml={descriptionHtml}
      video={<ProjectVideo videoId="wFEBdb3LlfI" />}
      screenshots={<MovieBrowserScreenshots />}
      technologies={["The Movie Database API", "SQL", "Ruby", "Ruby on Rails"]}
    />
  );
};

export default MovieBrowserPage;
