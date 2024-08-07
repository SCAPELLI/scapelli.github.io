import Wolfenstein from "../../public/projects/wolfestein-thumbnail.png";
import FiuFit from "../../public/projects/fiufit-thumbnail.png";
import MovieBrowser from "../../public/projects/moviebrowser-thumbnail.png";
import TCP from "../../public/projects/tcp-thumbnail1.png";
import HomeSquad from "../../public/projects/homesquad-thumbnail2.png";
import StreamClub from "../../public/projects/streamclub-thumbnail.png";
import ProjectItem from "../ProjectItem";
import React from "react";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";

const index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="projects" className="w-full pt-4">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          {t.sections.projects.title}
        </p>
        <h2 className="py-4">{t.sections.projects.subtitle}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          <ProjectItem
            title="Wolfenstein 3D"
            thumbnail={Wolfenstein}
            projectURL="/Wolfenstein"
            skills={["cpp", "lua"]}
          />

          <ProjectItem
            title="FiuFit"
            thumbnail={FiuFit}
            projectURL="/FiuFit"
            skills={["javascript", "react", "reactnative", "sql"]}
          />

          <ProjectItem
            title="Stream Club (WIP)"
            thumbnail={StreamClub}
            projectURL="/StreamClub"
            skills={["typescript", "reactnative", "sql", "nodejs"]}
          />

          <ProjectItem
            title="Movie Browser"
            thumbnail={MovieBrowser}
            projectURL="/MovieBrowser"
            skills={["ruby", "sql"]}
          />

          <ProjectItem
            title="UDP based File Transfer Protocol"
            thumbnail={TCP}
            projectURL="/TCP"
            skills={["python", "wireshark"]}
          />

          <ProjectItem
            title="HomeSquad"
            thumbnail={HomeSquad}
            projectURL="/HomeSquad"
            skills={["typescript", "reactnative"]}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
