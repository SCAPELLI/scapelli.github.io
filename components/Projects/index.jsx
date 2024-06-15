import CabinnInn from "../../public/CabinnInn.png";
import Wolfenstein from "../../public/projects/wolfestein-thumbnail.png";
import FiuFit from "../../public/projects/fiufit-thumbnail.png";
import MovieBrowser from "../../public/projects/moviebrowser-thumbnail.png";
import TCP from "../../public/projects/tcp-thumbnail.png";
import CountryApp from "../../public/Countryapp.png";
import DadJokes from "../../public/dadjokes.png";
import EnglishDictionary from "../../public/englishdictionary.png";
import Fennex from "../../public/Fennex.png";
import GifsApp from "../../public/Gifsapp.png";
import HomeHero from "../../public/HomeHero.png";
import Lolo from "../../public/Lolo.png";
import Olivia from "../../public/Olivia.png";
import Programa from "../../public/Programa.png";
import ProjectItem from "../ProjectItem";
import React from "react";
import ReactToDo from "../../public/reacttodo.png";
import WeatherApp from "../../public/weatherapp.png";
import YoutubeClone from "../../public/Youtube-clone.png";
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
        </div>
      </div>
    </div>
  );
};

export default index;
