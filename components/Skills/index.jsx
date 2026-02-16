// components/Skills/index.jsx
import React from "react";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import skillsEntry from "./skillEntry";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="skills" className="w-full lg:h-full pt-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          {t.sections.skills.title}
        </p>
        <span className="py-4 font-bold text-xl">
          {t.sections.skills.subtitle1}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 pb-4">
          {skillsEntry({ logo: "/skills/python.png", label: "Python" })}
          {skillsEntry({ logo: "/skills/flask.png", label: "Flask" })}
          {skillsEntry({ logo: "/skills/sqlalchemy.png", label: "SQLAlchemy" })}
          {skillsEntry({ logo: "/skills/mysql.png", label: "MySQL" })}
          {skillsEntry({ logo: "/skills/aws.png", label: "AWS" })}
          {skillsEntry({ logo: "/skills/docker.png", label: "Docker" })}
          {skillsEntry({ logo: "/skills/pandas.png", label: "Pandas" })}
          {skillsEntry({ logo: "/skills/react.png", label: "React" })}
          {skillsEntry({ logo: "/skills/nextjs2.png", label: "Next.js" })}
          {skillsEntry({ logo: "/skills/typescript.png", label: "TypeScript" })}
        </div>
        <span className="py-4 font-bold text-xl">
          {t.sections.skills.subtitle2}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 pb-4">
          {skillsEntry({ logo: "/skills/nodejs.png", label: "Node.js" })}
          {skillsEntry({ logo: "/skills/reactnative.png", label: "React Native" })}
          {skillsEntry({ logo: "/skills/csharp.png", label: "C#" })}
          {skillsEntry({ logo: "/skills/dotnet.png", label: ".NET" })}
          {skillsEntry({ logo: "/skills/foxpro.png", label: "Visual Fox Pro" })}
          {skillsEntry({ logo: "/skills/java.png", label: "Java" })}
          {skillsEntry({ logo: "/skills/clojure.png", label: "Clojure" })}
          {skillsEntry({ logo: "/skills/solidity.png", label: "Solidity" })}
          {skillsEntry({ logo: "/skills/c.png", label: "C" })}
          {skillsEntry({ logo: "/skills/cpp.png", label: "C++" })}
          {skillsEntry({ logo: "/skills/rust.png", label: "Rust" })}
          {skillsEntry({ logo: "/skills/figma.png", label: "Figma" })}
        </div>
      </div>
    </div>
  );
};

export default Index;
