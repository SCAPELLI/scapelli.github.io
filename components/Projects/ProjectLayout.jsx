// components/Projects/ProjectLayout.jsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiArrowLeftLine, RiExternalLinkLine, RiRadioButtonFill } from "react-icons/ri";

const ProjectLayout = ({
  // routing / i18n
  t,

  // header
  title,
  stack,

  // hero image
  heroImage,
  heroAlt,

  // links
  backHref = "/#projects",
  repoUrl,

  // text content (already html)
  badgeText, // e.g. t.sections.projects.singularTitle
  projectName, // e.g. "Wolfenstein"
  descriptionHtml,

  // optional sections
  video, // ReactNode
  extraActions, // ReactNode (e.g. manual button)
  screenshots, // ReactNode

  // sidebar tech list
  technologies = [], // array of strings

  // tweak points
  stickyTop = "top-[72px]",
  heroButtonsTopClass = "top-10",
}) => {
  const [isCompactHeader, setIsCompactHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompactHeader(window.scrollY > 140);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black to-red-900">
      {/* Compact header */}
      <div
        className={[
          "sticky z-40",
          stickyTop,
          "transition-all duration-200",
          isCompactHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1240px] px-2">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 backdrop-blur-md px-3 py-2 shadow-lg">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5eded] hover:text-white transition"
            >
              <RiArrowLeftLine className="text-lg" />
              {t.sections.projects.back}
            </Link>

            <div className="min-w-0 flex flex-col items-center text-center px-3">
              <span className="truncate text-sm font-semibold text-[#f5eded]">{title}</span>
              <span className="text-xs text-[#f5eded]/70">{stack}</span>
            </div>

            {repoUrl ? (
              <button
                type="button"
                onClick={() => window.open(repoUrl, "_blank")}
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-black/30 hover:bg-black/40 text-[#f5eded] transition"
              >
                <RiExternalLinkLine className="text-lg" />
                {t.sections.projects.repository}
              </button>
            ) : (
              <div className="w-[140px]" />
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20" />

        <Image
          className="absolute z-10"
          layout="fill"
          objectFit="cover"
          src={heroImage}
          priority={true}
          alt={heroAlt || title}
        />

        {/* Buttons inside hero */}
        <div className={`absolute z-30 ${heroButtonsTopClass} left-4 right-4`}>
          <div className="mx-auto max-w-[1240px] w-full flex items-center justify-between">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold
                         px-4 py-2 rounded-full border border-white/10
                         bg-black/30 hover:bg-black/40 transition text-[#f5eded]"
            >
              <RiArrowLeftLine className="text-lg" />
              {t.sections.projects.back}
            </Link>

            {repoUrl ? (
              <button
                type="button"
                onClick={() => window.open(repoUrl, "_blank")}
                className="inline-flex items-center gap-2 text-sm font-semibold
                           px-4 py-2 rounded-full border border-white/10
                           bg-black/30 hover:bg-black/40 transition text-[#f5eded]"
              >
                <RiExternalLinkLine className="text-lg" />
                {t.sections.projects.repository}
              </button>
            ) : null}
          </div>
        </div>

        {/* Hero title */}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5eded] z-20 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{stack}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1240px] mx-auto p-2 md:grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 pb-4">
          <p>{badgeText}</p>
          <h2>{projectName}</h2>

          <p className="py-2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />

          {video ? (
            <>
              <h3>Demo</h3>
              {video}
            </>
          ) : null}

          {extraActions ? <div className="mt-4">{extraActions}</div> : null}

          {screenshots ? (
            <>
              <h3 className="pt-8">{t.sections.projects.screenshots}</h3>
              {screenshots}
            </>
          ) : null}
        </div>

        {/* Sidebar tech */}
        <div className="justify-center">
          <div className="col-span-4 md:col-span-1 shadow shadow-gray-600 rounded-xl p-4">
            <div className="p-2">
              <p className="uppercase text-center font-bold pb-2">{t.sections.projects.technologies}</p>

              <div className="grid grid-cols-3 md:grid-cols-1">
                {technologies.map((tech) => (
                  <p key={tech} className="py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* No back link here; it's in hero + sticky */}
      </div>
    </div>
  );
};

export default ProjectLayout;
