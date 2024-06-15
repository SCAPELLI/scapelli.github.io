import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import skillsEntry from "./skillEntry";

const index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="skills" className="w-full lg:h-full pt-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          {t.sections.skills.title}
        </p>
        <h2 className="py-4">
          {t.sections.skills.subtitle1}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-4">
          {skillsEntry({ logo: "/skills/csharp.png", label: "C#" })}
          {skillsEntry({ logo: "/skills/foxpro.png", label: "Visual Fox Pro" })}
          {skillsEntry({ logo: "/skills/python.png", label: "Python" })}
          {skillsEntry({ logo: "/skills/html.png", label: "HTML" })}
          {skillsEntry({ logo: "/skills/javascript.png", label: "JavaScript" })}
          {skillsEntry({ logo: "/skills/typescript.png", label: "TypeScript" })}
          {skillsEntry({ logo: "/skills/react.png", label: "React" })}
          {skillsEntry({ logo: "/skills/reactnative.png", label: "React Native" })}
          {skillsEntry({ logo: "/skills/sql.png", label: "SQL" })}
        </div>
        <h2 className="py-4">
          {t.sections.skills.subtitle2}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-4">
          {skillsEntry({ logo: "/skills/git.png", label: "Git" })}
          {skillsEntry({ logo: "/skills/github.png", label: "GitHub" })}
          {skillsEntry({ logo: "/skills/postman.png", label: "Postman" })}
          {skillsEntry({ logo: "/skills/dotnet.png", label: ".NET" })}
          {skillsEntry({ logo: "/skills/swagger.png", label: "Swagger" })}
          {skillsEntry({ logo: "/skills/linux.png", label: "Linux" })}
          {skillsEntry({ logo: "/skills/uml.png", label: "UML" })}
          {skillsEntry({ logo: "/skills/gimp.png", label: "Gimp" })}
          {skillsEntry({ logo: "/skills/figma.png", label: "Figma" })}
        </div>
        <h2 className="py-4">
          Experiencia ocasional
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-4">
          {skillsEntry({ logo: "/skills/c.png", label: "C" })}
          {skillsEntry({ logo: "/skills/cpp.png", label: "C++" })}
          {skillsEntry({ logo: "/skills/nodejs.png", label: "NodeJs" })}
          {skillsEntry({ logo: "/skills/nextjs2.png", label: "NextJs" })}
          {skillsEntry({ logo: "/skills/java.png", label: "Java" })}
          {skillsEntry({ logo: "/skills/clojure.png", label: "Clojure" })}
          {skillsEntry({ logo: "/skills/solidity.png", label: "Solidity" })}
          {skillsEntry({ logo: "/skills/ruby.png", label: "Ruby on Rails" })}
          {skillsEntry({ logo: "/skills/rust.png", label: "Rust" })}
          {skillsEntry({ logo: "/skills/smalltalk.png", label: "Pharo SmallTalk" })}
          {skillsEntry({ logo: "/skills/wireshark.png", label: "Wireshark" })}
        </div>
      </div>
    </div>
  );
};

export default index;
