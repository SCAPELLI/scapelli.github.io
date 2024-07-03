import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import en from "../../public/locales/en";
import es from "../../public/locales/es";


function index() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#111111");
  const [linkColor, setLinkColor] = useState("#f5eded");
  const Router = useRouter();

  useEffect(() => {
    if (
      Router.asPath === "/Lolo" ||
      Router.asPath === "/Fennex" ||
      Router.asPath === "/Sweet-Olivia" ||
      Router.asPath === "/CabinnInn"
    ) {
      setNavBg("transparent");
      setLinkColor("#f5eded");
    } else {
      setNavBg("#111111");
      setLinkColor("#f5eded");
    }
  }, [Router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const pathCV = locale === "es" ? "/cv-CAPELLI.pdf" : "/cv-en-CAPELLI.pdf"

  const scale = 16
  return (
    <div
      style={{ backgroundColor: `${"#111111"}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-sm z-[100] bg-[#111111]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" className="flex items-center">
          <Image 
            src="/avatar.png" 
            alt="/" 
            width={1216/scale} 
            height={1693/scale}

          />
          <p className="text-[#d72323] text-xl ml-4">
            Sebastián Capelli &lt;/&gt;
          </p>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b py-2">
                {t.sections.home.title}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b py-2">
                {t.sections.aboutMe.title}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b py-2">
                {t.sections.skills.title}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b py-2">
                {t.sections.projects.title}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b py-2">
              {t.sections.contact.title}
              </li>
            </Link>
            <Link href="/" locale={locale === "en" ? "es" : "en"} >
              <li className="ml-10 text-sm uppercase last:border-2 last:border-customRed p-2 last:rounded-lg">
                {locale}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <p className="text-[#d72323] text-base ">
                  Sebastián Capelli &lt;/&gt;
                </p>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose color="black" />
              </div>
            </div>
            <div className="border-b border-gray-300 mt-9 text-black"/>
              {/* <p className=" w-[85%] md:w-[90%] py-4"> Idioma</p> */}
            
          </div>
          <div>
            <div className="text-black py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    {t.sections.home.title}
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t.sections.aboutMe.title}
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t.sections.skills.title}
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t.sections.projects.title}
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t.sections.contact.title}
                  </li>
                </Link>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#D72323]">
                  {t.letsConnect}
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div
                    className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200 inline-block m-4"
                    onClick={() => window.open("https://www.linkedin.com/in/scapelli", "_blank")}
                  >
                    <FaLinkedinIn size={30} />
                  </div>

                  {/* <div
                    className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200 inline-block m-4"
                    onClick={() => window.open("https://github.com/scapelli", "_blank")}
                  >
                    <FaGithub size={30} />
                  </div> */}

                  <div
                    className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200 inline-block m-4"
                    onClick={() => window.open(pathCV, "_blank")}
                  >
                    <Image 
                        src="/cv-black.png" 
                        alt="/" 
                        width={30} 
                        height={30}
                      />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-7 left-0 mr-4 mb-4">
                <Image 
                  src="/avatar.png" 
                  alt="/" 
                  width={1216/scale} 
                  height={1693/scale}
                  
                />
              </div>

              <div className="absolute bottom-7 right-0 mr-4 mb-4">
                <ul className="uppercase">
                  <Link href="/" locale={locale === "en" ? "es" : "en"}>
                    <li className="py-4 text-sm">
                      {t.language}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
