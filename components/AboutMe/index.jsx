import React from "react";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";
import Image from "next/image";

const index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const description = t.sections.aboutMe.description
  .replace(/\n/g, "<br/>")
  .replace(/<red>/g,'<span class="text-[#D72323]">')
  .replace(/<\/red>/g, "</span>");

  return (
    <div id="about" className="w-full md:h-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ab1c1c]">
            {t.sections.aboutMe.title}
          </p>
          <h2 className="py-4">
            {t.sections.aboutMe.subtitle}
          </h2>
          {/* <p className="py-2 text-gray-600"> These are some things about me </p> */}

          <p className="py-2 text-sl text-gray-500" dangerouslySetInnerHTML={{ __html: description}} />

          
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="image"
          /> */}
          <Image 
            src="/foto.png" 
            alt="/" 
            width={400} 
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
