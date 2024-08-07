import React from "react";
import Image from "next/image";
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
          {t.sections.certificates.title}
        </p>
        <h2 className="py-4">{t.sections.certificates.courses}</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" > */}
          <div className="p-6 shadow-xl rounded-xl hover:cursor-pointer hover:scale-105 ease-in duration-300" onClick={() => window.open("https://collectors.poap.xyz/token/7142043", "_blank")}>

            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/certificates/bootcamp-chainlink.png"}
                  width="200"
                  height="200"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="pb-2">CHAINLINK BOOTCAMP APRIL 2024</h3>
                <p>{t.sections.certificates.chainlink}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default index;
